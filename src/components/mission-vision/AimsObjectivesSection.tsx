"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

interface Objective {
  number: string;
  title: string;
  description: string;
}

const objectives: Objective[] = [
  {
    number: "01",
    title: "Lifelong Connection",
    description:
      "Maintain a lifelong connection between Assinman Nursing and Midwifery Training College and its graduates across all year groups.",
  },
  {
    number: "02",
    title: "Professional Development",
    description:
      "Support the professional development of members through networking, clinical knowledge sharing, and continuing education opportunities.",
  },
  {
    number: "03",
    title: "Institutional Growth",
    description:
      "Contribute to the growth of the alma mater through donations, mentorship, advocacy, and infrastructure support initiatives.",
  },
  {
    number: "04",
    title: "Student Mentorship",
    description:
      "Provide mentorship, career guidance, and financial support to current students of Assinman NMTC to help them excel academically and professionally.",
  },
  {
    number: "05",
    title: "Healthcare Advocacy",
    description:
      "Advocate for improved healthcare policies, better working conditions, and the recognition of nursing and midwifery professionals across Ghana.",
  },
  {
    number: "06",
    title: "Alumni Networking",
    description:
      "Create and sustain a robust alumni database and communication platform to keep all graduates informed, connected, and engaged.",
  },
  {
    number: "07",
    title: "Community Outreach",
    description:
      "Organise community health outreach programs that leverage the skills of our members to provide free or subsidised healthcare services to underserved communities.",
  },
  {
    number: "08",
    title: "Recognition & Awards",
    description:
      "Celebrate and recognise outstanding alumni who have made exceptional contributions to the nursing and midwifery profession and the wider community.",
  },
];

export function AimsObjectivesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      id="aims-objectives"
      aria-labelledby="objectives-heading"
      className="relative overflow-hidden bg-[#f5f1e8] py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#1b4d2e]/15 mb-10 sm:mb-14">
          
          {/* Left: Eyebrow & Heading */}
          <div className="max-w-2xl">
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1b4d2e]">
                Our Purpose
              </span>
            </div>

            <h2
              id="objectives-heading"
              className={`font-editorial tracking-[-0.02em] font-normal leading-[1.08] text-[#11161e] transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Aims &amp; <span className="italic text-[#1b4d2e]">Objectives</span>
            </h2>
          </div>

          {/* Right: Explanatory Copy & Constitution Stamp */}
          <div className="lg:max-w-md flex flex-col justify-end">
            <p
              className={`text-[15.5px] sm:text-[17px] leading-relaxed text-[#556271] font-light mb-6 transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The Assinman Alumni Network is established to achieve the following aims
              and objectives for the benefit of its members, the alma mater, and the wider
              healthcare community.
            </p>

            {/* Institutional Framework Stamp */}
            <div
              className={`border-t border-[#1b4d2e]/15 pt-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#7a8793] transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span>Constitution Art. II</span>
              <span className="font-semibold text-[#1b4d2e]">8 Formal Mandates</span>
            </div>
          </div>

        </div>

        {/* 2-Column Balanced Grid: 4 on each side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
          {objectives.map((obj, i) => (
            <div
              key={obj.number}
              className={`group border-b border-[#1b4d2e]/12 pb-6 sm:pb-8 transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${120 + i * 50}ms`,
              }}
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-2.5">
                <span className="font-editorial text-[1.4rem] sm:text-[1.65rem] font-light text-[#1b4d2e]/60 group-hover:text-[#1b4d2e] transition-colors shrink-0">
                  {obj.number}
                </span>
                <h3 className="font-editorial text-[1.25rem] sm:text-[1.45rem] font-normal text-[#11161e] tracking-tight group-hover:text-[#1b4d2e] transition-colors">
                  {obj.title}
                </h3>
              </div>
              
              <p className="pl-8 sm:pl-10 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#505d6c] font-light">
                {obj.description}
              </p>
            </div>
          ))}
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
