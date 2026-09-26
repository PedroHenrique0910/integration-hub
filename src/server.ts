import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes';
import telegramRoutes from './routes/telegram.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(productRoutes);
app.use(telegramRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

app.post('/telegram/webhook', (req, res) => {
  console.log('Webhook recebido:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});