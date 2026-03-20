/**
 * Castelli AG Luzern – Business data
 * Central config for easy editing and reuse across pages.
 * Source: https://www.malercastelli.ch (public information)
 */

export const business = {
  name: "Castelli AG Luzern",
  shortName: "Castelli",
  tagline: "Malerarbeiten mit Präzision und Leidenschaft – seit 1947",
  founded: 1947,
  generation: 3,
  industry: "Malerei",
  locale: "de-CH",

  contact: {
    address: {
      street: "Vonmattstrasse 44a",
      zip: "6003",
      city: "Luzern",
      country: "Schweiz",
    },
    phone: "+41 41 240 60 10",
    email: "info@malercastelli.ch",
    website: "https://www.malercastelli.ch",
  },

  hours: {
    weekdays: "Montag – Donnerstag: 07.00 – 16.45 Uhr",
    friday: "Freitag: 07.00 – 16.00 Uhr",
    weekend: "Samstag – Sonntag: Geschlossen",
  },

  // Key person from contact page
  keyPerson: {
    name: "Josua Rieder",
    title: "Eidg. dipl. Malermeister",
    roles: [
      "Co-Präsidium luzernermaler Malerunternehmerverband Luzern und Umgebung",
      "Prüfungsexperte Maler EFZ/EBA",
    ],
  },
} as const;

export const strengths = [
  {
    title: "Persönliche Beratung mit Fachwissen",
    description: "Sorgfältige Beratung durch erfahrene Malermeister – von der Farbwahl bis zur Umsetzung.",
    icon: "Users" as const,
  },
  {
    title: "Saubere, detailgenaue Ausführung",
    description: "Präzise Handarbeit und höchste Sorgfalt bei jeder Oberfläche.",
    icon: "Brush" as const,
  },
  {
    title: "Verbindliche Terminplanung",
    description: "Zuverlässige Absprachen und termingerechte Fertigstellung.",
    icon: "CalendarCheck" as const,
  },
  {
    title: "Digitale Kommunikation & moderne Abläufe",
    description: "Modernes Handwerk mit digitalem Workflow – effizient und gut organisiert.",
    icon: "Smartphone" as const,
  },
];

/** Image paths – from /images subfolders (user-categorized) */
const img = (folder: string, file: string) => `/images/${folder}/${file}`;

const serviceImages: Record<string, string[]> = {
  innen: [
    img("innere malerarbeiten", "0c17cf77-c20b-477a-a0f5-267c522122de.jpg.avif"),
    img("innere malerarbeiten", "23263259-e6a9-4497-a9bc-bc0ad8ac7822.jpg.avif"),
    img("innere malerarbeiten", "3fa56925-4119-4697-bbce-73e2568f5535.jpg.avif"),
    img("innere malerarbeiten", "57707f69-d7fe-4d1d-91d3-049049a3d37f.jpg.avif"),
    img("innere malerarbeiten", "86bdbe23-6782-4c6c-b0b7-ea8a0ab485f4.jpg.avif"),
    img("innere malerarbeiten", "f747a1c0-c35e-4ac7-897d-3fbe48115288.jpg.avif"),
  ],
  aussen: [
    img("auessere Malerarbeiten", "0943f63e-ed95-419d-b22c-940a1bde9e5c.jpg.avif"),
    img("auessere Malerarbeiten", "2614f7d8-cea5-4342-83de-f750732ecbc6.jpg.avif"),
    img("auessere Malerarbeiten", "4fc14b47-45bc-4303-9b0b-cda69e12cb5b.jpg.avif"),
    img("auessere Malerarbeiten", "5a920b77-c42a-4693-ab62-d95ba5caf554.jpg.avif"),
    img("auessere Malerarbeiten", "51216525-7e8f-45a9-abf3-d73db8655401.jpg.avif"),
  ],
  betonsanierung: [
    img("Botensanierung", "529ae251-dca4-483d-987b-e3be4203e908.jpg.avif"),
    img("Botensanierung", "6a29b945-e00c-4bb4-bbae-8fd0c144e827.jpg.avif"),
  ],
  speziallackierungen: [
    img("Speziallackierung", "a4a8ed40-8508-47b5-931a-99d774a219c3.jpg.avif"),
    img("Speziallackierung", "185c5c21-74cb-4fe4-bb37-7abcd1f6621e.jpg.avif"),
    img("Speziallackierung", "47013168-a3ae-4ad6-b01a-f809f9d10066.jpg.avif"),
    img("Speziallackierung", "d6a99120-84e5-4ac5-9e39-c1dbbafddf99.jpg.avif"),
    img("Speziallackierung", "6be09505-6c4c-4c74-933a-4e61025b54d9.jpg.avif"),
  ],
  "dekorative-techniken": [
    img("Dekorative Techniken", "ae97a773-dbd1-4621-83a3-6c07dd547c45.jpg.avif"),
    img("Dekorative Techniken", "49914a21-08a6-4843-9a10-10bfa0baa61c.jpg.avif"),
    img("Dekorative Techniken", "251fa4f9-a025-4739-993f-ef51d2d8228a.jpg.avif"),
    img("Dekorative Techniken", "3dcb3cd8-fe36-4c22-a3a9-4cf10d3a8ff9.jpg.avif"),
  ],
  visualisierung: [
    img("Digitale Visualisierung", "fa56c25a-f3a6-4ae9-9579-12d30e79ba11.jpg.avif"),
    img("Digitale Visualisierung", "7e5e69fe-c7b3-4e89-8ec2-f6844382c217.jpg.avif"),
    img("Digitale Visualisierung", "5d505180-ce08-4441-a55c-2ec17e89507d.jpg.avif"),
  ],
};

