# Rebranding: Sekretariat-Service

## Ziel
Der komplette Auftritt wird von "Sekretariat24" auf **Sekretariat-Service** umgestellt: neuer Name überall, warmes hochwertiges Farbbild (Cremeweiß + Terrakotta + Dunkelgrau), neues Logo, neue Hero- und Callcenter-Bilder, neue Kontaktdaten.

## Neue Marken-/Firmendaten
- Name: Sekretariat-Service · Domain: sekretariat-service.de
- Firma: OSCW Office Service & Co. Working GmbH
- Adresse: Hugo-Heimann-Str. 37, 12353 Berlin
- Register: Amtsgericht Charlottenburg (Berlin), HRB 258833 B · USt-IdNr.: DE345852620
- E-Mail: kontakt@sekretariat-service.de · Geschäftsführer: Matteusz Pawlik

## 1. Design (Farben + Schriften)
- Neue Design-Tokens in `src/styles.css`: Cremeweiß-Hintergrund, Terrakotta als Primärfarbe, dunkles Warmgrau für Text; hell und dunkel.
- Schrift-Wechsel: warme Serifenschrift für Überschriften (Lora), Work Sans für Fließtext — geladen über `<link>` im Root-Route, nicht per CSS-Import.
- Abgestimmte Farbvarianten für Bestandteile, die aktuell Mintgrün-Annahmen haben (Glow-Schatten, Mesh-Hintergründe, Grid/Dots).

## 2. Logo
- Neues Logo: Wortmarke "Sekretariat-Service" mit Telefonhörer-Symbol, transparentes PNG in Terrakotta/Dunkelgrau.
- Austausch in Nav und Footer (aktuell inline JSX: Icon + Schriftzug), neues `favicon.png`.

## 3. Name + Texte austauschen (ca. 24 Dateien)
- Alle Seiten-Titel, Meta-Descriptions, og-Tags und Fließtexte (Startseite, Vorteile, Preise, Callcenter, Branchen, Kontakt, Karriere, Jobs-Daten, Footer/Nav/Hero u. a.).
- Rechtliche Seiten: Impressum, AGB, Datenschutz, Cookie-Einstellungen auf die neuen Firmendaten und die neue Domain/E-Mail umgeschrieben.
- Cookie-Banner-Speicher-Schlüssel wird auf den neuen Markennamen umgestellt → Einwilligung zeigt sich neu (absichtlicher Effekt, Nutzer:innen entscheiden erneut).
- Bleibt unverändert: die Meta-Pixel-IDs (gehören zu laufenden Anzeigen), alle Preise/Leistungsangaben, die Anwendungsfunktion des Bewerbungsformulars.
- Dev-Server-Host-Konfiguration (vite.config.ts) bleibt, bis die neue Domain aktiv geschaltet ist.

## 4. Bilder
- Neues Hero-Bild im warmen Farbbild generieren (ersetzt hero.jpg / hero-agent.jpg-Nutzung).
- Neues Callcenter-Bild im warmen Stil.
- Porträts/Avatare bleiben unverändert.

## 5. Prüfung
- Build-Lauf, danach Screenshot-Kontrolle von Startseite und Karriere-Seiten (Name, Logo, Farben, Formular-Endpunkt unverändert).
