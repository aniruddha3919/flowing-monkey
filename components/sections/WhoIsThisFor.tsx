'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

const descriptions: Record<string, string> = {
  'Strength Seekers': 'For those looking to break plateaus and build raw, functional power through unconventional methods.',
  'Weight Loss': 'Sustainable, high-energy sessions that burn fat, improve metabolism, and build lean muscle naturally.',
  'Athletes': 'Enhance your sports performance with improved rotational power, mobility, and joint resilience.',
  'Beginners Welcome': 'No prior experience needed. We scale every movement to your current level and build a solid foundation.',
  'Mobility & Pain Issues': 'Corrective exercises to restore natural movement, eliminate joint pain, and bulletproof your body.'
};

export const WhoIsThisFor = () => {
  return (
    <section className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-orange font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Who Is This For?
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            Designed For Every Body
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you are just starting your fitness journey or looking to take your athletic performance to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.whoIsThisFor.map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-brand-card/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 hover:border-brand-orange/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-center min-h-[250px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[40px] group-hover:bg-brand-orange/20 transition-colors pointer-events-none" />

              <div className="text-brand-orange font-bold tracking-[0.3em] text-sm mb-4">0{i + 1}</div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                {tag}
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                {descriptions[tag] || 'Customized programming to help you reach your maximum potential.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
