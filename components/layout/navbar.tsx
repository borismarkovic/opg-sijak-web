"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/proizvodi/", label: "Proizvodi" },
  { href: "/o-nama/", label: "O nama" },
  { href: "/kontakt/", label: "Kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-[var(--radius-xl)]",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-lg)] border border-border"
          : "bg-white/70 backdrop-blur-sm border border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/logo.png"
              alt="OPG Šijak"
              className="h-10 w-auto"
            />
            <span className="font-heading text-lg font-bold text-primary hidden sm:block">
              OPG Šijak
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors duration-200 cursor-pointer",
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                    ? "text-primary bg-muted"
                    : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link href="/kontakt/" className="hidden md:block">
              <Button size="sm">Kontaktirajte nas</Button>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-[var(--radius-md)] hover:bg-muted transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-3 text-sm font-medium rounded-[var(--radius-md)] transition-colors cursor-pointer",
                pathname === link.href
                  ? "text-primary bg-muted"
                  : "text-foreground/70 hover:text-primary hover:bg-muted/50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt/" className="block mt-2">
            <Button className="w-full" size="sm">
              Kontaktirajte nas
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
