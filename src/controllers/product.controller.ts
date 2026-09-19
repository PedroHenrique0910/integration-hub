import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, currentPrice, targetPrice } = req.body;

    const id = await productService.createProduct({
      name,
      description,
      currentPrice,
      targetPrice,
    });

    res.status(201).json({ id, message: 'Produto criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
}