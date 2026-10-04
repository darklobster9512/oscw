import {
  Clock,
  PhoneMissed,
  BellRing,
  ToggleRight,
  Smile,
  Focus,
} from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "24/7/365 Erreichbarkeit",
    text: "Rund um die Uhr telefonisch für Ihre Kunden erreichbar – auch an Wochenenden und Feiertagen.",
  },
  {
    icon: PhoneMissed,
    title: "Keine verpassten Anrufe",
    text: "Kein Kundenanruf und kein Auftrag geht verloren – jeder Kontakt wird zuverlässig entgegengenommen.",
  },
  {
    icon: BellRing,
    title: "Info per Mail, SMS & App",
    text: "Details zu jedem Gespräch erhalten Sie in Echtzeit über den Kanal Ihrer Wahl.",
  },
  {
    icon: ToggleRight,
    title: "Flexibel aktivierbar",
    text: "Aktivieren Sie den Service nur dann, wenn Sie ihn wirklich brauchen – tageweise oder dauerhaft.",
  },
  {
    icon: Smile,
    title: "Professionell & freundlich",
    text: "Geschulte Mitarbeiter sorgen für ein perfektes Kundenerlebnis – wie Ihr eigenes Empfang.",
  },
  {
    icon: Focus,
    title: "Mehr Ruhe & Fokus",
    text: "Arbeiten Sie konzentriert – ohne Unterbrechungen durch das Telefon.",
  },
];

export function Benefits() {
  return (
    <section id="vorteile" className="border-t border-border/60 bg-surface">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            Vorteile
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Warum sich Unternehmen für Sekretariat-Service entscheiden
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ein Sekretariat, das mitdenkt, mitwächst und sich anfühlt wie ein
            Teil Ihres Teams.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
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
