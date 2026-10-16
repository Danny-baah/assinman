"use client";

import React from "react";

export function NewsEditorialStatement() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#1b4d2e]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Editorial Eyebrow Rule */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-[#c59b4b]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#1b4d2e] uppercase">
            EDITORIAL STATEMENT
          </span>
          <span className="h-px w-12 bg-[#c59b4b]" />
        </div>

        {/* Large Typographic Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#111827] font-normal tracking-tight leading-[1.25] mb-6 max-w-4xl mx-auto">
          &ldquo;CONNECTED BY OUR PAST. INFORMED BY OUR PRESENT.{" "}
          <span className="italic font-serif text-[#1b4d2e]">BUILDING OUR FUTURE.</span>&rdquo;
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light max-w-2xl mx-auto">
          The AAN Journal will become a place where members can stay connected with the people, ideas, and developments shaping the alumni community.
        </p>

      </div>
    </section>
  );
}
