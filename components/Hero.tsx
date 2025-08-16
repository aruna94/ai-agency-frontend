'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section pt-20 md:pt-28 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Build with <span className="gradient-text">AI</span>. <br className="hidden md:block" />
          Ship <span className="gradient-text">outcomes</span>.
        </h1>
        <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto">
          AI systems, full‑stack platforms, and automations that create real ROI.
          Faster launches, lower costs, smarter experiences.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link href="/contact" className="btn-primary">Get Started</Link>
          <a href="#services" className="rounded-2xl px-5 py-3 border border-white/20 hover:border-white/40 transition">
            Explore Services
          </a>
        </div>
      </motion.div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          ['99.9% uptime', 'Production‑ready engineering'],
          ['<60 days', 'From discovery to launch'],
          ['x4 ROI', 'Avg. client value within 6 months'],
        ].map((i, idx) => (
          <motion.div key={idx} className="card p-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="text-2xl font-semibold">{i[0]}</div>
            <div className="text-white/60">{i[1]}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
