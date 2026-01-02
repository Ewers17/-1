import { Router } from 'express';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.post('/', requireAuth, async (req, res) => {
  // Placeholder: create order with items and user reference
  const { items, total } = req.body;
  res.json({ success: true, order: { id: 'order_' + Date.now(), items, total } });
});

export default router;
