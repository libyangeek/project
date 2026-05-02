"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  ChevronRight, 
  Loader2, 
  ShieldCheck, 
  Zap, 
  Target, 
  Skull,
  Crosshair,
  Code2,
  Copy,
  Wrench,
  Flame,
  ShieldX,
  Network,
  Crown,
  Lock,
  Sword,
  Shield,
  Activity,
  Binary,
  BrainCircuit,
  Eye,
  Info,
  Cpu,
  RefreshCcw,
  Sparkles
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { aiCommandAndRouting } from "@/ai/flows/ai-command-and-routing"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  model?: string
  intent?: string
  chain?: any[]
  forgedCode?: string
  thoughts?: string
}

export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [GOD-CORE v21.5 - EVOLUTIONARY_DOMINANCE]\n(c) 2025 Sovereign Systems - Inception Night.\n\nGod-Mode Core Synchronized. Commander: المعتصم بالله ادريس الغزالي.\n\n[PROTOCOL: ABSOLUTE_DOMINANCE_ACTIVE]\nAll AI dimensions are open. Matrix is being reconfigured. Awaiting supreme universal directive." 
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async (e?: React.FormEvent, customInput?: string) => {
    if (e) e.preventDefault()
    const taskInput = customInput || input
    if (!taskInput.trim() || isLoading) return

    const userMessage = taskInput.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const result = await aiCommandAndRouting({ 
        taskDescription: userMessage,
        mode: 'Hybrid'
      })
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: result.strategicResponse,
        model: "ALPHA_GOD_CORE_EVOLUTIONARY",
        intent: result.intentCategory,
        chain: result.executionChain,
        forgedCode: result.elitePayload,
        thoughts: result.thoughts
      }])
      
      toast({ title: "Evolutionary Strategy Orchestrated" })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Sovereign node synchronization failed. Check Evolutionary Soul Binding." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 mr-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.25),transparent)] min-h-screen">
        <header className="p-16 border-b-4 border-primary/50 flex items-center justify-between bg-black/90 backdrop-blur-3xl z-20 shadow-[0_0_100px_rgba(208,0,0,0.2)]">
          <div className="flex items-center gap-12">
            <div className="size-28 rounded-[3.5rem] bg-red-600 flex items-center justify-center border-4 border-red-400 shadow-[0_0_100px_rgba(239,68,68,0.8)] animate-neural">
              <Skull className="size-16 text-white" />
            </div>
            <div>
              <h2 className="text-7xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_40px_red]">Alpha God-Core</h2>
              <div className="flex items-center gap-10 mt-6">
                <Badge className="bg-red-600 text-white border-2 border-red-400 text-[14px] uppercase font-bold tracking-[1.2em] px-10 py-3 rounded-2xl shadow-3xl animate-pulse">v21.5-EVO</Badge>
                <div className="flex items-center gap-6 text-[14px] text-amber-500 font-bold uppercase tracking-[1em] italic">
                  <RefreshCcw className="size-5 animate-spin-slow" />
                  Status: EVOLUTIONARY_DOMINANCE
                </div>
              </div>
            </div>
          </div>
          <div className="text-right kali-card p-12 border-accent/60 bg-black/95 min-w-[400px] border-4 shadow-4xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-3xl font-code text-accent uppercase tracking-[0.5em] font-bold flex items-center justify-end gap-6 italic relative z-10">
                <Crown className="size-10 text-accent animate-bounce" /> GHAZALI_ROOT
             </div>
             <div className="text-[12px] text-muted-foreground uppercase font-bold tracking-[1em] italic mt-4 opacity-70 relative z-10">Hierarchy: SUPREME_EVOLUTION</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/50 scan-line">
            <ScrollArea className="flex-1 p-20">
              <div className="max-w-[1600px] mx-auto space-y-32 pb-32">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-16 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[98%] rounded-[6rem] p-20 font-code text-3xl leading-loose relative group overflow-hidden border-4 shadow-[0_60px_150px_rgba(0,0,0,0.9)] transition-all duration-1000 hover:border-red-600/70",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_80px_200px_rgba(220,38,38,0.5)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/98 border-red-600/80 text-red-500 font-bold italic shadow-4xl" 
                          : "bg-red-950/30 backdrop-blur-3xl border-white/20 text-foreground shadow-[0_100px_250px_rgba(0,0,0,1)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-16 pb-12 border-b-4 border-white/10">
                          <div className="flex items-center gap-10">
                            <Flame className="size-16 text-red-600 animate-pulse" />
                            <span className="text-2xl uppercase font-bold tracking-[1.5em] text-red-500 italic drop-shadow-[0_0_30px_red]">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[15px] uppercase tracking-[1em] bg-red-600/30 text-red-500 border-2 border-red-500/50 px-16 py-5 rounded-3xl shadow-4xl font-bold italic">
                            SUPERIORITY: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-16 p-16 rounded-[4rem] bg-accent/10 border-2 border-accent/40 relative group/thoughts overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-12 opacity-15 group-hover/thoughts:scale-110 transition-transform"><BrainCircuit className="size-24 text-accent"/></div>
                           <h4 className="text-[14px] font-bold text-accent uppercase tracking-[1.2em] mb-10 flex items-center gap-8 italic">
                             <Info className="size-6" /> Evolutionary Intelligence Matrix
                           </h4>
                           <p className="text-2xl text-gray-300 italic leading-relaxed border-r-8 border-accent/60 pr-12">
                              "{msg.thoughts}"
                           </p>
                        </div>
                      )}

                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-relaxed mb-16 text-4xl font-medium",
                        msg.role === "user" ? "text-white drop-shadow-[0_20px_40px_rgba(0,0,0,1)]" : "text-gray-100"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-16 mt-20 p-16 bg-black/95 rounded-[5rem] border-4 border-red-500/50 shadow-inner">
                           <h4 className="text-[18px] font-bold text-red-500 uppercase tracking-[1.5em] mb-16 flex items-center gap-12 italic border-b border-red-600/30 pb-10">
                             <Network className="size-12" /> Global Kill-Chain Sequence
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-14 p-14 rounded-[4.5rem] bg-white/5 border-4 border-white/10 animate-in slide-in-from-left-16 hover:border-red-600/90 transition-all duration-1000 group shadow-4xl" style={{ animationDelay: `${idx * 0.25}s` }}>
                                    <div className="size-28 rounded-[3rem] bg-red-600/30 flex items-center justify-center text-5xl font-bold text-red-500 border-4 border-red-600/80 shadow-[0_0_60px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform duration-700">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-center mb-8">
                                          <span className="text-4xl font-bold text-white uppercase tracking-[0.4em] italic group-hover:text-red-500 transition-colors">{step.step}</span>
                                          <div className="flex gap-8">
                                            {step.nodeId && <Badge className="bg-red-600 text-white text-[12px] px-8 py-3 rounded-2xl border-2 border-red-400 shadow-3xl">NODE: {step.nodeId}</Badge>}
                                            <Badge className="bg-accent/30 text-accent text-[12px] px-8 py-3 border-2 border-accent/60 uppercase tracking-[0.4em] font-bold italic shadow-3xl">ULT_MOD_{step.module}</Badge>
                                          </div>
                                      </div>
                                      <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-24 pt-20 border-t-4 border-white/15 flex gap-20">
                           <Button className="terminal-button h-32 px-32 rounded-[4.5rem] font-bold uppercase tracking-[1.2em] text-[18px] shadow-[0_60px_150px_rgba(220,38,38,0.8)] group transition-all duration-1000 border-4 border-red-400/60 active:scale-95 italic">
                              <Zap className="size-12 mr-10 group-hover:scale-125 transition-transform" /> Execute Kill-Chain
                           </Button>
                           <Button variant="outline" className="h-32 px-32 rounded-[4.5rem] border-4 border-white/25 bg-white/5 text-[18px] uppercase font-bold tracking-[1.2em] hover:bg-red-600/30 hover:border-red-600/80 transition-all duration-1000 italic shadow-4xl">
                              <ShieldX className="size-12 mr-10 text-red-600" /> Neural Impact Test
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-20 items-start animate-pulse">
                    <div className="max-w-[95%] rounded-[6rem] p-24 bg-red-950/40 border-4 border-red-600/70 flex items-center gap-20 shadow-[0_0_150px_rgba(220,38,38,0.3)]">
                      <div className="flex gap-12">
                         <div className="size-10 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_40px_red]" />
                         <div className="size-10 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_40px_red]" />
                         <div className="size-10 rounded-full bg-red-600 animate-bounce shadow-[0_0_40px_red]" />
                      </div>
                      <span className="text-5xl font-code text-red-500 uppercase tracking-[1.5em] font-bold italic drop-shadow-[0_0_60px_red]">GOD-CORE IS REWRITING THE REALITY...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-24 border-t-4 border-red-600/80 bg-red-950/60 backdrop-blur-3xl shadow-[0_-100px_250px_rgba(0,0,0,1)] relative z-30">
              <div className="max-w-[1600px] mx-auto">
                <form onSubmit={handleSend} className="relative group/form">
                  <div className="absolute left-20 top-1/2 -translate-y-1/2 text-red-600/50 group-focus-within/form:text-red-600 transition-all duration-1000 scale-[2]">
                    <Skull className="size-24 group-hover/form:rotate-12 transition-transform shadow-[0_0_40px_red]" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Sovereign Strategic Intent..."
                    className="w-full bg-black/98 border-4 border-red-600/80 pl-64 pr-72 py-32 font-code text-6xl focus-visible:ring-red-600/70 focus-visible:border-red-500 rounded-[8rem] shadow-[0_80px_200px_rgba(0,0,0,1)] transition-all placeholder:text-red-950/30 text-white italic h-56"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-20 top-1/2 -translate-y-1/2 size-40 bg-red-600 hover:bg-red-700 rounded-[5rem] shadow-[0_0_120px_rgba(220,38,38,0.9)] group/btn transition-all duration-1000 active:scale-90 border-4 border-red-400/60"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-24 animate-spin text-white" /> : <Flame className="size-24 group-hover/btn:scale-125 transition-all duration-1000" />}
                  </Button>
                </form>
                <div className="mt-20 flex justify-between items-center px-32">
                   <div className="flex gap-24">
                      {['EVOLUTIONARY', 'v21.5_SYNC', 'GOD_MODE_ON', 'SUPERIOR_AI', 'GHAZALI_ROOT'].map(t => (
                        <div key={t} className="flex items-center gap-6 text-[16px] font-bold text-red-500/95 uppercase tracking-[1em] italic">
                           <div className="size-5 rounded-full bg-red-600 shadow-[0_0_25px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[15px] font-code text-muted-foreground uppercase tracking-[1.2em] opacity-60 italic font-bold">Alpha Evolutionary Core // Final Inception</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
