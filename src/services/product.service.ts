import * as productRepository from '../repositories/product.repository';
import { Product } from '../types/product.types';

export async function createProduct(
  data: Omit<Product, 'id' | 'createdAt'>
): Promise<number> {
  return productRepository.create(data);
}

export async function getAllProducts(): Promise<Product[]> {
  return productRepository.findAll();
}