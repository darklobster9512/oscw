# Meta Pixel für /karriere/sekretariat aktualisieren

## Ziel
Auf `/karriere/sekretariat` soll der Meta Pixel Code mit der ID `1041951465362957` verwendet werden, inklusive des vollständigen `<noscript>`-Fallbacks. `/karriere/recruiting` behält seinen bestehenden Pixel `1369317532038808`.

## Aktueller Stand
- `src/routes/karriere.sekretariat.tsx` importiert `metaPixelScript` aus `src/components/karriere/ApplicationForm.tsx` (Pixel-ID `2034512217434192`).
- `src/routes/karriere.recruiting.tsx` hat bereits einen eigenen, route-lokalen Pixel (`1369317532038808`) mit `<noscript>`-Injection.
- `src/components/karriere/JobPage.tsx` enthält im Body ein zusätzliches `<noscript>`-Tracking-Pixel, das ebenfalls die alte ID `2034512217434192` verwendet.

## Geplante Änderungen
1. **`src/routes/karriere.sekretariat.tsx`**:
   - Import von `metaPixelScript` entfernen.
   - Zwei neue Inline-Script-Konstanten anlegen:
     - `sekretariatPixelScript` mit exaktem Meta Pixel Snippet (`init('1041951465362957')` und `PageView`).
     - `sekretariatPixelNoScript` zur DOM-Injection eines `<noscript><img>`-Fallbacks für die gleiche ID.
   - `head()` auf beide Scripte umstellen.
2. **`src/components/karriere/JobPage.tsx`**:
   - Import von `META_PIXEL_ID` und das hartkodierte `<noscript>`-Fallback-Element entfernen, damit kein doppeltes/veraltetes Pixel mehr auf den Karriere-Detailseiten gefeuert wird. Die Noscript-Abdeckung erfolgt dann ausschließlich über die route-spezifischen Head-Scripts.
3. Build durchlaufen lassen, um sicherzustellen, dass die neue Pixel-ID im Server-Chunk erscheint und `/karriere/recruiting` unverändert bleibt.
