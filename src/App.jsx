import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import MarketPlace from "./pages/MarketPlace";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import SubscriptionPage from "./pages/Subscriptions"
//import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/features" element={<Features />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/subs" element={<SubscriptionPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default App;
//mor_2314 username
//83r5^_ password
