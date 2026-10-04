import { Link } from "@tanstack/react-router";
import { Phone, Mail, ArrowRight, ShieldCheck, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  branchen: [
    { label: "Anwälte", to: "/branchen/$slug", params: { slug: "anwaelte" } },
    { label: "Ärzte", to: "/branchen/$slug", params: { slug: "aerzte" } },
    { label: "Handwerk", to: "/branchen/$slug", params: { slug: "handwerk" } },
    { label: "Steuerberater", to: "/branchen/$slug", params: { slug: "steuerberater" } },
    { label: "Callcenter", to: "/callcenter" },
  ],
  unternehmen: [
    { label: "Vorteile", href: "/#vorteile" },
    { label: "So funktioniert's", href: "/#ablauf" },
    { label: "Preise", href: "/#preise" },
    { label: "Kontakt", to: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", to: "/impressum" },
    { label: "Datenschutz", to: "/datenschutz" },
    { label: "AGB", to: "/agb" },
    { label: "Cookie Einstellungen", to: "/cookie-einstellungen" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--ink-deep)" }}
    >
      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(196,99,74,0.15), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(196,99,74,0.12), transparent)" }}
      />

      <div className="container-page relative py-20 lg:py-24">
        {/* Main footer content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: brand, claim, CTA, contact */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-2xl tracking-tight text-ink-deep-foreground">
                Sekretariat-Service
              </span>
            </div>


            <Button
              asChild
              size="lg"
              className="rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:bg-primary/90"
            >
              <Link to="/kontakt">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="flex flex-row flex-wrap gap-4 pt-2 text-sm">
              <a
                href="mailto:kontakt@sekretariat-service.de"
                className="group flex items-center gap-3 text-ink-deep-foreground/80 transition-colors hover:text-primary"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink-deep-foreground/5">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="font-medium">kontakt@sekretariat-service.de</span>
              </a>
            </div>
          </div>

          {/* Right: link groups */}
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground">
                Branchen
              </div>
              <ul className="mt-5 space-y-3">
                {footerLinks.branchen.map((link) => (
                  <li key={link.label}>
                    {"to" in link && "params" in link ? (
                      <Link
                        to={link.to}
                        params={link.params}
                        className="text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        to={link.to!}
                        className="text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground">
                Unternehmen
              </div>
              <ul className="mt-5 space-y-3">
                {footerLinks.unternehmen.map((link) => (
                  <li key={link.label}>
                    {"href" in link ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to!}
                        className="text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground">
                Rechtliches
              </div>
              <ul className="mt-5 space-y-3">
                {footerLinks.rechtliches.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink-deep-foreground/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-ink-deep-foreground/50">
            © {new Date().getFullYear()} OSCW Office Service & Co. Working GmbH – Sekretariat-Service ist ein Produkt der OSCW Office Service & Co. Working GmbH.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70">
              <Server className="h-3 w-3" />
              Made in Germany
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70">
              <ShieldCheck className="h-3 w-3" />
              DSGVO-konform
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70">
              ISO 27001
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
