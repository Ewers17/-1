import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-brown-700 bg-[#3d2b20] text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Coffee Shop</Link>
        <nav className="space-x-4">
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
}
