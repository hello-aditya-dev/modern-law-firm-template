"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firm } from "@/lib/firm";
import { Container } from "@/components/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo ${
        scrolled
          ? "border-b border-hairline bg-paper/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ease-out-expo ${
            scrolled ? "h-16" : "h-[84px]"
          }`}
        >
          <Link href="/" onClick={closeMenu} className="group flex items-baseline gap-2.5">
            <span
              aria-hidden
              className="flex h-8 w-8 translate-y-[3px] items-center justify-center rounded-[4px] bg-navy font-display text-lg font-semibold leading-none text-paper"
            >
              A
            </span>
            <span className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
              Aldervane
              <span className="ml-1 align-super text-[9px] uppercase tracking-widest text-ink-3">
                LLP
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {firm.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    active ? "text-navy" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${firm.phone.replace(/[^+\d]/g, "")}`}
              className="hidden font-mono text-xs text-ink-3 xl:block"
            >
              {firm.phone}
            </a>
            <Link
              href="/consultation"
              className="inline-flex h-10 items-center rounded-md bg-navy px-5 text-sm font-medium text-paper transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-navy-deep active:translate-y-0 active:scale-[0.99]"
            >
              Request a Consultation
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-hairline lg:hidden"
          >
            <span
              className={`h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </Container>

      <div
        className={`overflow-hidden border-b border-hairline bg-paper transition-all duration-300 ease-out-expo lg:hidden ${
          open ? "max-h-[460px]" : "max-h-0 border-b-0"
        }`}
      >
        <Container className="py-6">
          <div className="flex flex-col">
            {firm.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-hairline py-3.5 text-base ${
                  pathname.startsWith(item.href) ? "font-medium text-navy" : "text-ink-2"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={closeMenu}
              className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-navy text-base font-medium text-paper"
            >
              Request a Consultation
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
