import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/jobs";
import {
  Sparkles,
  Euro,
  Home,
  Clock,
  ArrowRight,
  Users,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const TITLE = "Karriere – Offene Stellen im Homeoffice · Sekretariat24";
const DESCRIPTION =
  "Offene Stellen bei Sekretariat24: Sekretär:in und Recruiter:in – 20 € Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit.";

export const Route = createFileRoute("/karriere/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/karriere" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: KarriereIndex,
});

function KarriereIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="relative overflow-hidden border-b border-border/60 bg-surface">
        <div className="container-page py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Wir stellen ein
            </span>
            <h1 className="mt-5 font-display text-[2rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl">
              Offene Stellen
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Arbeite von zuhause aus in einem Team, das Wert auf saubere
              Prozesse und echten Zusammenhalt legt. Alle Stellen: 20 €
              Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-elegant sm:p-8"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <job.badgeIcon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {job.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{job.teaser}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: Euro, label: "20 €/Std" },
                  { icon: Home, label: "100 % Homeoffice" },
                  { icon: Clock, label: "Teilzeit & Vollzeit" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80"
                  >
                    <chip.icon className="h-3.5 w-3.5 text-primary" />
                    {chip.label}
                  </span>
                ))}
              </div>

              <div className="mt-7 pt-1">
                <Button asChild size="lg" className="rounded-full">
                  <Link to={job.path}>
                    Stelle ansehen
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Das erwartet dich bei uns
            </h2>
            <p className="mt-3 text-muted-foreground">
              Gleiche Rahmenbedingungen für alle Positionen.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Euro,
                title: "20 € Stundenlohn",
                text: "Faire, verlässliche Bezahlung ab dem ersten Tag.",
              },
              {
                icon: Home,
                title: "100 % Homeoffice",
                text: "Arbeiten von zuhause – deutschlandweit.",
              },
              {
                icon: Clock,
                title: "Teilzeit oder Vollzeit",
                text: "Planbare Schichten, die zu deinem Alltag passen.",
              },
              {
                icon: GraduationCap,
                title: "Strukturierte Einarbeitung",
                text: "Onboarding, Schulungen und feste Ansprech­personen.",
              },
              {
                icon: Users,
                title: "Wertschätzendes Team",
                text: "Kein Callcenter‑Klima – echter Zusammenhalt.",
              },
              {
                icon: ShieldCheck,
                title: "Sichere Prozesse",
                text: "Klare Guidelines, moderne Tools, DSGVO‑konform.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
