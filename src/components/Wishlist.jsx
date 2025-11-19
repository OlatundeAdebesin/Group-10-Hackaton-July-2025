import React, { useState } from 'react';
import { Star, Package, Download, ExternalLink, MessageSquare, AlertCircle, CheckCircle, Clock, Heart, Trash2, ShoppingCart, Filter, Search, Calendar, DollarSign, Tag, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';

// ==================== WISHLIST COMPONENT ====================
export function Wishlist() {
  const [sortBy, setSortBy] = useState('recent');
  
  const wishlistItems = [
    {
      id: 1,
      name: 'Boostify AI',
      category: 'AI Tools',
      price: '$199',
      originalPrice: '$299',
      discount: '33% OFF',
      rating: 4.5,
      reviews: 145,
      image: '🤖',
      addedDate: '2 days ago',
      inStock: true,
      popular: true
    },
    {
      id: 2,
      name: 'SecureVault Pro',
      category: 'Security',
      price: '$349',
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 289,
      image: '🔒',
      addedDate: '5 days ago',
      inStock: true,
      popular: false
    },
    {
      id: 3,
      name: 'DesignFlow Studio',
      category: 'Design',
      price: '$449',
      originalPrice: '$599',
      discount: '25% OFF',
      rating: 4.7,
      reviews: 423,
      image: '🎨',
      addedDate: '1 week ago',
      inStock: true,
      popular: true
    },
    {
      id: 4,
      name: 'TeamChat Plus',
      category: 'Communication',
      price: '$179',
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviews: 567,
      image: '💬',
      addedDate: '2 weeks ago',
      inStock: false,
      popular: false
    }
  ];

  const collections = [
    { name: 'Productivity Bundle', items: 3, savings: '$200' },
    { name: 'Marketing Suite', items: 2, savings: '$150' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#1CA6AF]">My Wishlist</h2>
          <p className="text-gray-600 mt-1">Save apps for later and track price drops</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]"
          >
            <option value="recent">Most Recent</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <Button className="gap-2">
            <ShoppingCart size={16} />
            Add All to Cart
          </Button>
        </div>
      </div>

      {/* Wishlist Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Saved Apps</p>
                <p className="text-2xl font-bold text-gray-900">{wishlistItems.length}</p>
              </div>
              <Heart size={32} className="text-[#1CA6AF] fill-[#1CA6AF]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Potential Savings</p>
                <p className="text-2xl font-bold text-green-600">$250</p>
              </div>
              <Tag size={32} className="text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-[#1CA6AF] to-[#31587c] text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Price Alerts</p>
                <p className="text-2xl font-bold">2 Active</p>
              </div>
              <AlertCircle size={32} className="opacity-75" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Saved Collections */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">My Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#1CA6AF]/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{collection.name}</h4>
                    <p className="text-sm text-gray-600">{collection.items} apps • Save {collection.savings}</p>
                  </div>
                  <Button size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
            {item.discount && (
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white shadow-lg">
                {item.discount}
              </div>
            )}
            {!item.inStock && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-gray-500 text-white shadow-lg">
                Out of Stock
              </div>
            )}
            
            <CardContent>
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#1CA6AF] to-[#31587c] flex items-center justify-center text-5xl flex-shrink-0">
                  {item.image}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#1CA6AF] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                    {item.popular && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-[#1CA6AF]">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{item.originalPrice}</span>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Added {item.addedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <Button size="sm" className="flex-1 gap-2" disabled={!item.inStock}>
                  <ShoppingCart size={14} />
                  {item.inStock ? 'Add to Cart' : 'Notify Me'}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink size={14} />
                  View
                </Button>
                <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Price Drop Alerts */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
        <CardContent>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-green-500 text-white">
              <TrendingUp size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Price Drop Alert!</h3>
              <p className="text-sm text-gray-700 mb-3">
                2 apps in your wishlist have dropped in price. Don't miss out on these deals!
              </p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                View Deals
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
