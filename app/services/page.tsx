'use client'
import ServiceGrid from '../../components/ServiceGrid'

export default function ServicesPage() {
  return (
    <section className="section py-20">
      <h1 className="text-4xl md:text-6xl font-semibold gradient-text mb-6">Services</h1>
      <p className="text-muted max-w-2xl mb-10">
        From discovery to deployment, we deliver end‑to‑end solutions that scale with your business.
      </p>
      <ServiceGrid detailed />
    </section>
  )
}
