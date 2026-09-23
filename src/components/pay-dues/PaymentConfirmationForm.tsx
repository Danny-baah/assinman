"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home, MessageSquare, Check, ShieldCheck } from "lucide-react";
import { useInView } from "@/components/home/useInView";

interface ConfirmationData {
  fullName: string;
  phoneNumber: string;
  email: string;
  duesType: string;
  amountPaid: string;
  transactionId: string;
  yearGroup: string;
}

const INITIAL_DATA: ConfirmationData = {
  fullName: "",
  phoneNumber: "",
  email: "",
  duesType: "Annual Dues — GH₵100",
  amountPaid: "100",
  transactionId: "",
  yearGroup: "",
};

export function PaymentConfirmationForm({
  selectedDuesType,
  selectedAmount,
}: {
  selectedDuesType?: string;
  selectedAmount?: string;
}) {
  const [formData, setFormData] = useState<ConfirmationData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  const updateField = (field: keyof ConfirmationData, value: string) => {
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
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.phoneNumber.trim()) errs.phoneNumber = "Phone number is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.duesType) errs.duesType = "Please select the type of dues.";
    if (!formData.amountPaid.trim()) errs.amountPaid = "Amount paid is required.";
    if (!formData.transactionId.trim()) errs.transactionId = "MoMo Transaction ID is required.";
    if (!formData.yearGroup.trim()) errs.yearGroup = "Year Group / Batch is required.";

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
      id="confirmation-form"
      className="bg-[#f8f5ee] py-16 sm:py-24 border-t border-[#1b4d2e]/15 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="w-6 h-px bg-[#1b4d2e]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#1b4d2e]">
              After Payment
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
            <span className="italic font-light text-[#1b4d2e]">Payment</span>
          </h2>

          <p
            className={`text-[16px] sm:text-[17px] leading-relaxed text-[#465362] font-light transition-all duration-700 delay-200 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Already paid? Fill in the form below so we can verify your transaction and
            activate your membership within 1–2 working days.
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
              Payment Confirmation Received
            </h3>
            <p className="text-[15px] sm:text-[17px] text-[#465362] font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Thank you. Your payment details have been submitted for verification. The executive
              team will review your transaction and notify you within <strong>1–2 working days</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="confirmFullName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Full Name <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmFullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
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
                    htmlFor="confirmPhone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Phone Number <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmPhone"
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

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="confirmEmail"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Email Address <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.email ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Type of Dues */}
                <div>
                  <label
                    htmlFor="confirmDuesType"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Type of Dues <span className="text-[#a83232]">*</span>
                  </label>
                  <select
                    id="confirmDuesType"
                    value={formData.duesType}
                    onChange={(e) => updateField("duesType", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.duesType ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  >
                    <option value="Annual Dues — GH₵100">Annual Dues — GH₵100</option>
                    <option value="Lifetime Membership — GH₵500">Lifetime Membership — GH₵500</option>
                    <option value="Reunion Contribution">Reunion Contribution</option>
                  </select>
                  {errors.duesType && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.duesType}</p>
                  )}
                </div>

                {/* Amount Paid */}
                <div>
                  <label
                    htmlFor="confirmAmount"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Amount Paid (GH₵) <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmAmount"
                    type="number"
                    value={formData.amountPaid}
                    onChange={(e) => updateField("amountPaid", e.target.value)}
                    placeholder="e.g. 100"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.amountPaid ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.amountPaid && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.amountPaid}</p>
                  )}
                </div>

                {/* MoMo Transaction ID */}
                <div>
                  <label
                    htmlFor="confirmTxId"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    MoMo Transaction ID <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmTxId"
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

                {/* Year Group / Batch */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="confirmBatch"
                    className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                  >
                    Year Group / Batch <span className="text-[#a83232]">*</span>
                  </label>
                  <input
                    id="confirmBatch"
                    type="text"
                    value={formData.yearGroup}
                    onChange={(e) => updateField("yearGroup", e.target.value)}
                    placeholder="e.g. Class of 2022"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                      errors.yearGroup ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                    }`}
                  />
                  {errors.yearGroup && (
                    <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.yearGroup}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-sm bg-[#1b4d2e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Payment Confirmation"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
