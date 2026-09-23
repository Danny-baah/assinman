"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ── Count-up hook ─────────────────────────────────────────────────────
   Animates 0 → `target` over `duration`ms (ease-out cubic).
   Starts when `active` flips true (IntersectionObserver).
   Reduced-motion detected via lazy useState initializer — no setState
   ever fires inside an effect body, keeping the linter happy.
   ──────────────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration: number, active: boolean): number {
  // Lazy initializer runs only on the client (window is defined).
  // Never runs on the server, so no hydration mismatch for a boolean.
  const [reducedMotion] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  const [value, setValue] = useState(0);

  // Run RAF animation — only when active and motion is permitted
  useEffect(() => {
    if (!active || reducedMotion) return;

    let rafId: number;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, reducedMotion, target, duration]);

  // Safe to read reducedMotion (state) during render
  if (reducedMotion && active) return target;
  return value;
}

/* ── Stat item ─────────────────────────────────────────────────────── */
interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  active: boolean;
  duration?: number;
}

function StatItem({ target, suffix = "", label, active, duration = 1800 }: StatItemProps) {
  const count = useCountUp(target, duration, active);
  return (
    <div className="space-y-2">
      <div className="font-editorial text-3xl sm:text-[2.6rem] font-bold text-white tracking-tight tabular-nums leading-none">
        {count}
        <span className="text-[#6aab7a] text-2xl sm:text-3xl">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold">
        {label}
      </div>
    </div>
  );
}

/* ── Hero Section ──────────────────────────────────────────────────── */
export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative flex flex-col bg-[#091810] text-white overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — Assinman Alumni Network"
    >
      {/* ── Background Image ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
          alt="Healthcare professionals and alumni community"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-image-animate"
          style={{ opacity: 0.48 }}
        />

        {/* Cinematic gradient layers */}
        {/* Left anchor — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(9,24,16,0.92) 0%, rgba(9,24,16,0.72) 45%, rgba(9,24,16,0.28) 100%)",
          }}
        />
        {/* Top — navbar fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,24,16,0.65) 0%, transparent 35%)",
          }}
        />
        {/* Bottom — stats transition */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(9,24,16,0.88) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* ── Main Content ────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-8">
        <div className="max-w-2xl lg:max-w-[680px] space-y-6">

          {/* Eyebrow */}
          <div className="hero-eyebrow-animate flex items-center gap-3">
            {/* Decorative rule */}
            <span
              className="hero-line-animate inline-block h-px w-10 shrink-0"
              style={{ background: "rgba(255,255,255,0.35)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.28em] uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              United in Excellence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-heading-animate font-editorial font-bold tracking-tight text-white leading-[1.06]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
          >
            Welcome to{" "}
            <em
              className="not-italic"
              style={{ color: "#e8e0d0" }}
            >
              Assinman Alumni
            </em>{" "}
            Network
          </h1>

          {/* Body */}
          <p
            className="hero-body-animate text-base sm:text-[17px] leading-[1.75] max-w-[540px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Connecting alumni, fostering fellowship, and building a legacy of
            excellence together. Join our growing community of distinguished
            graduates united in purpose.
          </p>

          {/* CTAs */}
          <div className="hero-cta-animate flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            {/* Primary */}
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm text-[12.5px] font-bold tracking-[0.12em] uppercase text-white transition-all duration-200 active:scale-[0.97] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{
                background: "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
                boxShadow:
                  "0 2px 20px rgba(122,28,28,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span>Register Now</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary */}
            <Link
              href="/pay-dues"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm text-[12.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.65)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.35)";
                el.style.color = "rgba(255,255,255,0.9)";
                el.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.18)";
                el.style.color = "rgba(255,255,255,0.65)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              Pay Dues
            </Link>
          </div>
        </div>
      </div>

      {/* ── Statistics Strip ────────────────────────────────────────── */}
      <div
        ref={statsRef}
        className="hero-stats-animate relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-10"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 pt-7"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <StatItem
            target={500}
            suffix="+"
            label="Members"
            active={statsVisible}
            duration={1600}
          />
          <StatItem
            target={10}
            suffix="+"
            label="Year Groups"
            active={statsVisible}
            duration={1200}
          />
          <StatItem
            target={5}
            suffix="+"
            label="Annual Events"
            active={statsVisible}
            duration={900}
          />
          {/* Non-numeric stat */}
          <div className="space-y-2">
            <div className="font-editorial text-3xl sm:text-[2.6rem] font-bold text-white tracking-tight leading-none">
              AAN
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold">
              Assinman, Ghana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
