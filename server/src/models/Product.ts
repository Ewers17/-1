import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description?: string;
  price: number;
  category: string;
  image: string;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String }
});

export default mongoose.model<IProduct>('Product', ProductSchema);
