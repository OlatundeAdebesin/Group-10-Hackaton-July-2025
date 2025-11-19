 import React, { useState } from 'react';
import { Star, Package, Download, ExternalLink, MessageSquare, AlertCircle, CheckCircle, Clock, Heart, Trash2, ShoppingCart, Filter, Search, Calendar, DollarSign, Tag, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
// ==================== FEATURED APPS COMPONENT ====================
export function FeaturedApps() {
  const featuredCategories = [
    {
      name: 'Editor\'s Choice',
      icon: <Award size={24} />,
      apps: [
        { name: 'TaskFlow Pro', category: 'Productivity', price: '$299', rating: 4.9, reviews: 342, image: '📊', badge: 'Trending' },
        { name: 'CloudSync Enterprise', category: 'Cloud Storage', price: '$499', rating: 4.8, reviews: 289, image: '☁️', badge: 'Popular' },
        { name: 'MarketBoost Suite', category: 'Marketing', price: '$399', rating: 4.7, reviews: 256, image: '📈', badge: 'New' }
      ]
    },
    {
      name: 'Most Popular',
      icon: <TrendingUp size={24} />,
      apps: [
        { name: 'ConvertIQ', category: 'Analytics', price: '$249', rating: 4.7, reviews: 512, image: '🎯', badge: 'Best Value' },
        { name: 'AdWise Pro', category: 'Advertising', price: '$349', rating: 4.6, reviews: 423, image: '📱', badge: 'Hot' },
        { name: 'FunnelPro', category: 'Sales', price: '$399', rating: 4.7, reviews: 378, image: '🚀', badge: 'Trending' }
      ]
    },
    {
      name: 'New Releases',
      icon: <Zap size={24} />,
      apps: [
        { name: 'Boostify AI', category: 'AI Tools', price: '$199', rating: 4.5, reviews: 145, image: '🤖', badge: 'Just Launched' },
        { name: 'AutoMailer 2.0', category: 'Email', price: '$279', rating: 4.5, reviews: 167, image: '✉️', badge: 'Updated' },
        { name: 'DataTrack Plus', category: 'Analytics', price: '$329', rating: 4.6, reviews: 198, image: '📉', badge: 'New' }
      ]
    }
  ];

  const deals = [
    { name: 'Black Friday Sale', discount: '50%', endsIn: '2 days', color: 'bg-purple-500' },
    { name: 'Limited Offer', discount: '30%', endsIn: '1 week', color: 'bg-pink-500' },
    // { name: 'Bundle Deal', discount: '40%', endsIn: '5 days', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {/* <h2 className="text-3xl font-bold text-[#1CA6AF]">Featured Apps</h2>
          <p className="text-gray-600 mt-1">Hand-picked selections just for you</p> */}
        </div>
        <Button className="gap-2">
          <Filter size={16} />
          Filter
        </Button>
      </div>

      {/* Special Deals Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deals.map((deal, idx) => (
          <Card key={idx} className={`${deal.color} text-white overflow-hidden relative`}>
            <CardContent className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">{deal.name}</p>
                  <h3 className="text-3xl font-bold mt-1">{deal.discount} OFF</h3>
                  <p className="text-xs opacity-75 mt-2">Ends in {deal.endsIn}</p>
                </div>
                <Tag size={40} className="opacity-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Categories */}
      {featuredCategories.map((category, catIdx) => (
        <div key={catIdx} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1CA6AF]/10 text-[#1CA6AF]">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.apps.map((app, appIdx) => (
              <Card key={appIdx} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent>
                  <div className="relative">
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-[#1CA6AF] to-[#31587c] flex items-center justify-center text-5xl mb-4">
                      {app.image}
                    </div>
                    <span className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold bg-white text-[#1CA6AF] shadow-md">
                      {app.badge}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-[#1CA6AF] transition-colors">
                    {app.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{app.category}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{app.rating}</span>
                      <span className="text-sm text-gray-500">({app.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-[#1CA6AF]">{app.price}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">View Details</Button>
                    <Button variant="outline" size="icon">
                      <Heart size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Why Choose Featured Apps */}
      <Card className="bg-gradient-to-r from-[#1CA6AF]/10 to-[#31587c]/10">
        <CardContent>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Featured Apps?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#1CA6AF] text-white">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Verified Quality</h4>
                <p className="text-sm text-gray-600">All featured apps are thoroughly tested and verified</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#1CA6AF] text-white">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Top Rated</h4>
                <p className="text-sm text-gray-600">Highest customer satisfaction and ratings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#1CA6AF] text-white">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Regular Updates</h4>
                <p className="text-sm text-gray-600">Continuously improved with new features</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
