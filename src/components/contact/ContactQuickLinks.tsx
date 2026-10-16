"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { QUICK_LINKS } from "./types";

export function ContactQuickLinks() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#1b4d2e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-[#1b4d2e]/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                LOOKING FOR SOMETHING ELSE?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111827] font-normal tracking-tight">
              Explore the <span className="italic text-[#1b4d2e]">Network</span>
            </h2>
          </div>

          <p className="text-sm text-[#6b7280] font-light max-w-sm">
            Quickly navigate to key portal sections, dues instructions, and governance documents.
          </p>
        </div>

        {/* Refined Grid of Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 bg-[#fbfaf7] border border-[#1b4d2e]/10 hover:border-[#1b4d2e]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-serif text-[#111827] font-medium group-hover:text-[#1b4d2e] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#1b4d2e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1b4d2e]/10 flex items-center text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider group-hover:text-[#1b4d2e]">
                <span>VIEW SECTION</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
