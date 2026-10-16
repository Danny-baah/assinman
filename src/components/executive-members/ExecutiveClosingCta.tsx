"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function ExecutiveClosingCta() {
  const ctaRef = useRef<HTMLElement>(null);
  const inView = useInView(ctaRef, { threshold: 0.12 });

  return (
    <section
      ref={ctaRef}
      id="join-cta"
      aria-labelledby="exec-cta-heading"
      className="relative overflow-hidden bg-[#f8f5ee] py-12 sm:py-16 lg:py-18"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
            The Network
          </span>
          <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="exec-cta-heading"
          className={`font-editorial tracking-[-0.02em] font-normal leading-[1.06] text-[#11161e] mb-6 transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(2.35rem, 5vw, 3.75rem)",
          }}
        >
          United in Excellence
        </h2>

        {/* Supporting Copy */}
        <p
          className={`text-[16px] sm:text-[18px] leading-relaxed text-[#505c6b] font-light max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Strong leadership begins with a connected community. Join the Assinman
          Alumni Network and become part of what we are building together.
        </p>

        {/* Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Primary Action */}
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white transition-all duration-250 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e] w-full sm:w-auto"
            style={{ backgroundColor: "#1b4d2e" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#112d1c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1b4d2e";
            }}
          >
            <span>Join the Network</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary Action */}
          <Link
            href="/about/mission-vision"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase transition-all duration-250 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11161e] w-full sm:w-auto border"
            style={{
              borderColor: "rgba(17, 22, 30, 0.25)",
              color: "#11161e",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#11161e";
              el.style.color = "#f8f5ee";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#11161e";
            }}
          >
            <span>Explore Our Mission</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
