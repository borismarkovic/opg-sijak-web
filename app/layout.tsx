import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/shared/cookie-consent";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OPG Šijak — Svježe voće i povrće iz Koprivnice",
    template: "%s | OPG Šijak",
  },
  description:
    "Obiteljsko poljoprivredno gospodarstvo Šijak — više od 25 godina uzgoja svježeg voća i povrća. Dostava na kućnu adresu i prodaja na tržnici u Koprivnici.",
  keywords: [
    "OPG Šijak",
    "svježe povrće",
    "Koprivnica",
    "dostava povrća",
    "lokalno uzgojeno",
    "tržnica",
    "obiteljsko gospodarstvo",
  ],
  authors: [{ name: "OPG Šijak Damir" }],
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://opg-sijak.hr",
    siteName: "OPG Šijak",
    title: "OPG Šijak — Svježe voće i povrće iz Koprivnice",
    description:
      "Više od 25 godina uzgoja svježeg voća i povrća. Dostava i prodaja na tržnici.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${lora.variable} ${raleway.variable}`}>
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": ""}'
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
