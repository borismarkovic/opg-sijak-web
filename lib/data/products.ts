export interface Product {
  id: string;
  name: string;
  description: string;
  season: string;
  icon: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "salata",
    name: "Salata",
    description: "Svježa, hrskava salata uzgojena u našim plastenicima. Dostupna cijele godine.",
    season: "Cijela godina",
    icon: "Leaf",
    featured: true,
  },
  {
    id: "rajcica",
    name: "Rajčica",
    description: "Sočne rajčice pune okusa, uzgojene prirodnim metodama bez pesticida.",
    season: "Ljeto",
    icon: "Apple",
    featured: true,
  },
  {
    id: "krastavci",
    name: "Krastavci",
    description: "Svježi krastavci iz plastenika, idealni za salate i kiseljenje.",
    season: "Proljeće – Ljeto",
    icon: "Carrot",
    featured: true,
  },
  {
    id: "paprika",
    name: "Paprika",
    description: "Šarene paprike — crvene, žute i zelene. Slatke i pune vitamina.",
    season: "Ljeto – Jesen",
    icon: "Flame",
    featured: true,
  },
  {
    id: "jagode",
    name: "Jagode",
    description: "Slatke i aromatične jagode, ručno brane u idealnom trenutku zrelosti.",
    season: "Proljeće",
    icon: "Cherry",
  },
  {
    id: "luk",
    name: "Luk",
    description: "Domaći luk — crveni i bijeli. Osnova svake dobre kuhinje.",
    season: "Cijela godina",
    icon: "CircleDot",
  },
  {
    id: "rotkvice",
    name: "Rotkvice",
    description: "Hrskave rotkvice, savršene za salate i zdrave međuobroke.",
    season: "Proljeće – Jesen",
    icon: "Droplets",
  },
  {
    id: "kukuruzno-brasno",
    name: "Kukuruzno brašno",
    description: "Domaće mljeveno kukuruzno brašno za pripremu palente i kruha.",
    season: "Jesen – Zima",
    icon: "Wheat",
  },
  {
    id: "psenicno-brasno",
    name: "Pšenično brašno",
    description: "Kvalitetno domaće pšenično brašno za sve vaše kulinarske potrebe.",
    season: "Jesen – Zima",
    icon: "Wheat",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
