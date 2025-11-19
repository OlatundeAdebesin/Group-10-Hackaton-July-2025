// pages/DashboardPages/seller/Community.jsx
import React from 'react';

export default function Community() {
  const posts = [
    { user: 'DevMaster', content: 'What tech stack do you prefer for SaaS MVPs?', replies: 12 },
    { user: 'CodePilot', content: 'Looking for collaborators on my AI project.', replies: 5 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#31587c] mb-4">Developer Community</h2>
      <ul className="space-y-3">
        {posts.map((p, i) => (
          <li key={i} className="p-4 border bg-white rounded-md shadow-sm">
            <p className="font-semibold">{p.user}</p>
            <p className="text-sm text-gray-700">{p.content}</p>
            <p className="text-sm text-[#31587c] font-semibold mt-2">Replies: {p.replies}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
