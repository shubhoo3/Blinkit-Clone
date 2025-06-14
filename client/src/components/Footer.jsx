import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-white-100 text-gray-800 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and Tagline */}
        <div className='h-full'>
          <Link to={"/"} className='h-full flex justify-center items-center'>
            <img src={logo} width={170} height={60} alt='logo' className='hidden lg:block' />
            <img src={logo} width={170} height={60} alt='logo' className='lg:hidden' />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:text-green-600">About Us</a></li>
            <li><a href="/shop" className="hover:text-green-600">Shop</a></li>
            <li><a href="/faq" className="hover:text-green-600">FAQs</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
            <li><a href="/returns" className="hover:text-green-600">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Email: <a href="mailto:support@freshmart.com" className="hover:text-green-600">support@binkeyit.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+11234567890" className="hover:text-green-600">+1 (123) 456-7890</a></p>
          <p className="text-sm">Address: 123 Green Market St., Veggie Town</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-300 mt-10 pt-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Binkeyit. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
