import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.warn('MONGO_URI is not set — database operations will fail in serverless environment until configured');
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _mongo_: any;
}

const cache = global._mongo_ || (global._mongo_ = { conn: null, promise: null });

export async function connect() {
  if (cache.conn) return cache.conn;
  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGO_URI || '', {
      // add options here if needed
    }).then(m => {
      return m;
    });
  }
  cache.conn = await cache.promise;
  return cache.conn;
}
