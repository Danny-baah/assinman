"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "./useInView";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#faf9f6] text-[#11161e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-start">

          {/* ── Left: Image composition ──────────────────────────────── */}
          <div
            className={`lg:col-span-5 relative mb-12 lg:mb-0 transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Primary portrait — authentic group of professional nurses */}
            <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-nurses.jpg"
                alt="Group of dedicated professional nurses and healthcare alumni — Assinman Alumni Network"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                priority
              />
              {/* Subtle bottom shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating inset — smaller accent image */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-44 h-44 sm:h-56 rounded-sm overflow-hidden shadow-2xl border-2 border-white hidden sm:block"
              style={{ zIndex: 10 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=85"
                alt="Nursing professionals — community care"
                fill
                sizes="180px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#0e2418]/15" />
            </div>

            {/* Brand accent bar */}
            <div
              className="absolute top-8 -left-0 w-1 h-20 rounded-full"
              style={{ background: "linear-gradient(to bottom, #1b4d2e, #7a1c1c)" }}
            />
          </div>

          {/* ── Right: Text block ────────────────────────────────────── */}
          <div className="lg:col-span-7 lg:pt-10 space-y-8">
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 delay-100 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
                  About the Association
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              className={`font-editorial text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#11161e] leading-[1.1] transition-all duration-700 delay-150 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Who We Are
            </h2>

            {/* Quote */}
            <blockquote
              className={`border-l-2 border-[#1b4d2e] pl-6 py-1 transition-all duration-700 delay-200 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-editorial text-xl sm:text-2xl text-[#1b4d2e] italic leading-relaxed">
                &ldquo;We are more than alumni — we are a family bound by shared
                memories, values, and a commitment to one another.&rdquo;
              </p>
            </blockquote>

            {/* Body */}
            <div
              className={`space-y-4 text-[15px] text-[#4a5568] leading-[1.8] transition-all duration-700 delay-250 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p>
                The Assinman Alumni Network (AAN) is the official alumni body
                connecting graduates from Assinman. Our mission is to foster
                lifelong connections among alumni, support current students
                through mentorship, and give back to the institution that shaped
                us.
              </p>
              <p>
                With members spanning every sector — business, healthcare,
                education, government, and the arts — our growing network is one
                of your greatest assets as a graduate.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`pt-2 transition-all duration-700 delay-300 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/mission-vision"
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1b4d2e] hover:text-[#2a6b40] transition-colors border-b border-[#1b4d2e]/40 hover:border-[#2a6b40] pb-1 group"
              >
                <span>Learn More About Us</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
