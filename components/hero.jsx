'use client'

import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Salon & Beauty Academy
          </span>
          <h1 className="mt-5 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Where beauty becomes an art form
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Premium hair, beauty and bridal experiences crafted by master
            artists. Reserve your moment of indulgence at Vibe&Glow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#service-menu"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book an appointment
            </a>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                5.0 · 482 reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/salon-interior.png"
              alt="Interior of the Vibe&Glow salon"
              className="h-[360px] w-full object-cover md:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
