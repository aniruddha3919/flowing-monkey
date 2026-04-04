'use client';

import React from 'react';
import { motion } from 'motion/react';

const marqueeItems = [
  'INDIAN CLUBS',
  'MUGDAR & GADA',
  'STRENGTH & MOBILITY',
  'INJURY PREVENTION',
  'MOVEMENT COACHING',
  'ANIMAL FLOW',
  'KETTLEBELL TRAINING',
];

export const Marquee = () => {
  const content = (
    <div className="flex items-center">
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-white/80 font-dm font-bold text-sm md:text-base tracking-[0.15em] uppercase px-8 py-2">
            {item}
          </span>
          <span className="text-white/60 text-[10px] transform rotate-45">■</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="bg-brand-red py-2 overflow-hidden relative flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30, // Adjust speed here
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
};
