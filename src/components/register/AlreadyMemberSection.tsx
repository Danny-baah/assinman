"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { CreditCard, MessageSquare } from "lucide-react";
import { useInView } from "@/components/home/useInView";

export function AlreadyMemberSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] py-12 sm:py-16 border-t border-[#1b4d2e]/15"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
            Existing Alumni
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight mb-3">
            Already a Member?
          </h2>
          <p className="text-xs sm:text-sm text-[#505c6b] font-light max-w-md mx-auto mb-8 leading-relaxed">
            If you have already registered, you can proceed to pay your dues or contact us
            for any membership queries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pay-dues"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Dues</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm border border-[#11161e]/20 text-[#11161e] text-xs font-semibold tracking-wider uppercase hover:bg-[#11161e] hover:text-[#f8f5ee] active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
