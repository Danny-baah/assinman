"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Sparkles, Camera, Award, Users } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function DocumentingJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] py-16 sm:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Atmospheric Editorial Image (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-[#11161e]/5 border border-[#1b4d2e]/15">
              <Image
                src="/assets/why-join-hero.jpg"
                alt="Atmospheric editorial portrait of Ghanaian healthcare alumni"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,22,30,0.45) 0%, transparent 50%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-white/50 text-[#11161e] shadow-xs flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1b4d2e]">
                  Atmospheric Chronicle
                </span>
                <span className="text-[11px] text-[#738290]">United in Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Values (7 cols) */}
          <div
            className={`lg:col-span-7 max-w-xl transition-all duration-700 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e]">
                Documenting the Journey
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-[#11161e] font-normal tracking-tight leading-tight mb-5">
              Every Gathering Becomes Part of the Story
            </h2>

            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light mb-8">
              From alumni reunions and professional gatherings to community initiatives,
              every shared experience contributes to the story of the Assinman alumni network.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/70 border border-[#1b4d2e]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                  Living Legacy
                </span>
                <p className="text-xs text-[#5c6975] leading-relaxed font-light">
                  Capturing achievements, awards, and milestones across year groups.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#1b4d2e]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                  Shared Bonds
                </span>
                <p className="text-xs text-[#5c6975] leading-relaxed font-light">
                  Preserving moments of fellowship and clinical knowledge exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
