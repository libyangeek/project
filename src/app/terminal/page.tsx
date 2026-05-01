
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Sparkles, 
  ChevronRight, 
  Loader2, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Zap, 
  Target, 
  Skull,
  Crosshair,
  Code2,
  Copy,
  Wrench,
  Flame,
  ShieldX,
  Network
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
}

/**
 * @fileOverview تيرمينال العقدة ألفا v20.0-ULTIMATE
 * محرك التزامن المطلق بين القائد المعتصم بالله، الشبكة المظلمة، والترسانة الكونية.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [ULTIMATE SYNC v20.0]\n(c) 2025 Sovereign Systems - Master Division.\n\nAlpha Predator Core Synchronized. Commander: المعتصم بالله ادريس الغزالي.\n\nAll strike vectors and zombie nodes are ARMED. Awaiting master directive." 
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
        forgedCode: result.elitePayload
      }])
      
      toast({ title: "Operation Orchestrated", description: "Alpha Core has engaged the Shadow Grid." })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Sovereign node synchronization failed. Check Master ID binding." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent)]">
        {/* Predator Terminal Header */}
        <header className="p-10 border-b border-red-600/30 flex items-center justify-between bg-red-950/25 backdrop-blur-3xl z-20 border-2">
          <div className="flex items-center gap-8">
            <div className="size-20 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(239,68,68,0.6)] animate-pulse">
              <Skull className="size-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-headline font-bold text-white tracking-tighter italic uppercase">Alpha Predator Core</h2>
              <div className="flex items-center gap-6 mt-3">
                <Badge className="bg-red-600 text-white border-red-400 text-[11px] uppercase font-bold tracking-[0.6em] px-4 py-1 rounded-xl shadow-2xl">SYNERGY_ULTIMATE_v20</Badge>
                <div className="flex items-center gap-4 text-[11px] text-red-400 font-bold uppercase tracking-widest italic">
                  <span className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_red]" />
                  Shadow Integration: 100%
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
             <div className="text-sm font-code text-red-500 uppercase tracking-widest font-bold">AL_GHAZALI_EXCLUSIVE_NODE</div>
             <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest italic mt-2 opacity-60">Status: TOTAL_AUTONOMY</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/60">
            <ScrollArea className="flex-1 p-12">
              <div className="max-w-7xl mx-auto space-y-16 pb-10">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[96%] rounded-[4rem] p-12 font-code text-xl leading-relaxed relative group overflow-hidden border-2",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_30px_70px_rgba(239,68,68,0.3)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/90 border-red-600/40 text-red-500 font-bold italic shadow-2xl" 
                          : "bg-red-950/15 backdrop-blur-3xl border-white/10 text-foreground shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/5">
                          <div className="flex items-center gap-6">
                            <Flame className="size-8 text-red-600 animate-bounce" />
                            <span className="text-sm uppercase font-bold tracking-[0.8em] text-red-500">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.3em] bg-red-600/10 text-red-500 border-red-500/30 px-6 py-2 rounded-2xl">
                            DOMINANCE: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-loose mb-10 text-xl",
                        msg.role === "user" ? "text-white drop-shadow-lg" : "text-gray-200"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-10 mt-12 p-10 bg-black/70 rounded-[3.5rem] border border-red-500/20 shadow-inner">
                           <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.8em] mb-10 flex items-center gap-5 italic">
                             <Network className="size-6" /> Autonomous Multi-Node Sequence
                           </h4>
                           {msg.chain.map((step, idx) => (
                             <div key={idx} className="flex gap-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 animate-in slide-in-from-left-8 hover:border-red-500/40 transition-all duration-500 group" style={{ animationDelay: `${idx * 0.15}s` }}>
                                <div className="size-16 rounded-[1.5rem] bg-red-600/20 flex items-center justify-center text-2xl font-bold text-red-500 border border-red-600/50 shadow-2xl group-hover:scale-110 transition-transform">
                                  {idx + 1}
                                </div>
                                <div className="flex-1">
                                   <div className="flex justify-between items-center mb-4">
                                      <span className="text-xl font-bold text-white uppercase tracking-widest italic">{step.step}</span>
                                      <div className="flex gap-3">
                                         {step.nodeId && <Badge className="bg-red-600 text-white text-[10px] px-4 py-1">SOURCE: {step.nodeId}</Badge>}
                                         <Badge className="bg-emerald-500/20 text-emerald-500 text-[10px] px-4 py-1 border border-emerald-500/30 uppercase tracking-widest">MODULE: {step.module}</Badge>
                                      </div>
                                   </div>
                                   <p className="text-sm text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                </div>
                             </div>
                           ))}
                        </div>
                      )}

                      {msg.forgedCode && (
                        <div className="mt-12 space-y-8">
                           <div className="flex items-center justify-between text-red-500">
                              <div className="flex items-center gap-4">
                                <Code2 className="size-7" />
                                <span className="text-sm font-bold uppercase tracking-[0.6em] italic">Elite Sovereign Payload Compiled</span>
                              </div>
                              <Button variant="ghost" size="icon" className="size-14 hover:bg-red-600/20 rounded-2xl shadow-2xl transition-all" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Payload Extracted" });
                              }}>
                                <Copy className="size-7" />
                              </Button>
                           </div>
                           <div className="rounded-[3.5rem] border-2 border-red-500/40 overflow-hidden bg-black shadow-[0_0_60px_rgba(239,68,68,0.2)] relative">
                              <div className="absolute top-4 right-10 text-[10px] font-bold text-red-600/20 uppercase tracking-[0.5em]">FUD_ACTIVE // BLACK_HAT_STANDARDS</div>
                              <pre className="p-12 font-code text-base text-emerald-400 overflow-x-auto max-h-[600px] scrollbar-hide">
                                <code>{msg.forgedCode}</code>
                              </pre>
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-16 pt-10 border-t border-white/5 flex gap-10">
                           <Button className="bg-red-600 hover:bg-red-700 text-white h-20 px-14 rounded-[2.5rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(239,68,68,0.5)] group transition-all duration-700 border-2 border-red-400/30 active:scale-95">
                              <Zap className="size-7 mr-4 group-hover:scale-125 transition-transform" /> Full Strike Deployment
                           </Button>
                           <Button variant="outline" className="h-20 px-14 rounded-[2.5rem] border-white/20 bg-white/5 text-[11px] uppercase font-bold tracking-[0.5em] hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-500 border-2">
                              <ShieldX className="size-7 mr-4 text-red-600" /> Simulate Impact
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-10 items-start animate-pulse">
                    <div className="max-w-[92%] rounded-[4rem] p-14 bg-red-950/15 border-2 border-red-600/30 flex items-center gap-10 shadow-2xl">
                      <div className="flex gap-4">
                         <div className="size-5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_15px_red]" />
                         <div className="size-5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_15px_red]" />
                         <div className="size-5 rounded-full bg-red-600 animate-bounce shadow-[0_0_15px_red]" />
                      </div>
                      <span className="text-2xl font-code text-red-500 uppercase tracking-[0.8em] font-bold italic drop-shadow-[0_0_20px_red]">ALPHA NODE IS HARMONIZING THE GALAXY...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-16 border-t-2 border-red-600/40 bg-red-950/10 backdrop-blur-3xl shadow-[0_-30px_100px_rgba(0,0,0,0.9)]">
              <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSend} className="relative group">
                  <div className="absolute left-14 top-1/2 -translate-y-1/2 text-red-600/30 group-focus-within:text-red-600 transition-all duration-1000">
                    <Skull className="size-14 group-hover:rotate-12" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Supreme Directive for the Predator (e.g., 'Infiltrate HQ via Shadow Node X01')..."
                    className="w-full bg-black/90 border-2 border-red-600/40 pl-36 pr-44 py-16 font-code text-3xl focus-visible:ring-red-600/40 focus-visible:border-red-600 rounded-[5rem] shadow-[0_30px_100px_rgba(0,0,0,0.9)] transition-all placeholder:text-red-950/40 text-white italic"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-12 top-1/2 -translate-y-1/2 size-24 bg-red-600 hover:bg-red-700 rounded-[3rem] shadow-[0_0_60px_rgba(239,68,68,0.6)] group transition-all duration-700 active:scale-90 border-2 border-red-400/40"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-14 animate-spin text-white" /> : <Flame className="size-14 group-hover:scale-125 transition-all duration-700" />}
                  </Button>
                </form>
                <div className="mt-12 flex justify-between items-center px-16">
                   <div className="flex gap-12">
                      {['SYNCHRONIZED', 'ARMED', 'AUTO_FORGE', 'SHADOW_GRID_ON', 'MASTER_ID_BIND'].map(t => (
                        <div key={t} className="flex items-center gap-3 text-[11px] font-bold text-red-500/80 uppercase tracking-[0.5em] italic">
                           <div className="size-2 rounded-full bg-red-600 shadow-[0_0_10px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[11px] font-code text-muted-foreground uppercase tracking-widest opacity-40 italic font-bold">Supreme Node Input // Exclusively Mastered by Al-Ghazali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
