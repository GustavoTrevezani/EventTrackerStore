import { EventProvider } from '@/lib/event-context'
import { BikeCatalog } from '@/components/bike-catalog'

export default function Home() {
  return (
    <EventProvider>
      <BikeCatalog />
    </EventProvider>
  )
}
