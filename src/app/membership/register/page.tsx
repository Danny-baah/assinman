import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RegisterHero } from "@/components/register/RegisterHero";
import { RegisterMultiStepForm } from "@/components/register/RegisterMultiStepForm";
import { AlreadyMemberSection } from "@/components/register/AlreadyMemberSection";

export const metadata: Metadata = {
  title: "Register — Assinman Alumni Network",
  description:
    "Complete the registration form to become an official member of the Assinman Alumni Network. Your journey begins here.",
};

export default function RegisterPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <RegisterHero />
        <RegisterMultiStepForm />
        <AlreadyMemberSection />
      </main>
      <Footer />
    </>
  );
}
