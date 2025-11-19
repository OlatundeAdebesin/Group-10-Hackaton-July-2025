// pages/DashboardPages/seller/Payments.jsx
import React from 'react';

export default function Payments() {
  const payments = [
    { id: 'TXN-001', amount: '$149', date: '2025-01-20', status: 'Completed' },
    { id: 'TXN-002', amount: '$89', date: '2025-01-22', status: 'Completed' }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Payment History</h2>
      <ul className="space-y-3">
        {payments.map((p, i) => (
          <li key={i} className="p-4 border rounded-md bg-white shadow-sm">
            <p className="font-semibold">{p.id}</p>
            <p className="text-sm text-gray-600">Date: {p.date}</p>
            <p className="text-sm text-gray-600">Amount: {p.amount}</p>
            <p className="text-sm text-[#31587c] font-semibold">Status: {p.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
