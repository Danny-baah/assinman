"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CreditCard, Sparkles } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function WhyJoinCta() {
  const ctaRef = useRef<HTMLElement>(null);
  const inView = useInView(ctaRef, { threshold: 0.12 });

  return (
    <section
      ref={ctaRef}
      id="join-cta"
      aria-labelledby="why-join-cta-heading"
      className="relative overflow-hidden bg-[#112d1c] py-16 sm:py-20 lg:py-24 text-[#f8f5ee]"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,245,238,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,245,238,0.15) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-6 h-px bg-[#e2b960]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e2b960]">
            Ready to Join Us?
          </span>
          <span className="w-6 h-px bg-[#e2b960]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="why-join-cta-heading"
          className={`font-editorial tracking-[-0.02em] font-normal leading-[1.06] text-[#f8f5ee] mb-6 transition-all duration-800 delay-100 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(2.35rem, 5vw, 3.85rem)",
          }}
        >
          Take Your Place
          <br />
          <span className="italic font-light text-[#e2b960]">in the Network</span>
        </h2>

        {/* Supporting Copy */}
        <p
          className={`text-[16px] sm:text-[18px] leading-relaxed text-[#d4ded8] font-light max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Become a member today and take your place in a growing community of dedicated
          healthcare professionals from Assinman NMTC.
        </p>

        {/* Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Primary Action */}
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#112d1c] bg-[#e2b960] hover:bg-[#d4a84d] active:scale-[0.98] transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b960] w-full sm:w-auto"
          >
            <span>Register Now</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary Action */}
          <Link
            href="/pay-dues"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#f8f5ee] border border-white/30 hover:bg-white/10 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto"
          >
            <CreditCard className="w-4 h-4" aria-hidden="true" />
            <span>Pay Dues</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
