import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="border-b border-slate-700 py-2 hidden md:block">
          <div className="flex justify-end space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-DIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@diverleeunderwater.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-full">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">DL</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Diver Lee's Underwater Solutions</h1>
              <p className="text-sm text-slate-400">Underwater Solutions LLC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#booking" className="hover:text-cyan-400 transition-colors">Book Now</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#booking" className="hover:text-cyan-400 transition-colors">Book Now</a>
              <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
              <a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a>
              <div className="pt-3 border-t border-slate-700 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-DIVE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@diverleeunderwater.com</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;