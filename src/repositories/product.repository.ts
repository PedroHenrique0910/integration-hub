import { pool } from '../config/database';
import { Product } from '../types/product.types';

export async function create(product: Omit<Product, 'id' | 'createdAt'>): Promise<number> {
  const [result] = await pool.query(
    'INSERT INTO products (name, description, current_price, target_price) VALUES (?, ?, ?, ?)',
    [product.name, product.description, product.currentPrice, product.targetPrice]
  );

  const insertResult = result as { insertId: number };
  return insertResult.insertId;
}

export async function findAll(): Promise<Product[]> {
  const [rows] = await pool.query('SELECT * FROM products');

  const products = rows as any[];

  return products.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    currentPrice: row.current_price,
    targetPrice: row.target_price,
    createdAt: row.created_at,
  }));
}

export async function findById(id: number): Promise<Product | null> {
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);

  const products = rows as any[];

  if (products.length === 0) {
    return null;
  }

  const row = products[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      currentPrice: row.current_price,
      targetPrice: row.target_price,
      createdAt: row.created_at,
    };
}

export async function updatePrice(id: number, newPrice: number): Promise<void> {
  await pool.query(
    'UPDATE products SET current_price = ? WHERE id = ?',
    [newPrice, id]
  );
}