# Stelle mitsenden im Bewerbungsformular

## Ziel
Beim Absenden einer Bewerbung wird zusätzlich das Feld `stelle` an den bestehenden Endpoint übertragen, damit erkennbar ist, auf welche Stelle sich jemand bewirbt.

## Werte
- `/karriere/sekretariat` → `stelle = "sekretär"`
- `/karriere/recruiting` → `stelle = "recruiting"`

## Umsetzung
- `ApplicationForm` bekommt eine neue Prop `stelle: string`.
- Im Submit wird `payload.append("stelle", stelle)` ergänzt (Freitext, max. 150 Zeichen — Wert wird vorsichtshalber gekürzt).
- `JobPage` reicht den Wert aus den Stellendaten an das Formular durch; in `src/data/jobs.ts` bekommt jede Stelle ein Feld `applicationValue` mit den obigen Werten.
- Alles andere bleibt unverändert: gleicher POST als `multipart/form-data`, gleicher Endpoint, gleiche Felder, gleiche Validierung (10 MB Lebenslauf) und weiterhin das Meta-Pixel-`Lead`-Event nach erfolgreichem Absenden.

## Betroffene Dateien
- `src/data/jobs.ts`
- `src/components/karriere/JobPage.tsx`
- `src/components/karriere/ApplicationForm.tsx`
