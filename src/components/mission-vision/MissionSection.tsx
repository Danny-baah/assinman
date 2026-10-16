"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden bg-[#fbf9f4] py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Index & Context Label (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch">
            <div>
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
                  Our Mission
                </span>
              </div>

              {/* Oversized Number Marker */}
              <div
                className={`font-editorial font-light text-[5.5rem] sm:text-[7.5rem] lg:text-[9rem] leading-none text-[#1b4d2e]/15 select-none transition-all duration-1000 ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                aria-hidden="true"
              >
                01
              </div>
            </div>

            {/* Institutional Footnote */}
            <div className="hidden lg:block pt-12 border-t border-[#1b4d2e]/10 text-[11px] tracking-[0.2em] uppercase text-[#778390]">
              Mandate 01 · Unity &amp; Growth
            </div>
          </div>

          {/* Right Column: Statement & Narrative Typography (8 cols) */}
          <div className="lg:col-span-8">
            
            {/* Heading */}
            <h2
              id="mission-heading"
              className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] mb-10 sm:mb-14 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              }}
            >
              To Connect, Empower
              <br />
              <span className="italic text-[#1b4d2e]">&amp; Serve</span>
            </h2>

            {/* Quotation / Highlighted Callout Statement */}
            <div
              className={`relative border-l-2 pl-6 sm:pl-10 mb-8 transition-all duration-800 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ borderColor: "#1b4d2e" }}
            >
              <p
                className="text-[20px] sm:text-[25px] lg:text-[28px] font-editorial font-normal leading-[1.48] text-[#1b2a21]"
              >
                &ldquo;To unite all graduates of Assinman Nursing and Midwifery
                Training College into a strong, active alumni network that
                fosters lifelong professional connections, supports the growth of
                our alma mater, and promotes excellence in healthcare delivery
                across Ghana and beyond.&rdquo;
              </p>
            </div>

            {/* Narrative Context Details */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#1b4d2e]/10 text-[13.5px] leading-relaxed text-[#5a6775] transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <span className="block font-semibold uppercase tracking-[0.14em] text-[11px] text-[#1b4d2e] mb-1">
                  Lifelong Fellowship
                </span>
                Connecting every graduating cohort across all regions.
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-[0.14em] text-[11px] text-[#1b4d2e] mb-1">
                  Alma Mater Support
                </span>
                Directly investing in academic, clinical, and infrastructural growth.
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-[0.14em] text-[11px] text-[#1b4d2e] mb-1">
                  National Impact
                </span>
                Upholding the standard of nursing and midwifery across Ghana.
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Subtle bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.1) 25%, rgba(27,77,46,0.1) 75%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
