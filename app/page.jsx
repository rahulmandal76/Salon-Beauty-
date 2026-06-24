'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ServiceMenu from '@/components/service-menu'
import Footer from '@/components/footer'
import BookingInterface from '@/components/booking-interface'

export default function Page() {
  // booking holds the selected master category, or null when closed.
  const [booking, setBooking] = useState(null)

  // Lock body scroll while the booking overlay is open.
  useEffect(() => {
    document.body.style.overflow = booking ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [booking])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServiceMenu onBook={(category) => setBooking(category)} />
      <Footer />

      {booking && (
        <BookingInterface
          category={booking}
          onClose={() => setBooking(null)}
        />
      )}
    </main>
  )
}
