"use client";

import React, { useRef } from "react";
import { useInView } from "@/components/home/useInView";

export function InstitutionalMarkers() {
  const markersRef = useRef<HTMLElement>(null);
  const inView = useInView(markersRef, { threshold: 0.15 });

  return (
    <section
      ref={markersRef}
      aria-label="Institutional Markers"
      className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 items-center text-center sm:text-left">
          
          {/* Marker 1 */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-8 transition-all duration-800 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span
              className="font-editorial text-[3.75rem] sm:text-[4.75rem] lg:text-[5.5rem] font-light leading-none text-[#1b4d2e]"
            >
              2025
            </span>
            <div className="border-t sm:border-t-0 sm:border-l border-[#1b4d2e]/20 pt-2 sm:pt-0 sm:pl-6">
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-[#11161e]">
                AAN Founded
              </span>
              <span className="text-[13px] text-[#63707f] font-light">
                Formalized alumni charter
              </span>
            </div>
          </div>

          {/* Marker 2 */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-8 transition-all duration-800 delay-150 ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span
              className="font-editorial text-[3.75rem] sm:text-[4.75rem] lg:text-[5.5rem] font-light leading-none text-[#1b4d2e]"
            >
              100%
            </span>
            <div className="border-t sm:border-t-0 sm:border-l border-[#1b4d2e]/20 pt-2 sm:pt-0 sm:pl-6">
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-[#11161e]">
                Committed
              </span>
              <span className="text-[13px] text-[#63707f] font-light">
                To alumni fellowship &amp; alma mater
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(27,77,46,0.12) 25%, rgba(27,77,46,0.12) 75%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
