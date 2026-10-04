import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";

export function CTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden"
      style={{ background: "#130f40" }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(196,99,74,0.25), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(196,99,74,0.15), transparent)" }}
      />

      <div className="container-page relative py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                14 Tage kostenlos · keine Kreditkarte
              </span>
            </div>

            <h2 className="mb-8 font-display text-3xl leading-[1.1] tracking-tight text-ink-deep-foreground sm:text-4xl lg:text-6xl">
              Testen Sie <span className="text-primary">Sekretariat-Service</span> kostenlos.
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-ink-deep-foreground/75 lg:text-xl">
              Kein Setup, keine Grundgebühr. Wir richten alles ein und Sie
              erleben, wie es sich anfühlt, kein Gespräch mehr zu verpassen.
            </p>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl bg-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
              >
                <a href="/kontakt">
                  Jetzt kostenlos starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <a
                href="tel:+4921197537952"
                className="group flex flex-col"
              >
                <span className="text-sm text-ink-deep-foreground/60">
                  Persönliche Beratung
                </span>
                <span className="flex items-center gap-2 font-semibold text-ink-deep-foreground transition-colors group-hover:text-primary">
                  <Phone className="h-4 w-4" />
                  0211 97537952
                </span>
              </a>
            </div>
          </div>

          {/* Right visual element */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="translate-y-8 rounded-3xl border border-ink-deep-foreground/10 bg-ink-deep p-6 shadow-2xl transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-3xl font-bold text-ink-deep-foreground">
                  98.4%
                </div>
                <div className="text-sm italic text-ink-deep-foreground/60">
                  Annahme-Quote
                </div>
              </div>

              <div className="-translate-y-4 rounded-3xl bg-primary p-6 shadow-2xl transition-transform hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-ink" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-ink">
                    Live Support
                  </span>
                </div>
                <div className="font-bold leading-tight text-ink">
                  Agent im
                  <br />
                  Gespräch...
                </div>
                <div className="mt-4 flex -space-x-2">
                  <img src="/avatar-agent-1.jpg" alt="Agentin" className="h-8 w-8 rounded-full border-2 border-primary object-cover" />
                  <img src="/avatar-agent-2.jpg" alt="Agentin" className="h-8 w-8 rounded-full border-2 border-primary object-cover" />
                  <img src="/avatar-agent-3.jpg" alt="Agentin" className="h-8 w-8 rounded-full border-2 border-primary object-cover" />
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-between rounded-3xl border border-ink-deep-foreground/10 bg-ink-deep p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-deep-foreground/5">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-deep-foreground">
                      Erfolgreich weitergeleitet
                    </div>
                    <div className="text-xs text-ink-deep-foreground/60">
                      Heute, 14:22 Uhr
                    </div>
                  </div>
                </div>
                <div className="font-bold text-primary">+1</div>
              </div>
            </div>

            {/* Backdrop glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-transparent blur-[80px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-8 -z-20 h-64 w-64 rounded-br-[100px] border-b border-r border-ink-deep-foreground/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
