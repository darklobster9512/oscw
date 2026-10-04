import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Reveal } from "@/components/landing/primitives";
import { Check, Star, ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Sekundengenau ab 0,59 € · Sekretariat24" },
      {
        name: "description",
        content:
          "Transparente Preise ohne Grundgebühr. Sekundengenaue Abrechnung, keine Vertragslaufzeit. Jetzt Tarif berechnen.",
      },
      { property: "og:title", content: "Preise – Sekundengenau ab 0,59 € · Sekretariat24" },
      {
        property: "og:description",
        content:
          "Transparente Preise ohne Grundgebühr. Sekundengenaue Abrechnung, keine Vertragslaufzeit. Jetzt Tarif berechnen.",
      },
    ],
  }),
  component: PreisePage,
});

const priceRows = [
  { label: "Bearbeitungsminute", hint: "Sekundengenaue Abrechnung. Bearbeitungszeit = Gesprächsminuten + max. 120 Sek. Nachbearbeitung.", price: "0,59 €" },
  { label: "Anrufannahmegebühr", hint: "Ab einer Gesprächszeit von 15 Sekunden.", price: "0,59 €" },
  { label: "Einrichtungsgebühr", hint: "inklusive", price: "0,00 €" },
  { label: "Monatliche Grundgebühr", hint: "inklusive", price: "0,00 €" },
  { label: "Gebühr für 24h-Erweiterung", hint: "inklusive", price: "0,00 €" },
  { label: "Zusätzliches Sekretariat für Mitarbeiter", hint: "inklusive", price: "0,00 €" },
  { label: "Minutenzuschlag außerhalb der Kernzeit (Mo.–Fr. 7–19 h)", hint: "inklusive", price: "0,00 €" },
  { label: "SMS-Benachrichtigung (optional)", hint: "pro SMS", price: "0,05 €" },
  { label: "E-Mail-Benachrichtigung", hint: "inklusive", price: "0,00 €" },
];

const forwardingRows = [
  { label: "Deutsches Festnetz", price: "0,01 € / Min." },
  { label: "Deutsches Mobilfunknetz", price: "0,09 € / Min." },
  { label: "Internationales Festnetz", price: "0,14 € / Min." },
  { label: "Internationales Mobilfunknetz", price: "0,19 € / Min." },
];

const addOnRows = [
  { label: "Individuelle Warteschleifenansage inkl. Melodie (Aufnahme & Implementierung)", price: "39,00 € einmalig" },
  { label: "Implementierung einer bereits bestehenden Wartemelodie", price: "19,00 € einmalig" },
  { label: "Rufnummer mit Wunsch-Ortsvorwahl", price: "10,00 € monatlich" },
  { label: "Blacklist – die Option gegen nervige Werbeanrufe", price: "5,00 € monatlich" },
  { label: "Adressbuch – die Option zur Verwaltung Ihrer Kunden", price: "20,00 € monatlich" },
];

const reviews = [
  {
    name: "Noah",
    date: "Juni 2026",
    text: "Ich bin mit Sekretariat24 wirklich sehr zufrieden. Besonders beeindruckt mich, wie schnell Anrufe entgegengenommen werden. Die Telefonagenten sind rund um die Uhr freundlich, professionell und deutschsprachig. Auch die Steuerung des Services über das Interface ist sehr komfortabel und gut durchdacht.",
  },
  {
    name: "Matthias Hengfeld",
    date: "Juni 2026",
    text: "Wir nutzen den Telefonservice von Sekretariat24, wenn bei uns gerade viel zu tun ist. Das ermöglicht uns, uns voll auf unsere Arbeit zu konzentrieren, während Anrufe zuverlässig entgegengenommen werden.",
  },
  {
    name: "Phuong Vo",
    date: "Mai 2026",
    text: "Wir nutzen Sekretariat24 jetzt schon im 2. Monat. Ich bin mit der Bearbeitung und dem ganzen Prozess sehr zufrieden. Mit dem Backoffice können alle notwendigen Einstellungen vorgenommen werden. Einfacher geht's nicht.",
  },
  {
    name: "Angelika Mausolff",
    date: "April 2026",
    text: "Mit Sekretariat24 habe ich den Partner gefunden, den ich seit Jahren gesucht habe. Die Mitarbeiter nehmen meine Anrufe professionell entgegen und innerhalb weniger Minuten habe ich eine Info, wer angerufen hat.",
  },
  {
    name: "Sandra Schaefer",
    date: "April 2026",
    text: "Die Anrufentgegennahme erfolgt sehr professionell und zuverlässig, genauso die Abrechnung. Die schnelle Ersteinrichtung hat individuell erfolgen können und wirklich sehr gut geklappt.",
  },
  {
    name: "Michaela Haase",
    date: "März 2026",
    text: "Sekretariat24 ist eine sehr gute Entlastung. Ich möchte den Service nicht mehr missen, weil es mir als Einzelunternehmerin die Möglichkeit bietet, in Ruhe konzentriert arbeiten zu können.",
  },
];

