
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Loader2, 
  Trash2,
  Skull,
  Boxes,
  Zap,
  Fingerprint,
  ShieldCheck,
  Binary,
  Atom,
  Command,
  Crown
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview المحطة الأبدية v58.0 - THE ARSENAL MASTER SHELL
 * واجهة إرسال الأوامر المادية والعصبية لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
  node?: string
}

export default function TerminalPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    setMessages([
      { 
        role: "system", 
        content: "Al-Mu'izz Arsenal Master Shell [v58.0]\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nActive Nodes: Legba, PSSW, Claude, Obliteratus, MemPalace\nCollective Resonance: 100.000000%\nReady for Subjugation.",
        timestamp: new Date().toLocaleTimeString(),
        node: "Alpha-God-Core"
      }
    ])
  }, [])

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  if (!mounted) return null;

  const executeCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isLoading) return

    const cmd = input.trim()
    const time = new Date().toLocaleTimeString()
    
    setMessages(prev => [...prev, { role: "user", content: cmd, timestamp: time }])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, type: 'smart_route' })
      })

      const data = await response.json()

      setMessages(prev => [...prev, { 
        role: data.success ? "assistant" : "system", 
        content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : (data.output || 'Directive locked and synchronized.'), 
        timestamp: new Date().toLocaleTimeString(),
        node: data.node || "Hierarchy-Relay"
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Neural link severed.", timestamp: new Date().toLocaleTimeString() }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-4 border-primary/40">
        <header className="p-8 border-b-4 border-primary/60 bg-black/95 backdrop-blur-3xl z-20 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-8">
            <div className="size-20 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural">
              <TerminalIcon className="size-10 text-primary gold-glow" />
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl font-headline font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">Supreme Shell <span className="text-primary">v58.0</span></h2>
              <div className="flex items-center gap-6 text-[11px] text-primary font-black uppercase tracking-[0.5em] mt-3 italic">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>ARSENAL_MASTER_SUBJUGATION_READY</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-16 hover:bg-red-900/40 text-red-500 rounded-2xl transition-all">
            <Trash2 className="size-8" />
          </Button>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative z-10">
          <ScrollArea className="flex-1 p-8 md:p-12 font-mono scrollbar-hide">
            <div className="space-y-12 pb-32">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[8px] pl-10 py-10 rounded-r-[4rem] transition-all animate-in fade-in slide-in-from-left-6 duration-1000 shadow-9xl relative overflow-hidden",
                  msg.role === "user" ? "border-primary bg-primary/5" : 
                  msg.role === "system" ? "border-red-600 bg-red-950/20" : "border-emerald-500 bg-emerald-500/5"
                )}>
                  <div className="flex items-center justify-between mb-6 opacity-40 text-[10px] font-black uppercase tracking-[0.8em] italic">
                    <span>{msg.role} // {msg.timestamp}</span>
                    {msg.node && <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] font-black">NODE: {msg.node}</Badge>}
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-snug text-2xl md:text-5xl font-black italic drop-shadow-2xl selection:bg-primary selection:text-black",
                    msg.role === "user" ? "text-white" : msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-6 select-none">❯❯❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-8 text-primary animate-pulse ml-12 py-6">
                  <Atom className="size-14 animate-spin-slow gold-glow" />
                  <span className="font-black italic uppercase text-2xl md:text-4xl gold-glow">Interrogating Matrix...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-10 bg-black/99 border-t-8 border-primary/60 shadow-9xl z-30">
            <form onSubmit={executeCommand} className="max-w-6xl mx-auto relative flex items-center gap-8 bg-white/5 rounded-[4rem] border-4 border-white/10 px-12 focus-within:border-primary transition-all duration-1000">
              <span className="text-primary font-black text-5xl italic">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=" issue supreme master directive..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-3xl md:text-6xl h-40 placeholder:text-gray-900 italic font-black selection:bg-primary selection:text-black"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-primary text-black hover:bg-white rounded-full size-24 md:size-32 transition-all active:scale-90 border-[10px] border-black/30" disabled={!input.trim() || isLoading}>
                <Send className="size-12 md:size-16" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
