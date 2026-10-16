"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users, Award, Calendar, MapPin } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const STATS = [
  { value: "500+", label: "Active Members", icon: Users },
  { value: "10+", label: "Year Groups", icon: Award },
  { value: "5+", label: "Annual Events", icon: Calendar },
  { value: "3+", label: "Regions Covered", icon: MapPin },
];

export function WhyJoinHero() {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f8f5ee] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-14"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(27,77,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,77,46,0.04) 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-4 sm:mb-5 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
                Membership
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e]/30" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase text-[#738290]">
                The Value of Belonging
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`font-editorial tracking-[-0.03em] leading-[0.98] font-normal text-[#11161e] mb-6 sm:mb-8 transition-all duration-800 delay-100 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
              }}
            >
              More Than Membership.
              <br />
              <span className="italic font-light text-[#1b4d2e]">A Community for Life.</span>
            </h1>

            {/* Supporting Copy */}
            <p
              className={`text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.65] font-light text-[#465362] max-w-xl mb-8 sm:mb-10 transition-all duration-700 delay-200 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Joining the Assinman Alumni Network is more than membership — it is a commitment
              to a lifelong community of healthcare professionals united in excellence.
            </p>

            {/* Hero CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-300 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white bg-[#1b4d2e] hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]"
              >
                <span>Register Now</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/pay-dues"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#11161e] border border-[#11161e]/25 hover:bg-[#11161e] hover:text-[#f8f5ee] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11161e]"
              >
                <span>Explore Membership Dues</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Image Composition (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"
            }`}
          >
            <div className="relative">
              {/* Decorative Frame Line */}
              <div
                className="absolute -inset-3 sm:-inset-4 border border-[#1b4d2e]/15 rounded-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Editorial Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3] bg-[#11161e]/5">
                <Image
                  src="/assin/photo_2026-10-16_12-04-26.jpg"
                  alt="Assinman Alumni Network members gathering on campus grounds"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,22,30,0.5) 0%, transparent 40%)",
                  }}
                  aria-hidden="true"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-white/50 text-[#11161e] shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b4d2e] block">
                      Assinman NMTC Alumni
                    </span>
                    <p className="text-xs font-medium text-[#242f3d]">
                      United in Excellence Across Ghana
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#1b4d2e] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Refined Editorial Data Strip ─────────────────────── */}
        <div
          className={`mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-[#1b4d2e]/15 transition-all duration-700 delay-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-[#1b4d2e]/20 pl-4 sm:pl-6"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1b4d2e] tracking-tight leading-none">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5c6975]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
