import { type ReactNode } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  title: string;
  intro?: ReactNode;
  updatedAt?: string;
  sections: LegalSection[];
};

export function LegalLayout({ title, intro, updatedAt, sections }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="border-b border-border/60">
        {/* Hero */}
        <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Rechtliches
            </div>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight md:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
                {intro}
              </p>
            ) : null}
            {updatedAt ? (
              <p className="mt-6 text-xs text-muted-foreground">
                Stand: {updatedAt}
              </p>
            ) : null}
          </div>
        </section>

        {/* Content grid */}
        <section className="container-page pb-24 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* TOC */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:block">
                Inhalt
              </div>
              <nav className="mt-0 flex flex-wrap gap-2 lg:mt-4 lg:flex-col lg:gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground lg:rounded-md lg:border-0 lg:bg-transparent lg:px-2 lg:py-1.5 lg:text-sm"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Body */}
            <div className="max-w-2xl space-y-12">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 border-b border-border/60 pb-10 last:border-none last:pb-0"
                >
                  <h2 className="font-display text-xl tracking-tight md:text-2xl">
                    {s.title}
                  </h2>
                  <div className="prose-legal mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                    {s.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
