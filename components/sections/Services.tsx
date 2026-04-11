'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    title: "Strength Training",
    description: "Build real-world strength, muscle, and resilience using barbells, dumbbells, and kettlebells."
  },
  {
    title: "Unconventional Training",
    description: "Develop rotational strength, joint stability, and athletic movement using mace, gada, mugdar, and Indian clubs."
  },
  {
    title: "Animal Flow",
    description: "Improve mobility, coordination, and body control through ground-based movement."
  },
  {
    title: "Corrective Exercise",
    description: "Address pain, posture issues, and movement limitations through structured corrective training."
  },
  {
    title: "HANDSTAND TRAINING",
    description: "Build balance, shoulder strength, and body control through structured handstand training."
  },
  {
    title: "KIDS TRAINING",
    description: "Develop coordination, mobility, strength, and confidence through fun, movement-based training."
  },
  {
    title: "ATHLETIC PERFORMANCE TRAINING",
    description: "Improve strength, mobility, power, and movement efficiency for better sports performance."
  }
];

export const Services = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-24 pb-16 md:pb-32 bg-[#0f0f12]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-[0.15em] text-brand-red relative inline-block">
            What We Offer
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-3 left-0 h-1 md:h-1.5 bg-brand-red"
            />
          </h2>
        </motion.div>

        {/* Collapsible Accordion */}
        <div className="flex flex-col border-t border-white/20">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-white/20"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 md:py-8 flex justify-between items-center group text-left focus:outline-none"
                >
                  <h3 className={`text-2xl md:text-3xl font-display uppercase tracking-widest transition-colors duration-300 font-bold ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                    {service.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? 'text-brand-orange' : 'text-white/40 group-hover:text-white/70'}`}
                  >
                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-8 md:pr-16">
                        <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed tracking-wide">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
