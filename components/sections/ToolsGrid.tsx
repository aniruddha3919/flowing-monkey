'use client';

import React from 'react';
import CircularGallery from '@/components/ui/CircularGallery';
import { siteConfig } from '@/config/site';

export const ToolsGrid = () => {
  // Map siteConfig tools to CircularGallery items format with placeholder images
  // User can upload real tool images into public/assets/tools/ and update these paths
  const galleryItems = siteConfig.tools.map((tool, i) => {
    let imagePath = `https://picsum.photos/seed/tool-${i}/800/600?grayscale`;
    
    // Map tool names to the uploaded user images
    if (tool.name.includes('Kettlebells')) {
      imagePath = '/assets/kettlebells.jpeg';
    } else if (tool.name.includes('Barbells')) {
      imagePath = '/assets/barbells-and-dumbbells-create-asthetic-product-pho.jpeg';
    } else if (tool.name.includes('Persian') || tool.name.includes('Mills')) {
      imagePath = '/assets/BMF_Persian_Meels_0788.jpg';
    } else if (tool.name.includes('Mace') || tool.name.includes('Gada') || tool.name.includes('Clubs')) {
      imagePath = '/assets/generate-these-product-image.jpeg'; // General image mapping for mace/clubs
    }

    return {
      image: imagePath,
      text: ''
    };
  });

  return (
    <section id="training-arsenal" className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.05)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center">
          <span className="text-brand-orange font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Our Arsenal
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Tools We Train With
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Experience dynamic and unconventional training methods using our specialized equipment designed to build raw strength and fluid movement.
          </p>
        </div>
      </div>
      
      {/* Circular Gallery Container */}
      <div className="w-full relative z-10" style={{ height: '600px' }}>
        <CircularGallery 
          items={galleryItems}
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
};
