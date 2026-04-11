'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Dumbbell,
  Activity,
  Flame,
  Shield,
  Circle,
  Waves,
  PersonStanding,
  Grip,
  HeartPulse,
  Info
} from "lucide-react";
import { AnimatePresence } from 'motion/react';

const toolsList = [
  { 
    name: "BARBELLS & DUMBBELLS", 
    image: "/assets/barbells-and-dumbbells-create-asthetic-product-pho.jpeg",
    description: "Foundational strength tools for progressive overload and muscle building."
  },
  { 
    name: "KETTLEBELLS", 
    image: "/assets/kettlebells.jpeg",
    description: "Offset-handle weights for ballistic movements and core stability training."
  },
  { 
    name: "STEEL MACEBELL",  
    image: "/assets/macebell.png",
    description: "Long-lever tools used for rotational power and shoulder resilience."
  },
  { 
    name: "GADA & MUGDAR", 
    image: "/assets/generate-these-product-image.jpeg",
    description: "Traditional Indian tools for circular loading and functional grip strength."
  },
  { 
    name: "INDIAN CLUBS / JODI", 
    image: "https://www.mudgarclub.com/cdn/shop/files/4_79f2c702-074b-4eca-82eb-fa7f56743ff7.jpg?v=1746190264&width=1301",
    description: "Rhythmic swinging tools for shoulder health and neurological coordination."
  },
  { 
    name: "PERSIAN MILL", 
    image: "/assets/BMF_Persian_Meels_0788.jpg",
    description: "Ancient conditioning tools focused on heavy rotational strength and endurance."
  },
  { 
    name: "BODYWEIGHT TRAINING", 
    icon: PersonStanding,
    description: "Mastering movement through Animal Flow, locomotion, and body control."
  },
  { 
    name: "PULL-UP BARS & DRILLS", 
    icon: Grip,
    description: "Suspension training and hanging drills to build raw pulling power."
  },
  { 
    name: "MOBILITY TOOLS", 
    icon: HeartPulse,
    description: "Bands and rollers used to fix imbalances and maintain a pain-free body."
  }
];

export const ToolsGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="training-arsenal"
      className="pt-16 pb-24 md:pt-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.05)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-left text-brand-orange/80 font-bold tracking-[0.2em] text-xl uppercase mb-4 block font-display">
            Our Arsenal
          </span>

          <h2 className="text-left text-4xl md:text-6xl font-display font-bold text-white/80 mb-6 tracking-[0.1em]">
            Tools We Train With
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed font-light text-left">
            Experience dynamic and unconventional training methods using our specialized equipment designed to build raw strength and fluid movement. Click any tool for details.
          </p>
        </div>

        {/* Tools List */}
        <div className="flex flex-col gap-2">
          {toolsList.map((tool, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`group flex flex-col py-4 border-b border-brand-red/10 transition-all cursor-pointer hover:bg-white/[0.03] px-4 rounded-xl ${isExpanded ? 'bg-white/[0.05] border-brand-red/30' : ''}`}
              >
                <div className="flex items-center gap-6">
                  {/* Icon Box */}
                  <div className="w-16 h-16 shrink-0 bg-[#2b1010] border border-[#3d1a1a] rounded-xl flex items-center justify-center relative overflow-hidden">
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-orange-500/10 to-transparent" />

                    {/* Icon or Image */}
                    {tool.icon ? (
                      <tool.icon className="w-8 h-8 text-brand-orange/80 group-hover:scale-110 group-hover:text-orange-400 transition-all duration-300 z-10" />
                    ) : tool.image && (
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 z-10"
                      />
                    )}
                  </div>

                  {/* Text Container */}
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-white/80 text-sm md:text-xl font-dm uppercase tracking-widest font-bold transition-colors ${isExpanded ? 'text-brand-orange' : ''}`}>
                      {tool.name}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      className="text-brand-orange/40"
                    >
                      <Info className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 pl-[88px] pr-4">
                        <p className="text-white/70 text-base md:text-lg leading-relaxed font-light italic">
                          {tool.description}
                        </p>
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};