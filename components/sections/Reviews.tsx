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
    <section id="reviews" className="pt-24 pb-24 bg-brand-dark">
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
          </div>
        </motion.div>

        {/* Reviews Horizontal Slider */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory bg-white/[0.02] border-t border-b border-white/5 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Inject CSS to hide scrollbar for webkit (Chrome, Safari) inline or globally, but inline style scrollbarWidth handles Firefox */}
            <style dangerouslySetInnerHTML={{__html: `
              .flex::-webkit-scrollbar { display: none; }
            `}} />

            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-[85vw] md:w-[450px] min-w-[85vw] md:min-w-[450px] shrink-0 snap-center p-6 md:p-12 border-white/5 flex flex-col justify-between ${
                  i !== 0 ? 'border-l' : ''
                }`}
              >
                <div>
                  <div className="flex gap-1 mb-6 md:mb-8">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-3.5 h-3.5 fill-brand-red text-brand-red opacity-80" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12 min-h-[160px] md:min-h-[180px]">
                    {review.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full border border-brand-red/30 flex items-center justify-center text-brand-red text-sm font-bold shrink-0 opacity-80 bg-brand-red/5">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="tracking-[0.1em] text-white text-base font-bold opacity-90">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="bg-brand-red/10 border border-brand-red/20 text-brand-red text-[9px] font-bold px-1.5 py-0.5 rounded-sm tracking-widest uppercase opacity-90">
                        Google
                      </span>
                      <span className="text-white/40 text-xs opacity-80">
                        {review.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-end gap-3 mt-8">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Button */}
        <div className="mt-16 flex justify-center">
          <button className="border border-white/10 hover:border-brand-red transition-colors bg-brand-dark hover:bg-brand-red/5 text-white/80 font-bold text-[11px] md:text-sm tracking-[0.2em] uppercase px-8 py-5 opacity-80">
            See All Google Reviews
          </button>
        </div>

      </div>
    </section>
  );
};
