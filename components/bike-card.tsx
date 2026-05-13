"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bike, BikeCategory } from "@/lib/types";
import { useEvents } from "@/lib/event-context";

interface BikeCardProps {
  bike: Bike;
  onViewDetails: (bike: Bike) => void;
}

const categoryColors: Record<BikeCategory, string> = {
  regular: "bg-muted text-foreground border-border/50",
  electric: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  selfPropelled: "bg-chart-3/10 text-chart-3 border-chart-3/20",
};

const categoryLabels: Record<BikeCategory, string> = {
  regular: "Regular",
  electric: "Electric",
  selfPropelled: "Self-propelled",
};

export function BikeCard({ bike, onViewDetails }: BikeCardProps) {
  const { trackEvent } = useEvents();

  const handleViewDetails = () => {
    trackEvent("view", `View details · ${bike.name}`);
    onViewDetails(bike);
  };

  const handleImageClick = () => {
    trackEvent("click", `Clicked image · ${bike.name}`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border/50 bg-card transition-colors hover:border-border">
      <div className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted" onClick={handleImageClick}>
        <img
          src={bike.image}
          alt={bike.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          crossOrigin="anonymous"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium leading-tight text-balance">{bike.name}</h3>
          <Badge variant="outline" className={`shrink-0 text-[10px] ${categoryColors[bike.category]}`}>
            {categoryLabels[bike.category]}
          </Badge>
        </div>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3.5 ${i < bike.rating ? "fill-chart-3 text-chart-3" : "fill-muted text-muted"}`}
            />
          ))}
          <span className="ml-1.5 text-xs text-muted-foreground">({bike.rating}.0)</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-semibold">R${bike.price.toLocaleString()}</span>
          <Button variant="outline" size="sm" onClick={handleViewDetails} className="border-border/50 text-xs">
            View details
          </Button>
        </div>
      </div>
    </article>
  );
}
