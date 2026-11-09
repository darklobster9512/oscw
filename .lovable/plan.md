# Seite automatisch fertig bauen lassen (ohne Server-/PC-Arbeit)

Dein Server kann die Seite nicht selbst bauen (alter Prozessor -> "Illegal instruction"). Deshalb lasse ich GitHub das Bauen automatisch erledigen. Du musst danach auf dem Server nur noch herunterladen und starten.

## Was ich einbaue
- Eine automatische Bau-Aufgabe auf GitHub: Bei jeder Änderung baut GitHub die fertige Seite und legt sie im Branch `build` deines Repos ab (inkl. der Datei `.output/server/index.mjs`).

## Was du danach auf dem Server machst (einmalig, ca. 3 Minuten nach meiner Änderung)
```bash
pm2 delete oscw
cd /root && rm -rf oscw-live
git clone -b build https://github.com/darklobster9512/oscw.git oscw-live
cd oscw-live
PORT=8080 HOST=0.0.0.0 pm2 start .output/server/index.mjs --name oscw
pm2 save
```
Updates später: `cd /root/oscw-live && git pull && pm2 restart oscw`

## Technische Details
- Neue Datei `.github/workflows/build-node.yml`: Node 20, `npm ci`, `NITRO_PRESET=node-server npm run build`, `.output` in Branch `build` pushen (peaceiris/actions-gh-pages oder git push mit GITHUB_TOKEN, `contents: write`).
- Keine Änderung an Inhalten, Pixel-IDs oder Bewerbungsformular; Lovable-Veröffentlichung bleibt unverändert.
