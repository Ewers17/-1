import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async (e: any) => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_API_URL + '/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password })
    });
    const json = await res.json();
    alert(JSON.stringify(json));
  };
  return (
    <form onSubmit={login} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="w-full p-2 border mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="w-full p-2 border mb-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="p-2 bg-blue-600 text-white rounded">Login</button>
    </form>
  );
}
