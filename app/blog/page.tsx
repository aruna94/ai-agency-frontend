'use client'
import { useEffect, useState } from 'react'

type Post = { _id: string; title: string; excerpt: string }

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`
    fetch(url).then(r=>r.json()).then(setPosts).catch(()=>{})
  }, [])
  return (
    <section className="section py-20">
      <h1 className="text-4xl md:text-6xl font-semibold gradient-text mb-6">Insights</h1>
      <p className="text-muted max-w-2xl mb-10">Thought leadership and updates from our team.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.length===0 && <div className="text-muted">No posts yet.</div>}
        {posts.map(p => (
          <a key={p._id} className="card p-6 hover:shadow-glow transition" href="#">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-muted mt-2">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
