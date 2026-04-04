'use client';

import React, { useState } from 'react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const BookSession = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, interest, goals } = formData;
    
    if (!name || !phone || !email) {
      alert("Please fill in the required fields (*).");
      return;
    }

    const phoneNumber = "919051292950"; // India country code included
    const message = `*New Booking Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Interest:* ${interest || 'Not Specified'}%0A*Goals:* ${goals || 'Not Specified'}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="book-session" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-brand-red opacity-80" />
              <span className="text-brand-red font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80">
                Get In Touch
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-[0.95] tracking-[0.02em] opacity-80">
              BOOK YOUR<br />SESSION
            </h2>
            
            <div className="w-12 h-0.5 bg-brand-red mb-12" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" className="w-full bg-[#1c1612] border border-white/5 p-4 text-white/80 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="block text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Phone Number *</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="w-full bg-[#1c1612] border border-white/5 p-4 text-white/80 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full bg-[#1c1612] border border-white/5 p-4 text-white/80 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" />
              </div>

              <div className="space-y-3">
                <label className="block text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Training Interest</label>
                <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-[#1c1612] border border-white/5 p-4 text-white/80 text-sm focus:outline-none focus:border-brand-red/50 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select what you're interested in</option>
                  <option value="Animal Flow">Animal Flow</option>
                  <option value="Unconventional Tools (Mace, Gada)">Unconventional Tools (Mace, Gada)</option>
                  <option value="Functional Strength">Functional Strength</option>
                  <option value="Corrective Exercise">Corrective Exercise</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Tell Us About Your Goals</label>
                <textarea rows={4} name="goals" value={formData.goals} onChange={handleChange} placeholder="What do you want to achieve? Any injuries we should know about?" className="w-full bg-[#1c1612] border border-white/5 p-4 text-white/80 text-sm focus:outline-none focus:border-brand-red/50 transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-colors opacity-80 mt-2">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col lg:pt-32">
            {[
              {
                icon: <Phone className="w-4 h-4" />,
                label: 'Phone / Whatsapp',
                value: '+91 90512 92950'
              },
              {
                icon: <Instagram className="w-4 h-4" />,
                label: 'Instagram',
                value: '@flowingmonkeyfitness'
              },
              {
                icon: <MapPin className="w-4 h-4" />,
                label: 'Location',
                value: '38/F Ramesh Mitra Road, Kolkata 700025'
              },
              {
                icon: <Clock className="w-4 h-4" />,
                label: 'Session Duration',
                value: '60 minutes · 3x per week'
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-6 py-8 border-b border-white/5 first:border-t-0"
              >
                <div className="w-12 h-12 shrink-0 bg-brand-red/5 flex items-center justify-center text-brand-red opacity-80">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-80">
                    {item.label}
                  </div>
                  <div className="text-white/80 text-sm md:text-base font-normal">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
