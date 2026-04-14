import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Heart, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "O nama",
  description: "Upoznajte obitelj Šijak — Damir, Marija i Hrvoje. Više od 25 godina predanosti uzgoju svježeg voća i povrća u Podravini.",
};

const familyMembers = [
  {
    name: "Damir Šijak",
    role: "Vlasnik i uzgajivač",
    description: "Damir vodi OPG i brine o plastenicima. S ljubavlju uzgaja svako sjeme i prati cijeli proces od sadnje do berbe.",
    image: "/images/about/OPG-Šijak-1.jpg",
  },
  {
    name: "Marija Šijak",
    role: "Prodaja na tržnici",
    description: "Marija je lice OPG-a na Gradskoj tržnici u Koprivnici. Njezini vjerni kupci znaju da kod nje uvijek dobiju najsvježije.",
    image: "/images/about/OPG-Šijak-2-scaled.jpg",
  },
  {
    name: "Hrvoje Šijak",
    role: "Marketing i dostava",
    description: "Hrvoje je pokrenuo online narudžbe i dostavu na kućnu adresu. Brine o komunikaciji s kupcima i digitalnoj prisutnosti.",
    image: "/images/about/OPG-Šijak-8.jpg",
  },
];

const values = [
  {
    icon: Sprout,
    title: "Svježina",
    description: "Beremo večer prije isporuke kako bi svaki proizvod bio maksimalno svjež.",
  },
  {
    icon: Heart,
    title: "Ljubav prema poslu",
    description: "Uzgajamo s istom strašću kao i prvog dana, prije više od 25 godina.",
  },
  {
    icon: Award,
    title: "Kvaliteta",
    description: "Bez pesticida i kemikalija. Samo prirodne metode uzgoja i njege.",
  },
  {
    icon: Users,
    title: "Obitelj",
    description: "Tri generacije — svaki član obitelji doprinosi uspjehu gospodarstva.",
  },
];

export default function ONamaPage() {
  return (
    <>
      {/* Story Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Naša priča</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 leading-tight">
                Od prvog plastenika do vašeg stola
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prije više od 25 godina, obitelj Šijak zasadila je prvi plastenik u Starigradu kraj Koprivnice. Ono što je počelo kao mali obiteljski projekt, danas je uspješno poljoprivredno gospodarstvo s više od 1000m² zaštićenog prostora.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kroz godine, naučili smo prepoznati potrebe naših kupaca. Uvijek biramo kvalitetu ispred kvantitete — svaki proizvod koji napusti naš plastenik prošao je strogu kontrolu svježine i kvalitete.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tijekom pandemije COVID-19, sin Hrvoje pokrenuo je online narudžbe i dostavu, čime smo naše svježe proizvode učinili dostupnima i onima koji ne mogu doći na tržnicu.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/hero/OPG-Šijak-6.jpg"
                alt="Obitelj Šijak"
                className="w-full h-[450px] object-cover rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader
            title="Naš put"
            subtitle="Ključni trenuci u razvoju OPG-a Šijak."
          />

          <div className="space-y-8">
            {[
              { year: "~2000.", title: "Početak", desc: "Obitelj Šijak podiže prvi plastenik u Starigradu i počinje s uzgojem salate i povrća za lokalno tržište." },
              { year: "2005.", title: "Širenje", desc: "Dodajemo nove plastenike i proširujemo asortiman na rajčice, krastavce, paprike i jagode." },
              { year: "2015.", title: "1000m²", desc: "Dostižemo više od 1000m² zaštićenog prostora. Postajemo stalni opskrbljivač Gradske tržnice Koprivnica." },
              { year: "2020.", title: "Online narudžbe", desc: "Hrvoje pokreće online narudžbe i dostavu na kućnu adresu — svježe voće i povrće dolazi direktno do kupaca." },
              { year: "Danas", title: "Tri generacije", desc: "Damir, Marija i Hrvoje zajedno vode OPG. Svaki dan beremo, pakiramo i dostavljamo najsvježije proizvode." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="font-heading font-bold text-primary text-sm">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                  {i < 4 && <div className="absolute top-4 left-1.5 w-px h-full bg-border -translate-x-1/2" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Naša obitelj"
            subtitle="Upoznajte ljude koji stoje iza svježeg voća i povrća na vašem stolu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Naše vrijednosti"
            subtitle="Ono u što vjerujemo i po čemu smo prepoznatljivi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
