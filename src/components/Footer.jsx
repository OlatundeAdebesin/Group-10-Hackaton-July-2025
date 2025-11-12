import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
  return (
    <section>
      {/* Footer */}
            <footer className="bg-gray-200  text-cyan-700 font-bold mt-20 py-12 px-8">
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
                  <ul className="space-y-2 text-lg font-semibold">
                    <p>Appclick Tech Academy 10, Soun Ajagungbade Street <br /> Bodija Ibadan.</p>
                  </ul>
                </div>
      
                {/* Media icons */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-950">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-orange-400"><FaFacebook size={20} /></a>
                    <a href="#" className="hover:text-orange-400"><BsTwitter size={20} /></a>
                    <a href="#" className="hover:text-orange-400"><BsInstagram size={20} /></a>
                    <a href="#" className="hover:text-orange-400"><LiaLinkedin size={20} /></a>
                  </div>
                      </div>
              </div>
      
              {/* Copyright Part */}
              <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} Hackhathon Group 10 — All Rights Reserved.
              </div>
              </footer>
    </section>
  )
}

export default Footer