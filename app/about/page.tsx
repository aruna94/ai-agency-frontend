'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="section py-20">
      <motion.h1 className="text-4xl md:text-6xl font-semibold gradient-text mb-6"
        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        We engineer AI that ships.
      </motion.h1>
      <p className="max-w-3xl text-lg text-muted leading-relaxed">
        NovaMind AI is a team of senior full‑stack and AI specialists. We craft production‑grade systems that
        unlock ROI with measurable impact—combining research‑level ML with pragmatic engineering.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          { k:'7+', v:'Years avg. experience' },
          { k:'30+', v:'Enterprise deliveries' },
          { k:'$10M+', v:'Client value unlocked' },
        ].map((i, idx) => (
          <motion.div key={idx} className="card p-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="text-4xl font-bold gradient-text">{i.k}</div>
            <div className="text-muted mt-2">{i.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
