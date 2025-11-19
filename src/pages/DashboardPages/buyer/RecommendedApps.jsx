// pages/DashboardPages/buyer/RecommendedApps.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function RecommendedApps() {
  const items = [
    { title: 'TeamSync', desc: 'Real‑time collaboration.', rating: 4.7 },
    { title: 'BudgetMaster', desc: 'Smart budgeting automation.', rating: 4.6 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Recommended For You</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i, k) => <DemoCard key={k} {...i} />)}
      </div>
    </div>
  );
}
