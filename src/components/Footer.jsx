import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PickN Shop</h2>
          <p className="text-gray-400">
            PickN Shop is your ultimate e-commerce destination offering top-quality products across multiple categories. 
            Enjoy secure shopping, fast delivery, and amazing daily deals!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123, Main Street, Dhaka, Bangladesh</p>
          <p className="text-gray-400">Email: support@picknshop.com</p>
          <p className="text-gray-400">Phone: +880 123 456 789</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get our latest updates, exclusive offers, and promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded text-black flex-1"
            />
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} PickN Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
