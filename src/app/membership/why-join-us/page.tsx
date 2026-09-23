import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhyJoinHero } from "@/components/why-join-us/WhyJoinHero";
import { WhyJoinBenefits } from "@/components/why-join-us/WhyJoinBenefits";
import { WhyJoinSteps } from "@/components/why-join-us/WhyJoinSteps";
import { WhyJoinTestimonials } from "@/components/why-join-us/WhyJoinTestimonials";
import { WhyJoinCta } from "@/components/why-join-us/WhyJoinCta";

export const metadata: Metadata = {
  title: "Why Join Us — Assinman Alumni Network",
  description:
    "Joining the Assinman Alumni Network is more than membership — it is a commitment to a lifelong community of healthcare professionals united in excellence.",
};

export default function WhyJoinUsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <WhyJoinHero />
        <WhyJoinBenefits />
        <WhyJoinSteps />
        <WhyJoinTestimonials />
        <WhyJoinCta />
      </main>
      <Footer />
    </>
  );
}
