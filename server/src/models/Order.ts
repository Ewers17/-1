import mongoose, { Schema, Document } from 'mongoose';

const OrderItemSchema = new Schema({ product: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: Number });

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: any[];
  total: number;
  createdAt: Date;
}

const OrderSchema: Schema = new Schema({ user: { type: Schema.Types.ObjectId, ref: 'User' }, items: [OrderItemSchema], total: Number }, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);
