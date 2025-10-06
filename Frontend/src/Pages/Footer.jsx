import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main grid is now 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Branding & Social */}
          <div className="space-y-4">
            <img src="/IconiqGifts.png" alt="IconiqGifts Logo" className="h-15 w-auto" />
            <p className="text-sm">
              Elevating corporate gifting with curated, memorable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* This wrapper holds the two link columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">Our Blog</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: Gifting Solutions */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Gifting Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-500 transition-colors">Employee Gifting</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">Client Gifting</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">Holiday Gifts</a></li>
                <li><a href="#" className="hover:text-teal-500 transition-colors">Personalized Gifts</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Iconiq Gifts. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-teal-500 mx-2">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-teal-500 mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;