'use client'
import { motion } from 'framer-motion'

const items = [
  { title: 'AI Systems', desc: 'Custom ML pipelines, RAG, predictive analytics, vision & NLP.' },
  { title: 'Full Stack Apps', desc: 'Modern web apps with robust APIs, authentication, and dashboards.' },
  { title: 'AI Chatbots', desc: 'Domain‑aware chat with guardrails, analytics, and integrations.' },
  { title: 'Voice Assistants', desc: 'Natural voice interfaces, IVR modernization, speech analytics.' },
  { title: 'Workflow Automations', desc: 'Reduce manual work with orchestrated AI + rules engines.' },
  { title: 'AI Consulting', desc: 'Roadmaps, architecture, PoCs, and capability enablement.' },
]

export default function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div id="services" className="grid md:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <motion.div key={it.title} className="card p-6 hover:shadow-glow transition"
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="text-xl font-semibold mb-2">{it.title}</div>
          <p className="text-white/70">{it.desc}</p>
          {detailed && (
            <a href="/contact" className="inline-block mt-4 underline text-white/80 hover:text-white">Build with AI →</a>
          )}
        </motion.div>
      ))}
    </div>
  )
}
