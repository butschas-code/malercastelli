"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { business, images } from "@/data/business";
import { buttonVariants } from "@/lib/button-variants";

export function AboutPreview() {
  const aboutImage = images.about;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
              Unsere Geschichte
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Über uns
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Castelli AG Luzern ist in der Stadt Luzern verwurzelt. Was 1947 mit einem kleinen
              Malergeschäft begann, ist heute ein moderner Betrieb, in dem traditionelles Handwerk auf
              kreative Gestaltung trifft.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Qualität, Verlässlichkeit und Respekt – wir setzen auf Weiterbildung und engagieren uns im
              Luzerner Malerunternehmerverband.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
              <Link href="/ueber-uns" className={buttonVariants()}>
                Mehr über uns
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-lg">
              {aboutImage ? (
                <Image
                  src={aboutImage}
                  alt="Castelli AG Luzern – Malerarbeiten"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
