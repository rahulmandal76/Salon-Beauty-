'use client'

import { useState } from 'react'
import { CATEGORIES, RATE_MENU, formatPrice } from '@/lib/salon-data'

export default function ServiceMenu({ onBook }) {
  const [category, setCategory] = useState('Women')
  const subCategories = RATE_MENU[category]

  return (
    <section id="service-menu" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Service Menu
        </span>
        <h2 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Find the service made for you
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Choose a category and explore our curated rate list. Reserve any
          service in just a few taps.
        </p>
      </div>

      {/* Pill segmented toggle */}
      <div className="mt-9 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
          {CATEGORIES.map((cat) => {
            const active = cat === category
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Sub-category rate lists */}
      <div className="mt-16 flex flex-col gap-12">
        {Object.entries(subCategories).map(([sub, services]) => (
          <div
            key={sub}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground mb-6">
              {sub}
            </h3>
            
            {/* Switched to a grid for the individual image cards */}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-md"
                >
                  {/* Image Container */}
                  <div className="aspect-square w-full overflow-hidden bg-muted">
                    <img
                      src={service.image || '/placeholder-image.jpg'} // Fallback if no image is provided yet
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        {service.name}
                      </p>
                      <p className="mt-1 text-base font-medium text-muted-foreground">
                        {formatPrice(service.price)}
                      </p>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => onBook(category)}
                      className="mt-6 w-full rounded-full bg-primary/10 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Book Slot
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
