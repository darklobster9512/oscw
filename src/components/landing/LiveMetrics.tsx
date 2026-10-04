import { CountUp } from "./primitives";

const metrics = [
  { value: 2.4, suffix: " Mio.", decimals: 1, label: "Anrufe pro Jahr" },
  { value: 3.2, suffix: " s", decimals: 1, label: "⌀ Rufannahme" },
  { value: 98, suffix: " %", decimals: 0, label: "Fallabschluss-Quote" },
  { value: 24, suffix: "/7", decimals: 0, label: "Erreichbarkeit" },
];

export function LiveMetrics() {
  return (
    <section aria-label="Live-Kennzahlen" className="border-y border-border/60 bg-white">
      <div className="container-page py-10 md:py-14">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-border">
          {metrics.map((m) => (
            <div key={m.label} className="px-2 text-center md:px-8">
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                <CountUp to={m.value} decimals={m.decimals} suffix={m.suffix} />
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground md:text-sm md:normal-case md:tracking-normal">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

