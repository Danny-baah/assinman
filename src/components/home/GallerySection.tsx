"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface GalleryPhoto {
  id: string;
  category: "Reunion 2024" | "AGM" | "Outreach" | "Mentorship" | "Events";
  title: string;
  image: string;
  /** tailwind classes for grid span + aspect ratio */
  gridClass: string;
  aspectClass: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-1",
    category: "Reunion 2024",
    title: "Alumni Fellowship Dinner & Awards",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-1 sm:col-span-2",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "gal-2",
    category: "AGM",
    title: "Executive Deliberations & Annual General Assembly",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "gal-3",
    category: "Outreach",
    title: "Community Health Counseling Outreach",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "gal-4",
    category: "Mentorship",
    title: "Senior Preceptors Clinical Round Session",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "gal-5",
    category: "Events",
    title: "Graduation Convocation Procession",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-1 sm:col-span-2",
    aspectClass: "aspect-[16/9]",
  },
];

const categories = [
  "All",
  "Reunion 2024",
  "AGM",
  "Outreach",
  "Mentorship",
  "Events",
] as const;

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-white text-[#11161e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-5 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[#1b4d2e]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1b4d2e]">
                Gallery
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#11161e] leading-[1.1]">
              Moments &amp; Memories
            </h2>
            <p className="text-[15px] text-[#4a5568] leading-[1.8]">
              Snapshots from our events, reunions, and community activities.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1b4d2e] hover:text-[#2a6b40] transition-colors border-b border-[#1b4d2e]/40 hover:border-[#2a6b40] pb-1 group shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ── Category filter ─────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Gallery category filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className="px-4 py-2 rounded-sm text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]/40"
              style={
                activeCategory === cat
                  ? {
                      background: "#1b4d2e",
                      color: "#fff",
                    }
                  : {
                      background: "#f5f2ed",
                      color: "#4a5568",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Masonry-style grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className={`group relative rounded-sm overflow-hidden bg-[#0e2418] ${photo.gridClass}`}
            >
              <div className={`relative ${photo.aspectClass} w-full`}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06] opacity-90 group-hover:opacity-100"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/80 via-[#0e2418]/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Labels */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-editorial text-base sm:text-lg font-bold leading-snug text-white group-hover:text-[#d8f0dc] transition-colors">
                    {photo.title}
                  </h3>
                </div>

                {/* Corner hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center"
                    style={{ background: "rgba(27,77,46,0.85)" }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
