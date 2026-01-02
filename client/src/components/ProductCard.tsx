import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm">{product.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <div className="font-semibold">${product.price.toFixed(2)}</div>
        <Link to={`/menu/${product._id}`} className="text-blue-600">View</Link>
      </div>
    </div>
  );
}
