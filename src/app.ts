import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});