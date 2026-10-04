import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowUpRight } from "lucide-react";

const agentAvatars = [
  "/avatar-agent-1.jpg",
  "/avatar-agent-2.jpg",
  "/avatar-agent-3.jpg",
  "/avatar-agent-4.jpg",
];

const tickets = [
  { name: "Anna Weber", topic: "Rückruf Erbrecht", status: "abgeschlossen", time: "vor 2 Min" },
  { name: "Thomas Klein", topic: "Terminanfrage", status: "in Bearbeitung", time: "vor 8 Min" },
  { name: "Lisa Müller", topic: "Neukundenanfrage", status: "abgeschlossen", time: "vor 14 Min" },
  { name: "Markus Faber", topic: "Vertragsfrage", status: "abgeschlossen", time: "vor 22 Min" },
];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl bg-white p-5 shadow-mockup md:p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground">sekretariat-24.app / dashboard</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Live
        </div>
      </div>

      {/* KPI row */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "Anrufe heute", value: "142", trend: "+18 %" },
          { label: "Abgeschlossen", value: "138", trend: "97 %" },
          { label: "⌀ Dauer", value: "2:14", trend: "−12 s" },
        ].map((k) => (
          <div key={k.label} className="rounded-2xl bg-surface p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.label}</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="font-display text-xl font-semibold text-foreground">{k.value}</span>
              <span className="text-[11px] font-medium text-primary">{k.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Ticket list */}
      <div className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-foreground">Aktuelle Fälle</div>
          <span className="text-[11px] text-muted-foreground">4 von 142</span>
        </div>
        <ul className="space-y-2">
          {tickets.map((t) => (
            <li
              key={t.name}
              className="flex items-center gap-3 rounded-xl border border-border/70 bg-white p-3 transition-colors hover:border-primary/30"
            >
              <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-primary text-[11px] font-bold text-foreground">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="truncate text-xs text-muted-foreground">{t.topic}</div>
              </div>
              <div className="hidden text-right sm:block">
                {t.status === "abgeschlossen" ? (
                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/12 px-2 py-0.5 text-[10px] font-medium text-foreground">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    abgeschlossen
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-900">
                    <Phone className="h-3 w-3" />
                    in Bearbeitung
                  </div>
                )}
                <div className="mt-1 text-[10px] text-muted-foreground">{t.time}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground" />
            </li>
          ))}
        </ul>
      </div>

      {/* Agent status */}
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-surface p-3">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {agentAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                className="h-6 w-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">12 Agents</span> online</span>
        </div>
        <div className="text-xs text-muted-foreground">SLA: <span className="font-semibold text-primary">99,2 %</span></div>
      </div>
    </motion.div>
  );
}
