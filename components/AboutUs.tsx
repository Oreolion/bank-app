'use client';
import React, { useEffect, useRef } from 'react';
// import { cn } from '@/lib/utils';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            
            if (entry.target === imageRef.current) {
              entry.target.classList.remove('translate-x-[-50px]');
            }
            
            if (entry.target === contentRef.current) {
              entry.target.classList.remove('translate-x-[50px]');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="cu-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cu-blue opacity-10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="About CUOFCO" 
                className="rounded-lg shadow-lg relative z-10 object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-cu-green opacity-10 rounded-lg"></div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-[50px] transition-all duration-1000 ease-out"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cu-blue bg-opacity-10 text-cu-blue text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Credit Union That Cares</h2>
            
            <p className="text-cu-dark-gray mb-6">
              Founded in 1979, CUOFCO has been serving our community with dedication and integrity for over four decades. As a member-owned financial cooperative, we put people before profits and are committed to your financial well-being.
            </p>
            
            <p className="text-cu-dark-gray mb-6">
              Our mission is to provide accessible financial services and education to help our members achieve their goals and build a stronger community through cooperative principles.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-cu-blue mb-2">45+</h4>
                <p className="text-cu-dark-gray">Years of Service</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cu-blue mb-2">25,000+</h4>
                <p className="text-cu-dark-gray">Satisfied Members</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cu-blue mb-2">$250M+</h4>
                <p className="text-cu-dark-gray">Assets Managed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cu-blue mb-2">5</h4>
                <p className="text-cu-dark-gray">Branch Locations</p>
              </div>
            </div>
            
            <a href="#contact" className="button-primary">
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
