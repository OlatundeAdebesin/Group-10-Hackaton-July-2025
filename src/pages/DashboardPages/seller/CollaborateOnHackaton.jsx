// pages/DashboardPages/seller/CollaborateOnHackathons.jsx
import React from 'react';

export default function CollaborateOnHackathons() {
  const events = [
    { title: 'AI Winter Hackathon', desc: 'Build AI‑powered tools in 48 hours.', rating: '—', date: 'Mar 12, 2025' },
    { title: 'Cloud Builders Jam', desc: 'Cloud computing & infra challenges.', rating: '—', date: 'Apr 5, 2025' }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Hackathon Collaboration</h2>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="p-4 bg-white border rounded-md shadow-sm">
            <h3 className="font-semibold text-[#31587c]">{e.title}</h3>
            <p className="text-sm text-gray-700">{e.desc}</p>
            <p className="text-sm mt-1">Date: {e.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
