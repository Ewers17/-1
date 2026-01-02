import React from 'react';

export default function Checkout() {
  const handlePay = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + '/payments/mock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 100, token: 'test_token' })
    });
    const json = await res.json();
    alert(JSON.stringify(json));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Checkout</h2>
      <button onClick={handlePay} className="mt-4 p-2 bg-green-600 text-white rounded">Pay (mock)</button>
    </div>
  );
}
