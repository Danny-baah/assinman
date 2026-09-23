import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery — The People. The Journey. The Moments | Assinman Alumni Network",
  description:
    "Explore the photographic archive of the Assinman Alumni Network, celebrating Ghanaian nursing leadership, fellowship, clinical excellence, and service.",
  openGraph: {
    title: "Gallery | Assinman Alumni Network",
    description:
      "A curated visual archive celebrating connection, service, professional growth, and the Assinman alumni community.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryPageContent />
      <Footer />
    </>
  );
}
