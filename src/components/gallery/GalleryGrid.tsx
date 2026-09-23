"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, Layers } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryCategory, GalleryItem } from "./types";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Filter items based on active category
  const filteredItems = activeCategory === "ALL"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  // Current active lightbox item
  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="relative w-full bg-[#fbfaf7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1b4d2e]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1b4d2e]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#1b4d2e] uppercase">
                CURATED SELECTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111827] font-normal tracking-tight">
              The Photographic <span className="italic text-[#1b4d2e]">Archive</span>
            </h2>
          </div>

          <p className="text-sm text-[#4b5563] max-w-sm font-light leading-relaxed">
            Click any image to view in full resolution. Filter by institutional themes below.
          </p>
        </div>

        {/* Category Filter Bar (Horizontally scrollable on mobile without wrapping piles) */}
        <div className="relative mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`shrink-0 px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase transition-all duration-300 border ${
                    isActive
                      ? "bg-[#1b4d2e] text-white border-[#1b4d2e] shadow-md scale-100"
                      : "bg-white text-[#4b5563] border-[#1b4d2e]/15 hover:border-[#1b4d2e]/50 hover:text-[#1b4d2e]"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          {/* Subtle fade indicator on small screens */}
          <div className="absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-[#fbfaf7] to-transparent pointer-events-none sm:hidden" />
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {filteredItems.map((item, index) => {
            // Curate asymmetrical spans based on index when ALL is selected
            let spanClass = "lg:col-span-4";
            if (activeCategory === "ALL") {
              if (index === 0) spanClass = "lg:col-span-7 row-span-1 sm:row-span-1";
              else if (index === 1) spanClass = "lg:col-span-5 row-span-1";
              else if (index === 2) spanClass = "lg:col-span-5 row-span-1";
              else if (index === 3) spanClass = "lg:col-span-7 row-span-1";
              else if (index === 4) spanClass = "lg:col-span-8 row-span-1";
              else if (index === 5) spanClass = "lg:col-span-4 row-span-1";
              else if (index === 6) spanClass = "lg:col-span-4 row-span-1";
              else if (index === 7) spanClass = "lg:col-span-4 row-span-1";
              else if (index === 8) spanClass = "lg:col-span-4 row-span-1";
              else if (index === 9) spanClass = "lg:col-span-6 row-span-1";
              else if (index === 10) spanClass = "lg:col-span-6 row-span-1";
            } else {
              spanClass = "lg:col-span-6 row-span-1";
            }

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-[#e5e7eb] cursor-pointer border border-[#1b4d2e]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#1b4d2e]/40 ${spanClass}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View photo: ${item.title}`}
              >
                {/* Photo Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Permanent Minimal Corner Label */}
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-2.5 py-1 text-white border border-white/10 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-[10px] font-medium tracking-[0.16em] uppercase">
                    {item.label}
                  </span>
                </div>

                {/* Hover Reveal Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 bg-[#1b4d2e] text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.16em] uppercase border border-white/20">
                      <Tag className="w-3 h-3 text-[#c59b4b]" />
                      {item.label}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif text-white font-medium tracking-tight drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 font-light mt-1 line-clamp-1">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state safeguard if category has no items */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center bg-white border border-[#1b4d2e]/10 p-8">
            <Layers className="w-10 h-10 text-[#c59b4b] mx-auto mb-3" />
            <h3 className="text-lg font-serif text-[#111827]">No items found in this section</h3>
            <p className="text-sm text-[#6b7280] mt-1 font-light">
              Try selecting &quot;ALL&quot; to view all archive photographs.
            </p>
          </div>
        )}
      </div>

      {/* ── LIGHTBOX MODAL ────────────────────────────────────────────── */}
      {lightboxIndex !== null && currentItem && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
        >
          {/* Top Bar (Counter, Label, Close) */}
          <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.2em] font-mono text-[#c59b4b]">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline text-xs tracking-[0.16em] uppercase font-medium text-white/80">
                {currentItem.label}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c59b4b]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation: Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c59b4b] z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next Button */}
          <button
            onClick={showNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c59b4b] z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Image Container */}
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] px-4 sm:px-12 flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 90vw, 1000px"
                priority
              />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="w-full text-center mt-4">
              <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light mt-1 max-w-2xl mx-auto">
                {currentItem.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
