'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 md:w-12 h-px bg-brand-orange/50" />
            <span className="text-brand-orange font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
              Meet Our FAMILY
            </span>
            <div className="w-8 md:w-12 h-px bg-brand-orange/50" />
          </div>
          
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-xl leading-relaxed px-4 md:px-0">
            Leading you towards mastery with years of expertise in movement, strength, and functional longevity.
          </p>
        </motion.div>
      </div>

      {/* Team Image Container - Full Width on Mobile */}
      <div className="relative z-10 w-full md:max-w-5xl md:mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] md:aspect-[16/9] md:rounded-3xl overflow-hidden border-y md:border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        >
          <Image
            src="/assets/team.jpeg"
            alt="The Flowing Monkey Team"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          
          {/* Overlay Gradient - Darker at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          
          {/* Corner Accents - Hidden on mobile for true full width feel */}
          <div className="hidden md:block absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-brand-orange/30 rounded-tl-3xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-brand-orange" />
          <div className="hidden md:block absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-brand-orange/30 rounded-br-3xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-brand-orange" />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-12 md:right-auto px-5 py-3 md:px-6 md:py-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
            <h3 className="text-white font-display text-lg md:text-2xl font-bold mb-0.5 md:mb-1 text-center md:text-left">Flowing Monkey Family</h3>
            <p className="text-white/60 text-[10px] md:text-sm tracking-wider uppercase font-bold text-center md:text-left">United by Movement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
