import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  PhoneIncoming,
  CalendarCheck,
  MailCheck,
  Languages,
  Headset,
  FileText,
  Quote,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { Reveal } from "../primitives";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

/* 1 — Hero */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid gap-12 pt-12 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-20 md:pb-28">
        <div>
          <Reveal>
            <Eyebrow>Ihr Büro am Telefon · aus Berlin</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.25rem] font-semibold leading-[1.08] text-foreground md:text-[3.5rem]">
              Sie arbeiten.
              <br />
              <span className="italic text-primary">Wir gehen ran.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Sekretariat-Service ist Ihre ausgelagerte Telefonzentrale. Unser Team meldet
              sich mit Ihrem Firmennamen, notiert jedes Anliegen und schickt Ihnen alles
              Wichtige sofort zu – abgerechnet wird nur, was wirklich anfällt.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md">
                <Link to="/kontakt">
                  Unverbindlich anfragen <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-md underline-offset-4 hover:underline">
                <Link to="/preise">Preise vergleichen</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 grid max-w-lg grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {["Keine Grundgebühr", "Monatlich kündbar", "Deutschsprachiges Team", "DSGVO-konform"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-primary/15" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <img
                src="/hero-agent.jpg"
                alt="Freundliche Assistentin mit Headset nimmt Anrufe entgegen"
                width={1200}
                height={1408}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-6 bottom-10 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-mockup">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <PhoneIncoming className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">Anruf angenommen</div>
                <div className="text-xs text-muted-foreground">Notiz ist unterwegs zu Ihnen</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 2 — Trust bar */
export function TrustBar() {
  const items = [
    ["Mo–So", "erreichbar"],
    ["0 €", "Einrichtung"],
    ["30 Tage", "Kündigungsfrist"],
    ["100 %", "Server in Deutschland"],
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page grid grid-cols-2 divide-border py-8 md:grid-cols-4 md:divide-x">
        {items.map(([a, b]) => (
          <div key={b} className="px-4 py-3 text-center">
            <div className="font-display text-2xl font-semibold text-foreground">{a}</div>
            <div className="text-sm text-muted-foreground">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 3 — Problem / solution */
export function ProblemSolution() {
  const before = [
    "Das Telefon klingelt mitten im Kundentermin",
    "Anrufer landen auf der Mailbox und legen auf",
    "Rückrufe stapeln sich bis zum Feierabend",
    "Urlaub heißt: Telefon umleiten aufs Handy",
  ];
  const after = [
    "Ein Mensch meldet sich – in Ihrem Namen",
    "Jedes Anliegen wird vollständig notiert",
    "Sie entscheiden, wann Sie zurückrufen",
    "Ihre Erreichbarkeit macht keinen Urlaub",
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <Eyebrow>Warum auslagern?</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
          Jeder verpasste Anruf ist ein Auftrag, der woanders landet.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Ohne Sekretariat</div>
            <ul className="mt-6 space-y-4">
              {before.map((t) => (
                <li key={t} className="flex gap-3 text-foreground/80">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-foreground p-8 text-background">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Mit Sekretariat-Service</div>
            <ul className="mt-6 space-y-4">
              {after.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 4 — Services */
export function Services() {
  const services = [
    { icon: Headset, title: "Telefonannahme", text: "Wir melden uns mit Ihrem Wunschtext und nehmen Name, Nummer und Anliegen auf." },
    { icon: CalendarCheck, title: "Terminvergabe", text: "Termine tragen wir direkt in Ihren Kalender ein – nach Ihren Regeln und Zeitfenstern." },
    { icon: MailCheck, title: "Sofortige Weiterleitung", text: "Nach jedem Gespräch erhalten Sie eine kurze Zusammenfassung per E-Mail oder SMS." },
    { icon: FileText, title: "Eigener Leitfaden", text: "Häufige Fragen beantworten wir nach Ihren Vorgaben, damit Anrufer sofort weiterkommen." },
    { icon: Languages, title: "Zweisprachig", text: "Gespräche führen wir auf Deutsch und Englisch – ohne Aufpreis." },
    { icon: PhoneIncoming, title: "Überlauf & Urlaub", text: "Nur bei Besetzt, außerhalb der Bürozeiten oder komplett – Sie legen fest, wann wir übernehmen." },
  ];
  return (
    <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <Eyebrow>Leistungen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Was wir für Sie übernehmen</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} className="bg-background">
              <div className="h-full p-8">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5 — Steps */
export function Steps() {
  const steps = [
    ["Gespräch", "In einem kurzen Telefonat klären wir, wie Ihr Unternehmen am Telefon klingen soll."],
    ["Einrichtung", "Wir legen Begrüßung, Leitfaden und Benachrichtigungen an – meist am selben Tag."],
    ["Umleitung", "Sie stellen Ihre Rufumleitung ein. Ab jetzt geht niemand mehr verloren."],
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <Eyebrow>In drei Schritten startklar</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">So einfach geht der Start</h2>
      </Reveal>
      <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" aria-hidden />
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08}>
            <li className="relative">
              <span className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-primary bg-background font-display font-semibold text-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* 6 — Industries */
export function IndustryList() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Branchen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Wir sprechen Ihre Sprache</h2>
          <p className="mt-4 text-muted-foreground">
            Eine Kanzlei braucht andere Worte als ein Handwerksbetrieb. Für jede Branche
            arbeiten wir mit passenden Abläufen und Formulierungen.
          </p>
        </Reveal>
        <ul className="divide-y divide-border border-y border-border">
          {industries.map((ind) => (
            <li key={ind.slug}>
              <Link
                to="/branchen/$slug"
                params={{ slug: ind.slug }}
                className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
              >
                <ind.icon className="h-5 w-5 text-primary" />
                <span className="font-display text-lg font-semibold">{ind.name}</span>
                <span className="hidden flex-1 truncate text-sm text-muted-foreground md:block">{ind.short}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 7 — Day in the life */
export function DayInTheLife() {
  const day = [
    ["08:12", "Ein Neukunde fragt nach einem Angebot. Wir notieren Projekt, Budget und Rückrufzeit."],
    ["10:45", "Sie sind beim Kunden. Ein Termin wird verschoben – direkt in Ihrem Kalender."],
    ["13:30", "Ein Lieferant meldet eine Verspätung. Sie bekommen sofort eine SMS."],
    ["17:55", "Kurz vor Feierabend: zwei Rückrufwünsche, sauber zusammengefasst in Ihrem Postfach."],
  ];
  return (
    <section className="border-t border-border bg-foreground py-20 text-background md:py-28">
      <div className="container-page">
        <Reveal>
          <Eyebrow>Ein ganz normaler Dienstag</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Während Sie arbeiten, kümmern wir uns um den Rest.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {day.map(([time, text], i) => (
            <Reveal key={time} delay={i * 0.06}>
              <div className="h-full border-t-2 border-primary pt-5">
                <div className="font-display text-2xl font-semibold text-primary">{time}</div>
                <p className="mt-3 text-background/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — Pricing (prices unchanged) */
export function PricingTable() {
  const [yearly, setYearly] = useState(false);
  const plans = [
    { name: "Basis", m: "0,59 €", y: "0,50 €", unit: "je Gespräch", for: "Selbstständige und kleine Praxen", items: ["Annahme mit Ihrem Firmennamen", "Zusammenfassung per E-Mail", "Deutsch & Englisch", "Keine monatliche Gebühr"] },
    { name: "Professional", m: "0,89 €", y: "0,76 €", unit: "je Gespräch", for: "Wachsende Teams und Kanzleien", items: ["Alle Basis-Leistungen", "Termine in Ihrem Kalender", "SMS- und Push-Hinweise", "Eigener Gesprächsleitfaden", "Fester Ansprechpartner"], top: true },
    { name: "Enterprise", m: "individuell", y: "individuell", unit: "nach Absprache", for: "Größere Volumen mit Callcenter", items: ["Alle Professional-Leistungen", "Anliegen komplett abschließen", "Anbindung an CRM und ERP", "Kennzahlen und Reports", "Eigenes Team mit SLA"] },
  ];
  return (
    <section id="preise" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Preise</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Sie zahlen pro Gespräch. Sonst nichts.</h2>
          </Reveal>
          <div className="inline-flex w-fit rounded-md border border-border p-1 text-sm">
            <button onClick={() => setYearly(false)} className={`rounded px-4 py-1.5 ${!yearly ? "bg-foreground text-background" : "text-muted-foreground"}`}>Monatlich</button>
            <button onClick={() => setYearly(true)} className={`rounded px-4 py-1.5 ${yearly ? "bg-foreground text-background" : "text-muted-foreground"}`}>Jährlich</button>
          </div>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border">
          {plans.map((p) => (
            <div key={p.name} className={`grid gap-6 p-8 md:grid-cols-[1fr_1.5fr_auto] md:items-center ${p.top ? "bg-primary/5" : ""}`}>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{p.name}</h3>
                  {p.top && <span className="rounded bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">Meistgewählt</span>}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                <div className="mt-4 font-display text-3xl font-semibold text-foreground">
                  {yearly ? p.y : p.m} <span className="text-sm font-normal text-muted-foreground">{p.unit}</span>
                </div>
              </div>
              <ul className="grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                {p.items.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{f}</li>
                ))}
              </ul>
              <Button asChild variant={p.top ? "default" : "outline"} className="rounded-md">
                <Link to="/kontakt">Anfragen</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9 — Testimonials */
export function Voices() {
  const quotes = [
    { img: "/testimonial-1.jpg", name: "Kathrin M.", role: "Physiotherapie-Praxis", text: "Früher habe ich zwischen zwei Behandlungen Rückrufe erledigt. Heute lese ich abends eine Liste – und alle Termine stehen schon im Kalender." },
    { img: "/testimonial-2.jpg", name: "Jonas R.", role: "Elektrobetrieb", text: "Auf der Baustelle kann ich nicht ans Telefon. Seit wir den Service nutzen, geht uns kein Auftrag mehr durch die Lappen." },
    { img: "/testimonial-3.jpg", name: "Dr. Sabine W.", role: "Steuerkanzlei", text: "Die Mandanten merken keinen Unterschied zu unserem eigenen Empfang. Genau das war uns wichtig." },
  ];
  return (
    <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <Eyebrow>Stimmen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Was unsere Kunden sagen</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-foreground">{q.text}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={q.img} alt="" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-foreground">{q.name}</div>
                    <div className="text-sm text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10 — FAQ */
export function Questions() {
  const faqs = [
    ["Merken meine Anrufer, dass sie mit einem externen Service sprechen?", "Nein. Wir melden uns mit Ihrem Firmennamen und Ihrer Begrüßung und halten uns an Ihre Vorgaben."],
    ["Wie leite ich meine Anrufe weiter?", "Über die Rufumleitung Ihrer Telefonanlage oder Ihres Mobilfunkvertrags. Wir zeigen Ihnen beim Start, wie es geht."],
    ["Was zählt als Gespräch?", "Jeder angenommene Anruf, unabhängig von der Dauer. Verbindungen ohne Gesprächspartner berechnen wir nicht."],
    ["Gibt es eine Mindestlaufzeit?", "Nein. Sie können monatlich kündigen – ohne Einrichtungsgebühr und ohne Grundgebühr."],
    ["Wie werden meine Daten geschützt?", "Wir arbeiten DSGVO-konform, mit Servern in Deutschland und einem Auftragsverarbeitungsvertrag."],
  ];
  return (
    <section id="faq" className="border-t border-border py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Fragen & Antworten</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Gut zu wissen</h2>
          <p className="mt-4 text-muted-foreground">
            Ihre Frage ist nicht dabei? <Link to="/kontakt" className="text-primary underline underline-offset-4">Schreiben Sie uns.</Link>
          </p>
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-foreground">
                {q}
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11 — Closing */
export function Closing() {
  return (
    <section id="kontakt" className="border-t border-border py-20 md:py-28">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-foreground md:text-5xl">
            Ab morgen geht bei Ihnen <span className="italic text-primary">jemand ran.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Erzählen Sie uns kurz von Ihrem Unternehmen. Wir melden uns innerhalb eines Werktags mit einem passenden Vorschlag.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-md">
            <Link to="/kontakt">Jetzt Kontakt aufnehmen <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
