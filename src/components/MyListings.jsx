import React, { useState } from 'react';
import { Eye, Star, Edit, Trash2, Plus, X, Upload, Check, CheckCircle } from 'lucide-react';

export default function MyListings() {
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [showFileNotif, setShowFileNotif] = useState(false);
  const [showSuccessNotif, setShowSuccessNotif] = useState(false);
  const [formData, setFormData] = useState({
    appName: '',
    category: '',
    price: '',
    developerName: '',
    description: '',
    file: null
  });
  
  const listings = [
    { id: 1, name: 'TaskFlow Pro', category: 'Productivity', price: '$299', status: 'active', sales: 89, views: 1243, rating: 4.9, image: '📊' },
    { id: 2, name: 'CloudSync Enterprise', category: 'Cloud Storage', price: '$499', status: 'active', sales: 67, views: 892, rating: 4.8, image: '☁️' },
    { id: 3, name: 'MarketBoost Suite', category: 'Marketing', price: '$399', status: 'active', sales: 52, views: 756, rating: 4.7, image: '📈' },
    { id: 4, name: 'DataTrack Analytics', category: 'Analytics', price: '$199', status: 'draft', sales: 0, views: 0, rating: 0, image: '📉' },
    { id: 5, name: 'AutoMailer Pro', category: 'Email Marketing', price: '$249', status: 'paused', sales: 34, views: 445, rating: 4.6, image: '✉️' }
  ];

  const filteredListings = filter === 'all' ? listings : listings.filter(l => l.status === filter);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setShowFileNotif(true);
      setTimeout(() => setShowFileNotif(false), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.appName || !formData.category || !formData.price || !formData.developerName || !formData.description || !formData.file) {
      alert('Please fill in all required fields');
      return;
    }
    
    setShowForm(false);
    setShowSuccessNotif(true);
    setTimeout(() => setShowSuccessNotif(false), 4000);
    setFormData({ appName: '', category: '', price: '', developerName: '', description: '', file: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#31587c]">My Listings</h2>
            <p className="text-gray-600 mt-1">Manage your SaaS products and apps</p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#31587c] to-[#1CA6AF] text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            <Plus size={16} />
            Add New Listing
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {['all', 'active', 'draft', 'paused'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize font-medium transition-all ${
                filter === f 
                  ? 'bg-[#31587c] text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid gap-4">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
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
                    {/* <div className="flex items-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Listing Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-2xl font-bold text-[#31587c]">Add New Listing</h3>
                <button 
                  onClick={() => setShowForm(false)} 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    App Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.appName}
                    onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CA6AF] focus:border-transparent outline-none transition-all"
                    placeholder="Enter app name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CA6AF] focus:border-transparent outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="CRM">CRM</option>
                    <option value="Cloud">Cloud</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CA6AF] focus:border-transparent outline-none transition-all"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Developer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.developerName}
                    onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CA6AF] focus:border-transparent outline-none transition-all"
                    placeholder="Enter developer name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    App Description and Features <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CA6AF] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe your app and its key features..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    App File <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".zip,.rar,.tar,.gz"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#1CA6AF] hover:bg-gray-50 transition-all"
                    >
                      <Upload size={20} className="text-gray-400" />
                      <span className="text-gray-600">
                        {formData.file ? formData.file.name : 'Browse file from storage'}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#31587c] to-[#1CA6AF] text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Submit Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* File Added Notification */}
        {showFileNotif && (
          <div className="fixed top-6 right-6 z-50 animate-slide-in-right">
            <div className="bg-white rounded-lg shadow-xl border border-green-200 p-4 flex items-center gap-3 min-w-[300px]">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">File Added</p>
                <p className="text-sm text-gray-600">File successfully added to form</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Notification */}
        {showSuccessNotif && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-scale-in">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4 animate-bounce-once">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
                <p className="text-gray-600 mb-6">Your app has been listed successfully!</p>
                <div className="flex gap-2 justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#31587c] animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1CA6AF] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-[#31587c] animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-in-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}