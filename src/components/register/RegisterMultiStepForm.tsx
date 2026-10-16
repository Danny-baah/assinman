"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  X,
  Edit3,
  Sparkles,
  CreditCard,
  Home,
  Check,
} from "lucide-react";

interface FormData {
  // Step 1: Personal
  fullName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  photoUrl: string | null;
  photoFileName: string | null;

  // Step 2: Academic
  yearAdmitted: string;
  yearGraduated: string;
  programme: string;
  batch: string;
  studentId: string;

  // Step 3: Employment
  occupation: string;
  employer: string;
  country: string;
  region: string;

  // Step 4: Agreement
  termsAgreed: boolean;
}

const INITIAL_DATA: FormData = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  phoneNumber: "",
  whatsappNumber: "",
  email: "",
  photoUrl: null,
  photoFileName: null,

  yearAdmitted: "",
  yearGraduated: "",
  programme: "",
  batch: "",
  studentId: "",

  occupation: "",
  employer: "",
  country: "Ghana",
  region: "",

  termsAgreed: false,
};

const GHANA_REGIONS = [
  "Greater Accra",
  "Ashanti",
  "Central",
  "Western",
  "Eastern",
  "Northern",
  "Upper East",
  "Upper West",
  "Volta",
  "Brong-Ahafo",
  "Oti",
  "Bono East",
  "Ahafo",
  "Savannah",
  "North East",
  "Western North",
];

const COUNTRIES = [
  "Ghana",
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "Other",
];

const PROGRAMMES = [
  "General Nursing",
  "Midwifery",
  "Other",
];

const STEPS = [
  { id: 1, label: "Personal Info", icon: User },
  { id: 2, label: "Academic Details", icon: GraduationCap },
  { id: 3, label: "Employment", icon: Briefcase },
  { id: 4, label: "Review & Submit", icon: CheckCircle2 },
];

