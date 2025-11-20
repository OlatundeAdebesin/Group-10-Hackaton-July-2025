import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
import React, { useState, useRef } from 'react';
import { TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, Download, Eye, Star, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical, X, Upload, Shield } from 'lucide-react';


// ==================== ACCOUNT COMPONENT ====================
export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [twoFAData, setTwoFAData] = useState({
    verificationCode: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const fileInputRef = useRef(null);

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  const handleAvatarChange = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      showNotificationMessage('Your picture has been uploaded and now being reviewed.');
    }
  };

  const handleSaveChanges = () => {
    showNotificationMessage('Profile updated successfully! Update will reflect within few seconds to 24hours');
  };

  const handleUpdatePassword = () => {
    showNotificationMessage('Password has been updated successfully');
  };

  const handleEnable2FA = () => {
    setShow2FAModal(true);
  };

  const handle2FASubmit = () => {
    if (twoFAData.newPassword !== twoFAData.confirmPassword) {
      showNotificationMessage('Passwords do not match. Please try again.');
      return;
    }
    setShow2FAModal(false);
    setTwoFAData({ verificationCode: '', oldPassword: '', newPassword: '', confirmPassword: '' });
    showNotificationMessage('Password has been changed successfully');
  };

  return (
    <div className="space-y-6">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-start gap-3 max-w-md">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{notificationMessage}</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 2FA Modal */}
      {show2FAModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-gradient-to-r from-[#31587c] to-[#1CA6AF] p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Enable Two-Factor Authentication</h3>
                    <p className="text-sm text-white text-opacity-90 mt-1">Secure your account with 2FA</p>
                  </div>
                </div>
                <button onClick={() => setShow2FAModal(false)} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={twoFAData.verificationCode}
                  onChange={(e) => setTwoFAData({...twoFAData, verificationCode: e.target.value})}
                  placeholder="Enter 6 alphanumeric code"
                  maxLength={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31587c] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the 6 alphanumeric code sent to your email, for verification</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Old Password
                </label>
                <input
                  type="password"
                  value={twoFAData.oldPassword}
                  onChange={(e) => setTwoFAData({...twoFAData, oldPassword: e.target.value})}
                  placeholder="Enter old password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31587c] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={twoFAData.newPassword}
                  onChange={(e) => setTwoFAData({...twoFAData, newPassword: e.target.value})}
                  placeholder="Enter new password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31587c] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={twoFAData.confirmPassword}
                  onChange={(e) => setTwoFAData({...twoFAData, confirmPassword: e.target.value})}
                  placeholder="Confirm new password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31587c] focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handle2FASubmit} className="flex-1">
                  Submit
                </Button>
                <Button variant="outline" onClick={() => setShow2FAModal(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold text-[#31587c]">Account Settings</h2>
        <p className="text-gray-600 mt-1">Manage your seller profile and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {['profile', 'billing', 'notifications', 'security'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm capitalize transition-colors ${
              activeTab === tab
                ? 'text-[#31587c] border-b-2 border-[#31587c]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Profile</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#31587c] to-[#1CA6AF] flex items-center justify-center text-2xl text-white font-bold">
                  OA
                </div>
                <div>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button size="sm" onClick={handleAvatarChange}>Change Avatar</Button>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max 2MB</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" defaultValue="OA Software Solutions" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <input type="email" defaultValue="contact@oasoftware.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input type="url" defaultValue="https://oasoftware.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" defaultValue="+234 803 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea rows={4} defaultValue="We build innovative SaaS solutions for modern businesses." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={handleSaveChanges}>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Billing Tab */}
      {activeTab === 'billing' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-blue-900">Bank Account Details Connected</p>
                    <p className="text-sm text-blue-700 mt-1">Your account is connected and ready to receive payments</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID</label>
                  <input type="text" defaultValue="XX-XXXXXXX" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]">
                    <option>Limited Liability Company (LLC)</option>
                    <option>Corporation</option>
                    <option>Sole Proprietor</option>
                  </select>
                </div>
              </div>
              <Button variant="outline">Update Billing Details</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: 'New Sales', description: 'Get notified when someone purchases your app' },
                { label: 'Customer Reviews', description: 'Receive alerts for new customer reviews' },
                { label: 'Payout Notifications', description: 'Updates on your payout schedule' },
                { label: 'Marketing Updates', description: 'Tips and best practices for sellers' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <input type="checkbox" defaultChecked={idx < 3} className="w-4 h-4 text-[#31587c] rounded focus:ring-[#31587c]" />
                </div>
              ))}
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
                  <input type="password" placeholder="Current password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                  <input type="password" placeholder="New password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                  <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31587c]" />
                  <Button onClick={handleUpdatePassword}>Update Password</Button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                <Button variant="outline" onClick={handleEnable2FA}>Enable 2FA</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
// ==================== END OF ACCOUNT COMPONENT ====================