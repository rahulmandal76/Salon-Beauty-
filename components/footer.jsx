'use client'

import { MapPin, Phone, Mail, Scissors } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Scissors className="h-4 w-4" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Maison Lumière
              </span>
            </div>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              A salon and beauty academy dedicated to the craft of beauty.
              Visit us, or train with our master artists.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Contact Us
            </h3>
            <a
              href="#"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="h-4 w-4 text-accent" />
              12 Rosewood Avenue, Bandra West, Mumbai
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" />
              +91 98765 43210
            </a>
            <a
              href="mailto:hello@maisonlumiere.in"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-accent" />
              hello@maisonlumiere.in
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maison Lumière. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
