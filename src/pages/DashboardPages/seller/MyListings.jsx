// pages/DashboardPages/seller/MyListings.jsx
import React from 'react';
import { DemoCard } from '../../components/DemoCard';

export default function MyListings() {
  const listings = [
    { title: 'AI Analytics Hub', desc: 'Predictive analytics engine.', rating: 4.9 },
    { title: 'DevSync Tools', desc: 'Developer productivity bundle.', rating: 4.6 },
    { title: 'CloudDB Manager', desc: 'Cloud‑based database admin panel.', rating: 4.5 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">My Listings</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((l, i) => <DemoCard key={i} {...l} />)}
      </div>
    </div>
  );
}
