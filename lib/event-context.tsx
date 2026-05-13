'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { TrackedEvent, EventType } from '@/lib/types'

interface EventContextType {
  events: TrackedEvent[]
  totalClicks: number
  filtersApplied: number
  timeOnPage: number
  trackEvent: (type: EventType, description: string) => void
}

const EventContext = createContext<EventContextType | undefined>(undefined)

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<TrackedEvent[]>([])
  const [totalClicks, setTotalClicks] = useState(0)
  const [filtersApplied, setFiltersApplied] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const trackEvent = useCallback((type: EventType, description: string) => {
    const newEvent: TrackedEvent = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      description,
      timestamp: new Date()
    }
    
    setEvents(prev => [newEvent, ...prev])
    
    if (type === 'click' || type === 'view') {
      setTotalClicks(prev => prev + 1)
    }
    if (type === 'filter') {
      setFiltersApplied(prev => prev + 1)
    }
  }, [])

  return (
    <EventContext.Provider value={{ events, totalClicks, filtersApplied, timeOnPage, trackEvent }}>
      {children}
    </EventContext.Provider>
  )
}

export function useEvents() {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider')
  }
  return context
}
