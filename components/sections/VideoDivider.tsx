import React from 'react';

export function VideoDivider() {
  return (
    <section className="w-full relative overflow-hidden bg-brand-dark">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-h-[80vh] object-cover opacity-90"
      >
        <source src="/assets/just-animate-the-background-not-the-monkey-only-ba.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
