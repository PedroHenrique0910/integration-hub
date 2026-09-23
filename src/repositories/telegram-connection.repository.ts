import { pool } from '../config/database';
import { Telegram } from '../types/telegram.types';


export async function createTelegramConnection(telegram: Omit<Telegram, 'chatId' | 'confirmed' | 'id' | 'createdAt'>): Promise<number> {
 const [result] = await pool.query(
    'INSERT INTO telegram_connections (connection_code) VALUES (?)',
    [telegram.connectionCode]
 );
    const insertResult = result as { insertId: number };
    return insertResult.insertId;
}

export async function updateTelegramConnection(connectionCode: string, chatId: number,): Promise<void> {
  await pool.query(
    'UPDATE telegram_connections SET chat_id = ?, confirmed = true WHERE connection_code = ?',
    [chatId, connectionCode]
  );
}