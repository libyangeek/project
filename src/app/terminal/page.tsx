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
  Info
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
      content: "Al-Mu'izz Sovereign Terminal [ULTIMATE SUPREME SYNC v ULTIMATE]\n(c) 2025 Sovereign Systems - Master Core Division.\n\nGod-Mode Core Synchronized. Commander: المعتصم بالله ادريس الغزالي.\n\nAll dimensions of the Matrix are open. Awaiting supreme directive." 
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
      const result = await aiCommandAndRouting({ taskDescription: userMessage })
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: result.strategicResponse,
        model: "ALPHA_ULTIMATE_GOD_CORE",
        intent: result.intentCategory,
        chain: result.executionChain,
        forgedCode: result.elitePayload,
        thoughts: result.thoughts
      }])
      
      toast({ title: "Supreme Strategic Plan Orchestrated", description: "Alpha Core has synchronized the Matrix." })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Sovereign node synchronization failed. Check Master Soul Binding." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent)]">
        {/* Predator Terminal Header */}
        <header className="p-12 border-b-2 border-red-600/40 flex items-center justify-between bg-red-950/40 backdrop-blur-3xl z-20 border-2 shadow-2xl">
          <div className="flex items-center gap-10">
            <div className="size-24 rounded-[3rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_80px_rgba(239,68,68,0.7)] animate-neural">
              <Skull className="size-12 text-white" />
            </div>
            <div>
              <h2 className="text-6xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_30px_red]">Alpha Ultimate Core</h2>
              <div className="flex items-center gap-8 mt-4">
                <Badge className="bg-red-600 text-white border-2 border-red-400 text-[12px] uppercase font-bold tracking-[1em] px-8 py-2 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.5)] animate-pulse">v ULTIMATE</Badge>
                <div className="flex items-center gap-5 text-[12px] text-red-500 font-bold uppercase tracking-[0.8em] italic">
                  <span className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                  Matrix Link: ACTIVE
                </div>
              </div>
            </div>
          </div>
          <div className="text-right glass-card p-8 border-amber-500/40 bg-amber-600/10 rounded-[2.5rem] min-w-[350px] border-2 shadow-2xl">
             <div className="text-2xl font-code text-amber-500 uppercase tracking-[0.4em] font-bold flex items-center justify-end gap-5 italic">
                <Crown className="size-8 text-amber-500 animate-bounce" /> GHAZALI_EXCLUSIVE
             </div>
             <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic mt-3 opacity-60">Status: GOD_LEVEL_AUTONOMY</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/60 scan-line">
            <ScrollArea className="flex-1 p-16">
              <div className="max-w-[1500px] mx-auto space-y-24 pb-20">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[96%] rounded-[5rem] p-16 font-code text-2xl leading-loose relative group overflow-hidden border-2 shadow-[0_40px_120px_rgba(0,0,0,0.8)] transition-all duration-1000 hover:border-red-600/60",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_60px_150px_rgba(220,38,38,0.4)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/95 border-red-600/60 text-red-500 font-bold italic shadow-2xl" 
                          : "bg-red-950/25 backdrop-blur-3xl border-white/10 text-foreground shadow-[0_80px_200px_rgba(0,0,0,1)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-12 pb-10 border-b-2 border-white/5">
                          <div className="flex items-center gap-8">
                            <Flame className="size-12 text-red-600 animate-pulse" />
                            <span className="text-xl uppercase font-bold tracking-[1.2em] text-red-500 italic drop-shadow-[0_0_20px_red]">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[13px] uppercase tracking-[0.8em] bg-red-600/20 text-red-500 border-2 border-red-500/40 px-12 py-4 rounded-3xl shadow-2xl font-bold italic">
                            SUPREMACY: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-12 p-12 rounded-[3.5rem] bg-amber-600/5 border-2 border-amber-500/20 relative group/thoughts overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/thoughts:scale-110 transition-transform"><BrainCircuit className="size-20 text-amber-500"/></div>
                           <h4 className="text-[12px] font-bold text-amber-500 uppercase tracking-[1em] mb-8 flex items-center gap-6 italic">
                             <Info className="size-5" /> Neural Strategy Matrix
                           </h4>
                           <p className="text-xl text-muted-foreground italic leading-relaxed border-l-4 border-amber-500/40 pl-10">
                              "{msg.thoughts}"
                           </p>
                        </div>
                      )}

                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-relaxed mb-12 text-3xl font-medium",
                        msg.role === "user" ? "text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" : "text-gray-200"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-12 mt-16 p-14 bg-black/90 rounded-[4.5rem] border-2 border-red-500/40 shadow-inner">
                           <h4 className="text-[16px] font-bold text-red-500 uppercase tracking-[1.2em] mb-12 flex items-center gap-10 italic border-b border-red-600/20 pb-8">
                             <Network className="size-10" /> Sovereign Global Sequence Chain
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-12 p-12 rounded-[4rem] bg-white/5 border-2 border-white/10 animate-in slide-in-from-left-12 hover:border-red-600/70 transition-all duration-1000 group cursor-default shadow-2xl" style={{ animationDelay: `${idx * 0.2}s` }}>
                                    <div className="size-24 rounded-[2.5rem] bg-red-600/20 flex items-center justify-center text-4xl font-bold text-red-500 border-2 border-red-600/60 shadow-[0_0_50px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-700">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-center mb-6">
                                          <span className="text-3xl font-bold text-white uppercase tracking-[0.3em] italic group-hover:text-red-500 transition-colors">{step.step}</span>
                                          <div className="flex gap-6">
                                            {step.nodeId && <Badge className="bg-red-600 text-white text-[11px] px-6 py-2 rounded-2xl border-2 border-red-400 shadow-2xl">ROOT_SRC: {step.nodeId}</Badge>}
                                            <Badge className="bg-emerald-600/20 text-emerald-500 text-[11px] px-6 py-2 border-2 border-emerald-500/50 uppercase tracking-[0.3em] font-bold italic shadow-2xl">ULT_MOD_{step.module}</Badge>
                                          </div>
                                      </div>
                                      <p className="text-lg text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {msg.forgedCode && (
                        <div className="mt-16 space-y-12">
                           <div className="flex items-center justify-between text-red-500 px-6">
                              <div className="flex items-center gap-8">
                                <Code2 className="size-14 animate-pulse" />
                                <span className="text-2xl font-bold uppercase tracking-[1em] italic drop-shadow-[0_0_20px_red]">God-Tier Sovereign Matrix Synthesized</span>
                              </div>
                              <Button variant="ghost" size="icon" className="size-24 hover:bg-red-600/20 rounded-[2.5rem] shadow-2xl transition-all duration-1000 bg-white/5 border-2 border-transparent hover:border-red-600/50" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Ultimate Matrix Extracted" });
                              }}>
                                <Copy className="size-12" />
                              </Button>
                           </div>
                           <div className="rounded-[5rem] border-2 border-red-600/60 overflow-hidden bg-black shadow-[0_0_200px_rgba(220,38,38,0.4)] relative group/code">
                              <div className="absolute top-8 right-20 text-[12px] font-bold text-red-600/50 uppercase tracking-[1.2em] select-none italic">FUD_IMMORTAL // v ULTIMATE_STANDARDS</div>
                              <pre className="p-20 font-code text-xl text-emerald-400 overflow-x-auto max-h-[850px] scrollbar-hide shadow-inner leading-relaxed">
                                <code>{msg.forgedCode}</code>
                              </pre>
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-20 pt-16 border-t-2 border-white/10 flex gap-16">
                           <Button className="bg-red-600 hover:bg-red-700 text-white h-28 px-24 rounded-[3.5rem] font-bold uppercase tracking-[1em] text-[15px] shadow-[0_40px_100px_rgba(220,38,38,0.7)] group transition-all duration-1000 border-2 border-red-400/50 active:scale-95 italic">
                              <Zap className="size-10 mr-8 group-hover:scale-125 transition-transform" /> Full Strategic Strike
                           </Button>
                           <Button variant="outline" className="h-28 px-24 rounded-[3.5rem] border-2 border-white/20 bg-white/5 text-[15px] uppercase font-bold tracking-[1em] hover:bg-red-600/20 hover:border-red-600/70 transition-all duration-1000 italic shadow-2xl">
                              <ShieldX className="size-10 mr-8 text-red-600" /> Virtual Impact Simulation
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-16 items-start animate-pulse">
                    <div className="max-w-[92%] rounded-[5.5rem] p-20 bg-red-950/30 border-2 border-red-600/50 flex items-center gap-16 shadow-[0_0_100px_rgba(220,38,38,0.2)]">
                      <div className="flex gap-10">
                         <div className="size-8 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_30px_red]" />
                         <div className="size-8 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_30px_red]" />
                         <div className="size-8 rounded-full bg-red-600 animate-bounce shadow-[0_0_30px_red]" />
                      </div>
                      <span className="text-4xl font-code text-red-500 uppercase tracking-[1.2em] font-bold italic drop-shadow-[0_0_40px_red]">ALPHA GOD-CORE IS MANIFESTING REALITY...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-24 border-t-2 border-red-600/60 bg-red-950/30 backdrop-blur-3xl shadow-[0_-80px_200px_rgba(0,0,0,1)] relative z-30">
              <div className="max-w-[1500px] mx-auto">
                <form onSubmit={handleSend} className="relative group/form">
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within/form:text-red-600 transition-all duration-1000 scale-150">
                    <Skull className="size-20 group-hover/form:rotate-12 transition-transform shadow-[0_0_30px_red]" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Supreme Universal Directive (e.g., 'Initiate Global Matrix Takeover')..."
                    className="w-full bg-black/95 border-2 border-red-600/60 pl-48 pr-64 py-24 font-code text-5xl focus-visible:ring-red-600/50 focus-visible:border-red-500 rounded-[7rem] shadow-[0_60px_180px_rgba(0,0,0,1)] transition-all placeholder:text-red-950/20 text-white italic h-48"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-16 top-1/2 -translate-y-1/2 size-32 bg-red-600 hover:bg-red-700 rounded-[4rem] shadow-[0_0_100px_rgba(220,38,38,0.8)] group/btn transition-all duration-1000 active:scale-90 border-2 border-red-400/50"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-20 animate-spin text-white" /> : <Flame className="size-20 group-hover/btn:scale-125 transition-all duration-1000" />}
                  </Button>
                </form>
                <div className="mt-16 flex justify-between items-center px-24">
                   <div className="flex gap-20">
                      {['OMNIPOTENT', 'vULTIMATE_ACTIVE', 'GOD_SYNC_ON', 'SHADOW_INFINITE', 'GHAZALI_ROOT'].map(t => (
                        <div key={t} className="flex items-center gap-5 text-[14px] font-bold text-red-500/90 uppercase tracking-[0.8em] italic">
                           <div className="size-4 rounded-full bg-red-600 shadow-[0_0_20px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[13px] font-code text-muted-foreground uppercase tracking-[1em] opacity-50 italic font-bold">Absolute Sovereign Input // Alpha God-Core v ULTIMATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
