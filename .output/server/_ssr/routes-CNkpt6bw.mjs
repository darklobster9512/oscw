import { o as __toESM } from "../_runtime.mjs";
import { n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { t as industries } from "./industries-BvLC62GZ.mjs";
import { t as Reveal } from "./primitives-D9VQmURQ.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as Languages, G as FileText, N as MailCheck, R as Headset, b as Quote, dt as ArrowRight, n as X, ot as CalendarCheck, rt as Check, ut as ArrowUpRight, w as PhoneIncoming, x as Plus } from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-CNkpt6bw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), children]
	});
}
function HomeHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 pt-12 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-20 md:pb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Ihr Büro am Telefon · aus Berlin" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-[2.25rem] font-semibold leading-[1.08] text-foreground md:text-[3.5rem]",
						children: [
							"Sie arbeiten.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "Wir gehen ran."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
						children: "Sekretariat-Service ist Ihre ausgelagerte Telefonzentrale. Unser Team meldet sich mit Ihrem Firmennamen, notiert jedes Anliegen und schickt Ihnen alles Wichtige sofort zu – abgerechnet wird nur, was wirklich anfällt."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								children: ["Unverbindlich anfragen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "ghost",
							className: "rounded-md underline-offset-4 hover:underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/preise",
								children: "Preise vergleichen"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid max-w-lg grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-2",
						children: [
							"Keine Grundgebühr",
							"Monatlich kündbar",
							"Deutschsprachiges Team",
							"DSGVO-konform"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }),
								" ",
								t
							]
						}, t))
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-primary/15",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[2rem] border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/hero-agent.jpg",
								alt: "Freundliche Assistentin mit Headset nimmt Anrufe entgegen",
								width: 1200,
								height: 1408,
								loading: "eager",
								fetchPriority: "high",
								decoding: "async",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -left-6 bottom-10 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-mockup",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIncoming, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-foreground",
								children: "Anruf angenommen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Notiz ist unterwegs zu Ihnen"
							})] })]
						})
					]
				})
			})]
		})
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page grid grid-cols-2 divide-border py-8 md:grid-cols-4 md:divide-x",
			children: [
				["Mo–So", "erreichbar"],
				["0 €", "Einrichtung"],
				["30 Tage", "Kündigungsfrist"],
				["100 %", "Server in Deutschland"]
			].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: a
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: b
				})]
			}, b))
		})
	});
}
function ProblemSolution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Warum auslagern?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl",
			children: "Jeder verpasste Anruf ist ein Auftrag, der woanders landet."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-full rounded-2xl border border-border bg-card p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Ohne Sekretariat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-4",
					children: [
						"Das Telefon klingelt mitten im Kundentermin",
						"Anrufer landen auf der Mailbox und legen auf",
						"Rückrufe stapeln sich bis zum Feierabend",
						"Urlaub heißt: Telefon umleiten aufs Handy"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" }),
							" ",
							t
						]
					}, t))
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-2xl bg-foreground p-8 text-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Mit Sekretariat-Service"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: [
							"Ein Mensch meldet sich – in Ihrem Namen",
							"Jedes Anliegen wird vollständig notiert",
							"Sie entscheiden, wann Sie zurückrufen",
							"Ihre Erreichbarkeit macht keinen Urlaub"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
								" ",
								t
							]
						}, t))
					})]
				})
			})]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-secondary/30 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Leistungen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
				children: "Was wir für Sie übernehmen"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Headset,
						title: "Telefonannahme",
						text: "Wir melden uns mit Ihrem Wunschtext und nehmen Name, Nummer und Anliegen auf."
					},
					{
						icon: CalendarCheck,
						title: "Terminvergabe",
						text: "Termine tragen wir direkt in Ihren Kalender ein – nach Ihren Regeln und Zeitfenstern."
					},
					{
						icon: MailCheck,
						title: "Sofortige Weiterleitung",
						text: "Nach jedem Gespräch erhalten Sie eine kurze Zusammenfassung per E-Mail oder SMS."
					},
					{
						icon: FileText,
						title: "Eigener Leitfaden",
						text: "Häufige Fragen beantworten wir nach Ihren Vorgaben, damit Anrufer sofort weiterkommen."
					},
					{
						icon: Languages,
						title: "Zweisprachig",
						text: "Gespräche führen wir auf Deutsch und Englisch – ohne Aufpreis."
					},
					{
						icon: PhoneIncoming,
						title: "Überlauf & Urlaub",
						text: "Nur bei Besetzt, außerhalb der Bürozeiten oder komplett – Sie legen fest, wann wir übernehmen."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					className: "bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl font-semibold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: s.text
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "In drei Schritten startklar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
			children: "So einfach geht der Start"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mt-14 grid gap-10 md:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 right-0 top-5 hidden h-px bg-border md:block",
				"aria-hidden": true
			}), [
				["Gespräch", "In einem kurzen Telefonat klären wir, wie Ihr Unternehmen am Telefon klingen soll."],
				["Einrichtung", "Wir legen Begrüßung, Leitfaden und Benachrichtigungen an – meist am selben Tag."],
				["Umleitung", "Sie stellen Ihre Rufumleitung ein. Ab jetzt geht niemand mehr verloren."]
			].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative grid h-10 w-10 place-items-center rounded-full border-2 border-primary bg-background font-display font-semibold text-primary",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-semibold text-foreground",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: d
						})
					]
				})
			}, t))]
		})]
	});
}
function IndustryList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Branchen" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
					children: "Wir sprechen Ihre Sprache"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Eine Kanzlei braucht andere Worte als ein Handwerksbetrieb. Für jede Branche arbeiten wir mit passenden Abläufen und Formulierungen."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border border-y border-border",
				children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/branchen/$slug",
					params: { slug: ind.slug },
					className: "group flex items-center gap-4 py-4 transition-colors hover:text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ind.icon, { className: "h-5 w-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: ind.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden flex-1 truncate text-sm text-muted-foreground md:block",
							children: ind.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
					]
				}) }, ind.slug))
			})]
		})
	});
}
function DayInTheLife() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-foreground py-20 text-background md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Ein ganz normaler Dienstag" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-2xl font-display text-3xl font-semibold md:text-4xl",
				children: "Während Sie arbeiten, kümmern wir uns um den Rest."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-4",
				children: [
					["08:12", "Ein Neukunde fragt nach einem Angebot. Wir notieren Projekt, Budget und Rückrufzeit."],
					["10:45", "Sie sind beim Kunden. Ein Termin wird verschoben – direkt in Ihrem Kalender."],
					["13:30", "Ein Lieferant meldet eine Verspätung. Sie bekommen sofort eine SMS."],
					["17:55", "Kurz vor Feierabend: zwei Rückrufwünsche, sauber zusammengefasst in Ihrem Postfach."]
				].map(([time, text], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full border-t-2 border-primary pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-semibold text-primary",
							children: time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-background/80",
							children: text
						})]
					})
				}, time))
			})]
		})
	});
}
function PricingTable() {
	const [yearly, setYearly] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "preise",
		className: "border-t border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Preise" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
					children: "Sie zahlen pro Gespräch. Sonst nichts."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex w-fit rounded-md border border-border p-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setYearly(false),
						className: `rounded px-4 py-1.5 ${!yearly ? "bg-foreground text-background" : "text-muted-foreground"}`,
						children: "Monatlich"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setYearly(true),
						className: `rounded px-4 py-1.5 ${yearly ? "bg-foreground text-background" : "text-muted-foreground"}`,
						children: "Jährlich"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border rounded-2xl border border-border",
				children: [
					{
						name: "Basis",
						m: "0,59 €",
						y: "0,50 €",
						unit: "je Gespräch",
						for: "Selbstständige und kleine Praxen",
						items: [
							"Annahme mit Ihrem Firmennamen",
							"Zusammenfassung per E-Mail",
							"Deutsch & Englisch",
							"Keine monatliche Gebühr"
						]
					},
					{
						name: "Professional",
						m: "0,89 €",
						y: "0,76 €",
						unit: "je Gespräch",
						for: "Wachsende Teams und Kanzleien",
						items: [
							"Alle Basis-Leistungen",
							"Termine in Ihrem Kalender",
							"SMS- und Push-Hinweise",
							"Eigener Gesprächsleitfaden",
							"Fester Ansprechpartner"
						],
						top: true
					},
					{
						name: "Enterprise",
						m: "individuell",
						y: "individuell",
						unit: "nach Absprache",
						for: "Größere Volumen mit Callcenter",
						items: [
							"Alle Professional-Leistungen",
							"Anliegen komplett abschließen",
							"Anbindung an CRM und ERP",
							"Kennzahlen und Reports",
							"Eigenes Team mit SLA"
						]
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid gap-6 p-8 md:grid-cols-[1fr_1.5fr_auto] md:items-center ${p.top ? "bg-primary/5" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold text-foreground",
									children: p.name
								}), p.top && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground",
									children: "Meistgewählt"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: p.for
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 font-display text-3xl font-semibold text-foreground",
								children: [
									yearly ? p.y : p.m,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-normal text-muted-foreground",
										children: p.unit
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2 text-sm text-foreground/80 sm:grid-cols-2",
							children: p.items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-primary" }), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: p.top ? "default" : "outline",
							className: "rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								children: "Anfragen"
							})
						})
					]
				}, p.name))
			})]
		})
	});
}
function Voices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-secondary/30 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Stimmen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
				children: "Was unsere Kunden sagen"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-3",
				children: [
					{
						img: "/testimonial-1.jpg",
						name: "Kathrin M.",
						role: "Physiotherapie-Praxis",
						text: "Früher habe ich zwischen zwei Behandlungen Rückrufe erledigt. Heute lese ich abends eine Liste – und alle Termine stehen schon im Kalender."
					},
					{
						img: "/testimonial-2.jpg",
						name: "Jonas R.",
						role: "Elektrobetrieb",
						text: "Auf der Baustelle kann ich nicht ans Telefon. Seit wir den Service nutzen, geht uns kein Auftrag mehr durch die Lappen."
					},
					{
						img: "/testimonial-3.jpg",
						name: "Dr. Sabine W.",
						role: "Steuerkanzlei",
						text: "Die Mandanten merken keinen Unterschied zu unserem eigenen Empfang. Genau das war uns wichtig."
					}
				].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-4 flex-1 font-display text-lg leading-relaxed text-foreground",
								children: q.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: q.img,
									alt: "",
									width: 48,
									height: 48,
									loading: "lazy",
									className: "h-12 w-12 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: q.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: q.role
								})] })]
							})
						]
					})
				}, q.name))
			})]
		})
	});
}
function Questions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-t border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Fragen & Antworten" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl",
					children: "Gut zu wissen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted-foreground",
					children: ["Ihre Frage ist nicht dabei? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontakt",
						className: "text-primary underline underline-offset-4",
						children: "Schreiben Sie uns."
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border border-y border-border",
				children: [
					["Merken meine Anrufer, dass sie mit einem externen Service sprechen?", "Nein. Wir melden uns mit Ihrem Firmennamen und Ihrer Begrüßung und halten uns an Ihre Vorgaben."],
					["Wie leite ich meine Anrufe weiter?", "Über die Rufumleitung Ihrer Telefonanlage oder Ihres Mobilfunkvertrags. Wir zeigen Ihnen beim Start, wie es geht."],
					["Was zählt als Gespräch?", "Jeder angenommene Anruf, unabhängig von der Dauer. Verbindungen ohne Gesprächspartner berechnen wir nicht."],
					["Gibt es eine Mindestlaufzeit?", "Nein. Sie können monatlich kündigen – ohne Einrichtungsgebühr und ohne Grundgebühr."],
					["Wie werden meine Daten geschützt?", "Wir arbeiten DSGVO-konform, mit Servern in Deutschland und einem Auftragsverarbeitungsvertrag."]
				].map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-foreground",
						children: [q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: a
					})]
				}, q))
			})]
		})
	});
}
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontakt",
		className: "border-t border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mx-auto max-w-2xl font-display text-3xl font-semibold text-foreground md:text-5xl",
					children: ["Ab morgen geht bei Ihnen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "jemand ran."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-muted-foreground",
					children: "Erzählen Sie uns kurz von Ihrem Unternehmen. Wir melden uns innerhalb eines Werktags mit einem passenden Vorschlag."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "mt-8 rounded-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontakt",
						children: ["Jetzt Kontakt aufnehmen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
					})
				})
			] })
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSolution, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryList, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayInTheLife, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingTable, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Questions, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { Index as component };
