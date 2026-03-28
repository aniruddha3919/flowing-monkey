'use client';

import React from 'react';
import { motion } from 'motion/react';
import { siteConfig, getIconComponent } from '@/config/site';

export const Philosophy = () => {
  return (
    <section id="methodology" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            {siteConfig.philosophy.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            {siteConfig.philosophy.title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.philosophy.descriptionStart} <span className="text-white font-bold">{siteConfig.philosophy.descriptionHighlight}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.philosophy.cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-brand-card p-8 rounded-3xl border border-white/5 flex items-center gap-4"
            >
              <div className="bg-brand-dark p-3 rounded-2xl">
                {getIconComponent(card.iconName, { className: 'w-6 h-6 text-brand-orange' })}
              </div>
              <h3 className="text-xl font-bold">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
