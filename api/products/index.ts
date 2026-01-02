import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connect } from '../lib/db';
import Product from '../models/Product';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connect();
  if (req.method === 'GET') {
    const products = await Product.find();
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const body = req.body;
    const p = await Product.create(body);
    return res.status(201).json(p);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
}
