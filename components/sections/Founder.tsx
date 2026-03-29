'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

// Placeholders for certificate images. 
// Add your actual images to public/assets/certificates/ and update the paths here.
const certificates = [
  { id: 1, image: '/assets/certificates/1000007397%20-%20Madhav%20Halder.jpg' },
  { id: 2, image: '/assets/certificates/Screenshot_2023-08-05-12-53-59-13_e2d5b3f32b79de1d45acd1fad96fbb0f-01%20-%20Madhav%20Halder.jpeg' },
  { id: 3, image: '/assets/certificates/Screenshot_2025-01-30-13-33-46-37_f541918c7893c52dbd1ee5d319333948%20-%20Madhav%20Halder.jpg' },
  { id: 4, image: '/assets/certificates/Screenshot_2025-11-25-17-29-22-97_40deb401b9ffe8e1df2f1cc5ba480b12%20-%20Madhav%20Halder.jpg' },
];

export const Founder = () => {
  return (
    <section id="meet-coach" className="pt-24 pb-0 bg-brand-card">
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
            <span className="text-brand-orange font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              {siteConfig.founder.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
              {siteConfig.founder.name}
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 font-light">
              {siteConfig.founder.description}
            </p>
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
                  <div className="text-4xl md:text-5xl font-display font-bold text-brand-orange mb-2">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificates Horizontal Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-16 border-t border-white/5"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white mb-3">Certifications & Achievements</h3>
            <p className="text-white/50 max-w-2xl mx-auto">Recognized excellence in fitness, coaching, and continuous education to bring you the best results.</p>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-8 w-max py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30
              }}
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div
                  key={i}
                  className="w-72 h-52 rounded-2xl border border-white/5 flex-shrink-0 relative overflow-hidden shadow-lg"
                >
                  <Image
                    src={cert.image}
                    alt="Certificate"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
