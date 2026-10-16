"use client";

import React, { useRef } from "react";
import { Calendar, Bell, Sparkles, Clock, MapPin } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function EmptyEventsState() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Two-Column Empty State */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Bold Typographic & Calendar Motif (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white/70 border border-[#1b4d2e]/15 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              {/* Oversized background watermarked calendar numeral */}
              <div
                className="absolute -right-4 -bottom-6 font-editorial text-9xl sm:text-[140px] font-light text-[#1b4d2e]/5 select-none pointer-events-none"
                aria-hidden="true"
              >
                00
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 stroke-[1.5]" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
                  Schedule Notice
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#11161e] font-normal tracking-tight leading-none mb-3">
                  No Events Scheduled
                </h3>
              </div>

              <div className="pt-6 border-t border-[#1b4d2e]/10 flex items-center justify-between">
                <span className="text-xs text-[#738290] font-mono">
                  Calendar Status: Pending Release
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b4d2e]">
                  <Clock className="w-3.5 h-3.5" />
                  Upcoming
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Copy & Reassurance (7 cols) */}
          <div
            className={`lg:col-span-7 max-w-xl transition-all duration-700 delay-150 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e]">
                Coming Soon
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#11161e] tracking-tight leading-tight mb-5"
            >
              No Upcoming Events
            </h2>

            {/* Explanatory Copy */}
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light mb-8">
              There are no upcoming alumni events at the moment. New gatherings, reunions,
              and community activities will appear here as soon as official dates and details
              are finalized and announced.
            </p>

            {/* Subtle Editorial Guidance Note */}
            <div className="p-5 rounded-xl bg-white/60 border border-[#1b4d2e]/10 text-xs sm:text-sm text-[#505c6b] space-y-2">
              <div className="flex items-center gap-2 text-[#1b4d2e] font-semibold text-xs uppercase tracking-wider">
                <Bell className="w-3.5 h-3.5" />
                <span>Stay Informed</span>
              </div>
              <p className="leading-relaxed font-light">
                Official notices for General Assemblies, reunions, and professional workshops
                will be communicated directly through verified member channels and published on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
