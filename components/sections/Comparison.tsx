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
        <div className="mt-20 max-w-4xl mx-auto space-y-8 text-center md:text-left">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed italic border-l-4 border-white/10 pl-6">
            Traditional gyms often focus mainly on machines and isolated muscle training. While this can build muscle, it may not always improve overall movement quality or functional strength.
          </p>
          <p className="text-xl md:text-2xl font-display font-medium text-white leading-relaxed">
            <span className="text-brand-orange font-bold">Flowing Monkey Fitness</span> focuses on training the body as a complete system. The goal is to improve strength, mobility, coordination, and joint health so that clients can <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8">move better</span> in daily life and physical activities.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            This approach also reduces the risk of injuries and builds more practical, real-world strength.
          </p>
        </div>
      </div>
    </section>
  );
};
