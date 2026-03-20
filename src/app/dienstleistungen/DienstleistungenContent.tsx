"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/business";
import { GlowingCTAButton } from "@/components/ui/GlowingCTAButton";
import { PageHero } from "@/components/sections/PageHero";

export function DienstleistungenContent() {
  return (
    <>
      <PageHero
        label="Unser Angebot"
        title="Dienstleistungen"
        description="Von Innen- und Aussenarbeiten über Speziallackierungen – Malerarbeiten aus einer Hand. Präzision und Können in jeder Schicht."
        image="/images/auessere Malerarbeiten/0943f63e-ed95-419d-b22c-940a1bde9e5c.jpg.avif"
        imageAlt="Castelli AG Luzern – Äussere Malerarbeiten und Fassadenrenovation"
      >
        <nav className="flex flex-wrap gap-2 -mx-1" aria-label="Dienstleistungen">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + 0.04 * i }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-white/40 bg-white/15 px-4 py-3 min-h-[44px] text-sm font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/25 hover:border-white/60 active:bg-white/20 touch-manipulation"
            >
              {s.shortTitle}
            </motion.a>
          ))}
        </nav>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16 sm:space-y-20 md:space-y-28">
            {services.map((service, idx) => (
              <motion.article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 sm:scroll-mt-28"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
                  <div className="space-y-6 order-2 lg:order-1">
                    <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    {service.images && service.images.length > 0 ? (
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-lg">
                          <Image
                            src={service.images[0]}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={service.id === "aussen"}
                          />
                        </div>
                        {service.images.length > 1 && (
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {service.images.slice(1, 4).map((img, i) => (
                              <div
                                key={i}
                                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
                              >
                                <Image
                                  src={img}
                                  alt={`${service.title} – Bild ${i + 2}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 640px) 50vw, 20vw"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-24 text-center px-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <GlowingCTAButton href="/kontakt" size="lg" wrapperClassName="w-full sm:w-max mx-auto">
                Unverbindliche Offerte anfragen
              </GlowingCTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
