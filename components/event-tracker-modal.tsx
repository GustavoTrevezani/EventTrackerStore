'use client'

import { MousePointer2, Eye, SlidersHorizontal, Clock } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { useEvents } from '@/lib/event-context'
import { EventType } from '@/lib/types'

interface EventTrackerModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const eventIcons: Record<EventType, typeof MousePointer2> = {
  click: MousePointer2,
  view: Eye,
  filter: SlidersHorizontal
}

const eventColors: Record<EventType, string> = {
  click: 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  view: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
  filter: 'bg-chart-3/10 text-chart-3 border-chart-3/20'
}

const eventLabels: Record<EventType, string> = {
  click: 'Click',
  view: 'View',
  filter: 'Filter'
}

function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 5) return 'just now'
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  return `${Math.floor(diffInSeconds / 3600)}h ago`
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins === 0) return `${secs}s`
  return `${mins}m ${secs}s`
}

export function EventTrackerModal({ open, onOpenChange }: EventTrackerModalProps) {
  const { events, totalClicks, filtersApplied, timeOnPage } = useEvents()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-hidden border-border/50 p-0 sm:max-w-md">
        <DialogHeader className="border-b border-border/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-base">Event tracker</DialogTitle>
              <span className="text-sm text-muted-foreground">
                {events.length} events
              </span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-3 border-b border-border/50 px-6 py-4">
          <div className="flex flex-col gap-1 rounded-md border border-border/50 p-3 text-center">
            <MousePointer2 className="mx-auto size-4 text-muted-foreground" />
            <span className="text-xl font-semibold">{totalClicks}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Total clicks
            </span>
          </div>
          
          <div className="flex flex-col gap-1 rounded-md border border-border/50 p-3 text-center">
            <SlidersHorizontal className="mx-auto size-4 text-muted-foreground" />
            <span className="text-xl font-semibold">{filtersApplied}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Filters
            </span>
          </div>
          
          <div className="flex flex-col gap-1 rounded-md border border-border/50 p-3 text-center">
            <Clock className="mx-auto size-4 text-muted-foreground" />
            <span className="text-xl font-semibold">{formatTime(timeOnPage)}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Time
            </span>
          </div>
        </div>
        
        <div className="flex max-h-72 flex-col overflow-y-auto">
          {events.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
              <Eye className="size-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No events captured yet
              </p>
              <p className="text-xs text-muted-foreground/70">
                Interact with the catalog to see events
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {events.map((event) => {
                const Icon = eventIcons[event.type]
                return (
                  <div
                    key={event.id}
                    className="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-muted/50"
                  >
                    <div className={`flex size-7 shrink-0 items-center justify-center rounded-full ${eventColors[event.type].split(' ')[0]}`}>
                      <Icon className={`size-3.5 ${eventColors[event.type].split(' ')[1]}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{event.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatRelativeTime(event.timestamp)}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`shrink-0 text-[10px] ${eventColors[event.type]}`}
                    >
                      {eventLabels[event.type]}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
