'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  { id: 1, image: '/assets/certificates/1000007397%20-%20Madhav%20Halder.jpg' },
  { id: 2, image: '/assets/certificates/Screenshot_2023-08-05-12-53-59-13_e2d5b3f32b79de1d45acd1fad96fbb0f-01%20-%20Madhav%20Halder.jpeg' },
  { id: 3, image: '/assets/certificates/Screenshot_2025-01-30-13-33-46-37_f541918c7893c52dbd1ee5d319333948%20-%20Madhav%20Halder.jpg' },
  { id: 4, image: '/assets/certificates/Screenshot_2025-11-25-17-29-22-97_40deb401b9ffe8e1df2f1cc5ba480b12%20-%20Madhav%20Halder.jpg' },
];

export const Founder = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % certificates.length : null));
  const goPrev = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + certificates.length) % certificates.length : null));

  return (
    <section id="meet-coach" className="pt-24 pb-24 bg-brand-card">
      <div className="max-w-7xl mx-auto px-6">

        {/* Founder Details Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 border-2 border-brand-orange rounded-full scale-[1.03] animate-pulse opacity-50" />
              <div className="absolute inset-[-20px] rounded-full border border-white/5" />
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-brand-orange/20 shadow-[0_0_50px_rgba(255,102,0,0.1)]">
                <Image
                  src="/assets/founder.jpg"
                  alt={siteConfig.founder.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="text-brand-orange/80 font-bold tracking-[0.2em] text-sm uppercase mb-4 block font-display">
              {siteConfig.founder.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white/80 leading-tight">
              {siteConfig.founder.name}
            </h2>
            <div className="flex justify-center w-full">
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 font-light text-justify">
                {siteConfig.founder.description}
              </p>

            </div>

            <div className="flex gap-10 justify-center md:justify-start flex-wrap">
              {siteConfig.founder.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-brand-orange/80 mb-2">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificates Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 pt-16 border-t border-white/5"
        >


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-lg group"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={cert.image}
                  alt={`Certificate ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white/80 font-dm text-sm tracking-widest uppercase font-bold bg-black/50 px-4 py-2 rounded">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox for Certificates */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white/80 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white/80 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[80vh] max-w-5xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={certificates[selectedIndex].image}
                alt={`Certificate ${selectedIndex + 1}`}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white/80 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
              {selectedIndex + 1} / {certificates.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
