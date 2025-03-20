'use client';

import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-cu-light-gray"
    >
      <div className="cu-container">
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700" ref={sectionRef}>
          <span className="inline-block py-1 px-3 rounded-full bg-cu-blue bg-opacity-10 text-cu-blue text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-cu-dark-gray">
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={formRef}
            className="bg-white rounded-lg shadow-md p-8 opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cu-dark-gray mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-cu-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cu-blue"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cu-dark-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-cu-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cu-blue"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cu-dark-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-cu-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cu-blue"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cu-dark-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-cu-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cu-blue"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          <div 
            ref={infoRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-cu-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-cu-dark-gray">(303) 455-2900</p>
                    <p className="text-cu-dark-gray">Toll-free: 1-800-555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-cu-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-cu-dark-gray">info@cuofco.org</p>
                    <p className="text-cu-dark-gray">support@cuofco.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-cu-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Main Office</h4>
                    <p className="text-cu-dark-gray">1234 Main Street</p>
                    <p className="text-cu-dark-gray">Denver, CO 80202</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-cu-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Hours of Operation</h4>
                    <p className="text-cu-dark-gray">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-cu-dark-gray">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-cu-dark-gray">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Find Us</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8228845719366!2d-104.99099632352026!3d39.7487889017302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78ef7d17f997%3A0x96d9bef4e200fd64!2sCUofCO%20(Credit%20Union%20of%20Colorado)!5e0!3m2!1sen!2sus!4v1683239500733!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
