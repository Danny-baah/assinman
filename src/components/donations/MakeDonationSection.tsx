"use client";

import React, { useState, useRef } from "react";
import { Check, Copy, ArrowDown, CreditCard, ShieldCheck, Heart } from "lucide-react";
import { useInView } from "@/components/home/useInView";

const PRESET_AMOUNTS = [
  { label: "GH₵50", value: "50" },
  { label: "GH₵100", value: "100" },
  { label: "GH₵250", value: "250" },
  { label: "GH₵500", value: "500" },
  { label: "GH₵1,000", value: "1000" },
];

export function MakeDonationSection({
  onSelectAmount,
}: {
  onSelectAmount?: (amount: string) => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  const activeAmountDisplay = isCustom
    ? customAmount ? `GH₵${customAmount}` : "Custom Amount"
    : `GH₵${selectedAmount}`;

  const handleSelectPreset = (val: string) => {
    setIsCustom(false);
    setSelectedAmount(val);
    if (onSelectAmount) onSelectAmount(val);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
    if (onSelectAmount) onSelectAmount(e.target.value);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToConfirmation = () => {
    const el = document.getElementById("confirm-donation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="make-donation"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Make a Contribution
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-4 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.85rem)",
            }}
          >
            Choose Your Giving
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every amount matters. Choose what you would like to give and complete your donation via MoMo.
          </p>
        </div>

        {/* ── Amount Selector Box ──────────────────────────────────── */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#1b4d2e]/15 shadow-xs max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#11161e] block mb-4">
            Select an Amount:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {PRESET_AMOUNTS.map((amt) => {
              const isSelected = !isCustom && selectedAmount === amt.value;
              return (
                <button
                  key={amt.value}
                  type="button"
                  onClick={() => handleSelectPreset(amt.value)}
                  className={`py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-[#1b4d2e] text-white border-[#1b4d2e] shadow-xs"
                      : "bg-white text-[#11161e] border-[#1b4d2e]/20 hover:border-[#1b4d2e]/50"
                  }`}
                >
                  {amt.label}
                </button>
              );
            })}

            {/* Custom Amount Selector Tab */}
            <button
              type="button"
              onClick={() => setIsCustom(true)}
              className={`py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                isCustom
                  ? "bg-[#1b4d2e] text-white border-[#1b4d2e] shadow-xs"
                  : "bg-white text-[#11161e] border-[#1b4d2e]/20 hover:border-[#1b4d2e]/50"
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Input Field (if selected) */}
          {isCustom && (
            <div className="mt-4 pt-4 border-t border-[#1b4d2e]/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fadeIn">
              <label htmlFor="customInput" className="text-xs font-bold uppercase tracking-wider text-[#11161e] shrink-0">
                Enter Custom Amount (GH₵):
              </label>
              <div className="relative w-full sm:w-64">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#738290] font-medium">
                  GH₵
                </span>
                <input
                  id="customInput"
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="e.g. 750"
                  className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-[#1b4d2e]/30 text-sm text-[#11161e] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* ── MoMo Payment Instructions Panel ───────────────────────── */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#1b4d2e]/20 shadow-md relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            {/* Header */}
            <div className="border-b border-[#1b4d2e]/15 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                  MoMo Transfer
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                  Complete Your Donation
                </h3>
                <p className="text-xs sm:text-sm text-[#5c6975] mt-1 font-light">
                  Send your chosen amount via Mobile Money, then return here to confirm your contribution.
                </p>
              </div>

              {/* Amount Tag */}
              <div className="p-3 rounded-lg bg-[#1b4d2e]/5 border border-[#1b4d2e]/15 self-start sm:self-auto shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#738290] block">
                  Chosen Donation:
                </span>
                <span className="text-base font-bold text-[#1b4d2e]">
                  {activeAmountDisplay}
                </span>
              </div>
            </div>

            {/* Account Details Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* MoMo Number */}
              <div className="p-4 rounded-xl bg-[#f8f5ee] border border-[#1b4d2e]/15">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#738290] block mb-1">
                  MoMo Number
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-bold text-base text-[#11161e]">
                    +233 XX XXX XXXX
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("+233 XX XXX XXXX")}
                    className="p-1.5 rounded bg-white hover:bg-[#1b4d2e] hover:text-white text-[#1b4d2e] transition-colors border border-[#1b4d2e]/20"
                    title="Copy MoMo Number"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-bold text-[#1b4d2e] animate-fadeIn block mt-1">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Account Name */}
              <div className="p-4 rounded-xl bg-[#f8f5ee] border border-[#1b4d2e]/15">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#738290] block mb-1">
                  Account Name
                </span>
                <span className="font-semibold text-sm text-[#11161e] block">
                  Assinman Alumni Network
                </span>
              </div>

              {/* Amount */}
              <div className="p-4 rounded-xl bg-[#f8f5ee] border border-[#1b4d2e]/15">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#738290] block mb-1">
                  Amount
                </span>
                <span className="font-editorial text-xl font-bold text-[#1b4d2e] block">
                  {activeAmountDisplay}
                </span>
              </div>
            </div>

            {/* Reference Note */}
            <div className="p-4 rounded-xl bg-[#1b4d2e]/5 border border-[#1b4d2e]/20 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                Payment Reference Note:
              </span>
              <p className="text-xs sm:text-sm text-[#242f3d] leading-relaxed">
                In the reference / note field, enter your name and <strong>&ldquo;Donation&rdquo;</strong> — or write{" "}
                <span className="font-mono text-[#1b4d2e] font-semibold bg-white/70 px-1.5 py-0.5 rounded border border-[#1b4d2e]/15">
                  Anonymous - Donation
                </span>{" "}
                if you prefer to remain anonymous. Then copy your <strong>Transaction ID</strong> from the MoMo SMS and use it in the confirmation form below.
              </p>
            </div>

            {/* 4 Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { step: "01", text: "Choose your amount" },
                { step: "02", text: "Send via MoMo" },
                { step: "03", text: "Copy Transaction ID" },
                { step: "04", text: "Confirm your donation" },
              ].map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="font-editorial text-base text-[#1b4d2e] font-bold shrink-0">
                    {s.step}
                  </span>
                  <span className="text-[#465362] leading-snug">{s.text}</span>
                </div>
              ))}
            </div>

            {/* Jump Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1b4d2e]/15">
              <button
                type="button"
                onClick={scrollToConfirmation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#112d1c] transition-all shadow-xs"
              >
                <span>I Have Donated — Go to Confirmation Form</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-[#738290] text-center sm:text-right font-light">
                <strong>More payment options coming soon:</strong> Bank transfer &amp; additional channels being set up.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
