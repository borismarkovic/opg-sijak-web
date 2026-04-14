import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ProductCard } from "@/components/shared/product-card";
import { featuredProducts } from "@/lib/data/products";
import {
  Sprout,
  MapPin,
  Leaf,
  Truck,
  ArrowRight,
  Phone,
  Clock,
} from "lucide-react";

const valueProps = [
  {
    icon: Sprout,
    title: "Svježe ubrano",
    description: "Povrće beremo večer prije dostave za maksimalnu svježinu i okus.",
  },
  {
    icon: MapPin,
    title: "Lokalno uzgojeno",
    description: "Uzgoj u našim plastenicima u Starigradu kraj Koprivnice.",
  },
  {
    icon: Leaf,
    title: "Prirodno",
    description: "Bez pesticida i kemikalija. Samo prirodne metode uzgoja.",
  },
  {
    icon: Truck,
    title: "Dostava",
    description: "Naručite telefonom ili online — dostavljamo na vašu adresu.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/OPG-Šijak-6.jpg"
            alt="Obitelj Šijak između plastenika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <Sprout className="h-4 w-4" />
              Više od 25 godina tradicije
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Svježe s polja na vaš stol
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Obiteljski uzgoj svježeg voća i povrća u srcu Podravine. Od plastenika do vašeg stola — svaki dan.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/proizvodi/">
                <Button size="lg">
                  Naši proizvodi
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/kontakt/">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Kontaktirajte nas
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Organic curve divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Zašto odabrati nas?"
            subtitle="Predanost kvaliteti i tradicija uzgoja koja se prenosi generacijama."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="text-center hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-200 cursor-pointer border-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <prop.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Sezonski proizvodi"
            subtitle="Pogledajte što trenutno uzgajamo u našim plastenicima."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/proizvodi/">
              <Button variant="secondary" size="lg">
                Svi proizvodi
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="/images/about/OPG-Šijak-1.jpg"
                alt="Damir Šijak u plasteniku"
                className="w-full h-[400px] object-cover rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)]"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] font-heading font-bold text-lg">
                25+ godina
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Naša priča</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-5 leading-tight">
                Obitelj Šijak — tri generacije ljubavi prema zemlji
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Od prvog plastenika do više od 1000m² zaštićenog prostora — obitelj Šijak već četvrt stoljeća uzgaja najsvježije voće i povrće u Podravini.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Danas, Damir vodi uzgoj u plastenicima, majka Marija prodaje na tržnici u Koprivnici, a sin Hrvoje brine o narudžbama i dostavama.
              </p>
              <Link href="/o-nama/">
                <Button variant="secondary">
                  Saznajte više
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Clock className="h-10 w-10 text-white/80 mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Posjetite nas na tržnici
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Pronađite nas svaki dan na Gradskoj tržnici u Koprivnici. Ili nas jednostavno nazovite za narudžbu i dostavu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+385991234567">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Phone className="h-4 w-4 mr-2" />
                Nazovite nas
              </Button>
            </a>
            <Link href="/kontakt/">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Pošaljite upit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
