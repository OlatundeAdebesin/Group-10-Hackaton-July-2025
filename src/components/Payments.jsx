import { Card } from './Card';
import { CardContent } from './CardContent';
import { Button } from './Button';
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, Download, Eye, Star, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical } from 'lucide-react';


// ==================== PAYMENTS COMPONENT ====================
export default function Payments() {
  const summary = {
    totalEarnings: '$24,580',
    pendingPayouts: '$3,240',
    thisMonth: '$8,950',
    lastPayout: '$5,680'
  };

  const transactions = [
    { id: 'TXN-001', date: 'Nov 15, 2025', description: 'TaskFlow Pro - 3 sales', amount: '$897', status: 'completed', method: 'Stripe' },
    { id: 'TXN-002', date: 'Nov 14, 2025', description: 'CloudSync Enterprise - 2 sales', amount: '$998', status: 'completed', method: 'PayPal' },
    { id: 'TXN-003', date: 'Nov 13, 2025', description: 'MarketBoost Suite - 4 sales', amount: '$1,596', status: 'pending', method: 'Stripe' },
    { id: 'TXN-004', date: 'Nov 12, 2025', description: 'DataTrack Analytics - 5 sales', amount: '$995', status: 'completed', method: 'Stripe' },
    { id: 'TXN-005', date: 'Nov 11, 2025', description: 'Monthly Payout', amount: '-$5,680', status: 'paid', method: 'Bank Transfer' }
  ];

  const upcomingPayouts = [
    { date: 'Nov 25, 2025', amount: '$3,240', status: 'scheduled' },
    { date: 'Dec 10, 2025', amount: 'TBD', status: 'pending' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#31587c]">Payments & Earnings</h2>
          <p className="text-gray-600 mt-1">Track your revenue and payout history</p>
        </div>
        {/* <Button className="gap-2">
          <Download size={16} />
          Download Statement
        </Button> */}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#31587c] to-[#1CA6AF] text-white">
          <CardContent>
            <p className="text-sm opacity-90 mb-1">Total Earnings</p>
            <h3 className="text-3xl font-bold">{summary.totalEarnings}</h3>
            <p className="text-xs opacity-75 mt-2">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-600 mb-1">Pending Payouts</p>
            <h3 className="text-3xl font-bold text-yellow-600">{summary.pendingPayouts}</h3>
            <p className="text-xs text-gray-500 mt-2">Awaiting transfer</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-600 mb-1">This Month</p>
            <h3 className="text-3xl font-bold text-green-600">{summary.thisMonth}</h3>
            <p className="text-xs text-gray-500 mt-2">November 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-600 mb-1">Last Payout</p>
            <h3 className="text-3xl font-bold text-gray-900">{summary.lastPayout}</h3>
            <p className="text-xs text-gray-500 mt-2">Nov 11, 2025</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History */}
        <Card className="lg:col-span-2">
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter size={14} />
                Filter
              </Button>
            </div>
            <div className="space-y-3">
              {transactions.map((txn) => (
                <div key={txn.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-full ${
                      txn.status === 'completed' ? 'bg-green-100' :
                      txn.status === 'pending' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      <CreditCard size={16} className={
                        txn.status === 'completed' ? 'text-green-600' :
                        txn.status === 'pending' ? 'text-yellow-600' :
                        'text-blue-600'
                      } />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{txn.description}</p>
                      <p className="text-xs text-gray-500">{txn.date} • {txn.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${txn.amount.startsWith('-') ? 'text-gray-900' : 'text-green-600'}`}>
                      {txn.amount}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                      txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payouts */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Payouts</h3>
            <div className="space-y-4">
              {upcomingPayouts.map((payout, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#31587c]/5 border border-[#31587c]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-[#31587c]" />
                    <p className="text-sm font-medium text-gray-900">{payout.date}</p>
                  </div>
                  <p className="text-2xl font-bold text-[#31587c] mb-1">{payout.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    payout.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {payout.status}
                  </span>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Configure Payout Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
// ==================== END OF PAYMENTS COMPONENT ====================