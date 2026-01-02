import { Router } from 'express';

const router = Router();

// Mock payment endpoint — no real Stripe used
router.post('/mock', async (req, res) => {
  const { amount, token } = req.body;
  // pretend we process payment
  console.log('Mock payment', { amount, token });
  res.json({ success: true, id: 'mock_tx_' + Date.now(), amount });
});

export default router;
