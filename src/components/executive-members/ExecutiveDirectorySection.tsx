"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface Executive {
  number: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const executives: Executive[] = [
  {
    number: "01",
    name: "Kwame Asante",
    role: "President",
    description:
      "Provides overall leadership for the association and helps guide its direction, priorities, and collective vision.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    name: "Ama Boateng",
    role: "Vice President",
    description:
      "Supports the President in advancing the association's programmes while helping strengthen engagement across the alumni community.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    name: "Efua Owusu",
    role: "Secretary",
    description:
      "Coordinates the association's records, communications, meetings, and administrative activities.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    name: "Kofi Darko",
    role: "Treasurer",
    description:
      "Supports responsible financial administration and helps maintain transparency across the association's financial activities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

export function ExecutiveDirectorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      id="executive-leadership"
      aria-labelledby="executives-heading"
      className="relative overflow-hidden bg-[#fbf9f4] py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
              Our Leadership
            </span>
          </div>

          <h2
            id="executives-heading"
            className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 4.8vw, 3.75rem)",
            }}
          >
            Executive Committee
          </h2>

          <p
            className={`text-[16px] sm:text-[17.5px] leading-relaxed text-[#556271] font-light max-w-2xl transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A committed team working together to guide the network, strengthen
            alumni connections, and advance the shared vision of the association.
          </p>
        </div>

        {/* Editorial 2-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1b4d2e]/12 border border-[#1b4d2e]/12">
          {executives.map((exec, idx) => (
            <div
              key={exec.number}
              className={`group relative bg-[#f8f5ee] p-8 sm:p-10 lg:p-12 transition-all duration-300 ease-out hover:bg-[#ffffff] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${150 + idx * 80}ms`,
              }}
            >
              {/* Member Numeral & Corner Micro-Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1b4d2e]/10">
                <span className="font-editorial text-[1.4rem] sm:text-[1.6rem] font-light text-[#8a96a3] group-hover:text-[#1b4d2e] transition-colors duration-300">
                  {exec.number}
                </span>
                <span className="text-[#1b4d2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              {/* Portrait Avatar & Text Details Composition */}
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                
                {/* Refined Portrait Frame */}
                <div
                  className="relative w-28 sm:w-32 lg:w-36 shrink-0 overflow-hidden rounded-xs border transition-all duration-500 ease-out group-hover:scale-[1.02]"
                  style={{
                    aspectRatio: "4 / 5",
                    borderColor: "rgba(27, 77, 46, 0.16)",
                    boxShadow: "0 6px 20px -6px rgba(17, 22, 30, 0.08)",
                  }}
                >
                  <Image
                    src={exec.image}
                    alt={`${exec.name} — ${exec.role}`}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover object-center grayscale-[12%] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(27,77,46,0.3) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Identity & Short Description */}
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-[1.75rem] font-normal text-[#11161e] leading-snug group-hover:text-[#1b4d2e] transition-colors duration-300">
                      {exec.name}
                    </h3>
                    <span className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1b4d2e] mt-1">
                      {exec.role}
                    </span>
                  </div>

                  <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#556372] font-light pt-2">
                    {exec.description}
                  </p>
                </div>

              </div>

              {/* Bottom Subtle Accent Bar on Hover */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px bg-[#1b4d2e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Subtle bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.12) 25%, rgba(27,77,46,0.12) 75%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
