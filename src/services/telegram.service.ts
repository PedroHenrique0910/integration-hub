import dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import * as telegramRepository from '../repositories/telegram-connection.repository';

dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendMessage(text: string): Promise<void> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
    }),
  });
}

export async function generateConnectionLink(): Promise<string> {
  const codigo = randomUUID();
  
  await telegramRepository.createTelegramConnection({connectionCode: codigo});

  const link = `https://t.me/${process.env.TELEGRAM_BOT_USERNAME}?start=${codigo}`;

  return link
}  

export async function updateTelegramConnection(connectionCode: string, chatId: number): Promise<void> {
  await telegramRepository.updateTelegramConnection(connectionCode, chatId)
}  