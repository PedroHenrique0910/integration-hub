import * as productRepository from '../repositories/product.repository';
import * as telegramService from './telegram.service';
import { Product } from '../types/product.types';

export async function createProduct(
  data: Omit<Product, 'id' | 'createdAt'>
): Promise<number> {
  return productRepository.create(data);
}

export async function getAllProducts(): Promise<Product[]> {
  return productRepository.findAll();
}

export async function simulatePriceDrop(id: number): Promise<Product | null> {
  const product = await productRepository.findById(id);

  if (!product) {
    return null;
  }

  const newPrice = product.currentPrice * 0.9;

  await productRepository.updatePrice(id, newPrice);

  const message = `📉 ${product.name} caiu de R$${product.currentPrice} para R$${newPrice.toFixed(2)}!`;
  await telegramService.sendMessage(message);

  return {
    ...product,
    currentPrice: newPrice,
  };
}