export const services = [
  {
    id: "innen",
    title: "Innere Malerarbeiten",
    shortTitle: "Innenarbeiten",
    description:
      "Wir bringen Farbe ins Leben: Ob Neubau, Renovation oder einzelne Räume – wir gestalten Ihre Innenräume nach Wunsch und Funktion.",
    details: [
      "Wände und Decken streichen",
      "Dekorative Techniken & mineralische Farben",
      "Isolierungen bei Nikotin- oder Wasserschäden",
      "Schimmelsanierungen & präventiver Schutz",
      "Lackierungen von Türen, Radiatoren und Einbauten",
    ],
    images: serviceImages.innen,
  },
  {
    id: "aussen",
    title: "Äussere Malerarbeiten",
    shortTitle: "Aussenarbeiten",
    description:
      "Wir schützen und verschönern Ihre Fassade nachhaltig – mit wetterbeständigen Beschichtungen und einem Auge fürs Detail.",
    details: [
      "Fassadenanstriche",
      "Holzschutz & Wetterschutzsysteme",
      "Fensterläden und Metallteile",
      "Riss- und Betoninstandsetzung",
      "Farbkonzepte für den Aussenraum",
    ],
    images: serviceImages.aussen,
  },
  {
    id: "betonsanierung",
    title: "Betonsanierung",
    shortTitle: "Betonsanierung",
    description:
      "Sichtbeton oder Funktionsflächen – wir sanieren fachgerecht und langlebig. Unsere Systeme entsprechen den aktuellen SIA-Normen.",
    details: [
      "Instandstellung von Betonflächen",
      "Beschichtung von Tiefgaragen, Balkonen, Decken",
      "Abdichtung von Haarrissen und Fugen",
      "Farbige Schutzsysteme für Sichtbeton",
    ],
    images: serviceImages.betonsanierung,
  },
  {
    id: "speziallackierungen",
    title: "Speziallackierungen",
    shortTitle: "Speziallackierungen",
    description:
      "Mit unserem firmeneigenen Spritzraum realisieren wir hochwertige Lackierungen – exakt nach Kundenwunsch und unter optimalen Bedingungen.",
    details: [
      "Hochwertige Lackierungen für Innen- und Aussenbereiche",
      "Lackierungen mit RAL, NCS, F&B, Little Greene etc.",
      "Spezialeffekte und widerstandsfähige Oberflächen",
    ],
    images: serviceImages.speziallackierungen,
  },
  {
    id: "dekorative-techniken",
    title: "Dekorative Techniken & Gestaltung",
    shortTitle: "Dekorative Techniken",
    description:
      "Mit kreativen Oberflächen setzen wir gezielte Akzente – individuelle Gestaltungslösungen für einzigartige Räume.",
    details: [
      "Stucco & Spachteltechniken",
      "Tapezierarbeiten & Design-Tapeten",
      "Schablonierungen & Logos",
      "Diverse Effektbeschichtungen",
    ],
    images: serviceImages["dekorative-techniken"],
  },
  {
    id: "visualisierung",
    title: "Digitale Visualisierungen",
    shortTitle: "Visualisierungen",
    description:
      "Damit Sie sich das Ergebnis schon vor Beginn vorstellen können – digitale Farbkonzepte anhand Ihrer Fotos oder Pläne.",
    details: [
      "Farbgestaltung am Bildschirm simuliert",
      "Bessere Entscheidungsgrundlage",
      "Ideal für Umbau- oder Renovationsprojekte",
    ],
    images: serviceImages.visualisierung,
  },
];

export const faqs = [
  {
    question: "Wie erhalte ich eine Offerte?",
    answer:
      "Kontaktieren Sie uns per Telefon, E-Mail oder über das Kontaktformular. Wir besichtigen Ihr Objekt, besprechen Ihre Wünsche und erstellen eine unverbindliche Offerte – für Wohnungen, Geschäftshäuser oder Renovationen.",
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Die Castelli AG Luzern ist in der Stadt Luzern und der Region Luzern verwurzelt. Gerne beraten wir Sie zu Ihrem Projekt in Luzern und Umgebung.",
  },
  {
    question: "Bieten Sie auch Schimmelsanierung an?",
    answer:
      "Ja. Wir führen Schimmelsanierungen durch und bieten präventive Schutzsysteme. Bei Wasserschäden und Nikotinbelastung übernehmen wir die notwendigen Isolierungen vor dem Anstrich.",
  },
  {
    question: "Können Sie Farben vor der Ausführung visualisieren?",
    answer:
      "Ja. Wir erstellen auf Wunsch digitale Farbvisualisierungen anhand Ihrer Fotos oder Pläne – ideal, um das Ergebnis vor dem Beginn der Arbeiten zu beurteilen.",
  },
  {
    question: "Übernehmen Sie auch die Koordination von Renovationsprojekten?",
    answer:
      "Ja. Wir übernehmen Projektleitung und Koordination bei Umbau- und Renovationsprojekten. Sie haben eine feste Ansprechperson, wir sorgen für klare Abläufe und termingerechte Fertigstellung.",
  },
];

// Images from public/images/ (user-categorized subfolders)
export const images = {
  hero: "/images/Kontakt/header.jpg",
  about: "/images/58c231be-418a-4685-a8b2-ab43de29d60f.jpg.avif",
  logo: "/images/logo.avif",
  /** Edgy section backgrounds for home page */
  bgEdgy1: "/images/Speziallackierung/a4a8ed40-8508-47b5-931a-99d774a219c3.jpg.avif",
  bgEdgy2: "/images/innere malerarbeiten/86bdbe23-6782-4c6c-b0b7-ea8a0ab485f4.jpg.avif",
};
