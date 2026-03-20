"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import { business } from "@/data/business";

export function LocalTrust() {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <MapPin className="h-6 w-6" />
            </motion.div>
            <h2 className="mt-6 text-xl font-bold">Luzern und Region</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Die Castelli AG Luzern ist in der Stadt Luzern verwurzelt. Seit {business.founded} arbeiten wir
              für Privatkunden, Eigentümer und Verwaltungen in Luzern und Umgebung – mit kurzen Wegen und
              persönlichem Service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={{ rotate: -5, scale: 1.05 }}
            >
              <Award className="h-6 w-6" />
            </motion.div>
            <h2 className="mt-6 text-xl font-bold">Verbandsmitglied</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir engagieren uns im Luzerner Malerunternehmerverband und setzen auf fachliche Weiterbildung.
              {business.keyPerson.name}, Eidg. dipl. Malermeister, führt das Unternehmen mit Erfahrung und
              Verantwortung.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
