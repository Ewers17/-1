import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Menu() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/products')
      .then(r => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
