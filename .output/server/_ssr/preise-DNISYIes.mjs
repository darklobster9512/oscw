import { o as __toESM } from "../_runtime.mjs";
import { i as cn, n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { t as Reveal } from "./primitives-D9VQmURQ.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { dt as ArrowRight, l as Star, q as Download, rt as Check } from "../_libs/lucide-react.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
// node_modules/.nitro/vite/services/ssr/assets/preise-DNISYIes.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var priceRows = [
	{
		label: "Bearbeitungsminute",
		hint: "Sekundengenaue Abrechnung. Bearbeitungszeit = Gesprächsminuten + max. 120 Sek. Nachbearbeitung.",
		price: "0,59 €"
	},
	{
		label: "Anrufannahmegebühr",
		hint: "Ab einer Gesprächszeit von 15 Sekunden.",
		price: "0,59 €"
	},
	{
		label: "Einrichtungsgebühr",
		hint: "inklusive",
		price: "0,00 €"
	},
	{
		label: "Monatliche Grundgebühr",
		hint: "inklusive",
		price: "0,00 €"
	},
	{
		label: "Gebühr für 24h-Erweiterung",
		hint: "inklusive",
		price: "0,00 €"
	},
	{
		label: "Zusätzliches Sekretariat für Mitarbeiter",
		hint: "inklusive",
		price: "0,00 €"
	},
	{
		label: "Minutenzuschlag außerhalb der Kernzeit (Mo.–Fr. 7–19 h)",
		hint: "inklusive",
		price: "0,00 €"
	},
	{
		label: "SMS-Benachrichtigung (optional)",
		hint: "pro SMS",
		price: "0,05 €"
	},
	{
		label: "E-Mail-Benachrichtigung",
		hint: "inklusive",
		price: "0,00 €"
	}
];
var forwardingRows = [
	{
		label: "Deutsches Festnetz",
		price: "0,01 € / Min."
	},
	{
		label: "Deutsches Mobilfunknetz",
		price: "0,09 € / Min."
	},
	{
		label: "Internationales Festnetz",
		price: "0,14 € / Min."
	},
	{
		label: "Internationales Mobilfunknetz",
		price: "0,19 € / Min."
	}
];
var addOnRows = [
	{
		label: "Individuelle Warteschleifenansage inkl. Melodie (Aufnahme & Implementierung)",
		price: "39,00 € einmalig"
	},
	{
		label: "Implementierung einer bereits bestehenden Wartemelodie",
		price: "19,00 € einmalig"
	},
	{
		label: "Rufnummer mit Wunsch-Ortsvorwahl",
		price: "10,00 € monatlich"
	},
	{
		label: "Blacklist – die Option gegen nervige Werbeanrufe",
		price: "5,00 € monatlich"
	},
	{
		label: "Adressbuch – die Option zur Verwaltung Ihrer Kunden",
		price: "20,00 € monatlich"
	}
];
var reviews = [
	{
		name: "Noah",
		date: "Juni 2026",
		text: "Ich bin mit Sekretariat-Service wirklich sehr zufrieden. Besonders beeindruckt mich, wie schnell Anrufe entgegengenommen werden. Die Telefonagenten sind rund um die Uhr freundlich, professionell und deutschsprachig. Auch die Steuerung des Services über das Interface ist sehr komfortabel und gut durchdacht."
	},
	{
		name: "Matthias Hengfeld",
		date: "Juni 2026",
		text: "Wir nutzen den Telefonservice von Sekretariat-Service, wenn bei uns gerade viel zu tun ist. Das ermöglicht uns, uns voll auf unsere Arbeit zu konzentrieren, während Anrufe zuverlässig entgegengenommen werden."
	},
	{
		name: "Phuong Vo",
		date: "Mai 2026",
		text: "Wir nutzen Sekretariat-Service jetzt schon im 2. Monat. Ich bin mit der Bearbeitung und dem ganzen Prozess sehr zufrieden. Mit dem Backoffice können alle notwendigen Einstellungen vorgenommen werden. Einfacher geht's nicht."
	},
	{
		name: "Angelika Mausolff",
		date: "April 2026",
		text: "Mit Sekretariat-Service habe ich den Partner gefunden, den ich seit Jahren gesucht habe. Die Mitarbeiter nehmen meine Anrufe professionell entgegen und innerhalb weniger Minuten habe ich eine Info, wer angerufen hat."
	},
	{
		name: "Sandra Schaefer",
		date: "April 2026",
		text: "Die Anrufentgegennahme erfolgt sehr professionell und zuverlässig, genauso die Abrechnung. Die schnelle Ersteinrichtung hat individuell erfolgen können und wirklich sehr gut geklappt."
	},
	{
		name: "Michaela Haase",
		date: "März 2026",
		text: "Sekretariat-Service ist eine sehr gute Entlastung. Ich möchte den Service nicht mehr missen, weil es mir als Einzelunternehmerin die Möglichkeit bietet, in Ruhe konzentriert arbeiten zu können."
	}
];
function fmt(n) {
	return n.toLocaleString("de-DE", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
function PreisePage() {
	const [calls, setCalls] = (0, import_react.useState)(100);
	const [duration, setDuration] = (0, import_react.useState)(2.5);
	const { annahme, minuten, total, perCall } = (0, import_react.useMemo)(() => {
		const annahme = calls * .59;
		const minuten = calls * duration * .59;
		const total = annahme + minuten;
		return {
			annahme,
			minuten,
			total,
			perCall: calls > 0 ? total / calls : 0
		};
	}, [calls, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 -z-10 bg-mesh"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-page pt-14 pb-20 md:pt-20 md:pb-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), "Preise · 100 % transparent"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-6 font-display text-[2rem] leading-[1.05] tracking-tight md:text-[3.75rem]",
										children: [
											"Was kostet gute Erreichbarkeit?",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "Weniger, als Sie denken."
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
										children: [
											"0 € Grundgebühr, keine Vertragsbindung – Sie zahlen nur",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: "0,59 €"
											}),
											" pro Gespräch und Bearbeitungsminute, sekundengenau abgerechnet. Sekretariat-Service ausschalten = keine Kosten."
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											className: "rounded-full shadow-glow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/kontakt",
												children: ["Jetzt kostenlos testen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											variant: "outline",
											className: "rounded-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/kontakt",
												children: "Account erstellen"
											})
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: .2,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-sm",
										children: [
											"0 € Grundgebühr",
											"0,59 € pro Gespräch & Minute",
											"100 % Kostenkontrolle"
										].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/80",
												children: b
											})]
										}, b))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex text-primary",
												children: [
													0,
													1,
													2,
													3,
													4
												].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: "4,7"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google-Rezensionen" })
										]
									})]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border/60 bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page py-20 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium uppercase tracking-wider text-primary",
									children: "Preisrechner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl tracking-tight md:text-5xl",
									children: "Was kostet Sekretariat-Service für Sie?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-muted-foreground",
									children: "Schätzen Sie Ihr Anrufvolumen – wir rechnen Ihre voraussichtlichen Monatskosten aus. Ohne Grundgebühr zahlen Sie nur das, was Sie wirklich nutzen."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: "Wie viel telefonieren Sie?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-medium text-foreground",
													children: "Anrufe pro Monat"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-xl font-semibold text-foreground sm:text-2xl",
													children: calls
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
												value: [calls],
												min: 10,
												max: 1e3,
												step: 10,
												onValueChange: (v) => setCalls(v[0]),
												className: "mt-4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex justify-between text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1.000" })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-medium text-foreground",
													children: "Ø Gesprächsdauer pro Anruf"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-xl font-semibold text-foreground sm:text-2xl",
													children: [duration.toLocaleString("de-DE", {
														minimumFractionDigits: 1,
														maximumFractionDigits: 1
													}), " Min."]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
												value: [duration],
												min: 1,
												max: 10,
												step: .5,
												onValueChange: (v) => setDuration(v[0]),
												className: "mt-4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex justify-between text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 Min." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10 Min." })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 text-xs text-muted-foreground",
										children: "Inkl. Gesprächszeit + max. 2 Min. Nachbearbeitung. Sekundengenau abgerechnet."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[color:var(--ink-deep)] p-6 sm:p-8 text-ink-deep-foreground shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm uppercase tracking-wider text-ink-deep-foreground/70",
										children: "Ihre geschätzten Kosten"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
										children: [fmt(total), " €"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-sm text-ink-deep-foreground/70",
										children: [
											"pro Monat · Ø ",
											fmt(perCall),
											" € pro Anruf"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between border-b border-ink-deep-foreground/10 pb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink-deep-foreground/80",
													children: "Anrufannahme (0,59 € × Anrufe)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold",
													children: [fmt(annahme), " €"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between border-b border-ink-deep-foreground/10 pb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink-deep-foreground/80",
													children: "Bearbeitungsminuten (0,59 € × Min.)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold",
													children: [fmt(minuten), " €"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink-deep-foreground/80",
													children: "Grundgebühr"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "0,00 €"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "mt-8 w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/kontakt",
											children: "Jetzt kostenlos testen"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs text-ink-deep-foreground/60",
										children: "Beispielrechnung auf Basis Ihrer Angaben. Abgerechnet wird sekundengenau, ohne Grundgebühr und Mindestumsatz."
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page py-20 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium uppercase tracking-wider text-primary",
									children: "Kundenstimmen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl tracking-tight md:text-5xl",
									children: "Das sagen unsere Kundinnen und Kunden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-center gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex text-primary",
											children: [
												0,
												1,
												2,
												3,
												4
											].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "4,7"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Basierend auf 200 Google-Rezensionen"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
							children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "flex flex-col rounded-2xl border border-border bg-surface p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5 text-primary",
										children: [
											0,
											1,
											2,
											3,
											4
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "mt-5 flex-1 text-sm leading-relaxed text-foreground/90",
										children: [
											"„",
											r.text,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "mt-6 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-semibold text-primary",
											children: r.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: r.date
										})] })]
									})
								]
							}, r.name))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border/60 bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page py-20 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium uppercase tracking-wider text-primary",
								children: "Preisübersicht"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl tracking-tight md:text-5xl",
								children: "Unsere detaillierte Preisübersicht"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-14 max-w-4xl space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border bg-background p-8 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: "Kernleistungen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 divide-y divide-border",
										children: priceRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium text-foreground",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground",
												children: row.hint
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-xl font-semibold text-foreground sm:text-right",
												children: row.price
											})]
										}, row.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border bg-background p-8 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: "Weiterleitungen (optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 divide-y divide-border",
										children: forwardingRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/90",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-lg font-semibold",
												children: row.price
											})]
										}, row.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border bg-background p-8 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: "Optionale Zusatzleistungen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 divide-y divide-border",
										children: addOnRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/90",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-lg font-semibold sm:text-right",
												children: row.price
											})]
										}, row.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "lg",
										className: "rounded-full gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Preisliste als PDF herunterladen"]
									})
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { PreisePage as component };
