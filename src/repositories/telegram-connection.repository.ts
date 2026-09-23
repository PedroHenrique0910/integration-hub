import { pool } from '../config/database';
import { Telegram } from '../types/telegram.types';


export async function create(telegram: Omit<Telegram, 'chatId' | 'confirmed' | 'id' | 'createdAt'>): Promise<number> {
 const [result] = await pool.query(
    'INSERT INTO telegram_connections (connection_code) VALUES (?)',
    [telegram.connectionCode]
 );
    const insertResult = result as { insertId: number };
    return insertResult.insertId;
}