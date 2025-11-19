// components/DashboardComponents/Card.jsx
import React from 'react';

export function Card({ children, className }) {
  return <div className={`rounded-lg bg-white shadow-md ${className || ''}`}>{children}</div>;
}

