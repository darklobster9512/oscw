import { Clock, PhoneMissed, BellRing, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal } from "./primitives";

function MissedCallsChart() {
  return (
    <svg viewBox="0 0 200 60" className="mt-4 h-16 w-full" aria-hidden>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.19 152)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.78 0.19 152)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,20 L20,25 L40,18 L60,30 L80,28 L100,40 L120,45 L140,52 L160,55 L180,58 L200,58 L200,60 L0,60 Z"
        fill="url(#chartFill)"
      />
      <path
        d="M0,20 L20,25 L40,18 L60,30 L80,28 L100,40 L120,45 L140,52 L160,55 L180,58 L200,58"
        fill="none"
        stroke="oklch(0.78 0.19 152)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="58" r="4" fill="oklch(0.78 0.19 152)" />
    </svg>
  );
}

function IntegrationLogos() {
  const tools = ["Salesforce", "HubSpot", "Pipedrive", "Zendesk", "Slack"];
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tools.map((t) => (
        <div
          key={t}
          className="rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
        >
          {t}
        </div>
      ))}
    </div>
  );
}

const small = [
  { icon: Clock, title: "24/7/365", text: "Immer erreichbar – auch nachts und feiertags." },
  { icon: BellRing, title: "Sofort-Info", text: "Push, SMS oder E-Mail nach jedem Anruf." },
  { icon: ShieldCheck, title: "DSGVO & ISO", text: "Server in Deutschland, ISO 27001 zertifiziert." },
];

export function BentoBenefits() {
  return (
    <section id="vorteile" className="border-t border-border/60">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Vorteile</div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Alles was ein modernes Callcenter braucht.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nicht nur Anrufe entgegennehmen – abschließen, dokumentieren, in Ihr System schreiben.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Big card */}
          <Reveal className="md:col-span-2 md:row-span-1">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <PhoneMissed className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Nie wieder verpasste Anrufe.</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Kunden, die nicht durchkommen, sind Kunden, die zur Konkurrenz gehen. Wir nehmen jeden Anruf an – und dokumentieren jeden Kontakt.
              </p>
              <MissedCallsChart />
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Verpasste Anrufe (letzte 30 Tage)</span>
                <span className="font-semibold text-primary">–98 %</span>
              </div>
            </div>
          </Reveal>

          {/* Wide integration card */}
          <Reveal delay={0.08} className="md:row-span-1">
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">Ihr CRM, unser Team.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir arbeiten direkt in Ihrem Tool – kein Copy-Paste, keine Zettel.
              </p>
              <IntegrationLogos />
            </div>
          </Reveal>

          {/* Small cards */}
          {small.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.12 + i * 0.05}>
              <div className="group flex h-full min-h-[240px] flex-col justify-between rounded-3xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
