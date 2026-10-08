import { createFileRoute } from "@tanstack/react-router";
import { JobPage } from "@/components/karriere/JobPage";
import { jobs } from "@/data/jobs";

const job = jobs.find((j) => j.slug === "sekretariat")!;

const KARRIERE_PIXEL_ID = "1999340737399086";

const sekretariatPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${KARRIERE_PIXEL_ID}');
fbq('track','PageView');`;

const sekretariatPixelNoScript = `var ns=document.createElement('noscript');
var img=document.createElement('img');
img.height=1;
img.width=1;
img.style.display='none';
img.src='https://www.facebook.com/tr?id=${KARRIERE_PIXEL_ID}&ev=PageView&noscript=1';
ns.appendChild(img);
document.body.appendChild(ns);`;

export const Route = createFileRoute("/karriere/sekretariat")({
  head: () => ({
    meta: [
      { title: job.seoTitle },
      { name: "description", content: job.seoDescription },
      { property: "og:title", content: job.seoTitle },
      { property: "og:description", content: job.seoDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/karriere/sekretariat" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/karriere/sekretariat" }],
    scripts: [
      { children: sekretariatPixelScript },
      { children: sekretariatPixelNoScript },
    ],
  }),
  component: () => <JobPage job={job} />,
});
