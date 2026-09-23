import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExecutiveMembersHero } from "@/components/executive-members/ExecutiveMembersHero";
import { ExecutiveDirectorySection } from "@/components/executive-members/ExecutiveDirectorySection";
import { ExecutiveClosingCta } from "@/components/executive-members/ExecutiveClosingCta";

export const metadata: Metadata = {
  title: "Executive Members — Assinman Alumni Network",
  description:
    "Meet the dedicated leaders steering the Assinman Alumni Network with vision and integrity.",
};

export default function ExecutiveMembersPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <ExecutiveMembersHero />
        <ExecutiveDirectorySection />
        <ExecutiveClosingCta />
      </main>
      <Footer />
    </>
  );
}
