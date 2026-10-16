"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Check, Sparkles, Network, GraduationCap, HeartHandshake, Compass, ShieldCheck, Vote } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface BenefitItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  points: string[];
  icon: React.ElementType;
  image?: string;
  imageAlt?: string;
}

const BENEFITS: BenefitItem[] = [
  {
    id: "networking",
    num: "01",
    title: "Professional Networking",
    subtitle: "Expand Your Sphere Across Ghana & Abroad",
    desc: "Connect with hundreds of nursing and midwifery professionals across Ghana and the diaspora. Our network spans every region, hospital, and healthcare facility.",
    points: [
      "Access to a verified alumni directory",
      "WhatsApp and online community groups",
      "Annual networking dinners and galas",
      "Introductions to senior professionals",
    ],
    icon: Network,
    image: "/assin/photo_2026-10-16_12-04-19.jpg",
    imageAlt: "Assinman Alumni Network registered general nurses and graduates connecting",
  },
  {
    id: "career-dev",
    num: "02",
    title: "Career Development",
    subtitle: "Accelerate Your Professional Journey",
    desc: "Grow your career with the support of fellow alumni who have walked the same path. Access opportunities that give you a professional edge.",
    points: [
      "Job referrals and vacancy sharing",
      "Continuing professional development (CPD)",
      "Clinical knowledge sharing sessions",
      "Support for further studies and scholarships",
    ],
    icon: GraduationCap,
  },
  {
    id: "fellowship",
    num: "03",
    title: "Reunions & Fellowship",
    subtitle: "Celebrate Shared Memories and Milestones",
    desc: "Reconnect with classmates, batch mates, and friends from your time at Assinman NMTC through regular reunions and social events.",
    points: [
      "Annual reunion gala",
      "Year group meetups and dinners",
      "Cultural and festive celebrations",
      "Online virtual meetups for diaspora members",
    ],
    icon: HeartHandshake,
  },
  {
    id: "mentorship",
    num: "04",
    title: "Mentorship & Giving Back",
    subtitle: "Empower the Next Generation of Clinicians",
    desc: "Make a real difference by mentoring current students at Assinman NMTC and contributing to the growth of the next generation of healthcare professionals.",
    points: [
      "Structured mentorship programme",
      "Career day presentations at the college",
      "Scholarship fund contributions",
      "Equipment and facility donations",
    ],
    icon: Compass,
    image: "/assin/photo_2026-10-16_12-04-06.jpg",
    imageAlt: "Assinman alumni members wearing honors medals",
  },
  {
    id: "welfare",
    num: "05",
    title: "Community & Welfare",
    subtitle: "A Dedicated Institutional Safety Net",
    desc: "Be part of a support system that looks out for its own. The AAN provides a safety net of professional and personal support for all members.",
    points: [
      "Member welfare support",
      "Community health outreach programs",
      "Bereavement and support systems",
      "Recognition of outstanding members",
    ],
    icon: ShieldCheck,
  },
  {
    id: "representation",
    num: "06",
    title: "Voice & Representation",
    subtitle: "Shape Association Policy & Leadership",
    desc: "Your membership gives you a voice in shaping the direction of the association and advocating for the interests of nursing and midwifery professionals.",
    points: [
      "Voting rights at the AGM",
      "Eligibility to run for executive positions",
      "Input into association policy and decisions",
      "Representation on professional matters",
    ],
    icon: Vote,
  },
];

export function WhyJoinBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05 });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              The Benefits
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-6 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
            }}
          >
            What Membership
            <br />
            <span className="italic font-light text-[#1b4d2e]">Gives You</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            As a member of AAN, you gain access to a community and opportunities designed
            to support both your professional journey and personal growth.
          </p>
        </div>

        {/* ── Six Benefits Vertical Sequence with Alternating Rhythm ───────── */}
        <div className="space-y-16 sm:space-y-24">
          {BENEFITS.map((b, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = b.icon;

            return (
              <div
                key={b.id}
                className={`group relative pt-8 sm:pt-12 border-t border-[#1b4d2e]/15 transition-all duration-700 ease-out`}
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
                    {/* Number and Icon Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#1b4d2e] tracking-tight">
                        {b.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#1b4d2e]/10 flex items-center justify-center text-[#1b4d2e]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#738290]">
                        {b.subtitle}
                      </span>
                    </div>

                    {/* Benefit Title */}
                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal tracking-tight mb-4 group-hover:text-[#1b4d2e] transition-colors duration-300">
                      {b.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#465362] font-light mb-6">
                      {b.desc}
                    </p>

                    {/* Key Points Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                      {b.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-[#1b4d2e]/10 shadow-xs group-hover:border-[#1b4d2e]/25 transition-colors"
                        >
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-medium text-[#242f3d] leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual / Art Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    {b.image ? (
                      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#11161e]/5 border border-[#1b4d2e]/15">
                        <Image
                          src={b.image}
                          alt={b.imageAlt || b.title}
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
                    ) : (
                      /* Editorial Typographic Graphic Box */
                      <div className="p-8 sm:p-10 rounded-2xl bg-white/80 border border-[#1b4d2e]/15 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                        <div
                          className="absolute -right-6 -bottom-6 font-editorial text-8xl font-normal text-[#1b4d2e]/5 select-none pointer-events-none"
                          aria-hidden="true"
                        >
                          {b.num}
                        </div>

                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
                            AAN Pillar {b.num}
                          </span>
                          <h4 className="font-editorial text-xl sm:text-2xl text-[#11161e] font-normal leading-snug">
                            &ldquo;{b.subtitle}&rdquo;
                          </h4>
                        </div>

                        <div className="pt-6 border-t border-[#1b4d2e]/10 flex items-center justify-between">
                          <span className="text-xs text-[#5c6975] font-medium">
                            Assinman Alumni Network
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#1b4d2e]">
                            <Sparkles className="w-3 h-3" />
                            Core Value
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
