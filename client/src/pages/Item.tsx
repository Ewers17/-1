import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Item() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(r => r.json())
      .then(setItem)
      .catch(console.error);
  }, [id]);
  if (!item) return <div>Loading...</div>;
  return (
    <div>
      <h2 className="text-2xl font-bold">{item.title}</h2>
      <img src={item.image} className="w-full max-w-md" />
      <p>{item.description}</p>
      <div className="font-semibold">${item.price.toFixed(2)}</div>
    </div>
  );
}
