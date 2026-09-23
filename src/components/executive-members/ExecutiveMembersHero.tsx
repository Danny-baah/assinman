"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

export function ExecutiveMembersHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20"
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
            className={`mb-3 sm:mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Leadership
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
            Executive
            <br />
            <span className="italic font-light text-[#1b4d2e]">Members</span>
          </h1>

          {/* Supporting Copy */}
          <p
            className={`text-[17px] sm:text-[20px] lg:text-[21px] leading-[1.65] font-light text-[#465362] max-w-2xl transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Meet the dedicated leaders guiding the Assinman Alumni Network and helping
            shape a stronger community of alumni united by purpose, service, and excellence.
          </p>

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
