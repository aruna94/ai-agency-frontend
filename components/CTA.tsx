import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section py-16">
      <div className="card p-8 md:p-12 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold">Ready to build with AI?</h3>
        <p className="text-white/70 mt-3">Book a consultation and get a roadmap in days, not months.</p>
        <div className="mt-6">
          <Link href="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </div>
    </section>
  )
}
