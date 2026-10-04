import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Aufträge kommen jetzt strukturiert per Push aufs Handy – auch wenn ich gerade auf der Baustelle bin. Kein verlorener Kunde mehr.",
    name: "Andreas Meier",
    role: "Meier Sanitär GmbH · Handwerk",
    img: "/testimonial-3.jpg",
  },
  {
    quote:
      "Retouren und Support-Anrufe werden direkt in unser Shopsystem geschrieben. Unser Team kann sich endlich auf Wachstum konzentrieren.",
    name: "Julia Hartmann",
    role: "Gründerin · E-Commerce",
    img: "/testimonial-1.jpg",
  },
  {
    quote:
      "Unsere MFAs können sich endlich um die Patienten in der Praxis kümmern. Sekretariat-Service fühlt sich wirklich wie ein Teil unseres Teams an.",
    name: "Dr. Sofia Weiss",
    role: "Allgemeinmedizin · Praxis Weiss",
    img: "/testimonial-2.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border/60">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            Stimmen unserer Kunden
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Was Unternehmer über Sekretariat-Service sagen
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8"
            >
              <div className="flex gap-0.5 text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-foreground/90">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
