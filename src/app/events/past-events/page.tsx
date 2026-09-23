import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PastEventsHero } from "@/components/past-events/PastEventsHero";
import { EmptyArchiveState } from "@/components/past-events/EmptyArchiveState";
import { DocumentingJourneySection } from "@/components/past-events/DocumentingJourneySection";
import { PastEventsCta } from "@/components/past-events/PastEventsCta";

export const metadata: Metadata = {
  title: "Past Events — Assinman Alumni Network",
  description:
    "A growing record of the gatherings, milestones, and shared moments that shape the Assinman alumni community.",
};

export default function PastEventsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <PastEventsHero />
        <EmptyArchiveState />
        <DocumentingJourneySection />
        <PastEventsCta />
      </main>
      <Footer />
    </>
  );
}
