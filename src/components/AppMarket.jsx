// Batch 1 — UI + Shared Components

// components/Sidebar.jsx
export function Sidebar() {
  return (
    <div className="w-64 bg-[#31587c] text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Explore</li>
        <li>My Orders</li>
      </ul>
    </div>
  );
}

// components/Topbar.jsx
export function Topbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#31587c]">Topbar</h1>
      <input className="border rounded-xl px-3 py-2" placeholder="Search..." />
    </div>
  );
}

// components/Button.jsx
export function Button({ children, ...props }) {
  return (
    <button {...props} className={`px-4 py-2 rounded-xl shadow ${props.className || "bg-[#31587c] text-white"}`}>{children}</button>
  );
}

// components/Card.jsx
export function Card({ children, className = "" }) {
  return <div className={`rounded-2xl shadow bg-white ${className}`}>{children}</div>;
}

// components/CardContent.jsx
export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

// components/Switch.jsx
export function Switch({ checked, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => onChange(!checked)}
        className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition ${checked ? "bg-green-500" : "bg-gray-300"}`}
      >
        <div className={`w-4 h-4 bg-white rounded-full transition ${checked ? "translate-x-5" : "translate-x-1"}`}></div>
      </div>
      <span>{checked ? "On" : "Off"}</span>
    </div>
  );
}

// components/DemoCard.jsx
export function DemoCard({ title, description }) {
  return (
    <Card>
      <CardContent>
        <h3 className="font-bold text-lg text-[#31587c]">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}

// components/Layout.jsx
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// components/Dashboard.jsx
export function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#31587c] mb-4">Dashboard</h1>
      <p className="text-gray-700">This is the shared dashboard component.</p>
    </div>
  );
}


// Batch 2 — Buyer Pages
// pages/buyer/ProductList.jsx
export function ProductList() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Products</h1>
      <p>Product listing goes here.</p>
    </div>
  );
}

// pages/buyer/ProductDetails.jsx
export function ProductDetails() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Product Details</h1>
      <p>Details of selected product.</p>
    </div>
  );
}

// pages/buyer/Cart.jsx
export function Cart() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Your Cart</h1>
      <p>Cart items displayed here.</p>
    </div>
  );
}

// Batch 3 — Seller Pages
// pages/seller/SellerDashboard.jsx
export function SellerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Seller Dashboard</h1>
      <p>Overview for seller.</p>
    </div>
  );
}

// pages/seller/CreateProduct.jsx
export function CreateProduct() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Create Product</h1>
      <p>Form for creating new product.</p>
    </div>
  );
}

// pages/seller/SellerOrders.jsx
export function SellerOrders() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Seller Orders</h1>
      <p>List of orders from buyers.</p>
    </div>
  );
}

// Batch 4 — Layout + App Wrapper
// App.jsx
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";

export default function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

// Batch 5 — Global Context Providers
// context/GlobalProvider.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const ModalContext = createContext();
export const CheckoutContext = createContext();
export const CartContext = createContext();

export function GlobalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const clearCart = () => setCart([]);

  return (
    <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
      <CheckoutContext.Provider value={{ cart, addToCart, clearCart }}>
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
          {children}
        </CartContext.Provider>
      </CheckoutContext.Provider>
    </ModalContext.Provider>
  );
}

// Batch 6 — Hooks
// hooks/useCheckout.js
import { useContext } from "react";
import { CheckoutContext } from "../context/GlobalProvider";

export function useCheckout() {
  const { cart, addToCart, clearCart } = useContext(CheckoutContext);

  const startCheckout = () => {
    return {
      redirectUrl: "/checkout/mock-stripe",
      cart,
    };
  };

  return { cart, addToCart, clearCart, startCheckout };
}

// Batch 7 — Modal Component
// components/PreviewModal.jsx
import { motion } from "framer-motion";
import { useContext } from "react";
import { ModalContext } from "../context/GlobalProvider";

export function PreviewModal() {
  const { modalContent, closeModal } = useContext(ModalContext);
  if (!modalContent) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow p-6 w-[500px]"
      >
        <button onClick={closeModal} className="float-right text-gray-500">✕</button>
        {modalContent}
      </motion.div>
    </div>
  );
}

// Batch 8 — Mock Stripe Checkout Page
// pages/checkout/MockStripe.jsx
export function MockStripe() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#31587c] mb-4">Stripe Checkout</h1>
      <p className="text-gray-700">This simulates a Stripe hosted checkout page.</p>
    </div>
  );
}

// Batch 9 — ProductCard (Reusable)
// components/ProductCard.jsx
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { Button } from "./Button";
import { useContext } from "react";
import { ModalContext, CheckoutContext } from "../context/GlobalProvider";
import { motion } from "framer-motion";

export function ProductCard({ product }) {
  const { openModal } = useContext(ModalContext);
  const { addToCart } = useContext(CheckoutContext);

  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="p-4 cursor-pointer">
        <CardContent>
          <h3 className="font-bold text-lg text-[#31587c]">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-semibold mt-2">${product.price}/mo</p>

          <div className="flex gap-2 mt-3">
            <Button onClick={() => openModal(<div><h2 className="text-xl font-bold">{product.name}</h2><p>{product.description}</p></div>)}>Preview</Button>
            <Button className="bg-teal-500 text-white" onClick={() => addToCart(product)}>Buy</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Batch 10 — Auto‑Integrate into Buyer Marketplace Pages
// pages/buyer/ProductList.jsx (Enhanced)
export function ProductList() {
  const demo = [
    { id: 1, name: "AdBoost Pro", price: 29, description: "AI Ads" },
    { id: 2, name: "FlowCRM", price: 39, description: "CRM System" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demo.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

// Batch 11 — Auto‑Integrate into Seller Pages
// pages/seller/SellerDashboard.jsx (Enhanced)
export function SellerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Seller Dashboard</h1>
      <p className="text-gray-700">Manage your products and check activity.</p>
    </div>
  );
}

// Batch 12 — Routing Setup
// router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { ProductList } from "../pages/buyer/ProductList";
import { ProductDetails } from "../pages/buyer/ProductDetails";
import { Cart } from "../pages/buyer/Cart";
import { MockStripe } from "../pages/checkout/MockStripe";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/mock-stripe" element={<MockStripe />} />
      </Routes>
    </BrowserRouter>
  );
}

// Batch 13 — Product Details Page (Fullscreen)
// pages/buyer/ProductDetails.jsx (Enhanced)
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../components/Button";
import { useCheckout } from "../../hooks/useCheckout";

export function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCheckout();

  const product = {
    id,
    name: "Demo Product",
    description: "Full screen product details for item " + id,
    price: 49,
    rating: 4.7,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-3xl font-bold text-[#31587c] mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}/mo</p>
      <p className="text-orange-500 font-semibold mt-1">⭐ {product.rating}</p>
      <Button className="mt-4 bg-teal-500 text-white" onClick={() => addToCart(product)}>Add to Cart</Button>
    </motion.div>
  );
}

// Batch 14 — Cart Page (Enhanced)
// pages/buyer/Cart.jsx (Enhanced)
import { useCheckout } from "../../hooks/useCheckout";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { cart, clearCart } = useCheckout();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Your Cart</h1>
      {cart.length === 0 && <p>No items in cart.</p>}
      <ul className="space-y-2">
        {cart.map((item, i) => (
          <li key={i} className="p-3 bg-white shadow rounded-xl">
            {item.name} — ${item.price}/mo
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <Button className="mt-4 bg-teal-500 text-white" onClick={() => navigate("/checkout/mock-stripe")}>Checkout</Button>
      )}
    </div>
  );
}



// Batch 15 — UI Base Components
// components/Card.jsx
export function Card({ children, className = "" }) {
  return <div className={`rounded-2xl shadow bg-white ${className}`}>{children}</div>;
}

// components/CardContent.jsx
export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// components/Button.jsx
export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl shadow text-sm font-semibold hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}


// Batch 16 — Search & Category Components
// components/SearchBar.jsx
export function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  );
}

// components/CategoryTabs.jsx
export function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="flex gap-3 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-xl border shadow-sm text-sm font-semibold transition ${
            active === cat ? "bg-teal-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// Batch 17 — Enhanced Marketplace with Search + Categories + Pagination
// pages/buyer/EnhancedMarketplace.jsx
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { CategoryTabs } from "../../components/CategoryTabs";
import { ProductCard } from "../../components/ProductCard";

export function EnhancedMarketplace() {
  const categories = ["All", "Marketing", "CRM", "Cloud Services"];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const products = [
    { id: 1, name: "AdBoost Pro", price: 29, description: "AI Ad automation", category: "Marketing" },
    { id: 2, name: "FlowCRM", price: 39, description: "Full CRM suite", category: "CRM" },
    { id: 3, name: "CloudNova", price: 59, description: "Cloud compute & storage", category: "Cloud Services" },
    { id: 4, name: "LeadPilot", price: 19, description: "Lead generation AI", category: "Marketing" },
    { id: 5, name: "CRM Nexus", price: 44, description: "Enterprise CRM", category: "CRM" },
  ];

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  const perPage = 4;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#31587c] mb-4">Enhanced Marketplace</h1>

      <SearchBar value={search} onChange={setSearch} />
      <CategoryTabs categories={categories} active={category} onChange={setCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-2 rounded-lg border bg-white disabled:opacity-40"
        >
          Prev
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-2 rounded-lg border bg-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Batch 18 — Inject Enhanced Marketplace into Seller Pages
// pages/seller/SellerDashboard.jsx (Append Preview)
export function SellerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#31587c] mb-4">Seller Dashboard</h1>
      <p className="text-gray-700 mb-4">Manage your products and check activity.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#31587c]">Marketplace Preview</h2>
      <EnhancedMarketplace />
    </div>
  );
}

