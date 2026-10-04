# Domain- und E-Mail-Umstellung auf sekretariat24.app

Alle Vorkommen der alten Domain `sekretariat-24.de` und der E-Mail `info@sekretariat-24.de` werden ersetzt durch `web.sekretariat24.app` bzw. `info@sekretariat24.app`.

## Änderungen

- `vite.config.ts` — `allowedHosts` auf `web.sekretariat24.app` umstellen (alter Eintrag bleibt zusätzlich erhalten, damit die bestehende Domain weiter funktioniert).
- `src/routes/kontakt.tsx` — E-Mail-Link und Anzeigetext.
- `src/routes/impressum.tsx` — Intro-Text, E-Mail-Link, "Web:"-Zeile, Produkt-Hinweis unten.
- `src/routes/datenschutz.tsx` — Intro-Text und Kontakt-E-Mail.
- `src/routes/cookie-einstellungen.tsx` — Meta-Beschreibung und Fließtext.
- `src/components/landing/Footer.tsx` — E-Mail-Link und Anzeigetext.
- `src/components/karriere/ApplicationForm.tsx` — Fehlermeldung mit Kontakt-E-Mail.

## Hinweis

Der Bewerbungs-Endpoint bleibt unverändert. Die tatsächliche Domainverbindung (DNS/Custom Domain) erfolgt separat in den Projekteinstellungen unter Domains.
