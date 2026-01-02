import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description?: string;
  price: number;
  category?: string;
  image?: string;
}

const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  image: String
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
