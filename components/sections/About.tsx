'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section className="relative w-full bg-[#0f0f12]">
      {/* Top Image Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/assets/image2.webp"
          alt="Flowing Monkey Fitness Training"
          fill
          className="object-cover object-center opacity-60"
        />
        {/* Soft gradient to fade into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f12]/50 to-[#0f0f12]" />
      </div>

      {/* Content Section overlapping the image */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 -mt-32 md:-mt-40 pb-20 md:pb-24">
        {/* Overlapping Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#111115] border border-white/5 p-8 md:p-14 lg:p-16 drop-shadow-2xl relative"
        >
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />
          
          <h2 className="text-brand-orange font-bold font-display text-center uppercase tracking-[0.15em] mb-6 text-xl md:text-2xl">
            About Flowing Monkey Fitness
          </h2>
          
          <p className="text-white/80 text-base md:text-lg lg:text-xl font-sans leading-relaxed md:leading-loose text-justify">
            Flowing Monkey Fitness is a movement-focused training studio designed to help people become stronger, more mobile, and pain-free. Unlike traditional gyms that focus on machines and isolated exercises, we train the body as a complete system using natural human movement patterns such as squatting, hinging, pushing, pulling, rotating, and locomotion. The goal is simple — build a body that is strong, mobile, and capable in real life.
          </p>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-left text-white text-lg md:text-2xl lg:text-3xl font-display leading-[1.4] md:leading-[1.5] px-4 md:px-12 tracking-wide">
            Our approach combines modern strength training with traditional tools and movement systems to <span className="text-brand-orange">Strength. Mobility. Coordination. Real-world performance.</span> and overall physical performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
