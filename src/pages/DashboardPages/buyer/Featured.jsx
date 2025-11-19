// pages/DashboardPages/buyer/Featured.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function Featured() {
  const items = [
    { title: 'AI Analytics Hub', desc: 'Predictive insights powered by AI models.', rating: 4.9 },
    { title: 'DesignSuite Cloud', desc: 'Web-based design and editing tools.', rating: 4.8 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Featured Apps</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((i, k) => <DemoCard key={k} {...i} />)}
      </div>
    </div>
  );
}
