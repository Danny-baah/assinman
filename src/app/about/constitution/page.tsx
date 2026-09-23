import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConstitutionHero } from "@/components/constitution/ConstitutionHero";
import { ConstitutionOverview } from "@/components/constitution/ConstitutionOverview";
import { ConstitutionDocument } from "@/components/constitution/ConstitutionDocument";
import { ConstitutionCta } from "@/components/constitution/ConstitutionCta";

export const metadata: Metadata = {
  title: "Constitution — Assinman Alumni Network",
  description:
    "The governing framework that defines the Assinman Alumni Network purpose, membership, leadership, responsibilities, and principles.",
};

export default function ConstitutionPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <ConstitutionHero />
        <ConstitutionOverview />
        <ConstitutionDocument />
        <ConstitutionCta />
      </main>
      <Footer />
    </>
  );
}
