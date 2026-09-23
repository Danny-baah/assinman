"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";
import { ShieldCheck } from "lucide-react";

export function RegisterHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10"
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

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative text-center">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 mb-3.5 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
          <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
            Membership
          </span>
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          className={`font-editorial tracking-[-0.03em] leading-[1.02] font-normal text-[#11161e] mb-4 sm:mb-5 transition-all duration-800 delay-100 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
          }}
        >
          Join the Alumni Network
        </h1>

        {/* Supporting Copy */}
        <p
          className={`text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed font-light text-[#465362] max-w-xl mx-auto mb-6 transition-all duration-700 delay-200 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Complete the registration form to become an official member of the Assinman
          Alumni Network. <span className="font-normal text-[#1b4d2e]">Your journey begins here.</span>
        </p>

        {/* Trust & Confidentiality Notice */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#1b4d2e]/15 text-xs text-[#5c6975] shadow-xs transition-all duration-700 delay-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#1b4d2e] shrink-0" />
          <span>
            Fields marked with <span className="text-[#a83232] font-semibold">*</span> are required. Your data is kept strictly confidential.
          </span>
        </div>
      </div>
    </section>
  );
}
