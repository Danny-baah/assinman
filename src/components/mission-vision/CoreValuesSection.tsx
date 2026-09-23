"use client";

import React, { useRef, useState } from "react";
import { useInView } from "@/components/home/useInView";

interface ValueItem {
  number: string;
  name: string;
  description: string;
  pillar: string;
}

const values: ValueItem[] = [
  {
    number: "01",
    name: "Integrity",
    description:
      "We uphold honesty and ethical conduct in all our professional and personal dealings, safeguarding the sanctity of patient trust.",
    pillar: "Ethical Foundation",
  },
  {
    number: "02",
    name: "Excellence",
    description:
      "We pursue the highest standards in healthcare practice, professional growth, and community service without compromise.",
    pillar: "Clinical Mastery",
  },
  {
    number: "03",
    name: "Unity",
    description:
      "We stand together as one family, bound by shared experiences, mutual respect, and a common purpose across generations.",
    pillar: "Collective Strength",
  },
  {
    number: "04",
    name: "Service",
    description:
      "We are committed to giving back to our institution, our profession, and our communities through selflessness and dedication.",
    pillar: "Public Impact",
  },
  {
    number: "05",
    name: "Hard Work",
    description:
      "We believe in diligence, dedication, and continuous effort as the true foundations of enduring professional success.",
    pillar: "Professional Discipline",
  },
  {
    number: "06",
    name: "Humility",
    description:
      "We serve with a humble heart, valuing every member, patient, and contribution to our collective institutional mission.",
    pillar: "Compassionate Care",
  },
];

export function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="core-values"
      aria-labelledby="values-heading"
      className="relative overflow-hidden bg-[#f8f5ee] py-24 sm:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
              What We Stand For
            </span>
          </div>

          <h2
            id="values-heading"
            className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] mb-6 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)",
            }}
          >
            Our Core Values
          </h2>

          <p
            className={`text-[16.5px] sm:text-[18.5px] leading-relaxed text-[#556271] font-light transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            These are the principles inherited from our alma mater that continue to guide
            every member of the Assinman Alumni Network in practice, leadership, and public life.
          </p>
        </div>

        {/* 01–06 Vertical Editorial Row Index System */}
        <div
          className={`border-t border-[#1b4d2e]/15 transition-all duration-900 delay-300 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((val, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={val.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-[#1b4d2e]/12 py-8 sm:py-10 lg:py-12 transition-all duration-300 ease-out cursor-default"
                style={{
                  backgroundColor: isHovered ? "rgba(27,77,46,0.03)" : "transparent",
                }}
              >
                {/* Active Accent Left Border Indicator on Hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#1b4d2e] transition-transform duration-300 ease-out origin-top"
                  style={{
                    transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pl-2 sm:pl-4">
                  
                  {/* Number & Pillar (3 cols) */}
                  <div className="md:col-span-3 flex md:flex-col justify-between items-start gap-2">
                    <span
                      className="font-editorial text-[2rem] sm:text-[2.5rem] leading-none transition-colors duration-300"
                      style={{
                        color: isHovered ? "#1b4d2e" : "#83909e",
                      }}
                    >
                      {val.number}
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#73808f]">
                      {val.pillar}
                    </span>
                  </div>

                  {/* Value Name (3 cols) */}
                  <div className="md:col-span-3">
                    <h3
                      className="font-editorial text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-normal leading-snug transition-transform duration-300"
                      style={{
                        color: isHovered ? "#1b4d2e" : "#11161e",
                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      {val.name}
                    </h3>
                  </div>

                  {/* Description (6 cols) */}
                  <div className="md:col-span-6">
                    <p className="text-[15.5px] sm:text-[17px] leading-relaxed text-[#4e5b6a] font-light max-w-xl">
                      {val.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
