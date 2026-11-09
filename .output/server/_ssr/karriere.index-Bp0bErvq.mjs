import { n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { t as jobs } from "./jobs-C2KV7ya-.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as GraduationCap, I as House, K as Euro, Y as Clock, a as Users, dt as ArrowRight, h as ShieldCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/karriere.index-Bp0bErvq.js
var import_jsx_runtime = require_jsx_runtime();
function KarriereIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden border-b border-border/60 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page py-16 sm:py-20 lg:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Wir stellen ein"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-display text-[2rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl",
								children: "Offene Stellen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg text-muted-foreground",
								children: "Arbeite von zuhause aus in einem Team, das Wert auf saubere Prozesse und echten Zusammenhalt legt. Alle Stellen: 20 € Stundenlohn, 100 % Homeoffice, Teilzeit oder Vollzeit."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-elegant sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(job.badgeIcon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-xl font-semibold text-foreground sm:text-2xl",
								children: job.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: job.teaser
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									{
										icon: Euro,
										label: "20 €/Std"
									},
									{
										icon: House,
										label: "100 % Homeoffice"
									},
									{
										icon: Clock,
										label: "Teilzeit & Vollzeit"
									}
								].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(chip.icon, { className: "h-3.5 w-3.5 text-primary" }), chip.label]
								}, chip.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: job.path,
										children: ["Stelle ansehen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
									})
								})
							})
						]
					}, job.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border/60 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-16 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
							children: "Das erwartet dich bei uns"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Gleiche Rahmenbedingungen für alle Positionen."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: Euro,
								title: "20 € Stundenlohn",
								text: "Faire, verlässliche Bezahlung ab dem ersten Tag."
							},
							{
								icon: House,
								title: "100 % Homeoffice",
								text: "Arbeiten von zuhause – deutschlandweit."
							},
							{
								icon: Clock,
								title: "Teilzeit oder Vollzeit",
								text: "Planbare Schichten, die zu deinem Alltag passen."
							},
							{
								icon: GraduationCap,
								title: "Strukturierte Einarbeitung",
								text: "Onboarding, Schulungen und feste Ansprech­personen."
							},
							{
								icon: Users,
								title: "Wertschätzendes Team",
								text: "Kein Callcenter‑Klima – echter Zusammenhalt."
							},
							{
								icon: ShieldCheck,
								title: "Sichere Prozesse",
								text: "Klare Guidelines, moderne Tools, DSGVO‑konform."
							}
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-semibold text-foreground",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: b.text
								})
							]
						}, b.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { KarriereIndex as component };
