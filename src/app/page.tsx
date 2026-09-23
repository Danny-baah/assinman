import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ExecutivesSection } from "@/components/home/ExecutivesSection";
import { MembershipCtaSection } from "@/components/home/MembershipCtaSection";
import { DuesSection } from "@/components/home/DuesSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ExecutivesSection />
        <MembershipCtaSection />
        <DuesSection />
        <UpcomingEventsSection />
        <NewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
