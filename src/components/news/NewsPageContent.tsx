"use client";

import React from "react";
import { NewsHero } from "./NewsHero";
import { NewsEmptyState } from "./NewsEmptyState";
import { NewsCategoriesPreview } from "./NewsCategoriesPreview";
import { NewsEditorialStatement } from "./NewsEditorialStatement";
import { NewsStayConnected } from "./NewsStayConnected";

export function NewsPageContent() {
  return (
    <main className="w-full bg-[#fbfaf7] min-h-screen text-[#111827]">
      {/* SECTION 01: NEWS HERO */}
      <NewsHero />

      {/* SECTION 02: NEWSROOM EMPTY STATE */}
      <NewsEmptyState />

      {/* SECTION 03: WHAT YOU'LL FIND HERE */}
      <NewsCategoriesPreview />

      {/* SECTION 04: EDITORIAL STATEMENT */}
      <NewsEditorialStatement />

      {/* SECTION 05: STAY CONNECTED */}
      <NewsStayConnected />
    </main>
  );
}
