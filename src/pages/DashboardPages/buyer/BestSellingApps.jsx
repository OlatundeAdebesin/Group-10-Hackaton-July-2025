// pages/DashboardPages/buyer/BestSellingApps.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function BestSellingApps() {
  const items = [
    { title: 'SalesBoost CRM', desc: 'High‑performance CRM.', rating: 4.8 },
    { title: 'FinTracker', desc: 'Smart financial insights.', rating: 4.7 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Best Selling Apps</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i, k) => <DemoCard key={k} {...i} />)}
      </div>
    </div>
  );
}
