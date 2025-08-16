'use client'
import CaseStudies from '../../components/CaseStudies'

export default function CaseStudiesPage() {
  return (
    <section className="section py-20">
      <h1 className="text-4xl md:text-6xl font-semibold gradient-text mb-6">Case Studies</h1>
      <p className="text-muted max-w-2xl mb-10">Selected results and outcomes delivered for clients.</p>
      <CaseStudies full />
    </section>
  )
}
