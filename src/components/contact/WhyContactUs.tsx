"use client";

import React from "react";
import Image from "next/image";

export function WhyContactUs() {
  return (
    <section className="relative w-full bg-[#fbfaf7] py-12 sm:py-16 lg:py-20 border-b border-[#1b4d2e]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Feature (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Subtle Framing Accent */}
              <div className="absolute -inset-2 border border-[#c59b4b]/30 pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#1b4d2e]/5 border border-[#1b4d2e]/15 shadow-md">
                <Image
                  src="/assin/photo_2026-10-16_12-04-06.jpg"
                  alt="Assinman alumni leaders gathered in fellowship wearing honors medals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Corner Label */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-white border border-white/20">
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase">
                    Alumni Fellowship &amp; Dialogue
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4b]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#1b4d2e] uppercase">
                WHY CONNECT
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight mb-6 leading-tight">
              Connection Starts With a <br className="hidden sm:inline" />
              <span className="italic text-[#1b4d2e]">Conversation.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8">
              The alumni network exists to keep graduates connected, support meaningful collaboration, and strengthen the relationships that continue long after graduation.
            </p>

            {/* Pull Quote */}
            <div className="border-l-2 border-[#c59b4b] pl-5 py-1 text-sm text-[#4b5563] italic">
              &ldquo;Every question asked and idea shared helps build a more vibrant, unified network across institutions and generations.&rdquo;
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
