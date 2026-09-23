export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactChannel {
  number: string;
  title: string;
  description: string;
  detail: string;
  detailType: "email" | "location" | "info";
  href?: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    number: "01",
    title: "GENERAL ENQUIRIES",
    description:
      "For questions about the alumni association, membership, activities, or general information.",
    detail: "info@assinmanaan.org.gh",
    detailType: "email",
    href: "mailto:info@assinmanaan.org.gh",
  },
  {
    number: "02",
    title: "MEMBERSHIP SUPPORT",
    description:
      "For registration, membership records, dues, and account-related questions.",
    detail: "Available via official secretariat email and member portal",
    detailType: "info",
    href: "/membership/register",
  },
  {
    number: "03",
    title: "DONATIONS & CONTRIBUTIONS",
    description:
      "For questions regarding donations, contributions, and payment confirmation.",
    detail: "Verified direct MoMo confirmation & alumni development desk",
    detailType: "info",
    href: "/membership/donations",
  },
  {
    number: "04",
    title: "ASSOCIATION OFFICE",
    description:
      "The official alumni secretariat and institutional headquarters.",
    detail: "Assinman, Central Region, Ghana",
    detailType: "location",
  },
];

export interface QuickLinkItem {
  title: string;
  description: string;
  href: string;
}

export const QUICK_LINKS: QuickLinkItem[] = [
  {
    title: "Why Join Us",
    description: "Explore the value of belonging to the alumni network.",
    href: "/membership/why-join-us",
  },
  {
    title: "Register Membership",
    description: "Join the official alumni registry and stay connected.",
    href: "/membership/register",
  },
  {
    title: "Pay Dues",
    description: "Annual and lifetime dues support through Mobile Money.",
    href: "/membership/pay-dues",
  },
  {
    title: "Donations",
    description: "Direct impact giving for scholarships and school development.",
    href: "/membership/donations",
  },
  {
    title: "Upcoming Events",
    description: "Stay informed on upcoming reunions, summits, and meetings.",
    href: "/events/upcoming-events",
  },
  {
    title: "Gallery Archive",
    description: "Curated photography celebrating our members and moments.",
    href: "/events/gallery",
  },
  {
    title: "The AAN Journal (News)",
    description: "Institutional updates, alumni stories, and opportunities.",
    href: "/news",
  },
  {
    title: "Constitution",
    description: "Governance, welfare policy, and association regulations.",
    href: "/about/constitution",
  },
];
