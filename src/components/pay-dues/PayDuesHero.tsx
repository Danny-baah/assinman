"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowDown, HeartHandshake, ShieldCheck } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function PayDuesHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  const scrollToTiers = () => {
    const el = document.getElementById("choose-tier");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Information (7 cols) */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-4 sm:mb-5 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
                Membership Dues
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e]/30" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase text-[#738290]">
                Membership, Made Meaningful
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`font-editorial tracking-[-0.03em] leading-[0.98] font-normal text-[#11161e] mb-6 sm:mb-7 transition-all duration-800 delay-100 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
              }}
            >
              Your Membership
              <br />
              <span className="italic font-light text-[#1b4d2e]">Makes a Difference.</span>
            </h1>

            {/* Supporting Copy */}
            <div
              className={`space-y-3 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] font-light text-[#465362] max-w-xl mb-8 sm:mb-10 transition-all duration-700 delay-200 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                Your dues keep the Assinman Alumni Network active, funded, and growing.
              </p>
              <p className="text-sm sm:text-base text-[#5c6975]">
                Choose your membership option and take the next step in supporting the network.
              </p>
            </div>

            {/* Primary Action Button */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-300 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                type="button"
                onClick={scrollToTiers}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white bg-[#1b4d2e] hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]"
              >
                <span>Pay Your Dues</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#5c6975] px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-[#1b4d2e]" />
                <span>Verified Direct MoMo &amp; Receipt Confirmation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Image Composition (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"
            }`}
          >
            <div className="relative">
              {/* Outer border decoration */}
              <div
                className="absolute -inset-3 sm:-inset-4 border border-[#1b4d2e]/15 rounded-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-[#11161e]/5">
                <Image
                  src="/assets/why-join-hero.jpg"
                  alt="Assinman Alumni Network members united in professional fellowship"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,22,30,0.55) 0%, transparent 45%)",
                  }}
                  aria-hidden="true"
                />

                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-lg border border-white/50 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-[#1b4d2e]" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b4d2e] block">
                        Direct Impact
                      </span>
                      <p className="text-xs font-medium text-[#242f3d]">
                        Welfare · Scholarships · Reunions · Alma Mater
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
