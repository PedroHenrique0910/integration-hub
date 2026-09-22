export interface Telegram {
  id: number;
  connectionCode: string; 
  chatId?: number;
  confirmed? : boolean;
  createdAt: Date;
}