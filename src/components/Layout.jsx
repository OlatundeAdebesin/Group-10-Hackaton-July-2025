// components/Layout.jsx
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 flex-1">{children}</div>
      </div>
    </div>
  );
}