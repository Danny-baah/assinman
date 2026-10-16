"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";
import { History, Bookmark } from "lucide-react";

export function PastEventsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-14 border-b border-[#1b4d2e]/10"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(27,77,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,77,46,0.04) 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="max-w-3xl">
          {/* Eyebrow & Archival Metadata */}
          <div
            className={`flex items-center gap-3 mb-3.5 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Event Archive
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e]/30" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase text-[#738290]">
              The Archive Begins Here
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-editorial tracking-[-0.03em] leading-[0.98] font-normal text-[#11161e] mb-5 sm:mb-6 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
            }}
          >
            Past
            <br />
            <span className="italic font-light text-[#1b4d2e]">Events</span>
          </h1>

          {/* Supporting Copy */}
          <p
            className={`text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] font-light text-[#465362] max-w-2xl transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A growing record of the gatherings, milestones, and shared moments
            that shape the Assinman alumni community.
          </p>
        </div>
      </div>
    </section>
  );
}
