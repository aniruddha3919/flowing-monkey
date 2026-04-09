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
    <section className="pt-2 md:pt-20 pb-4 md:pb-10 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-orange/80 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Who Is This For?
          </span>
          <h2 className="tracking-[0.1em] text-5xl md:text-7xl font-display font-bold mb-6 text-white/80">
           Who can Join
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you are just starting your fitness journey or looking to take your athletic performance to the next level.
          </p>
        </motion.div>

        <div className="flex flex-col max-w-4xl mx-auto border-t border-white/5">
          {siteConfig.whoIsThisFor.map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-6 py-8 md:py-12 border-b border-white/5 transition-colors hover:bg-white/[0.02]"
            >
              {/* Red Square Bullet */}
              <div className="w-1.5 h-1.5 bg-brand-red shrink-0 mt-2.5" />
              
              <div className="flex-1">
                <h3 className="text-white/80 font-display font-bold uppercase tracking-widest text-xl mb-4 group-hover:text-brand-orange/80 transition-colors">
                  {tag}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  {descriptions[tag] || 'Customized programming to help you reach your maximum potential.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
