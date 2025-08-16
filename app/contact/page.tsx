'use client'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <section className="section py-20">
      <h1 className="text-4xl md:text-6xl font-semibold gradient-text mb-6">Contact</h1>
      <p className="text-muted max-w-2xl mb-10">Tell us about your goals. We’ll reply within one business day.</p>
      <ContactForm />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="card p-6"><div className="text-muted">Email</div><div className="text-lg">hello@novamind.ai</div></div>
        <div className="card p-6"><div className="text-muted">Phone</div><div className="text-lg">+1 (555) 010-2030</div></div>
        <div className="card p-6"><div className="text-muted">Social</div><div className="text-lg flex gap-3 underline opacity-90"><a href="#">LinkedIn</a><a href="#">X</a><a href="#">GitHub</a></div></div>
      </div>
    </section>
  )
}
