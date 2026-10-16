"use client";

import React from "react";
import Image from "next/image";

export function GalleryHero() {
  return (
    <section className="relative w-full bg-[#fbfaf7] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-14 overflow-hidden border-b border-[#1b4d2e]/10">
      {/* Editorial Watermark / Background Accent */}
      <div className="absolute top-12 right-0 -mr-16 select-none pointer-events-none opacity-[0.03] text-[#1b4d2e] font-serif text-[140px] lg:text-[220px] font-bold tracking-tighter leading-none hidden md:block">
        ARCHIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Typography & Editorial Column (Left, 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            {/* Small vertical brand indicator (visible on desktop) */}
            <div className="hidden lg:flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#c59b4b]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#1b4d2e] uppercase">
                ASSINMAN ALUMNI NETWORK
              </span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c59b4b]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                THE ALUMNI GALLERY
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111827] font-normal tracking-tight leading-[1.15] mb-6">
              Moments That <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#1b4d2e]">Bring Us Together</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8 max-w-lg">
              A visual collection celebrating connection, service, professional growth, and the people who make the Assinman alumni community what it is.
            </p>

            {/* Curatorial Annotation Note */}
            <div className="pt-6 border-t border-[#1b4d2e]/10 flex items-center justify-between text-xs text-[#6b7280]">
              <span className="tracking-wider uppercase font-medium text-[#1b4d2e]">
                Visual Retrospective
              </span>
              <span className="font-mono text-[#9ca3af]">
                VOL. 2026 // EDITION 01
              </span>
            </div>
          </div>

          {/* Large Editorial Hero Image (Right, 7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative group">
              {/* Outer Decorative Frame Accent */}
              <div className="absolute -inset-2 sm:-inset-3 border border-[#c59b4b]/30 rounded-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]" />
              
              {/* Main Image Container with sharp editorial aesthetic */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#1b4d2e]/5 shadow-xl">
                <Image
                  src="/assin/photo_2026-10-16_12-04-26.jpg"
                  alt="Atmospheric gathering of Assinman healthcare alumni on campus grounds"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Image Tag Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4b] animate-pulse" />
                  <span className="text-[11px] tracking-[0.18em] uppercase font-medium">
                    Editorial Archive
                  </span>
                </div>
              </div>

              {/* Vertical Side Label */}
              <div className="hidden xl:block absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center">
                <span className="text-[10px] tracking-[0.3em] font-medium text-[#6b7280] uppercase whitespace-nowrap">
                  ASSINMAN ALUMNI NETWORK
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
