"use client";

import { Star, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bike, BikeCategory } from "@/lib/types";

interface BikeDetailModalProps {
  bike: Bike | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

export function BikeDetailModal({ bike, open, onOpenChange }: BikeDetailModalProps) {
  if (!bike) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 p-0 sm:max-w-lg">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img src={bike.image} alt={bike.name} className="h-full w-full object-cover" crossOrigin="anonymous" />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <DialogHeader className="gap-2 text-left">
            <div className="flex items-start justify-between gap-3">
              <DialogTitle className="text-xl text-balance">{bike.name}</DialogTitle>
              <Badge variant="outline" className={`shrink-0 ${categoryColors[bike.category]}`}>
                {categoryLabels[bike.category]}
              </Badge>
            </div>

            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < bike.rating ? "fill-chart-3 text-chart-3" : "fill-muted text-muted"}`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">{bike.rating}.0 rating</span>
            </div>
          </DialogHeader>

          <p className="text-sm leading-relaxed text-muted-foreground">{bike.description}</p>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Features</h4>
            <ul className="space-y-1.5">
              {bike.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-3.5 shrink-0 text-chart-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <span className="text-2xl font-semibold">${bike.price.toLocaleString()}</span>
            <Button>Add to cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
