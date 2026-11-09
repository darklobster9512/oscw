import { o as __toESM } from "../_runtime.mjs";
import { i as cn, n as Footer, r as Nav, t as Button } from "./Footer-gYTn9pfX.mjs";
import { n as Label, t as Input } from "./label-J8B-QRmx.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { $ as ChevronUp, G as FileText, H as GraduationCap, I as House, K as Euro, Y as Clock, a as Users, h as ShieldCheck, n as X, nt as ChevronDown, rt as Check, tt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { a as stringType, i as objectType, n as instanceOfType, r as literalType, t as enumType } from "../_libs/zod.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/JobPage-mqTw_7Fy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var MAX_CV_BYTES = 10485760;
var ALLOWED_CV_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
var applicationSchema = objectType({
	firstName: stringType().trim().min(1, "Bitte Vornamen angeben").max(100),
	lastName: stringType().trim().min(1, "Bitte Nachnamen angeben").max(100),
	email: stringType().trim().email("Bitte gültige E-Mail angeben").max(255),
	phone: stringType().trim().min(4, "Bitte Handynummer angeben").max(30, "Nummer zu lang"),
	birthdate: stringType().min(1, "Bitte Geburtsdatum angeben"),
	nationality: stringType().trim().min(2, "Bitte Staatsangehörigkeit angeben").max(80),
	employment: enumType(["Teilzeit", "Vollzeit"], { message: "Bitte Anstellungsart wählen" }),
	startDate: stringType().min(1, "Bitte Startdatum angeben"),
	cv: instanceOfType(File, { message: "Bitte Lebenslauf hochladen" }).refine((f) => f.size > 0, "Bitte Lebenslauf hochladen").refine((f) => f.size <= MAX_CV_BYTES, "Maximal 10 MB").refine((f) => ALLOWED_CV_TYPES.includes(f.type) || /\.(pdf|docx?|)$/i.test(f.name), "Nur PDF oder DOC/DOCX"),
	hasSetup: literalType(true, { message: "Bitte bestätige dein Setup" }),
	privacy: literalType(true, { message: "Bitte Datenschutz akzeptieren" })
});
function ApplicationForm({ stelle }) {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const cvFile = fd.get("cv");
		const result = applicationSchema.safeParse({
			firstName: fd.get("firstName"),
			lastName: fd.get("lastName"),
			email: fd.get("email"),
			phone: fd.get("phone"),
			birthdate: fd.get("birthdate"),
			nationality: fd.get("nationality"),
			employment: fd.get("employment"),
			startDate: fd.get("startDate"),
			cv: cvFile instanceof File ? cvFile : new File([], ""),
			hasSetup: fd.get("hasSetup") === "on",
			privacy: fd.get("privacy") === "on"
		});
		if (!result.success) {
			const errs = {};
			for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		setSubmitting(true);
		try {
			const payload = new FormData();
			payload.append("vorname", result.data.firstName);
			payload.append("nachname", result.data.lastName);
			payload.append("email", result.data.email);
			payload.append("handynummer", result.data.phone);
			payload.append("geburtsdatum", result.data.birthdate);
			payload.append("staatsangehoerigkeit", result.data.nationality);
			payload.append("anstellung", result.data.employment);
			payload.append("startklar_ab", result.data.startDate);
			payload.append("lebenslauf", result.data.cv);
			payload.append("stelle", stelle.slice(0, 150));
			const res = await fetch("https://wecgxfilpnxxbyxqauar.supabase.co/functions/v1/submit-application", {
				method: "POST",
				body: payload
			});
			if (!res.ok) {
				const body = await res.json().catch(() => null);
				throw new Error(body?.error || `HTTP ${res.status}`);
			}
			window.fbq?.("track", "Lead");
			setSent(true);
			form.reset();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch (err) {
			console.error(err);
			const reason = err instanceof Error && err.message && !/^HTTP \d+/.test(err.message) ? err.message : null;
			setErrors({ submit: reason ? `Bewerbung konnte nicht gesendet werden: ${reason}` : "Bewerbung konnte nicht gesendet werden. Bitte versuche es erneut oder schreibe uns an kontakt@sekretariat-service.de." });
		} finally {
			setSubmitting(false);
		}
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-6 w-6",
					strokeWidth: 3
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-xl font-semibold text-foreground",
				children: "Danke für deine Bewerbung!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Wir haben deine Unterlagen erhalten und melden uns innerhalb von 3 Werktagen bei dir."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "mt-6 rounded-full",
				onClick: () => setSent(false),
				children: "Weitere Bewerbung senden"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Vorname",
					name: "firstName",
					error: errors.firstName,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "firstName",
						autoComplete: "given-name",
						placeholder: "z. B. Anna"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nachname",
					name: "lastName",
					error: errors.lastName,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "lastName",
						autoComplete: "family-name",
						placeholder: "z. B. Müller"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "E-Mail",
					name: "email",
					error: errors.email,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						autoComplete: "email",
						placeholder: "name@email.de"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Handynummer",
					name: "phone",
					error: errors.phone,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						placeholder: "z. B. 0176 12345678"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Geburtsdatum",
					name: "birthdate",
					error: errors.birthdate,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "birthdate",
						type: "date"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Staatsangehörigkeit",
					name: "nationality",
					error: errors.nationality,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "nationality",
						placeholder: "z. B. deutsch"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Anstellung",
					name: "employment",
					error: errors.employment,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						name: "employment",
						defaultValue: "Teilzeit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Bitte wählen" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Teilzeit",
							children: "Teilzeit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Vollzeit",
							children: "Vollzeit"
						})] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Startklar ab",
					name: "startDate",
					error: errors.startDate,
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "startDate",
						type: "date"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvUpload, { error: errors.cv }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxField, {
					name: "hasSetup",
					required: true,
					error: errors.hasSetup,
					label: "Ich bestätige, dass ich über einen eigenen Computer/Laptop, ein Headset und eine stabile Internetverbindung verfüge."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxField, {
					name: "privacy",
					required: true,
					error: errors.privacy,
					label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Ich habe die",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/datenschutz",
							className: "text-foreground underline underline-offset-2 hover:text-primary",
							children: "Datenschutzerklärung"
						}),
						" ",
						"gelesen und stimme der Verarbeitung meiner Daten zu."
					] })
				})]
			}),
			errors.submit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive",
				children: errors.submit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				disabled: submitting,
				className: "w-full rounded-full",
				children: submitting ? "Wird gesendet …" : "Bewerbung absenden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: "Deine Daten werden vertraulich behandelt und ausschließlich für den Bewerbungsprozess verwendet."
			})
		]
	});
}
function Field({ label, name, error, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: name,
				className: "text-sm font-medium text-foreground",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "*"
					})
				]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				children: error
			})
		]
	});
}
function CheckboxField({ name, label, error, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-start gap-3 text-sm text-foreground/85",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			name,
			required,
			className: "mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary",
			children: " *"
		})] })]
	}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 pl-7 text-xs text-destructive",
		children: error
	})] });
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function CvUpload({ error }) {
	const inputRef = (0, import_react.useRef)(null);
	const [file, setFile] = (0, import_react.useState)(null);
	const openPicker = () => inputRef.current?.click();
	const clear = () => {
		if (inputRef.current) inputRef.current.value = "";
		setFile(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mb-3 block text-sm font-medium text-foreground",
			children: ["Lebenslauf ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "*"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: inputRef,
			name: "cv",
			type: "file",
			accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			className: "sr-only",
			onChange: (e) => setFile(e.target.files?.[0] ?? null)
		}),
		!file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: openPicker,
			className: "group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(196,99,74,0.15)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-foreground transition-transform duration-300 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-foreground",
						children: "Lebenslauf auswählen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Klicken zum Hochladen oder Datei ziehen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 -rotate-90 text-muted-foreground transition-transform group-hover:translate-x-0.5" })
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative rounded-2xl border border-border bg-card p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "truncate text-sm font-bold text-foreground",
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: [formatBytes(file.size), " • Bereit zum Absenden"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clear,
							"aria-label": "Datei entfernen",
							className: "rounded-md p-1 text-muted-foreground transition-colors hover:text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-primary" })
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-between px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
				children: "Akzeptiert: PDF, DOC, DOCX (max. 10 MB)"
			}), file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: openPicker,
				className: "flex items-center gap-1 text-xs font-bold text-foreground hover:underline",
				children: ["Datei ändern", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
			})]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-destructive",
			children: error
		})
	] });
}
function JobPage({ job }) {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/karriere",
								className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), "Alle offenen Stellen"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-display text-[2rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl",
								children: job.heroHeadline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg text-muted-foreground",
								children: job.heroText
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-2",
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
									},
									{
										icon: job.badgeIcon,
										label: job.badgeLabel
									}
								].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(chip.icon, { className: "h-4 w-4 text-primary" }), chip.label]
								}, chip.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#bewerbung",
										children: "Jetzt bewerben"
									})
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
						children: job.roleHeadline
					}), job.roleParagraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: p
					}, p))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-foreground",
							children: job.tasksTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm text-foreground/85",
							children: job.tasks.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.text })]
							}, a.text))
						})]
					})]
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
							children: "Was wir dir bieten"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Faire Rahmenbedingungen, damit du dich auf deine Arbeit konzentrieren kannst."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-16 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
							children: "Was du mitbringst"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Damit wir gemeinsam ab Tag eins liefern können."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: job.requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-2xl border border-border bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-4 w-4",
									strokeWidth: 3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: r.text
							})] })]
						}, r.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								{
									label: "Anstellung",
									value: "Teilzeit / Vollzeit"
								},
								{
									label: "Vergütung",
									value: "20 € pro Stunde"
								},
								{
									label: "Arbeitsort",
									value: "Homeoffice (DE)"
								},
								{
									label: "Start",
									value: "Ab sofort"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-semibold text-foreground",
								children: f.value
							})] }, f.label))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "bewerbung",
				className: "border-t border-border/60 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page py-16 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
								children: "Jetzt bewerben"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Fülle das Formular aus – wir melden uns innerhalb von 3 Werktagen bei dir."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-2xl border border-primary/30 bg-background p-6 shadow-elegant sm:p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationForm, { stelle: job.applicationValue })
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var BENEFITS = [
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
];
export { JobPage as t };
