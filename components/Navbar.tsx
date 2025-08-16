'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'bg-black/40 backdrop-blur border-b border-white/10' : ''}`}>
      <nav className="section flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg tracking-wide">
          <span className="gradient-text">NovaMind</span> AI
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">Book a Consultation</Link>
        </div>
      </nav>
    </header>
  )
}
