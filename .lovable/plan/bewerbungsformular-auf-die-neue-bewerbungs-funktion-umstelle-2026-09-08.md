# Bewerbungsformular auf die neue Bewerbungs-Funktion umstellen

## Ziel
Die Bewerbungen aus dem Formular laufen künftig über die neue Bewerbungs-Funktion aus dem Panel-Projekt: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application` (bisher zeigt das Formular noch auf die alte Adresse `erwuhvouxkaxczzbjrle`).

## Was geändert wird
- Im Bewerbungsformular wird nur die Zieladresse beim Absenden ausgetauscht — alles andere bleibt gleich: gleiche Felder (inkl. „Stelle“ und „Startklar ab“), gleiche 10-MB-Prüfung, gleiches Meta-Pixel-Ereignis nach erfolgreichem Absenden.
- Zusätzlich zeigen wir bei einer Absage der Gegenstelle deren konkreten Grund an (z. B. „Nur PDF, DOC oder DOCX erlaubt“), statt immer nur den allgemeinen Fehlertext — damit Bewerber:innen wissen, was schiefging.

## Betroffene Datei
- `src/components/karriere/ApplicationForm.tsx`
