"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Users, TrendingUp, Calendar, HeartHandshake, BookOpen, ArrowRight } from "lucide-react";
import { useInView } from "./useInView";

const benefits = [
  {
    num: "01",
    title: "Networking",
    description:
      "Connect with hundreds of alumni across every industry, sector, and region of Ghana and beyond.",
    icon: Users,
  },
  {
    num: "02",
    title: "Professional Growth",
    description:
      "Access career opportunities, referrals, and professional development through fellow members.",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Reunions",
    description:
      "Reconnect with classmates and year groups at our reunions, dinners, and celebratory events.",
    icon: Calendar,
  },
  {
    num: "04",
    title: "Community Support",
    description:
      "Be part of meaningful outreach programs giving back to Assinman and the wider community.",
    icon: HeartHandshake,
  },
  {
    num: "05",
    title: "Mentorship",
    description:
      "Guide current students and younger graduates through structured mentorship initiatives.",
    icon: BookOpen,
  },
];

export function BenefitsSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#11161e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left: Heading + callout ──────────────────────────── */}
          <div
            className={`lg:col-span-4 lg:sticky lg:top-28 space-y-8 transition-all duration-900 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
                  Membership
                </span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#11161e] leading-[1.1]">
                Why Join the Network
              </h2>

              <p className="text-[15px] text-[#4a5568] leading-[1.8]">
                Membership connects you to a powerful network of dedicated alumni
                and opens doors across every profession.
              </p>
            </div>

            {/* Dark callout card */}
            <div
              className="rounded-sm p-7 space-y-5"
              style={{
                background: "linear-gradient(135deg, #0e2418 0%, #1b4d2e 100%)",
              }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40 block">
                Alumni Solidarity
              </span>
              <h3 className="font-editorial text-xl font-bold text-white leading-snug">
                Invest in Your Alma Mater, Accelerate Your Career
              </h3>
              <p className="text-[13px] text-white/55 leading-relaxed">
                Joining the network provides instant access to continuing
                development, executive cohorts, and student mentorship projects.
              </p>
              <Link
                href="/why-join-us"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors group"
              >
                <span>Read Detailed Benefits</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* ── Right: Numbered benefit list ─────────────────────── */}
          <div
            className={`lg:col-span-8 transition-all duration-900 delay-150 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="divide-y divide-[#f0ede8] border-t border-[#f0ede8]">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={b.num}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group py-7 px-5 cursor-pointer rounded-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#faf9f6]"
                        : "hover:bg-[#faf9f6]/60"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Number */}
                      <span
                        className={`font-editorial text-3xl font-bold tracking-tight leading-none transition-colors duration-200 shrink-0 mt-1 ${
                          isActive ? "text-[#1b4d2e]" : "text-[#e0ddd8]"
                        }`}
                      >
                        {b.num}
                      </span>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-editorial text-xl sm:text-2xl font-bold transition-colors duration-200 ${
                              isActive ? "text-[#1b4d2e]" : "text-[#11161e]"
                            }`}
                          >
                            {b.title}
                          </h3>
                          <Icon
                            className={`w-5 h-5 transition-colors duration-200 shrink-0 ${
                              isActive ? "text-[#1b4d2e]" : "text-[#d0cdc8]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          className={`text-[14px] leading-relaxed transition-all duration-300 ${
                            isActive
                              ? "text-[#4a5568] max-h-24 opacity-100"
                              : "text-[#9aa0a8] max-h-0 lg:max-h-24 opacity-60 lg:opacity-100"
                          }`}
                        >
                          {b.description}
                        </p>
                      </div>
                    </div>

                    {/* Active underline */}
                    <div
                      className={`mt-5 h-px transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#1b4d2e] to-transparent"
                          : "bg-transparent"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
