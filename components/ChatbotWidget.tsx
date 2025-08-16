'use client'
import { useEffect, useRef, useState } from 'react'

type Message = { role: 'user'|'bot', text: string }

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: 'Hi! Ask me about services or book a consultation.' }])
  const inputRef = useRef<HTMLInputElement>(null)

  const send = async () => {
    const text = inputRef.current?.value?.trim()
    if (!text) return
    setMessages(m => [...m, { role:'user', text }])
    inputRef.current!.value = ''

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })
      const data = await res.json()
      setMessages(m => [...m, { role: 'bot', text: data.reply || 'Thanks! We will get back soon.' }])
    } catch {
      setMessages(m => [...m, { role: 'bot', text: 'Thanks! We will get back soon.' }])
    }
  }

  return (
    <>
      <button onClick={()=>setOpen(!open)} className="fixed bottom-6 right-6 btn-primary shadow-glow">Chat</button>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 card p-4">
          <div className="font-semibold mb-2">NovaMind Assistant</div>
          <div className="h-48 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role==='bot'?'text-white/80':'text-accent'}`}>{m.text}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input ref={inputRef} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Type a message..." className="flex-1 rounded-xl px-3 py-2 bg-white/10 border border-white/10 outline-none" />
            <button onClick={send} className="rounded-xl px-3 py-2 bg-white/15 border border-white/10">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
