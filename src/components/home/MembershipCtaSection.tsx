"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function MembershipCtaSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      {/* Background image — cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assin/photo_2026-10-16_12-04-26.jpg"
          alt="Assinman Alumni Network members gathering on campus grounds"
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.38 }}
        />
        {/* Layered green gradient — image stays visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,36,24,0.92) 0%, rgba(14,36,24,0.75) 50%, rgba(14,36,24,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,36,24,0.5) 0%, transparent 40%, rgba(14,36,24,0.6) 100%)",
          }}
        />
      </div>

      {/* Decorative large character */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center pr-8 lg:pr-16 select-none pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <span
          className="font-editorial font-bold text-white leading-none hidden lg:block"
          style={{
            fontSize: "clamp(10rem, 22vw, 22rem)",
            opacity: 0.04,
            letterSpacing: "-0.05em",
          }}
        >
          AAN
        </span>
      </div>

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 space-y-10"
        style={{ zIndex: 2 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-white/30" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
            Membership Call
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-editorial font-bold tracking-tight text-white leading-[1.06]"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Become Part of a{" "}
          <em className="not-italic" style={{ color: "#e8e0d0" }}>
            Thriving
          </em>{" "}
          Alumni Network
        </h2>

        <p
          className="text-base sm:text-[17px] leading-[1.8] max-w-2xl"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Registration is open to all former students of Assinman. Your
          membership connects you to a community built on excellence, unity,
          and service.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-sm text-[12.5px] font-bold tracking-[0.12em] uppercase text-white transition-all duration-200 active:scale-[0.97] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{
              background: "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
              boxShadow: "0 2px 24px rgba(122,28,28,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <span>Register Now</span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/pay-dues"
            className="inline-flex items-center justify-center px-9 py-4 rounded-sm text-[12.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(255,255,255,0.4)";
              el.style.color = "rgba(255,255,255,0.9)";
              el.style.background = "rgba(255,255,255,0.09)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.color = "rgba(255,255,255,0.65)";
              el.style.background = "rgba(255,255,255,0.05)";
            }}
          >
            Pay Dues
          </Link>
        </div>
      </div>
    </section>
  );
}
