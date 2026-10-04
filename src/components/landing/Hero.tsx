import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Clock, PhoneCall } from "lucide-react";
import { Reveal } from "./primitives";

const heroAvatars = [
  "/avatar-hero-1.jpg",
  "/avatar-hero-2.jpg",
  "/avatar-hero-3.jpg",
  "/avatar-hero-4.jpg",
  "/avatar-hero-5.jpg",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />

      <div className="container-page grid gap-12 pt-14 pb-24 md:grid-cols-2 md:items-center md:pt-20 md:pb-32 lg:gap-16">
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-white/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Telefonservice · Made in Germany
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2rem] leading-[1.05] tracking-tight text-foreground md:text-[3.75rem]">
              Telefonservice für Ihr Unternehmen, der{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">keinen Anruf</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-primary/60 md:h-4"
                />
              </span>{" "}
              verpasst.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Wir nehmen jeden Anruf in Ihrem Namen an — 24/7, freundlich und
              professionell. Direkt angebunden an Ihr CRM, ab{" "}
              <span className="font-semibold text-foreground">0,59 €</span> pro Gespräch,
              ohne Grundgebühr.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 sm:w-auto">
                <a href="#kontakt">
                  14 Tage kostenlos testen
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full rounded-full sm:w-auto">
                <a href="#callcenter">Callcenter-Lösung ansehen</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex -space-x-2">
                {heroAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-foreground">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-foreground">4,9</span>
                </div>
                <div className="text-xs text-muted-foreground">von 5.000+ Unternehmen</div>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-foreground" />
                DSGVO · Server DE · ISO 27001
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-mockup">
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

            {/* Floating badge – top */}
            <div className="absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-mockup md:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Rufannahme ⌀
                </div>
                <div className="font-display text-lg font-semibold leading-tight text-foreground">
                  3,2 Sek.
                </div>
              </div>
            </div>

            {/* Floating badge – bottom */}
            <div className="absolute -right-4 bottom-10 hidden items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-mockup md:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--ink-deep)] text-white">
                <PhoneCall className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Erreichbar
                </div>
                <div className="font-display text-lg font-semibold leading-tight text-foreground">
                  24 / 7 / 365
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
