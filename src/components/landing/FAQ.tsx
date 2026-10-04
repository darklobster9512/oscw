import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wie sicher sind unsere Kundendaten?",
    a: "Sekretariat-Service ist vollständig DSGVO-konform. Der Serverstandort ist Deutschland, alle Mitarbeiter sind vertraglich zur Verschwiegenheit verpflichtet, und wir arbeiten nach ISO 27001-Standards.",
  },
  {
    q: "Wie schnell ist der Service einsatzbereit?",
    a: "Nach Registrierung meist innerhalb von 24 Stunden. Wir richten mit Ihnen den Gesprächsleitfaden ein und aktivieren den Service auf Wunsch sofort.",
  },
  {
    q: "Gibt es eine Mindestlaufzeit?",
    a: "Nein. Alle Tarife sind monatlich kündbar. Sie zahlen nur die tatsächlich geführten Gespräche – ohne Grundgebühr.",
  },
  {
    q: "Wie erhalte ich die Anrufinfos?",
    a: "Auf dem Kanal Ihrer Wahl: E-Mail, SMS, App-Push oder direkte Übergabe in Ihr CRM/Ticketsystem.",
  },
  {
    q: "In welchen Sprachen wird angenommen?",
    a: "Standardmäßig Deutsch und Englisch. Weitere Sprachen wie Französisch, Italienisch oder Türkisch sind auf Anfrage möglich.",
  },
  {
    q: "Können Anrufe an mich weitergeleitet werden?",
    a: "Ja, auf Wunsch verbinden wir nach vorheriger Qualifizierung durch – oder nehmen strukturiert einen Rückrufwunsch auf.",
  },
  {
    q: "Was passiert außerhalb der Geschäftszeiten?",
    a: "Wir sind 24/7/365 erreichbar – auch nachts, am Wochenende und an Feiertagen. Sie entscheiden, ob und wann Sie diesen Service nutzen.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/60 bg-surface">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-primary">
              Häufige Fragen
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Alles, was Sie wissen sollten
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sie haben eine spezifische Frage? Unser Team beantwortet sie gern
              persönlich.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