function fmt(n: number) {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function PreisePage() {
  const [calls, setCalls] = useState(100);
  const [duration, setDuration] = useState(2.5);

  const { annahme, minuten, total, perCall } = useMemo(() => {
    const annahme = calls * 0.59;
    const minuten = calls * duration * 0.59;
    const total = annahme + minuten;
    const perCall = calls > 0 ? total / calls : 0;
    return { annahme, minuten, total, perCall };
  }, [calls, duration]);

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
                  Preise · 100 % transparent
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2rem] leading-[1.05] tracking-tight md:text-[3.75rem]">
                  Was kostet gute Erreichbarkeit?{" "}
                  <span className="text-primary">Weniger, als Sie denken.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  0 € Grundgebühr, keine Vertragsbindung – Sie zahlen nur{" "}
                  <span className="font-semibold text-foreground">0,59 €</span> pro Gespräch und
                  Bearbeitungsminute, sekundengenau abgerechnet. Sekretariat24 ausschalten = keine Kosten.
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
                  {["0 € Grundgebühr", "0,59 € pro Gespräch & Minute", "100 % Kostenkontrolle"].map((b) => (
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

        {/* CALCULATOR */}
        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Preisrechner</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Was kostet Sekretariat24 für Sie?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Schätzen Sie Ihr Anrufvolumen – wir rechnen Ihre voraussichtlichen Monatskosten aus.
                Ohne Grundgebühr zahlen Sie nur das, was Sie wirklich nutzen.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
              {/* Inputs */}
              <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-card">
                <div className="text-lg font-semibold">Wie viel telefonieren Sie?</div>

                <div className="mt-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <label className="text-sm font-medium text-foreground">Anrufe pro Monat</label>
                    <span className="font-display text-xl font-semibold text-foreground sm:text-2xl">{calls}</span>
                  </div>
                  <Slider
                    value={[calls]}
                    min={10}
                    max={1000}
                    step={10}
                    onValueChange={(v) => setCalls(v[0])}
                    className="mt-4"
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>10</span>
                    <span>1.000</span>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <label className="text-sm font-medium text-foreground">
                      Ø Gesprächsdauer pro Anruf
                    </label>
                    <span className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {duration.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Min.
                    </span>
                  </div>
                  <Slider
                    value={[duration]}
                    min={1}
                    max={10}
                    step={0.5}
                    onValueChange={(v) => setDuration(v[0])}
                    className="mt-4"
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>1 Min.</span>
                    <span>10 Min.</span>
                  </div>
                </div>

                <p className="mt-8 text-xs text-muted-foreground">
                  Inkl. Gesprächszeit + max. 2 Min. Nachbearbeitung. Sekundengenau abgerechnet.
                </p>
              </div>

              {/* Result */}
              <div className="rounded-3xl bg-[color:var(--ink-deep)] p-6 sm:p-8 text-ink-deep-foreground shadow-card">
                <div className="text-sm uppercase tracking-wider text-ink-deep-foreground/70">
                  Ihre geschätzten Kosten
                </div>
                <div className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {fmt(total)} €
                </div>
                <div className="mt-1 text-sm text-ink-deep-foreground/70">
                  pro Monat · Ø {fmt(perCall)} € pro Anruf
                </div>

                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-ink-deep-foreground/10 pb-3">
                    <span className="text-ink-deep-foreground/80">Anrufannahme (0,59 € × Anrufe)</span>
                    <span className="font-semibold">{fmt(annahme)} €</span>
                  </div>
                  <div className="flex justify-between border-b border-ink-deep-foreground/10 pb-3">
                    <span className="text-ink-deep-foreground/80">Bearbeitungsminuten (0,59 € × Min.)</span>
                    <span className="font-semibold">{fmt(minuten)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-deep-foreground/80">Grundgebühr</span>
                    <span className="font-semibold">0,00 €</span>
                  </div>
                </div>

                <Button asChild size="lg" className="mt-8 w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                  <Link to="/kontakt">Jetzt kostenlos testen</Link>
                </Button>

                <p className="mt-4 text-xs text-ink-deep-foreground/60">
                  Beispielrechnung auf Basis Ihrer Angaben. Abgerechnet wird sekundengenau, ohne Grundgebühr und Mindestumsatz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="border-t border-border/60">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Kundenstimmen</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Das sagen unsere Kundinnen und Kunden
              </h2>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                <div className="flex text-primary">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4,7</span>
                <span className="text-muted-foreground">Basierend auf 200 Google-Rezensionen</span>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-surface p-8">
                  <div className="flex gap-0.5 text-primary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                    „{r.text}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-semibold text-primary">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* DETAIL PRICE TABLE */}
        <section className="border-t border-border/60 bg-surface">
          <div className="container-page py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Preisübersicht</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Unsere detaillierte Preisübersicht
              </h2>
            </div>

            <div className="mx-auto mt-14 max-w-4xl space-y-10">
              <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
                <div className="text-lg font-semibold">Kernleistungen</div>
                <ul className="mt-6 divide-y divide-border">
                  {priceRows.map((row) => (
                    <li key={row.label} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <div>
                        <div className="font-medium text-foreground">{row.label}</div>
                        <div className="text-sm text-muted-foreground">{row.hint}</div>
                      </div>
                      <div className="font-display text-xl font-semibold text-foreground sm:text-right">
                        {row.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
                <div className="text-lg font-semibold">Weiterleitungen (optional)</div>
                <ul className="mt-6 divide-y divide-border">
                  {forwardingRows.map((row) => (
                    <li key={row.label} className="flex items-center justify-between py-4">
                      <span className="text-foreground/90">{row.label}</span>
                      <span className="font-display text-lg font-semibold">{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
                <div className="text-lg font-semibold">Optionale Zusatzleistungen</div>
                <ul className="mt-6 divide-y divide-border">
                  {addOnRows.map((row) => (
                    <li key={row.label} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <span className="text-foreground/90">{row.label}</span>
                      <span className="font-display text-lg font-semibold sm:text-right">{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" size="lg" className="rounded-full gap-2">
                  <Download className="h-4 w-4" />
                  Preisliste als PDF herunterladen
                </Button>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
