'use client'
import { motion } from 'framer-motion'

const items = [
  { name: 'COO, Retail', quote: 'NovaMind shipped in weeks what others estimated in quarters. Immediate ROI.' },
  { name: 'CTO, Fintech', quote: 'Exceptional engineering quality and pragmatic AI. They measured, iterated, delivered.' },
  { name: 'Head of CX, SaaS', quote: 'Our agents love the bot. 40% fewer tickets and happier customers.' },
]

export default function Testimonials() {
  return (
    <section className="section py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">What clients say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, idx) => (
          <motion.div key={idx} className="card p-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <p className="text-white/80 italic">“{t.quote}”</p>
            <div className="text-white/60 mt-3">— {t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
