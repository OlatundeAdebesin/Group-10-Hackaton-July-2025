import React, { useState } from 'react';
import { Menu, Layers, Star, ShoppingCart, DollarSign, User, Search, Heart, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SaaSProducts from '../components/SaaSProducts';
import SellerDashboard from '../components/SellerDashbooard';
import MyListings from './MyListings';
import Payments from '../components/Payments';
import Account from '../components/Account';
import { Package, ArrowUpRight, ArrowDownRight, Download, Eye, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical } from 'lucide-react';
import {FeaturedApps} from './FeaturedApps';
import { MyOrders } from './MyOrders';
import { Wishlist } from './Wishlist';
import { Profile } from './Profile';
import { ExternalLink, MessageSquare, AlertCircle, Tag, Award, Zap, Shield } from 'lucide-react';


function Button({ children, variant, size, className, ...rest }) {
  
  const base = 'inline-flex items-center justify-center rounded-md transition-colors';
  const sizeClass = size === 'icon' ? 'p-2' : size === 'sm' ? 'px-2 py-1 text-sm' : 'px-3 py-2';
  const variantClass = variant === 'ghost' ? 'bg-transparent hover:bg-white/10' : variant === 'outline' ? 'border border-gray-200 bg-white' : 'bg-[#1CA6AF] text-white';
  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}

function Card({ children, className }) {
  return <div className={`rounded-lg bg-white shadow-md ${className || ''}`}>{children}</div>;
}
function CardContent({ children, className }) {
  return <div className={`${className || 'p-4'}`}>{children}</div>;
}

function Switch({ checked, onCheckedChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${checked ? 'bg-[#31587c]' : 'bg-gray-300'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
}

function Sidebar({ collapsed, onToggle, isSellerView, onToggleView, onMenuSelect }) {
  const buyerMenu = [
    { icon: <Layers size={16} />, label: 'Explore' },
    { icon: <Star size={16} />, label: 'Featured' },
    { icon: <ShoppingCart size={16} />, label: 'My Orders' },
    { icon: <Heart size={16} />, label: 'Wishlist' },
    { icon: <User size={16} />, label: 'Profile' }
  ];

  const sellerMenu = [
    { icon: <TrendingUp size={16} />, label: 'Dashboard' },
    { icon: <Layers size={16} />, label: 'My Listings' },
    { icon: <DollarSign size={16} />, label: 'Payments' },
    { icon: <User size={16} />, label: 'Account' }
  ];

  const menuItems = isSellerView ? sellerMenu : buyerMenu;

  return (
    <aside className={`transition-all duration-300 ${isSellerView ? 'bg-[#31587c]' : 'bg-[#1CA6AF]'} text-white shadow-lg ${collapsed ? 'w-20' : 'w-72'} h-screen sticky top-0 flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`rounded-md p-2 bg-white/20 text-white`}>
            <Layers size={18} />
          </div>
          {!collapsed && (
            <div>
              <h3 className="text-lg font-semibold">SaaS Market</h3>
              <p className="text-sm opacity-70">Buy & Sell apps</p>
            </div>
          )}
        </div>
        <button className="p-2 rounded-md hover:bg-white/20" onClick={onToggle} aria-label="Toggle sidebar">
          <Menu size={16} />
        </button>
      </div>
      <nav className="mt-4 px-2 flex-1">
        <ul className="space-y-1">
          {menuItems.map((i, idx) => (
            <li key={idx}>
              <button
                onClick={() => onMenuSelect(i.label)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors hover:bg-white/20`}
              >
                {i.icon}
                {!collapsed && <span className="font-medium">{i.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <p className="text-xs opacity-70">Mode</p>
              <p className="font-semibold">{isSellerView ? 'Seller' : 'Buyer'} Dashboard</p>
            </div>
          )}
          <Switch checked={isSellerView} onCheckedChange={onToggleView} />
        </div>
      </div>
    </aside>
  );
}

function Topbar({ query, setQuery, isSellerView }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search apps, sellers or tags..."
        className={`max-w-xl border rounded-md px-3 py-2 w-full md:w-auto bg-white/90 backdrop-blur-md focus:outline-none focus:ring-2 ${isSellerView ? 'border-[#31587c] focus:ring-[#31587c]' : 'border-[#1CA6AF] focus:ring-[#1CA6AF]'}`}
      /> */}
      <div className="flex items-center gap-3">
        {/* <Button variant="ghost" size="icon" className="hover:bg-white/20 text-black" aria-label="search">
          <Search size={18} />
        </Button> */}
        {isSellerView ? (
          <Button variant="ghost" size="icon" className="relative hover:bg-white/20 text-black" aria-label="users">
            <Users size={18} />
          </Button>
        ) : (
          <Button
          variant="ghost" size="icon" className="relative hover:bg-white/20 text-black" aria-label="cart">
            {/* <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">2</span> */}
          </Button>
        )}
        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-sm font-medium text-black">OA</div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isSellerView, setIsSellerView] = useState(false);
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState('Explore');

  const buyerPages = {
    Explore: <Card className="p-6 bg-[#1CA6AF]/10"><CardContent><h2 className="text-xl font-semibold mb-2 text-[#1CA6AF]">Explore Apps</h2><p className="text-gray-700">Discover innovative SaaS products.</p>
    
    <SaaSProducts />
    
    <div className="grid gap-4 mt-6">
      {/* <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('View Top Rated Apps')}>
        <CardContent>
          <h3 className="font-semibold text-[#1CA6AF] mb-2">Top Rated Apps</h3>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>TaskFlow - 4.9★</li>
            <li>CloudSync - 4.8★</li>
            <li>MarketBoost - 4.8★</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('View Best Selling Apps')}>
        <CardContent>
          <h3 className="font-semibold text-[#1CA6AF] mb-2">Best Selling Apps</h3>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>ConvertIQ - 4.7★</li>
            <li>AdWise - 4.6★</li>
            <li>FunnelPro - 4.7★</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('View Recommended Apps')}>
        <CardContent>
          <h3 className="font-semibold text-[#1CA6AF] mb-2">Recommended Apps</h3>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>Boostify - 4.5★</li>
            <li>AutoMailer - 4.5★</li>
            <li>DataTrack - 4.6★</li>
          </ul>
        </CardContent>
      </Card> */}
    </div></CardContent></Card>,
    Featured: <Card className="p-6 bg-[#1CA6AF]/10"><CardContent><h2 className="text-xl font-semibold mb-2 text-[#1CA6AF]">Featured Apps</h2><p className="text-gray-700">Top picks just for you.</p><FeaturedApps /></CardContent></Card>,
    'My Orders': <Card className="p-6 bg-[#1CA6AF]/10"><CardContent><h2 className="text-xl font-semibold mb-2 text-[#1CA6AF]">My Orders</h2><p className="text-gray-700">Track your purchases and downloads.</p><MyOrders /></CardContent></Card>,
    Wishlist: <Card className="p-6 bg-[#1CA6AF]/10"><CardContent><Wishlist /></CardContent></Card>,
    Profile: <Card className="p-6 bg-[#1CA6AF]/10"><CardContent><h2 className="text-xl font-semibold mb-2 text-[#1CA6AF]">Profile</h2><p className="text-gray-700">Manage your account and settings.</p><Profile /></CardContent></Card>
  };

  const sellerPages = {
    Dashboard: <Card className="p-6 bg-[#31587c]/10"><CardContent><h2 className="text-xl font-semibold mb-2 text-[#31587c]">Seller Dashboard</h2><p className="text-gray-700">Overview of your performance.</p><SellerDashboard /> </CardContent></Card>,
    DashboardComponent: <SellerDashboard />,

    'My Listings': <Card className="p-6 bg-[#31587c]/10"><CardContent><MyListings /></CardContent></Card>,
    Payments: <Card className="p-6 bg-[#31587c]/10"><CardContent><Payments /></CardContent></Card>,
    Account: <Card className="p-6 bg-[#31587c]/10"><CardContent><Account /></CardContent></Card>
  };

  const currentPage = isSellerView ? sellerPages[activePage] || Object.values(sellerPages)[0] : buyerPages[activePage] || Object.values(buyerPages)[0];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="min-h-screen flex bg-gray-50">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        isSellerView={isSellerView}
        onToggleView={() => setIsSellerView((s) => !s)}
        onMenuSelect={setActivePage}
      />
      <main className="flex-1 p-6 overflow-y-auto">
        <Topbar query={query} setQuery={setQuery} isSellerView={isSellerView} />
        <div className="grid gap-4">
          {currentPage}
        </div>
      </main>
    </motion.div>
  );
}
