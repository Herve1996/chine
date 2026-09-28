// backend/src/routes/products.js
import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();
const products = [
  { id: 'p1', name: 'Écouteurs Bluetooth TWS', category: 'Électronique', description: 'Écouteurs sans fil avec boîtier de charge.', imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80', unitPrice: 4.8, currency: 'USD', minimumOrder: 50, availableQuantity: 2400 },
  { id: 'p2', name: 'Lampe LED rechargeable', category: 'Maison', description: 'Lampe portable USB, idéale pour la maison et le commerce.', imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80', unitPrice: 6.25, currency: 'USD', minimumOrder: 20, availableQuantity: 890 },
  { id: 'p3', name: 'Sacs à main tendance', category: 'Mode', description: 'Sacs en simili cuir disponibles en plusieurs coloris.', imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', unitPrice: 8.5, currency: 'USD', minimumOrder: 30, availableQuantity: 640 },
  { id: 'p4', name: 'Montre connectée sport', category: 'Électronique', description: 'Suivi d’activité, notifications et écran couleur.', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', unitPrice: 12.9, currency: 'USD', minimumOrder: 10, availableQuantity: 310 },
];

router.get('/', authMiddleware, (req, res) => {
  const search = String(req.query.search || '').toLowerCase();
  const category = String(req.query.category || 'Toutes');
  const result = products.filter((product) => {
    const matchesSearch = !search || `${product.name} ${product.description}`.toLowerCase().includes(search);
    const matchesCategory = category === 'Toutes' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  res.json({ data: result, total: result.length, user: req.user });
});

router.get('/categories', authMiddleware, (_req, res) => {
  res.json({ data: ['Toutes', ...new Set(products.map((product) => product.category))] });
});

export default router;
