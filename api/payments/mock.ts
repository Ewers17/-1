import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  const { amount, token } = req.body;
  console.log('Mock payment processed', { amount, token });
  res.status(200).json({ success: true, id: 'mock_tx_' + Date.now(), amount });
}
