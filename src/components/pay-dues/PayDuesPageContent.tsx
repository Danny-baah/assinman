"use client";

import React, { useState } from "react";
import { PayDuesHero } from "@/components/pay-dues/PayDuesHero";
import { WhatDuesSupport } from "@/components/pay-dues/WhatDuesSupport";
import { ChooseMembershipTier } from "@/components/pay-dues/ChooseMembershipTier";
import { PaymentConfirmationForm } from "@/components/pay-dues/PaymentConfirmationForm";
import { PayDuesFaq } from "@/components/pay-dues/PayDuesFaq";
import { NotYetMemberSection } from "@/components/pay-dues/NotYetMemberSection";
import { PayDuesComingSoonModal } from "@/components/pay-dues/PayDuesComingSoonModal";

export function PayDuesPageContent() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const openComingSoon = () => setIsComingSoonOpen(true);
  const closeComingSoon = () => setIsComingSoonOpen(false);

  return (
    <>
      <PayDuesHero onPayDuesClick={openComingSoon} />
      <WhatDuesSupport />
      <ChooseMembershipTier onPayDuesClick={openComingSoon} />
      <PaymentConfirmationForm onPayDuesClick={openComingSoon} />
      <PayDuesFaq />
      <NotYetMemberSection />
      <PayDuesComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={closeComingSoon}
      />
    </>
  );
}
