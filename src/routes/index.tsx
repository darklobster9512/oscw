import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import {
  HomeHero,
  TrustBar,
  ProblemSolution,
  Services,
  Steps,
  IndustryList,
  DayInTheLife,
  PricingTable,
  Voices,
  Questions,
  Closing,
} from "@/components/landing/home/HomeSections";

const title = "Sekretariat-Service – Ihre ausgelagerte Telefonzentrale";
const description =
  "Sie arbeiten, wir gehen ran: Telefonannahme in Ihrem Namen, Terminvergabe und sofortige Weiterleitung. Keine Grundgebühr, monatlich kündbar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: "/hero-agent.jpg", fetchpriority: "high" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HomeHero />
        <TrustBar />
        <ProblemSolution />
        <Services />
        <Steps />
        <IndustryList />
        <DayInTheLife />
        <PricingTable />
        <Voices />
        <Questions />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
