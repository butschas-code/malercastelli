"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/button-variants";
import { business, images } from "@/data/business";
import { ArrowRight, Palette } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[75svh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero}
            alt="Maler Castelli Luzern – Fassadenrenovation mit präziser Farbgestaltung"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/95 backdrop-blur-sm"
          >
            <Palette className="h-4 w-4" />
            Seit {business.founded} · Handwerk in {business.generation}. Generation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {business.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base text-white/90 leading-relaxed sm:text-lg md:text-xl"
          >
            Kreative Gestaltung mit Präzision. Malerarbeiten innen und aussen – Speziallackierungen,
            Schimmelsanierungen, dekorative Techniken, digitale Visualisierungen und Betonsanierungen nach
            SIA-Norm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link href="/dienstleistungen" className={`group flex items-center justify-center min-h-[48px] w-full sm:w-auto ${buttonVariants({ size: "lg" })}`}>
                Unsere Dienstleistungen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/kontakt"
                className={`flex items-center justify-center min-h-[48px] w-full sm:w-auto ${buttonVariants({ variant: "outline", size: "lg" })} border-white/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/70`}
              >
                Kostenlose Offerte
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
