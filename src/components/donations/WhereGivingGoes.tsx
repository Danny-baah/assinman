"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Building, Users, Quote, Sparkles } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const IMPACT_AREAS = [
  {
    num: "01",
    title: "Scholarship Fund",
    subtitle: "Empowering Deserving Students",
    desc: "Your donation helps fund scholarships for financially disadvantaged students at Assinman NMTC, ensuring that no deserving student is left behind due to financial constraints.",
    icon: GraduationCap,
    image: "/assets/why-join-mentorship.jpg",
    imageAlt: "Nursing mentors and students studying in a library seminar room",
  },
  {
    num: "02",
    title: "School Development",
    subtitle: "Modernising Clinical Infrastructure",
    desc: "Contributions go towards improving infrastructure, purchasing medical equipment, and enhancing the learning environment at Assinman Nursing and Midwifery Training College.",
    icon: Building,
    image: "/assets/donations-students.jpg",
    imageAlt: "Assinman NMTC nursing students with medical simulation laboratory equipment",
  },
  {
    num: "03",
    title: "Alumni Activities & Outreach",
    subtitle: "Community Health & Fellowship",
    desc: "Donations fund alumni events, community health outreach programmes, and welfare support for members — keeping our network active, connected, and impactful.",
    icon: Users,
    image: "/assets/about-nurses.jpg",
    imageAlt: "Alumni healthcare professionals united in fellowship",
  },
];

export function WhereGivingGoes() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05 });

  return (
    <section
      ref={sectionRef}
      id="where-giving-goes"
      className="bg-[#f8f5ee] py-16 sm:py-24 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Your Impact
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
            }}
          >
            Where Your
            <br />
            <span className="italic font-light text-[#1b4d2e]">Giving Goes</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every donation to the Assinman Alumni Network helps strengthen the institution,
            support students in need, and keep our alumni community active and connected.
          </p>
        </div>

        {/* ── 3 Impact Chapters with Alternating Layout ──────────────── */}
        <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24">
          {IMPACT_AREAS.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <div
                key={item.num}
                className="pt-8 sm:pt-12 border-t border-[#1b4d2e]/15 transition-all duration-700 ease-out"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:col-start-6 lg:pl-4" : "lg:pr-4"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 mb-4">
                      <span className="font-editorial text-3xl sm:text-4xl text-[#1b4d2e] font-light tracking-tight">
                        {item.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#738290]">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal tracking-tight mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#465362] font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Image Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-[#11161e]/5 border border-[#1b4d2e]/15 group">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(17,22,30,0.4) 0%, transparent 50%)",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Editorial Statement Banner (Why We Give) ───────────────── */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#112d1c] text-[#f8f5ee] relative overflow-hidden shadow-lg">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(248,245,238,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,245,238,0.15) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
            aria-hidden="true"
          />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2b960]">
                Why We Give
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2b960]/50" />
              <span className="text-xs text-[#a2b5aa] font-light">
                Assinman Alumni Network · United in Excellence
              </span>
            </div>

            <blockquote className="mb-6">
              <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug tracking-tight text-[#f8f5ee] italic">
                &ldquo;A small act of generosity today can change the entire trajectory of a
                student&apos;s life tomorrow.&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-2 text-xs text-[#d4ded8] font-light">
              <Sparkles className="w-3.5 h-3.5 text-[#e2b960]" />
              <span>Dedicated to the continued advancement of Assinman NMTC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
