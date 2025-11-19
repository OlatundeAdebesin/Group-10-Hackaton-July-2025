// src/hooks/useCheckout.js
import { useContext } from "react";
// Ensure the path to GlobalProvider is correct relative to the 'hooks' folder
import { CheckoutContext } from "../context/GlobalProvider";

export function useCheckout() {
  const context = useContext(CheckoutContext);
  // Optional: Add a check to ensure the hook is used inside the Provider
  if (!context) {
      throw new Error("useCheckout must be used within GlobalProvider");
  }
  
  const { cart, addToCart, clearCart } = context;

  const startCheckout = () => {
    // This is where you would typically finalize the order data
    return {
      redirectUrl: "/checkout/mock-stripe",
      cart,
    };
  };

  return { cart, addToCart, clearCart, startCheckout };
}