export function RegisterMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: "Photo file size must be less than 2MB." }));
      return;
    }

    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setErrors((prev) => ({ ...prev, photo: "Please upload a valid JPG or PNG image." }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      updateField("photoUrl", event.target?.result as string);
      updateField("photoFileName", file.name);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.photo;
        return copy;
      });
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    updateField("photoUrl", null);
    updateField("photoFileName", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validation per step
  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
      if (!formData.gender) errs.gender = "Please select your gender.";
      if (!formData.dateOfBirth) errs.dateOfBirth = "Date of birth is required.";
      if (!formData.phoneNumber.trim()) errs.phoneNumber = "Phone number is required.";
      if (!formData.email.trim()) {
        errs.email = "Email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
    } else if (step === 2) {
      if (!formData.yearAdmitted.trim()) errs.yearAdmitted = "Year admitted is required.";
      if (!formData.yearGraduated.trim()) errs.yearGraduated = "Year graduated is required.";
      if (!formData.programme) errs.programme = "Please select your programme.";
      if (!formData.batch.trim()) errs.batch = "Batch / Year Group is required.";
    } else if (step === 3) {
      if (!formData.occupation.trim()) errs.occupation = "Current occupation is required.";
      if (!formData.employer.trim()) errs.employer = "Workplace / Employer is required.";
      if (!formData.country) errs.country = "Please select your country of residence.";
      if (formData.country === "Ghana" && !formData.region) {
        errs.region = "Please select your region in Ghana.";
      }
    } else if (step === 4) {
      if (!formData.termsAgreed) {
        errs.termsAgreed = "You must agree to the terms to complete registration.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 220, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 220, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 160, behavior: "smooth" });
    }, 900);
  };

  return (
    <section className="bg-[#f8f5ee] pb-12 sm:pb-16 lg:pb-20 pt-2 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Success State */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-white/90 border border-[#1b4d2e]/20 shadow-md text-center animate-fadeIn">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
            </div>

            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-2">
              Registration Successful
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#11161e] font-normal tracking-tight mb-4">
              Welcome to the AAN Family!
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#465362] font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Thank you for registering with the Assinman Alumni Network. Your application
              has been received and will be reviewed by our executive team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pay-dues"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#1b4d2e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#112d1c] transition-all shadow-sm"
              >
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Pay Dues</span>
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-[#11161e]/20 text-[#11161e] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#11161e] hover:text-white transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* ── Multi-Step Progress Indicator ──────────────────────── */}
            {/* Desktop Stepper */}
            <div className="hidden sm:block mb-10 pb-6 border-b border-[#1b4d2e]/15">
              <div className="grid grid-cols-4 gap-4 relative">
                {STEPS.map((s) => {
                  const isActive = currentStep === s.id;
                  const isCompleted = currentStep > s.id;
                  const Icon = s.icon;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        if (currentStep > s.id) setCurrentStep(s.id);
                      }}
                      className={`text-left group transition-all flex flex-col ${
                        isActive
                          ? "opacity-100"
                          : isCompleted
                          ? "opacity-80 hover:opacity-100 cursor-pointer"
                          : "opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isActive
                              ? "bg-[#1b4d2e] text-white ring-4 ring-[#1b4d2e]/15 shadow-xs"
                              : isCompleted
                              ? "bg-[#1b4d2e] text-white"
                              : "bg-[#1b4d2e]/10 text-[#5c6975]"
                          }`}
                        >
                          {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : `0${s.id}`}
                        </div>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider truncate ${
                            isActive ? "text-[#1b4d2e]" : "text-[#5c6975]"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {/* Step Progress Line */}
                      <div
                        className={`h-1 w-full rounded-full transition-all ${
                          isActive
                            ? "bg-[#1b4d2e]"
                            : isCompleted
                            ? "bg-[#1b4d2e]/70"
                            : "bg-[#1b4d2e]/10"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Stepper Header */}
            <div className="sm:hidden mb-6 p-4 rounded-xl bg-white/80 border border-[#1b4d2e]/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b4d2e] block mb-0.5">
                  Step {currentStep} of 4
                </span>
                <span className="text-sm font-bold text-[#11161e]">
                  {STEPS.find((s) => s.id === currentStep)?.label}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`h-2 rounded-full transition-all ${
                      stepNum === currentStep
                        ? "w-6 bg-[#1b4d2e]"
                        : stepNum < currentStep
                        ? "w-2.5 bg-[#1b4d2e]/60"
                        : "w-2.5 bg-[#1b4d2e]/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── Form Stage Container ────────────────────────────── */}
            <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-white/85 border border-[#1b4d2e]/15 shadow-sm">
              <form onSubmit={handleSubmit} noValidate>
                {/* ══ STEP 1: PERSONAL INFORMATION ════════════════════ */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                        Step 01
                      </span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                        Personal Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Full Name */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Full Name <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                          placeholder="e.g. Abena Mensah"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.fullName ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Gender */}
                      <div>
                        <label
                          htmlFor="gender"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Gender <span className="text-[#a83232]">*</span>
                        </label>
                        <select
                          id="gender"
                          value={formData.gender}
                          onChange={(e) => updateField("gender", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.gender ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        >
                          <option value="">Select gender</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        {errors.gender && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.gender}</p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Date of Birth <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateField("dateOfBirth", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.dateOfBirth ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.dateOfBirth && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.dateOfBirth}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Phone Number <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="phoneNumber"
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

                      {/* WhatsApp Number */}
                      <div>
                        <label
                          htmlFor="whatsappNumber"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          WhatsApp Number{" "}
                          <span className="text-[#738290] font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          id="whatsappNumber"
                          type="tel"
                          value={formData.whatsappNumber}
                          onChange={(e) => updateField("whatsappNumber", e.target.value)}
                          placeholder="+233 24 000 0000 (if different)"
                          className="w-full px-4 py-3 rounded-lg border border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40 text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                        />
                        <p className="mt-1 text-[11px] text-[#738290]">
                          Leave blank if same as phone number
                        </p>
                      </div>

                      {/* Email Address */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Email Address <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="email"
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

                      {/* Profile Photo (Optional) */}
                      <div className="sm:col-span-2 pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2">
                          Profile Photo{" "}
                          <span className="text-[#738290] font-normal lowercase">(optional)</span>
                        </label>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          id="profilePhotoUpload"
                        />

                        {formData.photoUrl ? (
                          <div className="p-4 rounded-xl border border-[#1b4d2e]/20 bg-[#1b4d2e]/5 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#1b4d2e]/20">
                                <Image
                                  src={formData.photoUrl}
                                  alt="Uploaded profile preview"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-[#11161e] block truncate max-w-xs">
                                  {formData.photoFileName || "Profile Photo"}
                                </span>
                                <span className="text-[11px] text-[#1b4d2e] font-medium">
                                  Ready to submit
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="px-3 py-1.5 rounded text-xs font-semibold text-[#1b4d2e] hover:bg-[#1b4d2e]/10 transition-colors"
                              >
                                Replace
                              </button>
                              <button
                                type="button"
                                onClick={removePhoto}
                                className="p-1.5 rounded-full text-[#a83232] hover:bg-red-100 transition-colors"
                                aria-label="Remove photo"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full p-6 border-2 border-dashed border-[#1b4d2e]/20 hover:border-[#1b4d2e]/50 rounded-xl bg-white/50 hover:bg-white text-center transition-all flex flex-col items-center justify-center group"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#1b4d2e]/10 text-[#1b4d2e] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                              <Upload className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#11161e]">
                              Click to upload your photo
                            </span>
                            <span className="text-[11px] text-[#738290] mt-0.5">
                              JPG or PNG, max 2MB
                            </span>
                          </button>
                        )}
                        {errors.photo && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.photo}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ══ STEP 2: ACADEMIC DETAILS ════════════════════════ */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                        Step 02
                      </span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                        Academic Details
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Year Admitted */}
                      <div>
                        <label
                          htmlFor="yearAdmitted"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Year Admitted <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="yearAdmitted"
                          type="text"
                          value={formData.yearAdmitted}
                          onChange={(e) => updateField("yearAdmitted", e.target.value)}
                          placeholder="e.g. 2019"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.yearAdmitted ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.yearAdmitted && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.yearAdmitted}</p>
                        )}
                      </div>

                      {/* Year Graduated */}
                      <div>
                        <label
                          htmlFor="yearGraduated"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Year Graduated <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="yearGraduated"
                          type="text"
                          value={formData.yearGraduated}
                          onChange={(e) => updateField("yearGraduated", e.target.value)}
                          placeholder="e.g. 2022"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.yearGraduated ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.yearGraduated && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.yearGraduated}</p>
                        )}
                      </div>

                      {/* Programme / Course */}
                      <div>
                        <label
                          htmlFor="programme"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Programme / Course <span className="text-[#a83232]">*</span>
                        </label>
                        <select
                          id="programme"
                          value={formData.programme}
                          onChange={(e) => updateField("programme", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.programme ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        >
                          <option value="">Select programme</option>
                          {PROGRAMMES.map((prog) => (
                            <option key={prog} value={prog}>
                              {prog}
                            </option>
                          ))}
                        </select>
                        {errors.programme && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.programme}</p>
                        )}
                      </div>

                      {/* Batch / Year Group */}
                      <div>
                        <label
                          htmlFor="batch"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Batch / Year Group <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="batch"
                          type="text"
                          value={formData.batch}
                          onChange={(e) => updateField("batch", e.target.value)}
                          placeholder="e.g. Class of 2022"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.batch ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.batch && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.batch}</p>
                        )}
                      </div>

                      {/* Student ID (Optional) */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="studentId"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Student ID{" "}
                          <span className="text-[#738290] font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          id="studentId"
                          type="text"
                          value={formData.studentId}
                          onChange={(e) => updateField("studentId", e.target.value)}
                          placeholder="Your student ID if you remember it"
                          className="w-full px-4 py-3 rounded-lg border border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40 text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ══ STEP 3: EMPLOYMENT DETAILS ══════════════════════ */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                        Step 03
                      </span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                        Employment Details
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Current Occupation */}
                      <div>
                        <label
                          htmlFor="occupation"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Current Occupation <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="occupation"
                          type="text"
                          value={formData.occupation}
                          onChange={(e) => updateField("occupation", e.target.value)}
                          placeholder="e.g. Staff Nurse, Midwife"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.occupation ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.occupation && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.occupation}</p>
                        )}
                      </div>

                      {/* Workplace / Employer */}
                      <div>
                        <label
                          htmlFor="employer"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Workplace / Employer <span className="text-[#a83232]">*</span>
                        </label>
                        <input
                          id="employer"
                          type="text"
                          value={formData.employer}
                          onChange={(e) => updateField("employer", e.target.value)}
                          placeholder="e.g. Korle Bu Teaching Hospital"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.employer ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        />
                        {errors.employer && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.employer}</p>
                        )}
                      </div>

                      {/* Country of Residence */}
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Country of Residence <span className="text-[#a83232]">*</span>
                        </label>
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => updateField("country", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.country ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        >
                          <option value="">Select country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.country && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.country}</p>
                        )}
                      </div>

                      {/* Region (if in Ghana) */}
                      <div>
                        <label
                          htmlFor="region"
                          className="block text-xs font-bold uppercase tracking-wider text-[#11161e] mb-2"
                        >
                          Region (if in Ghana){" "}
                          {formData.country === "Ghana" && <span className="text-[#a83232]">*</span>}
                        </label>
                        <select
                          id="region"
                          value={formData.region}
                          onChange={(e) => updateField("region", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#11161e] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] ${
                            errors.region ? "border-[#a83232] bg-red-50/20" : "border-[#1b4d2e]/20 hover:border-[#1b4d2e]/40"
                          }`}
                        >
                          <option value="">Select region</option>
                          {GHANA_REGIONS.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                        <p className="mt-1 text-[11px] text-[#738290]">
                          Select your region if you currently reside in Ghana.
                        </p>
                        {errors.region && (
                          <p className="mt-1.5 text-xs text-[#a83232] font-medium">{errors.region}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ══ STEP 4: REVIEW & SUBMIT ═════════════════════════ */}
                {currentStep === 4 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="border-b border-[#1b4d2e]/15 pb-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e] block mb-1">
                        Step 04
                      </span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                        Review Your Registration
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5c6975] mt-1">
                        Please review your details before final submission. Click &ldquo;Edit&rdquo; to modify any section.
                      </p>
                    </div>

                    {/* Summary Blocks */}
                    <div className="space-y-4">
                      {/* Personal Info Summary */}
                      <div className="p-5 rounded-xl bg-white border border-[#1b4d2e]/15 shadow-xs">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b4d2e]/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e]">
                            Personal Information
                          </span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b4d2e] hover:text-[#112d1c]"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <span className="text-[#738290] block">Full Name:</span>
                            <span className="font-semibold text-[#11161e]">{formData.fullName || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Gender:</span>
                            <span className="font-semibold text-[#11161e]">{formData.gender || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Date of Birth:</span>
                            <span className="font-semibold text-[#11161e]">{formData.dateOfBirth || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Phone Number:</span>
                            <span className="font-semibold text-[#11161e]">{formData.phoneNumber || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">WhatsApp:</span>
                            <span className="font-semibold text-[#11161e]">{formData.whatsappNumber || "Same as phone"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Email:</span>
                            <span className="font-semibold text-[#11161e]">{formData.email || "—"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Academic Details Summary */}
                      <div className="p-5 rounded-xl bg-white border border-[#1b4d2e]/15 shadow-xs">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b4d2e]/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e]">
                            Academic Details
                          </span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b4d2e] hover:text-[#112d1c]"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <span className="text-[#738290] block">Year Admitted:</span>
                            <span className="font-semibold text-[#11161e]">{formData.yearAdmitted || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Year Graduated:</span>
                            <span className="font-semibold text-[#11161e]">{formData.yearGraduated || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Programme:</span>
                            <span className="font-semibold text-[#11161e]">{formData.programme || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Batch:</span>
                            <span className="font-semibold text-[#11161e]">{formData.batch || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Student ID:</span>
                            <span className="font-semibold text-[#11161e]">{formData.studentId || "—"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Employment Summary */}
                      <div className="p-5 rounded-xl bg-white border border-[#1b4d2e]/15 shadow-xs">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b4d2e]/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e]">
                            Employment Details
                          </span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b4d2e] hover:text-[#112d1c]"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <span className="text-[#738290] block">Occupation:</span>
                            <span className="font-semibold text-[#11161e]">{formData.occupation || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Workplace / Employer:</span>
                            <span className="font-semibold text-[#11161e]">{formData.employer || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Country:</span>
                            <span className="font-semibold text-[#11161e]">{formData.country || "—"}</span>
                          </div>
                          <div>
                            <span className="text-[#738290] block">Region:</span>
                            <span className="font-semibold text-[#11161e]">{formData.region || "—"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms Agreement Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.termsAgreed}
                          onChange={(e) => updateField("termsAgreed", e.target.checked)}
                          className="mt-1 w-4 h-4 rounded text-[#1b4d2e] border-[#1b4d2e]/30 focus:ring-[#1b4d2e]"
                        />
                        <span className="text-xs sm:text-sm text-[#242f3d] leading-relaxed">
                          By submitting this form, you agree to become a member of the Assinman
                          Alumni Network and abide by its constitution and code of conduct.
                        </span>
                      </label>
                      {errors.termsAgreed && (
                        <p className="mt-2 text-xs text-[#a83232] font-medium">
                          {errors.termsAgreed}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Navigation Buttons ──────────────────────────────── */}
                <div className="mt-10 pt-6 border-t border-[#1b4d2e]/15 flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#11161e]/20 text-[#11161e] text-xs font-semibold tracking-wider uppercase hover:bg-[#11161e]/5 transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1b4d2e]"
                    >
                      <span>{currentStep === 3 ? "Review Registration" : "Continue"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 px-9 py-4 rounded-sm bg-[#1b4d2e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#112d1c] active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1b4d2e] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit Registration"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
