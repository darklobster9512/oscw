import { Reveal } from "./primitives";
import salesforceAsset from "@/assets/logos/salesforce.webp.asset.json";
import hubspotAsset from "@/assets/logos/hubspot.webp.asset.json";
import pipedriveAsset from "@/assets/logos/pipedrive.svg.asset.json";
import zendeskAsset from "@/assets/logos/zendesk.webp.asset.json";
import slackAsset from "@/assets/logos/slack.webp.asset.json";
import teamsAsset from "@/assets/logos/teams.webp.asset.json";
import zapierAsset from "@/assets/logos/zapier.svg.asset.json";
import notionAsset from "@/assets/logos/notion.png.asset.json";
import trelloAsset from "@/assets/logos/trello.webp.asset.json";
import jiraAsset from "@/assets/logos/jira.webp.asset.json";
import freshdeskAsset from "@/assets/logos/freshdesk.webp.asset.json";
import makeAsset from "@/assets/logos/make.png.asset.json";

const tools = [
  { name: "Salesforce", logo: salesforceAsset.url },
  { name: "HubSpot", logo: hubspotAsset.url },
  { name: "Pipedrive", logo: pipedriveAsset.url },
  { name: "Zendesk", logo: zendeskAsset.url },
  { name: "Slack", logo: slackAsset.url },
  { name: "Microsoft Teams", logo: teamsAsset.url },
  { name: "Zapier", logo: zapierAsset.url },
  { name: "Notion", logo: notionAsset.url },
  { name: "Trello", logo: trelloAsset.url },
  { name: "Jira", logo: jiraAsset.url },
  { name: "Freshdesk", logo: freshdeskAsset.url },
  { name: "Make", logo: makeAsset.url },
];

export function Integrations() {
  return (
    <section className="border-t border-border/60 bg-surface">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <div>
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Integrationen</div>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Arbeitet nahtlos mit Ihren Tools.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Ob CRM, Ticketing oder Kalender – unsere Agents schreiben Fälle
                direkt dorthin, wo Ihr Team ohnehin arbeitet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                >
                  <img
                    src={t.logo}
                    alt={`${t.name} Logo`}
                    className="h-10 w-auto max-w-[80%] object-contain"
                    loading="lazy"
                    width={128}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
