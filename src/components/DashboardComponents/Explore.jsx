import React, { useState, useEffect } from 'react';
import { Menu, Layers, Star, ShoppingCart, DollarSign, User, Search, Heart, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';

function Button({ children, variant = 'default', size, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md transition-colors select-none';
  const sizeClass = size === 'icon' ? 'p-2' : size === 'sm' ? 'px-2 py-1 text-sm' : 'px-3 py-2';
  const variantClass =
    variant === 'ghost'
      ? 'bg-transparent hover:bg-black/5 text-black'
      : variant === 'outline'
      ? 'border border-gray-200 bg-white text-black'
      : 'bg-[#1CA6AF] text-white';
  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = '' }) {
  return <div className={`rounded-lg bg-white shadow-sm ${className}`}>{children}</div>;
}
function CardContent({ children, className = 'p-4' }) {
  return <div className={className}>{children}</div>;
}

function Switch({ checked = false, onCheckedChange = null, ariaLabel = 'switch' }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${checked ? 'bg-[#31587c]' : 'bg-gray-300'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
}

function IconButton({ children, label, className = '', ...rest }) {
  return (
    <Button variant="ghost" size="icon" aria-label={label} className={`p-2 ${className}`} {...rest}>
      {children}
    </Button>
  );
}

function Sidebar({ collapsed, onToggle, isSellerView, onToggleView }) {
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
    <aside
      className={`transition-all duration-300 ${isSellerView ? 'bg-[#31587c] text-white' : 'bg-[#1CA6AF] text-white'} shadow-lg ${collapsed ? 'w-20' : 'w-72'} h-screen sticky top-0 flex flex-col`}
    >
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
              <button className={`w-full text-left flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors hover:bg-white/20`}>
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
          <Switch checked={isSellerView} onCheckedChange={onToggleView} ariaLabel="Toggle view" />
        </div>
      </div>
    </aside>
  );
}

function Topbar({ query, setQuery, isSellerView }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search apps, sellers or tags..."
        className={`max-w-xl border rounded-md px-3 py-2 w-full md:w-auto bg-white/90 backdrop-blur-md focus:outline-none focus:ring-2 ${
          isSellerView ? 'border-[#31587c] focus:ring-[#31587c]' : 'border-[#1CA6AF] focus:ring-[#1CA6AF]'
        }`}
      />

      <div className="flex items-center gap-3">
        <IconButton label="search">
          <Search size={18} />
        </IconButton>

        {isSellerView ? (
          <IconButton label="users">
            <Users size={18} />
          </IconButton>
        ) : (
          <IconButton label="cart">
            <div className="relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-3 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </div>
          </IconButton>
        )}

        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-sm font-medium text-black">OA</div>
      </div>
    </div>
  );
}

function RightSection({ isSellerView }) {
  if (isSellerView) {
    return (
      <div className="grid gap-4 mt-6">
        <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('Collaborate on Hackathon Projects')}>
          <CardContent>
            <h3 className="font-semibold text-[#31587c] mb-2">Collaborate on Hackathon Projects</h3>
            <p className="text-sm text-gray-600">Join other developers to build and launch ideas.</p>
          </CardContent>
        </Card>

        <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('Developer Hangouts')}>
          <CardContent>
            <h3 className="font-semibold text-[#31587c] mb-2">Developer Hangouts</h3>
            <p className="text-sm text-gray-600">Participate in live events and discussions.</p>
          </CardContent>
        </Card>

        <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('Top Rated Developers')}>
          <CardContent>
            <h3 className="font-semibold text-[#31587c] mb-2">Top Rated Developers</h3>
            <p className="text-sm text-gray-600">Discover and connect with leading contributors.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-4 mt-6">
      <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('View Top Rated Apps')}>
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
            <li>ConvertIQ - 4.9★</li>
            <li>AdWise - 4.8★</li>
            <li>FunnelPro - 4.8★</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="p-4 bg-white shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition" onClick={() => alert('View Recommended Apps')}>
        <CardContent>
          <h3 className="font-semibold text-[#1CA6AF] mb-2">Recommended Apps</h3>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>Boostify - 4.9★</li>
            <li>AutoMailer - 4.8★</li>
            <li>DataTrack - 4.7★</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isSellerView, setIsSellerView] = useState(false);
  const [query, setQuery] = useState('');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings([
      { id: 1, title: 'NotifyPro', desc: 'Marketing automation for SaaS teams', price: 99, seller: 'AlphaDev', rating: 4.8, thumbnail: 'https://placehold.co/600x400/png?text=NotifyPro' },
      { id: 2, title: 'LeadCapture', desc: 'High-converting lead capture widgets', price: 49, seller: 'GrowthStack', rating: 4.9, thumbnail: 'https://placehold.co/600x400/png?text=LeadCapture' }
    ]);
  }, []);

  const filtered = listings.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.desc.toLowerCase().includes(query.toLowerCase()));
  const handleBuy = (id) => alert('Start checkout for app id ' + id);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="min-h-screen flex bg-gray-50">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} isSellerView={isSellerView} onToggleView={() => setIsSellerView((s) => !s)} />

      <main className="flex-1 p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Topbar query={query} setQuery={setQuery} isSellerView={isSellerView} />
          <div className="grid gap-4">
            {filtered.map((app) => (
              <Card key={app.id} className="p-4">
                <CardContent className="flex items-center gap-4">
                  <img src={app.thumbnail} alt={app.title} className="w-32 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-black">{app.title}</h3>
                        <p className="text-sm text-gray-600">{app.desc}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-500">${app.price}</div>
                        <div className="text-sm text-gray-600">{app.rating} ★</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-gray-200 w-7 h-7 flex items-center justify-center text-xs">{app.seller.slice(0, 2)}</div>
                        <div className="text-sm text-gray-700">{app.seller}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => alert('Preview ' + app.title)}>
                          Preview
                        </Button>
                        <Button size="sm" className="bg-orange-400 hover:bg-orange-500 text-white" onClick={() => handleBuy(app.id)}>
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <aside className="hidden md:block">
          <RightSection isSellerView={isSellerView} />
        </aside>
      </main>
    </motion.div>
  );
}
