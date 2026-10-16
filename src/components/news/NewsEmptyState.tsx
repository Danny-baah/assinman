"use client";

import React from "react";
import { Newspaper } from "lucide-react";

export function NewsEmptyState() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#1b4d2e]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Empty State Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Typographic Newsroom Feature & Oversized 00 (5 Cols) */}
          <div className="lg:col-span-5 border-l-2 border-[#c59b4b] pl-6 sm:pl-8 py-2">
            <div className="flex items-baseline gap-6">
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#1b4d2e]/25 leading-none select-none">
                00
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#1b4d2e] uppercase block">
                  NEWSROOM
                </span>
                <span className="text-xs text-[#6b7280] font-light tracking-wide uppercase mt-1 block">
                  Archive Index // Standby
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9ca3af] font-mono tracking-wider mt-6 uppercase">
              STATUS: READY TO PUBLISH
            </p>
          </div>

          {/* Right: Editorial Empty State Narrative (7 Cols) */}
          <div className="lg:col-span-7 bg-[#fbfaf7] p-8 sm:p-12 border border-[#1b4d2e]/10 shadow-sm relative">
            
            {/* Subtle Top-Right Icon */}
            <div className="absolute top-6 right-6 text-[#1b4d2e]/20">
              <Newspaper className="w-8 h-8 stroke-[1.25]" />
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                THE NEWSROOM
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight mb-4">
              No News Yet
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8 max-w-xl">
              There are no news updates at the moment. New stories, announcements, and alumni updates will appear here as the network continues to grow.
            </p>

            {/* Editorial Rule */}
            <div className="h-px w-full bg-[#1b4d2e]/15 mb-6" />

            {/* Footer Line */}
            <div className="flex items-center justify-between text-xs text-[#6b7280]">
              <span className="italic font-serif text-[#1b4d2e]">
                New stories will appear here.
              </span>
              <span className="font-mono text-[#9ca3af] text-[11px]">
                AAN JOURNAL DESK
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
