import { Router } from 'express';
import { requireAuth } from '../middleware/auth';

const router = Router();

// For simplicity, this is a placeholder. In real app Cart would be stored per-user in DB.
router.get('/', requireAuth, async (req, res) => {
  res.json({ items: [] });
});

export default router;
