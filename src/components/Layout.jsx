// components/Layout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from './components/Topbar';

export default function Layout({ mode, setMode, children }) {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar mode={mode} setMode={setMode} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar mode={mode} />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
