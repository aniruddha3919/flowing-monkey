'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 
          }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          <Image
            src="/assets/hero-image.png"
            alt="Flowing Monkey Fitness Logo"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(255,102,0,0.3)]"
            priority
          />
        </motion.div>

        {/* Progress Text / Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <span className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
            Entering The Flow
          </span>
          
          {/* Animated Loader Bar */}
          <div className="mt-4 w-40 md:w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-orange to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Modern Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </motion.div>
  );
};
