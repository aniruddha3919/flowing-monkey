'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { ToolsGrid } from '@/components/sections/ToolsGrid';
import { Founder } from '@/components/sections/Founder';
import { HowWeTrain } from '@/components/sections/HowWeTrain';
import { Difference } from '@/components/sections/Difference';
import { ImageDivider } from '@/components/sections/ImageDivider';
import { Comparison } from '@/components/sections/Comparison';
import { WhoIsThisFor } from '@/components/sections/WhoIsThisFor';
import { TrainingStructure } from '@/components/sections/TrainingStructure';
import { FAQ } from '@/components/sections/FAQ';
import { Gallery } from '@/components/sections/Gallery';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function LandingPage() {
  return (
    <main className="selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <ImageDivider src="/assets/ChatGPT Image Mar 28, 2026, 06_17_05 PM.png" />
      <Founder />
      <ToolsGrid />
      
      <HowWeTrain />
      {/* <Difference /> */}
      <ImageDivider />
      <Comparison />
      <WhoIsThisFor />
      <ImageDivider src="/assets/ChatGPT Image Mar 28, 2026, 02_06_22 PM.png" />
      <TrainingStructure />
      <FAQ />
      <Gallery />
      <ImageDivider src="/assets/ChatGPT Image Mar 28, 2026, 03_29_43 PM.png" />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
