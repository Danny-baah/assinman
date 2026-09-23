"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, UserCheck, CreditCard, Sparkles } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const STEPS = [
  {
    num: "01",
    label: "Step 01",
    title: "Fill the Form",
    desc: "Complete the online registration form with your personal, academic, and professional details.",
    icon: FileCheck,
  },
  {
    num: "02",
    label: "Step 02",
    title: "Await Review",
    desc: "The executive team reviews your application and verifies your alumni status.",
    icon: UserCheck,
  },
  {
    num: "03",
    label: "Step 03",
    title: "Pay Your Dues",
    desc: "Complete your membership by paying your annual dues of GH₵100 or lifetime dues of GH₵500.",
    icon: CreditCard,
  },
  {
    num: "04",
    label: "Step 04",
    title: "Welcome Aboard!",
    desc: "You are officially a member of the Assinman Alumni Network. Welcome to the family!",
    icon: Sparkles,
  },
];

export function WhyJoinSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-[#f8f5ee] py-16 sm:py-24 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Getting Started
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.75rem)",
            }}
          >
            From Graduate
            <br />
            <span className="italic font-light text-[#1b4d2e]">to Member</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Joining is simple and takes less than 5 minutes.
          </p>
        </div>

        {/* ── Connected Editorial Timeline Grid ──────────────────────── */}
        <div className="relative">
          {/* Horizontal Connecting Track Line (Desktop Only) */}
          <div
            className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-px bg-[#1b4d2e]/20"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {/* Step Marker */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-12 h-12 rounded-full bg-[#1b4d2e] text-[#f8f5ee] flex items-center justify-center font-editorial text-lg font-medium shadow-sm ring-4 ring-[#f8f5ee] shrink-0">
                      {step.num}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1b4d2e]">
                      {step.label}
                    </span>
                  </div>

                  {/* Step Content Box */}
                  <div className="p-6 rounded-xl bg-white/75 border border-[#1b4d2e]/15 shadow-xs flex-1 flex flex-col justify-between hover:bg-white transition-colors duration-200">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#11161e] font-normal tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#465362] leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>

                    {idx === 0 && (
                      <div className="mt-5 pt-4 border-t border-[#1b4d2e]/10">
                        <Link
                          href="/register"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1b4d2e] hover:text-[#112d1c] transition-colors"
                        >
                          <span>Start Form</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
