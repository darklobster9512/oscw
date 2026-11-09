import { o as __toESM } from "../_runtime.mjs";
import { i as cn, n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { at as ChartColumn, h as ShieldCheck, k as Megaphone } from "../_libs/lucide-react.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
// node_modules/.nitro/vite/services/ssr/assets/cookie-einstellungen-CuxyJd8Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var categories = [
	{
		id: "necessary",
		icon: ShieldCheck,
		title: "Notwendig",
		description: "Diese Cookies sind für den technischen Betrieb der Website unerlässlich – z. B. für Sicherheit, Sitzungsverwaltung und die Speicherung Ihrer Cookie-Auswahl. Sie können nicht deaktiviert werden.",
		locked: true
	},
	{
		id: "statistics",
		icon: ChartColumn,
		title: "Statistik",
		description: "Helfen uns anonymisiert zu verstehen, wie die Website genutzt wird, damit wir Inhalte und Ladezeiten verbessern können."
	},
	{
		id: "marketing",
		icon: Megaphone,
		title: "Marketing",
		description: "Werden verwendet, um Ihnen relevante Inhalte anzuzeigen und die Effektivität unserer Kampagnen zu messen."
	}
];
function CookiePage() {
	const [prefs, setPrefs] = (0, import_react.useState)({
		necessary: true,
		statistics: false,
		marketing: false
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	const update = (id, value) => {
		setPrefs((p) => ({
			...p,
			[id]: value
		}));
		setSaved(false);
	};
	const acceptAll = () => {
		setPrefs({
			necessary: true,
			statistics: true,
			marketing: true
		});
		setSaved(true);
	};
	const rejectAll = () => {
		setPrefs({
			necessary: true,
			statistics: false,
			marketing: false
		});
		setSaved(true);
	};
	const save = () => setSaved(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "container-page pt-16 pb-10 md:pt-24 md:pb-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
								children: "Rechtliches"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-[2rem] leading-[1.1] tracking-tight md:text-5xl",
								children: "Cookie-Einstellungen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",
								children: "Wir verwenden Cookies, um sekretariat-service.de sicher und komfortabel bereitzustellen. Sie entscheiden selbst, welche optionalen Kategorien Sie zulassen möchten – jederzeit änderbar."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "container-page pb-24 md:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl space-y-4",
						children: [
							categories.map((c) => {
								const Icon = c.icon;
								const checked = prefs[c.id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 rounded-2xl border border-border bg-background p-5 md:p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "font-display text-lg tracking-tight",
												children: [c.title, c.locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ml-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
													children: "Immer aktiv"
												}) : null]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked,
												disabled: c.locked,
												onCheckedChange: (v) => update(c.id, v),
												"aria-label": c.title
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: c.description
										})]
									})]
								}, c.id);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: rejectAll,
										className: "rounded-full",
										children: "Nur notwendige"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: acceptAll,
										className: "rounded-full",
										children: "Alle akzeptieren"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: save,
									className: "rounded-full",
									children: "Auswahl speichern"
								})]
							}),
							saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-2 text-sm text-primary",
								children: "Ihre Auswahl wurde übernommen."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "pt-6 text-xs text-muted-foreground",
								children: [
									"Weitere Informationen finden Sie in unserer",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/datenschutz",
										className: "text-foreground underline underline-offset-2 hover:text-primary",
										children: "Datenschutzerklärung"
									}),
									" ",
									"und im",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/impressum",
										className: "text-foreground underline underline-offset-2 hover:text-primary",
										children: "Impressum"
									}),
									"."
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { CookiePage as component };
