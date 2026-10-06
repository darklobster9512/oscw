# Allowed Hosts: sekretariat-service.de ergänzen

## Aktueller Stand
`vite.config.ts` listet als erlaubten Dev-Server-Host nur `web.sekretariat24.app`. Die neue Domain `sekretariat-service.de` fehlt dort — sobald sie verbunden wird, würde der Vorschau-Abruf über diese Domain abgelehnt.

## Änderung
- `vite.config.ts` — `allowedHosts` erweitern um:
  - `sekretariat-service.de`
  - `www.sekretariat-service.de`

Der bestehende Eintrag `web.sekretariat24.app` bleibt erhalten, damit die alte Domain weiter funktioniert.

## Hinweis
Die eigentliche Domainverbindung (DNS/Custom Domain) passiert separat in den Projekteinstellungen unter Domains — dieser Eintrag sorgt nur dafür, dass der Dev-Server die Domain annimmt, sobald sie aktiv ist.
