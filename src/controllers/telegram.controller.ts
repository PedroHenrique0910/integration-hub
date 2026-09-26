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

export async function webhookTelegram(req: Request, res: Response) {

  try {

    const chatId = req.body.message.chat.id
    const connectionId = req.body.message.text
    const connectionIdFormated = connectionId.replace("/start", '').trim()

    await telegramService.updateTelegramConnection(connectionIdFormated, chatId);

    res.sendStatus(200);

  } catch (error) {

    res.status(500).json({ error: 'Erro ao atualizar o usuario no banco' });

  }

}
