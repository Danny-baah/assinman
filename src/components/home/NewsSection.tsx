import React from "react";

export function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#faf9f6] text-[#11161e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="space-y-5 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
              Latest News
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#11161e] leading-[1.1]">
            Announcements &amp; Updates
          </h2>
        </div>

        {/* ── Empty state ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-8 sm:py-12">

          {/* Left: large editorial number / icon */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-center">
            <div className="relative select-none" aria-hidden="true">
              {/* Oversized muted background glyph */}
              <span
                className="font-editorial font-bold leading-none block"
                style={{
                  fontSize: "clamp(7rem, 15vw, 11rem)",
                  color: "#e8e5de",
                  letterSpacing: "-0.04em",
                }}
              >
                &#x2014;
              </span>
              {/* Small green accent above */}
              <div
                className="absolute top-0 left-0 w-6 h-0.5 rounded-full"
                style={{ background: "#1b4d2e", opacity: 0.4 }}
              />
            </div>
          </div>

          {/* Right: message */}
          <div className="lg:col-span-8 space-y-6">
            {/* Thin rule */}
            <div className="h-px bg-[#e8e5de]" />

            <div className="space-y-3">
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#11161e] tracking-tight leading-tight">
                No news yet
              </h3>
              <p className="text-[15px] text-[#9aa0a8] leading-[1.8] max-w-md">
                There are no news or announcements at the moment. Check back
                soon for the latest updates from the alumni network.
              </p>
            </div>

            {/* Decorative bottom rule */}
            <div className="flex items-center gap-3 pt-2">
              <div
                className="w-8 h-0.5 rounded-full"
                style={{ background: "#1b4d2e", opacity: 0.3 }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#7a1c1c", opacity: 0.3 }}
              />
              <div
                className="w-20 h-px"
                style={{ background: "#e8e5de" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
