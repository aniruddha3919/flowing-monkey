'use client';

import React from 'react';
import { motion } from 'motion/react';
import { getIconComponent } from '@/config/site';

const integrationPoints = [
  {
    title: "Classic Strength",
    desc: "Strength training with barbells, kettlebells, and dumbbells.",
    icon: "dumbbell"
  },
  {
    title: "Unconventional Tools",
    desc: "Unconventional strength tools like mace, mugdar, gada, and Indian clubs.",
    icon: "history"
  },
  {
    title: "Animal Flow",
    desc: "Animal Flow bodyweight movement training.",
    icon: "zap"
  },
  {
    title: "Corrective Exercise",
    desc: "Corrective exercises for mobility, posture, and injury prevention.",
    icon: "users"
  }
];

export const HowWeTrain = () => {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        

        {/* Integration Points Grid */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold text-left mb-16 text-white"
          >
            Our Training Approach :
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-brand-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 text-brand-orange shadow-inner">
                  {getIconComponent(point.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">{point.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conclusion / Programs Customization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-brand-orange/30 via-brand-orange/10 to-transparent p-[1px] rounded-3xl max-w-4xl mx-auto shadow-2xl"
        >
          <div className="bg-brand-dark/95 backdrop-blur-xl rounded-[23px] p-8 md:p-12 text-center border border-white/5 shadow-inner">
            <p className="text-2xl md:text-3xl font-display font-medium text-white leading-relaxed">
              Programs are <span className="text-brand-orange italic">customized</span> according to each client&apos;s goals, movement limitations, and fitness level.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
