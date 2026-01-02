import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connect } from '../lib/db';
import Product from '../models/Product';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connect();
  const { id } = req.query;
  if (req.method === 'GET') {
    const p = await Product.findById(id as string);
    if (!p) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(p);
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end('Method Not Allowed');
}
