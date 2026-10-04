# Komplett neue Texte und Abschnitte

Ziel: Die Seite soll inhaltlich und optisch eigenständig wirken – nicht mehr wie die Vorlage. Firmendaten, Preise, Meta-Pixel-IDs und das Bewerbungsformular bleiben unverändert.

## Startseite – neue Reihenfolge und Abschnitte

```text
1. Hero (neu: links Text, rechts Foto mit "Anruf angenommen"-Karte)
2. Vertrauensleiste (Kennzahlen als schlichte Zeile statt Live-Dashboard)
3. "Ihr Problem – unsere Lösung" (neu, Vorher/Nachher-Gegenüberstellung)
4. Leistungen (statt Bento-Raster: 3-spaltige Karten mit Symbolen)
5. So funktioniert's (3 Schritte als horizontale Zeitleiste)
6. Branchen (kompakte Liste mit Links statt großer Kacheln)
7. Ein Tag mit Sekretariat-Service (neu, Tagesablauf-Storytelling, ersetzt Callcenter-Abschnitt)
8. Preise (gleiche Preise, neues Kartenlayout und neue Beschreibungen)
9. Kundenstimmen (neue Zitate, Avatare bleiben)
10. FAQ (neu formulierte Fragen und Antworten)
11. Abschluss-Aufruf (neuer Text, ruhigeres Layout)
```

Entfallen: Integrationen-Abschnitt und das Dashboard-Mockup (typische Merkmale der Vorlage).

## Unterseiten
- Vorteile, Preise, Callcenter, Kontakt, Karriere-Übersicht: alle Überschriften und Fließtexte neu geschrieben, Abschnittsreihenfolge angepasst.
- Branchenseiten: neue Einleitungen und Nutzenpunkte pro Branche.
- Stellenanzeigen: neue Formulierungen, gleiche Stellen und Konditionen; Formular unverändert.
- Navigation und Fußzeile: neue Menübeschriftungen und Fußzeilentexte.
- Seitentitel und Beschreibungen für Suchmaschinen je Seite neu.

## Tonalität
Sachlich-deutsch, Sie-Form, für kleine und mittlere Unternehmen; keine übertriebenen Werbeversprechen, keine erfundenen Zahlen außer klar als Beispiel erkennbar.

## Technische Details
- Neue Komponenten: `ProblemSolution.tsx`, `DayInTheLife.tsx`, `TrustBar.tsx`; `BentoBenefits`, `LiveMetrics`, `Integrations`, `DashboardMockup`, `CallcenterSection` werden aus der Startseite entfernt (Dateien gelöscht, wenn nirgends mehr genutzt).
- `Hero`, `HowItWorks`, `Industries`, `Pricing`, `Testimonials`, `FAQ`, `CTA`, `Nav`, `Footer` werden neu gestaltet.
- Texte in `src/data/jobs.ts` und Branchendaten werden umgeschrieben; Preiswerte, Pixel-IDs und Formular-Endpunkt bleiben unangetastet.
- `head()` aller Seiten aktualisiert.
