import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum · Sekretariat-Service" },
      {
        name: "description",
        content:
          "Anbieterkennzeichnung nach § 5 TMG der OSCW Office Service & Co. Working GmbH – Betreiberin von Sekretariat-Service.",
      },
      { property: "og:title", content: "Impressum · Sekretariat-Service" },
      {
        property: "og:description",
        content: "Anbieterkennzeichnung nach § 5 TMG der OSCW Office Service & Co. Working GmbH.",
      },
      { property: "og:url", content: "/impressum" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <LegalLayout
      title="Impressum"
      intro="Angaben gemäß § 5 TMG sowie § 18 Abs. 2 MStV zur Betreiberin von sekretariat-service.de."
      sections={[
        {
          id: "anbieter",
          title: "Anbieter",
          content: (
            <>
              <p>
                <strong className="text-foreground">OSCW Office Service & Co. Working GmbH</strong>
                <br />
                Hugo-Heimann-Str. 37
                <br />
                12353 Berlin
                <br />
                Deutschland
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+4921197537952" className="text-foreground hover:text-primary">
                  0211 97537952
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:kontakt@sekretariat-service.de" className="text-foreground hover:text-primary">
                  kontakt@sekretariat-service.de
                </a>
                <br />
                Web: sekretariat-service.de
              </p>
            </>
          ),
        },
        {
          id: "vertretung",
          title: "Vertretungsberechtigte",
          content: <p>Geschäftsführerin: Matteusz Pawlik</p>,
        },
        {
          id: "register",
          title: "Handelsregister",
          content: (
            <p>
              Eingetragen im Handelsregister
              <br />
              Registergericht: Amtsgericht Charlottenburg (Berlin)
              <br />
              Registernummer: HRB 258833 B
            </p>
          ),
        },
        {
          id: "ust",
          title: "Umsatzsteuer-ID",
          content: (
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:
              <br />
              <strong className="text-foreground">DE345852620</strong>
            </p>
          ),
        },
        {
          id: "verantwortlich",
          title: "Verantwortlich für den Inhalt",
          content: (
            <p>
              Verantwortlich nach § 18 Abs. 2 MStV: Matteusz Pawlik, Anschrift wie
              oben.
            </p>
          ),
        },
        {
          id: "streit",
          title: "Streitschlichtung",
          content: (
            <>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ),
        },
        {
          id: "haftung-inhalte",
          title: "Haftung für Inhalte",
          content: (
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt.
            </p>
          ),
        },
        {
          id: "haftung-links",
          title: "Haftung für Links",
          content: (
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          ),
        },
        {
          id: "urheber",
          title: "Urheberrecht",
          content: (
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          ),
        },
        {
          id: "hinweis",
          title: "Hinweis",
          content: (
            <p className="text-xs">
              sekretariat-service.de ist ein Produkt der OSCW Office Service & Co. Working GmbH.
            </p>
          ),
        },
      ]}
    />
  );
}
