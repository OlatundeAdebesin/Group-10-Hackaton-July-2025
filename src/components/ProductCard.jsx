// components/ProductCard.jsx
import { useContext } from "react";
import { motion } from "framer-motion";
import { ModalContext, CheckoutContext } from "../context/GlobalProvider";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { Button } from "./Button_updated";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext";

export function ProductCard({ product }) {
  const { addToast } = useToast();

const handleBuy = () => {
    addToCart(product);
    addToast(`Added ${product.name} to cart`);
};
// Update your "Buy" button to use handleBuy
    
  const { openModal } = useContext(ModalContext);
  const { addToCart } = useContext(CheckoutContext);

  const handlePreview = () => {
    openModal(
      <div>
        <h2 className="text-2xl font-bold text-[#31587c] mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="font-bold text-lg mb-4">${product.price}/mo</p>
        <Button className="w-full bg-teal-500 text-white" onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    );
  };

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 flex flex-col">
          <div className="flex justify-between items-start">
             <h3 className="font-bold text-lg text-[#31587c]">{product.name}</h3>
             <span className="bg-gray-100 text-xs px-2 py-1 rounded">{product.category}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2 mb-4 flex-1">{product.description}</p>
          <p className="font-semibold text-lg mb-3">${product.price}/mo</p>

          <div className="flex gap-2 mt-auto">
            <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={handlePreview}>Quick View</Button>
            <Link to={`/products/${product.id}`} className="flex-1">
               <Button className="w-full bg-[#31587c] text-white">Details</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}