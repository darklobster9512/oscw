import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB · Sekretariat24" },
      {
        name: "description",
        content:
          "Allgemeine Geschäftsbedingungen der aigis one GmbH für den Telefonservice Sekretariat24.",
      },
      { property: "og:title", content: "AGB · Sekretariat24" },
      {
        property: "og:description",
        content: "Vertragsbedingungen für Sekretariat24 – Leistungen, Laufzeit, Preise, Haftung.",
      },
      { property: "og:url", content: "/agb" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/agb" }],
  }),
  component: AgbPage,
});

function AgbPage() {
  return (
    <LegalLayout
      title="Allgemeine Geschäftsbedingungen"
      intro={`Diese AGB regeln die Vertragsbeziehung zwischen der aigis one GmbH (nachfolgend „Sekretariat24") und ihren Kundinnen und Kunden.`}
      sections={[
        {
          id: "geltung",
          title: "§ 1 Geltungsbereich",
          content: (
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche
              Verträge über Leistungen der aigis one GmbH, Liefergasse 5,
              40213 Düsseldorf, im Rahmen des Angebots Sekretariat24.
              Abweichende Bedingungen des Kunden erkennen wir nicht an, es sei
              denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          ),
        },
        {
          id: "leistungen",
          title: "§ 2 Leistungen",
          content: (
            <>
              <p>
                Sekretariat24 bietet einen professionellen Telefonservice für
                Unternehmen. Dies umfasst insbesondere Anrufannahme im Namen
                des Kunden, Notieren und Weiterleiten von Nachrichten,
                Terminvereinbarungen, einfache Auskünfte gemäß vorgegebenem
                Gesprächsleitfaden sowie optionale Zusatzleistungen (z.&nbsp;B.
                mehrsprachige Betreuung).
              </p>
              <p>
                Der genaue Leistungsumfang ergibt sich aus dem individuell
                gewählten Tarif und den ergänzenden Absprachen im Onboarding.
              </p>
            </>
          ),
        },
        {
          id: "vertragsschluss",
          title: "§ 3 Vertragsschluss & Testphase",
          content: (
            <p>
              Der Vertrag kommt durch Bestätigung der Beauftragung durch
              Sekretariat24 zustande. Sofern ein kostenfreier Testzeitraum
              vereinbart wird, endet dieser automatisch ohne gesonderte
              Kündigung; ein Übergang in ein kostenpflichtiges Abonnement
              erfolgt nur, wenn der Kunde diesen ausdrücklich beauftragt.
            </p>
          ),
        },
        {
          id: "laufzeit",
          title: "§ 4 Laufzeit & Kündigung",
          content: (
            <p>
              Verträge werden – sofern nicht abweichend vereinbart – monatlich
              abgeschlossen und verlängern sich automatisch um jeweils einen
              Monat, sofern sie nicht mit einer Frist von 14 Tagen zum
              Laufzeitende in Textform gekündigt werden. Das Recht zur
              außerordentlichen Kündigung aus wichtigem Grund bleibt
              unberührt.
            </p>
          ),
        },
        {
          id: "preise",
          title: "§ 5 Preise & Zahlung",
          content: (
            <p>
              Es gelten die zum Zeitpunkt der Beauftragung gültigen Preise
              gemäß Preisliste bzw. individuellem Angebot. Alle Preise
              verstehen sich zzgl. der gesetzlichen Umsatzsteuer. Die
              Abrechnung erfolgt monatlich per SEPA-Lastschrift oder
              Überweisung. Rechnungen sind ohne Abzug innerhalb von 14 Tagen
              nach Zugang fällig.
            </p>
          ),
        },
        {
          id: "pflichten",
          title: "§ 6 Pflichten des Kunden",
          content: (
            <p>
              Der Kunde stellt Sekretariat24 alle für die Leistungserbringung
              erforderlichen Informationen rechtzeitig und vollständig zur
              Verfügung. Er sorgt insbesondere für die technisch korrekte
              Rufumleitung und stellt sicher, dass er berechtigt ist, die
              angegebenen Rufnummern für den Telefonservice zu nutzen.
            </p>
          ),
        },
        {
          id: "verfuegbarkeit",
          title: "§ 7 Verfügbarkeit",
          content: (
            <p>
              Sekretariat24 ist bemüht, den Dienst 24/7 verfügbar zu halten.
              Kurzfristige Einschränkungen aufgrund technischer Wartungen,
              Störungen von Vorleistungen (z.&nbsp;B. Netzbetreiber) oder
              höherer Gewalt bleiben vorbehalten.
            </p>
          ),
        },
        {
          id: "haftung",
          title: "§ 8 Haftung",
          content: (
            <p>
              Sekretariat24 haftet unbeschränkt für Vorsatz und grobe
              Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens,
              des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit
              haften wir nur bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten) und begrenzt auf den vertragstypisch
              vorhersehbaren Schaden. Eine weitergehende Haftung ist
              ausgeschlossen.
            </p>
          ),
        },
        {
          id: "datenschutz",
          title: "§ 9 Datenschutz",
          content: (
            <p>
              Beide Parteien verpflichten sich zur Einhaltung der
              anwendbaren datenschutzrechtlichen Vorschriften. Erforderlich-
              enfalls schließen die Parteien einen Vertrag zur
              Auftragsverarbeitung nach Art. 28 DSGVO. Details zur
              Datenverarbeitung enthält unsere Datenschutzerklärung.
            </p>
          ),
        },
        {
          id: "schluss",
          title: "§ 10 Schlussbestimmungen",
          content: (
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts. Ausschließlicher Gerichtsstand für alle
              Streitigkeiten mit Kaufleuten, juristischen Personen des
              öffentlichen Rechts oder öffentlich-rechtlichen Sonder-
              vermögen ist Düsseldorf. Sollten einzelne Bestimmungen unwirksam
              sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          ),
        },
      ]}
    />
  );
}
