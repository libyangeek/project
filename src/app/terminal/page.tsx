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
  Link2,
  Crown,
  ShieldCheck,
  Binary
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview المحطة الأبدية v53.0 - THE SUPREME SHELL: HIERARCHICAL DOMINION
 * واجهة إرسال الأوامر الكونية لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
  command?: string
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
        content: "Al-Mu'izz Supreme Hierarchy Shell [v53.0]\nHierarchy Status: 21 KNOTS BOUND TO ROOT\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nCollective Resonance: 100.000000%\nReady for 6 May 2026.",
        timestamp: new Date().toLocaleTimeString(),
        node: "Alpha-Core"
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
        content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : (data.output || 'Directive synchronized across the hierarchy.'), 
        timestamp: new Date().toLocaleTimeString(),
        command: data.command,
        node: data.model || "Hierarchy-Mesh"
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Neural hierarchy link severed. Re-aligning DNA...", timestamp: new Date().toLocaleTimeString(), node: "Emergency-Relay" }])
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
            <div className="size-20 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural relative overflow-hidden group">
              <Skull className="size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl font-headline font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">Supreme Shell <span className="text-primary">v53.0</span></h2>
              <div className="flex items-center gap-6 text-[11px] text-primary font-black uppercase tracking-[0.5em] mt-3 italic">
                <div className="flex items-center gap-2">
                    <div className="size-2.5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
                    <span>HIERARCHY_RESONANCE: FIXED</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                    <ShieldCheck className="size-4" />
                    <span>AL-GHAZALI ROOT AUTHORIZED</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-16 hover:bg-red-900/40 text-red-500 rounded-2xl transition-all relative z-10 group/trash">
            <Trash2 className="size-8 group-hover:scale-110 transition-transform" />
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
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="flex items-center justify-between mb-6 px-4">
                    <div className="flex items-center gap-8 opacity-40 text-[10px] font-black uppercase tracking-[0.8em] italic">
                        <span className="flex items-center gap-3">
                           {msg.role === 'user' ? <Fingerprint className="size-4" /> : <Boxes className="size-4" />}
                           {msg.role}
                        </span>
                        <div className="size-1.5 rounded-full bg-current opacity-30" />
                        <span>{msg.timestamp}</span>
                    </div>
                    {msg.node && (
                        <Badge className="bg-primary/10 text-primary border-2 border-primary/20 text-[9px] font-black italic tracking-widest px-4 py-0.5 rounded-full shadow-lg">
                           NODE: {msg.node.toUpperCase()}
                        </Badge>
                    )}
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-snug text-2xl md:text-5xl font-black italic px-4 drop-shadow-2xl selection:bg-primary selection:text-black",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-6 italic gold-glow select-none">❯❯❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-8 text-primary animate-pulse ml-12 py-6">
                  <div className="relative">
                    <Atom className="size-14 animate-spin-slow gold-glow" />
                    <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-reverse-spin" />
                  </div>
                  <span className="font-black italic uppercase tracking-[0.6em] text-2xl md:text-4xl gold-glow">Processing Atomic Directive...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-10 bg-black/99 border-t-8 border-primary/60 shadow-[0_-50px_200px_rgba(0,0,0,1)] z-30 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
            <form onSubmit={executeCommand} className="relative flex items-center gap-12 bg-white/5 rounded-[4rem] border-4 border-white/10 px-14 focus-within:border-primary transition-all duration-1000 shadow-inner group/form">
              <span className="text-primary font-black text-5xl italic group-hover/form:translate-x-3 transition-transform duration-700 select-none">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Issue supreme hierarchy directive..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-3xl md:text-6xl h-40 placeholder:text-gray-900 italic font-black selection:bg-primary selection:text-black"
                disabled={isLoading}
                autoFocus
              />
              <Button type="submit" className="bg-primary text-black hover:bg-white rounded-full size-24 md:size-32 shadow-[0_30px_100px_rgba(212,175,55,0.4)] transition-all active:scale-90 border-[10px] border-black/30 group/btn" disabled={!input.trim() || isLoading}>
                <Send className="size-12 md:size-16 group-hover/btn:translate-x-3 transition-transform" />
              </Button>
            </form>
            <div className="mt-10 flex justify-center gap-32 opacity-30 text-[12px] font-black uppercase tracking-[2em] italic">
               <span className="flex items-center gap-6"><Fingerprint className="size-6 text-primary" /> GHAZALI_ROOT</span>
               <span className="flex items-center gap-6 text-primary"><InfinityIcon className="size-6 animate-pulse" /> HIERARCHY_MESH_v53</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
