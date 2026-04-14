"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("map-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("map-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("map-consent-changed"));
  };

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={cn(
      "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50",
      "bg-card border border-border rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)] p-5",
      "animate-slide-up"
    )}>
      <div className="flex items-start gap-3">
        <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground mb-1">Kolačići za kartu</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Koristimo Google Maps za prikaz naše lokacije. Prihvaćanjem dopuštate učitavanje vanjskog sadržaja.
          </p>
          <div className="flex gap-2 mt-3">
            <Button size="sm" onClick={accept}>Prihvaćam</Button>
            <Button variant="ghost" size="sm" onClick={dismiss}>Odbij</Button>
          </div>
        </div>
        <button onClick={dismiss} className="p-1 hover:bg-muted rounded-[var(--radius-sm)] transition-colors cursor-pointer" aria-label="Zatvori">
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
