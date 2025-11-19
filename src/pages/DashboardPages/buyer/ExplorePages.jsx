// pages/DashboardPages/buyer/Explore.jsx
import React from 'react';
import { DemoCard } from '../components/DashboardComponents/DemoCard';

export default function Explore() {
  const apps = [
    { title: 'ProjectFlow Pro', desc: 'Advanced task and workflow automation for teams.', rating: 4.8 },
    { title: 'SalesBoost CRM', desc: 'A modern CRM tool to skyrocket your conversions.', rating: 4.6 },
    { title: 'FinTracker', desc: 'Smart financial analysis for small businesses.', rating: 4.7 }
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#31587c]">Explore Apps</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app, i) => <DemoCard key={i} {...app} />)}
      </div>
    </div>
  );
}

