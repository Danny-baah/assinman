"use client";

import React, { useRef } from "react";
import { Sparkles, Calendar, GraduationCap, ShieldCheck, Building2 } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const IMPACT_AREAS = [
  {
    num: "01",
    title: "Events & Reunions",
    desc: "Funds annual reunions, AGMs, and networking events that bring alumni together across all year groups and regions.",
    icon: Calendar,
  },
  {
    num: "02",
    title: "Student Support",
    desc: "Contributes directly to student scholarships, academic prizes, and clinical mentorship programmes for current Assinman NMTC trainees.",
    icon: GraduationCap,
  },
  {
    num: "03",
    title: "Member Welfare",
    desc: "Supports fellow alumni in times of critical medical need, emergency situations, or bereavement through the association's structured welfare policy.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Alma Mater Projects",
    desc: "Finances equipment, health infrastructure development, and educational learning resources for Assinman Nursing and Midwifery Training College.",
    icon: Building2,
  },
];

export function WhatDuesSupport() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Why It Matters
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.85rem)",
            }}
          >
            What Your Dues
            <br />
            <span className="italic font-light text-[#1b4d2e]">Fund</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every contribution helps strengthen the community, support our members,
            and invest in the future of Assinman.
          </p>
        </div>

        {/* ── 4 Impact Rows Sequence ──────────────────────────────── */}
        <div className="space-y-4 sm:space-y-6">
          {IMPACT_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-xl bg-white/70 border border-[#1b4d2e]/15 hover:border-[#1b4d2e]/35 hover:bg-white transition-all duration-300 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  <span className="font-editorial text-3xl sm:text-4xl text-[#1b4d2e] font-light tracking-tight shrink-0 group-hover:scale-105 transition-transform">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#11161e] font-normal tracking-tight mb-1 group-hover:text-[#1b4d2e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#465362] leading-relaxed max-w-2xl font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b4d2e]/70 group-hover:text-[#1b4d2e] transition-colors shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Institutional Impact</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
