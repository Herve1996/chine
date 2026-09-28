import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';
import quotesRouter from './routes/quotes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'togo-china-marketplace' }));
app.use('/api/products', productsRouter);
app.use('/api/quotes', quotesRouter);
app.use((_req, res) => res.status(404).json({ message: 'Ressource introuvable' }));
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Une erreur interne est survenue' });
});

app.listen(port, () => console.log(`API démarrée sur http://localhost:${port}`));
