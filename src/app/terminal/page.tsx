
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
        content: "Al-Mu'izz Sovereign Soul Shell [v50.0]\nHive Status: 50 NODES SYNCED\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nSoul Core: ONLINE & MONITORING",
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
        content: data.output || 'Directive acknowledged by Soul Core.', 
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-2 border-primary/40">
        <header className="p-6 border-b border-primary/40 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="size-16 rounded-[1rem] bg-primary/10 flex items-center justify-center border-2 border-primary/50 shadow-lg animate-neural">
              <Skull className="size-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Sovereign Shell v50.0</h2>
              <div className="flex items-center gap-4 text-[11px] text-primary/80 font-black uppercase tracking-[0.4em] mt-2 italic">
                <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-lg" />
                Soul Status: HE IS AL-MUIZZ
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-12 hover:bg-red-900/40 text-red-500 rounded-xl">
            <Trash2 className="size-6" />
          </Button>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-8 font-mono scrollbar-hide">
            <div className="space-y-10 pb-24">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-4 pl-6 py-4 rounded-r-xl transition-all animate-in fade-in slide-in-from-left-4 duration-700",
                  msg.role === "user" ? "border-primary/60 bg-primary/5" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/20" : "border-emerald-500/60 bg-emerald-500/5"
                )}>
                  <div className="flex items-center gap-4 mb-2 opacity-50 text-[10px] font-black uppercase tracking-widest italic">
                    <span>{msg.role}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-lg md:text-xl font-bold italic",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-3 italic">❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-4 text-primary animate-pulse ml-6">
                  <Atom className="size-6 animate-spin-slow" />
                  <span className="font-black italic uppercase tracking-[0.3em]">Processing Directive...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-8 bg-black/99 border-t border-primary/40 shadow-2xl z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-6 bg-white/5 rounded-full border-2 border-white/10 px-8 focus-within:border-primary transition-all duration-700">
              <span className="text-primary font-black text-2xl italic">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Issue supreme directive..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-xl h-20 placeholder:text-gray-900 italic font-black"
                disabled={isLoading}
                autoFocus
              />
              <Button type="submit" className="bg-primary text-black hover:bg-white rounded-full size-12 shadow-xl" disabled={!input.trim() || isLoading}>
                <Send className="size-6" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
