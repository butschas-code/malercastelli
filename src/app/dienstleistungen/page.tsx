import { Metadata } from "next";
import { DienstleistungenContent } from "./DienstleistungenContent";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Malerarbeiten innen und aussen, Speziallackierungen, Schimmelsanierung, dekorative Techniken, digitale Visualisierungen, Betonsanierung nach SIA-Norm. Castelli AG Luzern.",
};

export default function DienstleistungenPage() {
  return <DienstleistungenContent />;
}
