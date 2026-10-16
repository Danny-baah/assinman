"use client";

import React from "react";

export function ContactHero() {
  return (
    <section className="relative w-full bg-[#fbfaf7] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-14 border-b border-[#1b4d2e]/10 overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[#1b4d2e] font-serif text-[120px] lg:text-[200px] font-bold tracking-tighter leading-none hidden md:block">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          
          {/* Left Column: Heading & Eyebrow (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c59b4b]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#1b4d2e] uppercase">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111827] font-normal tracking-tight leading-[1.15]">
              Let&apos;s Stay <span className="italic font-serif text-[#1b4d2e]">Connected.</span>
            </h1>
          </div>

          {/* Right Column: Supporting Copy & Editorial Marker (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-6">
              Whether you have a membership question, need support, want to contribute, or simply want to connect with the alumni network, we&apos;re here to hear from you.
            </p>

            {/* Subtle Typographic Detail */}
            <div className="flex items-center justify-between border-t border-[#1b4d2e]/15 pt-4 text-xs">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                ASSINMAN ALUMNI NETWORK
              </span>
              <span className="font-mono text-[#9ca3af] tracking-wider">
                CONTACT / 01
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
