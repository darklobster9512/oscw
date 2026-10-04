import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Clock,
  Shield,
  MapPinned,
  PhoneCall,
} from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Rückruf-Service · Sekretariat-Service" },
      {
        name: "description",
        content:
          "Rückruf innerhalb von 60 Minuten. Sprechen Sie mit unserem Team über Ihren individuellen Telefonservice.",
      },
      { property: "og:title", content: "Kontakt & Rückruf-Service · Sekretariat-Service" },
      {
        property: "og:description",
        content:
          "Rückruf innerhalb von 60 Minuten. Sprechen Sie mit unserem Team über Ihren individuellen Telefonservice.",
      },
    ],
  }),
  component: KontaktPage,
});

const INTENTS = ["Beratung", "Angebot", "Rückruf", "Demo", "Sonstiges"] as const;
type Intent = (typeof INTENTS)[number];

const callbackSchema = z.object({
  name: z.string().trim().min(1, "Bitte Namen angeben").max(100),
  phone: z
    .string()
    .trim()
    .min(4, "Bitte gültige Telefonnummer angeben")
    .max(30, "Telefonnummer zu lang"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  time: z.string().max(40).optional().or(z.literal("")),
});

const messageSchema = z.object({
  name: z.string().trim().min(1, "Bitte Namen angeben").max(100),
  email: z.string().trim().email("Bitte gültige E-Mail-Adresse angeben").max(255),
  message: z
    .string()
    .trim()
    .min(1, "Bitte Nachricht eingeben")
    .max(1000, "Maximal 1000 Zeichen"),
});

function KontaktPage() {
  const [mode, setMode] = useState<"callback" | "message">("callback");
  const [intent, setIntent] = useState<Intent>("Beratung");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleCallback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = callbackSchema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      company: fd.get("company") ?? "",
      time: fd.get("time") ?? "",
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string") errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = messageSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string") errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container-page py-14 md:py-28">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            Kontakt
          </div>
          <h1 className="mt-3 font-display text-[2rem] leading-[1.1] tracking-tight md:text-6xl md:leading-tight">
            Wir rufen Sie zurück – meist in 15&nbsp;Minuten.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Kostenlose, unverbindliche Beratung. Sagen Sie uns kurz, worum es geht –
            wir kümmern uns.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Antwort in 15 Min.
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" /> DSGVO-konform
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPinned className="h-4 w-4 text-primary" /> Made in Germany
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Left – contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl tracking-tight">So erreichen Sie uns</h2>
            <p className="mt-2 text-muted-foreground">
              Lieber direkt sprechen? Rufen Sie uns an – wir sind für Sie da.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <a
                    href="tel:+4921197537952"
                    className="font-medium hover:text-primary"
                  >
                    0211 97537952
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-Mail</div>
                  <a
                    href="mailto:kontakt@sekretariat-service.de"
                    className="font-medium hover:text-primary"
                  >
                    kontakt@sekretariat-service.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresse</div>
                  <div className="font-medium">
                    OSCW Office Service & Co. Working GmbH · Hugo-Heimann-Str. 37 · 12353 Berlin
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Erreichbarkeit</div>
                  <div className="font-medium">Mo–Fr 8–20 Uhr · Sa 9–14 Uhr</div>
                </div>
              </div>
            </div>

            <a
              href="tel:+4921197537952"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              <PhoneCall className="h-4 w-4" /> Jetzt direkt anrufen
            </a>
          </div>

          {/* Right – primary card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 md:p-10 shadow-card">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl">Vielen Dank!</h2>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    {mode === "callback"
                      ? "Wir rufen Sie so schnell wie möglich zurück – meist innerhalb von 15 Minuten."
                      : "Wir melden uns innerhalb eines Werktags bei Ihnen."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl tracking-tight">
                        {mode === "callback"
                          ? "Kostenlosen Rückruf anfordern"
                          : "Nachricht schreiben"}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {mode === "callback"
                          ? "Wir melden uns telefonisch – schnell und unverbindlich."
                          : "Wir antworten innerhalb eines Werktags."}
                      </p>
                    </div>
                  </div>

                  {/* Intent chips */}
                  <div className="mt-6">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Ihr Anliegen
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {INTENTS.map((it) => {
                        const active = intent === it;
                        return (
                          <button
                            key={it}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setIntent(it)}
                            className={
                              "rounded-full px-4 py-1.5 text-sm transition-colors " +
                              (active
                                ? "bg-primary text-primary-foreground ring-1 ring-primary"
                                : "border border-border text-foreground hover:border-primary/40 hover:text-primary")
                            }
                          >
                            {it}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {mode === "callback" ? (
                    <form onSubmit={handleCallback} className="mt-6 space-y-5">
                      <input type="hidden" name="intent" value={intent} />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            maxLength={100}
                            placeholder="Max Mustermann"
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && (
                            <p className="text-xs text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            maxLength={30}
                            placeholder="+49 ..."
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="text-xs text-destructive">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Firma (optional)</Label>
                          <Input
                            id="company"
                            name="company"
                            maxLength={120}
                            placeholder="Mustermann GmbH"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Wunschzeit</Label>
                          <select
                            id="time"
                            name="time"
                            defaultValue="So schnell wie möglich"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option>So schnell wie möglich</option>
                            <option>Vormittag (8–12 Uhr)</option>
                            <option>Nachmittag (12–17 Uhr)</option>
                            <option>Abend (17–20 Uhr)</option>
                          </select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full"
                      >
                        <PhoneCall className="mr-2 h-4 w-4" />
                        Rückruf anfordern
                      </Button>

                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        Antwort innerhalb 15 Min. während Geschäftszeiten
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                      </p>

                      <div className="border-t border-border pt-4 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setMode("message");
                            setErrors({});
                          }}
                          className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          Lieber schriftlich? Nachricht schreiben
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form onSubmit={handleMessage} className="mt-6 space-y-5">
                      <input type="hidden" name="intent" value={intent} />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            maxLength={100}
                            placeholder="Max Mustermann"
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && (
                            <p className="text-xs text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={255}
                            placeholder="ihre@email.de"
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Ihre Nachricht</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          maxLength={1000}
                          required
                          placeholder="Wobei können wir Sie unterstützen?"
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="text-xs text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full"
                      >
                        Nachricht senden
                      </Button>

                      <p className="text-xs text-muted-foreground">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                      </p>

                      <div className="border-t border-border pt-4 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setMode("callback");
                            setErrors({});
                          }}
                          className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          Zurück zum Rückruf-Formular
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
