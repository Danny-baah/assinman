import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MissionVisionHero } from "@/components/mission-vision/MissionVisionHero";
import { MissionSection } from "@/components/mission-vision/MissionSection";
import { VisionSection } from "@/components/mission-vision/VisionSection";
import { PhilosophyStatement } from "@/components/mission-vision/PhilosophyStatement";
import { CoreValuesSection } from "@/components/mission-vision/CoreValuesSection";
import { AimsObjectivesSection } from "@/components/mission-vision/AimsObjectivesSection";
import { AlmaMaterSection } from "@/components/mission-vision/AlmaMaterSection";
import { InstitutionalMarkers } from "@/components/mission-vision/InstitutionalMarkers";
import { MissionVisionCta } from "@/components/mission-vision/MissionVisionCta";

export const metadata: Metadata = {
  title: "Mission & Vision — Assinman Alumni Network",
  description:
    "The values, purpose, and aspirations that guide the Assinman Alumni Network forward in service to healthcare and our alma mater.",
};

export default function MissionVisionPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <MissionVisionHero />
        <MissionSection />
        <VisionSection />
        <PhilosophyStatement />
        <CoreValuesSection />
        <AimsObjectivesSection />
        <AlmaMaterSection />
        <InstitutionalMarkers />
        <MissionVisionCta />
      </main>
      <Footer />
    </>
  );
}
