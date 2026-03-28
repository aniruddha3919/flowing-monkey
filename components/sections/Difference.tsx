'use client';

import React from 'react';
import { siteConfig, getIconComponent } from '@/config/site';

export const Difference = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">The Monkey Difference</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.difference.map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-brand-card rounded-3xl border-l-4 border-brand-orange">
              <div className="text-brand-orange shrink-0">
                {getIconComponent(item.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
