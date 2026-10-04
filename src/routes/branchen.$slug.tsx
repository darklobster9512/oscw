import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/branchen/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Branche nicht gefunden · Sekretariat-Service" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { industry } = loaderData;
    const title = `Telefonservice für ${industry.name} · Sekretariat-Service`;
    return {
      meta: [
        { title },
        { name: "description", content: industry.short },
        { property: "og:title", content: title },
        { property: "og:description", content: industry.short },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: IndustryPage,
  notFoundComponent: NotFoundIndustry,
});

function NotFoundIndustry() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-4xl">Branche nicht gefunden</h1>
        <p className="mt-4 text-muted-foreground">
          Diese Branchenseite existiert nicht.
        </p>
        <Button asChild className="mt-8 rounded-full">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="border-b border-border/60 bg-surface">
          <div className="container-page py-16 md:py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Alle Branchen
            </Link>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10 sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium uppercase tracking-wider text-primary">
                  Branchenlösung
                </div>
                <h1 className="mt-2 font-display text-[1.9rem] leading-[1.1] tracking-tight md:text-6xl md:leading-tight">
                  Telefonservice für {industry.name}
                </h1>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              {industry.long}
            </p>
          </div>
        </section>

        <section className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                Was wir für {industry.name} übernehmen
              </h2>
              <p className="mt-4 text-muted-foreground">
                Zugeschnitten auf die typischen Anforderungen Ihrer Branche –
                mit passendem Wortlaut, Prozessen und Anbindungen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="/#kontakt">Kostenlos testen</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/kontakt">Beratung anfragen</Link>
                </Button>
              </div>
            </div>
            <ul className="space-y-4">
              {industry.bullets.map((b: string) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
