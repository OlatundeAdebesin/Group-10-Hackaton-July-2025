// pages/DashboardPages/buyer/TopRatedApps.jsx
import React from 'react';
import { DemoCard } from '../../components/DashboardComponents/DemoCard';

export default function TopRatedApps() {
  const items = [
    { title: 'AI Analytics Hub', desc: 'Predictive insights for business.', rating: 4.9 },
    { title: 'ProjectFlow Pro', desc: 'Advanced workflow automation.', rating: 4.8 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Top Rated Apps</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i, k) => <DemoCard key={k} {...i} />)}
      </div>
    </div>
  );
}
