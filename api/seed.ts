import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connect } from './lib/db';
import Product from './models/Product';
import User from './models/User';
import bcrypt from 'bcrypt';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  if (process.env.ALLOW_SEED !== 'true') {
    return res.status(403).json({ message: 'Seeding disabled. Set ALLOW_SEED=true in env to enable.' });
  }

  await connect();
  await Product.deleteMany({});
  await User.deleteMany({});

  const products = [
    { title: 'Espresso', description: 'Strong espresso shot', price: 2.5, category: 'espresso', image: 'https://via.placeholder.com/300' },
    { title: 'Americano', description: 'Espresso with hot water', price: 3.0, category: 'espresso', image: 'https://via.placeholder.com/300' },
    { title: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 3.8, category: 'milk', image: 'https://via.placeholder.com/300' },
    { title: 'Latte', description: 'Mild coffee with milk', price: 4.0, category: 'milk', image: 'https://via.placeholder.com/300' },
    { title: 'Mocha', description: 'Chocolate flavored latte', price: 4.5, category: 'special', image: 'https://via.placeholder.com/300' }
  ];

  await Product.insertMany(products);
  const pw = await bcrypt.hash('password123', 10);
  const user = await User.create({ name: 'John Doe', email: 'john@example.com', password: pw });

  res.json({ success: true, productsCount: products.length, user: { id: user._id, email: user.email } });
}
