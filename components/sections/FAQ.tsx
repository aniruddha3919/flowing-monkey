'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, i) => (
            <div key={i} className="bg-brand-card rounded-2xl border border-white/5 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center font-bold text-lg"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.q}
                <ChevronRight className={`transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 text-white/60">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
