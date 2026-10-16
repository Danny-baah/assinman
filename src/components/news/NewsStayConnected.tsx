"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function NewsStayConnected() {
  return (
    <section className="relative w-full bg-[#fbfaf7] py-12 sm:py-16 lg:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4b]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#1b4d2e] uppercase">
            STAY CONNECTED
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight mb-4">
          Never Miss an <span className="italic text-[#1b4d2e]">Update</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
          Stay connected with the alumni network and keep your membership information current for future announcements and opportunities.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/membership/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1b4d2e] text-white text-sm font-medium tracking-[0.08em] hover:bg-[#143a22] transition-colors duration-200 shadow-sm group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#c59b4b]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-[#1b4d2e]/30 text-[#1b4d2e] text-sm font-medium tracking-[0.08em] hover:bg-[#1b4d2e]/5 transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-[#1b4d2e]" />
            <span>Contact Us</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
