"use client";

import { motion } from "framer-motion";
import { business } from "@/data/business";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlowingCTAButton } from "@/components/ui/GlowingCTAButton";

interface ContactSectionProps {
  compact?: boolean;
}

export function ContactSection({ compact }: ContactSectionProps = {}) {
  const { contact, hours } = business;

  return (
    <section className="py-8 md:py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {!compact && (
              <>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">Schreiben Sie uns</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Kontakt</h2>
                <p className="mt-5 text-muted-foreground">
                  Wir freuen uns auf Ihre Nachricht. Gerne beraten wir Sie zu Ihrem Malerprojekt.
                </p>
              </>
            )}
            {compact && <h2 className="sr-only">Kontaktdaten</h2>}

            <div className={compact ? "mt-0 space-y-6" : "mt-10 space-y-6"}>
              {[
                {
                  icon: MapPin,
                  title: business.name,
                  content: `${contact.address.street}, ${contact.address.zip} ${contact.address.city}, ${contact.address.country}`,
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
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const el = (
                  <div key={i} className="flex gap-4">
                    <motion.div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                );
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {el}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card p-5 sm:p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold">Kontaktformular</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Senden Sie uns Ihre Anfrage – wir melden uns zeitnah bei Ihnen.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className="mt-6 space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required placeholder="Ihr Name" className="rounded-lg" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-Mail</Label>
        <Input id="email" name="email" type="email" required placeholder="ihre@email.ch" className="rounded-lg" />
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
          rows={4}
          required
          placeholder="Beschreiben Sie Ihr Projekt..."
          className="rounded-lg"
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
      <GlowingCTAButton type="submit" size="md" wrapperClassName="w-full sm:w-max touch-manipulation">
        Absenden
      </GlowingCTAButton>
    </form>
  );
}
