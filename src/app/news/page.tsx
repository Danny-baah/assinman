import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsPageContent } from "@/components/news/NewsPageContent";

export const metadata: Metadata = {
  title: "News & Updates — The AAN Journal | Assinman Alumni Network",
  description:
    "Stay informed about the people, activities, opportunities, and developments shaping the Assinman alumni community.",
  openGraph: {
    title: "News & Updates | Assinman Alumni Network",
    description:
      "Stay informed about the people, activities, opportunities, and developments shaping the Assinman alumni community.",
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <NewsPageContent />
      <Footer />
    </>
  );
}
