import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
        Stranica nije pronađena
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Stranica koju tražite ne postoji ili je premještena. Vratite se na početnu stranicu.
      </p>
      <Link href="/">
        <Button size="lg">
          <Home className="h-4 w-4 mr-2" />
          Početna stranica
        </Button>
      </Link>
    </div>
  );
}
