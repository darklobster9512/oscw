import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives";

type Plan = {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  unit: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basis",
    priceMonthly: "0,59 €",
    priceYearly: "0,50 €",
    unit: "pro Gespräch",
    tagline: "Für Einzelunternehmer & kleine Praxen",
    features: [
      "Anrufannahme in Ihrem Namen",
      "Info per E-Mail nach jedem Anruf",
      "Deutsch & Englisch",
      "Keine Grundgebühr",
    ],
    cta: "Kostenlos testen",
  },
  {
    name: "Professional",
    priceMonthly: "0,89 €",
    priceYearly: "0,76 €",
    unit: "pro Gespräch",
    tagline: "Beliebt bei KMU & Kanzleien",
    features: [
      "Alles aus Basis",
      "Terminvergabe in Ihrem Kalender",
      "SMS & Push-Benachrichtigungen",
      "Individueller Gesprächsleitfaden",
      "Persönlicher Ansprechpartner",
    ],
    cta: "Kostenlos testen",
    highlight: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "individuell",
    priceYearly: "individuell",
    unit: "Callcenter-Setup",
    tagline: "Callcenter-Lösung mit Fallabschluss",
    features: [
      "Alles aus Professional",
      "Fallabschließende Bearbeitung",
      "CRM- & ERP-Anbindung",
      "Definierte KPIs & Reporting",
      "Dediziertes Team & SLA",
    ],
    cta: "Angebot anfragen",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="preise" className="border-t border-border/60">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Preise</div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Fair pro Gespräch. Keine Grundgebühr.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sie zahlen nur für tatsächlich geführte Gespräche. Monatlich kündbar, ohne Setup-Kosten.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-border bg-surface p-1 text-sm">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
                  !yearly ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-medium transition-colors ${
                  yearly ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Jährlich
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${yearly ? "bg-white/40 text-foreground" : "bg-primary/15 text-foreground"}`}>
                  −15 %
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all ${
                  p.highlight
                    ? "border-2 border-transparent bg-white shadow-glow"
                    : "border border-border bg-surface hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
                }`}
                style={
                  p.highlight
                    ? {
                        backgroundImage:
                          "linear-gradient(white, white), linear-gradient(var(--primary), var(--primary))",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : undefined
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-foreground shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Beliebteste Wahl
                  </div>
                )}

                <div className="text-lg font-semibold text-foreground">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.tagline}</div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
                    {yearly ? p.priceYearly : p.priceMonthly}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.unit}</span>
                </div>

                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full ${p.highlight ? "bg-primary text-primary-foreground shadow-glow hover:opacity-90" : ""}`}
                    variant={p.highlight ? "default" : "outline"}
                  >
                    <a href="#kontakt">{p.cta}</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
