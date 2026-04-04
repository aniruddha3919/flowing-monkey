'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '@/config/site';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pt-0 pb-0 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Intro */}
          <div className="lg:sticky lg:top-32 h-fit">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-brand-red opacity-80" />
              <span className="text-brand-red/80 font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase">
                Common Questions
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-white/80 mb-8 leading-[0.95] tracking-[0.02em]">
              FREQUENTLY<br />ASKED
            </h2>
            
            <div className="w-12 h-0.5 bg-brand-red mb-10" />

            <div className="space-y-6 text-white/70 font-light text-sm md:text-base max-w-md mb-12 leading-relaxed">
              <p>
                Have questions before taking the leap? Here are the most common ones we get from people curious about training at FMF.
              </p>
              <p>
                If you don't see your question, reach out directly — Madhav is happy to answer before your first session.
              </p>
            </div>

            <button className="bg-brand-red hover:bg-brand-red/90 text-white/80 font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">
              Ask A Question
            </button>
            
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col">
            {siteConfig.faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 py-2">
                <button
                  className="w-full py-6 text-left flex justify-between items-center group opacity-90 hover:opacity-100 transition-opacity"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="text-white/80 text-sm md:text-base font-normal tracking-wide pr-8">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center text-brand-red/80 text-lg font-light border border-white/10 group-hover:border-white/20 transition-colors">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-white/50 text-sm md:text-base leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
