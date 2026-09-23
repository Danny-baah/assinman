export type NewsCategory =
  | "Alumni Stories"
  | "Association Updates"
  | "Opportunities"
  | "Leadership"
  | "Community Outreach";

export interface NewsAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: NewsCategory;
  author: NewsAuthor;
  publishedAt: string;
  readingTimeMinutes?: number;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  isFeatured?: boolean;
}

export interface NewsPillar {
  number: string;
  title: string;
  description: string;
}

export const FUTURE_NEWS_PILLARS: NewsPillar[] = [
  {
    number: "01",
    title: "Alumni Stories",
    description:
      "Stories, achievements, milestones, and experiences from members of the Assinman alumni community.",
  },
  {
    number: "02",
    title: "Association Updates",
    description:
      "Important announcements, initiatives, programmes, and developments from the alumni association.",
  },
  {
    number: "03",
    title: "Opportunities",
    description:
      "Relevant opportunities, professional updates, community initiatives, and information for members.",
  },
];
