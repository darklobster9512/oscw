import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [branchenOpen, setBranchenOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const linkCls =
    "text-sm text-foreground/80 hover:text-foreground transition-colors";
  const mobileLinkCls =
    "block rounded-xl px-4 py-3 text-lg text-foreground/90 transition-colors hover:bg-primary hover:text-primary-foreground";
  const mobileActiveProps = { className: "bg-primary text-primary-foreground" };
  const mobileSubLinkCls =
    "flex items-center gap-2 rounded-lg px-3 py-2 text-base text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground";

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const Logo = (
    <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
        <Phone className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Sekretariat-Service
      </span>
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container-page grid h-16 grid-cols-[auto_1fr_auto] items-center lg:flex lg:justify-between">
          <button
            className="lg:hidden text-foreground justify-self-start"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="justify-self-center lg:justify-self-auto">{Logo}</div>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link to="/preise" className={linkCls}>Preise</Link>
            <Link to="/vorteile" className={linkCls}>Leistungen</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${linkCls} inline-flex items-center gap-1 outline-none`}>
                Branchen
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {industries.map((ind) => (
                  <DropdownMenuItem key={ind.slug} asChild>
                    <Link
                      to="/branchen/$slug"
                      params={{ slug: ind.slug }}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <ind.icon className="h-4 w-4 text-primary" />
                      <span>{ind.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/callcenter" className={linkCls}>Callcenter</Link>
            <Link to="/karriere" className={linkCls}>Karriere</Link>
            <Link to="/kontakt" className={linkCls}>Kontakt</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="sm" className="rounded-full">
              <Link to="/kontakt">Anfragen</Link>
            </Button>
          </div>

          <span className="h-6 w-6 lg:hidden justify-self-end" aria-hidden />
        </div>
      </header>

      {mounted && open && createPortal(
        <div className="fixed inset-0 z-[100] lg:hidden bg-background flex flex-col">
          <div className="container-page grid h-16 grid-cols-[auto_1fr_auto] items-center border-b border-border/60 shrink-0">
            <button
              className="text-foreground justify-self-start"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="justify-self-center">{Logo}</div>
            <span className="h-6 w-6 justify-self-end" aria-hidden />
          </div>

          <div className="flex-1 overflow-y-auto container-page py-6 flex flex-col gap-1">
            <Link to="/preise" onClick={() => setOpen(false)} className={mobileLinkCls} activeProps={mobileActiveProps}>Preise</Link>
            <Link to="/vorteile" onClick={() => setOpen(false)} className={mobileLinkCls} activeProps={mobileActiveProps}>Leistungen</Link>

            <button
              onClick={() => setBranchenOpen(!branchenOpen)}
              className={`${mobileLinkCls} flex items-center justify-between w-full text-left`}
            >
              Branchen
              <ChevronDown className={`h-5 w-5 transition-transform ${branchenOpen ? "rotate-180" : ""}`} />
            </button>
            {branchenOpen && (
              <div className="ml-2 flex flex-col gap-1 border-l border-border pl-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to="/branchen/$slug"
                    params={{ slug: ind.slug }}
                    onClick={() => setOpen(false)}
                    className={mobileSubLinkCls}
                    activeProps={mobileActiveProps}
                  >
                    <ind.icon className="h-4 w-4 text-primary" />
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/callcenter" onClick={() => setOpen(false)} className={mobileLinkCls} activeProps={mobileActiveProps}>Callcenter</Link>
            <Link to="/karriere" onClick={() => setOpen(false)} className={mobileLinkCls} activeProps={mobileActiveProps}>Karriere</Link>
            <Link to="/kontakt" onClick={() => setOpen(false)} className={mobileLinkCls} activeProps={mobileActiveProps}>Kontakt</Link>


            <Button asChild className="w-full rounded-full mt-4">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Anfragen</Link>
            </Button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
