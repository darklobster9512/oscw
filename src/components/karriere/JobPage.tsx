import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ApplicationForm } from "@/components/karriere/ApplicationForm";
import type { Job } from "@/data/jobs";
import {
  Home,
  Euro,
  Clock,
  Check,
  Users,
  GraduationCap,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";

export function JobPage({ job }: { job: Job }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface">
        <div className="container-page py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              to="/karriere"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Alle offenen Stellen
            </Link>
            <h1 className="mt-5 font-display text-[2rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl">
              {job.heroHeadline}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{job.heroText}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { icon: Euro, label: "20 €/Std" },
                { icon: Home, label: "100 % Homeoffice" },
                { icon: Clock, label: "Teilzeit & Vollzeit" },
                { icon: job.badgeIcon, label: job.badgeLabel },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
                >
                  <chip.icon className="h-4 w-4 text-primary" />
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <a href="#bewerbung">Jetzt bewerben</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Über die Rolle */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {job.roleHeadline}
            </h2>
            {job.roleParagraphs.map((p) => (
              <p key={p} className="mt-4 text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {job.tasksTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/85">
              {job.tasks.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                    <a.icon className="h-4 w-4" />
                  </span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Was wir bieten */}
      <section className="border-y border-border/60 bg-surface">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Was wir dir bieten
            </h2>
            <p className="mt-3 text-muted-foreground">
              Faire Rahmenbedingungen, damit du dich auf deine Arbeit
              konzentrieren kannst.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
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

      {/* Was du mitbringst */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Was du mitbringst
          </h2>
          <p className="mt-3 text-muted-foreground">
            Damit wir gemeinsam ab Tag eins liefern können.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {job.requirements.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl border border-border bg-background p-6"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rahmenbedingungen */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Anstellung", value: "Teilzeit / Vollzeit" },
              { label: "Vergütung", value: "20 € pro Stunde" },
              { label: "Arbeitsort", value: "Homeoffice (DE)" },
              { label: "Start", value: "Ab sofort" },
            ].map((f) => (
              <div key={f.label}>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-foreground">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bewerbungsformular */}
      <section id="bewerbung" className="border-t border-border/60 bg-surface">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Jetzt bewerben
              </h2>
              <p className="mt-3 text-muted-foreground">
                Fülle das Formular aus – wir melden uns innerhalb von 3
                Werktagen bei dir.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-background p-6 shadow-elegant sm:p-8">
              <ApplicationForm stelle={job.applicationValue} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const BENEFITS = [
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
];
