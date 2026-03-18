# Castelli AG Luzern – Website

Moderne, produktionsreife Website für die Castelli AG Luzern, Malerunternehmen in dritter Generation seit 1947.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**
- **lucide-react**

## Schnellstart

```bash
cd maler-castelli-site
npm install
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Repository mit Vercel verbinden
2. `maler-castelli-site` als Root-Verzeichnis verwenden (oder Projekt in Root verschieben)
3. Build-Command: `npm run build`
4. Output-Verzeichnis: `.next`

Alternativ über CLI:

```bash
cd maler-castelli-site
npx vercel
```

## Projektstruktur

```
maler-castelli-site/
├── src/
│   ├── app/              # App Router (Seiten)
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Sektions-Komponenten
│   │   └── ui/           # shadcn UI
│   ├── data/             # Business-Daten (business.ts)
│   └── lib/              # Utilities
├── public/
│   └── images/           # Bilder (siehe images/README.md)
└── next.config.ts
```

## Inhalte anpassen

Alle geschäftlichen Daten (Kontakt, Leistungen, Öffnungszeiten etc.) stehen zentral in:

**`src/data/business.ts`**

Änderungen dort wirken sich auf die gesamte Website aus.

## Bilder von der bestehenden Website

Die aktuelle Website unter https://www.malercastelli.ch enthält Bilder, die übernommen werden können. Siehe `public/images/README.md` für Anweisungen.

## Platzhalter & spätere Anpassungen

- **Formular**: Das Kontaktformular ist für Anbindung an E-Mail, CRM oder Formhandler (z.B. Formspree, Resend) vorbereitet. Siehe `ContactSection.tsx`.
- **Bilder**: Die About-Sektion verwendet einen Platzhalter. Echte Bilder können in `public/images/` abgelegt oder über `business.ts` → `images` referenziert werden.
- **Impressum/Datenschutz**: Verweisen aktuell auf die bestehende Website. Bei Bedarf eigene Seiten anlegen.

## Lizenz

Projekt für Castelli AG Luzern.
