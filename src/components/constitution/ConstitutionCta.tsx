"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function ConstitutionCta() {
  const ctaRef = useRef<HTMLElement>(null);
  const inView = useInView(ctaRef, { threshold: 0.12 });

  return (
    <section
      ref={ctaRef}
      id="constitution-cta"
      aria-labelledby="const-cta-heading"
      className="relative overflow-hidden bg-[#f8f5ee] py-12 sm:py-16 lg:py-18 border-t border-[#1b4d2e]/15"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
            The Next Step
          </span>
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="const-cta-heading"
          className={`font-editorial tracking-[-0.02em] font-normal leading-[1.06] text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(2.15rem, 4.5vw, 3.5rem)",
          }}
        >
          Ready to Be Part of AAN?
        </h2>

        {/* Supporting Copy */}
        <p
          className={`text-[15px] sm:text-[17px] leading-relaxed text-[#505c6b] font-light max-w-xl mx-auto mb-9 transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Having read our constitution, you now know what guides the Network. Join a
          community built around transparency, excellence, service, and shared purpose.
        </p>

        {/* Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Register Button */}
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm text-[12px] sm:text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white bg-[#1b4d2e] hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e] w-full sm:w-auto"
          >
            <span>Register Now</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Pay Dues Button */}
          <Link
            href="/pay-dues"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm text-[12px] sm:text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#11161e] border border-[#11161e]/25 hover:bg-[#11161e] hover:text-[#f8f5ee] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11161e] w-full sm:w-auto"
          >
            <CreditCard className="w-4 h-4" aria-hidden="true" />
            <span>Pay Dues</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
