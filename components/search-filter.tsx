"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BikeCategory } from "@/lib/types";
import { useEvents } from "@/lib/event-context";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: BikeCategory | "all";
  onCategoryChange: (category: BikeCategory | "all") => void;
}

const categories: { value: BikeCategory | "all"; label: string }[] = [
  { value: "all", label: "All bikes" },
  { value: "regular", label: "Regular" },
  { value: "electric", label: "Electric" },
  { value: "selfPropelled", label: "selfPropelled" },
];

export function SearchFilter({ search, onSearchChange, selectedCategory, onCategoryChange }: SearchFilterProps) {
  const { trackEvent } = useEvents();

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
    if (value.length > 0 && value.length % 3 === 0) {
      trackEvent("filter", `Search query: "${value}"`);
    }
  };

  const handleCategoryChange = (category: BikeCategory | "all") => {
    onCategoryChange(category);
    trackEvent("filter", `Category filter: ${category === "all" ? "All bikes" : category}`);
  };

  const handleClearSearch = () => {
    onSearchChange("");
    trackEvent("click", "Cleared search");
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search bikes..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="h-9 w-full rounded-md border border-border/50 bg-background pl-9 pr-9 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/20 sm:w-64"
        />
        {search && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={selectedCategory === cat.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(cat.value)}
            className={`text-xs ${selectedCategory !== cat.value ? "border-border/50" : ""}`}>
            {cat.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
