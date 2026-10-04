import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung · Sekretariat-Service" },
      {
        name: "description",
        content:
          "Informationen zur Verarbeitung personenbezogener Daten bei Sekretariat-Service gemäß DSGVO.",
      },
      { property: "og:title", content: "Datenschutzerklärung · Sekretariat-Service" },
      {
        property: "og:description",
        content: "Wie die OSCW Office Service & Co. Working GmbH Ihre Daten verarbeitet – transparent und DSGVO-konform.",
      },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten bei Nutzung von sekretariat-service.de und unserer Dienstleistungen."
      sections={[
        {
          id: "verantwortlich",
          title: "1. Verantwortlicher",
          content: (
            <p>
              Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
              <br />
              <strong className="text-foreground">OSCW Office Service & Co. Working GmbH</strong>
              <br />
              Hugo-Heimann-Str. 37, 12353 Berlin
              <br />

              <br />
              E-Mail: kontakt@sekretariat-service.de
            </p>
          ),
        },
        {
          id: "server-logs",
          title: "2. Bereitstellung der Website & Server-Logfiles",
          content: (
            <>
              <p>
                Bei jedem Aufruf unserer Website werden durch unseren
                Hosting-Provider automatisch Informationen erfasst und in
                sogenannten Server-Logfiles gespeichert. Dies umfasst
                insbesondere IP-Adresse, Datum und Uhrzeit der Anfrage,
                aufgerufene URL, Referrer sowie technische Informationen zum
                verwendeten Browser und Betriebssystem.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einem stabilen, sicheren Betrieb der Website).
                Die Logs werden nach maximal 30 Tagen gelöscht, sofern sie
                nicht zur Aufklärung eines konkreten Missbrauchsverdachts
                benötigt werden.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "3. Cookies",
          content: (
            <>
              <p>
                Wir verwenden technisch notwendige Cookies, um den Betrieb der
                Website sicherzustellen (Art. 6 Abs. 1 lit. f DSGVO). Optionale
                Cookies (z.&nbsp;B. zu Statistik- oder Marketingzwecken) werden
                nur mit Ihrer Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p>
                Ihre Auswahl können Sie jederzeit unter{" "}
                <Link
                  to="/cookie-einstellungen"
                  className="text-foreground underline underline-offset-2 hover:text-primary"
                >
                  Cookie-Einstellungen
                </Link>{" "}
                anpassen oder widerrufen.
              </p>
            </>
          ),
        },
        {
          id: "kontakt",
          title: "4. Kontaktaufnahme & Rückrufservice",
          content: (
            <p>
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon
              kontaktieren, verarbeiten wir Ihre Angaben (Name, Kontaktdaten,
              Nachricht) zur Bearbeitung Ihrer Anfrage sowie zur Anbahnung
              eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) bzw. auf Basis
              unseres berechtigten Interesses an der Beantwortung Ihrer
              Anfrage (Art. 6 Abs. 1 lit. f DSGVO). Ihre Daten werden gelöscht,
              sobald sie für die Bearbeitung nicht mehr erforderlich sind und
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          ),
        },
        {
          id: "bewerbungen",
          title: "5. Bewerbungen (Karriereseite)",
          content: (
            <p>
              Ihre über das Bewerbungsformular übermittelten Daten (u.&nbsp;a.
              Kontaktdaten, Lebenslauf, Angaben zur Person) verarbeiten wir
              ausschließlich zur Durchführung des Bewerbungsverfahrens gemäß §
              26 Abs. 1 BDSG i.&nbsp;V.&nbsp;m. Art. 6 Abs. 1 lit. b DSGVO.
              Kommt kein Beschäftigungsverhältnis zustande, werden die
              Bewerbungsunterlagen spätestens sechs Monate nach Absage
              gelöscht, sofern Sie keiner längeren Speicherung zugestimmt
              haben.
            </p>
          ),
        },
        {
          id: "auftragsverarbeiter",
          title: "6. Empfänger & Auftragsverarbeiter",
          content: (
            <p>
              Zur Bereitstellung unserer Dienste setzen wir sorgfältig
              ausgewählte Dienstleister (u.&nbsp;a. Hosting, E-Mail-Versand,
              Analyse) ein. Diese verarbeiten Daten ausschließlich weisungs-
              gebunden auf Basis eines Auftragsverarbeitungsvertrags nach
              Art. 28 DSGVO. Server stehen bevorzugt in Deutschland bzw. der
              Europäischen Union.
            </p>
          ),
        },
        {
          id: "rechte",
          title: "7. Ihre Rechte",
          content: (
            <>
              <p>Sie haben jederzeit das Recht auf</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Auskunft (Art. 15 DSGVO),</li>
                <li>Berichtigung (Art. 16 DSGVO),</li>
                <li>Löschung (Art. 17 DSGVO),</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
                <li>Widerspruch (Art. 21 DSGVO),</li>
                <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO).</li>
              </ul>
              <p>
                Zudem steht Ihnen ein Beschwerderecht bei einer
                Aufsichtsbehörde zu – für uns zuständig ist die Landes-
                beauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen (LDI NRW).
              </p>
            </>
          ),
        },
        {
          id: "ssl",
          title: "8. SSL-/TLS-Verschlüsselung",
          content: (
            <p>
              Diese Website nutzt aus Gründen der Sicherheit und zum Schutz
              der Übertragung vertraulicher Inhalte eine SSL-/TLS-
              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers mit „https://" beginnt.
            </p>
          ),
        },
        {
          id: "aenderungen",
          title: "9. Änderungen dieser Erklärung",
          content: (
            <p>
              Wir passen diese Datenschutzerklärung an, sobald Änderungen an
              der Verarbeitung dies erforderlich machen. Die jeweils aktuelle
              Version steht auf dieser Seite bereit.
            </p>
          ),
        },
      ]}
    />
  );
}
