// pages/DashboardPages/seller/TopRatedDevelopers.jsx
import React from 'react';
import { DemoCard } from '../../components/DemoCard';

export default function TopRatedDevelopers() {
  const developers = [
    { title: 'DevArchitect', desc: 'Cloud & systems architect.', rating: 4.9 },
    { title: 'AIEngine', desc: 'AI/ML specialist & SaaS builder.', rating: 4.8 },
    { title: 'UXWizard', desc: 'Product designer with 12+ years.', rating: 4.7 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Top Rated Developers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {developers.map((d, i) => <DemoCard key={i} {...d} />)}
      </div>
    </div>
  );
}
