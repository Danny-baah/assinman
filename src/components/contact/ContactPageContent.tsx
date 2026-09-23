"use client";

import React from "react";
import { ContactHero } from "./ContactHero";
import { ContactChannelsAndForm } from "./ContactChannelsAndForm";
import { WhyContactUs } from "./WhyContactUs";
import { ContactQuickLinks } from "./ContactQuickLinks";
import { ContactFinalCta } from "./ContactFinalCta";

export function ContactPageContent() {
  return (
    <main className="w-full bg-[#fbfaf7] min-h-screen text-[#111827]">
      {/* SECTION 01: CONTACT HERO */}
      <ContactHero />

      {/* SECTION 02 & SECTION 03: CONTACT INFORMATION & SEND A MESSAGE FORM */}
      <ContactChannelsAndForm />

      {/* SECTION 04: WHY CONTACT US */}
      <WhyContactUs />

      {/* SECTION 05: QUICK LINKS */}
      <ContactQuickLinks />

      {/* SECTION 06: FINAL CTA */}
      <ContactFinalCta />
    </main>
  );
}
