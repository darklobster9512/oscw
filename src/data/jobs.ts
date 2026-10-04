import {
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  Laptop,
  Heart,
  Headphones,
  UserSearch,
  ClipboardList,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type Job = {
  slug: "sekretariat" | "recruiting";
  applicationValue: string;
  path: "/karriere/sekretariat" | "/karriere/recruiting";
  title: string;
  shortTitle: string;
  teaser: string;
  badgeIcon: LucideIcon;
  badgeLabel: string;
  heroHeadline: string;
  heroText: string;
  roleHeadline: string;
  roleParagraphs: string[];
  tasksTitle: string;
  tasks: { icon: LucideIcon; text: string }[];
  requirements: { title: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
};

const sharedRequirements = [
  {
    title: "Exzellentes Deutsch",
    text: "Verhandlungssicher in Wort und Schrift, freundliche Telefonstimme.",
  },
  {
    title: "Zuverlässig & strukturiert",
    text: "Du hältst Termine ein und dokumentierst sauber – auch wenn's mal hektisch wird.",
  },
  {
    title: "Ruhige Arbeitsumgebung",
    text: "Ein ungestörter Arbeitsplatz zuhause ohne Hintergrund­geräusche.",
  },
  {
    title: "Eigenes technisches Setup",
    text: "Eigener Computer/Laptop, Headset und stabile Internetverbindung.",
  },
];

export const jobs: Job[] = [
  {
    slug: "sekretariat",
    applicationValue: "sekretär",
    path: "/karriere/sekretariat",
    title: "Sekretär:in / Call-Center-Agent:in (m/w/d)",
    shortTitle: "Sekretär:in",
    teaser:
      "Du nimmst Anrufe für unsere Kundenunternehmen entgegen, dokumentierst Anliegen und koordinierst Termine – professionell und aus dem Homeoffice.",
    badgeIcon: Headphones,
    badgeLabel: "Telefonservice",
    heroHeadline: "Werde Teil unseres Sekretariats‑Teams",
    heroText:
      "Als virtuelle Sekretärin nimmst du Anrufe für unsere Kundenunternehmen entgegen – professionell, freundlich, aus dem Homeoffice. Faire Bezahlung, planbare Schichten, echtes Team.",
    roleHeadline: "Deine Rolle bei Sekretariat24",
    roleParagraphs: [
      "Du bist die Stimme für viele verschiedene Unternehmen – von der Handwerks­firma über die Arztpraxis bis zum Online‑Shop. Kein Kunde wartet in der Warteschleife, keine Nachricht geht verloren.",
      "Jeden Anruf beantwortest du im Namen des jeweiligen Unternehmens, erfasst die wichtigsten Informationen und leitest sie sauber weiter. Du arbeitest strukturiert in modernen Tools, hast klare Prozesse an der Hand und ein Team im Rücken.",
    ],
    tasksTitle: "Deine Aufgaben",
    tasks: [
      {
        icon: PhoneCall,
        text: "Anrufe für unsere Kundenunternehmen professionell entgegennehmen",
      },
      {
        icon: MessageSquare,
        text: "Nachrichten und Anliegen sauber dokumentieren",
      },
      {
        icon: CalendarCheck,
        text: "Termine koordinieren und Rückrufe organisieren",
      },
      {
        icon: Laptop,
        text: "Daten in CRM- und Ticketsystemen der Kunden pflegen",
      },
      { icon: Heart, text: "Freundlicher, verbindlicher Kontakt – jederzeit" },
    ],
    requirements: [
      {
        title: "Vorerfahrung ist Pflicht",
        text: "Du hast bereits im Sekretariat, Empfang, Kundenservice oder Callcenter gearbeitet.",
      },
      ...sharedRequirements,
      {
        title: "Verbindliches Auftreten",
        text: "Du repräsentierst mehrere Unternehmen – professionell und empathisch.",
      },
    ],
    seoTitle: "Sekretär:in im Homeoffice (m/w/d) · Karriere · Sekretariat24",
    seoDescription:
      "20 € Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit. Jetzt als Sekretärin bei Sekretariat24 bewerben.",
  },
  {
    slug: "recruiting",
    applicationValue: "recruiting",
    path: "/karriere/recruiting",
    title: "Telefonische:r Recruiter:in (m/w/d)",
    shortTitle: "Recruiter:in",
    teaser:
      "Du führst telefonische Vorqualifizierungen und Recruiting-Calls für unsere Kundenunternehmen – vollständig remote aus dem Homeoffice.",
    badgeIcon: UserSearch,
    badgeLabel: "Kunden-Recruiting",
    heroHeadline: "Recruiting-Calls für unsere Kundenunternehmen",
    heroText:
      "Als telefonische:r Recruiter:in führst du im Auftrag verschiedener Kundenunternehmen Vorqualifizierungen und Erstgespräche mit Kandidat:innen – strukturiert, wertschätzend und aus dem Homeoffice. Faire Bezahlung, planbare Schichten, echtes Team.",
    roleHeadline: "Deine Rolle für unsere Kunden",
    roleParagraphs: [
      "Unsere Kundenunternehmen – von Handwerksbetrieben über Praxen bis zu Online-Shops – beauftragen Sekretariat24 mit der telefonischen Kandidatenansprache und -vorqualifizierung. Du bist der erste persönliche Kontakt für deren Bewerber:innen.",
      "Du führst Screening-Calls, dokumentierst Ergebnisse sauber in den Systemen des jeweiligen Kundenunternehmens und koordinierst Folgegespräche. Klare Prozesse, feste Gesprächsleitfäden und ein Team, das dich einarbeitet.",
    ],
    tasksTitle: "Deine Aufgaben",
    tasks: [
      {
        icon: PhoneCall,
        text: "Kandidat:innen für Kundenunternehmen telefonisch ansprechen und vorqualifizieren",
      },
      {
        icon: ClipboardList,
        text: "Telefonische Erstgespräche (Screening-Calls) führen und Ergebnisse dokumentieren",
      },
      {
        icon: CalendarCheck,
        text: "Interviewtermine zwischen Kandidat:innen und Kundenunternehmen koordinieren",
      },
      {
        icon: Laptop,
        text: "Bewerberdaten im Bewerbermanagement / CRM der jeweiligen Kunden pflegen",
      },
      {
        icon: Handshake,
        text: "Zusagen, Absagen und Nachfassaktionen im Namen der Kunden kommunizieren",
      },
    ],
    requirements: [
      {
        title: "Vorerfahrung ist Pflicht",
        text: "Du hast bereits im Recruiting, in der Personalabteilung, im Vertrieb oder in der telefonischen Kundenbetreuung gearbeitet – idealerweise mit telefonischer Ansprache.",
      },
      ...sharedRequirements,
      {
        title: "Menschenkenntnis & Klarheit",
        text: "Du erkennst schnell, ob ein Profil zu einem Kundenunternehmen passt, und kommunizierst Entscheidungen wertschätzend.",
      },
    ],
    seoTitle: "Telefonische:r Recruiter:in für Kundenunternehmen (m/w/d) · Karriere · Sekretariat24",
    seoDescription:
      "20 € Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit. Recruiting-Calls für Kundenunternehmen im Auftrag von Sekretariat24.",
  },
];
