import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-neon-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-purple font-bold text-xl">CC</span>
              </div>
              <span className="text-white font-poppins font-bold text-xl">
                Campus Crunch
              </span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Fueling student success with delicious, nutritious snacks and meals. 
              From study sessions to late-night cramming, we've got your cravings covered.
            </p>
            
            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-3 text-white">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-neon-yellow focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-neon-yellow text-primary-purple rounded-lg sm:rounded-l-none sm:rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors touch-manipulation"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">Home</a></li>
              <li><a href="/combos" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">Combos</a></li>
              <li><a href="/on-the-go" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">On The Go</a></li>
              <li><a href="/about" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-200">
              <li>📧 hello@campuscrunch.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Campus Food Court, University Road</li>
              <li>🕒 Mon-Fri: 8AM-10PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © 2024 Campus Crunch. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-200 hover:text-accent-neon-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 