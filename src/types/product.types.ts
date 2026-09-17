export interface Product {
  id: number;
  name: string; 
  description: string;
  currentPrice: number;
  targetPrice?: number; 
  createdAt: Date;
}