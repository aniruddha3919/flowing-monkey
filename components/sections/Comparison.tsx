'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Comparison = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">Why We're Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-card p-10 rounded-[2.5rem] border border-white/5">
            <span className="text-white/40 font-bold uppercase tracking-widest text-xs mb-6 block">Traditional Gyms</span>
            <ul className="space-y-4">
              {siteConfig.comparison.traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-orange/10 p-10 rounded-[2.5rem] border border-brand-orange/20">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 block">{siteConfig.name}</span>
            <ul className="space-y-4">
              {siteConfig.comparison.flowingMonkey.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="text-brand-orange w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
