"use client";

import React from "react";
import Image from "next/image";

export function FeaturedMoment() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#1b4d2e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Dominant Image (60% width on desktop = 7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="relative group">
              {/* Sharp architectural shadow backing */}
              <div className="absolute -inset-1 bg-[#1b4d2e]/5 -rotate-1 transition-transform duration-500 group-hover:rotate-0" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#1b4d2e]/5 border border-[#1b4d2e]/15">
                <Image
                  src="/assin/photo_2026-10-16_12-04-06.jpg"
                  alt="Assinman alumni members smiling proudly wearing alumni honors medals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Clean caption badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 border border-[#1b4d2e]/15 text-[#1b4d2e]">
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
                    Connection & Fellowship
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Numbered Column (40% width on desktop = 5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Elegant Oversized Number */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#c59b4b]/80 leading-none select-none">
                01
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#1b4d2e] uppercase">
                  FEATURED MOMENT
                </span>
                <span className="h-0.5 w-12 bg-[#1b4d2e] mt-1" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight leading-tight mt-4 mb-6">
              Together Beyond <br />
              <span className="italic text-[#1b4d2e]">Graduation</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8">
              Alumni connections extend beyond the classroom, creating opportunities for fellowship, professional exchange, mentorship, and service.
            </p>

            {/* Editorial Quote Footnote */}
            <div className="border-l-2 border-[#c59b4b] pl-4 py-1 text-sm text-[#4b5563]/90 italic">
              &ldquo;The strength of the nursing fraternity lies in the bonds forged through dedication and collective purpose.&rdquo;
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
