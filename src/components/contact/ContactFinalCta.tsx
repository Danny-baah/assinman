"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function ContactFinalCta() {
  return (
    <section className="relative w-full bg-[#fbfaf7] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4b]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#1b4d2e] uppercase">
            ASSINMAN ALUMNI NETWORK
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight mb-4">
          United in <span className="italic text-[#1b4d2e]">Excellence.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
          Stay connected. Stay involved. Help shape the future of the Assinman alumni community.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/membership/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1b4d2e] text-white text-sm font-medium tracking-[0.08em] hover:bg-[#143a22] transition-colors duration-200 shadow-sm group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#c59b4b]" />
          </Link>

          <Link
            href="/membership/why-join-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-[#1b4d2e]/30 text-[#1b4d2e] text-sm font-medium tracking-[0.08em] hover:bg-[#1b4d2e]/5 transition-colors duration-200"
          >
            <Compass className="w-4 h-4 text-[#1b4d2e]" />
            <span>Explore Membership</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
