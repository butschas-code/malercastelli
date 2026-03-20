"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function OfferteContent() {
  return (
    <section className="relative overflow-hidden -mt-[8.5rem] min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Kontakt/header.jpg"
            alt="Castelli AG Luzern – Offerte anfragen"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-48 pb-20 sm:pt-56 sm:pb-24 md:pt-60 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left – text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-white/75"
            >
              Unverbindlich &amp; einfach
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Angebotsanfrage für Malerarbeiten
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base text-white/85 leading-relaxed sm:text-lg"
            >
              Das Leben ist schon anspruchsvoll genug – deshalb können Sie Ihr Angebot für Malerarbeiten ganz einfach online anfordern. Unverbindlich, jederzeit und ohne Wartezeiten. Füllen Sie das Formular aus – bei Rückfragen melden wir uns persönlich bei Ihnen.
            </motion.p>
          </div>

          {/* Right – form placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45),0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-sm">
              <Image
                src="/images/angebot-placeholder.jpg"
                alt="Angebotsformular – Castelli AG Luzern"
                width={900}
                height={900}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
