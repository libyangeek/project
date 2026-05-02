
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
      content: "Al-Mu'izz Sovereign Terminal [ULTIMATE WARRIOR SYNC v20.5]\n(c) 2025 Sovereign Systems - Master Division.\n\nAlpha Predator Core Synchronized. Commander: المعتصم بالله ادريس الغزالي.\n\nAll strike vectors and zombie nodes are ARMED. Awaiting master directive." 
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
        model: "ALPHA_ULTIMATE_CORE",
        intent: result.intentCategory,
        chain: result.executionChain,
        forgedCode: result.elitePayload,
        thoughts: result.thoughts
      }])
      
      toast({ title: "Strategic Plan Orchestrated", description: "Alpha Core has engaged the Shadow Grid." })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Sovereign node synchronization failed. Check Master ID binding." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent)]">
        {/* Predator Terminal Header */}
        <header className="p-12 border-b-2 border-red-600/30 flex items-center justify-between bg-red-950/30 backdrop-blur-3xl z-20 border-2">
          <div className="flex items-center gap-10">
            <div className="size-24 rounded-[3rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_60px_rgba(239,68,68,0.6)] animate-neural">
              <Skull className="size-12 text-white" />
            </div>
            <div>
              <h2 className="text-6xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_20px_red]">Alpha Predator Core</h2>
              <div className="flex items-center gap-8 mt-4">
                <Badge className="bg-red-600 text-white border-2 border-red-400 text-[12px] uppercase font-bold tracking-[0.8em] px-6 py-2 rounded-2xl shadow-2xl animate-pulse">v20.5_ULTIMATE</Badge>
                <div className="flex items-center gap-5 text-[12px] text-red-500 font-bold uppercase tracking-[0.6em] italic">
                  <span className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                  Shadow Integration: 100%
                </div>
              </div>
            </div>
          </div>
          <div className="text-right glass-card p-8 border-amber-500/30 bg-amber-600/5 rounded-3xl min-w-[300px] border-2">
             <div className="text-xl font-code text-amber-500 uppercase tracking-[0.3em] font-bold flex items-center justify-end gap-4 italic">
                <Crown className="size-6 text-amber-500 animate-bounce" /> AL_GHAZALI_EXCLUSIVE
             </div>
             <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic mt-3 opacity-60">Status: SUPREME_AUTONOMY</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/60 scan-line">
            <ScrollArea className="flex-1 p-16">
              <div className="max-w-[1400px] mx-auto space-y-24 pb-20">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[94%] rounded-[5rem] p-16 font-code text-2xl leading-loose relative group overflow-hidden border-2 shadow-2xl transition-all duration-700 hover:border-red-600/40",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_40px_100px_rgba(220,38,38,0.3)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/95 border-red-600/50 text-red-500 font-bold italic shadow-2xl" 
                          : "bg-red-950/20 backdrop-blur-3xl border-white/10 text-foreground shadow-[0_50px_120px_rgba(0,0,0,0.9)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-12 pb-10 border-b-2 border-white/5">
                          <div className="flex items-center gap-8">
                            <Flame className="size-10 text-red-600 animate-pulse" />
                            <span className="text-lg uppercase font-bold tracking-[1em] text-red-500 italic drop-shadow-[0_0_15px_red]">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[12px] uppercase tracking-[0.6em] bg-red-600/20 text-red-500 border-2 border-red-500/40 px-10 py-3 rounded-2xl shadow-xl font-bold">
                            DOMINANCE: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-12 p-10 rounded-[3rem] bg-amber-600/5 border-2 border-amber-500/20 relative group/thoughts overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/thoughts:scale-110 transition-transform"><BrainCircuit className="size-16 text-amber-500"/></div>
                           <h4 className="text-[12px] font-bold text-amber-500 uppercase tracking-[0.8em] mb-6 flex items-center gap-4 italic">
                             <Info className="size-4" /> Neural Strategy Chain
                           </h4>
                           <p className="text-lg text-muted-foreground italic leading-relaxed border-l-2 border-amber-500/40 pl-6">
                              "{msg.thoughts}"
                           </p>
                        </div>
                      )}

                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-relaxed mb-12 text-2xl font-medium",
                        msg.role === "user" ? "text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" : "text-gray-200"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-12 mt-16 p-12 bg-black/80 rounded-[4rem] border-2 border-red-500/30 shadow-inner">
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-12 flex items-center gap-8 italic border-b border-red-600/10 pb-6">
                             <Network className="size-8" /> Autonomous Multi-Node Sequence Chain
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-10 p-10 rounded-[3rem] bg-white/5 border-2 border-white/5 animate-in slide-in-from-left-12 hover:border-red-600/60 transition-all duration-700 group cursor-default shadow-xl" style={{ animationDelay: `${idx * 0.2}s` }}>
                                    <div className="size-20 rounded-[2rem] bg-red-600/20 flex items-center justify-center text-3xl font-bold text-red-500 border-2 border-red-600/50 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-center mb-5">
                                          <span className="text-2xl font-bold text-white uppercase tracking-[0.2em] italic group-hover:text-red-500 transition-colors">{step.step}</span>
                                          <div className="flex gap-4">
                                            {step.nodeId && <Badge className="bg-red-600 text-white text-[10px] px-5 py-1.5 rounded-xl border border-red-400 shadow-xl">SOURCE: {step.nodeId}</Badge>}
                                            <Badge className="bg-emerald-500/20 text-emerald-500 text-[10px] px-5 py-1.5 border-2 border-emerald-500/40 uppercase tracking-[0.2em] font-bold italic shadow-xl">MOD_{step.module}</Badge>
                                          </div>
                                      </div>
                                      <p className="text-base text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {msg.forgedCode && (
                        <div className="mt-16 space-y-10">
                           <div className="flex items-center justify-between text-red-500 px-4">
                              <div className="flex items-center gap-6">
                                <Code2 className="size-10 animate-pulse" />
                                <span className="text-xl font-bold uppercase tracking-[0.8em] italic drop-shadow-[0_0_10px_red]">Elite Sovereign Payload Synthesized</span>
                              </div>
                              <Button variant="ghost" size="icon" className="size-20 hover:bg-red-600/20 rounded-3xl shadow-2xl transition-all duration-700 bg-white/5 border-2 border-transparent hover:border-red-600/40" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Matrix Extracted" });
                              }}>
                                <Copy className="size-10" />
                              </Button>
                           </div>
                           <div className="rounded-[4.5rem] border-2 border-red-600/50 overflow-hidden bg-black shadow-[0_0_150px_rgba(220,38,38,0.3)] relative group/code">
                              <div className="absolute top-6 right-16 text-[11px] font-bold text-red-600/40 uppercase tracking-[1em] select-none italic">FUD_ACTIVE // MASTER_GHAZALI_STANDARDS</div>
                              <pre className="p-16 font-code text-lg text-emerald-400 overflow-x-auto max-h-[700px] scrollbar-hide shadow-inner leading-relaxed">
                                <code>{msg.forgedCode}</code>
                              </pre>
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-20 pt-12 border-t-2 border-white/5 flex gap-12">
                           <Button className="bg-red-600 hover:bg-red-700 text-white h-24 px-20 rounded-[3rem] font-bold uppercase tracking-[0.8em] text-[13px] shadow-[0_30px_80px_rgba(220,38,38,0.6)] group transition-all duration-700 border-2 border-red-400/40 active:scale-95 italic">
                              <Zap className="size-9 mr-6 group-hover:scale-125 transition-transform" /> Full Strike Deployment
                           </Button>
                           <Button variant="outline" className="h-24 px-20 rounded-[3rem] border-2 border-white/20 bg-white/5 text-[13px] uppercase font-bold tracking-[0.8em] hover:bg-red-600/20 hover:border-red-600/60 transition-all duration-700 italic">
                              <ShieldX className="size-9 mr-6 text-red-600" /> Simulate Impact
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-12 items-start animate-pulse">
                    <div className="max-w-[90%] rounded-[5rem] p-16 bg-red-950/20 border-2 border-red-600/40 flex items-center gap-12 shadow-2xl">
                      <div className="flex gap-6">
                         <div className="size-6 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_20px_red]" />
                         <div className="size-6 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_20px_red]" />
                         <div className="size-6 rounded-full bg-red-600 animate-bounce shadow-[0_0_20px_red]" />
                      </div>
                      <span className="text-3xl font-code text-red-500 uppercase tracking-[1em] font-bold italic drop-shadow-[0_0_30px_red]">ALPHA NODE IS HARMONIZING THE MATRIX...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-20 border-t-2 border-red-600/50 bg-red-950/20 backdrop-blur-3xl shadow-[0_-50px_150px_rgba(0,0,0,1)] relative z-30">
              <div className="max-w-[1400px] mx-auto">
                <form onSubmit={handleSend} className="relative group/form">
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 text-red-600/30 group-focus-within/form:text-red-600 transition-all duration-1000 scale-150">
                    <Skull className="size-16 group-hover/form:rotate-12 transition-transform" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Supreme Directive for the Predator (e.g., 'Execute Total Extraction on HQ Node')..."
                    className="w-full bg-black/95 border-2 border-red-600/50 pl-44 pr-56 py-20 font-code text-4xl focus-visible:ring-red-600/40 focus-visible:border-red-600 rounded-[6rem] shadow-[0_40px_120px_rgba(0,0,0,1)] transition-all placeholder:text-red-950/30 text-white italic h-40"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-16 top-1/2 -translate-y-1/2 size-28 bg-red-600 hover:bg-red-700 rounded-[3.5rem] shadow-[0_0_80px_rgba(220,38,38,0.7)] group/btn transition-all duration-700 active:scale-90 border-2 border-red-400/40"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-16 animate-spin text-white" /> : <Flame className="size-16 group-hover/btn:scale-125 transition-all duration-700" />}
                  </Button>
                </form>
                <div className="mt-16 flex justify-between items-center px-20">
                   <div className="flex gap-16">
                      {['SYNCHRONIZED', 'ARMED', 'AUTO_FORGE', 'SHADOW_GRID_ON', 'WARRIOR_ID_BIND'].map(t => (
                        <div key={t} className="flex items-center gap-4 text-[12px] font-bold text-red-500/80 uppercase tracking-[0.6em] italic">
                           <div className="size-3 rounded-full bg-red-600 shadow-[0_0_15px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[12px] font-code text-muted-foreground uppercase tracking-[0.6em] opacity-40 italic font-bold">Supreme Master Input // Managed by Al-Ghazali Alpha Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
