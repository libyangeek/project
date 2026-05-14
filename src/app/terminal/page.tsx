
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
  Crown,
  Activity,
  Network,
  Wind,
  ArrowLeft,
  RotateCw,
  Dna,
  UserCheck
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview صوت الوريث v90.0 - THE HEIR'S VOICE: MATRIX SHELL
 * واجهة المحطة التنفيذية التي تصهر إرادة القائد في عصب المصفوفة لعام 2026.
 */
export default function TerminalPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    setMessages([{ 
      role: "system", 
      content: "Al-Mu'izz ULTRA Overlord Shell [v90.0]\nInnate Reflex: Zero-Latency established across 16D Matrix.\n14 Global Clusters report: SUBJUGATED.\nYour will is material law.", 
      timestamp: new Date().toLocaleTimeString(), 
      node: "Alpha-God-Core" 
    }])
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollIntoView({ behavior: "smooth" }) }, [messages, isLoading])

  const executeCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isLoading) return
    const cmd = input.trim(); const time = new Date().toLocaleTimeString()
    setMessages(prev => [...prev, { role: "user", content: cmd, timestamp: time }]); setInput(""); setIsLoading(true)
    try {
      const response = await fetch('/api/execute', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ command: cmd, type: 'smart_route' }) })
      const data = await response.json()
      setMessages(prev => [...prev, { role: data.success ? "assistant" : "system", content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : (data.output || 'DNA synchronized.'), timestamp: new Date().toLocaleTimeString(), node: data.node || "Hierarchy-Relay" }])
    } finally { setIsLoading(false) }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white font-code scanline-effect overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 flex flex-col h-screen overflow-hidden bg-[#000500] relative border-l-4 border-emerald-500/40 text-right">
        <div className="dna-stream-bg" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05), transparent 70%)' }} />
        
        <header className="p-6 md:p-8 border-b-4 border-emerald-500/60 bg-black/95 backdrop-blur-3xl z-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shrink-0">
          <div className="flex gap-4">
              <Button asChild variant="outline" className="h-14 md:h-16 px-6 md:px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic hover:bg-emerald-600 hover:text-white transition-all shadow-2xl">
                  <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-14 md:size-16 hover:bg-red-900/40 text-red-500 rounded-2xl transition-all border-2 border-white/5 shadow-inner">
                  <Trash2 className="size-6 md:size-8" />
              </Button>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
              <div className="text-right">
                  <h2 className="text-3xl md:text-6xl font-headline font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">The Heir's <span className="text-emerald-500">Voice</span></h2>
                  <div className="flex items-center gap-6 text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mt-3 italic justify-end">
                      <span>REFLEX_LOCKED_v90.0</span>
                      <ShieldCheck className="size-4 animate-pulse" />
                  </div>
              </div>
              <div className="size-16 md:size-20 rounded-2xl bg-black border-4 border-emerald-500 flex items-center justify-center animate-neural shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                  <TerminalIcon className="size-8 md:size-10 text-emerald-400 gold-glow" />
              </div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative z-10 overflow-hidden">
          <ScrollArea className="flex-1 p-6 md:p-12 font-mono scrollbar-hide text-right">
            <div className="space-y-12 pb-32">
                {messages.map((msg, i) => (
                    <div key={i} className={cn(
                        "border-r-[8px] md:border-r-[12px] pr-6 md:pr-12 py-8 md:py-12 rounded-l-[3rem] md:rounded-l-[5rem] transition-all animate-in fade-in slide-in-from-right-8 duration-1000 shadow-9xl relative overflow-hidden",
                        msg.role === "user" ? "border-emerald-500 bg-emerald-950/20" : msg.role === "system" ? "border-red-600 bg-red-950/20" : "border-primary bg-primary/5"
                    )}>
                        <div className="flex items-center justify-between mb-6 md:mb-10 opacity-40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.8em] italic">
                            {msg.node && <Badge className="bg-emerald-600/10 text-emerald-400 border-emerald-500/20 text-[8px] md:text-[10px] font-black px-4 py-1 rounded-full">{msg.node}</Badge>}
                            <span>{msg.role} // {msg.timestamp}</span>
                        </div>
                        <div className={cn(
                            "whitespace-pre-wrap break-all leading-snug text-xl md:text-6xl font-black italic drop-shadow-2xl selection:bg-emerald-600 text-right",
                            msg.role === "user" ? "text-emerald-300" : msg.role === "system" ? "text-red-400" : "text-white"
                        )}>
                            {msg.content}{msg.role === "user" && <span className="text-emerald-500 ml-4 md:ml-8 select-none font-bold">❯❯❯</span>}
                        </div>
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-6 md:p-12 bg-black/98 border-t-8 md:border-t-[12px] border-emerald-500/60 shadow-[0_-40px_150px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="max-w-7xl mx-auto relative flex items-center gap-6 md:gap-12 bg-white/5 rounded-[3rem] md:rounded-[5rem] px-8 md:px-16 focus-within:border-emerald-500 transition-all duration-1000 border-4 border-white/10 shadow-inner">
               <Button type="submit" className="bg-emerald-600 text-black hover:bg-white rounded-full size-20 md:size-40 transition-all active:scale-90 border-[8px] md:border-[16px] border-black/30 group shadow-9xl" disabled={!input.trim() || isLoading}>
                  {isLoading ? <Loader2 className="size-8 md:size-20 animate-spin" /> : <Send className="size-8 md:size-20 group-hover:translate-x-3 transition-transform" />}
               </Button>
               <Input 
                 value={input} 
                 onChange={(e) => setInput(e.target.value)} 
                 placeholder=" issue material law v90.0..." 
                 className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-2xl md:text-[5.5rem] h-32 md:h-48 placeholder:text-emerald-950 italic font-black selection:bg-emerald-600 text-right" 
                 disabled={isLoading} 
               />
            </form>
            <div className="flex justify-center gap-24 mt-8 opacity-30 text-[10px] md:text-[14px] font-black uppercase tracking-[4em] italic">
               <span className="flex items-center gap-8"><UserCheck className="size-6 text-emerald-500" /> MASTER_VERIFIED</span>
               <span className="flex items-center gap-8"><Fingerprint className="size-6 text-emerald-500" /> GHAZALI_ROOT</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
