
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="cu-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-cu-blue">CUOFCO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#rates" className="nav-link">Rates</a>
            <a href="#location" className="nav-link">Locations</a>
            <a href="#contact" className="nav-link">Contact</a>
            
            <a href="#login" className="button-primary ml-4">
              Online Banking
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cu-blue" />
            ) : (
              <Menu className="w-6 h-6 text-cu-blue" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold text-cu-blue">CUOFCO</span>
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-cu-blue" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-lg">
            <a href="#services" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#rates" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Rates</a>
            <a href="#location" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Locations</a>
            <a href="#contact" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#login" className="button-primary mt-4 text-center">
              Online Banking
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
