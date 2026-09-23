"use client";

import React, { useRef } from "react";
import { Archive, History, BookOpen, Clock } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function EmptyArchiveState() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] py-16 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Two-Column Archival Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          {/* Left Column: Bold Archival Typography (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white/70 border border-[#1b4d2e]/15 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              {/* Oversized background watermarked archive numeral */}
              <div
                className="absolute -right-4 -bottom-6 font-editorial text-9xl sm:text-[140px] font-light text-[#1b4d2e]/5 select-none pointer-events-none"
                aria-hidden="true"
              >
                00
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mb-6">
                  <Archive className="w-6 h-6 stroke-[1.5]" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1.5">
                  Record Status
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#11161e] font-normal tracking-tight leading-none mb-3">
                  Archive Unpopulated
                </h3>
              </div>

              <div className="pt-6 border-t border-[#1b4d2e]/10 flex items-center justify-between">
                <span className="text-xs text-[#738290] font-mono">
                  Volume I · Inaugural Year
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b4d2e]">
                  <History className="w-3.5 h-3.5" />
                  Historical Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Copy & Message (7 cols) */}
          <div
            className={`lg:col-span-7 max-w-xl transition-all duration-700 delay-150 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e]">
                Archive
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#11161e] tracking-tight leading-tight mb-5"
            >
              No Past Events
            </h2>

            {/* Explanatory Copy */}
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light mb-8">
              Past alumni events will appear here as the network grows and its shared
              history is documented. As reunions, lectures, and General Assemblies conclude,
              their photographic and narrative archives will be preserved in this space.
            </p>

            {/* Archival Guidance Note */}
            <div className="p-5 rounded-xl bg-white/60 border border-[#1b4d2e]/10 text-xs sm:text-sm text-[#505c6b] space-y-2">
              <div className="flex items-center gap-2 text-[#1b4d2e] font-semibold text-xs uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Preserving Our Legacy</span>
              </div>
              <p className="leading-relaxed font-light">
                Every official gathering of Assinman NMTC graduates becomes part of our institutional
                heritage. Records and milestone summaries will be curated here following each event.
              </p>
            </div>
          </div>
        </div>

        {/* ── Unpopulated Archival Timeline Track ───────────────────── */}
        <div className="pt-10 border-t border-[#1b4d2e]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b4d2e]">
              Chronological Timeline
            </span>
            <span className="text-xs font-mono text-[#738290]">
              Commencing 2025 onwards
            </span>
          </div>

          <div className="relative py-4">
            <div className="h-px w-full bg-[#1b4d2e]/20" aria-hidden="true" />
            <div className="flex justify-between items-center -mt-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#1b4d2e] ring-4 ring-[#f8f5ee]" />
                <span className="text-xs font-bold text-[#11161e]">Network Genesis (2025)</span>
              </div>
              <span className="text-xs text-[#738290] italic">Future records to be catalogued</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
