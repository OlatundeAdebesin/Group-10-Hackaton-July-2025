import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, Download, Eye, Star, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical } from 'lucide-react';


// ==================== MY LISTINGS COMPONENT ====================
export default function MyListings() {
  const [filter, setFilter] = useState('all');
  
  const listings = [
    { id: 1, name: 'TaskFlow Pro', category: 'Productivity', price: '$299', status: 'active', sales: 89, views: 1243, rating: 4.9, image: '📊' },
    { id: 2, name: 'CloudSync Enterprise', category: 'Cloud Storage', price: '$499', status: 'active', sales: 67, views: 892, rating: 4.8, image: '☁️' },
    { id: 3, name: 'MarketBoost Suite', category: 'Marketing', price: '$399', status: 'active', sales: 52, views: 756, rating: 4.7, image: '📈' },
    { id: 4, name: 'DataTrack Analytics', category: 'Analytics', price: '$199', status: 'draft', sales: 0, views: 0, rating: 0, image: '📉' },
    { id: 5, name: 'AutoMailer Pro', category: 'Email Marketing', price: '$249', status: 'paused', sales: 34, views: 445, rating: 4.6, image: '✉️' }
  ];

  const filteredListings = filter === 'all' ? listings : listings.filter(l => l.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#31587c]">My Listings</h2>
          <p className="text-gray-600 mt-1">Manage your SaaS products and apps</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          Add New Listing
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {['all', 'active', 'draft', 'paused'].map((f) => (
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

      {/* Listings Grid */}
      <div className="grid gap-4">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="hover:shadow-lg transition-shadow">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#31587c] to-[#1CA6AF] flex items-center justify-center text-3xl flex-shrink-0">
                  {listing.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{listing.name}</h3>
                      <p className="text-sm text-gray-600">{listing.category}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      listing.status === 'active' ? 'bg-green-100 text-green-700' :
                      listing.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-600">Price</p>
                      <p className="font-semibold text-[#31587c]">{listing.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Sales</p>
                      <p className="font-semibold text-gray-900">{listing.sales}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Views</p>
                      <p className="font-semibold text-gray-900">{listing.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <p className="font-semibold text-gray-900">{listing.rating || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <Button variant="ghost" size="icon" title="Edit">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" title="View">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" title="Delete">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
