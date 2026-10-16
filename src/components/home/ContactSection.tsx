"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "./useInView";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f7f4ee" }}
    >
      {/* Subtle top divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.12) 20%, rgba(27,77,46,0.12) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Main Container — generous vertical breathing room */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          {/* Typographic Core — Left / Dominant */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <span
                className="w-5 h-px"
                style={{ backgroundColor: "#1b4d2e" }}
                aria-hidden="true"
              />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "#1b4d2e" }}
              >
                Get in Touch
              </span>
            </div>

            {/* Intentional vertical gap */}
            <div className="h-8 sm:h-10" aria-hidden="true" />

            {/* Large Editorial Heading */}
            <h2
              id="contact-cta-heading"
              className={`font-editorial tracking-[-0.02em] leading-[1.06] font-normal transition-all duration-800 delay-100 ease-out motion-reduce:transition-none ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{
                color: "#11161e",
                fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
              }}
            >
              We’d love to hear
              <br />
              from you.
            </h2>

            {/* Moderate gap */}
            <div className="h-6 sm:h-8" aria-hidden="true" />

            {/* Short Supporting Text */}
            <p
              className={`text-[16px] sm:text-[17.5px] leading-relaxed max-w-lg font-normal transition-all duration-700 delay-200 ease-out motion-reduce:transition-none ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ color: "#525e6d" }}
            >
              We’d love to hear from you and connect with members of our
              alumni community.
            </p>

            {/* Gap before CTA button */}
            <div className="h-8 sm:h-10" aria-hidden="true" />

            {/* Single CTA Button */}
            <div
              className={`transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-[12.5px] font-medium tracking-[0.12em] uppercase text-white transition-colors duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]"
                style={{
                  backgroundColor: "#1b4d2e",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#112d1c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1b4d2e";
                }}
              >
                <span>Contact Us</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Single Asymmetric Visual Element — Far to the right side (Option 1) */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div
              className={`relative w-48 sm:w-56 lg:w-64 overflow-hidden rounded-xs transition-all duration-1000 delay-400 ease-out motion-reduce:transition-none ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                aspectRatio: "3 / 4",
                border: "1px solid rgba(27, 77, 46, 0.15)",
                boxShadow: "0 8px 30px rgba(17, 22, 30, 0.05)",
              }}
            >
              <Image
                src="/assin/photo_2026-10-16_12-04-19.jpg"
                alt="Assinman alumni fellowship and registered nurses"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover object-top contrast-[1.03]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom divider transitioning quietly into footer */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.12) 20%, rgba(27,77,46,0.12) 80%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
