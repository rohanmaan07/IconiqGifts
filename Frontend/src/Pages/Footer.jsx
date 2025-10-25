import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <img src="/IconiqGifts.png" alt="IconiqGifts Logo" className="h-15 w-auto" />
          <p className="text-sm">Elevating corporate gifting with curated, memorable experiences.</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500"><FaLinkedin size={20} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500"><FaInstagram size={20} /></a>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-teal-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-teal-500">Our Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-teal-500">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Gifting Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/gifting" className="hover:text-teal-500">Employee Gifting</Link></li>
              <li><Link to="/category" className="hover:text-teal-500">Gift Category</Link></li>
              <li><Link to="/occasion" className="hover:text-teal-500">Ocassion Gifts</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Iconiq Gifts. Thoughtfully Made in India.</p>
        <div className="mt-2">
          <Link to="/privacy-policy" className="hover:text-teal-500 mx-2">Privacy Policy</Link>
          <span>&middot;</span>
          <Link to="/terms" className="hover:text-teal-500 mx-2">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
