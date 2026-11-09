# Server-Absturz "Illegal instruction" beheben

## Ursache (wahrscheinlich)
pm2 startet auf dem Server `npm run dev` – also den Entwicklungsmodus. Dieser lädt mehrere vorkompilierte Hilfsprogramme (CSS-Compiler, Bundler), die moderne Prozessor-Befehle (AVX/AVX2) brauchen. Hat die Server-CPU diese nicht (häufig bei günstigen/älteren VPS oder virtuellen CPUs vom Typ "kvm64/qemu64"), stürzt der Prozess sofort mit "Illegal instruction" ab – pm2 startet neu, Endlosschleife (30 Restarts).
Zusätzlich gilt: Der Entwicklungsmodus ist für den Live-Betrieb ohnehin ungeeignet (langsam, unsicher).

## Lösung
1. Prüfen auf dem Server: `grep -o -w 'avx2\|avx' /proc/cpuinfo | sort -u` – ist die Ausgabe leer, ist die CPU die Ursache. Beim Hoster ggf. CPU-Typ auf "host" umstellen lassen.
2. Projekt so einstellen, dass ein normaler Node-Server gebaut wird (statt der Cloud-Variante), damit die Seite fertig gebaut mit `node` läuft.
3. Neues Start-Skript `start` in package.json: `node .output/server/index.mjs`.
4. Ablauf auf dem Server (am besten Build lokal/auf CI machen, falls die CPU zu alt ist, und nur `.output` hochladen):
   - `npm ci && npm run build`
   - `pm2 delete oscw && PORT=8080 HOST=0.0.0.0 pm2 start .output/server/index.mjs --name oscw`
   - `pm2 save`
5. Kurze Anleitung in README ergänzen.

## Technische Details
- vite.config.ts: Nitro-Preset für Self-Hosting auf `node-server` setzen (nur über eine Umgebungsvariable wie `NITRO_PRESET=node-server` beim Build, damit die Lovable-Veröffentlichung unverändert bleibt).
- Kein Eingriff in Inhalte, Pixel-IDs oder Bewerbungsformular.
- Falls auch `node` selbst "Illegal instruction" wirft: Node-Version zu neu für die CPU → Node 20 LTS installieren.
