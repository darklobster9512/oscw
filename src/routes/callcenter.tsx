import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/primitives";
import {
  Users,
  Workflow,
  Gauge,
  BarChart3,
  ArrowRight,
  Star,
  Check,
  Headphones,
  Building2,
  Phone,
  Search,
  GraduationCap,
  PlugZap,
  TrendingUp,
  Sparkles,
  LineChart,
  ArrowRightCircle,
} from "lucide-react";

export const Route = createFileRoute("/callcenter")({
  head: () => ({
    meta: [
      { title: "Callcenter-Lösungen für Unternehmen · Sekretariat-Service" },
      {
        name: "description",
        content:
          "Inbound-Callcenter mit qualifizierten Agenten, CRM-Integration und messbaren KPIs. Skalierbar von 10 bis 10.000 Anrufen.",
      },
      { property: "og:title", content: "Callcenter-Lösungen für Unternehmen · Sekretariat-Service" },
      {
        property: "og:description",
        content:
          "Inbound-Callcenter mit qualifizierten Agenten, CRM-Integration und messbaren KPIs. Skalierbar von 10 bis 10.000 Anrufen.",
      },
    ],
  }),
  component: CallcenterPage,
});

const telefonservicePoints = [
  "Annahme eingehender Anrufe",
  "Weiterleitung an Ansprechpartner",
  "Einfache Auskünfte erteilen",
  "Terminvereinbarung",
  "Nachricht aufnehmen",
];

const callcenterPoints = [
  "Komplette Gesprächsabwicklung mit Fachwissen",
  "Fallabschließende Bearbeitung inkl. Dokumentation",
  "Direkte Arbeit in Ihrem CRM, ERP oder Ticketing-System",
  "Definierte KPIs und aktive Qualitätssteuerung",
  "Skalierbare Teams mit Schichtmodellen",
];

const services = [
  {
    icon: Phone,
    title: "Inbound Callcenter",
    text: "Professionelle Anrufannahme mit qualifizierten Agenten. Kundenservice, Support, Bestellannahme und Notfall-Hotlines – fallabschließend bearbeitet.",
  },
  {
    icon: Headphones,
    title: "Kundenservice Outsourcing",
    text: "Lagern Sie Ihren kompletten Kundenservice aus. Wir übernehmen Service, Support, Sales und Backoffice – mit direktem Zugriff auf Ihre Systeme.",
  },
];

const buildingBlocks = [
  {
    icon: Search,
    title: "Analyse & Konzeption",
    text: "Kontaktgründe, Volumen und Peaks analysieren. Use Cases segmentieren. Service-Level, KPIs und Eskalationslogiken definieren.",
  },
  {
    icon: GraduationCap,
    title: "Aufbau & Schulung",
    text: "Erfahrene Agenten auswählen und intensiv auf Ihre Produkte, Branchenlogik und Prozesse schulen.",
  },
  {
    icon: PlugZap,
    title: "Systemintegration",
    text: "Tiefe Integration in Ihre CRM-, ERP- und Ticketing-Systeme. Direkte Vorgangsbearbeitung statt isolierter Notizen.",
  },
  {
    icon: TrendingUp,
    title: "Betrieb & Skalierung",
    text: "Skalierbarer Betrieb mit Schichtmodellen und Kapazitätssteuerung. Laufendes Qualitätsmanagement und Coaching.",
  },
  {
    icon: Sparkles,
    title: "Automatisierung & KI",
    text: "Intelligente Vorqualifizierung, automatisierte Standardprozesse und KI-gestützte Assistenz für maximale Effizienz.",
  },
  {
    icon: LineChart,
    title: "Reporting & Optimierung",
    text: "Detaillierte Dashboards mit operativen und strategischen KPIs. Kontinuierliche Optimierung von Prozessen und Qualität.",
  },
];

const fitFor = [
  "Mittelständische und größere Unternehmen mit hohem Kontaktvolumen",
  "Komplexe Service-, Support- oder Sales-Prozesse, die Fachwissen erfordern",
  "Bestehende CRM-, ERP- oder Ticketing-Systeme, die angebunden werden sollen",
  "Bedarf an Skalierung ohne eigenen Personal- und Infrastrukturaufbau",
  "Anforderungen an Prozesssicherheit, Steuerbarkeit und Transparenz",
];

const advantages = [
  {
    icon: Users,
    title: "Qualifizierte Agenten",
    text: "Keine einfachen Telefonkräfte, sondern geschulte Mitarbeiter mit Fachwissen zu Ihren Produkten und Prozessen. Intensive Einarbeitung und laufendes Coaching.",
  },
  {
    icon: Workflow,
    title: "Tiefe Systemintegration",
    text: "Unsere Agenten arbeiten direkt in Ihren Systemen – CRM, ERP, Ticketing, Helpdesk. Vollständige Vorgangsbearbeitung statt isolierter Notizen.",
  },
  {
    icon: Gauge,
    title: "Messbare Ergebnisse",
    text: "Definierte KPIs, detaillierte Dashboards und transparentes Reporting. Sie sehen jederzeit, wie sich Erreichbarkeit und Abschlussquoten entwickeln.",
  },
  {
    icon: BarChart3,
    title: "Skalierbarkeit",
    text: "Kapazitäten flexibel anpassen – ohne eigenen Personalaufbau oder Infrastruktur-Investitionen. Schichtmodelle sorgen für Planungssicherheit.",
  },
];

