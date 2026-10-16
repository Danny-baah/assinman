"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface Executive {
  number: string;
  name: string;
  role: string;
  badge: string;
  description: string;
  image: string;
  imagePosition?: string;
  featured?: boolean;
  duties?: string[];
}

const executives: Executive[] = [
  {
    number: "01",
    name: "Joshua Kpordedzi",
    role: "President",
    badge: "Interim President",
    description:
      "Provides strategic interim leadership, steers the association's governance and constitutional alignment, and coordinates institutional engagement to unite alumni across all generations.",
    image: "/executives/joshua-kpordedzi.jpg",
    imagePosition: "object-[48%_15%]",
    featured: true,
    duties: ["Executive Governance", "Institutional Representation", "Strategic Direction"],
  },
  {
    number: "02",
    name: "Stella Korliky",
    role: "Electoral Commissioner",
    badge: "Interim Electoral Commissioner",
    description:
      "Oversees electoral administration, constitutional vetting frameworks, and transparent transition guidelines to guarantee fair, democratic representation across the network.",
    image: "/executives/stella-korliky.jpg",
    imagePosition: "object-[center_20%]",
    duties: ["Electoral Frameworks", "Vetting & Compliance", "Democratic Transition"],
  },
  {
    number: "03",
    name: "Asibey Felix",
    role: "Auditor",
    badge: "Interim Auditor",
    description:
      "Supervises financial auditing, accounting verification, asset registers, and fiduciary compliance to maintain rigorous fiscal transparency and accountability.",
    image: "/executives/asibey-felix.jpg",
    imagePosition: "object-[center_15%]",
    duties: ["Fiscal Auditing", "Internal Controls", "Financial Transparency"],
  },
  {
    number: "04",
    name: "Charity Egyir",
    role: "Secretary",
    badge: "Interim Secretary",
    description:
      "Coordinates secretariat administration, minutes of proceedings, official correspondence, statutory documentation, and inter-member communication flows.",
    image: "/executives/charity-egyir.png",
    imagePosition: "object-[center_18%]",
    duties: ["Secretariat Operations", "Official Correspondence", "Records & Archives"],
  },
  {
    number: "05",
    name: "Emmanuel Obeng Asumaning",
    role: "Welfare Officer",
    badge: "Interim Welfare Officer",
    description:
      "Champions alumni welfare programs, member relief and benevolent support, celebratory recognitions, and community solidarity initiatives.",
    image: "/executives/emmanuel-obeng-asumaning.jpg",
    imagePosition: "object-[center_15%]",
    duties: ["Member Welfare", "Benevolent Outreach", "Alumni Solidarity"],
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
      className="relative overflow-hidden bg-[#fbf9f4] py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
              Our Interim Leadership
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-xs text-[9.5px] font-semibold uppercase tracking-wider bg-[#1b4d2e]/10 text-[#1b4d2e]">
              Interim
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
            Interim Executive Committee
          </h2>

          <p
            className={`text-[16px] sm:text-[17.5px] leading-relaxed text-[#556271] font-light max-w-2xl transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A committed interim team working together to coordinate network affairs,
            strengthen alumni connections, uphold constitutional integrity, and advance the shared vision of the association.
          </p>
        </div>

        {/* Editorial Directory Grid: 1 Featured President + 4 Officers in 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1b4d2e]/12 border border-[#1b4d2e]/12">
          {executives.map((exec, idx) => (
            <div
              key={exec.number}
              className={`group relative bg-[#f8f5ee] p-8 sm:p-10 lg:p-12 transition-all duration-300 ease-out hover:bg-[#ffffff] ${
                exec.featured ? "md:col-span-2" : ""
              } ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${150 + idx * 80}ms`,
              }}
            >
              {/* Member Numeral & Corner Micro-Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1b4d2e]/10">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-[1.4rem] sm:text-[1.6rem] font-light text-[#8a96a3] group-hover:text-[#1b4d2e] transition-colors duration-300">
                    {exec.number}
                  </span>
                  {exec.featured && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-xs text-[9px] font-bold uppercase tracking-wider bg-[#1b4d2e] text-white">
                      Featured Officer
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b4d2e]/70">
                    Interim
                  </span>
                  <span className="text-[#1b4d2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Portrait Avatar & Text Details Composition */}
              <div className={`flex flex-col ${exec.featured ? "md:flex-row items-start gap-8 lg:gap-10" : "sm:flex-row items-start gap-6 sm:gap-8"}`}>
                
                {/* Refined Portrait Frame */}
                <div
                  className={`relative shrink-0 overflow-hidden rounded-xs border transition-all duration-500 ease-out group-hover:scale-[1.02] ${
                    exec.featured ? "w-36 sm:w-44 lg:w-48 aspect-[3/4] sm:aspect-[4/5]" : "w-28 sm:w-32 lg:w-36 aspect-[4/5]"
                  }`}
                  style={{
                    borderColor: "rgba(27, 77, 46, 0.16)",
                    boxShadow: "0 6px 20px -6px rgba(17, 22, 30, 0.08)",
                  }}
                >
                  <Image
                    src={exec.image}
                    alt={`${exec.name} — ${exec.role}`}
                    fill
                    sizes={exec.featured ? "(max-width: 640px) 144px, 192px" : "(max-width: 640px) 112px, 144px"}
                    className={`object-cover ${exec.imagePosition || "object-center"} grayscale-[12%] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105`}
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
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-xs bg-[#1b4d2e]/10 text-[#1b4d2e] border border-[#1b4d2e]/15">
                        {exec.badge}
                      </span>
                    </div>
                    <h3 className={`font-editorial font-normal text-[#11161e] leading-snug group-hover:text-[#1b4d2e] transition-colors duration-300 ${
                      exec.featured ? "text-2xl sm:text-[2rem] lg:text-[2.2rem]" : "text-2xl sm:text-[1.75rem]"
                    }`}>
                      {exec.name}
                    </h3>
                    <span className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1b4d2e]/80 mt-0.5">
                      {exec.role}
                    </span>
                  </div>

                  <p className={`leading-relaxed text-[#556372] font-light pt-1 ${
                    exec.featured ? "text-[15px] sm:text-[16.5px] max-w-2xl" : "text-[14.5px] sm:text-[15.5px]"
                  }`}>
                    {exec.description}
                  </p>

                  {exec.duties && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exec.duties.map((duty) => (
                        <span
                          key={duty}
                          className="text-[10px] sm:text-[10.5px] font-medium tracking-wide uppercase px-2.5 py-1 bg-white border border-[#1b4d2e]/12 text-[#2c3d31] rounded-xs"
                        >
                          {duty}
                        </span>
                      ))}
                    </div>
                  )}
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
