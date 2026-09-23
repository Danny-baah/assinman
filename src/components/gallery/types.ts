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
    title: "Clinical Excellence & Collaboration",
    label: "Professional Life",
    category: "PROFESSIONAL",
    src: "/assets/cta-nurses.jpg",
    alt: "Ghanaian healthcare professionals conferring and collaborating in a modern clinical setting",
    aspectRatio: "landscape",
  },
  {
    id: "gal-02",
    title: "Leadership & Warmth",
    label: "Leadership",
    category: "LEADERSHIP",
    src: "/assets/why-join-hero.jpg",
    alt: "Ghanaian nursing leader smiling warmly in a modern healthcare environment",
    aspectRatio: "portrait",
  },
  {
    id: "gal-03",
    title: "Academic Focus & Foundations",
    label: "Learning",
    category: "CAMPUS",
    src: "/assets/donations-students.jpg",
    alt: "Ghanaian nursing students studying together attentively in an academic hall",
    aspectRatio: "landscape",
  },
  {
    id: "gal-04",
    title: "Community Outreach & Care",
    label: "Service",
    category: "COMMUNITY",
    src: "/assets/gallery-community.jpg",
    alt: "Ghanaian healthcare workers conducting an outdoor community health outreach under natural daylight",
    aspectRatio: "landscape",
  },
  {
    id: "gal-05",
    title: "Summit Exchange & Dialogue",
    label: "Connection",
    category: "FELLOWSHIP",
    src: "/assets/gallery-conversation.jpg",
    alt: "Ghanaian healthcare leaders and nurses sharing candid conversation and ideas at a health summit",
    aspectRatio: "landscape",
  },
  {
    id: "gal-06",
    title: "Dignity in Healthcare Service",
    label: "Professional Life",
    category: "PROFESSIONAL",
    src: "/assets/gallery-portrait.jpg",
    alt: "Dignified portrait of a senior Ghanaian nurse in medical attire in a modern hospital ward",
    aspectRatio: "portrait",
  },
  {
    id: "gal-07",
    title: "The Nursing Induction & Milestone",
    label: "Fellowship",
    category: "CAMPUS",
    src: "/assets/gallery-ceremony.jpg",
    alt: "Ghanaian nursing inductees in ceremonial white uniforms during an institutional assembly",
    aspectRatio: "portrait",
  },
  {
    id: "gal-08",
    title: "Generations of Clinical Mentorship",
    label: "Growth",
    category: "PROFESSIONAL",
    src: "/assets/why-join-mentorship.jpg",
    alt: "Senior Ghanaian healthcare practitioner guiding and mentoring a junior colleague in practice",
    aspectRatio: "landscape",
  },
  {
    id: "gal-09",
    title: "Ward Rounds & Teamwork",
    label: "Community",
    category: "COMMUNITY",
    src: "/assets/about-nurses.jpg",
    alt: "Team of Ghanaian healthcare professionals standing together in a clinical healthcare facility",
    aspectRatio: "landscape",
  },
  {
    id: "gal-10",
    title: "Frontline Movement & Duty",
    label: "Leadership",
    category: "LEADERSHIP",
    src: "/assets/cta-editorial.jpg",
    alt: "Ghanaian nurses walking purposefully through the corridor of a modern health facility",
    aspectRatio: "landscape",
  },
  {
    id: "gal-11",
    title: "A Shared Heritage of Service",
    label: "Fellowship",
    category: "FELLOWSHIP",
    src: "/assets/gallery-cinematic.jpg",
    alt: "Atmospheric group gathering of Ghanaian healthcare alumni and professionals",
    aspectRatio: "wide",
  },
];
