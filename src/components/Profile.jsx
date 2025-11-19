 import React, { useState } from 'react';
import { Star, Package, Download, ExternalLink, MessageSquare, AlertCircle, CheckCircle, Clock, Heart, Trash2, ShoppingCart, Filter, Search, Calendar, DollarSign, Tag, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';

// ==================== PROFILE COMPONENT ====================
export function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  const profileStats = [
    { label: 'Total Purchases', value: '5', icon: <ShoppingCart size={20} /> },
    { label: 'Wishlist Items', value: '4', icon: <Heart size={20} /> },
    { label: 'Reviews Written', value: '12', icon: <Star size={20} /> },
    { label: 'Member Since', value: 'Oct 2024', icon: <Calendar size={20} /> }
  ];

  const recentActivity = [
    { action: 'Purchased TaskFlow Pro', date: '2 days ago', icon: <Package size={16} />, color: 'text-green-600' },
    { action: 'Added to wishlist', date: '5 days ago', icon: <Heart size={16} />, color: 'text-pink-600' },
    { action: 'Wrote a review', date: '1 week ago', icon: <Star size={16} />, color: 'text-yellow-600' },
    { action: 'Downloaded CloudSync', date: '2 weeks ago', icon: <Download size={16} />, color: 'text-blue-600' }
  ];

  return (
    <div className="space-y-6">
      <div>
        {/* <h2 className="text-3xl font-bold text-[#1CA6AF]">My Profile</h2>
        <p className="text-gray-600 mt-1">Manage your account and preferences</p> */}
      </div>

      {/* Profile Header Card */}
      <Card className="bg-gradient-to-r from-[#1CA6AF] to-[#31587c] text-white">
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold backdrop-blur-sm border-4 border-white/30">
              OA
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Olamide Adeleke</h3>
              <p className="text-sm opacity-90 mb-3">olamide@live.com</p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
                  Premium Member
                </span>
                <span className="text-sm opacity-90">Joined October 2024</span>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-[#1CA6AF] hover:bg-white/90 border-white">
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profileStats.map((stat, idx) => (
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

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {['overview', 'settings', 'security', 'preferences'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm capitalize transition-colors ${
              activeTab === tab
                ? 'text-[#1CA6AF] border-b-2 border-[#1CA6AF]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                        {activity.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ShoppingCart size={16} />
                  View Orders
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Heart size={16} />
                  My Wishlist
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Download size={16} />
                  Downloads
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare size={16} />
                  Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="Olamide Adeleke" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="olamide@live.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" defaultValue="+234 800 123 4567" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input type="text" defaultValue="Lagos, Nigeria" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea rows={4} defaultValue="Software enthusiast and SaaS lover. Always looking for tools to boost productivity." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Change Password</h4>
                <div className="space-y-3">
                  <input type="password" placeholder="Current password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                  <input type="password" placeholder="New password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                  <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]" />
                  <Button>Update Password</Button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-2">Active Sessions</h4>
                <p className="text-sm text-gray-600 mb-3">Manage devices where you're currently logged in</p>
                <Button variant="outline">View Sessions</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Email Notifications</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Order Updates', description: 'Notifications about your orders and downloads' },
                    { label: 'Price Drops', description: 'Get notified when wishlist items go on sale' },
                    { label: 'New Releases', description: 'Updates about new apps in your favorite categories' },
                    { label: 'Promotional Offers', description: 'Special deals and discounts' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <input type="checkbox" defaultChecked={idx < 2} className="w-4 h-4 text-[#1CA6AF] rounded focus:ring-[#1CA6AF]" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Display Settings</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CA6AF]">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>NGN (₦)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
