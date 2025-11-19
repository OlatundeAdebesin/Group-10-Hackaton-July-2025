// pages/seller/Dashboard.jsx
import React from 'react';
import { DemoCard } from '../../components/DemoCard';

export default function SellerDashboard() {
  const stats = [
    { title: 'Total Sales', desc: 'Your total revenue this month.', rating: '—', value: '$12,430' },
    { title: 'Active Listings', desc: 'Apps currently live on marketplace.', rating: '—', value: '14' },
    { title: 'Customer Reviews', desc: 'Avg rating for your apps.', rating: '4.7' }
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#31587c]">Seller Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="p-4 border bg-white rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-[#31587c]">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.desc}</p>
            {s.value && <p className="text-xl font-bold mt-2">{s.value}</p>}
            {s.rating !== '—' && <p className="text-orange-500 font-semibold mt-2">⭐ {s.rating}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
