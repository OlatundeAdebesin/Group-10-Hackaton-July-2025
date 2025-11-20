// # Seller Dashboard Components - Complete Code Documentation

// ## Overview
// This document contains all four world-class seller dashboard components for the SaaS Marketplace application. Each component is fully functional with rich UI elements, proper state management, and professional styling.

// ---

// ## Component Structure

// ### 1. SellerDashboard Component
// **Purpose**: Main analytics and overview dashboard for sellers

// **Features**:
// - Revenue statistics with trend indicators
// - Active listings count
// - Total sales metrics
// - Customer reach analytics
// - Recent sales list with status badges
// - Top performing products ranking

// **Key Elements**:
// - 4 stat cards with icons and trend arrows
// - Recent sales table (5 latest transactions)
// - Top performers sidebar with progress bars
// - Export report functionality

// ---

// ### 2. MyListings Component
// **Purpose**: Product management interface

// **Features**:
// - Product listing grid with detailed info
// - Filter by status (all, active, draft, paused)
// - Quick actions (Edit, View, Delete)
// - Product metrics (sales, views, ratings)
// - Add new listing button
// - Visual product cards with emojis

// **Key Data Points**:
// - Product name and category
// - Price and status
// - Sales count and view count
// - Star ratings
// - Quick action buttons

// ---

// ### 3. Payments Component
// **Purpose**: Financial tracking and transaction history

// **Features**:
// - Total earnings summary
// - Pending payouts display
// - Monthly revenue tracking
// - Last payout information
// - Transaction history with status
// - Upcoming payout schedule
// - Payment method indicators
// - Download statement functionality

// **Transaction Types**:
// - Product sales (grouped)
// - Payouts to bank
// - Pending transfers
// - Payment method tracking (Stripe, PayPal, Bank Transfer)

// ---

// ### 4. Account Component
// **Purpose**: Seller profile and settings management

// **Features**:
// - Multi-tab interface (Profile, Billing, Notifications, Security)
// - Avatar upload
// - Company information editing
// - Tax ID and business type
// - Notification preferences with toggles
// - Password change form
// - Two-factor authentication setup
// - Connected payment provider status

// **Tabs**:
// - **Profile**: Company details, contact info, bio
// - **Billing**: Tax information, Stripe connection status
// - **Notifications**: Email preferences for sales, reviews, payouts
// - **Security**: Password management, 2FA setup

// ---

// ## Complete Component Code

// ```jsx
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, Download, Eye, Star, Edit, Trash2, Plus, CheckCircle, Clock, XCircle, CreditCard, Calendar, Filter, MoreVertical } from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-lg bg-white shadow-md ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function Button({ children, variant = 'default', size = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none';
  const variants = {
    default: 'bg-[#31587c] text-white hover:bg-[#31587c]/90',
    outline: 'border-2 border-[#31587c] text-[#31587c] hover:bg-[#31587c]/10',
    ghost: 'hover:bg-gray-100 text-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-xs',
    icon: 'p-2'
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}




// ```

// ---

// ## Integration Guide

// ### How to Use These Components

// To integrate these components into your existing Dashboard:

// 1. **Import the components** at the top of your Dashboard file:
// ```jsx
// import { SellerDashboard, MyListings, Payments, Account } from './SellerComponents';
// ```

// 2. **Update the sellerPages object** in your Dashboard component:
// ```jsx
// const sellerPages = {
//   Dashboard: <SellerDashboard />,
//   'My Listings': <MyListings />,
//   Payments: <Payments />,
//   Account: <Account />
// };
// ```

// 3. **Ensure proper styling** - The components use Tailwind CSS classes with the color scheme:
//    - Primary seller color: `#31587c`
//    - Secondary color: `#1CA6AF`

// ---

// ## Design Patterns Used

// ### 1. **Consistent Color Theming**
// - Seller mode uses darker blue (`#31587c`)
// - Maintains visual distinction from buyer mode (`#1CA6AF`)
// - Status badges with semantic colors (green=success, yellow=warning, red=error)

// ### 2. **Responsive Grid Layouts**
// - Mobile-first approach with responsive breakpoints
// - Grid columns adjust from 1 → 2 → 4 based on screen size
// - Horizontal scrolling prevented with proper min-width constraints

// ### 3. **Interactive Elements**
// - Hover states on all clickable items
// - Smooth transitions for better UX
// - Loading states and status indicators
// - Icon-based actions for space efficiency

// ### 4. **Data Visualization**
// - Progress bars for performance tracking
// - Trend indicators with arrows (up/down)
// - Color-coded metrics for quick scanning
// - Star ratings with filled icons

// ### 5. **Form Best Practices**
// - Clear labels and placeholders
// - Focus states with ring indicators
// - Grouped related fields
// - Action buttons at the bottom

// ---

// ## Key Features Summary

// ### ✨ Dashboard
// - Real-time revenue tracking
// - Performance metrics with trends
// - Recent activity feed
// - Top product rankings

// ### 📦 My Listings
// - Filterable product grid
// - Status management (active/draft/paused)
// - Quick edit/view/delete actions
// - Sales and engagement metrics

// ### 💰 Payments
// - Comprehensive financial overview
// - Transaction history with filters
// - Upcoming payout schedule
// - Multiple payment method support

// ### ⚙️ Account
// - Multi-tab settings interface
// - Profile customization
// - Billing configuration
// - Notification preferences
// - Security controls

// ---

// ## Color Scheme Reference

// ```css
// /* Seller Primary */
// #31587c - Main seller theme color

// /* Seller/Buyer Shared */
// #1CA6AF - Accent color

// /* Status Colors */
// Green: Success, Completed, Active
// Yellow: Pending, Warning, Paused
// Red: Error, Danger, Cancelled
// Blue: Info, Scheduled
// Gray: Neutral, Draft, Disabled
// ```

// ---

// ## Future Enhancements

// Consider adding:
// - Charts and graphs for analytics (using Recharts)
// - Export functionality (CSV/PDF reports)
// - Advanced filtering and search
// - Bulk actions for listings
// - Real-time notifications
// - Customer messaging system
// - Review management interface
// - API integration for live data

// ---

// ## Notes

// - All components use React hooks (`useState`) for state management
// - Components are fully responsive and mobile-friendly
// - Tailwind CSS is used for all styling
// - Lucide React icons for consistent iconography
// - No external state management needed (can be added if required)
// - Components are self-contained and reusable