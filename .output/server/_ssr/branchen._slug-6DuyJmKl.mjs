import { n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { i as Route$3 } from "./router-CiRG4caQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { ft as ArrowLeft, rt as Check } from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/branchen._slug-6DuyJmKl.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const { industry } = Route$3.useLoaderData();
	const Icon = industry.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border/60 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-16 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Alle Branchen"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 flex-none place-items-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10 sm:h-14 sm:w-14",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 sm:h-6 sm:w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium uppercase tracking-wider text-primary",
									children: "Branchenlösung"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-2 font-display text-[1.9rem] leading-[1.1] tracking-tight md:text-6xl md:leading-tight",
									children: ["Telefonservice für ", industry.name]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg text-muted-foreground",
							children: industry.long
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-2 md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl tracking-tight md:text-4xl",
							children: [
								"Was wir für ",
								industry.name,
								" übernehmen"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Zugeschnitten auf die typischen Anforderungen Ihrer Branche – mit passendem Wortlaut, Prozessen und Anbindungen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#kontakt",
									children: "Kostenlos testen"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									children: "Beratung anfragen"
								})
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: industry.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-xl border border-border bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90",
								children: b
							})]
						}, b))
					})]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { IndustryPage as component };
