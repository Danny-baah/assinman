import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assinman Alumni Network | United in Excellence",
  description:
    "Connecting alumni, fostering fellowship, and building a legacy of excellence together. Est. 2025 · Ghana.",
  keywords: [
    "Assinman Alumni Network",
    "AAN",
    "Assinman Nursing",
    "Ghana Alumni",
    "United in Excellence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

