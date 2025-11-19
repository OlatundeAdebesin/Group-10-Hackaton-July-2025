// pages/DashboardPages/buyer/MyOrders.jsx
import React from 'react';

export default function MyOrders() {
  const orders = [
    { app: 'ProjectFlow Pro', date: '2025-01-14', amount: '$49' },
    { app: 'SalesBoost CRM', date: '2025-02-01', amount: '$99' }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">My Orders</h2>
      <ul className="space-y-3">
        {orders.map((o, i) => (
          <li key={i} className="p-4 border rounded-md bg-white shadow-sm">
            <p className="font-semibold">{o.app}</p>
            <p className="text-sm text-gray-600">Purchased: {o.date}</p>
            <p className="text-sm text-[#1CA6AF]">Amount: {o.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
