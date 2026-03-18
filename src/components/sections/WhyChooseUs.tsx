"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { strengths, images } from "@/data/business";
import { Users, Brush, CalendarCheck, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Users,
  Brush,
  CalendarCheck,
  Smartphone,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 18 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 md:py-28 bg-muted/30">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={images.bgEdgy2}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Unser Versprechen
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Unsere Stärken
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Als moderner Handwerksbetrieb mit digitalem Workflow begleiten wir jedes Projekt vom ersten Kontakt
            bis zur Übergabe – effizient, persönlich und mit höchster Sorgfalt.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {strengths.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <motion.div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  )}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-5 font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
