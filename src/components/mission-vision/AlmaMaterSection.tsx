"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function AlmaMaterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="alma-mater"
      aria-labelledby="alma-mater-heading"
      className="relative overflow-hidden bg-[#fbf9f4] py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heritage Framing & Institution Mission/Vision (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
                Our Alma Mater
              </span>
            </div>

            {/* Heading */}
            <h2
              id="alma-mater-heading"
              className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] mb-8 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "clamp(2.35rem, 4.8vw, 4rem)",
              }}
            >
              Rooted in the Values of
              <br />
              <span className="italic text-[#1b4d2e]">Assinman NMTC</span>
            </h2>

            {/* Supporting Copy */}
            <div
              className={`space-y-4 text-[16px] sm:text-[17.5px] leading-relaxed text-[#4f5d6c] font-light max-w-2xl mb-10 transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                The Assinman Alumni Network was founded on the same values and mission
                that have guided Assinman Nursing and Midwifery Training College for decades.
              </p>
              <p>
                As graduates, we carry forward the institution&apos;s commitment to training
                highly skilled, competent, and practically oriented health professionals who
                provide quality healthcare to the nation.
              </p>
            </div>

            {/* School Mission & Vision Cards */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#1b4d2e]/12 mb-10 transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="border-l-2 border-[#1b4d2e] pl-5">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1b4d2e] mb-2">
                  College Mission
                </span>
                <p className="text-[14px] leading-relaxed text-[#556372] italic">
                  &ldquo;To train highly skilful, competent, and practically oriented health professionals.&rdquo;
                </p>
              </div>

              <div className="border-l-2 border-[#c59b4b] pl-5">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#936f2e] mb-2">
                  College Vision
                </span>
                <p className="text-[14px] leading-relaxed text-[#556372] italic">
                  &ldquo;To become the centre of excellence for training health professionals.&rdquo;
                </p>
              </div>
            </div>

            {/* Visit Portal Button */}
            <div
              className={`transition-all duration-700 delay-400 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://nmtcassinman.edu.gh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-sm text-[12.5px] font-medium tracking-[0.12em] uppercase text-white transition-colors duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]"
                style={{ backgroundColor: "#1b4d2e" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#112d1c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1b4d2e";
                }}
              >
                <span>Visit Assinman NMTC</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

          </div>

          {/* Right Column: College Seal & Institutional Insignia (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div
              className={`relative w-full max-w-sm p-8 sm:p-10 rounded-xs border text-center transition-all duration-1000 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                backgroundColor: "#f8f5ee",
                borderColor: "rgba(27, 77, 46, 0.16)",
                boxShadow: "0 16px 40px -12px rgba(17, 22, 30, 0.08)",
              }}
            >
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-[#1b4d2e]/20 p-1">
                <Image
                  src="/assets/download.jpeg"
                  alt="Assinman NMTC Crest"
                  fill
                  sizes="96px"
                  className="object-cover rounded-full"
                />
              </div>

              <span className="block text-[11px] font-semibold tracking-[0.24em] uppercase text-[#717e8c] mb-2">
                Mother Institution
              </span>
              <h3 className="font-editorial text-[1.45rem] font-normal text-[#11161e] mb-3 leading-snug">
                Assinman Nursing &amp; Midwifery Training College
              </h3>
              <p className="text-[13px] leading-relaxed text-[#5c6877] font-light">
                Assinman, Central Region, Ghana
              </p>

              <div className="mt-6 pt-6 border-t border-[#1b4d2e]/10 flex items-center justify-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1b4d2e] font-medium">
                <span>Where Legacy Begins</span>
                <span>✦</span>
                <span>Est. Decades</span>
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
