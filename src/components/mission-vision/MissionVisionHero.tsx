"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/components/home/useInView";

export function MissionVisionHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-10 lg:pt-14 pb-14 sm:pb-18 lg:pb-24"
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
        
        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Display Headline & Eyebrow (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Clean Editorial Eyebrow with No Divider Lines */}
            <div
              className={`mb-3 sm:mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
                About the Association
              </span>
            </div>

            {/* Dominant Headline */}
            <h1
              className={`font-editorial tracking-[-0.03em] leading-[0.98] font-normal text-[#11161e] mb-6 sm:mb-8 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontSize: "clamp(3.25rem, 7.5vw, 6.5rem)",
              }}
            >
              Mission
              <br />
              <span className="italic font-light text-[#1b4d2e]">&amp; Vision</span>
            </h1>

            {/* Supporting Copy */}
            <p
              className={`text-[17px] sm:text-[20px] lg:text-[21px] leading-[1.65] font-light text-[#465362] max-w-xl transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The values, purpose, and aspirations that guide the Assinman Alumni
              Network forward in service to healthcare and education across Ghana.
            </p>
          </div>

          {/* Integrated Editorial Archival Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              className={`relative overflow-hidden rounded-xs border transition-all duration-1000 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                aspectRatio: "16 / 11",
                borderColor: "rgba(27, 77, 46, 0.16)",
                boxShadow: "0 16px 40px -12px rgba(17, 22, 30, 0.1)",
              }}
            >
              <Image
                src="/assets/about-nurses.jpg"
                alt="Assinman nursing professionals in clinical practice"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale-[15%] contrast-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,45,28,0.4) 0%, transparent 45%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] tracking-[0.16em] uppercase">
                <span className="font-medium">Excellence in Care</span>
                <span className="text-white/70">Est. Assinman</span>
              </div>
            </div>
            
            <div className="mt-3.5 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#7a8793]">
              <span>Institutional Record · Document 01</span>
              <span className="font-mono">AAN / 2025</span>
            </div>
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
