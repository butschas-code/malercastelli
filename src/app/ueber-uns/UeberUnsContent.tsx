"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business } from "@/data/business";
import { GlowingCTAButton } from "@/components/ui/GlowingCTAButton";
import { Building2, Users, MapPin } from "lucide-react";

export function UeberUnsContent() {
  const { keyPerson } = business;

  const stats = [
    { value: business.founded.toString(), label: "Seit", icon: Building2 },
    { value: `${business.generation}.`, label: "Generation", icon: Users },
    { value: "Luzern", label: "Verwurzelt in", icon: MapPin },
  ];

  return (
    <>
      <section className="py-10 sm:py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-muted/50 px-4 py-6 sm:px-6 sm:py-8 text-center border border-border/50"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Die Castelli AG Luzern ist in der Stadt Luzern verwurzelt. Was 1947 mit einem kleinen
                  Malergeschäft begann, ist heute ein moderner Betrieb mit klaren Werten:{" "}
                  <span className="font-semibold text-foreground">Qualität, Verlässlichkeit und Respekt.</span>
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Wir setzen auf Weiterbildung und engagieren uns im Luzerner Malerunternehmerverband. Als
                  moderner Handwerksbetrieb mit digitalem Workflow begleiten wir jedes Projekt vom ersten
                  Kontakt bis zur Übergabe – effizient, persönlich und gut organisiert.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-40 shrink-0 aspect-square sm:aspect-auto sm:h-auto min-h-[180px] sm:min-h-0">
                    <Image
                      src="/images/Kontakt/2924ecab-38e7-4d28-82fd-530e5fa72b74.jpg.avif"
                      alt={`${keyPerson.name} – ${keyPerson.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 10rem"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h2 className="text-lg font-bold">Ihr Ansprechpartner</h2>
                    <p className="mt-1 font-semibold text-foreground">{keyPerson.name}</p>
                    <p className="text-sm text-muted-foreground">{keyPerson.title}</p>
                    <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                      {keyPerson.roles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-start">
                      <GlowingCTAButton href="/kontakt" size="sm">
                        Kontakt aufnehmen
                      </GlowingCTAButton>
                      <GlowingCTAButton href="/dienstleistungen" size="sm" variant="surface">
                        Unsere Leistungen
                      </GlowingCTAButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
