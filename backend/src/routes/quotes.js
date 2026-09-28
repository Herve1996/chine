import { Router } from 'express';
import { z } from 'zod';

const router = Router();
const quoteSchema = z.object({
  items: z.array(z.object({ productId: z.string().min(1), quantity: z.number().int().positive() })).min(1),
  destination: z.string().min(2).max(100),
  notes: z.string().max(1000).optional().default('')
});
const requests = [];

router.post('/', (req, res) => {
  const parsed = quoteSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: 'Données de demande invalides', errors: parsed.error.flatten() });
  const request = { id: `q${requests.length + 1}`, ...parsed.data, status: 'pending', createdAt: new Date().toISOString() };
  requests.push(request);
  res.status(201).json({ data: request, message: 'Votre demande de devis a été envoyée.' });
});
router.get('/', (_req, res) => res.json({ data: requests }));
export default router;
