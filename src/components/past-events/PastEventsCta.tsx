"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { UserPlus, Image as ImageIcon, ArrowRight } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function PastEventsCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-18 border-t border-[#1b4d2e]/15"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
            The Future Archive
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal tracking-tight mb-3">
            Be Part of What Comes Next
          </h2>
          <p className="text-xs sm:text-sm text-[#505c6b] font-light max-w-lg mx-auto mb-8 leading-relaxed">
            Join the network and help build the moments that will become tomorrow&apos;s archive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-xs"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm border border-[#11161e]/20 text-[#11161e] text-xs font-semibold tracking-wider uppercase hover:bg-[#11161e] hover:text-[#f8f5ee] active:scale-[0.98] transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>View Gallery</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
