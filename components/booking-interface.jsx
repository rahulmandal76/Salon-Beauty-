'use client'

import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  X,
  Plus,
  Check,
  SlidersHorizontal,
  Star,
  MapPin,
} from 'lucide-react'
import { BOOKING_SERVICES, SALON, formatPrice } from '@/lib/salon-data'

export default function BookingInterface({ category, onClose }) {
  const services = BOOKING_SERVICES[category] || []

  // Build the filter chip list: Featured + unique groups present in the data.
  const filters = useMemo(() => {
    const groups = []
    services.forEach((s) => {
      if (!groups.includes(s.group)) groups.push(s.group)
    })
    return ['Featured', ...groups]
  }, [services])

  const [activeFilter, setActiveFilter] = useState('Featured')
  const [selected, setSelected] = useState([])

  const visibleServices =
    activeFilter === 'Featured'
      ? services.filter((s) => s.featured)
      : services.filter((s) => s.group === activeFilter)

  function toggleService(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const selectedServices = services.filter((s) => selected.includes(s.id))
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-muted">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3.5 md:px-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Go back"
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="text-base font-semibold text-foreground">
          Select services
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking"
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-6xl flex-1 overflow-y-auto px-4 py-5 md:px-6">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            {category}
          </span>
        </div>
        <h3 className="mb-5 font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Choose your services
        </h3>

        {/* Filter chip row */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => {
            const active = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground hover:border-foreground/40'
                }`}
              >
                {filter}
              </button>
            )
          })}
          <button
            type="button"
            aria-label="More filters"
            className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-foreground/40"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Left: service cards */}
          <div className="flex flex-col gap-3">
            {visibleServices.map((service) => {
              const isSelected = selected.includes(service.id)
              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center gap-4 rounded-2xl border bg-card p-4 text-left transition-colors ${
                    isSelected
                      ? 'border-accent ring-1 ring-accent'
                      : 'border-border hover:border-foreground/30'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">
                      {service.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.duration} min
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      from {formatPrice(service.price)}
                    </p>
                  </div>

                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.name}
                    className="hidden h-20 w-20 shrink-0 rounded-xl object-cover sm:block"
                  />

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isSelected
                        ? 'bg-accent text-accent-foreground'
                        : 'border border-border bg-card text-foreground'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right: sticky cart summary */}
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <div className="flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
              {/* Salon info */}
              <div className="flex items-center gap-3 border-b border-border p-4">
                <img
                  src={SALON.image || '/placeholder.svg'}
                  alt={SALON.name}
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-foreground">
                    {SALON.name}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1 text-sm">
                    <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                    <span className="font-medium text-foreground">
                      {SALON.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground">
                      ({SALON.reviews})
                    </span>
                  </div>
                  <div className="mt-1 flex items-start gap-1 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                    <span className="line-clamp-1">{SALON.address}</span>
                  </div>
                </div>
              </div>

              {/* Selected services */}
              <div className="flex-1 overflow-y-auto p-4">
                {selectedServices.length === 0 ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No services selected yet. Tap a service to add it.
                  </p>
                ) : (
                  <ul className="flex flex-col gap-4">
                    {selectedServices.map((service) => (
                      <li
                        key={service.id}
                        className="flex items-start justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {service.name}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {service.duration} min
                          </p>
                        </div>
                        <span className="shrink-0 text-sm font-medium text-foreground">
                          {formatPrice(service.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Total + action */}
              <div className="border-t border-border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-serif text-xl font-semibold text-foreground">
                    {formatPrice(total)}
                  </span>
                </div>
                <button
                  type="button"
                  disabled={selectedServices.length === 0}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
