# Bewerbungsformular auf die neue Datenbank-URL umstellen

## Ziel
Bewerbungen aus den Karriere-Seiten (`/karriere/sekretariat` und `/karriere/recruiting`) werden künftig an die neue Bewerbungs-Funktion gesendet:

- Neu: `https://wecgxfilpnxxbyxqauar.supabase.co/functions/v1/submit-application`
- Bisher: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`

## Was geändert wird
- Im Bewerbungsformular wird ausschließlich die Ziel-URL beim Absenden getauscht — alles andere bleibt unverändert:
  - gleiche Felder (inkl. `stelle` und `startklar_ab`),
  - gleiche 10-MB-Prüfung beim Lebenslauf,
  - gleiche Anzeige des konkreten Fehlertexts der Gegenstelle (z. B. „Nur PDF, DOC oder DOCX erlaubt“),
  - gleiches Meta-Pixel-`Lead`-Event nach erfolgreichem Absenden.

## Zusätzlich
- Die gespeicherte Projektregel „Bewerbungsformular-Endpoint niemals ändern“ wird auf die neue URL aktualisiert, damit künftige Änderungen nicht versehentlich die alte Adresse zurückbringen.

## Annahme
Der Pfad bleibt `/functions/v1/submit-application` (gleicher Funktionsname wie bisher). Heißt die Funktion auf dem neuen Projekt anders, sag mir bitte den vollständigen Link.

## Betroffene Datei
- `src/components/karriere/ApplicationForm.tsx`
