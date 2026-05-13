"use client";

import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEvents } from "@/lib/event-context";

interface NavbarProps {
  onOpenTracker: () => void;
}

export function Navbar({ onOpenTracker }: NavbarProps) {
  const { events, trackEvent } = useEvents();

  const handleTrackerClick = () => {
    onOpenTracker();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">Velotech</span>
        </div>

        <Button variant="outline" size="sm" onClick={handleTrackerClick} className="gap-2 border-border/50">
          <BarChart3 className="size-4" />
          <span className="hidden sm:inline">Event tracker</span>
          <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {events.length}
          </span>
        </Button>
      </div>
    </header>
  );
}
