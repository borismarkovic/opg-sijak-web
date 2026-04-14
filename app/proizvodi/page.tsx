import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/lib/data/products";
import { ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Proizvodi",
  description: "Svježe voće i povrće iz plastenika OPG Šijak — salata, rajčica, krastavci, paprika, jagode i više.",
};

export default function ProizvodiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Naši proizvodi"
            subtitle="Sve što uzgajamo u našim plastenicima — svježe, prirodno i lokalno. Dostupnost ovisi o sezoni."
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-5">
            <CalendarDays className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sezonska dostupnost
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-3">
            Naši proizvodi ovise o sezoni i vremenskim uvjetima. Salata i rotkvice dostupne su gotovo cijele godine, dok su rajčice, paprike i krastavci sezonski (proljeće-jesen).
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Jagode su dostupne u proljeće, a brašno od kukuruza i pšenice u jesen i zimu. Za točnu dostupnost, slobodno nas kontaktirajte.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Kontaktirajte nas za narudžbu
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Želite naručiti naše proizvode? Javite nam se telefonom, emailom ili putem kontakt obrasca.
          </p>
          <Link href="/kontakt/">
            <Button size="lg">
              Kontaktirajte nas
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
