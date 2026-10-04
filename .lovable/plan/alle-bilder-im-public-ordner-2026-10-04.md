# Alle Bilder im public-Ordner

## Ist-Zustand
- Alle echten Bilddateien (Logo, Favicon, Hero, Avatare, Testimonials, Callcenter) liegen bereits in `public/` und werden von dort eingebunden.
- Unter `src/assets/logos/` liegen nur noch 12 unbenutzte Verweis-Dateien (`.asset.json`) für alte Tool-Logos (Slack, Zendesk, HubSpot usw.). Kein Code referenziert sie mehr.

## Schritte
1. Den Ordner `src/assets/logos/` mit den 12 unbenutzten Verweis-Dateien löschen.
2. Build-Prüfung, um sicherzugehen, dass nichts davon gebraucht wird.
3. Kurzer visueller Check der Startseite (Logo, Hero-Bild, Avatare laden weiterhin).

## Ergebnis
Alle Bilder liegen ausschließlich im `public/`-Ordner; es gibt keine Bilddateien mehr unter `src/`.
