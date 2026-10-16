export type GalleryCategory =
  | "ALL"
  | "COMMUNITY"
  | "FELLOWSHIP"
  | "PROFESSIONAL"
  | "CAMPUS"
  | "LEADERSHIP";

export interface GalleryItem {
  id: string;
  title: string;
  label: string;
  category: "COMMUNITY" | "FELLOWSHIP" | "PROFESSIONAL" | "CAMPUS" | "LEADERSHIP";
  src: string;
  alt: string;
  aspectRatio?: "landscape" | "portrait" | "wide" | "square";
  gridSpan?: {
    cols: string; // Tailwind col-span classes
    rows: string; // Tailwind row-span classes
  };
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "ALL",
  "COMMUNITY",
  "FELLOWSHIP",
  "PROFESSIONAL",
  "CAMPUS",
  "LEADERSHIP",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Registered General Nurse Inductees & Graduates",
    label: "Clinical Excellence",
    category: "PROFESSIONAL",
    src: "/assin/photo_2026-10-16_12-04-19.jpg",
    alt: "Assinman Alumni Network registered general nurses in graduation attire with official stole and medals",
    aspectRatio: "portrait",
  },
  {
    id: "gal-02",
    title: "Graduation Celebration & Cap-and-Gown Milestone",
    label: "Campus Milestone",
    category: "CAMPUS",
    src: "/assin/photo_2026-10-16_12-04-32.jpg",
    alt: "Assinman Nursing and Midwifery Training College graduates holding caps and gowns in celebration",
    aspectRatio: "portrait",
  },
  {
    id: "gal-03",
    title: "Alumni Gathering & Campus Fellowship",
    label: "Community & Care",
    category: "COMMUNITY",
    src: "/assin/photo_2026-10-16_12-04-26.jpg",
    alt: "Assinman Alumni Network members gathering together on college campus grounds",
    aspectRatio: "landscape",
  },
  {
    id: "gal-04",
    title: "Alumni Honors & Medals Assembly",
    label: "Leadership & Honor",
    category: "LEADERSHIP",
    src: "/assin/photo_2026-10-16_12-04-06.jpg",
    alt: "Assinman alumni members smiling proudly wearing alumni honors medals",
    aspectRatio: "landscape",
  },
  {
    id: "gal-05",
    title: "Dedication to Healthcare Leadership",
    label: "Leadership",
    category: "LEADERSHIP",
    src: "/assin/photo_2026-10-16_12-04-19.jpg",
    alt: "Assinman registered nurses standing proudly during professional graduation milestone",
    aspectRatio: "portrait",
  },
  {
    id: "gal-06",
    title: "Convocation Heritage & Celebration",
    label: "Reunions & Fellowship",
    category: "FELLOWSHIP",
    src: "/assin/photo_2026-10-16_12-04-32.jpg",
    alt: "Female alumni celebrating academic graduation and fellowship at Assinman NMTC",
    aspectRatio: "portrait",
  },
  {
    id: "gal-07",
    title: "Shared Campus Memories & Fellowship",
    label: "Reunions & Fellowship",
    category: "FELLOWSHIP",
    src: "/assin/photo_2026-10-16_12-04-26.jpg",
    alt: "Alumni members on the campus lawn surrounded by fellow nursing students",
    aspectRatio: "landscape",
  },
  {
    id: "gal-08",
    title: "Fellowship of Excellence & Alumni Brotherhood",
    label: "Clinical Excellence",
    category: "PROFESSIONAL",
    src: "/assin/photo_2026-10-16_12-04-06.jpg",
    alt: "Alumni brothers wearing medals united in excellence and clinical practice",
    aspectRatio: "landscape",
  },
];
