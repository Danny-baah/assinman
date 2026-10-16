"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

export function ExecutiveMembersHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-14"
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
          
          {/* Clean Editorial Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-3 sm:mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Leadership & Governance
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1b4d2e]/10 text-[#1b4d2e] border border-[#1b4d2e]/20">
              Interim Administration
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-editorial tracking-[-0.03em] leading-[0.98] font-normal text-[#11161e] mb-6 sm:mb-8 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(3rem, 7vw, 5.75rem)",
            }}
          >
            Interim Executive
            <br />
            <span className="italic font-light text-[#1b4d2e]">Committee</span>
          </h1>

          {/* Supporting Copy */}
          <p
            className={`text-[17px] sm:text-[20px] lg:text-[21px] leading-[1.65] font-light text-[#465362] max-w-2xl transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Meet the dedicated interim leaders entrusted with guiding the Assinman Alumni Network through this foundational period, ensuring constitutional integrity, service, and unified alumni progress.
          </p>

          {/* Interim Notice Badge */}
          <div
            className={`mt-6 inline-flex items-start sm:items-center gap-3 px-4 py-2.5 rounded-sm bg-[#1b4d2e]/5 border border-[#1b4d2e]/15 text-[#1b4d2e] text-[13px] sm:text-[13.5px] transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e] shrink-0 mt-1 sm:mt-0" />
            <span className="text-[#3b4b3f]">
              <strong className="font-semibold text-[#1b4d2e]">Interim Mandate:</strong> Appointed to coordinate network operations, constitutional processes, and membership mobilization.
            </span>
          </div>

        </div>
      </div>

      {/* Subtle bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.15) 25%, rgba(27,77,46,0.15) 75%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
