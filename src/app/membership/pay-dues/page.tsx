import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PayDuesPageContent } from "@/components/pay-dues/PayDuesPageContent";

export const metadata: Metadata = {
  title: "Pay Dues — Assinman Alumni Network",
  description:
    "Your dues keep the Assinman Alumni Network active, funded, and growing. Choose your membership option and support the network.",
};

export default function PayDuesPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main-content" className="flex-1 bg-[#f8f5ee]">
        <PayDuesPageContent />
      </main>
      <Footer />
    </>
  );
}
