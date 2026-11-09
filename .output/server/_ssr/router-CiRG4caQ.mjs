import { o as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D8jQpDG7.mjs";
import { t as industries } from "./industries-BvLC62GZ.mjs";
import { t as jobs } from "./jobs-C2KV7ya-.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Ht as notFound, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/router-CiRG4caQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CLZV7gMV.css";
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var STORAGE_KEY = "Sekretariat-Service-cookie-consent";
function CookieBanner() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!window.localStorage.getItem(STORAGE_KEY)) {
				const t = setTimeout(() => setVisible(true), 400);
				return () => clearTimeout(t);
			}
		} catch {
			setVisible(true);
		}
	}, []);
	const decide = (choice) => {
		try {
			window.localStorage.setItem(STORAGE_KEY, choice);
		} catch {}
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:px-0 sm:pb-0",
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "Cookie-Hinweis",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-white/10 bg-ink-deep p-5 text-white shadow-2xl shadow-black/30 backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-500",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-white/85",
				children: [
					"Wir verwenden Cookies, um unsere Website zu verbessern. Details findest du in den",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cookie-einstellungen",
						className: "underline decoration-primary/60 underline-offset-2 hover:text-primary",
						children: "Cookie-Einstellungen"
					}),
					" ",
					"und der",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/datenschutz",
						className: "underline decoration-primary/60 underline-offset-2 hover:text-primary",
						children: "Datenschutzerklärung"
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => decide("declined"),
					className: "inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white",
					children: "Ablehnen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => decide("accepted"),
					className: "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
					children: "Akzeptieren"
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sekretariat-Service – Telefonservice & Sekretariat 24/7" },
			{
				name: "description",
				content: "Professioneller Telefonservice aus Deutschland. Jeder Anruf angenommen, jede Nachricht zugestellt – ab 0,59 € pro Gespräch."
			},
			{
				name: "author",
				content: "Sekretariat-Service"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Sekretariat-Service"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-CNkpt6bw.mjs");
var title = "Sekretariat-Service – Ihre ausgelagerte Telefonzentrale";
var description = "Sie arbeiten, wir gehen ran: Telefonannahme in Ihrem Namen, Terminvergabe und sofortige Weiterleitung. Keine Grundgebühr, monatlich kündbar.";
var Route$13 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "preload",
			as: "image",
			href: "/hero-agent.jpg",
			fetchpriority: "high"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./agb-BsYUY-iT.mjs");
