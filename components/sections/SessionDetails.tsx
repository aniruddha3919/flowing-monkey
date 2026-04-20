'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, CalendarDays, PlusCircle, CheckCircle2 } from 'lucide-react';

export const SessionDetails = () => {
  return (
    <section id="session" className="py-24 bg-brand-card">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-brand-orange/80 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 block font-display">
            Training Structure
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-[0.15em] text-brand-red relative inline-block">
            Session Details
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-3 left-0 h-1 md:h-1.5 bg-brand-red"
            />
          </h2>
          <p className="mt-10 text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            A structured approach designed for consistent progress.
          </p>
        </motion.div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#111115] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl"
          >
            <Clock className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-2xl font-display uppercase tracking-widest text-white mb-4">Duration</h3>
            <p className="text-white/80 font-sans text-lg">Each session is 60 minutes,<strong className="text-white"> focused on structured </strong> and effective training.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111115] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl"
          >
            <Users className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-2xl font-display uppercase tracking-widest text-white mb-4">Training Type</h3>
            <p className="text-white/80 font-sans text-lg">Choose between <strong className="text-white"> one-on-one</strong> or <strong className="text-white">personal training or small group sessions based on your goals.</strong>.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#111115] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl md:col-span-2 lg:col-span-1"
          >
            <CalendarDays className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-2xl font-display uppercase tracking-widest text-white mb-4">Standard Plan</h3>
            <p className="text-white/80 font-sans text-lg">3 sessions per week <strong className="text-white">(12 sessions per month)</strong>for consistent progress and long-term results.</p>
          </motion.div>

          {/* Add-ons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#111115] border border-white/5 p-8 rounded-2xl md:col-span-2 lg:col-span-1 flex flex-col justify-center shadow-xl"
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <PlusCircle className="min-w-6 min-h-6 w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <span className="text-white/80 text-lg leading-relaxed">Additional sessions can be added based on individual goals and training needs.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="min-w-6 min-h-6 w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <span className="text-white/80 text-lg leading-relaxed">Session timings are fixed initially for consistency and can be adjusted later based on availability.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a 
            href="https://wa.me/919051292950" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-red hover:bg-brand-red/90 text-white px-10 py-5 font-dm font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all shadow-lg text-center"
          >
            Book a session
          </a>
        </motion.div>

      </div>
    </section>
  );
};
