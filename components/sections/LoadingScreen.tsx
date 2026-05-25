'use client';

import React from 'react';
import { motion } from 'motion/react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden"
    >
      <video
        src="/assets/loading-screen.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full max-w-[90%] md:max-w-[70%] max-h-[85%] object-contain"
      />
    </motion.div>
  );
};
