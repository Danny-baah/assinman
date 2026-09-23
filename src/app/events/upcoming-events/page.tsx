import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UpcomingEventsHero } from "@/components/upcoming-events/UpcomingEventsHero";
import { EmptyEventsState } from "@/components/upcoming-events/EmptyEventsState";
import { StayConnectedSection } from "@/components/upcoming-events/StayConnectedSection";

export const metadata: Metadata = {
  title: "Upcoming Events — Assinman Alumni Network",
  description:
    "Stay connected with gatherings, reunions, professional activities, and moments that bring the alumni community together.",
};

export default function UpcomingEventsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <UpcomingEventsHero />
        <EmptyEventsState />
        <StayConnectedSection />
      </main>
      <Footer />
    </>
  );
}
