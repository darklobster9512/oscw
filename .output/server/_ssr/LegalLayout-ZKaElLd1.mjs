import { n as Footer, r as Nav } from "./Footer-gYTn9pfX.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/LegalLayout-ZKaElLd1.js
var import_jsx_runtime = require_jsx_runtime();
function LegalLayout({ title, intro, updatedAt, sections }) {
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
								children: title
							}),
							intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",
								children: intro
							}) : null,
							updatedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: ["Stand: ", updatedAt]
							}) : null
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "container-page pb-24 md:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "lg:sticky lg:top-24 lg:self-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:block",
								children: "Inhalt"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-0 flex flex-wrap gap-2 lg:mt-4 lg:flex-col lg:gap-1",
								children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${s.id}`,
									className: "rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground lg:rounded-md lg:border-0 lg:bg-transparent lg:px-2 lg:py-1.5 lg:text-sm",
									children: s.title
								}, s.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-w-2xl space-y-12",
							children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: s.id,
								className: "scroll-mt-24 border-b border-border/60 pb-10 last:border-none last:pb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl tracking-tight md:text-2xl",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose-legal mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground",
									children: s.content
								})]
							}, s.id))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { LegalLayout as t };
