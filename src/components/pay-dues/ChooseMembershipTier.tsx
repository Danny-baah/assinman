"use client";

import React, { useState, useRef } from "react";
import { Check, Copy, Sparkles, ArrowDown, CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface Tier {
  id: "annual" | "lifetime" | "reunion";
  name: string;
  price: string;
  cadence: string;
  desc: string;
  benefits: string[];
  buttonText: string;
  badge?: string;
  defaultAmount: string;
}

const TIERS: Tier[] = [
  {
    id: "annual",
    name: "Annual Dues",
    price: "GH₵100",
    cadence: "per year",
    desc: "Full membership for one year. Must be renewed annually to remain an active member in good standing.",
    benefits: [
      "Active membership status",
      "Voting rights at AGM",
      "Access to all events & webinars",
      "Access to verified alumni directory",
    ],
    buttonText: "Select Annual",
    defaultAmount: "100",
  },
  {
    id: "lifetime",
    name: "Lifetime Membership",
    price: "GH₵500",
    cadence: "one-time payment",
    badge: "Best Value",
    desc: "Pay once and enjoy full membership privileges for life. No annual renewals required.",
    benefits: [
      "Permanent membership for life",
      "Voting rights at all AGMs",
      "Access to all events for life",
      "Priority recognition at reunions",
    ],
    buttonText: "Select Lifetime",
    defaultAmount: "500",
  },
  {
    id: "reunion",
    name: "Reunion Contribution",
    price: "Custom",
    cadence: "any amount",
    desc: "Contribute to your year group's reunion fund. Any amount is welcome and directly supports batch activities.",
    benefits: [
      "Supports year group activities",
      "Funds reunion gala & programs",
      "Open to all alumni batches",
      "Any contribution amount welcome",
    ],
    buttonText: "Make Contribution",
    defaultAmount: "50",
  },
];

export function ChooseMembershipTier({
  onSelectTier,
  selectedTierId,
}: {
  onSelectTier?: (tierId: string, amount: string) => void;
  selectedTierId?: string;
}) {
  const [activeTier, setActiveTier] = useState<"annual" | "lifetime" | "reunion">("lifetime");
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  const currentTierObj = TIERS.find((t) => t.id === activeTier) || TIERS[1];

  const handleSelect = (tier: Tier) => {
    setActiveTier(tier.id);
    if (onSelectTier) {
      onSelectTier(tier.name, tier.defaultAmount);
    }
    const paymentEl = document.getElementById("payment-instructions");
    if (paymentEl) {
      paymentEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToConfirmation = () => {
    const el = document.getElementById("confirmation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="choose-tier"
      className="bg-[#f8f5ee] py-16 sm:py-24 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              Choose Your Tier
            </span>
          </div>

          <h2
            className={`font-editorial tracking-[-0.03em] leading-[1.04] font-normal text-[#11161e] mb-5 transition-all duration-800 delay-100 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.85rem)",
            }}
          >
            Select Your
            <br />
            <span className="italic font-light text-[#1b4d2e]">Membership Dues</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[18px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Choose the membership option that works for you. Every contribution
            strengthens the network.
          </p>
        </div>

        {/* ── 3 Luxury Membership Tiers ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16">
          {TIERS.map((tier) => {
            const isSelected = activeTier === tier.id;
            const isFeatured = tier.id === "lifetime";

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-9 ${
                  isFeatured
                    ? "bg-white border-2 border-[#1b4d2e] shadow-lg ring-1 ring-[#1b4d2e]/20"
                    : "bg-white/80 border border-[#1b4d2e]/15 shadow-xs hover:border-[#1b4d2e]/30"
                } ${isSelected ? "ring-2 ring-[#1b4d2e]" : ""}`}
              >
                {/* Badge if present */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-7 px-3 py-1 rounded-full bg-[#1b4d2e] text-[#e2b960] text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="font-editorial text-2xl text-[#11161e] font-normal tracking-tight">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#5c6975] leading-relaxed mb-6 font-light">
                    {tier.desc}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-[#1b4d2e]/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-editorial text-4xl sm:text-5xl font-normal text-[#1b4d2e] tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-medium text-[#738290] uppercase tracking-wider">
                        / {tier.cadence}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#11161e] block mb-2">
                      Included Privileges:
                    </span>
                    {tier.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#242f3d]">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selection Action Button */}
                <button
                  type="button"
                  onClick={() => handleSelect(tier)}
                  className={`w-full py-3.5 px-6 rounded-sm text-xs sm:text-[12.5px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-[#1b4d2e] text-white shadow-sm"
                      : isFeatured
                      ? "bg-[#1b4d2e] text-white hover:bg-[#112d1c]"
                      : "border border-[#11161e]/25 text-[#11161e] hover:bg-[#11161e] hover:text-[#f8f5ee]"
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  <span>{isSelected ? "Selected" : tier.buttonText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* ── SECTION 4: REFINED MOMO PAYMENT INSTRUCTIONS PANEL ───────── */}
        <div
          id="payment-instructions"
          className="scroll-mt-28 p-8 sm:p-12 rounded-2xl bg-white border border-[#1b4d2e]/20 shadow-md animate-fadeIn relative overflow-hidden"
        >
          {/* Subtle watermarked emblem */}
          <div className="absolute right-0 top-0 p-8 opacity-5 pointer-events-none">
            <CreditCard className="w-48 h-48" />
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Panel Header */}
            <div className="border-b border-[#1b4d2e]/15 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                  Payment Step
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                  Complete Your Payment
                </h3>
                <p className="text-xs sm:text-sm text-[#5c6975] mt-1 font-light">
                  Send your membership dues via Mobile Money (MoMo), then fill the confirmation form below.
                </p>
              </div>

              {/* Selected Tier Badge */}
              <div className="p-3 rounded-lg bg-[#1b4d2e]/5 border border-[#1b4d2e]/15 self-start sm:self-auto shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#738290] block">
                  Active Selection:
                </span>
                <span className="text-sm font-bold text-[#1b4d2e]">
                  {currentTierObj.name} ({currentTierObj.price})
                </span>
              </div>
            </div>

            {/* MoMo Account Box */}
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
                  {currentTierObj.price}
                </span>
              </div>
            </div>

            {/* Payment Reference Instructions Note */}
            <div className="p-4 rounded-xl bg-[#1b4d2e]/5 border border-[#1b4d2e]/20 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                Important Payment Note &amp; Reference:
              </span>
              <p className="text-xs sm:text-sm text-[#242f3d] leading-relaxed">
                In the reference / note field of your MoMo transaction, enter your{" "}
                <strong>Full Name</strong> and <strong>Dues Type</strong> (e.g.,{" "}
                <span className="font-mono text-[#1b4d2e] font-semibold bg-white/70 px-1.5 py-0.5 rounded border border-[#1b4d2e]/15">
                  Ama Boateng - Annual Dues
                </span>
                ). Then copy your <strong>Transaction ID</strong> from your confirmation SMS to enter in the form below.
              </p>
            </div>

            {/* 4 Steps Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { step: "01", text: "Select your membership" },
                { step: "02", text: "Send payment via MoMo" },
                { step: "03", text: "Copy your Transaction ID" },
                { step: "04", text: "Confirm payment below" },
              ].map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="font-editorial text-base text-[#1b4d2e] font-bold shrink-0">
                    {s.step}
                  </span>
                  <span className="text-[#465362] leading-snug">{s.text}</span>
                </div>
              ))}
            </div>

            {/* Jump Button to Confirmation Form */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1b4d2e]/15">
              <button
                type="button"
                onClick={scrollToConfirmation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#112d1c] transition-all shadow-xs"
              >
                <span>I Have Paid — Go to Confirmation Form</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              {/* Coming soon notice */}
              <span className="text-[11px] text-[#738290] text-center sm:text-right font-light">
                <strong>More payment options on the way:</strong> Bank transfer &amp; automated channels coming soon.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
