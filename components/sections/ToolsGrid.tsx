'use client';

import React from 'react';
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
  icons
} from "lucide-react";

const toolsList = [
  { name: "BARBELLS & DUMBBELLS", image: "/assets/barbells-and-dumbbells-create-asthetic-product-pho.jpeg" },
  { name: "KETTLEBELLS", image: "/assets/kettlebells.jpeg" },
  { name: "STEEL MACEBELL",  image: "/assets/macebell.png"},
  { name: "GADA & MUGDAR", image: "/assets/generate-these-product-image.jpeg" },
  { name: "INDIAN CLUBS / JODI", image: "https://www.mudgarclub.com/cdn/shop/files/4_79f2c702-074b-4eca-82eb-fa7f56743ff7.jpg?v=1746190264&width=1301" },
  { name: "PERSIAN MILL", image: "/assets/BMF_Persian_Meels_0788.jpg" },
  { name: "BODYWEIGHT TRAINING", icon: PersonStanding },
  { name: "PULL-UP BARS & MOVEMENT DRILLS", icon: Grip },
  { name: "MOBILITY & CORRECTIVE EXERCISE TOOLS", icon: HeartPulse }
];

export const ToolsGrid = () => {
  return (
    <section
      id="training-arsenal"
      className="pt-12 pb-24 md:pt-16 bg-brand-dark border-t border-white/5 relative overflow-hidden"
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
            Experience dynamic and unconventional training methods using our specialized equipment designed to build raw strength and fluid movement.
          </p>
        </div>

        {/* Tools List */}
        <div className="flex flex-col">
          {toolsList.map((tool, index) => {
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
                className="group flex items-center gap-6 py-6 border-b border-brand-red/20 transition-all hover:bg-white/[0.02] px-4 rounded-xl"
              >
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

                {/* Text */}
                <span className="text-white/80 text-sm md:text-xl font-dm uppercase tracking-widest font-bold">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};