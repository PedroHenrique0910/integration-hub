import { Request, Response } from 'express';
import * as telegramService from '../services/telegram.service';

export async function generateTelegramLink(req: Request, res: Response) {

  try {
    const linkConnection = await telegramService.generateConnectionLink();

    res.status(201).json({link: linkConnection});

  } catch (error) {
    
    res.status(500).json({ error: 'Erro ao gerar Link' });

  }

}
