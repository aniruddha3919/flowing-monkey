'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell, Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
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

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {siteConfig.navLinks.map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange/80 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <Link href={siteConfig.social.instagram} className="bg-white/5 p-3 rounded-xl hover:bg-brand-orange transition-colors"><Instagram size={20} /></Link>
              {/* <Link href={siteConfig.social.messages} className="bg-white/5 p-3 rounded-xl hover:bg-brand-orange transition-colors"><MessageSquare size={20} /></Link> */}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium uppercase tracking-widest">
          <div className="text-center md:text-left">
            <p>© 2026 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 font-bold text-[10px] opacity-100 text-red-800">developed by moofy</p>
          </div>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
