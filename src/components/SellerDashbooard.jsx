import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, Download, Eye, Star, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical } from 'lucide-react';

// ==================== DASHBOARD COMPONENT ====================
export default function SellerDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$24,580', change: '+12.5%', trend: 'up', icon: <DollarSign size={24} /> },
    { label: 'Active Listings', value: '12', change: '+2', trend: 'up', icon: <Package size={24} /> },
    { label: 'Total Sales', value: '248', change: '+18.2%', trend: 'up', icon: <TrendingUp size={24} /> },
    { label: 'Customer Reach', value: '1,847', change: '-3.1%', trend: 'down', icon: <Users size={24} /> }
  ];

  const recentSales = [
    { app: 'TaskFlow Pro', buyer: 'John Doe', amount: '$299', date: '2 hours ago', status: 'completed' },
    { app: 'CloudSync Enterprise', buyer: 'Sarah Smith', amount: '$499', date: '5 hours ago', status: 'completed' },
    { app: 'MarketBoost Suite', buyer: 'Mike Johnson', amount: '$399', date: '1 day ago', status: 'pending' },
    { app: 'DataTrack Analytics', buyer: 'Emma Wilson', amount: '$199', date: '2 days ago', status: 'completed' },
    { app: 'TaskFlow Pro', buyer: 'Alex Brown', amount: '$299', date: '3 days ago', status: 'completed' }
  ];

  const topPerformers = [
    { name: 'TaskFlow Pro', sales: 89, revenue: '$26,611', rating: 4.9 },
    { name: 'CloudSync Enterprise', sales: 67, revenue: '$33,433', rating: 4.8 },
    { name: 'MarketBoost Suite', sales: 52, revenue: '$20,748', rating: 4.7 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {/* <h2 className="text-3xl font-bold text-[#31587c]">Dashboard Overview</h2>
          <p className="text-gray-600 mt-1">Track your sales performance and analytics</p> */}
        </div>
        {/* <Button className="gap-2">
          <Download size={16} />
          Export Report
        </Button> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <div className={`flex items-center gap-1 mt-2 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    <span className="font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-[#31587c]/10 text-[#31587c]">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Sales */}
        <Card className="lg:col-span-2">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h3>
            <div className="space-y-3">
              {recentSales.map((sale, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{sale.app}</p>
                    <p className="text-sm text-gray-600">{sale.buyer}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{sale.amount}</p>
                      <p className="text-xs text-gray-500">{sale.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      sale.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {sale.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
            <div className="space-y-4">
              {topPerformers.map((app, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{app.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{app.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{app.sales} sales</span>
                    <span className="font-semibold text-[#31587c]">{app.revenue}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#31587c] h-2 rounded-full" style={{ width: `${(app.sales / 89) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


