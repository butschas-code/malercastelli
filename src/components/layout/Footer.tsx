import Link from "next/link";
import Image from "next/image";
import { business, images } from "@/data/business";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { contact, hours } = business;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block group" aria-label={`${business.name} – Startseite`}>
              <Image
                src={images.logo}
                alt={business.name}
                width={633}
                height={193}
                className="h-14 w-auto object-contain object-left transition-opacity hover:opacity-90"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Malerarbeiten mit Präzision und Leidenschaft – seit {business.founded}
            </p>
          </div>

          <div>
            <p className="font-medium text-sm">Kontakt</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {contact.address.street}, {contact.address.zip} {contact.address.city}
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-sm">Öffnungszeiten</p>
            <ul className="mt-2 space-y-0.5 text-sm text-muted-foreground">
              <li>{hours.weekdays}</li>
              <li>{hours.friday}</li>
              <li>{hours.weekend}</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-sm">Links</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li>
                <Link href="/dienstleistungen" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
