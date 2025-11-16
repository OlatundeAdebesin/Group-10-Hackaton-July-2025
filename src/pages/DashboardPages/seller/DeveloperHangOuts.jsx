// pages/DashboardPages/seller/DeveloperHangouts.jsx
import React from 'react';

export default function DeveloperHangouts() {
  const hangouts = [
    { topic: 'Scaling microservices', host: 'DevArchitect', participants: 32 },
    { topic: 'Building AI SaaS apps', host: 'AIEngine', participants: 54 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Developer Hangouts</h2>
      <ul className="space-y-3">
        {hangouts.map((h, i) => (
          <li key={i} className="p-4 border bg-white rounded-md shadow-sm">
            <p className="font-semibold">{h.topic}</p>
            <p className="text-sm text-gray-700">Host: {h.host}</p>
            <p className="text-sm text-[#31587c] font-semibold">Participants: {h.participants}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
