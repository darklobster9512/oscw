import {
  Scale,
  Stethoscope,
  ShoppingBag,
  Building2,
  Hammer,
  Home,
  Rocket,
  Calculator,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  short: string;
  long: string;
  bullets: string[];
};

export const industries: Industry[] = [
  {
    slug: "anwaelte",
    name: "Anwälte",
    icon: Scale,
    short: "Diskrete Mandantenannahme – auch außerhalb der Kanzleizeiten.",
    long: "Wir sind das professionelle Sprachrohr Ihrer Kanzlei: diskret, geschult und mit dem richtigen Wortlaut. Erstinformationen, Terminvereinbarungen und Rückrufwünsche werden strukturiert an Sie übergeben.",
    bullets: [
      "Diskrete Erstannahme in Ihrem Kanzleinamen",
      "Terminvergabe direkt in Ihren Kalender",
      "Fristsensible Priorisierung eiliger Anrufe",
      "DSGVO- und berufsrechtskonform",
    ],
  },
  {
    slug: "aerzte",
    name: "Ärzte",
    icon: Stethoscope,
    short: "Ruhige Praxisatmosphäre – wir übernehmen die Anrufannahme.",
    long: "Entlasten Sie Ihr Praxisteam und geben Sie Patienten trotzdem das Gefühl, gut aufgehoben zu sein. Wir vergeben Termine, nehmen Rezeptwünsche entgegen und filtern Notfälle.",
    bullets: [
      "Terminvergabe in Ihrer Praxissoftware",
      "Rezept- und Überweisungsanfragen",
      "Notfall-Filter & Weiterleitung",
      "Mehrsprachig auf Wunsch",
    ],
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    icon: ShoppingBag,
    short: "Kundenservice, der aus Anrufen Bestellungen macht.",
    long: "Von der Vorverkaufsfrage bis zur Retoure: Wir betreuen Ihre Shopping-Kunden freundlich, schnell und lösungsorientiert – direkt in Ihrem Shop- und Ticketsystem.",
    bullets: [
      "Bestell- & Versandanfragen",
      "Retouren- und Reklamationsannahme",
      "Anbindung an Shopify, Shopware, WooCommerce",
      "Peak-Zeiten & Kampagnen abfedern",
    ],
  },
  {
    slug: "kmu",
    name: "KMU & Business",
    icon: Building2,
    short: "Eigener Empfang – ohne Fixkosten für eine Vollzeitstelle.",
    long: "Wir agieren als virtuelles Empfangsteam für kleine und mittelständische Unternehmen. Anrufe werden professionell qualifiziert und an die richtige Person weitergeleitet.",
    bullets: [
      "Vermittlung an Ansprechpartner",
      "Terminvereinbarung & Kalenderpflege",
      "Nachrichten strukturiert per Mail",
      "Skalierbar nach Bedarf",
    ],
  },
  {
    slug: "handwerk",
    name: "Handwerk",
    icon: Hammer,
    short: "Auftragsannahme, während Sie auf der Baustelle sind.",
    long: "Ihre Kunden erreichen ein echtes Büro – wir nehmen Aufträge, Notfälle und Anfragen entgegen und übergeben sie strukturiert an Sie.",
    bullets: [
      "Auftragsannahme mit Rückrufwunsch",
      "Notdienst-Priorisierung",
      "Kalender- & Terminvergabe",
      "SMS/Push in Echtzeit",
    ],
  },
  {
    slug: "immobilien",
    name: "Immobilienmakler",
    icon: Home,
    short: "Kein Lead geht verloren – auch abends und am Wochenende.",
    long: "Interessenten rufen genau dann an, wenn sie das Exposé sehen. Wir qualifizieren Anfragen und übergeben Sie mit allen relevanten Daten.",
    bullets: [
      "Lead-Qualifizierung nach Ihren Kriterien",
      "Besichtigungstermine buchen",
      "Anbindung an onOffice, Propstack & Co.",
      "Auch abends & am Wochenende",
    ],
  },
  {
    slug: "start-ups",
    name: "Start-ups",
    icon: Rocket,
    short: "Der professionelle Empfang, bevor Sie eigene HR haben.",
    long: "Wirken Sie vom ersten Tag an wie ein etabliertes Unternehmen. Wir wachsen mit Ihnen mit – vom Solo-Founder bis zum Series-A-Team.",
    bullets: [
      "Professioneller Auftritt ab Tag 1",
      "Investor- & Presseanfragen filtern",
      "Skalierbar nach Wachstum",
      "Monatlich kündbar",
    ],
  },
  {
    slug: "steuerberater",
    name: "Steuerberater",
    icon: Calculator,
    short: "Ihr Team arbeitet konzentriert – wir nehmen die Anrufe an.",
    long: "Konzentration statt Klingeln: Wir übernehmen Mandantenannahme, Terminvergabe und Rückrufwünsche – in einem Ton, der zu Ihrer Kanzlei passt.",
    bullets: [
      "Mandantenannahme mit Priorisierung",
      "Terminvergabe direkt im Kalender",
      "Berufsrechtlich sensibler Wortlaut",
      "Digitale Übergabe der Nachrichten",
    ],
  },
  {
    slug: "versicherungen",
    name: "Versicherungsvermittler",
    icon: ShieldCheck,
    short: "Schadensmeldungen und Beratungstermine – zuverlässig 24/7.",
    long: "Wir sorgen dafür, dass jeder Kunde in einer stressigen Situation einen echten Menschen erreicht – und Sie den Termin bekommen.",
    bullets: [
      "Schadensmeldungen strukturiert erfassen",
      "Beratungstermine buchen",
      "24/7-Erreichbarkeit für Notfälle",
      "Übergabe direkt an Ihre Software",
    ],
  },
  {
    slug: "weitere",
    name: "Weitere Branchen",
    icon: Sparkles,
    short: "Individuelle Lösungen für Ihr Geschäftsmodell.",
    long: "Sie finden Ihre Branche nicht in der Liste? Wir haben Erfahrung mit unzähligen Geschäftsmodellen – von Coaching und Agenturen bis zu Logistik und Bildung.",
    bullets: [
      "Individueller Gesprächsleitfaden",
      "Fach-Onboarding Ihres Teams",
      "Anbindung an Ihre Software",
      "Persönliche Betreuung",
    ],
  },
];
