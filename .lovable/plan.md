# Neuer Meta Pixel auf beiden Karriere-Seiten

## Ziel
`/karriere/sekretariat` und `/karriere/recruiting` nutzen beide denselben neuen Meta Pixel **1999340737399086** (PageView beim Laden, Lead beim Absenden des Bewerbungsformulars). Die bisherigen Pixel (`1041951465362957` auf sekretariat, `1369317532038808` auf recruiting) werden entfernt — nur der neue läuft.

## Änderungen

1. **`src/routes/karriere.sekretariat.tsx`**
   - `SEKRETARIAT_PIXEL_ID` → `"1999340737399086"` (Variable in `KARRIERE_PIXEL_ID` umbenannt).
   - Der bestehende Script-Block (Inline-JS mit `init` + `track('PageView')`) und das Noscript-Fallback bleiben strukturell gleich, feuern nur auf die neue ID.

2. **`src/routes/karriere.recruiting.tsx`**
   - `RECRUITING_PIXEL_ID` → `"1999340737399086"` (gleiche Umbenennung).
   - Gleiche Anpassung von Script und Noscript-Fallback.

3. **`src/components/karriere/ApplicationForm.tsx`**
   - `Lead`-Track bei erfolgreichem Absenden bleibt unverändert (`window.fbq?.("track", "Lead")`) — er feuert automatisch auf den auf der jeweiligen Seite initialisierten Pixel, also auf den neuen.
   - Toter Code entfernen: `META_PIXEL_ID` und `metaPixelScript` (alte ID `2034512217434192`) werden von keiner Route mehr importiert und fliegen raus. Die `Window.fbq`-Typdeklaration und der Lead-Track bleiben.

## Nicht anfassen
- Bewerbungsformular-Endpoint (`wecgxfilpnxxbyxqauar`), Felder, Validierung, Preise, Farben, Texte.

## Verifikation
- Build prüfen.
- Playwright: beide Seiten laden, `facebook.net/fbevents.js`-Request und `facebook.com/tr?...id=1999340737399086` im Netzwerk-Log; auf `/karriere/recruiting` Formular (Testdaten) absenden und prüfen, dass der `Lead`-Track feuert (Aufruf von `facebook.com/tr` mit `ev=Lead`).
- Danach Projekt-Memory aktualisieren: neue Pixel-ID `1999340737399086` als geschützte ID notieren.
