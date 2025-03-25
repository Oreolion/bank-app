'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxFactor = 0.5;
      if (scrolled <= window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrolled * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')`,
          zIndex: -1,
          transform: 'scale(1.1)'
        }}
      />

      <div className="cu-container relative z-10 text-white text-center">
        <h1 
          className={cn(
            "font-bold mb-6 leading-tight animate-fade-in text-emerald-300",
            "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          )}
        >
          Banking That Puts
          <br />
          <span className="text-cu-light-blue">People First</span>
        </h1>
        
        <p 
          className="text-xl font-semibold sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in delay-200"
        >
          Experience the difference with a community credit union 
          dedicated to your financial success.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in delay-300">
          <Link 
            href="#services" 
            className="text-center max-w-[13rem] whitespace-nowrap button-primary bg-blue-100 hover:bg-gray-300 py-3 px-8 text-lg rounded-md"
          >
            Explore Services
          </Link>
          <Link 
            href="#about" 
            className="button-secondary max-w-[13rem] text-center py-3 px-8 text-lg bg-transparent border-white text-white hover:bg-white hover:text-gray-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
