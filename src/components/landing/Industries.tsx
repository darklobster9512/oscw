import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";

const order = [
  "kmu",
  "handwerk",
  "e-commerce",
  "start-ups",
  "aerzte",
  "immobilien",
  "anwaelte",
  "steuerberater",
  "versicherungen",
  "weitere",
];
const sortedIndustries = [...industries].sort(
  (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug),
);

export function Industries() {
  const [activeSlug, setActiveSlug] = useState(sortedIndustries[0].slug);
  const active =
    sortedIndustries.find((i) => i.slug === activeSlug) ?? sortedIndustries[0];
  const ActiveIcon = active.icon;

  return (
    <section id="branchen" className="border-t border-border/60">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-wider text-primary">
              Branchenlösungen
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Zugeschnitten auf Ihre Branche
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Wir sprechen die Sprache Ihrer Kunden – mit branchenspezifischem
            Wortlaut, Prozessen und Anbindungen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(240px,1fr)_2fr] lg:gap-10">
          {/* Mobile: horizontal scrollable pills */}
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            {sortedIndustries.map(({ slug, name, icon: Icon }) => {
              const isActive = slug === activeSlug;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setActiveSlug(slug)}
                  className={`flex min-w-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-border bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{name}</span>
                </button>
              );
            })}
          </div>


          {/* Desktop: vertical list */}
          <ul className="hidden flex-col gap-1 lg:flex">
            {sortedIndustries.map(({ slug, name, icon: Icon }) => {
              const isActive = slug === activeSlug;
              return (
                <li key={slug}>
                  <button
                    type="button"
                    onClick={() => setActiveSlug(slug)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 flex-none ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span className="flex-1">{name}</span>
                    <ArrowUpRight
                      className={`h-4 w-4 flex-none transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview panel */}
          <div
            key={active.slug}
            className="relative flex flex-col rounded-3xl border border-border bg-surface p-8 duration-300 animate-in fade-in slide-in-from-bottom-1 md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                Branchenlösung
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {active.name}
            </h3>
            <p className="mt-3 text-lg leading-snug text-foreground/85">
              {active.short}
            </p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {active.long}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-background/60 p-4">
              <div>
                <div className="font-display text-xl font-semibold text-foreground">
                  24/7
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  Erreichbarkeit
                </div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-display text-xl font-semibold text-foreground">
                  ab 0,59 €
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  pro Gespräch
                </div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-display text-xl font-semibold text-foreground">
                  &lt; 24 h
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  Setup
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 sm:w-auto"
              >
                <Link to="/branchen/$slug" params={{ slug: active.slug }}>
                  Zur Branchenseite
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="#kontakt"
                className="text-sm font-semibold text-foreground hover:text-primary sm:ml-0"
              >
                Beratung anfragen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
