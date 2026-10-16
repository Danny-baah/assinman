"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Check, Home, MessageSquare, ShieldCheck, Heart, EyeOff } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface DonationFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  purpose: string;
  amount: string;
  transactionId: string;
  isAnonymous: boolean;
}

const INITIAL_STATE: DonationFormState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  purpose: "Scholarship Fund",
  amount: "100",
  transactionId: "",
  isAnonymous: false,
};

const PURPOSES = [
  "Scholarship Fund",
  "School Development",
  "Alumni Activities & Outreach",
  "General Donation",
];

export function DonationConfirmationForm({
  selectedAmount,
}: {
  selectedAmount?: string;
}) {
  const [formData, setFormData] = useState<DonationFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  const updateField = (field: keyof DonationFormState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.isAnonymous && !formData.fullName.trim()) {
      errs.fullName = "Full name is required (or select 'Keep me anonymous').";
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required for transaction verification.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.purpose) {
      errs.purpose = "Please select a donation purpose.";
    }

    if (!formData.amount.trim()) {
      errs.amount = "Amount donated is required.";
    }

    if (!formData.transactionId.trim()) {
      errs.transactionId = "MoMo Transaction ID is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <section
      ref={sectionRef}
      id="confirm-donation"
      className="bg-[#f8f5ee] py-12 sm:py-16 lg:py-20 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              After Giving
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
            Confirm Your
            <br />
            <span className="italic font-light text-[#1b4d2e]">Donation</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[17px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Already sent your donation? Let us know so we can acknowledge your contribution.
            Anonymous donations are always welcome.
          </p>
        </div>

        {/* ── Form or Success Box ──────────────────────────────────── */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-white/90 border border-[#1b4d2e]/20 shadow-md text-center animate-fadeIn">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
            </div>

            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
              Submission Received
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight mb-4">
              Donation Confirmation Received
            </h3>
            <p className="text-[15px] sm:text-[17px] text-[#465362] font-light max-w-lg mx-auto mb-4 leading-relaxed">
              Thank you for supporting the Assinman Alumni Network. Your contribution has been
              received for official acknowledgment.
            </p>
            {formData.isAnonymous && (
              <p className="text-xs text-[#1b4d2e] font-medium mb-8">
                Your donation has been recorded without displaying your name publicly.
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#1b4d2e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#112d1c] transition-all shadow-sm"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-[#11161e]/20 text-[#11161e] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#11161e] hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-white/85 border border-[#1b4d2e]/15 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Anonymous Toggle Box */}
              <div className="p-4 rounded-xl bg-[#1b4d2e]/5 border border-[#1b4d2e]/15 flex items-start gap-3">
                <input
                  id="anonymousToggle"
                  type="checkbox"
                  checked={formData.isAnonymous}
                  onChange={(e) => updateField("isAnonymous", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#1b4d2e] border-[#1b4d2e]/30 focus:ring-[#1b4d2e]"
                />
                <label htmlFor="anonymousToggle" className="cursor-pointer select-none">
                  <span className="text-xs sm:text-sm font-bold text-[#11161e] flex items-center gap-1.5">
                    <EyeOff className="w-3.5 h-3.5 text-[#1b4d2e]" />
                    Keep me anonymous
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#5c6975] block mt-0.5 font-light">
                    Your name will not be recorded or shared publicly in any donor recognitions.
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Full Name (disabled or secondary if anonymous) */}
                <div>
                  <label
                    htmlFor="donFullName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Full Name {!formData.isAnonymous && <span className="text-[#a83232]">*</span>}
                  </label>
                  <input
                    id="donFullName"
                    type="text"
                    disabled={formData.isAnonymous}
                    value={formData.isAnonymous ? "Anonymous Donor" : formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] disabled:bg-gray-100 disabled:text-gray-400 ${
                      errors.fullName ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="donPhone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Phone Number <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="donPhone"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => updateField("phoneNumber", e.target.value)}
                    placeholder="+233 24 000 0000"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.phoneNumber ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Email Address (optional) */}
                <div>
                  <label
                    htmlFor="donEmail"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Email Address <span className="text-[#738290] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="donEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40 text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Donation Purpose */}
                <div>
                  <label
                    htmlFor="donPurpose"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Donation Purpose <span className="text-[#a83232]">*</span>
                  </label>
                  <select
                    id="donPurpose"
                    value={formData.purpose}
                    onChange={(e) => updateField("purpose", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40 text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                  >
                    {PURPOSES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount Donated */}
                <div>
                  <label
                    htmlFor="donAmount"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Amount Donated (GH₵) <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="donAmount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => updateField("amount", e.target.value)}
                    placeholder="e.g. 100"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.amount ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.amount && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.amount}</p>
                  )}
                </div>

                {/* MoMo Transaction ID */}
                <div>
                  <label
                    htmlFor="donTxId"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    MoMo Transaction ID <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="donTxId"
                    type="text"
                    value={formData.transactionId}
                    onChange={(e) => updateField("transactionId", e.target.value)}
                    placeholder="e.g. A123456789"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.transactionId ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.transactionId && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.transactionId}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-sm bg-[#1b4d2e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Donation Confirmation"}</span>
                  <Heart className="w-4 h-4 fill-white/20" />
                </button>

                {/* Support note */}
                <div className="text-xs text-[#5c6975] flex items-center gap-1.5">
                  <span>Having issues?</span>
                  <Link href="/contact" className="font-semibold text-[#1b4d2e] underline hover:text-[#112d1c]">
                    Contact Support
                  </Link>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
