import { MapPin, ShieldCheck, UserRound } from "lucide-react";

const signals = [
  {
    icon: MapPin,
    title: "Server in Deutschland",
    text: "Alle Daten verbleiben in deutschen Rechenzentren.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform",
    text: "ISO 27001 zertifiziert und rechtssicher betrieben.",
  },
  {
    icon: UserRound,
    title: "Persönlicher Ansprechpartner",
    text: "Feste Kontaktperson – kein anonymes Ticket-System.",
  },
];

export function FinalNote() {
  return (
    <section className="border-t border-border/60 bg-background">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            Vertrauen
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-4xl">
            Über 500 Unternehmen telefonieren bereits mit Sekretariat-Service.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aus Deutschland, für Deutschland. Wir setzen auf höchste
            Datenschutz-Standards und persönliche Betreuung – seit dem ersten
            Anruf.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {signals.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
