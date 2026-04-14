import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf, Apple, Carrot, Flame, Cherry, CircleDot, Droplets, Wheat,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Leaf, Apple, Carrot, Flame, Cherry, CircleDot, Droplets, Wheat,
};

interface ProductCardProps {
  name: string;
  description: string;
  season: string;
  icon: string;
  className?: string;
}

export function ProductCard({ name, description, season, icon, className }: ProductCardProps) {
  const IconComponent = iconMap[icon] || Leaf;

  return (
    <Card className={cn(
      "group cursor-pointer hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-200 bg-card border-border",
      className
    )}>
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-200">
          <IconComponent className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>
        <span className="inline-flex items-center text-xs font-medium text-primary bg-muted px-3 py-1 rounded-full">
          {season}
        </span>
      </CardContent>
    </Card>
  );
}
