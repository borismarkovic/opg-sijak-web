"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapEmbed() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsent(localStorage.getItem("map-consent") === "accepted");
    };
    check();
    window.addEventListener("map-consent-changed", check);
    return () => window.removeEventListener("map-consent-changed", check);
  }, []);

  const accept = () => {
    localStorage.setItem("map-consent", "accepted");
    setConsent(true);
  };

  if (!consent) {
    return (
      <div className="w-full h-[400px] rounded-[var(--radius-xl)] bg-muted border border-border flex flex-col items-center justify-center text-center p-6">
        <MapPin className="h-12 w-12 text-primary mb-4" />
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
          Prikaz karte
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-4">
          Za prikaz interaktivne karte potrebno je učitati Google Maps. Klikom na gumb prihvaćate učitavanje vanjskog sadržaja.
        </p>
        <Button onClick={accept} size="sm">Prikaži kartu</Button>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.5!2d16.827!3d46.162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzQzLjIiTiAxNsKwNDknMzcuMiJF!5e0!3m2!1shr!2shr!4v1"
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: "var(--radius-xl)" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Lokacija OPG Šijak"
    />
  );
}
