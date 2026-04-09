import React from 'react';
import Image from 'next/image';

interface ImageDividerProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function ImageDivider({
  src = "/assets/divider-image.png",
  alt = "Divider Image",
  className = ""
}: ImageDividerProps) {
  return (
    <section className={`w-full bg-brand-dark relative z-10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        style={{ width: '100%', height: 'auto' }}
        className="opacity-90 block"
      />
    </section>
  );
}
