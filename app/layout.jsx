import { Analytics } from '@vercel/analytics/next'
import { Geist } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Vibe&Glow',
  description:
    'A premium salon and beauty academy. Book hair, beauty, cosmetology and bridal services with Vibe&Glow.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#f6f1ea',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
