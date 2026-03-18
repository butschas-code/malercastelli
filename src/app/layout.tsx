import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { business } from "@/data/business";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} – Malerarbeiten Luzern`,
    template: `%s | ${business.name}`,
  },
  description:
    "Malerarbeiten mit Präzision und Leidenschaft seit 1947. Castelli AG Luzern – Innen- und Aussenarbeiten, Speziallackierungen, Schimmelsanierung, Betonsanierung nach SIA-Norm. Unverbindliche Offerte.",
  keywords: [
    "Maler Luzern",
    "Malerei Luzern",
    "Castelli AG",
    "Malerarbeiten",
    "Fassadenanstrich",
    "Innenanstrich",
    "Betonsanierung",
    "Schimmelsanierung",
  ],
  authors: [{ name: business.name, url: business.contact.website }],
  openGraph: {
    title: `${business.name} – Malerarbeiten Luzern`,
    description:
      "Malerarbeiten mit Präzision und Leidenschaft seit 1947. Innen- und Aussenarbeiten, Speziallackierungen, Schimmelsanierung.",
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
          <SocialLinks />
        </main>
        <Footer />
      </body>
    </html>
  );
}
