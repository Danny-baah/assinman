"use client";

import React from "react";
import { GalleryHero } from "./GalleryHero";
import { FeaturedMoment } from "./FeaturedMoment";
import { GalleryGrid } from "./GalleryGrid";
import { PhotoStory } from "./PhotoStory";
import { GalleryClosing } from "./GalleryClosing";

export function GalleryPageContent() {
  return (
    <main className="w-full bg-[#fbfaf7] min-h-screen text-[#111827]">
      {/* SECTION 01: GALLERY HERO */}
      <GalleryHero />

      {/* SECTION 02: FEATURED MOMENT */}
      <FeaturedMoment />

      {/* SECTION 03 & 05: CATEGORY FILTER & GALLERY GRID + LIGHTBOX */}
      <GalleryGrid />

      {/* SECTION 04: PHOTO STORY */}
      <PhotoStory />

      {/* SECTION 06: CLOSING STATEMENT */}
      <GalleryClosing />
    </main>
  );
}
