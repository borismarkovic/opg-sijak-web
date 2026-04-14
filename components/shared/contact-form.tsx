"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpznqkba", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Poruka poslana!
        </h3>
        <p className="text-muted-foreground">
          Hvala na poruci. Javit ćemo vam se u najkraćem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Ime i prezime
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={cn(
            "w-full px-4 py-3 rounded-[var(--radius-md)] border border-input bg-card text-foreground",
            "text-sm transition-all duration-200",
            "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          )}
          placeholder="Vaše ime"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={cn(
              "w-full px-4 py-3 rounded-[var(--radius-md)] border border-input bg-card text-foreground",
              "text-sm transition-all duration-200",
              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
            placeholder="vas@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={cn(
              "w-full px-4 py-3 rounded-[var(--radius-md)] border border-input bg-card text-foreground",
              "text-sm transition-all duration-200",
              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
            placeholder="+385 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-[var(--radius-md)] border border-input bg-card text-foreground",
            "text-sm transition-all duration-200 resize-y",
            "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          )}
          placeholder="Vaša poruka..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4 mr-2" />
        {status === "submitting" ? "Šaljem..." : "Pošaljite poruku"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Nešto je pošlo po krivu. Pokušajte ponovo ili nas nazovite.
        </p>
      )}
    </form>
  );
}
