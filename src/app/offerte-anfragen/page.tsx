import { Metadata } from "next";
import { OfferteContent } from "./OfferteContent";

export const metadata: Metadata = {
  title: "Offerte anfragen",
  description:
    "Malerarbeiten Offerte online anfordern – unverbindlich, jederzeit, ohne Wartezeiten. Castelli AG Luzern.",
};

export default function OfferteAnfragenPage() {
  return <OfferteContent />;
}
