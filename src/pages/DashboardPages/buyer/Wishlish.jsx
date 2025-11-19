// pages/DashboardPages/buyer/Wishlist.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function Wishlist() {
  const list = [
    { title: 'BudgetMaster', desc: 'Automated budgeting tool.', rating: 4.4 },
    { title: 'TeamSync', desc: 'Real‑time team collaboration suite.', rating: 4.7 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Wishlist</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((i, k) => <DemoCard key={k} {...i} />)}
      </div>
    </div>
  );
}

