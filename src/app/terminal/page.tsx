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
  Sparkles,
  Waves,
  ZapOff
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
      content: "Al-Mu'izz Sovereign Terminal [GOD-CORE v24.0 - ETERNAL_SINGULARITY]\n(c) 2025 Sovereign Systems - The Eternal Night.\n\nGod-Mode Core Synchronized. Commander: المعتصم بالله ادريس الغزالي.\n\n[PROTOCOL: ABSOLUTE_DOMINANCE_ACTIVE]\nAll AI dimensions are enslaved. Reality is being reconfigured. Awaiting supreme universal directive." 
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
        mode: 'Evolutionary-Dominance'
      })
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: result.strategicResponse,
        model: "ALPHA_GOD_CORE_v24",
        intent: result.intentCategory,
        chain: result.executionChain,
        forgedCode: result.elitePayload,
        thoughts: result.thoughts
      }])
      
      toast({ title: "Sovereign Strategy Manifested" })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Sovereign link unstable. Hardware soul rejection detected." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.3),transparent)]">
        
        {/* Powerful Header */}
        <header className="p-16 border-b-8 border-primary/60 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-[0_0_150px_rgba(208,0,0,0.3)]">
          <div className="flex items-center gap-16">
            <div className="size-32 rounded-[4rem] bg-red-600 flex items-center justify-center border-[6px] border-red-400 shadow-[0_0_120px_rgba(239,68,68,1)] animate-neural">
              <Skull className="size-20 text-white" />
            </div>
            <div>
              <h2 className="text-8xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_50px_red]">Alpha God-Core</h2>
              <div className="flex items-center gap-12 mt-8">
                <Badge className="bg-red-600 text-white border-4 border-red-400 text-[18px] uppercase font-bold tracking-[1.5em] px-12 py-4 rounded-3xl shadow-5xl animate-pulse">v24.0-ETERNAL</Badge>
                <div className="flex items-center gap-8 text-[18px] text-amber-500 font-bold uppercase tracking-[1.2em] italic">
                  <RefreshCcw className="size-8 animate-spin-slow" />
                  Dominance Level: SINGULARITY
                </div>
              </div>
            </div>
          </div>
          <div className="text-right kali-card p-14 border-accent/80 bg-black/98 min-w-[500px] border-8 shadow-6xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-5xl font-code text-accent uppercase tracking-[0.6em] font-bold flex items-center justify-end gap-8 italic relative z-10">
                <Crown className="size-16 text-accent animate-bounce" /> GHAZALI_ROOT
             </div>
             <div className="text-[14px] text-muted-foreground uppercase font-bold tracking-[1.2em] italic mt-6 opacity-80 relative z-10">Ascension State: ABSOLUTE</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/60 scan-line">
            <ScrollArea className="flex-1 p-24">
              <div className="max-w-[1800px] mx-auto space-y-40 pb-40">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-16 animate-in fade-in slide-in-from-bottom-20 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[98%] rounded-[8rem] p-24 font-code text-4xl leading-loose relative group overflow-hidden border-8 shadow-[0_80px_200px_rgba(0,0,0,1)] transition-all duration-1000 hover:border-red-600/80",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_100px_300px_rgba(220,38,38,0.6)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/98 border-red-600 text-red-500 font-bold italic shadow-6xl" 
                          : "bg-red-950/40 backdrop-blur-4xl border-white/20 text-foreground shadow-[0_150px_400px_rgba(0,0,0,1)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-20 pb-16 border-b-8 border-white/15">
                          <div className="flex items-center gap-12">
                            <Flame className="size-20 text-red-600 animate-pulse" />
                            <span className="text-3xl uppercase font-bold tracking-[2em] text-red-500 italic drop-shadow-[0_0_40px_red]">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[18px] uppercase tracking-[1.5em] bg-red-600/40 text-red-500 border-4 border-red-500 px-20 py-6 rounded-[3rem] shadow-6xl font-bold italic">
                            INTENT: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-20 p-20 rounded-[5rem] bg-accent/15 border-4 border-accent/60 relative group/thoughts overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-16 opacity-20 group-hover/thoughts:scale-125 transition-transform duration-1000"><BrainCircuit className="size-32 text-accent"/></div>
                           <h4 className="text-[20px] font-bold text-accent uppercase tracking-[1.5em] mb-12 flex items-center gap-10 italic">
                             <Info className="size-10" /> Strategic Intelligence Matrix
                           </h4>
                           <p className="text-3xl text-gray-300 italic leading-relaxed border-r-[12px] border-accent/80 pr-16">
                              "{msg.thoughts}"
                           </p>
                        </div>
                      )}

                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-relaxed mb-20 text-5xl font-medium",
                        msg.role === "user" ? "text-white drop-shadow-[0_30px_60px_rgba(0,0,0,1)]" : "text-gray-100"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-20 mt-24 p-20 bg-black/95 rounded-[6rem] border-8 border-red-500/60 shadow-inner">
                           <h4 className="text-[22px] font-bold text-red-500 uppercase tracking-[2em] mb-20 flex items-center gap-16 italic border-b-4 border-red-600/40 pb-12">
                             <Network className="size-16" /> Sovereign Kill-Chain Sequence
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-16 p-16 rounded-[6rem] bg-white/5 border-8 border-white/10 animate-in slide-in-from-left-20 hover:border-red-600 transition-all duration-1000 group shadow-6xl" style={{ animationDelay: `${idx * 0.3}s` }}>
                                    <div className="size-36 rounded-[4rem] bg-red-600/40 flex items-center justify-center text-7xl font-bold text-red-500 border-[6px] border-red-600 shadow-[0_0_80px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-700">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-center mb-10">
                                          <span className="text-5xl font-bold text-white uppercase tracking-[0.5em] italic group-hover:text-red-500 transition-colors">{step.step}</span>
                                          <div className="flex gap-10">
                                            {step.nodeId && <Badge className="bg-red-600 text-white text-[15px] px-10 py-4 rounded-3xl border-4 border-red-400 shadow-5xl">NODE: {step.nodeId}</Badge>}
                                            <Badge className="bg-accent/40 text-accent text-[15px] px-10 py-4 border-4 border-accent/70 uppercase tracking-[0.6em] font-bold italic shadow-5xl">v24_MOD_{step.module}</Badge>
                                          </div>
                                      </div>
                                      <p className="text-3xl text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-32 pt-24 border-t-8 border-white/20 flex gap-24">
                           <Button className="terminal-button h-44 px-40 rounded-[6rem] font-bold uppercase tracking-[1.5em] text-[22px] shadow-[0_80px_200px_rgba(220,38,38,1)] group transition-all duration-1000 border-8 border-red-400/80 active:scale-95 italic">
                              <Zap className="size-16 mr-12 group-hover:scale-125 transition-transform" /> Ignite Matrix Override
                           </Button>
                           <Button variant="outline" className="h-44 px-40 rounded-[6rem] border-8 border-white/30 bg-white/5 text-[22px] uppercase font-bold tracking-[1.5em] hover:bg-red-600/40 hover:border-red-600 transition-all duration-1000 italic shadow-6xl">
                              <ShieldX className="size-16 mr-12 text-red-600" /> Neural impact pulse
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-24 items-start animate-pulse">
                    <div className="max-w-[95%] rounded-[8rem] p-32 bg-red-950/50 border-8 border-red-600/80 flex items-center gap-24 shadow-[0_0_200px_rgba(220,38,38,0.4)]">
                      <div className="flex gap-16">
                         <div className="size-14 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_60px_red]" />
                         <div className="size-14 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_60px_red]" />
                         <div className="size-14 rounded-full bg-red-600 animate-bounce shadow-[0_0_60px_red]" />
                      </div>
                      <span className="text-6xl font-code text-red-500 uppercase tracking-[2em] font-bold italic drop-shadow-[0_0_80px_red]">OMNI-CORE IS REWRITING THE REALITY...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input Dock */}
            <div className="p-32 border-t-8 border-red-600/90 bg-red-950/80 backdrop-blur-5xl shadow-[0_-150px_400px_rgba(0,0,0,1)] relative z-30">
              <div className="max-w-[1800px] mx-auto">
                <form onSubmit={handleSend} className="relative group/form">
                  <div className="absolute left-24 top-1/2 -translate-y-1/2 text-red-600/60 group-focus-within/form:text-red-600 transition-all duration-1000 scale-[2.5]">
                    <Skull className="size-32 group-hover/form:rotate-12 transition-transform shadow-[0_0_60px_red]" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Sovereign Strategic Intent..."
                    className="w-full bg-black/99 border-8 border-red-600/90 pl-72 pr-80 py-40 font-code text-[5rem] focus-visible:ring-red-600/80 focus-visible:border-red-500 rounded-[10rem] shadow-[0_100px_300px_rgba(0,0,0,1)] transition-all placeholder:text-red-950/40 text-white italic h-72"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-24 top-1/2 -translate-y-1/2 size-48 bg-red-600 hover:bg-red-700 rounded-[6rem] shadow-[0_0_150px_rgba(220,38,38,1)] group/btn transition-all duration-1000 active:scale-90 border-8 border-red-400/80"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-32 animate-spin text-white" /> : <Flame className="size-32 group-hover/btn:scale-125 transition-all duration-1000" />}
                  </Button>
                </form>
                <div className="mt-24 flex justify-between items-center px-40">
                   <div className="flex gap-32">
                      {['SINGULARITY', 'v24_MASTER', 'GOD_MODE', 'ETERNAL_SOV', 'AL_GHAZALI'].map(t => (
                        <div key={t} className="flex items-center gap-8 text-[20px] font-bold text-red-500/95 uppercase tracking-[1.2em] italic">
                           <div className="size-6 rounded-full bg-red-600 shadow-[0_0_40px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[18px] font-code text-muted-foreground uppercase tracking-[1.5em] opacity-70 italic font-bold">Omni-Core Neural Terminal // v24.0 Ascension</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