const steps = [
  { n: 1, title: "Beratung", text: "Wir analysieren Ihre Anforderungen, Kontaktvolumen und Prozesse." },
  { n: 2, title: "Konzeption", text: "Gemeinsam definieren wir Service-Level, KPIs und Gesprächsprozesse." },
  { n: 3, title: "Aufbau", text: "Agenten schulen, Systeme anbinden, Testbetrieb starten." },
  { n: 4, title: "Betrieb", text: "Laufender Betrieb mit Reporting, Optimierung und Skalierung." },
];

function CallcenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
          <div className="container-page pt-14 pb-20 md:pt-20 md:pb-28">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Callcenter-Lösungen
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2rem] leading-[1.05] tracking-tight md:text-[3.75rem]">
                  Ihre Prozesse brauchen mehr als Telefonannahme?{" "}
                  <span className="text-primary">Sekretariat-Service ist Ihr Callcenter-Partner.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  Wir übernehmen komplette Geschäftsprozesse mit qualifizierten Agenten,
                  tiefer Systemintegration und messbaren Ergebnissen.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild size="lg" className="rounded-full shadow-glow">
                    <Link to="/kontakt">
                      Beratung anfordern
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link to="/kontakt">Kontakt aufnehmen</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
                  {["Qualifizierte Agenten", "CRM-, ERP- & Ticketing-Integration", "Messbare KPIs"].map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/80">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="flex text-primary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4,7</span>
                  <span>Google-Rezensionen</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                Der Unterschied
              </div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Telefonservice vs. Callcenter
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ein Telefonservice nimmt Anrufe entgegen und leitet weiter. Ein Callcenter übernimmt
                komplette Geschäftsprozesse – mit Fachwissen, Systemzugriff und dokumentierten Ergebnissen.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background p-8">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Für einfache Anforderungen
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">Telefonservice</div>
                <ul className="mt-6 space-y-3">
                  {telefonservicePoints.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/90">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-8 w-full rounded-full">
                  <Link to="/">Zum Telefonservice</Link>
                </Button>
              </div>

              <div className="rounded-3xl border-2 border-primary/40 bg-background p-8 shadow-glow">
                <div className="text-xs font-medium uppercase tracking-wider text-primary">
                  Für komplexe Anforderungen
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">Callcenter</div>
                <ul className="mt-6 space-y-3">
                  {callcenterPoints.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/90">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full rounded-full">
                  <Link to="/kontakt">Angebot anfordern</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-t border-border/60">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Services</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Unsere Callcenter-Services
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 font-display text-2xl font-semibold">{s.title}</div>
                  <p className="mt-3 text-muted-foreground">{s.text}</p>
                  <Link
                    to="/kontakt"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Mehr erfahren
                    <ArrowRightCircle className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUILDING BLOCKS */}
        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                Leistungsbausteine
              </div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Von der Analyse bis zum Betrieb
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir bauen Ihr Callcenter-Projekt strukturiert auf.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {buildingBlocks.map((b, i) => (
                <div key={b.title} className="relative rounded-2xl border border-border bg-background p-8">
                  <div className="absolute -top-3 -left-3 grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-lg font-semibold shadow-glow">
                    {i + 1}
                  </div>
                  <div className="mt-2 grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIT-FOR */}
        <section className="border-t border-border/60">
          <div className="container-page py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="text-sm font-medium uppercase tracking-wider text-primary">
                  Für wen?
                </div>
                <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                  Für wen eignet sich unser Callcenter-Service?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Unsere Callcenter-Lösungen richten sich an Unternehmen, die über die Möglichkeiten
                  eines klassischen Telefonservices hinausgewachsen sind.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-full shadow-glow">
                  <Link to="/kontakt">Beratung anfordern</Link>
                </Button>
              </div>
              <ul className="space-y-4">
                {fitFor.map((f) => (
                  <li key={f} className="flex gap-3 rounded-xl border border-border bg-surface p-4">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                Ihre Vorteile
              </div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Sekretariat-Service als Callcenter-Partner
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {advantages.map((a) => (
                <div key={a.title} className="rounded-2xl border border-border bg-background p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-xl font-semibold">{a.title}</div>
                  <div className="mt-2 leading-relaxed text-muted-foreground">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="border-t border-border/60">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Start</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                So starten Sie mit Sekretariat-Service
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-surface p-8">
                  <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                    {s.n}
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">{s.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
