import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  items: ICartItem[];
}

const CartItemSchema = new Schema({ product: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, default: 1 } });
const CartSchema: Schema = new Schema({ user: { type: Schema.Types.ObjectId, ref: 'User' }, items: [CartItemSchema] });

export default mongoose.model<ICart>('Cart', CartSchema);
