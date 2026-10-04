import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/primitives";
import {
  Clock,
  Focus,
  Headphones,
  Wallet,
  Smile,
  MousePointerClick,
  Building2,
  ShieldCheck,
  Bell,
  Coins,
  Smartphone,
  Zap,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/vorteile")({
  head: () => ({
    meta: [
      { title: "Vorteile – 24/7 Erreichbarkeit & mehr Umsatz · Sekretariat24" },
      {
        name: "description",
        content:
          "Nie wieder Anrufe verpassen: DSGVO-konform, deutschsprachig, ab Tag 1 einsatzbereit. Alle Vorteile im Überblick.",
      },
      { property: "og:title", content: "Vorteile – 24/7 Erreichbarkeit & mehr Umsatz · Sekretariat24" },
      {
        property: "og:description",
        content:
          "Nie wieder Anrufe verpassen: DSGVO-konform, deutschsprachig, ab Tag 1 einsatzbereit. Alle Vorteile im Überblick.",
      },
    ],
  }),
  component: VorteilePage,
});

const benefits = [
  {
    icon: Clock,
    title: "24/7 telefonische Erreichbarkeit",
    text: "Wir gehen ans Telefon wie ein Mitarbeiter Ihres Teams. Stellen Sie Ihren Anrufern rund um die Uhr einen persönlichen Ansprechpartner zur Verfügung.",
  },
  {
    icon: Focus,
    title: "Voller Fokus aufs Kerngeschäft",
    text: "Keine Störungen durch Anrufe. Egal ob in Meetings, Terminen oder bei der Arbeit – mit Sekretariat24 arbeiten Sie effektiver und entspannter.",
  },
  {
    icon: Headphones,
    title: "Individueller Büro-Support",
    text: "Wir unterstützen bei Kunden-Anrufen, Auskünften, Datenaufnahme, Bestell-Hotlines, Termin-Vereinbarungen und vielem mehr.",
  },
  {
    icon: Wallet,
    title: "Einfache & transparente Preise",
    text: "Telefonservice vom Testsieger. 0 € Grundgebühr, 0,59 € pro Gespräch & Minute, 100 % Kostenkontrolle: Sekretariat24 ausschalten = keine Kosten.",
  },
  {
    icon: Smile,
    title: "Top-Kundenzufriedenheit",
    text: "Perfekte Kunden-Erlebnisse im Kontakt mit Ihrem Business. Verpassen Sie keinen Anruf und profitieren Sie nachhaltig von zufriedenen Anrufern.",
  },
  {
    icon: MousePointerClick,
    title: "Einfache Bedienung",
    text: "Steuern Sie Ihr Sekretariat mit wenigen Klicks. Sekretariat24 lässt sich in Minuten einrichten und per Knopfdruck an- und ausschalten.",
  },
  {
    icon: Building2,
    title: "Professioneller Auftritt",
    text: "Perfekte Außendarstellung mit Sekretariat24. Vermitteln Sie Anrufern vom ersten Kontakt an einen professionellen Eindruck von Ihrem Unternehmen.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform",
    text: "Ihre Daten in sicheren Händen. Sekretariat24 ist zu 100 % DSGVO-konform mit strenger Verschwiegenheitspflicht gemäß § 203 StGB.",
  },
  {
    icon: Bell,
    title: "Immer informiert",
    text: "Echtzeit-Informationen zu jedem Anruf. Erhalten Sie Informationen zu jedem Anruf per E-Mail, SMS und Push-Nachricht.",
  },
  {
    icon: Coins,
    title: "Personal-Kosten sparen",
    text: "Nur 0,59 € pro Bearbeitungsminute. Unser Sekretariatsdienst übernimmt viele Büro-Aufgaben – oft deutlich günstiger als eigenes Personal.",
  },
  {
    icon: Smartphone,
    title: "Steuerung per App",
    text: "Kostenlos für iOS und Android. Ihr Online-Büro immer dabei: Steuern Sie Ihr Sekretariat ganz bequem per App.",
  },
  {
    icon: Zap,
    title: "Einfache Integration",
    text: "Anbindung an Ihre Plattformen. Mit Hilfe von Zapier lässt sich Sekretariat24 problemlos in andere Systeme integrieren.",
  },
];

function VorteilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
          <div className="container-page pt-14 pb-20 md:pt-20 md:pb-28">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Vorteile
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2rem] leading-[1.05] tracking-tight md:text-[3.75rem]">
                  Jeder verpasste Anruf kostet Umsatz.{" "}
                  <span className="text-primary">Sekretariat24 macht Schluss damit.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  Bereits 5.000 Firmen sind begeistert von unserer Anrufannahme. Entdecken Sie,
                  wie wir auch Ihr Business bereichern.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild size="lg" className="rounded-full shadow-glow">
                    <Link to="/kontakt">
                      Jetzt kostenlos testen
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link to="/kontakt">Account erstellen</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
                  {["24/7/365", "Keine Grundgebühr", "ab 0,59 € pro Gespräch"].map((b) => (
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

        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                Die Vorteile auf einen Blick
              </div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Was Sekretariat24 für Sie leistet
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 font-display text-lg font-semibold">{b.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
