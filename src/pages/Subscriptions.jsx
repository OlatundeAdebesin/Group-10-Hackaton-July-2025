import React, { useState } from "react";
import { X, Check, CreditCard, Lock } from "lucide-react";

const SubscriptionPage = ({ product, onClose }) => {
  const [selectedTier, setSelectedTier] = useState("standard");
  const [userCount, setUserCount] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const tiers = {
    basic: {
      name: "Basic",
      multiplier: 1,
      features: [
        "Basic features access",
        "Email support",
        "5 GB storage",
        "Single integration",
        "Monthly reports"
      ]
    },
    standard: {
      name: "Standard",
      multiplier: 1.5,
      features: [
        "All Basic features",
        "Priority email support",
        "50 GB storage",
        "Up to 5 integrations",
        "Weekly reports",
        "Advanced analytics",
        "Custom branding"
      ]
    },
    enterprise: {
      name: "Enterprise",
      multiplier: 2.5,
      features: [
        "All Standard features",
        "24/7 phone & email support",
        "500 GB storage",
        "Unlimited integrations",
        "Daily reports",
        "Advanced analytics & AI insights",
        "Custom branding & white-label",
        "API access",
        "Dedicated account manager"
      ]
    },
    premium: {
      name: "Premium",
      multiplier: 4,
      features: [
        "All Enterprise features",
        "24/7 priority support with 1hr SLA",
        "Unlimited storage",
        "Unlimited integrations",
        "Real-time reports & alerts",
        "Full AI suite & predictive analytics",
        "Complete white-label solution",
        "Full API access with webhooks",
        "Dedicated success team",
        "Custom feature development",
        "On-premise deployment option"
      ]
    }
  };

  const calculateDiscount = (users) => {
    if (users === 1) return 0;
    if (users === 2) return 5;
    if (users === 3) return 10;
    if (users === 4) return 15;
    if (users === 5) return 20;
    return 0;
  };

  const calculatePrice = () => {
    const basePrice = product.price * tiers[selectedTier].multiplier;
    const totalBeforeDiscount = basePrice * userCount;
    const discount = calculateDiscount(userCount);
    const totalAfterDiscount = totalBeforeDiscount * (1 - discount / 100);
    return {
      basePrice: basePrice.toFixed(2),
      totalBeforeDiscount: totalBeforeDiscount.toFixed(2),
      discount,
      totalAfterDiscount: totalAfterDiscount.toFixed(2),
      savingsAmount: (totalBeforeDiscount - totalAfterDiscount).toFixed(2)
    };
  };

  const pricing = calculatePrice();

  const handlePayment = () => {
    if (cardNumber.length >= 16 && cardName && expiry && cvv.length >= 3) {
      setShowPayment(false);
      setShowSuccess(true);
    } else {
      alert("Please fill in all payment details correctly.");
    }
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted.slice(0, 19);
  };

  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscription Successful!</h2>
            <p className="text-gray-600 mb-6">
              You have successfully subscribed to {product.name} - {tiers[selectedTier].name} plan
            </p>
            <p className="text-sm text-gray-500 mb-6">
              A confirmation email has been sent to your inbox.
            </p>
            <button
              onClick={onClose}
              className="bg-[#31587c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#274763] transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center p-4 py-8">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl my-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
              <button onClick={() => setShowPayment(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#31587c] to-[#1e3a52] rounded-xl p-6 mb-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm opacity-80">Total Amount</p>
                  <p className="text-3xl font-bold">${pricing.totalAfterDiscount}</p>
                  <p className="text-xs opacity-80">per month</p>
                </div>
                <Lock className="w-6 h-6 opacity-80" />
              </div>
              <div className="text-sm space-y-1">
                <p>{product.name}</p>
                <p className="opacity-80">{tiers[selectedTier].name} Plan • {userCount} User{userCount > 1 ? "s" : ""}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31587c]"
                  />
                  <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31587c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31587c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31587c]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
                <Lock className="w-4 h-4" />
                <span>Your payment information is encrypted and secure</span>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Complete Payment - ${pricing.totalAfterDiscount}/mo
              </button>

              <button
                onClick={() => setShowPayment(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4 py-8">
        <div className="bg-white rounded-2xl p-6 max-w-6xl w-full shadow-2xl my-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-sm text-gray-500 mt-2">by {product.developer}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 flex-shrink-0">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(tiers).map(([key, tier]) => (
                <div
                  key={key}
                  onClick={() => setSelectedTier(key)}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition ${
                    selectedTier === key
                      ? "border-[#31587c] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-800">{tier.name}</h4>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedTier === key
                          ? "border-[#31587c] bg-[#31587c]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedTier === key && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#31587c] mb-4">
                    ${(product.price * tier.multiplier).toFixed(2)}
                    <span className="text-sm text-gray-600 font-normal">/mo</span>
                  </p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Number of Users</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add more users and save! Get discounts up to 20% with 5 users.
            </p>
            <div className="grid grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5].map((count) => (
                <button
                  key={count}
                  onClick={() => setUserCount(count)}
                  className={`p-4 rounded-xl border-2 transition ${
                    userCount === count
                      ? "border-[#31587c] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-800">{count}</div>
                  <div className="text-xs text-gray-600">user{count > 1 ? "s" : ""}</div>
                  {count > 1 && (
                    <div className="text-xs font-semibold text-green-600 mt-1">
                      {calculateDiscount(count)}% off
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#31587c] to-[#1e3a52] rounded-xl p-6 mb-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Subscription Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Plan:</span>
                <span className="font-semibold">{tiers[selectedTier].name}</span>
              </div>
              <div className="flex justify-between">
                <span>Base price per user:</span>
                <span className="font-semibold">${pricing.basePrice}/mo</span>
              </div>
              <div className="flex justify-between">
                <span>Number of users:</span>
                <span className="font-semibold">{userCount}</span>
              </div>
              {pricing.discount > 0 && (
                <>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Subtotal:</span>
                    <span>${pricing.totalBeforeDiscount}</span>
                  </div>
                  <div className="flex justify-between text-green-300">
                    <span>Multi-user discount ({pricing.discount}%):</span>
                    <span>-${pricing.savingsAmount}</span>
                  </div>
                </>
              )}
              <div className="border-t border-white/30 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-3xl font-bold">${pricing.totalAfterDiscount}/mo</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowPayment(true)}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition shadow-lg"
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper to test the component
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const demoProduct = {
    id: 1,
    name: "AdBoost Pro",
    category: "Marketing",
    price: 29,
    developer: "AdLabs",
    description: "Automated ad optimization for social and search campaigns.",
    rating: 4.8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          SaaS Subscription System
        </h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-xl text-[#31587c] mb-2">{demoProduct.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{demoProduct.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">${demoProduct.price}/mo</p>
          
          <button
            onClick={() => setSelectedProduct(demoProduct)}
            className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition w-full"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {selectedProduct && (
        <SubscriptionPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}