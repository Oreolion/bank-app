'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
      'font-bold text-xl fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent text-white py-4'
    )}>
      <div className="cu-container">
        <nav className="flex items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-cu-blue">AFFFCO</span>
          </Link>
            {/* ARMED FORCES FINANCIAL FEDERAL CREDIT UNION */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#about" className="nav-link">About Us</Link>
            <Link href="#location" className="nav-link">Locations</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            
            <Link href="/sign-in" className="button-primary ml-4">
              Online Banking
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
          type='button'
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
            type='button'
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-cu-blue" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-lg">
            <Link href="#services" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#about" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#location" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Locations</Link>
            <Link href="#contact" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/sign-in" className="py-2 border-b border-cu-gray" onClick={() => setIsOpen(false)}>Sign Up</Link>
            <Link href="/sign-up" className="button-primary mt-4 text-center">
              Online Banking
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
