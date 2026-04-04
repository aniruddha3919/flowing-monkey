'use client';

import React from 'react';
import Image from 'next/image';
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
    <section className="pt-0 pb-0 bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Section Top Image - Full Width (Mobile Only) */}
      <div className="w-full relative z-10 mb-[-100px] md:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px]"
        >
          <Image
            src="/assets/our-training.png"
            alt="Flowing Monkey Centerpiece"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 md:pt-32">



        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-display font-bold text-left mb-16 text-white/80 opacity-80"
        >
          Our Training Approach :
        </motion.h2>

        {/* YouTube Shorts Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              "qXze9g__8B8",
              "3_ZrSSYSB20",
              "QCHYELJJ_hM"
            ].map((id, index) => (
              <div 
                key={id}
                className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 bg-brand-dark/50"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
                  title={`Training video ${index + 1}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  frameBorder="0"
                />
              </div>
            ))}
          </motion.div>

          {/* Founder Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center mt-12 mb-0 px-4 md:px-12"
          >
            <div className="relative text-center">
              <span className="absolute -top-4 -left-2 md:-left-8 text-5xl md:text-6xl text-brand-red/80 font-display leading-none select-none opacity-80">
                “
              </span>
              <p className=" font-dm opacity-80 text-left text-xl md:text-[22px] text-white/80 leading-relaxed mb-8">
                Traditional gyms focus on machines and isolated muscle training. At FMF, we focus on how the body moves as a whole — building practical, real-world strength that reduces injury risk and makes life better.
              </p>
            </div>
            
            <div className="text-right flex flex-col items-center gap-2 mt-2">
              <span className="text-white/80 font-bold tracking-widest font-display uppercase opacity-80">
                – MADHAV HALDER
              </span>
              <span className="text-brand-red/80 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
                Founder
              </span>
            </div>
          </motion.div>
        </div>

        

        

      </div>
    </section>
  );
};
