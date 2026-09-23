"use client";

import React, { useState, useRef } from "react";
import { Download, Check, FileText } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const METRICS = [
  { value: "13", label: "Articles" },
  { value: "2025", label: "Adopted" },
  { value: "3", label: "Membership Types" },
  { value: "10", label: "Executive Roles" },
];

export function ConstitutionOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadPdf = () => {
    // If a static PDF exists, trigger download; otherwise provide clear feedback
    const pdfPath = "/assets/documents/AAN_Constitution_2025.pdf";
    fetch(pdfPath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          window.open(pdfPath, "_blank");
        } else {
          setDownloadNotice(true);
          setTimeout(() => setDownloadNotice(false), 4500);
        }
      })
      .catch(() => {
        setDownloadNotice(true);
        setTimeout(() => setDownloadNotice(false), 4500);
      });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f5ee] border-b border-[#1b4d2e]/10 py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Metadata Strip */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#1b4d2e]/10 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l border-[#1b4d2e]/15 pl-4 sm:pl-6"
            >
              <span className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1b4d2e] tracking-tight leading-none mb-1.5">
                {item.value}
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5c6975]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Refined Document Header Strip */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 delay-100 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="mt-1 w-9 h-9 rounded-lg bg-[#1b4d2e]/10 flex items-center justify-center text-[#1b4d2e] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base sm:text-lg font-bold text-[#11161e] tracking-tight">
                  AAN CONSTITUTION 2025
                </h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#1b4d2e]/10 text-[#1b4d2e]">
                  Official
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5c6975]">
                Official governing document — Assinman Alumni Network
              </p>
            </div>
          </div>

          {/* Action Button & Notice */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={handleDownloadPdf}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#1b4d2e] text-[#f8f5ee] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#153e24] active:scale-[0.99] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] focus:ring-offset-2"
              aria-label="Download Official AAN Constitution PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            {downloadNotice && (
              <div className="absolute right-0 top-full mt-2 w-72 p-3 bg-white border border-[#1b4d2e]/20 rounded-lg shadow-lg text-xs text-[#242f3d] z-20 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1b4d2e] shrink-0 mt-0.5" />
                  <p>
                    The official formatted PDF edition is being prepared for download. You can read the complete verified text below.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
