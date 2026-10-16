"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What happens if I don't pay my annual dues?",
    answer:
      "Members who do not pay their annual dues lose their active membership status and cannot vote at the AGM or participate in official activities until dues are settled.",
  },
  {
    question: "How long does it take for my membership to be activated?",
    answer:
      "Once you submit your payment confirmation, the executive team will verify your transaction within 1–2 working days and notify you by phone or email.",
  },
  {
    question: "Can I pay dues on behalf of someone else?",
    answer:
      "Yes. When filling the confirmation form, enter the details of the member the payment is for. Also include their name in the MoMo reference.",
  },
  {
    question: "Is my payment information safe?",
    answer:
      "Yes. All payments are made directly through your own MoMo app. No financial details pass through this website — only your name and transaction reference number.",
  },
  {
    question: "If I pay lifetime membership, do I still need to pay annually?",
    answer:
      "No. Lifetime membership is a one-time payment that covers all future annual dues permanently.",
  },
  {
    question: "I lost my Transaction ID. What should I do?",
    answer:
      "Check your MoMo SMS inbox. If you still can't find it, contact us and we will help you resolve it.",
  },
];

export function PayDuesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={sectionRef}
      id="faqs"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div
            className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Common Questions
            </span>
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-4 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.75rem)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── Editorial Accordion List ──────────────────────────────── */}
        <div className="divide-y divide-[#1b4d2e]/15 border-y border-[#1b4d2e]/15">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-editorial text-lg sm:text-xl text-[#11161e] group-hover:text-[#1b4d2e] font-normal leading-snug transition-colors pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#1b4d2e]/20 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#1b4d2e] text-[#f8f5ee]"
                        : "bg-white/80 text-[#1b4d2e] group-hover:bg-[#1b4d2e]/10"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-3.5 pr-8 text-xs sm:text-sm text-[#465362] leading-relaxed font-light animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
