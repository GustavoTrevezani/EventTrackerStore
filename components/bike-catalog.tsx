'use client'

import { useState, useMemo } from 'react'
import { bikes } from '@/lib/bikes-data'
import { Bike, BikeCategory } from '@/lib/types'
import { BikeCard } from '@/components/bike-card'
import { BikeDetailModal } from '@/components/bike-detail-modal'
import { SearchFilter } from '@/components/search-filter'
import { Navbar } from '@/components/navbar'
import { EventTrackerModal } from '@/components/event-tracker-modal'

export function BikeCatalog() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BikeCategory | 'all'>('all')
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null)
  const [bikeModalOpen, setBikeModalOpen] = useState(false)
  const [trackerModalOpen, setTrackerModalOpen] = useState(false)

  const filteredBikes = useMemo(() => {
    return bikes.filter((bike) => {
      const matchesSearch = bike.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || bike.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const handleViewDetails = (bike: Bike) => {
    setSelectedBike(bike)
    setBikeModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar onOpenTracker={() => setTrackerModalOpen(true)} />
      
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-balance">
            Bicycle Catalog
          </h1>
          <p className="text-muted-foreground">
            Discover our collection of {bikes.length} bicycles
          </p>
        </div>
        
        <div className="mb-6">
          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        {filteredBikes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-muted-foreground">No bikes found matching your criteria</p>
            <p className="text-sm text-muted-foreground/70">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>

      <BikeDetailModal
        bike={selectedBike}
        open={bikeModalOpen}
        onOpenChange={setBikeModalOpen}
      />
      
      <EventTrackerModal
        open={trackerModalOpen}
        onOpenChange={setTrackerModalOpen}
      />
    </div>
  )
}
