# Karriere-Übersicht + zweite Stelle "Recruiter:in"

## Ziel
`/karriere` wird eine Übersichtsseite mit allen offenen Stellen. Von dort geht es auf die jeweilige Detailseite mit Stellenbeschreibung und Bewerbungsformular.

## Struktur

```text
/karriere                       Übersicht: 2 Stellen-Karten
/karriere/sekretariat           bisherige Sekretär:in-Seite (Inhalt unverändert)
/karriere/recruiting            neue Recruiter:in-Seite
```

Beide Stellen: 20 € / Stunde, 100 % Homeoffice, Teilzeit oder Vollzeit, Vorerfahrung und eigenes Setup (Laptop + Headset) nötig.

## Übersichtsseite
- Hero im Stil der bestehenden Seiten: Headline "Offene Stellen", kurzer Einleitungstext zum Arbeiten bei Sekretariat24.
- Zwei Stellen-Karten mit Titel, kurzer Beschreibung, Badges (20 €/Std., Homeoffice, Teilzeit/Vollzeit) und Button "Stelle ansehen".
- Kurzer Block "Das erwartet dich bei uns" (gemeinsame Benefits), damit die Seite nicht leer wirkt.
- Nav-Link "Karriere" zeigt weiterhin auf `/karriere`.

## Detailseite Recruiter:in
Gleicher Aufbau wie die bestehende Sekretariats-Seite, Texte auf Recruiting umgeschrieben:
- Aufgaben: Bewerber:innen telefonisch vorqualifizieren, Interviews terminieren, Kandidatendaten pflegen, Kommunikation per Telefon/E-Mail, Nachfassen bei Bewerbungen.
- Anforderungen: Erfahrung in Recruiting, Personal, Vertrieb oder telefonischer Kundenbetreuung; sehr gutes Deutsch; strukturierte Arbeitsweise.
- Gleiche Benefit- und Setup-Abschnitte.

## Bewerbungsformular
- Das bestehende Formular wird in eine gemeinsame Komponente ausgelagert und auf beiden Detailseiten verwendet.
- Felder, Validierung (inkl. 10 MB Lebenslauf) und der Endpoint bleiben exakt wie bisher – es wird kein zusätzliches Feld mitgesendet.
- Meta Pixel: PageView auf beiden Detailseiten, `Lead`-Event weiterhin nach erfolgreichem Absenden.

## SEO
Eigene Titel/Beschreibungen für alle drei Seiten (Übersicht, Sekretariat, Recruiting).

## Technische Umsetzung
- Neue Dateien: `src/routes/karriere.index.tsx`, `src/routes/karriere.sekretariat.tsx`, `src/routes/karriere.recruiting.tsx`.
- `src/routes/karriere.tsx` wird zum Layout-Route mit `<Outlet />`; die Seiteninhalte wandern in die Kindrouten.
- Formular + Validierung + Pixel-Logik in `src/components/karriere/ApplicationForm.tsx`.
- Stellendaten (Titel, Kurztext, Slug, Aufgaben, Anforderungen) in `src/data/jobs.ts`.
- Alte URL `/karriere` bleibt gültig (jetzt Übersicht); bestehende Ads-Links funktionieren weiter.
