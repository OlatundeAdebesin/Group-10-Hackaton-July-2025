// pages/DashboardPages/buyer/Cart.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function Cart() {
  const cart = [
    { title: 'DesignSuite Cloud', desc: 'Web-based design tools.', rating: 4.8 }
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#31587c]">Your Cart</h2>
      {cart.map((c, i) => <DemoCard key={i} {...c} />)}
      <button className="mt-4 px-4 py-2 bg-[#1CA6AF] text-white rounded-md">Checkout</button>
    </div>
  );
}
