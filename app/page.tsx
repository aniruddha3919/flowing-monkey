'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Dumbbell, ChevronRight, Check, Info, 
  Users, History, Brain, Trophy, Zap, ArrowRight,
  Instagram, MessageSquare, Phone, Mail, MapPin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-orange p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">Flowing Monkey</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Training Arsenal', 'Methodology', 'Meet Coach'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium hover:text-brand-orange transition-colors">
              {item}
            </Link>
          ))}
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all">
            Join Tribe
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
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
              {['Home', 'Training Arsenal', 'Methodology', 'Meet Coach'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {item}
                </Link>
              ))}
              <button className="bg-brand-orange text-white py-3 rounded-xl font-bold mt-2">
                Join Tribe
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/fitness-mace/1920/1080?grayscale" 
          alt="Mace Training" 
          fill 
          className="object-cover opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/80 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
            Unconventional Training
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-6 max-w-3xl">
            Where Strength <br /> Meets Movement
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Master the art of mace, gada, and animal flow. Unleash your primal potential with India's most unique fitness community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-orange/20">
              Start Your Journey
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all">
              View Classes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const cards = [
    { title: 'Natural Patterns', icon: <Zap className="w-6 h-6 text-brand-orange" /> },
    { title: 'Functional Strength', icon: <Dumbbell className="w-6 h-6 text-brand-orange" /> },
    { title: 'Mobility First', icon: <Users className="w-6 h-6 text-brand-orange" /> },
  ];

  return (
    <section id="methodology" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Core Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            What is Flowing Monkey Fitness?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a movement-focused training studio dedicated to restoring natural human movement patterns. Our training revolves around the fundamentals of being human: <span className="text-white font-bold">Crawling, Squatting, Pulling, Pushing, Rotating, and Carrying.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-brand-card p-8 rounded-3xl border border-white/5 flex items-center gap-4"
            >
              <div className="bg-brand-dark p-3 rounded-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsGrid = () => {
  const tools = [
    { name: 'Steel Mace & Gada', icon: Dumbbell },
    { name: 'Kettlebells', icon: Dumbbell },
    { name: 'Persian Mills / Jodi', icon: Dumbbell },
    { name: 'Indian Clubs', icon: Dumbbell },
    { name: 'Barbells & Dumbbells', icon: Dumbbell },
    { name: 'Animal Flow', icon: Zap },
  ];

  return (
    <section id="training-arsenal" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">
          Tools We Train With
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="bg-brand-card p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-brand-orange/30 transition-colors group">
              <div className="text-brand-orange group-hover:scale-110 transition-transform">
                <tool.icon size={40} />
              </div>
              <span className="text-lg font-bold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="meet-coach" className="py-24 bg-brand-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 border border-white/5 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-brand-orange rounded-full scale-110 animate-pulse" />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-brand-card">
                  <Image 
                    src="https://picsum.photos/seed/coach/400/400" 
                    alt="Madhav Halder" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="text-brand-orange font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Founder & Head Coach
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Madhav Halder</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                With over 10 years of experience in unconventional strength training, Madhav specializes in merging ancient Indian physical culture with modern biomechanics.
              </p>
              <div className="flex gap-12 justify-center md:justify-start">
                <div>
                  <div className="text-3xl font-display font-bold text-brand-orange">500+</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-orange">12+</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowWeTrain = () => {
  const steps = [
    { num: '01', title: 'Movement First Approach', desc: 'Quality over quantity. We ensure you move correctly before adding load.' },
    { num: '02', title: 'Unconventional Training', desc: 'Using tools like Gadas and Maces to build rotational power and stability.' },
    { num: '03', title: 'Corrective Exercise', desc: 'Fixing imbalances and preventing injuries through targeted mobility work.' },
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">How We Train</h2>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <span className="text-6xl md:text-8xl font-display font-bold text-brand-orange/20 group-hover:text-brand-orange transition-colors">
                {step.num}
              </span>
              <div className="pt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-lg max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Difference = () => {
  const items = [
    { title: 'Community Driven', desc: 'Join a tribe of like-minded movers who support your growth.', icon: <Users /> },
    { title: 'Ancient Heritage', desc: 'Rooted in the traditional Akhada culture of India.', icon: <History /> },
    { title: 'Mindful Movement', desc: 'Focus on neuro-muscular connection and body awareness.', icon: <Brain /> },
    { title: 'Proven Results', desc: 'Structured programming that translates to real-world strength.', icon: <Trophy /> },
    { title: 'Dynamic Energy', desc: 'Sessions designed to leave you energized, not just exhausted.', icon: <Zap /> },
  ];

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">The Monkey Difference</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-brand-card rounded-3xl border-l-4 border-brand-orange">
              <div className="text-brand-orange shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">Why We're Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-card p-10 rounded-[2.5rem] border border-white/5">
            <span className="text-white/40 font-bold uppercase tracking-widest text-xs mb-6 block">Traditional Gyms</span>
            <ul className="space-y-4">
              {['Machine-based training', 'Muscle isolation focus', 'Linear, repetitive movements'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <X className="text-red-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-orange/10 p-10 rounded-[2.5rem] border border-brand-orange/20">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 block">Flowing Monkey</span>
            <ul className="space-y-4">
              {['Functional movement patterns', 'Whole-body integration', 'Joint health & longevity'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="text-brand-orange w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: 'Is this for beginners?', a: 'Absolutely! We scale every movement to your current ability level.' },
    { q: 'What should I bring?', a: 'Comfortable workout clothes, water bottle, and an open mind. We provide all tools.' },
    { q: 'Do you offer online classes?', a: 'Yes, we have specialized online programs for mace and animal flow.' },
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-brand-card rounded-2xl border border-white/5 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center font-bold text-lg"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.q}
                <ChevronRight className={`transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 text-white/60">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Flowing Monkey</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Building functional strength through unconventional tools and natural movement patterns.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Training Arsenal</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Methodology</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Meet Coach</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-orange" /> +91 9876543210</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-orange" /> hello@flowingmonkey.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-orange" /> Studio Location, Kolkata</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="bg-white/5 p-3 rounded-xl hover:bg-brand-orange transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="bg-white/5 p-3 rounded-xl hover:bg-brand-orange transition-colors"><MessageSquare size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2026 Flowing Monkey Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      
      <Philosophy />
      
      <ToolsGrid />
      
      <Founder />
      
      <HowWeTrain />
      
      <Difference />
      
      <Comparison />

      {/* Who Is This For Section */}
      <section className="py-24 bg-brand-dark text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">Who Is This Training For?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Strength Seekers', 'Weight Loss', 'Athletes', 'Beginners Welcome', 'Mobility & Pain Issues'].map((tag) => (
              <span key={tag} className="px-8 py-3 bg-brand-card border border-white/10 rounded-full text-sm font-bold hover:border-brand-orange transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training Structure */}
      <section className="py-24 bg-brand-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">Training Structure</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-brand-orange mb-2">60 Min</div>
              <div className="text-xs text-white/40 uppercase tracking-[0.3em]">Session Duration</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-brand-orange mb-2">1-on-1</div>
              <div className="text-xs text-white/40 uppercase tracking-[0.3em]">Or Small Groups</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-brand-orange mb-2">3x / Week</div>
              <div className="text-xs text-white/40 uppercase tracking-[0.3em]">12 Sessions / Month</div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Gallery Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">Training in Action</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] relative rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="https://picsum.photos/seed/action1/800/1200" 
                alt="Training 1" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[3/4] relative rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="https://picsum.photos/seed/action2/800/1200" 
                alt="Training 2" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-orange rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Start Moving Better Today</h2>
            <p className="text-xl opacity-90 mb-12 max-w-xl mx-auto">
              Join our tribe and rediscover your natural strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-orange px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 transition-all">
                Book Trial Session
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Contact Coach
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
