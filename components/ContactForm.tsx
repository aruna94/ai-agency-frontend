'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    setStatus('loading')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) setStatus('success'); else throw new Error('Failed')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4 max-w-2xl">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your name" className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10" />
        <input name="email" required type="email" placeholder="Email" className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10" />
      </div>
      <input name="company" placeholder="Company (optional)" className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10" />
      <input name="phone" placeholder="Phone (optional)" className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10" />
      <select name="service" className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10">
        <option>AI Systems</option>
        <option>Full Stack Applications</option>
        <option>AI Chatbots</option>
        <option>Voice Assistants</option>
        <option>Workflow Automations</option>
        <option>AI Consulting</option>
      </select>
      <textarea name="message" required rows={5} placeholder="Tell us about your goals..." className="rounded-2xl px-4 py-3 bg-white/10 border border-white/10" />
      <button disabled={status==='loading'} className="btn-primary">{status==='loading' ? 'Sending...' : 'Send message'}</button>
      {status==='success' && <div className="text-green-400">Thanks! We’ll get back within one business day.</div>}
      {status==='error' && <div className="text-red-400">Something went wrong. Please try again.</div>}
    </form>
  )
}
