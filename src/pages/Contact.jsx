import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    

    <section className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-200 flex flex-col justify-center px-6 py-12">   
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our team — we’d love to hear your thoughts, questions, or feedback.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent shadow-2xl my-20 rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="bg-transparent text-blue-950 p-10 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold">Let’s Connect</h2>
          <p className="text-blue-950 leading-relaxed">
            Whether you have a question about features, pricing, or anything else —
            our friendly support team is ready to help.
          </p>

          <div className="space-y-4 text-blue-950">
            <p className="flex items-center gap-3">
              <Mail size={20} /> hackhathon10@saasapp.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} /> +234 814 380 4645
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={20} /> Appclick Tech Academy, Soun Ajagungbade Street, Bodija Ibadan, Nigeria
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="p-10 bg-gray-50 flex flex-col justify-center space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-500 transition-transform transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* my map */}
      <div className="relative w-screen h-[600px] mt-12 left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.819586624991!2d3.9152!3d7.4013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039eb0c8a8e5c89%3A0x65f7dd8d12b420a7!2sBodija%20Ibadan!5e0!3m2!1sen!2sng!4v1690915409995"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="absolute inset-0 border-0"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-cyan-700 font-bold mt-20 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Menu */}
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Quick Links</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <li><a href="/" className="hover:text-orange-400">Blog</a></li>
              <li><a href="/about" className="hover:text-orange-400">Support</a></li>
              <li><a href="/services" className="hover:text-orange-400">Careers</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Contact</h3>
            <p className="text-lg font-semibold leading-relaxed">
              Appclick Tech Academy 10, Soun Ajagungbade Street <br /> Bodija Ibadan.
            </p>
          </div>

          {/* Media icons */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright Part */}
        <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Hackhathon Group 10 — All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};

export default Contact;
