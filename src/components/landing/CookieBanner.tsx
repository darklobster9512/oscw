import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "Sekretariat-Service-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (!value) {
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:px-0 sm:pb-0"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
    >
      <div
        className="rounded-2xl border border-white/10 bg-ink-deep p-5 text-white shadow-2xl shadow-black/30 backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <p className="text-sm leading-relaxed text-white/85">
          Wir verwenden Cookies, um unsere Website zu verbessern. Details findest du in den{" "}
          <Link
            to="/cookie-einstellungen"
            className="underline decoration-primary/60 underline-offset-2 hover:text-primary"
          >
            Cookie-Einstellungen
          </Link>{" "}
          und der{" "}
          <Link
            to="/datenschutz"
            className="underline decoration-primary/60 underline-offset-2 hover:text-primary"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
