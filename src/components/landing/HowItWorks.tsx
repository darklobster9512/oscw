import { UserPlus, PhoneForwarded, Headphones, type LucideIcon } from "lucide-react";

type Step = {
  num: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Testaccount erstellen",
    text: "In wenigen Minuten registriert – kostenlos und unverbindlich. Wir richten Ihren persönlichen Gesprächsleitfaden ein.",
    icon: UserPlus,
  },
  {
    num: "02",
    title: "Rufumleitung einrichten",
    text: "Sie leiten Ihre Anrufe zu Sekretariat-Service um – dauerhaft, bei Bedarf oder außerhalb der Geschäftszeiten.",
    icon: PhoneForwarded,
  },
  {
    num: "03",
    title: "Wir übernehmen ab jetzt",
    text: "Unsere Mitarbeiter gehen professionell in Ihrem Firmennamen ans Telefon – und Sie erhalten alles per Mail, SMS oder App.",
    icon: Headphones,
  },
];

export function HowItWorks() {
  return (
    <section id="ablauf" className="border-t border-border/60 bg-surface">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            So funktioniert's
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            In drei Schritten startklar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vom ersten Kontakt bis zum aktiven Service vergehen selten mehr
            als 24 Stunden.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Connector line behind cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />

          {steps.map(({ num, title, text, icon: Icon }) => (
            <div
              key={num}
              className="group relative flex flex-col rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div
                  aria-hidden
                  className="bg-gradient-to-br from-primary to-primary/40 bg-clip-text font-display text-6xl font-bold leading-none tracking-tight text-transparent md:text-7xl"
                >
                  {num}
                </div>
                <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Schritt
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
