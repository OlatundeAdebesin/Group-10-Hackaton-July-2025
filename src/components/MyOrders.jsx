 import React, { useState } from 'react';
import { Star, Package, Download, ExternalLink, MessageSquare, AlertCircle, CheckCircle, Clock, Heart, Trash2, ShoppingCart, Filter, Search, Calendar, DollarSign, Tag, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
import { Link } from 'react-router-dom';

// ==================== MY ORDERS COMPONENT ====================
export function MyOrders() {
  const [filter, setFilter] = useState('all');
  
  const orders = [
    {
      id: 'ORD-2024-001',
      app: 'TaskFlow Pro',
      date: 'Nov 15, 2025',
      price: '$299',
      status: 'completed',
      downloadLink: '#',
      image: '📊',
      orderDate: '2 days ago',
      license: 'Single User',
      support: 'Premium'
    },
    {
      id: 'ORD-2024-002',
      app: 'CloudSync Enterprise',
      date: 'Nov 10, 2025',
      price: '$499',
      status: 'completed',
      downloadLink: '#',
      image: '☁️',
      orderDate: '1 week ago',
      license: 'Team (5 users)',
      support: 'Enterprise'
    },
    {
      id: 'ORD-2024-003',
      app: 'MarketBoost Suite',
      date: 'Nov 8, 2025',
      price: '$399',
      status: 'processing',
      downloadLink: null,
      image: '📈',
      orderDate: '11 days ago',
      license: 'Single User',
      support: 'Standard'
    },
    {
      id: 'ORD-2024-004',
      app: 'DataTrack Analytics',
      date: 'Oct 28, 2025',
      price: '$199',
      status: 'completed',
      downloadLink: '#',
      image: '📉',
      orderDate: '3 weeks ago',
      license: 'Single User',
      support: 'Basic'
    },
    {
      id: 'ORD-2024-005',
      app: 'AutoMailer Pro',
      date: 'Oct 15, 2025',
      price: '$249',
      status: 'refunded',
      downloadLink: null,
      image: '✉️',
      orderDate: '1 month ago',
      license: 'Single User',
      support: 'N/A'
    }
  ];

  const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  const stats = [
    { label: 'Total Orders', value: '5', icon: <Package size={20} /> },
    { label: 'Active Apps', value: '3', icon: <CheckCircle size={20} /> },
    { label: 'Total Spent', value: '$1,546', icon: <DollarSign size={20} /> },
    { label: 'Pending', value: '1', icon: <Clock size={20} /> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {/* <h2 className="text-3xl font-bold text-[#1CA6AF]">My Orders</h2>
          <p className="text-gray-600 mt-1">Track your purchases and downloads</p> */}
        </div>
        {/* <Button className="gap-2">
          <Download size={16} />
          Download Invoice
        </Button> */}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1CA6AF]/10 text-[#1CA6AF]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {['all', 'completed', 'processing', 'refunded'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="hover:shadow-lg transition-shadow">
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#1CA6AF] to-[#31587c] flex items-center justify-center text-4xl flex-shrink-0">
                  {order.image}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{order.app}</h3>
                      <p className="text-sm text-gray-600">Order #{order.id} • {order.orderDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Price</p>
                      <p className="font-semibold text-gray-900">{order.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">License</p>
                      <p className="font-semibold text-gray-900">{order.license}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Support</p>
                      <p className="font-semibold text-gray-900">{order.support}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">{order.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {order.downloadLink ? (
                      <>
                        {/* <Button size="sm" className="gap-2">
                          <Download size={14} />
                          Download
                        </Button>
                        {/* <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink size={14} />
                          View Details
                        </Button> */}
                        {/* <Button variant="ghost" size="sm" className="gap-2">
                          <MessageSquare size={14} />
                          Support
                        </Button> */} 
                      </>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        <Clock size={14} className="mr-2" />
                        Processing
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <Card className="bg-blue-50 border border-blue-200">
        <CardContent>
          <div className="flex items-start gap-3">
            <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Need Help?</h3>
              <p className="text-sm text-blue-700 mb-3">
                Having trouble with your order? Our support team is here to help 24/7.
              </p>
              <Link to = "/Contact">
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Contact Support
              </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
