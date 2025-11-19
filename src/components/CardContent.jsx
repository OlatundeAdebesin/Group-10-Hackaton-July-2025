// components/DashboardComponents/CardContent.jsx
import React from 'react';

export function CardContent({ children, className }) {
  return <div className={className || 'p-4'}>{children}</div>;
}