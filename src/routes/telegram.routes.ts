import { Router } from 'express';
import * as telegramController from '../controllers/telegram.controller';

const router = Router();

router.post('/telegram/connect', telegramController.generateTelegramLink);
router.post('/telegram/webhook', telegramController.webhookTelegram)


export default router;