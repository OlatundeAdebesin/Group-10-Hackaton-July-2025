import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
     <footer className="bg-gray-200 text-cyan-700 font-bold mt-20 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Menu</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-400">Products</a></li>
              <li><a href="/services" className="hover:text-orange-400">Features</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Quick Links</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <li><a href="/" className="hover:text-orange-400">Blog</a></li>
              <li><a href="/support" className="hover:text-orange-400">Support</a></li>
              <li><a href="/careers" className="hover:text-orange-400">Careers</a></li>
              <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Contact</h3>
            <p className="text-lg font-semibold leading-relaxed">
              Appclick Tech Academy  
              10, Soun Ajagungbade Street <br />
              Bodija, Ibadan.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-400">
              <Instagram size={20} />
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Hackhathon Group 10 — All Rights Reserved.
        </div>
      </footer>
  );
};

export default Footer;
