import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./DashboardMockup";
import { Reveal } from "./primitives";

const features = [
  "Komplette Gesprächsabwicklung mit Fachwissen",
  "Fallabschließende Bearbeitung inkl. Dokumentation",
  "Direkte Arbeit in Ihrem CRM, ERP oder Ticketing-System",
  "Definierte KPIs und aktive Qualitätssteuerung",
  "Skalierbare Teams mit Schichtmodellen",
];

export function CallcenterSection() {
  return (
    <section
      id="callcenter"
      className="relative overflow-hidden border-t border-border/60 text-white"
      style={{ background: "var(--ink-deep)" }}
    >
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

      <div className="container-page relative py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <DashboardMockup />
          </div>

          <Reveal className="order-1 lg:order-2">
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Callcenter-Lösung</div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Nicht nur annehmen –<br />
              <span className="text-primary">abschließen.</span>
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Wenn ein reiner Telefonservice nicht ausreicht: Unsere spezialisierten Teams übernehmen
              die vollständige Gesprächsbearbeitung – Recherche, Dokumentation, Systempflege.
            </p>

            <ul className="mt-8 space-y-3.5">
              {features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                <Link to="/callcenter">
                  Individuelles Angebot <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href="#kontakt">Beratung anfragen</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
