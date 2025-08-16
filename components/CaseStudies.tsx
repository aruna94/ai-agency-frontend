'use client'
import { motion } from 'framer-motion'

const cases = [
  { title: 'E‑commerce Personalization', result: '18% lift in conversion', desc: 'RAG + recommendations with vector search integrated into storefront.' },
  { title: 'Support Deflection Bot', result: '42% ticket reduction', desc: 'Domain‑tuned chatbot with analytics and CRM integration.' },
  { title: 'Voice Analytics', result: '23% faster resolution', desc: 'Real‑time transcription with call insights and QA automation.' },
]

export default function CaseStudies({ full = false }: { full?: boolean }) {
  return (
    <section className="section py-16">
      {!full && <h2 className="text-3xl md:text-4xl font-semibold mb-8">Recent Results</h2>}
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, idx) => (
          <motion.div key={idx} className="card p-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="text-xl font-semibold">{c.title}</div>
            <div className="text-sm text-white/60">{c.result}</div>
            <p className="text-white/70 mt-2">{c.desc}</p>
          </motion.div>
        ))}
      </div>
      {full && (
        <div className="card p-6 mt-8">
          <div className="text-white/70">
            Looking for a specific industry or stack? <a className="underline" href="/contact">Book a consultation</a>.
          </div>
        </div>
      )}
    </section>
  )
}
