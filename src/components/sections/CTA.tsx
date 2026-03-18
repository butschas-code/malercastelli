"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/button-variants";
import { business } from "@/data/business";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-5 py-14 sm:px-8 sm:py-20 text-center text-primary-foreground md:px-16 md:py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Wir freuen uns, Ihr Projekt kennenzulernen
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-primary-foreground/90">
              Ob Wohnung, Geschäftshaus oder Renovation – gerne beraten wir Sie persönlich und erstellen eine
              unverbindliche Offerte.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/kontakt"
                  className={`inline-flex justify-center min-h-[48px] w-full sm:w-auto ${buttonVariants({ size: "lg", variant: "secondary" })} bg-white text-primary shadow-lg hover:bg-white/95`}
                >
                  Kostenlose Offerte anfragen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                  className={`inline-flex justify-center min-h-[48px] w-full sm:w-auto ${buttonVariants({ size: "lg", variant: "outline" })} border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15`}
                >
                  {business.contact.phone}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
