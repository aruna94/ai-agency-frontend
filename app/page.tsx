'use client'

import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceGrid from '../components/ServiceGrid'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <motion.section
        className="section py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ServiceGrid />
      </motion.section>
      <CaseStudies />
      <Testimonials />
      <CTA />
    </div>
  )
}
