import React from 'react';
import { Link } from 'react-router-dom';
import linetabLogo from '../assets/linetab-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={linetabLogo} 
                alt="LineTab Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-bold">LineTab</span>
            </div>
            <p className="text-gray-400">© LineTab 2025</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/product" className="hover:text-white">Buy LineTab</Link></li>
              <li><Link to="/how-to-use" className="hover:text-white">How to Use</Link></li>
              <li><a href="/SDS_LineTab.pdf" className="hover:text-white">Safety Data Sheet</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/biofilm-dangers" className="hover:text-white">Biofilm Dangers</Link></li>
              <li><Link to="/" className="hover:text-white">Features</Link></li>
              <li><Link to="/contact" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>support@linetab.us</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>(206) 681-0952</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 