// components/DashboardComponents/Button.jsx
import React from 'react';

export function Button({ children, variant, size, className, ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-md transition-colors';
  const sizeClass = size === 'icon' ? 'p-2' : size === 'sm' ? 'px-2 py-1 text-sm' : 'px-3 py-2';
  const variantClass = variant === 'ghost'
    ? 'bg-transparent hover:bg-white/10'
    : variant === 'outline'
    ? 'border border-gray-200 bg-white'
    : 'bg-[#1CA6AF] text-white';
  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}