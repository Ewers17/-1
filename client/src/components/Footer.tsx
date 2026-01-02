import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4">
      <div className="container mx-auto">© {new Date().getFullYear()} Coffee Shop</div>
    </footer>
  );
}
