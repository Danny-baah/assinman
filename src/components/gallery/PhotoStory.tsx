"use client";

import React from "react";
import Image from "next/image";

export function PhotoStory() {
  return (
    <section className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden flex items-center justify-center">
      {/* Cinematic Full-Width Photographic Background */}
      <Image
        src="/assets/cta-editorial.jpg"
        alt="Ghanaian nurses walking purposefully through the corridor of a modern health facility"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-[0.45] contrast-[1.05]"
      />

      {/* Subtle Film Grain / Color Grading Tint */}
      <div className="absolute inset-0 bg-[#0e2719]/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

      {/* Minimal Typography Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#c59b4b]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#c59b4b] uppercase">
            THE PEOPLE BEHIND THE NETWORK
          </span>
          <span className="h-px w-10 bg-[#c59b4b]" />
        </div>

        {/* Supporting Line as Editorial Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-[1.25] max-w-3xl mx-auto">
          &ldquo;Connection becomes meaningful when it moves beyond a name on a register.&rdquo;
        </h2>
      </div>
    </section>
  );
}
