'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-6 flex justify-between items-center">

        {/* Left: Nav Links (desktop) + Hamburger (mobile) */}
        <div className="flex items-center">
          {/* Mobile hamburger — left */}
          <button className="md:hidden text-white/80" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-display tracking-widest uppercase hover:text-brand-orange/80 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Get Started Button (both desktop and mobile) */}
        <div className="flex-shrink-0 pr-2 md:pr-0">
          <a 
            href="https://wa.me/919051292950" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-red hover:bg-brand-red/90 text-white/80 px-5 md:px-7 py-2.5 rounded-none font-dm text-xs md:text-sm font-bold tracking-[0.1em] uppercase transition-all whitespace-nowrap"
          >
            BOOK A SESSION
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display tracking-widest uppercase"
                >
                  {item}
                </Link>
              ))}
              <a 
                href="https://wa.me/919051292950" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-red text-white/80 py-4 rounded-none font-dm font-bold tracking-[0.1em] uppercase text-center block"
              >
                BOOK A SESSION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
