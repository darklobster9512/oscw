import { useRef, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, FileText, X, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = "2034512217434192";
export const metaPixelScript = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "Bitte Vornamen angeben").max(100),
  lastName: z.string().trim().min(1, "Bitte Nachnamen angeben").max(100),
  email: z.string().trim().email("Bitte gültige E-Mail angeben").max(255),
  phone: z
    .string()
    .trim()
    .min(4, "Bitte Handynummer angeben")
    .max(30, "Nummer zu lang"),
  birthdate: z.string().min(1, "Bitte Geburtsdatum angeben"),
  nationality: z
    .string()
    .trim()
    .min(2, "Bitte Staatsangehörigkeit angeben")
    .max(80),
  employment: z.enum(["Teilzeit", "Vollzeit"], {
    message: "Bitte Anstellungsart wählen",
  }),
  startDate: z.string().min(1, "Bitte Startdatum angeben"),
  cv: z
    .instanceof(File, { message: "Bitte Lebenslauf hochladen" })
    .refine((f) => f.size > 0, "Bitte Lebenslauf hochladen")
    .refine((f) => f.size <= MAX_CV_BYTES, "Maximal 10 MB")
    .refine(
      (f) => ALLOWED_CV_TYPES.includes(f.type) || /\.(pdf|docx?|)$/i.test(f.name),
      "Nur PDF oder DOC/DOCX",
    ),
  hasSetup: z.literal(true, {
    message: "Bitte bestätige dein Setup",
  }),
  privacy: z.literal(true, {
    message: "Bitte Datenschutz akzeptieren",
  }),
});

export function ApplicationForm({ stelle }: { stelle: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const cvFile = fd.get("cv");
    const result = applicationSchema.safeParse({
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      birthdate: fd.get("birthdate"),
      nationality: fd.get("nationality"),
      employment: fd.get("employment"),
      startDate: fd.get("startDate"),
      cv: cvFile instanceof File ? cvFile : new File([], ""),
      hasSetup: fd.get("hasSetup") === "on",
      privacy: fd.get("privacy") === "on",
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("vorname", result.data.firstName);
      payload.append("nachname", result.data.lastName);
      payload.append("email", result.data.email);
      payload.append("handynummer", result.data.phone);
      payload.append("geburtsdatum", result.data.birthdate);
      payload.append("staatsangehoerigkeit", result.data.nationality);
      payload.append("anstellung", result.data.employment);
      payload.append("startklar_ab", result.data.startDate);
      payload.append("lebenslauf", result.data.cv);
      payload.append("stelle", stelle.slice(0, 150));

      const res = await fetch(
        "https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application",
        { method: "POST", body: payload },
      );
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `HTTP ${res.status}`);
      }

      window.fbq?.("track", "Lead");
      setSent(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      const reason =
        err instanceof Error && err.message && !/^HTTP \d+/.test(err.message)
          ? err.message
          : null;
      setErrors({
        submit: reason
          ? `Bewerbung konnte nicht gesendet werden: ${reason}`
          : "Bewerbung konnte nicht gesendet werden. Bitte versuche es erneut oder schreibe uns an kontakt@sekretariat-service.de.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" strokeWidth={3} />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
          Danke für deine Bewerbung!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Wir haben deine Unterlagen erhalten und melden uns innerhalb von 3
          Werktagen bei dir.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setSent(false)}
        >
          Weitere Bewerbung senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Vorname" name="firstName" error={errors.firstName} required>
          <Input name="firstName" autoComplete="given-name" placeholder="z. B. Anna" />
        </Field>
        <Field label="Nachname" name="lastName" error={errors.lastName} required>
          <Input name="lastName" autoComplete="family-name" placeholder="z. B. Müller" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-Mail" name="email" error={errors.email} required>
          <Input name="email" type="email" autoComplete="email" placeholder="name@email.de" />
        </Field>
        <Field label="Handynummer" name="phone" error={errors.phone} required>
          <Input name="phone" type="tel" autoComplete="tel" placeholder="z. B. 0176 12345678" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Geburtsdatum" name="birthdate" error={errors.birthdate} required>
          <Input name="birthdate" type="date" />
        </Field>
        <Field
          label="Staatsangehörigkeit"
          name="nationality"
          error={errors.nationality}
          required
        >
          <Input name="nationality" placeholder="z. B. deutsch" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Anstellung" name="employment" error={errors.employment} required>
          <Select name="employment" defaultValue="Teilzeit">
            <SelectTrigger>
              <SelectValue placeholder="Bitte wählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Teilzeit">Teilzeit</SelectItem>
              <SelectItem value="Vollzeit">Vollzeit</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field
          label="Startklar ab"
          name="startDate"
          error={errors.startDate}
          required
        >
          <Input name="startDate" type="date" />
        </Field>
      </div>

      <CvUpload error={errors.cv} />

      <div className="space-y-3 rounded-xl border border-border bg-surface p-4">
        <CheckboxField
          name="hasSetup"
          required
          error={errors.hasSetup}
          label="Ich bestätige, dass ich über einen eigenen Computer/Laptop, ein Headset und eine stabile Internetverbindung verfüge."
        />
        <CheckboxField
          name="privacy"
          required
          error={errors.privacy}
          label={
            <>
              Ich habe die{" "}
              <a
                href="/datenschutz"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zu.
            </>
          }
        />
      </div>

      {errors.submit && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {errors.submit}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full rounded-full"
      >
        {submitting ? "Wird gesendet …" : "Bewerbung absenden"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Deine Daten werden vertraulich behandelt und ausschließlich für den
        Bewerbungsprozess verwendet.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function CheckboxField({
  name,
  label,
  error,
  required,
}: {
  name: string;
  label: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="flex items-start gap-3 text-sm text-foreground/85">
        <input
          type="checkbox"
          name={name}
          required={required}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
        />
        <span>
          {label}
          {required && <span className="text-primary"> *</span>}
        </span>
      </label>
      {error && <p className="mt-1 pl-7 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function CvUpload({ error }: { error?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const openPicker = () => inputRef.current?.click();
  const clear = () => {
    if (inputRef.current) inputRef.current.value = "";
    setFile(null);
  };

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-foreground">
        Lebenslauf <span className="text-primary">*</span>
      </label>

      <input
        ref={inputRef}
        name="cv"
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="sr-only"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      {!file ? (
        <button
          type="button"
          onClick={openPicker}
          className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(196,99,74,0.15)]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-foreground transition-transform duration-300 group-hover:scale-105">
            <FileText className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground">
              Lebenslauf auswählen
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Klicken zum Hochladen oder Datei ziehen
            </p>
          </div>
          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
      ) : (
        <div className="relative rounded-2xl border border-border bg-card p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-foreground">
              <FileText className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-bold text-foreground">
                    {file.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {formatBytes(file.size)} • Bereit zum Absenden
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clear}
                  aria-label="Datei entfernen"
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:text-destructive"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-full rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between px-1">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Akzeptiert: PDF, DOC, DOCX (max. 10 MB)
        </p>
        {file && (
          <button
            type="button"
            onClick={openPicker}
            className="flex items-center gap-1 text-xs font-bold text-foreground hover:underline"
          >
            Datei ändern
            <ChevronDown className="h-3 w-3" />
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
