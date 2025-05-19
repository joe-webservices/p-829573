
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            AutoLead Systems
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-gray-700 hover:text-blue-600 transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                  isActive && 'text-blue-600 after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!"
            target="_blank" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          <button 
            className="absolute top-6 right-6 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-gray-700 hover:text-blue-600 py-2 text-xl transition-colors duration-300',
                  isActive && 'text-blue-600'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center mt-4"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
