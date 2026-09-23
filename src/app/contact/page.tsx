import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — Let's Stay Connected | Assinman Alumni Network",
  description:
    "Get in touch with the Assinman Alumni Network. Connect with our secretariat for membership support, dues inquiries, and association development.",
  openGraph: {
    title: "Contact Us | Assinman Alumni Network",
    description:
      "Get in touch with the Assinman Alumni Network secretariat, executive leadership, and membership support desks.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
}
