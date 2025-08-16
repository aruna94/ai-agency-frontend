export default function Footer() {
  return (
    <footer className="section py-12 text-sm text-white/60">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-white">NovaMind AI</div>
          <div className="text-white/60 mt-2">Building intelligent systems that ship.</div>
        </div>
        <div>
          <div className="text-white/40">Services</div>
          <ul className="mt-2 space-y-1">
            <li>AI Systems</li>
            <li>Full Stack Apps</li>
            <li>Chatbots & Voice</li>
            <li>Automations</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <div className="text-white/40">Contact</div>
          <div className="mt-2">hello@novamind.ai</div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-4">© {new Date().getFullYear()} NovaMind AI. All rights reserved.</div>
    </footer>
  )
}