var Route$12 = createFileRoute("/agb")({
	head: () => ({
		meta: [
			{ title: "AGB · Sekretariat-Service" },
			{
				name: "description",
				content: "Allgemeine Geschäftsbedingungen der OSCW Office Service & Co. Working GmbH für den Telefonservice Sekretariat-Service."
			},
			{
				property: "og:title",
				content: "AGB · Sekretariat-Service"
			},
			{
				property: "og:description",
				content: "Vertragsbedingungen für Sekretariat-Service – Leistungen, Laufzeit, Preise, Haftung."
			},
			{
				property: "og:url",
				content: "/agb"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/agb"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./callcenter-CQI0Lo8g.mjs");
var Route$11 = createFileRoute("/callcenter")({
	head: () => ({ meta: [
		{ title: "Callcenter-Lösungen für Unternehmen · Sekretariat-Service" },
		{
			name: "description",
			content: "Inbound-Callcenter mit qualifizierten Agenten, CRM-Integration und messbaren KPIs. Skalierbar von 10 bis 10.000 Anrufen."
		},
		{
			property: "og:title",
			content: "Callcenter-Lösungen für Unternehmen · Sekretariat-Service"
		},
		{
			property: "og:description",
			content: "Inbound-Callcenter mit qualifizierten Agenten, CRM-Integration und messbaren KPIs. Skalierbar von 10 bis 10.000 Anrufen."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./cookie-einstellungen-CuxyJd8Q.mjs");
var Route$10 = createFileRoute("/cookie-einstellungen")({
	head: () => ({
		meta: [
			{ title: "Cookie-Einstellungen · Sekretariat-Service" },
			{
				name: "description",
				content: "Verwalten Sie Ihre Cookie-Präferenzen für sekretariat-service.de – transparent und jederzeit anpassbar."
			},
			{
				property: "og:title",
				content: "Cookie-Einstellungen · Sekretariat-Service"
			},
			{
				property: "og:description",
				content: "Ihre Cookie-Präferenzen – notwendig, Statistik und Marketing individuell steuern."
			},
			{
				property: "og:url",
				content: "/cookie-einstellungen"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cookie-einstellungen"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./datenschutz-BX82GjqF.mjs");
var Route$9 = createFileRoute("/datenschutz")({
	head: () => ({
		meta: [
			{ title: "Datenschutzerklärung · Sekretariat-Service" },
			{
				name: "description",
				content: "Informationen zur Verarbeitung personenbezogener Daten bei Sekretariat-Service gemäß DSGVO."
			},
			{
				property: "og:title",
				content: "Datenschutzerklärung · Sekretariat-Service"
			},
			{
				property: "og:description",
				content: "Wie die OSCW Office Service & Co. Working GmbH Ihre Daten verarbeitet – transparent und DSGVO-konform."
			},
			{
				property: "og:url",
				content: "/datenschutz"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/datenschutz"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./impressum-Dsinf7ZG.mjs");
var Route$8 = createFileRoute("/impressum")({
	head: () => ({
		meta: [
			{ title: "Impressum · Sekretariat-Service" },
			{
				name: "description",
				content: "Anbieterkennzeichnung nach § 5 TMG der OSCW Office Service & Co. Working GmbH – Betreiberin von Sekretariat-Service."
			},
			{
				property: "og:title",
				content: "Impressum · Sekretariat-Service"
			},
			{
				property: "og:description",
				content: "Anbieterkennzeichnung nach § 5 TMG der OSCW Office Service & Co. Working GmbH."
			},
			{
				property: "og:url",
				content: "/impressum"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/impressum"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./karriere-CSmt7ITh.mjs");
var Route$7 = createFileRoute("/karriere")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./kontakt-BYSaTfdl.mjs");
var Route$6 = createFileRoute("/kontakt")({
	head: () => ({ meta: [
		{ title: "Kontakt & Rückruf-Service · Sekretariat-Service" },
		{
			name: "description",
			content: "Rückruf innerhalb von 60 Minuten. Sprechen Sie mit unserem Team über Ihren individuellen Telefonservice."
		},
		{
			property: "og:title",
			content: "Kontakt & Rückruf-Service · Sekretariat-Service"
		},
		{
			property: "og:description",
			content: "Rückruf innerhalb von 60 Minuten. Sprechen Sie mit unserem Team über Ihren individuellen Telefonservice."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./preise-DNISYIes.mjs");
var Route$5 = createFileRoute("/preise")({
	head: () => ({ meta: [
		{ title: "Preise – Sekundengenau ab 0,59 € · Sekretariat-Service" },
		{
			name: "description",
			content: "Transparente Preise ohne Grundgebühr. Sekundengenaue Abrechnung, keine Vertragslaufzeit. Jetzt Tarif berechnen."
		},
		{
			property: "og:title",
			content: "Preise – Sekundengenau ab 0,59 € · Sekretariat-Service"
		},
		{
			property: "og:description",
			content: "Transparente Preise ohne Grundgebühr. Sekundengenaue Abrechnung, keine Vertragslaufzeit. Jetzt Tarif berechnen."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./vorteile--S72N9qk.mjs");
var Route$4 = createFileRoute("/vorteile")({
	head: () => ({ meta: [
		{ title: "Vorteile – 24/7 Erreichbarkeit & mehr Umsatz · Sekretariat-Service" },
		{
			name: "description",
			content: "Nie wieder Anrufe verpassen: DSGVO-konform, deutschsprachig, ab Tag 1 einsatzbereit. Alle Vorteile im Überblick."
		},
		{
			property: "og:title",
			content: "Vorteile – 24/7 Erreichbarkeit & mehr Umsatz · Sekretariat-Service"
		},
		{
			property: "og:description",
			content: "Nie wieder Anrufe verpassen: DSGVO-konform, deutschsprachig, ab Tag 1 einsatzbereit. Alle Vorteile im Überblick."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitNotFoundComponentImporter = () => import("./branchen._slug-BJgYPmf2.mjs");
var $$splitComponentImporter$3 = () => import("./branchen._slug-6DuyJmKl.mjs");
var Route$3 = createFileRoute("/branchen/$slug")({
	loader: ({ params }) => {
		const industry = industries.find((i) => i.slug === params.slug);
		if (!industry) throw notFound();
		return { industry };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Branche nicht gefunden · Sekretariat-Service" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { industry } = loaderData;
		const title = `Telefonservice für ${industry.name} · Sekretariat-Service`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: industry.short
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: industry.short
			},
			{
				property: "og:type",
				content: "website"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var $$splitComponentImporter$2 = () => import("./karriere.index-Bp0bErvq.mjs");
var TITLE = "Karriere – Offene Stellen im Homeoffice · Sekretariat-Service";
var DESCRIPTION = "Offene Stellen bei Sekretariat-Service: Sekretär:in und Recruiter:in – 20 € Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit.";
var Route$2 = createFileRoute("/karriere/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/karriere"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/karriere"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var job$1 = jobs.find((j) => j.slug === "recruiting");
var $$splitComponentImporter$1 = () => import("./karriere.recruiting-B_XMLjc-.mjs");
var KARRIERE_PIXEL_ID$1 = "1999340737399086";
var recruitingPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${KARRIERE_PIXEL_ID$1}');
fbq('track','PageView');`;
var recruitingPixelNoScript = `var ns=document.createElement('noscript');
var img=document.createElement('img');
img.height=1;
img.width=1;
img.style.display='none';
img.src='https://www.facebook.com/tr?id=${KARRIERE_PIXEL_ID$1}&ev=PageView&noscript=1';
ns.appendChild(img);
document.body.appendChild(ns);`;
var Route$1 = createFileRoute("/karriere/recruiting")({
	head: () => ({
		meta: [
			{ title: job$1.seoTitle },
			{
				name: "description",
				content: job$1.seoDescription
			},
			{
				property: "og:title",
				content: job$1.seoTitle
			},
			{
				property: "og:description",
				content: job$1.seoDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/karriere/recruiting"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/karriere/recruiting"
		}],
		scripts: [{ children: recruitingPixelScript }, { children: recruitingPixelNoScript }]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var job = jobs.find((j) => j.slug === "sekretariat");
var $$splitComponentImporter = () => import("./karriere.sekretariat-DngeNBAo.mjs");
var KARRIERE_PIXEL_ID = "1999340737399086";
var sekretariatPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${KARRIERE_PIXEL_ID}');
fbq('track','PageView');`;
var sekretariatPixelNoScript = `var ns=document.createElement('noscript');
var img=document.createElement('img');
img.height=1;
img.width=1;
img.style.display='none';
img.src='https://www.facebook.com/tr?id=${KARRIERE_PIXEL_ID}&ev=PageView&noscript=1';
ns.appendChild(img);
document.body.appendChild(ns);`;
var Route = createFileRoute("/karriere/sekretariat")({
	head: () => ({
		meta: [
			{ title: job.seoTitle },
			{
				name: "description",
				content: job.seoDescription
			},
			{
				property: "og:title",
				content: job.seoTitle
			},
			{
				property: "og:description",
				content: job.seoDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/karriere/sekretariat"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/karriere/sekretariat"
		}],
		scripts: [{ children: sekretariatPixelScript }, { children: sekretariatPixelNoScript }]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AgbRoute = Route$12.update({
	id: "/agb",
	path: "/agb",
	getParentRoute: () => Route$14
});
var CallcenterRoute = Route$11.update({
	id: "/callcenter",
	path: "/callcenter",
	getParentRoute: () => Route$14
});
var CookieEinstellungenRoute = Route$10.update({
	id: "/cookie-einstellungen",
	path: "/cookie-einstellungen",
	getParentRoute: () => Route$14
});
var DatenschutzRoute = Route$9.update({
	id: "/datenschutz",
	path: "/datenschutz",
	getParentRoute: () => Route$14
});
var ImpressumRoute = Route$8.update({
	id: "/impressum",
	path: "/impressum",
	getParentRoute: () => Route$14
});
var KarriereRoute = Route$7.update({
	id: "/karriere",
	path: "/karriere",
	getParentRoute: () => Route$14
});
var KontaktRoute = Route$6.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$14
});
var PreiseRoute = Route$5.update({
	id: "/preise",
	path: "/preise",
	getParentRoute: () => Route$14
});
var VorteileRoute = Route$4.update({
	id: "/vorteile",
	path: "/vorteile",
	getParentRoute: () => Route$14
});
var BranchenSlugRoute = Route$3.update({
	id: "/branchen/$slug",
	path: "/branchen/$slug",
	getParentRoute: () => Route$14
});
var KarriereIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => KarriereRoute
});
var KarriereRouteChildren = {
	KarriereRecruitingRoute: Route$1.update({
		id: "/recruiting",
		path: "/recruiting",
		getParentRoute: () => KarriereRoute
	}),
	KarriereSekretariatRoute: Route.update({
		id: "/sekretariat",
		path: "/sekretariat",
		getParentRoute: () => KarriereRoute
	}),
	KarriereIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AgbRoute,
	CallcenterRoute,
	CookieEinstellungenRoute,
	DatenschutzRoute,
	ImpressumRoute,
	KarriereRoute: KarriereRoute._addFileChildren(KarriereRouteChildren),
	KontaktRoute,
	PreiseRoute,
	VorteileRoute,
	BranchenSlugRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { Route$3 as i, job as n, job$1 as r, router_exports as t };
