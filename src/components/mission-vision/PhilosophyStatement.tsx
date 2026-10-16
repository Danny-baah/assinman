"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

export function PhilosophyStatement() {
  const statementRef = useRef<HTMLElement>(null);
  const inView = useInView(statementRef, { threshold: 0.15 });

  return (
    <section
      ref={statementRef}
      aria-label="Institutional Philosophy"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#112d1c",
      }}
    >
      {/* Delicate background texture/watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center font-editorial font-bold text-[18vw] text-white tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        ASSINMAN
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        
        {/* Top Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 mb-10 transition-all duration-700 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-[#c59b4b]/60" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#c59b4b]">
            Institutional Creed
          </span>
          <span className="w-8 h-px bg-[#c59b4b]/60" aria-hidden="true" />
        </div>

        {/* Large Statement Typography */}
        <div className="text-center max-w-4xl mx-auto">
          <p
            className={`font-editorial font-normal tracking-[-0.01em] leading-[1.2] text-[#f8f5ee] transition-all duration-900 delay-100 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.75rem)",
            }}
          >
            &ldquo;United in Excellence&nbsp;— we carry the values of Assinman NMTC into every ward, clinic, and community we serve.&rdquo;
          </p>

          <div
            className={`mt-10 sm:mt-12 flex items-center justify-center gap-4 text-[12px] tracking-[0.2em] uppercase text-[#f8f5ee]/50 transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>Assinman Alumni Network</span>
            <span className="text-[#c59b4b]">✦</span>
            <span>Est. 2025</span>
          </div>
        </div>

      </div>
    </section>
  );
}
