'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
  },
  {
    initials: 'SK',
    name: 'Sameer K.',
    time: '6 months ago',
    text: `"The focus on corrective exercises completely changed my perspective. Instead of just burning calories, I am actually building a body that moves perfectly and doesn't get injured easily."`
  }
];

const videoReviews = [
  { id: 1, src: '/assets/review1.mp4' },
  { id: 2, src: '/assets/review2.mp4' },
  { id: 3, src: '/assets/review3.mp4' },
];

export const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="pt-2 pb-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-brand-red opacity-80" />
              <span className="text-brand-red font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80">
                Testimonials
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-[0.95] tracking-[0.02em] opacity-80">
              CLIENT<br />EXPERIENCE
            </h2>
            
            
          </div>
        </motion.div>

        {/* Video Reviews Slider */}
        <div className="mb-24 relative">
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
            {videoReviews.map((video, index) => (
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
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-white/60 text-[10px] tracking-[0.2em] font-bold uppercase">Experience {index + 1}</span>
                  </div>
                  <h4 className="text-white font-display text-lg tracking-wide opacity-90">Client Testimonial</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* Footer Button */}
        <div className=" flex justify-center">
          <button className="border border-white/10 hover:border-brand-red transition-colors bg-brand-dark hover:bg-brand-red/5 text-white/80 font-bold text-[11px] md:text-sm tracking-[0.2em] uppercase px-8 py-5 opacity-80">
            See All Google Reviews
          </button>
        </div>

      </div>
    </section>
  );
};
