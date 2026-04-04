'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-brand-orange rounded-[3rem] p-12 md:p-24 text-center text-white/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">{siteConfig.cta.title}</h2>
          <p className="text-xl opacity-90 mb-12 max-w-xl mx-auto">
            {siteConfig.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919051292950" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-brand-orange/80 px-10 py-5 font-dm tracking-[0.15em] uppercase rounded-none font-bold text-sm sm:text-base hover:bg-white/90 transition-all text-center min-w-[240px]"
            >
              Book Trial Session
            </a>
            <a 
              href="https://wa.me/919051292950" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-transparent border-2 border-white text-white/80 px-10 py-5 font-dm tracking-[0.15em] uppercase rounded-none font-bold text-sm sm:text-base hover:bg-white/10 transition-all text-center min-w-[240px]"
            >
              Contact Coach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
