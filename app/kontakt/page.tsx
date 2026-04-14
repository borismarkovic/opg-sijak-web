import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/shared/contact-form";
import { MapEmbed } from "@/components/shared/map-embed";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte OPG Šijak — telefon, email, adresa ili kontakt obrazac. Pronađite nas na Gradskoj tržnici u Koprivnici.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+385 99 123 4567",
    href: "tel:+385991234567",
    description: "Nazovite nas za narudžbu ili pitanja",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@opg-sijak.hr",
    href: "mailto:info@opg-sijak.hr",
    description: "Pišite nam za veće narudžbe",
  },
  {
    icon: MapPin,
    title: "Adresa",
    value: "Krešimirova 79, 48000 Starigrad",
    href: undefined,
    description: "Posjetite nas u Starigradu",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Kontaktirajte nas"
            subtitle="Javite nam se za narudžbu, pitanja ili posjetite nas na tržnici. Rado ćemo vam pomoći!"
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <Card key={card.title} className="hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <card.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{card.description}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm font-medium text-primary hover:underline cursor-pointer"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{card.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Pošaljite nam poruku
              </h2>
              <p className="text-muted-foreground mb-8">
                Ispunite obrazac i javit ćemo vam se u najkraćem roku.
              </p>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Naša lokacija
              </h2>
              <p className="text-muted-foreground mb-8">
                Posjetite nas u Starigradu ili na tržnici u Koprivnici.
              </p>
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Market Schedule */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-5">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Na tržnici nas možete pronaći
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Marija vas čeka svaki radni dan na Gradskoj tržnici u Koprivnici sa svježim voćem i povrćem.
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm font-medium text-foreground">Ponedjeljak – Petak</span>
                  <span className="text-sm text-primary font-semibold">06:00 – 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm font-medium text-foreground">Subota</span>
                  <span className="text-sm text-primary font-semibold">06:00 – 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-foreground">Nedjelja</span>
                  <span className="text-sm text-muted-foreground">Zatvoreno</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                📍 Gradska tržnica Koprivnica
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
