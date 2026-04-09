'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { siteConfig } from '@/config/site';
import { TypeAnimation } from 'react-type-animation';
import ShapeGrid from '@/components/ui/ShapeGrid';

export const Hero = () => {
  const [typingKey, setTypingKey] = useState(0);

  return (
    <section className="mt-10 relative min-h-[100dvh] flex items-center pt-16 pb-12 md:pb-0 md:pt-20 overflow-hidden">
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-12 w-full">

          {/* Main Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-last lg:order-first text-left z-10"
          >
            <span className="hidden md:block text-brand-orange/80 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-6">
              Build Strength. Move Better. Stay Pain-Free.
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] md:leading-[0.9] mb-4 md:mb-6 max-w-4xl min-h-[80px] md:min-h-[150px]">
              {/* <span className="block mb-2 md:mb-4 tracking-[0.1em]">Flowing Monkey Fitness :</span> */}
              <TypeAnimation
                key={typingKey}
                sequence={[
                  'Movement-Based Strength Training in Kolkata',
                  2000,
                  () => setTypingKey(prev => prev + 1)
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                className="text-white block"
              />
            </h1>

            <p className="text-white/80 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl leading-relaxed">
              Flowing Monkey Fitness blends strength training, Animal Flow, and tools like mace, gada, and Indian clubs to build strength, mobility, and resilience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-4 lg:mt-0">
              <a 
                href="https://wa.me/919051292950" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-red hover:bg-brand-red/90 text-white/80 px-8 py-5 font-dm font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all text-center min-w-[240px]"
              >
                Contact on WhatsApp
              </a>
              <a 
                href="https://maps.app.goo.gl/xL3JYNpfFMedc47Q6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent hover:bg-white/5 border border-white/20 text-white/80 px-8 py-5 font-dm font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all text-center min-w-[240px]"
              >
                EXPLORE TRAINING
              </a>
            </div>
          </motion.div>

          {/* Hero Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-first lg:order-last flex justify-center lg:justify-end -mt-24 -mb-8 lg:mt-0 lg:mb-0"
          >
            <div className="relative w-full max-w-[280px] lg:max-w-[480px] aspect-square pointer-events-none drop-shadow-[0_0_50px_rgba(255,102,0,0.15)] animate-pulse">
              <Image
                src="/assets/hero-image.png"
                fill
                className="object-contain scale-[1.05] lg:scale-[1.15] origin-bottom"
                alt="Flowing Monkey Athlete"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
