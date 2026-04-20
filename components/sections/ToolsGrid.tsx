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
import { image } from 'motion/react-client';
import Image from 'next/image';

const toolsList = [
  {
    name: "BARBELLS & DUMBBELLS",
    image: "/assets/dumbel&barbel.jpeg",
    description: "Foundational strength tools for progressive overload and muscle building."
  },
  {
    name: "KETTLEBELLS",
    image: "/assets/kettelbell.jpeg",
    description: "Offset-handle weights for ballistic movements and core stability training."
  },
  {
    name: "STEEL MACEBELL",
    image: "/assets/steelmacebel.jpeg",
    description: "Long-lever tools used for rotational power and shoulder resilience."
  },
  {
    name: "GADA & MUGDAR",
    image: "/assets/gada&mugdar.jpeg",
    description: "Traditional Indian tools for circular loading and functional grip strength."
  },
  {
    name: "INDIAN CLUBS",
    image: "/assets/indianclubs.jpeg",
    description: "Rhythmic swinging tools for shoulder health and neurological coordination."
  },
  {
    name: "PERSIAN MILL & JODI",
    image: "/assets/persianmill.jpeg",
    description: "Ancient conditioning tools focused on heavy rotational strength and endurance."
  },
  {
    name: "BODYWEIGHT TRAINING",
    image: "/assets/bodyweighttrain.jpeg",
    description: "Mastering movement through Animal Flow, locomotion, and body control."
  },
  {
    name: "MOBILITY TOOLS",
    image: "/assets/mobilitytools.jpeg",
    description: "Bands and rollers used to fix imbalances and maintain a pain-free body."
  }
];

export const ToolsGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="our-arsenal"
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
        <div id="tools" className="flex flex-col gap-2">
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

                    {/* Image */}
                    {tool.image && (
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-all duration-500 z-10"
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