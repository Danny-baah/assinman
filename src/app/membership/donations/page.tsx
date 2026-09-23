import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DonationsHero } from "@/components/donations/DonationsHero";
import { WhereGivingGoes } from "@/components/donations/WhereGivingGoes";
import { MakeDonationSection } from "@/components/donations/MakeDonationSection";
import { DonationConfirmationForm } from "@/components/donations/DonationConfirmationForm";
import { SmallMembershipCta } from "@/components/donations/SmallMembershipCta";

export const metadata: Metadata = {
  title: "Donations — Assinman Alumni Network",
  description:
    "Your donation — no matter the size — makes a real and lasting difference to students, graduates, and the institution that shaped us all.",
};

export default function DonationsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <DonationsHero />
        <WhereGivingGoes />
        <MakeDonationSection />
        <DonationConfirmationForm />
        <SmallMembershipCta />
      </main>
      <Footer />
    </>
  );
}
