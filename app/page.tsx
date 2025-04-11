'use client'
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to the right section when navigating via hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    // Initial handling of hash in URL
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className=''>
      <Head>
        <title>AFFFCU - Armed Forces Financial Credit Union</title>
        <meta name="description" content="Armed Forces Financial Credit Union - Banking that puts people first" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </Layout>
    </div>
  );
};

export default Index;

