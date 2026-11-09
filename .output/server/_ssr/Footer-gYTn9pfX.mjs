import { o as __toESM } from "../_runtime.mjs";
import { t as industries } from "./industries-BvLC62GZ.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Phone, M as Mail, O as Menu, Z as Circle, dt as ArrowRight, et as ChevronRight, g as Server, h as ShieldCheck, n as X, nt as ChevronDown, rt as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DropdownMenuItemIndicator, c as DropdownMenuRadioItem$1, d as DropdownMenuSubTrigger$1, f as DropdownMenuTrigger$1, i as DropdownMenuItem$1, l as DropdownMenuSeparator$1, n as DropdownMenuCheckboxItem$1, o as DropdownMenuLabel$1, r as DropdownMenuContent$1, s as DropdownMenuPortal, t as DropdownMenu$1, u as DropdownMenuSubContent$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/Footer-gYTn9pfX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var DropdownMenu = DropdownMenu$1;
var DropdownMenuTrigger = DropdownMenuTrigger$1;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger$1, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuSubTrigger$1.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent$1, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuSubContent$1.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuContent$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuItem$1.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuCheckboxItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem$1.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItem$1.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuLabel$1.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuSeparator$1.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [branchenOpen, setBranchenOpen] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const linkCls = "text-sm text-foreground/80 hover:text-foreground transition-colors";
	const mobileLinkCls = "block rounded-xl px-4 py-3 text-lg text-foreground/90 transition-colors hover:bg-primary hover:text-primary-foreground";
	const mobileActiveProps = { className: "bg-primary text-primary-foreground" };
	const mobileSubLinkCls = "flex items-center gap-2 rounded-lg px-3 py-2 text-base text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground";
	(0, import_react.useEffect)(() => {
		if (open) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prev;
			};
		}
	}, [open]);
	const Logo = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2",
		onClick: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className: "h-4 w-4",
				strokeWidth: 2.25
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-semibold tracking-tight text-foreground",
			children: "Sekretariat-Service"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid h-16 grid-cols-[auto_1fr_auto] items-center lg:flex lg:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-foreground justify-self-start",
					onClick: () => setOpen(true),
					"aria-label": "Menü öffnen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "justify-self-center lg:justify-self-auto",
					children: Logo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/preise",
							className: linkCls,
							children: "Preise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/vorteile",
							className: linkCls,
							children: "Leistungen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
							className: `${linkCls} inline-flex items-center gap-1 outline-none`,
							children: ["Branchen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "start",
							className: "w-64",
							children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/branchen/$slug",
									params: { slug: ind.slug },
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ind.icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ind.name })]
								})
							}, ind.slug))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/callcenter",
							className: linkCls,
							children: "Callcenter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/karriere",
							className: linkCls,
							children: "Karriere"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: linkCls,
							children: "Kontakt"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							children: "Anfragen"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-6 w-6 lg:hidden justify-self-end",
					"aria-hidden": true
				})
			]
		})
	}), mounted && open && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] lg:hidden bg-background flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid h-16 grid-cols-[auto_1fr_auto] items-center border-b border-border/60 shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-foreground justify-self-start",
					onClick: () => setOpen(false),
					"aria-label": "Menü schließen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "justify-self-center",
					children: Logo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-6 w-6 justify-self-end",
					"aria-hidden": true
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto container-page py-6 flex flex-col gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/preise",
					onClick: () => setOpen(false),
					className: mobileLinkCls,
					activeProps: mobileActiveProps,
					children: "Preise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vorteile",
					onClick: () => setOpen(false),
					className: mobileLinkCls,
					activeProps: mobileActiveProps,
					children: "Leistungen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setBranchenOpen(!branchenOpen),
					className: `${mobileLinkCls} flex items-center justify-between w-full text-left`,
					children: ["Branchen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 transition-transform ${branchenOpen ? "rotate-180" : ""}` })]
				}),
				branchenOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-2 flex flex-col gap-1 border-l border-border pl-3",
					children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/branchen/$slug",
						params: { slug: ind.slug },
						onClick: () => setOpen(false),
						className: mobileSubLinkCls,
						activeProps: mobileActiveProps,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ind.icon, { className: "h-4 w-4 text-primary" }), ind.name]
					}, ind.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/callcenter",
					onClick: () => setOpen(false),
					className: mobileLinkCls,
					activeProps: mobileActiveProps,
					children: "Callcenter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/karriere",
					onClick: () => setOpen(false),
					className: mobileLinkCls,
					activeProps: mobileActiveProps,
					children: "Karriere"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontakt",
					onClick: () => setOpen(false),
					className: mobileLinkCls,
					activeProps: mobileActiveProps,
					children: "Kontakt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full rounded-full mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontakt",
						onClick: () => setOpen(false),
						children: "Anfragen"
					})
				})
			]
		})]
	}), document.body)] });
}
var footerLinks = {
	branchen: [
		{
			label: "Anwälte",
			to: "/branchen/$slug",
			params: { slug: "anwaelte" }
		},
		{
			label: "Ärzte",
			to: "/branchen/$slug",
			params: { slug: "aerzte" }
		},
		{
			label: "Handwerk",
			to: "/branchen/$slug",
			params: { slug: "handwerk" }
		},
		{
			label: "Steuerberater",
			to: "/branchen/$slug",
			params: { slug: "steuerberater" }
		},
		{
			label: "Callcenter",
			to: "/callcenter"
		}
	],
	unternehmen: [
		{
			label: "Vorteile",
			href: "/#vorteile"
		},
		{
			label: "So funktioniert's",
			href: "/#ablauf"
		},
		{
			label: "Preise",
			href: "/#preise"
		},
		{
			label: "Kontakt",
			to: "/kontakt"
		}
	],
	rechtliches: [
		{
			label: "Impressum",
			to: "/impressum"
		},
		{
			label: "Datenschutz",
			to: "/datenschutz"
		},
		{
			label: "AGB",
			to: "/agb"
		},
		{
			label: "Cookie Einstellungen",
			to: "/cookie-einstellungen"
		}
	]
};
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden",
		style: { background: "var(--ink-deep)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full",
				style: { background: "radial-gradient(closest-side, rgba(196,99,74,0.15), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full",
				style: { background: "radial-gradient(closest-side, rgba(196,99,74,0.12), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative py-20 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-16 lg:grid-cols-2 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-5 w-5",
										strokeWidth: 2.25
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl tracking-tight text-ink-deep-foreground",
									children: "Sekretariat-Service"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:bg-primary/90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/kontakt",
									children: ["Jetzt kostenlos starten", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-row flex-wrap gap-4 pt-2 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:kontakt@sekretariat-service.de",
									className: "group flex items-center gap-3 text-ink-deep-foreground/80 transition-colors hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-lg bg-ink-deep-foreground/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "kontakt@sekretariat-service.de"
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground",
								children: "Branchen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: footerLinks.branchen.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "to" in link && "params" in link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									params: link.params,
									className: "text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary",
									children: link.label
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									className: "text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary",
									children: link.label
								}) }, link.label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground",
								children: "Unternehmen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: footerLinks.unternehmen.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "href" in link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									className: "text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary",
									children: link.label
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									className: "text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary",
									children: link.label
								}) }, link.label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase tracking-wider text-ink-deep-foreground",
								children: "Rechtliches"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: footerLinks.rechtliches.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									className: "text-sm text-ink-deep-foreground/70 transition-colors hover:text-primary",
									children: link.label
								}) }, link.label))
							})] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink-deep-foreground/10 pt-8 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ink-deep-foreground/50",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" OSCW Office Service & Co. Working GmbH – Sekretariat-Service ist ein Produkt der OSCW Office Service & Co. Working GmbH."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-3 w-3" }), "Made in Germany"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), "DSGVO-konform"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-ink-deep-foreground/10 px-3 py-1 text-xs text-ink-deep-foreground/70",
								children: "ISO 27001"
							})
						]
					})]
				})]
			})
		]
	});
}
export { cn as i, Footer as n, Nav as r, Button as t };
