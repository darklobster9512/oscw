# Karriere-Recruiting: Eigener Meta Pixel

## Ziel
Auf `/karriere/recruiting` soll ein eigener Meta Pixel (ID `1369317532038808`) verwendet werden. `/karriere/sekretariat` behält den bisherigen Pixel (ID `2034512217434192`) aus `ApplicationForm.tsx`. Alle anderen Seiten bleiben ebenfalls unverändert.

## Änderung
1. In `src/routes/karriere.recruiting.tsx` den Import von `metaPixelScript` aus `ApplicationForm.tsx` entfernen.
2. Eine neue Script-Konstante `recruitingPixelScript` anlegen (Inline-JS) mit dem exakt vorgegebenen Snippet inklusive `init('1369317532038808')` und `PageView`-Track.
3. Den `scripts`-Block der Route auf `recruitingPixelScript` umstellen.
4. Das `<noscript>`-Fallback-Tracking-Pixel als zusätzliches Script-Element injizieren (in `scripts` via `children` auf `document.write` oder äquivalent), damit Browser ohne JS das Pixel ebenfalls anfeuern.

## Hinweis
Das `Lead`-Event bei erfolgreichem Bewerbungsformular bleibt unverändert aktiv (`window.fbq?.('track', 'Lead')`), da es das aktuell initialisierte Pixel automatisch verwendet.
