import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ShieldCheck, BarChart3, Megaphone } from "lucide-react";

export const Route = createFileRoute("/cookie-einstellungen")({
  head: () => ({
    meta: [
      { title: "Cookie-Einstellungen · Sekretariat-Service" },
      {
        name: "description",
        content:
          "Verwalten Sie Ihre Cookie-Präferenzen für sekretariat-service.de – transparent und jederzeit anpassbar.",
      },
      { property: "og:title", content: "Cookie-Einstellungen · Sekretariat-Service" },
      {
        property: "og:description",
        content: "Ihre Cookie-Präferenzen – notwendig, Statistik und Marketing individuell steuern.",
      },
      { property: "og:url", content: "/cookie-einstellungen" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cookie-einstellungen" }],
  }),
  component: CookiePage,
});

type Category = {
  id: "necessary" | "statistics" | "marketing";
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  locked?: boolean;
};

const categories: Category[] = [
  {
    id: "necessary",
    icon: ShieldCheck,
    title: "Notwendig",
    description:
      "Diese Cookies sind für den technischen Betrieb der Website unerlässlich – z. B. für Sicherheit, Sitzungsverwaltung und die Speicherung Ihrer Cookie-Auswahl. Sie können nicht deaktiviert werden.",
    locked: true,
  },
  {
    id: "statistics",
    icon: BarChart3,
    title: "Statistik",
    description:
      "Helfen uns anonymisiert zu verstehen, wie die Website genutzt wird, damit wir Inhalte und Ladezeiten verbessern können.",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    description:
      "Werden verwendet, um Ihnen relevante Inhalte anzuzeigen und die Effektivität unserer Kampagnen zu messen.",
  },
];

function CookiePage() {
  const [prefs, setPrefs] = useState({
    necessary: true,
    statistics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const update = (id: Category["id"], value: boolean) => {
    setPrefs((p) => ({ ...p, [id]: value }));
    setSaved(false);
  };

  const acceptAll = () => {
    setPrefs({ necessary: true, statistics: true, marketing: true });
    setSaved(true);
  };
  const rejectAll = () => {
    setPrefs({ necessary: true, statistics: false, marketing: false });
    setSaved(true);
  };
  const save = () => setSaved(true);

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="border-b border-border/60">
        <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Rechtliches
            </div>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight md:text-5xl">
              Cookie-Einstellungen
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Wir verwenden Cookies, um sekretariat-service.de sicher und komfortabel
              bereitzustellen. Sie entscheiden selbst, welche optionalen
              Kategorien Sie zulassen möchten – jederzeit änderbar.
            </p>
          </div>
        </section>

        <section className="container-page pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl space-y-4">
            {categories.map((c) => {
              const Icon = c.icon;
              const checked = prefs[c.id];
              return (
                <div
                  key={c.id}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 md:p-6"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-display text-lg tracking-tight">
                        {c.title}
                        {c.locked ? (
                          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            Immer aktiv
                          </span>
                        ) : null}
                      </h2>
                      <Switch
                        checked={checked}
                        disabled={c.locked}
                        onCheckedChange={(v) => update(c.id, v)}
                        aria-label={c.title}
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={rejectAll} className="rounded-full">
                  Nur notwendige
                </Button>
                <Button variant="outline" onClick={acceptAll} className="rounded-full">
                  Alle akzeptieren
                </Button>
              </div>
              <Button onClick={save} className="rounded-full">
                Auswahl speichern
              </Button>
            </div>

            {saved ? (
              <p className="pt-2 text-sm text-primary">
                Ihre Auswahl wurde übernommen.
              </p>
            ) : null}

            <p className="pt-6 text-xs text-muted-foreground">
              Weitere Informationen finden Sie in unserer{" "}
              <Link
                to="/datenschutz"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Datenschutzerklärung
              </Link>{" "}
              und im{" "}
              <Link
                to="/impressum"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Impressum
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
