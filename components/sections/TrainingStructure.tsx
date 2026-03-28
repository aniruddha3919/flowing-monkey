'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { User, Sparkles } from 'lucide-react';

export const TrainingStructure = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  return (
    <section className="py-32 bg-brand-dark overflow-hidden relative" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            The Protocol
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
            Training Structure
          </h2>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-brand-card/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Monkey AI</h3>
                <p className="text-brand-orange text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" /> Online
                </p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6 md:p-8 space-y-8 flex flex-col justify-end min-h-[500px]">
            
            {/* User Message */}
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-end"
              >
                <div className="flex gap-4 max-w-[85%] md:max-w-[70%] flex-row-reverse">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/5">
                    <User size={20} />
                  </div>
                  <div className="bg-brand-orange text-white p-5 rounded-3xl rounded-tr-none shadow-lg">
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      Tell me about the training structure.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* AI Response */}
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20, originX: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-start"
              >
                <div className="flex gap-3 md:gap-4 max-w-[98%] md:max-w-[85%]">
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange border border-brand-orange/20">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-white/90 p-5 md:p-8 rounded-3xl rounded-tl-none shadow-xl space-y-4 max-h-[280px] md:max-h-none overflow-y-auto custom-scrollbar flex-1 min-w-0">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      Each session at Flowing Monkey Fitness is <strong>60 minutes</strong> long.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      Clients can choose between <strong>one-on-one personal training</strong> sessions or <strong>small group training</strong> sessions depending on their preference and goals.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.8, duration: 0.5 }}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      The standard training structure is <strong>3 sessions per week</strong>, which means <strong>12 sessions per month</strong>. If a client wants to train more frequently, additional sessions can also be arranged.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.6, duration: 0.5 }}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      Session timings are <strong>fixed initially</strong> to maintain consistency and proper training structure. However, timings can be adjusted later if another slot is available.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Input Area (Mock) */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="bg-black/50 border border-white/10 rounded-full py-3 px-6 flex items-center justify-between text-white/30 text-sm">
              <span>Type your message...</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
