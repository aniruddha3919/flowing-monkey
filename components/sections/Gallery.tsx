'use client';

import React from 'react';
import { motion } from 'motion/react';

const trainingVideos = [
  { id: 1, src: '/assets/training1.mp4', title: 'Functional Strength' },
  { id: 2, src: '/assets/training2.mp4', title: 'Animal Flow Practice' },
  { id: 3, src: '/assets/training3.mp4', title: 'Unconventional Tools' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="pt-12 pb-24 bg-brand-dark overflow-hidden mt-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange/80 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white/80 mb-4">
            Training in Action
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Real moments from our training sessions — raw, authentic, and powerful.
          </p>
        </motion.div>

        {/* Video Horizontal Slider - Based on Reviews Section */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
            {trainingVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative min-w-[280px] md:min-w-[380px] aspect-[9/16] bg-black/40 rounded-3xl overflow-hidden snap-center group border border-white/10 shadow-2xl h-[500px] md:h-[650px]"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-[1.01] group-hover:scale-105"
                  controls
                  playsInline
                  loop
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-white/60 text-[10px] tracking-[0.2em] font-bold uppercase">Training Clip {index + 1}</span>
                  </div>
                  <h4 className="text-white font-display text-lg tracking-wide opacity-90">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
