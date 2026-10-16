"use client";

import React, { useState, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "ama",
    quote:
      "Joining AAN connected me to colleagues I had lost touch with for years. The networking has opened doors I never expected.",
    name: "Ama Boateng",
    role: "Staff Nurse · Class of 2022",
    initials: "AB",
  },
  {
    id: "kwame",
    quote:
      "The mentorship programme gave me the confidence to pursue my postgraduate studies. I am grateful for the support of this network.",
    name: "Kwame Osei",
    role: "General Nurse · Class of 2020",
    initials: "KO",
  },
  {
    id: "efua",
    quote:
      "AAN is not just an alumni group — it is a family. The annual reunion is something I look forward to every year without fail.",
    name: "Efua Asante",
    role: "Midwife · Class of 2020",
    initials: "EA",
  },
];

export function WhyJoinTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="member-voices"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Member Voices
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-4 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.75rem)",
            }}
          >
            Why Members
            <br />
            <span className="italic font-light text-[#1b4d2e]">Stay Connected</span>
          </h2>
        </div>

        {/* ── Editorial Testimonial Stage ────────────────────────────── */}
        <div className="relative max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-white/80 border border-[#1b4d2e]/15 shadow-sm relative overflow-hidden">
            {/* Ambient Watermark Quote Icon */}
            <div
              className="absolute right-6 top-6 sm:right-10 sm:top-10 text-[#1b4d2e]/10 pointer-events-none"
              aria-hidden="true"
            >
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
            </div>

            {/* Quote Body */}
            <div className="relative z-10">
              <blockquote className="min-h-[140px] sm:min-h-[120px] flex items-center">
                <p
                  key={current.id}
                  className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal leading-[1.25] tracking-tight italic animate-fadeIn"
                >
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author & Controls Row */}
              <div className="mt-8 pt-6 border-t border-[#1b4d2e]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b4d2e] text-[#f8f5ee] flex items-center justify-center font-bold text-sm tracking-wider shadow-xs">
                    {current.initials}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#11161e] tracking-tight">
                      {current.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c6975] font-light">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <span className="text-xs font-mono font-medium text-[#738290]">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-[#1b4d2e]/20 flex items-center justify-center text-[#11161e] hover:bg-[#1b4d2e] hover:text-[#f8f5ee] active:scale-95 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-[#1b4d2e]/20 flex items-center justify-center text-[#11161e] hover:bg-[#1b4d2e] hover:text-[#f8f5ee] active:scale-95 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
