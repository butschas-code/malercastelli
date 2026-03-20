"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Brush, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Erster Kontakt",
    description: "Sie kontaktieren uns – per Telefon, E-Mail oder Kontaktformular.",
  },
  {
    icon: FileText,
    title: "Besichtigung & Offerte",
    description: "Wir besichtigen Ihr Objekt, besprechen Ihre Wünsche und erstellen eine unverbindliche Offerte.",
  },
  {
    icon: Brush,
    title: "Ausführung",
    description: "Präzise Arbeit mit höchster Qualität – termingerecht und sauber.",
  },
  {
    icon: CheckCircle,
    title: "Abnahme",
    description: "Gemeinsame Schlussbesichtigung und Übergabe – Sie sind zufrieden.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function Process() {
  return (
    <section className="relative py-8 md:py-10 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Ablauf
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            So arbeiten wir
          </h2>
          <p className="mt-5 text-muted-foreground">
            Vom ersten Kontakt bis zur Übergabe – klar strukturiert, persönlich und zuverlässig.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="mt-5 font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-[220px]">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+36px)] hidden h-0.5 w-[calc(100%-72px)] lg:block">
                    <motion.div
                      className="h-full bg-primary/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
