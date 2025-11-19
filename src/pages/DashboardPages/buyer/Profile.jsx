// pages/DashboardPages/buyer/Profile.jsx
import React from 'react';

export default function Profile() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#31587c]">My Profile</h2>
      <div className="p-4 border rounded-md bg-white shadow-sm w-full max-w-md">
        <p><strong>Name:</strong> Olatunde Adebesin</p>
        <p><strong>Email:</strong> olatunde@hackatonmail.com</p>
        <p><strong>Role:</strong> Buyer</p>
      </div>
    </div>
  );
}

