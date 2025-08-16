import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChatbotWidget from '../components/ChatbotWidget'

export const metadata: Metadata = {
  title: 'NovaMind AI — Build with Intelligence',
  description: 'Premium AI Agency delivering AI Systems, Full Stack Apps, Chatbots, Voice Assistants, Automations, and Consulting.',
  openGraph: {
    title: 'NovaMind AI — Build with Intelligence',
    description: 'Premium AI Agency delivering ROI-focused AI solutions.',
    url: 'https://example.com',
    siteName: 'NovaMind AI',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NovaMind AI' }],
    type: 'website',
  },
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}
