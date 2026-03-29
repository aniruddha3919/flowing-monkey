'use client';

import React from 'react';
import { motion } from 'motion/react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[black] overflow-hidden"
    >
      {/* Centered Video Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[85vw] md:max-w-xl flex items-center justify-center rounded-2xl overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-auto max-h-[70vh] rounded-2xl shadow-2xl shadow-black/50"
        >
          <source src="/assets/loading-screen.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};
