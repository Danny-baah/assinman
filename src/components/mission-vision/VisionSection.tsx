"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/components/home/useInView";

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="vision"
      aria-labelledby="vision-heading"
      className="relative overflow-hidden bg-[#f5f1e8] py-24 sm:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Inverted Grid Arrangement compared to Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Depth — Vertical Photographic Asset (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className={`relative overflow-hidden rounded-xs border transition-all duration-1000 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
              }`}
              style={{
                aspectRatio: "4 / 5",
                borderColor: "rgba(27, 77, 46, 0.16)",
                boxShadow: "0 20px 48px -16px rgba(17, 22, 30, 0.12)",
              }}
            >
              <Image
                src="/assets/cta-nurses.jpg"
                alt="Ghanaian nursing and healthcare leadership"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale-[10%] contrast-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,45,28,0.5) 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[#c59b4b] mb-1">
                  Visionary Leadership
                </span>
                <span className="font-editorial text-[18px] sm:text-[20px] font-normal leading-snug">
                  Elevating healthcare standards nationwide.
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#7c8894]">
              <span>Chapter 02</span>
              <span>National Benchmarks</span>
            </div>
          </div>

          {/* Right Column: Statement & Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Header with Eyebrow and Oversized Index Number */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`flex items-center gap-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
                  Our Vision
                </span>
              </div>

              <div
                className={`font-editorial font-light text-[4.5rem] sm:text-[6.5rem] leading-none text-[#1b4d2e]/15 select-none transition-all duration-1000 ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                aria-hidden="true"
              >
                02
              </div>
            </div>

            {/* Heading */}
            <h2
              id="vision-heading"
              className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] mb-10 sm:mb-12 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              }}
            >
              A Legacy of
              <br />
              <span className="italic text-[#1b4d2e]">Excellence in Healthcare</span>
            </h2>

            {/* Quotation / Callout Paragraph */}
            <div
              className={`relative border-l-2 pl-6 sm:pl-10 mb-8 transition-all duration-800 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ borderColor: "#1b4d2e" }}
            >
              <p className="text-[20px] sm:text-[24px] lg:text-[26px] font-editorial font-normal leading-[1.5] text-[#1b2a21]">
                &ldquo;To become the most impactful alumni network in the Ghanaian
                nursing and midwifery profession — a community recognized for its
                unwavering commitment to professional development, institutional
                support, and the elevation of healthcare standards nationwide.&rdquo;
              </p>
            </div>

            {/* Restrained Strategic Pillars */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#1b4d2e]/10 text-[13.5px] leading-relaxed text-[#5a6775] transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <span className="block font-semibold uppercase tracking-[0.14em] text-[11px] text-[#1b4d2e] mb-1">
                  Professional Distinction
                </span>
                Fostering clinical expertise, specialization, and lifelong academic inquiry among members.
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-[0.14em] text-[11px] text-[#1b4d2e] mb-1">
                  Institutional Renown
                </span>
                Positioning Assinman NMTC alumni as trusted leaders at district, regional, and national levels.
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
