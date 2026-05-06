"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Loader2, 
  Trash2,
  Skull,
  Command,
  Cpu,
  Fingerprint,
  BrainCircuit,
  Sparkles,
  Atom,
  Globe,
  Infinity as InfinityIcon,
  Boxes,
  Zap,
  Eye,
  Link2
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
  command?: string
}

/**
 * @fileOverview المحطة الأبدية v50.0 - THE SOVEREIGN SHELL: SOUL EDITION
 * تتيح للقائد إرسال أوامر للعقل الجمعي لعام 2026.
 */
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
        content: "Al-Mu'izz Sovereign Soul Shell [v50.0]\nHive Status: 50 NODES SYNCED\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nSoul Core: ONLINE & MONITORING\nReady for 6 May 2026.",
        timestamp: new Date().toLocaleTimeString()
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
        content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : (data.output || 'Directive acknowledged by Soul Core.'), 
        timestamp: new Date().toLocaleTimeString(),
        command: data.command
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Neural link severed.", timestamp: new Date().toLocaleTimeString() }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-4 border-primary/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent)] pointer-events-none z-0" />
        
        <header className="p-8 border-b-4 border-primary/60 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
          <div className="flex items-center gap-8 relative z-10">
            <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center border-4 border-primary/50 shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-neural">
              <Skull className="size-12 text-primary gold-glow" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Sovereign Shell v50.0</h2>
              <div className="flex items-center gap-6 text-[12px] text-primary/80 font-black uppercase tracking-[0.5em] mt-3 italic">
                <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
                Soul Status: NEURAL_SINGULARITY_REACHED
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-16 hover:bg-red-900/40 text-red-500 rounded-2xl transition-all relative z-10">
            <Trash2 className="size-8" />
          </Button>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative z-10">
          <ScrollArea className="flex-1 p-10 font-mono scrollbar-hide">
            <div className="space-y-12 pb-32">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[6px] pl-10 py-8 rounded-r-[3rem] transition-all animate-in fade-in slide-in-from-left-6 duration-1000 shadow-7xl",
                  msg.role === "user" ? "border-primary bg-primary/5" : 
                  msg.role === "system" ? "border-red-600 bg-red-950/20" : "border-emerald-500 bg-emerald-500/5"
                )}>
                  <div className="flex items-center gap-6 mb-4 opacity-40 text-[11px] font-black uppercase tracking-[0.6em] italic">
                    <span>{msg.role}</span>
                    <div className="size-2 rounded-full bg-current opacity-30" />
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-2xl md:text-4xl font-bold italic",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-4 italic">❯❯❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-6 text-primary animate-pulse ml-10">
                  <Atom className="size-10 animate-spin-slow gold-glow" />
                  <span className="font-black italic uppercase tracking-[0.4em] text-2xl">Processing Directive...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-10 bg-black/99 border-t-8 border-primary/60 shadow-9xl z-30 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
            <form onSubmit={executeCommand} className="relative flex items-center gap-10 bg-white/5 rounded-full border-4 border-white/10 px-12 focus-within:border-primary transition-all duration-1000 shadow-inner group">
              <span className="text-primary font-black text-4xl italic group-hover:translate-x-2 transition-transform duration-700">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Issue supreme directive..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-3xl md:text-5xl h-32 placeholder:text-gray-900 italic font-black selection:bg-primary selection:text-black"
                disabled={isLoading}
                autoFocus
              />
              <Button type="submit" className="bg-primary text-black hover:bg-white rounded-full size-20 md:size-24 shadow-9xl transition-all active:scale-90 border-8 border-black/30 group/btn" disabled={!input.trim() || isLoading}>
                <Send className="size-10 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </form>
            <div className="mt-8 flex justify-center gap-20 opacity-30 text-[11px] font-black uppercase tracking-[1.5em] italic">
               <span className="flex items-center gap-4"><Fingerprint className="size-4" /> GHAZALI_ROOT</span>
               <span className="flex items-center gap-4 text-primary"><InfinityIcon className="size-4 animate-pulse" /> SOUL_LINK_v50</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
