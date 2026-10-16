"use client";

import React, { useRef } from "react";
import { CalendarX } from "lucide-react";
import { useInView } from "./useInView";

export function UpcomingEventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#11161e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className={`space-y-5 mb-12 sm:mb-14 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
              What&apos;s On
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#11161e] leading-[1.1]">
            Upcoming Events
          </h2>
          <p className="text-[15px] text-[#4a5568] leading-[1.8] max-w-xl">
            Stay engaged through reunions, AGMs, lectures, and community outreach activities.
          </p>
        </div>

        {/* ── Empty state ─────────────────────────────────────────── */}
        <div
          className={`transition-all duration-900 delay-150 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top rule */}
          <div className="h-px bg-[#f0ede8] mb-16" />

          <div className="flex flex-col items-center text-center py-16 sm:py-20 space-y-8 max-w-lg mx-auto">

            {/* Icon */}
            <div
              className={`transition-all duration-700 delay-300 ease-out ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div
                className="w-20 h-20 rounded-sm flex items-center justify-center"
                style={{ background: "#f5f2ed" }}
              >
                <CalendarX
                  className="w-9 h-9"
                  style={{ color: "#c8c4bc" }}
                  aria-hidden="true"
                  strokeWidth={1.25}
                />
              </div>
            </div>

            {/* Message */}
            <div
              className={`space-y-3 transition-all duration-700 delay-400 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#11161e] tracking-tight">
                No upcoming events
              </h3>
              <p className="text-[14px] text-[#9aa0a8] leading-relaxed max-w-sm mx-auto">
                There are no upcoming events at the moment. Check back soon for
                new alumni activities and announcements.
              </p>
            </div>

            {/* Subtle accent rule */}
            <div
              className={`flex items-center gap-4 w-full max-w-xs transition-all duration-700 delay-500 ease-out ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex-1 h-px bg-[#f0ede8]" />
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#7a1c1c", opacity: 0.35 }}
              />
              <div className="flex-1 h-px bg-[#f0ede8]" />
            </div>
          </div>

          {/* Bottom rule */}
          <div className="h-px bg-[#f0ede8] mt-16" />
        </div>
      </div>
    </section>
  );
}
