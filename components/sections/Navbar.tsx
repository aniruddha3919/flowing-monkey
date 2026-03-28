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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Left: Nav Links (desktop) + Hamburger (mobile) */}
        <div className="flex items-center">
          {/* Mobile hamburger — left */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium hover:text-brand-orange transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Get Started Button (both desktop and mobile) */}
        <a href="https://wa.me/919051292950" target="_blank" rel="noopener noreferrer" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
          Get Started
        </a>
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
                  className="text-lg font-medium"
                >
                  {item}
                </Link>
              ))}
              <a href="https://wa.me/919051292950" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white py-3 rounded-xl font-bold mt-2 text-center block">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
