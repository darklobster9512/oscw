import { o as __toESM } from "../_runtime.mjs";
import { i as cn, n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { n as Label, t as Input } from "./label-J8B-QRmx.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as MapPinned, M as Mail, T as PhoneCall, Y as Clock, j as MapPin, m as Shield, rt as Check } from "../_libs/lucide-react.mjs";
import { a as stringType, i as objectType, r as literalType } from "../_libs/zod.mjs";
// node_modules/.nitro/vite/services/ssr/assets/kontakt-BYSaTfdl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var INTENTS = [
	"Beratung",
	"Angebot",
	"Rückruf",
	"Demo",
	"Sonstiges"
];
var callbackSchema = objectType({
	name: stringType().trim().min(1, "Bitte Namen angeben").max(100),
	phone: stringType().trim().min(4, "Bitte gültige Telefonnummer angeben").max(30, "Telefonnummer zu lang"),
	company: stringType().trim().max(120).optional().or(literalType("")),
	time: stringType().max(40).optional().or(literalType(""))
});
var messageSchema = objectType({
	name: stringType().trim().min(1, "Bitte Namen angeben").max(100),
	email: stringType().trim().email("Bitte gültige E-Mail-Adresse angeben").max(255),
	message: stringType().trim().min(1, "Bitte Nachricht eingeben").max(1e3, "Maximal 1000 Zeichen")
});
function KontaktPage() {
	const [mode, setMode] = (0, import_react.useState)("callback");
	const [intent, setIntent] = (0, import_react.useState)("Beratung");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	function handleCallback(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const result = callbackSchema.safeParse({
			name: fd.get("name"),
			phone: fd.get("phone"),
			company: fd.get("company") ?? "",
			time: fd.get("time") ?? ""
		});
		if (!result.success) {
			const errs = {};
			for (const issue of result.error.issues) {
				const k = issue.path[0];
				if (typeof k === "string") errs[k] = issue.message;
			}
			setErrors(errs);
			return;
		}
		setErrors({});
		setSent(true);
	}
	function handleMessage(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const result = messageSchema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			message: fd.get("message")
		});
		if (!result.success) {
			const errs = {};
			for (const issue of result.error.issues) {
				const k = issue.path[0];
				if (typeof k === "string") errs[k] = issue.message;
			}
			setErrors(errs);
			return;
		}
		setErrors({});
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "container-page py-14 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium uppercase tracking-wider text-primary",
							children: "Kontakt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-[2rem] leading-[1.1] tracking-tight md:text-6xl md:leading-tight",
							children: "Wir rufen Sie zurück – meist in 15\xA0Minuten."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-muted-foreground",
							children: "Kostenlose, unverbindliche Beratung. Sagen Sie uns kurz, worum es geht – wir kümmern uns."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }), " Antwort in 15 Min."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-primary" }), " DSGVO-konform"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "h-4 w-4 text-primary" }), " Made in Germany"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl tracking-tight",
								children: "So erreichen Sie uns"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Lieber direkt sprechen? Rufen Sie uns an – wir sind für Sie da."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: "E-Mail"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:kontakt@sekretariat-service.de",
											className: "font-medium hover:text-primary",
											children: "kontakt@sekretariat-service.de"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: "Adresse"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "OSCW Office Service & Co. Working GmbH · Hugo-Heimann-Str. 37 · 12353 Berlin"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: "Erreichbarkeit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "Mo–Fr 8–20 Uhr · Sa 9–14 Uhr"
										})] })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-border bg-surface p-6 sm:p-8 md:p-10 shadow-card",
							children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center py-14 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 font-display text-2xl",
										children: "Vielen Dank!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-sm text-muted-foreground",
										children: mode === "callback" ? "Wir rufen Sie so schnell wie möglich zurück – meist innerhalb von 15 Minuten." : "Wir melden uns innerhalb eines Werktags bei Ihnen."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-start justify-between gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl tracking-tight",
										children: mode === "callback" ? "Kostenlosen Rückruf anfordern" : "Nachricht schreiben"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: mode === "callback" ? "Wir melden uns telefonisch – schnell und unverbindlich." : "Wir antworten innerhalb eines Werktags."
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
										children: "Ihr Anliegen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: INTENTS.map((it) => {
											const active = intent === it;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-pressed": active,
												onClick: () => setIntent(it),
												className: "rounded-full px-4 py-1.5 text-sm transition-colors " + (active ? "bg-primary text-primary-foreground ring-1 ring-primary" : "border border-border text-foreground hover:border-primary/40 hover:text-primary"),
												children: it
											}, it);
										})
									})]
								}),
								mode === "callback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleCallback,
									className: "mt-6 space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "hidden",
											name: "intent",
											value: intent
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-5 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														htmlFor: "name",
														children: "Name"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "name",
														name: "name",
														required: true,
														maxLength: 100,
														placeholder: "Max Mustermann",
														"aria-invalid": !!errors.name
													}),
													errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-destructive",
														children: errors.name
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														htmlFor: "phone",
														children: "Telefon"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "phone",
														name: "phone",
														type: "tel",
														required: true,
														maxLength: 30,
														placeholder: "+49 ...",
														"aria-invalid": !!errors.phone
													}),
													errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-destructive",
														children: errors.phone
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-5 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "company",
													children: "Firma (optional)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "company",
													name: "company",
													maxLength: 120,
													placeholder: "Mustermann GmbH"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "time",
													children: "Wunschzeit"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													id: "time",
													name: "time",
													defaultValue: "So schnell wie möglich",
													className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "So schnell wie möglich" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Vormittag (8–12 Uhr)" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Nachmittag (12–17 Uhr)" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Abend (17–20 Uhr)" })
													]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											size: "lg",
											className: "w-full rounded-full",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "mr-2 h-4 w-4" }), "Rückruf anfordern"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }), "Antwort innerhalb 15 Min. während Geschäftszeiten"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-t border-border pt-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													setMode("message");
													setErrors({});
												},
												className: "text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline",
												children: "Lieber schriftlich? Nachricht schreiben"
											})
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleMessage,
									className: "mt-6 space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "hidden",
											name: "intent",
											value: intent
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-5 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														htmlFor: "name",
														children: "Name"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "name",
														name: "name",
														required: true,
														maxLength: 100,
														placeholder: "Max Mustermann",
														"aria-invalid": !!errors.name
													}),
													errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-destructive",
														children: errors.name
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														htmlFor: "email",
														children: "E-Mail"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "email",
														name: "email",
														type: "email",
														required: true,
														maxLength: 255,
														placeholder: "ihre@email.de",
														"aria-invalid": !!errors.email
													}),
													errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-destructive",
														children: errors.email
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "message",
													children: "Ihre Nachricht"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													id: "message",
													name: "message",
													rows: 5,
													maxLength: 1e3,
													required: true,
													placeholder: "Wobei können wir Sie unterstützen?",
													"aria-invalid": !!errors.message
												}),
												errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-destructive",
													children: errors.message
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											size: "lg",
											className: "w-full rounded-full",
											children: "Nachricht senden"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-t border-border pt-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													setMode("callback");
													setErrors({});
												},
												className: "text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline",
												children: "Zurück zum Rückruf-Formular"
											})
										})
									]
								})
							] })
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { KontaktPage as component };
