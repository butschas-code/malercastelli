import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { KontaktContent } from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Castelli AG Luzern für eine unverbindliche Offerte. Vonmattstrasse 44a, 6003 Luzern. Telefon +41 41 240 60 10.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Schreiben Sie uns"
        title="Kontakt"
        description="Wir freuen uns, Ihr Projekt kennenzulernen – ob Wohnung, Geschäftshaus oder Renovation. Gerne beraten wir Sie persönlich und erstellen eine unverbindliche Offerte."
        image="/images/Kontakt/header.jpg"
        imageAlt="Castelli AG Luzern – Kontakt"
      />

      <KontaktContent />
    </>
  );
}
