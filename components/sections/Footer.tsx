'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell, Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
          <div className="w-full md:max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white/80" />
              </div>
              <span className="tracking-[0.1em] text-xl font-display font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col w-full md:max-w-md md:ml-auto">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/50">Follow Us</h4>
            <Link 
              href={siteConfig.social.instagram} 
              className="group relative flex items-center justify-center w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(220,39,67,0.3)]"
            >
              <div className="flex items-center justify-center gap-3 w-full bg-brand-dark group-hover:bg-black/20 rounded-[10px] px-6 py-4 transition-all duration-300">
                <Instagram size={22} className="text-white" />
                <span className="font-bold text-sm tracking-[0.15em] uppercase text-white">Follow on Instagram</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium uppercase tracking-widest">
          <div className="text-center md:text-left">
            <p>© 2026 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 font-bold text-[10px] opacity-100 text-red-800">developed by moofy</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
