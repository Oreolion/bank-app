'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

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
            "font-bold mb-6 leading-tight animate-fade-in",
            "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          )}
        >
          Banking That Puts
          <br />
          <span className="text-cu-light-blue">People First</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200"
        >
          Experience the difference with a community credit union 
          dedicated to your financial success.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
          <a 
            href="#services" 
            className="button-primary bg-cu-blue hover:bg-cu-light-blue py-3 px-8 text-lg rounded-md"
          >
            Explore Services
          </a>
          <a 
            href="#about" 
            className="button-secondary py-3 px-8 text-lg bg-transparent border-white text-white hover:bg-white hover:text-cu-blue"
          >
            Learn More
          </a>
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
