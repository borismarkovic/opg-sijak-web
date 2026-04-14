import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src="/images/logo.png"
                alt="OPG Šijak"
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-heading text-xl font-bold">OPG Šijak</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Obiteljsko poljoprivredno gospodarstvo s više od 25 godina iskustva u uzgoju svježeg voća i povrća.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Navigacija</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Početna" },
                { href: "/proizvodi/", label: "Proizvodi" },
                { href: "/o-nama/", label: "O nama" },
                { href: "/kontakt/", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+385991234567" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  +385 99 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@opg-sijak.hr" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  info@opg-sijak.hr
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Krešimirova 79, 48000 Starigrad</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} OPG Šijak Damir. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
