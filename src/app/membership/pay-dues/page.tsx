import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PayDuesHero } from "@/components/pay-dues/PayDuesHero";
import { WhatDuesSupport } from "@/components/pay-dues/WhatDuesSupport";
import { ChooseMembershipTier } from "@/components/pay-dues/ChooseMembershipTier";
import { PaymentConfirmationForm } from "@/components/pay-dues/PaymentConfirmationForm";
import { PayDuesFaq } from "@/components/pay-dues/PayDuesFaq";
import { NotYetMemberSection } from "@/components/pay-dues/NotYetMemberSection";

export const metadata: Metadata = {
  title: "Pay Dues — Assinman Alumni Network",
  description:
    "Your dues keep the Assinman Alumni Network active, funded, and growing. Choose your membership option and support the network.",
};

export default function PayDuesPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <PayDuesHero />
        <WhatDuesSupport />
        <ChooseMembershipTier />
        <PaymentConfirmationForm />
        <PayDuesFaq />
        <NotYetMemberSection />
      </main>
      <Footer />
    </>
  );
}
