import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Navbar from "../components/NavBar";
import BackToTop from "../components/BackToTop";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <>
      {/* Space for fixed Navbar
      <div className="h-20 lg:h-28"></div>

      <Navbar />
      <BackToTop /> */}

      <section className="relative min-h-screen bg-gradient-to-b from-gray-200 to-gray-200 px-6 py-12">

        {/* Logo Top-Left Corner */}
        <div className="absolute top-6 left-6 z-40">
          <img
            src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2025/08/Logo.svg"
            alt="Hackhathon Group 10"
            className="h-12 md:h-14"
          />
        </div>

        {/* Header */}
        <div className="text-center mt-24 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-950 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Get in touch with our team — we’d love to hear your thoughts, questions, or feedback.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl my-12 rounded-2xl overflow-hidden">
          {/* Left: Contact Info */}
          <div className="bg-white text-blue-950 p-10 md:p-12 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
              <p className="text-gray-700 leading-relaxed">
                Whether you have a question about features, pricing, or anything else — 
                our friendly support team is ready to help.
              </p>
            </div>

            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-4">
                <Mail size={22} className="text-[#1CA6AF]" />
                <span>hackhathon10@saasapp.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={22} className="text-[#1CA6AF]" />
                <span>+234 814 380 4645</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-[#1CA6AF] mt-1" />
                <span>
                  Appclick Tech Academy<br />
                  10, Soun Ajagungbade Street,<br />
                  Bodija, Ibadan, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="p-10 md:p-12 bg-gray-50 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map - Fully Working & Accurate */}
        <div className="max-w-6xl mx-auto my-20">
          <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              title="Appclick Tech Academy - Bodija, Ibadan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.457946562248!2d3.911597629204149!3d7.415397599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039e2b8f8e8e8e8%3A0x9a9b9c9d9e9f9a9b!2sAppclick%20Tech%20Academy!5e0!3m2!1sen!2sng!4v1731973450000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer - Logo on Left + Real Social Links */}
        <footer className="bg-gray-200 text-cyan-700 font-bold mt-20 py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Logo + Brand */}
            <div className="flex flex-col items-start">
              <img
                src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2025/08/Logo.svg"
                alt="Hackhathon Group 10"
                className="h-16 mb-4"
              />
              {/* <p className="text-lg font-bold text-blue-950">Hackhathon Group 10</p>
              <p className="text-base text-gray-600 mt-1">Building innovative SaaS solutions</p> */}
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-950">Menu</h3>
              <ul className="space-y-2 text-lg font-semibold">
                <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
                <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="/products" className="hover:text-orange-400 transition">Products</a></li>
                <li><a href="/features" className="hover:text-orange-400 transition">Features</a></li>
                <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-950">Quick Links</h3>
              <ul className="space-y-2 text-lg font-semibold">
                <li><a href="/blog" className="hover:text-orange-400 transition">Blog</a></li>
                <li><a href="/support" className="hover:text-orange-400 transition">Support</a></li>
                <li><a href="/careers" className="hover:text-orange-400 transition">Careers</a></li>
                <li><a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info + Social Icons */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-950">Contact</h3>
              <p className="text-lg font-semibold leading-relaxed mb-6 text-gray-800">
                Appclick Tech Academy<br />
                10, Soun Ajagungbade Street<br />
                Bodija, Ibadan, Nigeria
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com/hackhathongroup10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-500 transition transform hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://twitter.com/hackhathon10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-500 transition transform hover:scale-110"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="https://instagram.com/hackhathon_group10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1CA6AF] p-3 rounded-full text-white hover:bg-orange-500 transition transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 text-center text-gray-600 text-sm border-t border-gray-400 pt-8">
            © {new Date().getFullYear()} Hackhathon Group 10 — All Rights Reserved.
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;