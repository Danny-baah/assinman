import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function DuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#faf9f6] text-[#11161e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="max-w-3xl space-y-5 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
              Financials
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#11161e] leading-[1.1]">
            Membership Dues
          </h2>
          <p className="text-[15px] text-[#4a5568] leading-[1.8] max-w-xl">
            Choose the membership tier that suits you. All payments accepted via MoMo or card.
          </p>
        </div>

        {/* ── Dues layout ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* 1. Lifetime — featured large (7 cols) */}
          <div
            className="lg:col-span-7 rounded-sm p-10 sm:p-12 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #0e2418 0%, #1b4d2e 100%)",
            }}
          >
            <div className="space-y-8">
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35 block">
                    Permanent Standing
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                    Lifetime Membership
                  </h3>
                </div>
                <span
                  className="shrink-0 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: "rgba(122,28,28,0.85)" }}
                >
                  Best Value
                </span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-editorial text-5xl sm:text-6xl font-bold text-[#f5f0e8] tracking-tight">
                    GH₵500
                  </span>
                  <span className="text-xs text-white/35 uppercase tracking-wider">one-time</span>
                </div>
                <div className="h-px bg-white/10" />
              </div>

              <p className="text-[14px] text-white/55 leading-relaxed max-w-lg">
                One-time payment for permanent membership with all privileges for life.
              </p>

              <div className="flex items-center gap-2.5 text-[13px] text-white/50">
                <Check className="w-4 h-4 text-[#6aab7a] shrink-0" aria-hidden="true" />
                <span>Permanent voting rights &amp; honor roll recognition</span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/pay-dues"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-sm text-[12.5px] font-bold tracking-[0.12em] uppercase text-white transition-all duration-200 active:scale-[0.97] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{
                  background: "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
                  boxShadow: "0 2px 20px rgba(122,28,28,0.45)",
                }}
              >
                <span>Pay Now</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* 2. Right column: Annual + Reunion stacked (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Annual Dues */}
            <div className="flex-1 bg-white border border-[#e8e5de] rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-[#1b4d2e]/40 transition-colors">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9aa0a8] block">
                    Subscription
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#11161e]">Annual Dues</h3>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-editorial text-4xl font-bold text-[#11161e] tracking-tight">
                      GH₵100
                    </span>
                    <span className="text-xs text-[#9aa0a8] uppercase tracking-wider">per year</span>
                  </div>
                  <div className="h-px bg-[#f0ede8]" />
                </div>

                <p className="text-[13px] text-[#4a5568] leading-relaxed">
                  Full membership privileges for one year, including event access and voting rights
                  at the AGM.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/pay-dues"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm text-[12px] font-bold uppercase tracking-[0.12em] border border-[#1b4d2e] text-[#1b4d2e] hover:bg-[#1b4d2e] hover:text-white transition-all duration-200 group focus:outline-none"
                >
                  <span>Pay Now</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Reunion Contribution */}
            <div className="flex-1 bg-white border border-[#e8e5de] rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-[#1b4d2e]/40 transition-colors">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9aa0a8] block">
                    Cohort &amp; Special Fund
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#11161e]">
                    Reunion Contribution
                  </h3>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-editorial text-4xl font-bold text-[#11161e] tracking-tight">
                      Custom
                    </span>
                    <span className="text-xs text-[#9aa0a8] uppercase tracking-wider">voluntary</span>
                  </div>
                  <div className="h-px bg-[#f0ede8]" />
                </div>

                <p className="text-[13px] text-[#4a5568] leading-relaxed">
                  Contribute to your year group&apos;s reunion fund. Any amount is warmly welcome.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/donations"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm text-[12px] font-bold uppercase tracking-[0.12em] border border-[#11161e] text-[#11161e] hover:bg-[#11161e] hover:text-white transition-all duration-200 group focus:outline-none"
                >
                  <span>Contribute</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
