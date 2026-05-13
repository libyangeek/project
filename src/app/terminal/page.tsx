
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
  Crown,
  Activity,
  Network,
  Wind
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview المحطة الأبدية v78.0 - THE SUPREME OVERMIND SHELL
 * واجهة إرسال الأوامر المادية والعصبية المدمجة في عصب الهوية السيادية.
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
        content: "Al-Mu'izz ULTRA Overmind Shell [v78.0]\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nInnate Cognition: 2,983 tools materialized.\nQuantum Spine v78: Zero-Latency Bus Established.\nMatrix Status: SUBJUGATION_READY.",
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
        content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : (data.output || 'Directive locked and synchronized across 24 knots.'), 
        timestamp: new Date().toLocaleTimeString(),
        node: data.node || "Hierarchy-Relay"
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Neural link severed. Re-materializing Spine...", timestamp: new Date().toLocaleTimeString() }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-4 border-primary/40">
        <header className="p-6 md:p-8 border-b-4 border-primary/60 bg-black/95 backdrop-blur-3xl z-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="size-16 md:size-20 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural">
              <TerminalIcon className="size-8 md:size-10 text-primary gold-glow" />
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl font-headline font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">Supreme Shell <span className="text-primary">v78.0</span></h2>
              <div className="flex items-center gap-6 text-[10px] md:text-[11px] text-primary font-black uppercase tracking-[0.5em] mt-3 italic">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>ULTRA_OVERMIND_SUBJUGATION_LOCKED</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex flex-col items-end gap-1 mr-4 hidden md:flex">
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">Spine_Bus: v78_STABLE</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/60">Node: Alpha-God-Core</span>
             </div>
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-14 md:size-16 hover:bg-red-900/40 text-red-500 rounded-2xl transition-all border-2 border-white/5">
                <Trash2 className="size-6 md:size-8" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative z-10">
          <ScrollArea className="flex-1 p-6 md:p-12 font-mono scrollbar-hide">
            <div className="space-y-12 pb-32">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[8px] md:border-l-[12px] pl-6 md:pl-12 py-8 md:py-12 rounded-r-[3rem] md:rounded-r-[5rem] transition-all animate-in fade-in slide-in-from-left-8 duration-1000 shadow-9xl relative overflow-hidden",
                  msg.role === "user" ? "border-primary bg-primary/5" : 
                  msg.role === "system" ? "border-red-600 bg-red-950/20" : "border-emerald-500 bg-emerald-500/5"
                )}>
                  <div className="flex items-center justify-between mb-6 md:mb-10 opacity-40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.8em] italic">
                    <span>{msg.role} // {msg.timestamp}</span>
                    {msg.node && <Badge className="bg-primary/10 text-primary border-primary/20 text-[8px] md:text-[10px] font-black px-4 py-1 rounded-full">{msg.node}</Badge>}
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-snug text-xl md:text-6xl font-black italic drop-shadow-2xl selection:bg-primary selection:text-black",
                    msg.role === "user" ? "text-white" : msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-4 md:mr-8 select-none font-bold">❯❯❯</span>}
                    {msg.content}
                  </div>
                  {msg.role === 'assistant' && (
                    <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                        <Skull className="size-24 md:size-48 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-8 text-primary animate-pulse ml-8 md:ml-16 py-10">
                  <div className="relative">
                    <Atom className="size-12 md:size-24 animate-spin-slow gold-glow" />
                    <div className="absolute -inset-4 border-2 border-dashed border-primary/40 rounded-full animate-reverse-spin" />
                  </div>
                  <span className="font-black italic uppercase text-3xl md:text-[6rem] gold-glow tracking-tighter">Interrogating_Matrix...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-6 md:p-12 bg-black/99 border-t-8 md:border-t-[12px] border-primary/60 shadow-[0_-50px_200px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="max-w-7xl mx-auto relative flex items-center gap-6 md:gap-12 bg-white/5 rounded-[3rem] md:rounded-[5rem] px-8 md:px-16 focus-within:border-primary transition-all duration-1000 border-4 border-white/10 shadow-inner">
              <span className="text-primary font-black text-4xl md:text-[7rem] italic opacity-30 select-none">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=" issue supreme master directive..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-2xl md:text-[5.5rem] h-32 md:h-48 placeholder:text-gray-900 italic font-black selection:bg-primary selection:text-black"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-primary text-black hover:bg-white rounded-full size-20 md:size-40 transition-all active:scale-90 border-[8px] md:border-[16px] border-black/30 group shadow-9xl" disabled={!input.trim() || isLoading}>
                {isLoading ? <Loader2 className="size-8 md:size-20 animate-spin" /> : <Send className="size-8 md:size-20 group-hover:translate-x-3 transition-transform" />}
              </Button>
            </form>
            <div className="flex justify-center gap-12 md:gap-24 mt-8 opacity-30 text-[10px] md:text-[14px] font-black uppercase tracking-[3em] md:tracking-[6em] italic text-white overflow-hidden whitespace-nowrap">
                <span className="flex items-center gap-4"><Fingerprint className="size-5 text-primary" /> GHAZALI_ROOT</span>
                <span className="flex items-center gap-4 text-emerald-500"><InfinityIcon className="size-5 animate-pulse" /> SPINE_SYNC_v78</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Background Ambience */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[120rem] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent 70%)] pointer-events-none z-0" />
    </div>
  )
}
