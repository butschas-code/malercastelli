import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { buttonVariants } from "@/lib/button-variants";
import { PageHero } from "@/components/sections/PageHero";
import { UeberUnsContent } from "./UeberUnsContent";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Castelli AG Luzern – Malerunternehmen in dritter Generation seit 1947. Qualität, Verlässlichkeit und Respekt. In Luzern verwurzelt.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Unsere Geschichte"
        title="Über uns"
        description="Ein Malerunternehmen in dritter Generation – in Luzern verwurzelt, mit traditionellem Handwerk und kreativer Gestaltung."
        image="/images/58c231be-418a-4685-a8b2-ab43de29d60f.jpg.avif"
        imageAlt="Castelli AG Luzern – Malerarbeiten seit 1947"
      />

      <UeberUnsContent />
    </>
  );
}
