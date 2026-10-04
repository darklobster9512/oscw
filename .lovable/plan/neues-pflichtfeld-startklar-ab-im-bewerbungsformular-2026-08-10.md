# Neues Pflichtfeld: „Startklar ab“ im Bewerbungsformular

## Ziel
Auf `/karriere/sekretariat` und `/karriere/recruiting` gibt es im Bewerbungsformular ein zusätzliches Pflichtfeld, in dem Bewerber:innen angeben, ab wann sie starten können. Der Wert wird beim Absenden als `startklar_ab` im Format `YYYY-MM-DD` mitgeschickt.

## Umsetzung
- In `src/components/karriere/ApplicationForm.tsx`:
  - Neues Feld `startDate` direkt neben „Anstellung“ (zweispaltiges Grid, wie Geburtsdatum/Staatsangehörigkeit).
  - Gleicher Datepicker-Typ wie beim Geburtsdatum (`<Input type="date" />`), Pflichtfeld mit Sternchen.
  - Zod-Validierung: nicht leer, Fehlermeldung „Bitte Startdatum angeben“.
  - Im Multipart-POST zusätzlich `payload.append("startklar_ab", result.data.startDate)` — Datum kommt vom Date-Input bereits als `YYYY-MM-DD`.
- Alles andere bleibt unverändert: gleicher Endpoint, gleiche Felder inkl. `stelle`, gleiche 10-MB-Prüfung, gleiches Meta-Pixel-`Lead`-Event.

## Hinweis zur Gegenstelle
Die Edge Function bzw. das Panel (Projekt „s24-panel“) muss das neue Feld `startklar_ab` entgegennehmen und speichern/anzeigen. Das ist ein separater Schritt in jenem Projekt — sag Bescheid, ob ich das dort ebenfalls übernehmen soll.

## Betroffene Dateien
- `src/components/karriere/ApplicationForm.tsx`
