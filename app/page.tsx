'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { ToolsGrid } from '@/components/sections/ToolsGrid';
import { Founder } from '@/components/sections/Founder';
import { Services } from '@/components/sections/Services';
import { SessionDetails } from '@/components/sections/SessionDetails';
import { Difference } from '@/components/sections/Difference';
import { ImageDivider } from '@/components/sections/ImageDivider';
import { Comparison } from '@/components/sections/Comparison';
import { WhoIsThisFor } from '@/components/sections/WhoIsThisFor';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { Gallery } from '@/components/sections/Gallery';
import { BookSession } from '@/components/sections/BookSession';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { AnimatePresence } from 'motion/react';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <main className={`selection:bg-brand-orange selection:text-white/80 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Marquee />
      
      <About />
      <Founder />
      <Services />
      <ToolsGrid />
      
      <SessionDetails />
      {/* <Difference /> */}
      <ImageDivider />
      {/* <Comparison /> */}
      <WhoIsThisFor />
      <ImageDivider src="/assets/ChatGPT Image Mar 28, 2026, 02_06_22 PM.png" />
      <Reviews />
      <FAQ />
      <Gallery />
      <BookSession />
      {/* <CTA /> */}
      <Footer />
      </main>
    </>
  );
}
