'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    initials: 'RS',
    name: 'Rahul S.',
    time: '3 months ago',
    text: `"Madhav is an exceptional coach. His knowledge of movement and the human body is incredible. I came in with severe lower back pain and within a few months I was training pain-free. The unconventional tools are addictive!"`
  },
  {
    initials: 'PB',
    name: 'Priya B.',
    time: '5 months ago',
    text: `"Never thought I'd enjoy working out until I found FMF. The Animal Flow training is unlike anything I've done before. Madhav's patience and attention to detail for a complete beginner like me is remarkable."`
  },
  {
    initials: 'AK',
    name: 'Arnav K.',
    time: '2 months ago',
    text: `"As an athlete I was looking to improve functional strength. Madhav's approach with mace and kettlebell training transformed my performance. The personalised programming is world-class."`
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="pt-24 pb-0 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-brand-red opacity-80" />
            <span className="text-brand-red font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80">
              What Clients Say
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-[0.95] tracking-[0.02em] opacity-80">
            CLIENT<br />REVIEWS
          </h2>
          
          <div className="w-12 h-0.5 bg-brand-red mb-10" />

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red opacity-80" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-light opacity-80">
              5.0 on Google · Flowing Monkey Fitness, Kolkata
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white/[0.02] border-t border-b border-white/5">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 md:p-12 border-white/5 ${
                i !== 0 ? 'border-t lg:border-t-0 lg:border-l' : ''
              }`}
            >
              <div className="flex  gap-1 mb-8">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-3.5 h-3.5 fill-brand-red text-brand-red opacity-80" />
                ))}
              </div>
              
              <p className="text-white/70 italic font-light text-sm md:text-base leading-relaxed mb-12 opacity-80 min-h-[140px] md:min-h-[120px]">
                {review.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-red/30 flex items-center justify-center text-brand-red text-[11px] font-bold shrink-0 opacity-80">
                  {review.initials}
                </div>
                <div>
                  <h4 className="tracking-[0.2em] text-white text-sm font-bold opacity-80">{review.name}</h4>
                  <div className="flex items-center gap-2 mt-1.5 border-t border-transparent">
                    <span className="bg-brand-red/10 border border-brand-red/20 text-brand-red text-[9px] font-bold px-1.5 py-0.5 rounded-sm tracking-wider uppercase opacity-80">
                      Google
                    </span>
                    <span className="text-white/40 text-[11px] opacity-80">
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 flex justify-center">
          <button className="border border-white/10 hover:border-white/30 transition-colors bg-brand-dark text-white/80 font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase px-8 py-4 opacity-80">
            See All Google Reviews
          </button>
        </div>

      </div>
    </section>
  );
};
