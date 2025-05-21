
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold gradient-text">Zain Abbas</p>
            <p className="text-sm text-gray-400">
              Electrical Engineering Student
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} | Crafted with <Heart size={14} className="inline text-electric mx-1" /> 
              All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <a href="#home" className="text-sm text-gray-400 hover:text-electric transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
