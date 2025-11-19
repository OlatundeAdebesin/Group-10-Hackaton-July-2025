// COMPLETE: Global Provider + Contexts + Product components + Routes

import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { CardContent } from "../components/CardContent";
import { Button } from "../components/Button";
import { X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

// ---------------------------
// Demo product dataset (15)
// ---------------------------
const demoProducts = [
  { id: 1, name: "AdPro 360", category: "Marketing", developer: "BlueStack Digital", price: 29, rating: 4.5, description: "AI-powered ad optimization suite." },
  { id: 2, name: "MarketBoostX", category: "Marketing", developer: "NovaWorks", price: 19, rating: 4.2, description: "Social campaigns automation." },
  { id: 3, name: "SEOPilot", category: "Marketing", developer: "Orbit Systems", price: 25, rating: 4.7, description: "Automated keyword research + backlink suggestions." },
  { id: 4, name: "ClientHub CRM", category: "CRM", developer: "Stackline", price: 39, rating: 4.8, description: "Pipeline automation and client tracking." },
  { id: 5, name: "SalesFlow Pro", category: "CRM", developer: "LeadMatrix", price: 34, rating: 4.4, description: "Sales team collaboration CRM." },
  { id: 6, name: "DealStream", category: "CRM", developer: "CortexSoft", price: 32, rating: 4.6, description: "Predictive scoring and contact enrichment." },
  { id: 7, name: "CloudDesk", category: "Cloud Services", developer: "NexusCloud", price: 12, rating: 4.1, description: "Team cloud storage with encryption." },
  { id: 8, name: "ComputeGrid", category: "Cloud Services", developer: "TerraCompute", price: 80, rating: 4.7, description: "Scalable compute clusters on-demand." },
  { id: 9, name: "DeployMate", category: "Cloud Services", developer: "StackLaunch", price: 15, rating: 4.3, description: "CI/CD + instant deployments." },
  { id: 10, name: "BrandPulse", category: "Marketing", developer: "Admintic", price: 22, rating: 4.4, description: "Brand sentiment analytics." },
  { id: 11, name: "EngageBoost", category: "Marketing", developer: "SignalWave", price: 30, rating: 4.5, description: "Automated multi-channel engagement." },
  { id: 12, name: "ClientPrime", category: "CRM", developer: "PrimeStack", price: 45, rating: 4.6, description: "AI-driven customer retention CRM." },
  { id: 13, name: "CloudFence", category: "Cloud Services", developer: "CyberNova", price: 18, rating: 4.5, description: "Zero-trust cloud firewall." },
  { id: 14, name: "PipeManager", category: "CRM", developer: "FlowDynamics", price: 27, rating: 4.3, description: "Deal pipeline management suite." },
  { id: 15, name: "SkyStore", category: "Cloud Services", developer: "SkyWare", price: 10, rating: 4.0, description: "Affordable cloud object storage." }
];

// ---------------------------
// Local storage helpers
// ---------------------------
function loadLS(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
}
function saveLS(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }

// ---------------------------
// Contexts
// ---------------------------
const CheckoutContext = createContext(null);
const ModalContext = createContext(null);
const CartContext = createContext(null);

export function useCheckoutContext() { return useContext(CheckoutContext); }
export function useModal() { return useContext(ModalContext); }
export function useCart() { return useContext(CartContext); }

function CheckoutProvider({ children }) {
  const [checkoutSession, setCheckoutSession] = useState(null);
  const startCheckout = useCallback((product) => {
    const session = { id: `sess_${Date.now()}`, product, status: "pending", amount: product.price };
    setCheckoutSession(session);
    return session;
  }, []);
  const value = useMemo(() => ({ checkoutSession, startCheckout }), [checkoutSession, startCheckout]);
  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}
CheckoutProvider.propTypes = { children: PropTypes.node };

function ModalProvider({ children }) {
  const [modal, setModal] = useState({ type: null, props: {} });
  const openModal = useCallback((type, props = {}) => setModal({ type, props }), []);
  const closeModal = useCallback(() => setModal({ type: null, props: {} }), []);
  const value = useMemo(() => ({ modal, openModal, closeModal }), [modal, openModal, closeModal]);
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
ModalProvider.propTypes = { children: PropTypes.node };

function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadLS("cart", []));
  useEffect(() => saveLS("cart", items), [items]);
  const addToCart = useCallback((product) => setItems((s) => [...s, product]), []);
  const removeFromCart = useCallback((id) => setItems((s) => s.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);
  const value = useMemo(() => ({ items, addToCart, removeFromCart, clear }), [items, addToCart, removeFromCart, clear]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
CartProvider.propTypes = { children: PropTypes.node };

// GlobalProvider wraps all contexts (C1 choice)
export function GlobalProvider({ children }) {
  return (
    <CheckoutProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>
      </ModalProvider>
    </CheckoutProvider>
  );
}
GlobalProvider.propTypes = { children: PropTypes.node };

// ---------------------------
// Hooks
// ---------------------------
export function useCheckout() { const ctx = useCheckoutContext(); if (!ctx) throw new Error("useCheckout must be used inside CheckoutProvider"); return ctx; }
export function useModalContext() { const ctx = useModal(); if (!ctx) throw new Error("useModal must be used inside ModalProvider"); return ctx; }
export function useCartContext() { const ctx = useCart(); if (!ctx) throw new Error("useCart must be used inside CartProvider"); return ctx; }

// ---------------------------
// Preview Modal
// ---------------------------
export function PreviewModal({ product, open, onClose, onBuy }) {
  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-xl">
        <button className="absolute top-4 right-4" onClick={onClose} aria-label="Close">
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-[#31587c]">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="mt-3 font-medium">Developer: {product.developer}</p>
        <p className="font-medium">Category: {product.category}</p>
        <p className="font-semibold text-green-600 mt-2 text-lg">${product.price}/mo</p>
        <div className="mt-4 flex gap-2">
          <Button className="bg-teal-500 text-white px-4 py-2 rounded-xl w-full" onClick={() => onBuy(product)}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
PreviewModal.propTypes = { product: PropTypes.object, open: PropTypes.bool.isRequired, onClose: PropTypes.func.isRequired, onBuy: PropTypes.func.isRequired };

// ---------------------------
// ProductCard
// ---------------------------
export function ProductCard({ product, onPreview, onBuy }) {
  return (
    <motion.div whileHover={{ y: -4 }} layout>
      <Card className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
        <CardContent>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-[#31587c]">{product.name}</h3>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <p className="text-sm text-gray-700 mt-2">Developer: {product.developer}</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-md font-semibold text-green-600">${product.price}/mo</p>
              <p className="text-sm text-orange-500">⭐ {product.rating}</p>
            </div>
            <div className="flex gap-2 w-1/2">
              <Button className="bg-[#31587c] text-white w-full" onClick={() => onPreview(product)}>Preview</Button>
              <Button className="bg-teal-500 text-white w-full" onClick={() => onBuy(product)}>Buy</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
ProductCard.propTypes = { product: PropTypes.object.isRequired, onPreview: PropTypes.func, onBuy: PropTypes.func };

// ---------------------------
// Product Details Page
// ---------------------------
export function ProductDetailsPage() {
  const { id } = useParams();
  const product = demoProducts.find((p) => String(p.id) === String(id));
  const { startCheckout } = useCheckout();
  const navigate = useNavigate();
  if (!product) return <div className="p-6">Product not found.</div>;
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-[#31587c]">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="mt-4 font-medium">Developer: {product.developer}</p>
            <p className="mt-2 font-semibold text-green-600 text-xl">${product.price}/mo</p>
          </div>
          <div className="w-56">
            <Button className="w-full mb-2" onClick={() => { const session = startCheckout(product); navigate(`/checkout/${session.id}`); }}>Continue to Checkout</Button>
            <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Details & Features</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Fast setup and onboarding</li>
            <li>Secure data storage</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
ProductDetailsPage.propTypes = {};

// ---------------------------
// Simulated Stripe Checkout & Success page
// ---------------------------
export function StripeMockCheckoutPage() {
  const { sessionId } = useParams();
  const { checkoutSession } = useCheckoutContext();
  const navigate = useNavigate();
  if (!checkoutSession || checkoutSession.id !== sessionId) return <div className="p-6">Invalid or missing checkout session.</div>;
  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-[#31587c]">Mock Stripe Checkout</h2>
        <p className="mt-4 text-gray-700">You're purchasing:</p>
        <p className="font-semibold text-lg mt-1">{checkoutSession.product.name}</p>
        <p className="text-green-600 text-xl font-bold mt-3">${checkoutSession.product.price}/mo</p>
        <Button className="mt-6 w-full bg-teal-600 text-white" onClick={() => navigate("/checkout/success")}>Pay Now (Mock)</Button>
      </div>
    </div>
  );
}

export function StripeMockSuccessPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful (Mock)</h1>
      <p className="mt-4">Your subscription is now active!</p>
      <Link to="/" className="text-blue-600 underline mt-4 inline-block">Return Home</Link>
    </div>
  );
}

// ---------------------------
// SaaSProductList (main integrated component)
// ---------------------------
export function SaaSProductList({ query = "", onPreview: extPreview, onBuy: extBuy }) {
  const { startCheckout } = useCheckout();
  const { openModal, closeModal, modal } = useModalContext();
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  const [search, setSearch] = useState(String(query || ""));
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => setSearch(String(query || "")), [query]);

  const filtered = useMemo(() => {
    const q = String(search || "").toLowerCase();
    return demoProducts.filter((p) => {
      const matchQ = q === "" || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.developer.toLowerCase().includes(q);
      const matchCat = category === "All" || p.category === category;
      return matchQ && matchCat;
    });
  }, [search, category]);

  const sorted = useMemo(() => {
    if (sort === "price") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "rating") return [...filtered].sort((a, b) => b.rating - a.rating);
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const paginated = useMemo(() => { const start = (page - 1) * pageSize; return sorted.slice(start, start + pageSize); }, [sorted, page]);

  const handlePreview = (product) => {
    extPreview?.(product);
    openModal("preview", { product });
    navigate(`/products/${product.id}`);
  };

  const handleBuy = (product) => {
    extBuy?.(product);
    addToCart?.(product);
    const sess = startCheckout(product);
    openModal("checkout", { session: sess });
    navigate(`/checkout/${sess.id}`);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-3">
        <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search products..." className="border rounded-xl px-3 py-2 w-full" />
        <select className="border rounded-xl px-3 py-2" value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
          <option value="All">All</option>
          <option value="Marketing">Marketing</option>
          <option value="CRM">CRM</option>
          <option value="Cloud Services">Cloud Services</option>
        </select>
        <select className="border rounded-xl px-3 py-2" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort: Name</option>
          <option value="price">Sort: Price</option>
          <option value="rating">Sort: Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((p) => (<ProductCard key={p.id} product={p} onPreview={handlePreview} onBuy={handleBuy} />))}
      </div>

      <div className="flex items-center gap-3 justify-center mt-4">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="px-4 py-2 border rounded-xl disabled:opacity-40">Prev</button>
        <span className="font-semibold">Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} className="px-4 py-2 border rounded-xl disabled:opacity-40">Next</button>
      </div>

      {/* Modal consumer renders appropriate modal based on ModalContext */}
      <ModalConsumer />
    </div>
  );
}
SaaSProductList.propTypes = { query: PropTypes.string, onPreview: PropTypes.func, onBuy: PropTypes.func };

// ---------------------------
// ModalConsumer
// ---------------------------
function ModalConsumer() {
  const { modal, closeModal } = useModalContext();
  if (!modal || !modal.type) return null;
  const { type, props } = modal;
  if (type === "preview") return <PreviewModal product={props.product} open={true} onClose={closeModal} onBuy={(p) => { closeModal(); }} />;
  if (type === "checkout") return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow max-w-md w-full">
        <h3 className="font-semibold">Checkout initiated (mock)</h3>
        <p className="text-sm text-gray-600 mt-2">A mock Stripe checkout session was created.</p>
        <div className="mt-4 flex justify-end"><Button onClick={closeModal}>Close</Button></div>
      </div>
    </div>
  );
  return null;
}

// ---------------------------
// Helper to inject GlobalProvider into pages
// ---------------------------
export function injectIntoPage(PageComponent) {
  return function Injected(props) {
    return (
      <GlobalProvider>
        <PageComponent {...props} />
      </GlobalProvider>
    );
  };
}

// ---------------------------
// Simple cart page UI
// ---------------------------
export function CartPage() {
  const { items, removeFromCart, clear } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? <div className="text-gray-600">Cart is empty.</div> : (
        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-gray-600">${it.price}/mo — {it.developer}</div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => navigate(`/products/${it.id}`)}>View</Button>
                <Button variant="outline" onClick={() => removeFromCart(it.id)}>Remove</Button>
              </div>
            </div>
          ))}
          <div className="flex gap-2 justify-end">
            <Button onClick={() => { clear(); }}>Clear Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------
// Exports
// ---------------------------
export default SaaSProductList;
export { ProductCard, PreviewModal, ProductDetailsPage, StripeMockCheckoutPage, StripeMockSuccessPage, CartPage };
