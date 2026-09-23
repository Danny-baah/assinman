"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  HelpCircle,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { CONTACT_CHANNELS, ContactFormData } from "./types";

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactChannelsAndForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side preparation (no backend fake call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsPrepared(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsPrepared(false);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 border-b border-[#1b4d2e]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── SECTION 02: CONTACT INFORMATION (Left, 5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b4d2e]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                  REACH THE NETWORK
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#111827] font-normal tracking-tight mb-4">
                We&apos;re Here to <span className="italic text-[#1b4d2e]">Help</span>
              </h2>

              <p className="text-sm text-[#6b7280] font-light leading-relaxed mb-8">
                Connect with the appropriate alumni desks for membership support, general questions, and association development.
              </p>

              {/* Editorial Structured List */}
              <div className="border-t border-[#1b4d2e]/15">
                {CONTACT_CHANNELS.map((channel) => (
                  <div
                    key={channel.number}
                    className="py-6 border-b border-[#1b4d2e]/10 group transition-all duration-300 hover:bg-[#fbfaf7] px-2 -mx-2"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-1.5">
                      <span className="font-serif text-sm text-[#c59b4b] font-medium tracking-widest">
                        {channel.number}
                      </span>
                      <h3 className="text-xs font-bold tracking-[0.18em] text-[#1b4d2e] uppercase flex-1">
                        {channel.title}
                      </h3>
                      {channel.href && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#9ca3af] group-hover:text-[#1b4d2e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </div>

                    <p className="text-xs text-[#6b7280] font-light leading-relaxed mb-2">
                      {channel.description}
                    </p>

                    {channel.href ? (
                      <Link
                        href={channel.href}
                        className="inline-flex items-center gap-2 text-xs font-medium text-[#111827] hover:text-[#1b4d2e] transition-colors"
                      >
                        {channel.detailType === "email" && (
                          <Mail className="w-3.5 h-3.5 text-[#1b4d2e]" />
                        )}
                        <span>{channel.detail}</span>
                      </Link>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-xs text-[#374151]">
                        {channel.detailType === "location" && (
                          <MapPin className="w-3.5 h-3.5 text-[#1b4d2e]" />
                        )}
                        {channel.detailType === "info" && (
                          <HelpCircle className="w-3.5 h-3.5 text-[#1b4d2e]" />
                        )}
                        <span>{channel.detail}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Secretariat Status Notice */}
            <div className="mt-8 p-4 bg-[#fbfaf7] border border-[#1b4d2e]/10 text-xs text-[#4b5563]">
              <span className="font-semibold text-[#1b4d2e] uppercase tracking-wider block mb-1">
                Official Secretariat Hours
              </span>
              <p className="font-light text-[#6b7280]">
                Inquiries are monitored by the alumni executive committee. For urgent membership dues confirmation, use the direct Pay Dues verification channel.
              </p>
            </div>
          </div>

          {/* ── SECTION 03: SEND A MESSAGE (Right, 7 Cols) ── */}
          <div className="lg:col-span-7 bg-[#fbfaf7] p-6 sm:p-10 lg:p-12 border border-[#1b4d2e]/15 shadow-sm">
            
            {/* Form Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4b]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                  SEND A MESSAGE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#111827] font-normal tracking-tight mb-2">
                How Can We Help?
              </h2>
              <p className="text-sm text-[#4b5563] font-light">
                Send us a message and the appropriate team will get back to you.
              </p>
            </div>

            {/* UI-Only Success State */}
            {isPrepared ? (
              <div className="p-8 bg-white border border-[#1b4d2e]/20 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1b4d2e]" />
                </div>
                <h3 className="text-xl font-serif text-[#111827] mb-2">
                  Message Ready
                </h3>
                <p className="text-sm text-[#4b5563] font-light leading-relaxed max-w-md mx-auto mb-6">
                  Your message has been prepared successfully. Message delivery will be connected when the contact service is integrated.
                </p>

                {/* Prepared Message Summary Preview */}
                <div className="bg-[#fbfaf7] p-4 text-left border border-[#1b4d2e]/10 text-xs text-[#4b5563] space-y-1.5 mb-6 max-w-md mx-auto">
                  <div><strong className="text-[#1b4d2e]">From:</strong> {formData.fullName} ({formData.email})</div>
                  <div><strong className="text-[#1b4d2e]">Subject:</strong> {formData.subject}</div>
                  <div className="line-clamp-2"><strong className="text-[#1b4d2e]">Message:</strong> {formData.message}</div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1b4d2e] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#143a22] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Prepare Another Message</span>
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium tracking-wider uppercase text-[#374151] mb-2"
                    >
                      Full Name <span className="text-[#991b1b]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Kwame Asante"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName
                          ? "border-[#991b1b] focus:ring-[#991b1b]"
                          : "border-[#1b4d2e]/20 focus:border-[#1b4d2e] focus:ring-[#1b4d2e]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1 text-xs text-[#991b1b] mt-1.5 font-light">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium tracking-wider uppercase text-[#374151] mb-2"
                    >
                      Email Address <span className="text-[#991b1b]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. kwame@example.com"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? "border-[#991b1b] focus:ring-[#991b1b]"
                          : "border-[#1b4d2e]/20 focus:border-[#1b4d2e] focus:ring-[#1b4d2e]"
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-[#991b1b] mt-1.5 font-light">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium tracking-wider uppercase text-[#374151] mb-2"
                    >
                      Phone Number <span className="text-[#6b7280] lowercase text-[11px]">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 XX XXX XXXX"
                      className="w-full px-4 py-3 bg-white border border-[#1b4d2e]/20 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#1b4d2e] focus:ring-1 focus:ring-[#1b4d2e] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium tracking-wider uppercase text-[#374151] mb-2"
                    >
                      Subject <span className="text-[#991b1b]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Alumni Registration Inquiry"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-1 transition-colors ${
                        errors.subject
                          ? "border-[#991b1b] focus:ring-[#991b1b]"
                          : "border-[#1b4d2e]/20 focus:border-[#1b4d2e] focus:ring-[#1b4d2e]"
                      }`}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 text-xs text-[#991b1b] mt-1.5 font-light">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-wider uppercase text-[#374151] mb-2"
                  >
                    Message <span className="text-[#991b1b]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-1 transition-colors resize-y ${
                      errors.message
                        ? "border-[#991b1b] focus:ring-[#991b1b]"
                        : "border-[#1b4d2e]/20 focus:border-[#1b4d2e] focus:ring-[#1b4d2e]"
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-[#991b1b] mt-1.5 font-light">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1b4d2e] text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#143a22] transition-colors duration-200 shadow-md group disabled:opacity-75"
                  >
                    <span>{isSubmitting ? "Preparing..." : "Send Message"}</span>
                    <Send className="w-3.5 h-3.5 text-[#c59b4b] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
