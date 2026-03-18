"use client";

import { motion } from "framer-motion";
import { business } from "@/data/business";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function KontaktContent() {
  const { contact, hours } = business;

  const contactItems = [
    {
      icon: MapPin,
      title: "Adresse",
      content: `${contact.address.street}, ${contact.address.zip} ${contact.address.city}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(`${contact.address.street}, ${contact.address.zip} ${contact.address.city}`)}`,
    },
    {
      icon: Phone,
      title: "Telefon",
      content: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: `${hours.weekdays}\n${hours.friday}\n${hours.weekend}`,
      href: undefined,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">So erreichen Sie uns</h2>
            <p className="mt-3 text-muted-foreground">
              Rufen Sie uns an, schreiben Sie eine E-Mail oder nutzen Sie das Formular – wir melden uns zeitnah.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors hover:border-primary/30 hover:bg-muted/30 min-h-[72px] flex items-center"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-sm text-muted-foreground hover:text-foreground transition-colors break-words"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm md:p-10">
              <h3 className="text-xl font-bold">Kontaktformular</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Senden Sie uns Ihre Anfrage – wir melden uns zeitnah bei Ihnen.
              </p>
              <form action="#" method="POST" className="mt-6 sm:mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required placeholder="Ihr Name" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" name="email" type="email" required placeholder="ihre@email.ch" className="rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+41 XX XXX XX XX" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage..."
                    className="rounded-lg resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Es gilt unsere{" "}
                  <a
                    href="https://www.malercastelli.ch/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto min-h-[48px] rounded-lg touch-manipulation">
                  Nachricht absenden
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
