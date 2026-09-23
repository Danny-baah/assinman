"use client";

import React from "react";
import { FUTURE_NEWS_PILLARS } from "./types";

export function NewsCategoriesPreview() {
  return (
    <section className="relative w-full bg-[#fbfaf7] py-20 lg:py-28 border-b border-[#1b4d2e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-[#1b4d2e]/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#c59b4b]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                EDITORIAL SCOPE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111827] font-normal tracking-tight">
              What You&apos;ll <span className="italic text-[#1b4d2e]">Find Here</span>
            </h2>
          </div>

          <p className="text-sm text-[#6b7280] font-light max-w-sm">
            Future publication themes curated for the Assinman alumni community.
          </p>
        </div>

        {/* Three Editorial Columns with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {FUTURE_NEWS_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`flex flex-col justify-between pt-6 border-t border-[#1b4d2e]/20 ${
                idx > 0 ? "md:border-l md:border-t-0 md:border-[#1b4d2e]/15 md:pl-10 lg:pl-12" : ""
              }`}
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#c59b4b] font-light select-none">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#9ca3af] uppercase">
                    CATEGORY
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#111827] font-normal tracking-tight mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Marker */}
              <div className="mt-8 pt-4 border-t border-[#1b4d2e]/10 flex items-center justify-between text-xs text-[#9ca3af]">
                <span className="text-[11px] tracking-widest uppercase font-medium text-[#1b4d2e]/70">
                  Future Coverage
                </span>
                <span className="font-mono text-[10px]">
                  ED. 2026+
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
