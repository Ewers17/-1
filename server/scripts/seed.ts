import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../src/models/Product';
import User from '../src/models/User';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/coffee-shop';

const products = [
  { title: 'Espresso', description: 'Strong espresso shot', price: 2.5, category: 'espresso', image: 'https://via.placeholder.com/150' },
  { title: 'Americano', description: 'Espresso with hot water', price: 3.0, category: 'espresso', image: 'https://via.placeholder.com/150' },
  { title: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 3.8, category: 'milk', image: 'https://via.placeholder.com/150' },
  { title: 'Latte', description: 'Mild coffee with milk', price: 4.0, category: 'milk', image: 'https://via.placeholder.com/150' },
  { title: 'Mocha', description: 'Chocolate flavored latte', price: 4.5, category: 'special', image: 'https://via.placeholder.com/150' }
];

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to DB. Seeding...');
  await Product.deleteMany({});
  await Product.insertMany(products);

  await User.deleteMany({});
  const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
  await user.save();

  console.log('Seeding completed');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
