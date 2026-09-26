import { Router } from 'express';
import * as telegramController from '../controllers/telegram.controller';

const router = Router();

router.post('/telegram/connect', telegramController.generateTelegramLink);

export default router;