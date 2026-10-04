import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { LiveMetrics } from "@/components/landing/LiveMetrics";

import { BentoBenefits } from "@/components/landing/BentoBenefits";
import { Industries } from "@/components/landing/Industries";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CallcenterSection } from "@/components/landing/CallcenterSection";
import { Integrations } from "@/components/landing/Integrations";

import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sekretariat-Service – Telefonservice & Sekretariat 24/7" },
      {
        name: "description",
        content:
          "Professioneller Telefonservice aus Deutschland. Jeder Anruf angenommen, jede Nachricht zugestellt – ab 0,59 € pro Gespräch.",
      },
      { property: "og:title", content: "Sekretariat-Service – Telefonservice & Sekretariat 24/7" },
      {
        property: "og:description",
        content:
          "Professioneller Telefonservice aus Deutschland. Jeder Anruf angenommen, jede Nachricht zugestellt – ab 0,59 € pro Gespräch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/hero-agent.jpg", fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <LiveMetrics />
        
        <BentoBenefits />
        <Industries />
        <HowItWorks />
        <CallcenterSection />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
