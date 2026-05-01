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
  ShieldX
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

export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [PREDATOR MODE v18.0]\n(c) 2025 Sovereign Systems - Autonomous Strike Division.\n\nAlpha Node Linked. All strike vectors synchronized. Tactical Orchestrator is ARMED." 
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
        model: "PREDATOR_ALPHA_CORE",
        intent: result.intentCategory,
        chain: result.executionChain,
        forgedCode: result.forgedPayload
      }])
      
      toast({ title: "Attack Chain Initialized", description: "Alpha Node has synchronized all modules." })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Predator node synchronization failed. Check system heartbeat." }])
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent)]">
        {/* Predator Terminal Header */}
        <header className="p-6 border-b border-red-600/20 flex items-center justify-between bg-red-950/10 backdrop-blur-3xl z-20">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-3xl bg-red-600/10 flex items-center justify-center border border-red-600/30 shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-pulse">
              <Skull className="size-7 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold text-white tracking-tighter italic uppercase">Alpha Predator Core</h2>
              <div className="flex items-center gap-3 mt-1">
                <Badge className="bg-red-600 text-white border-red-500/40 text-[10px] uppercase font-bold tracking-[0.4em] px-2 py-0">ORCHESTRATOR ARMED</Badge>
                <div className="flex items-center gap-2 text-[9px] text-red-400 font-bold uppercase tracking-widest">
                  <span className="size-2 rounded-full bg-red-600 animate-ping" />
                  Chain Sync: 100%
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
             <div className="text-right">
                <div className="text-[10px] font-code text-red-500 uppercase tracking-widest font-bold">Combat Protocol v18.0</div>
                <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-tighter italic">Multi-Node Autonomous Hub</div>
             </div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/40">
            <ScrollArea className="flex-1 p-8">
              <div className="max-w-5xl mx-auto space-y-10 pb-8">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[92%] rounded-[2.5rem] p-8 font-code text-base leading-relaxed relative group overflow-hidden border",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-500 shadow-[0_15px_40px_rgba(239,68,68,0.2)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/60 border-red-600/30 text-red-500 font-bold italic" 
                          : "bg-red-950/10 backdrop-blur-2xl border-white/5 text-foreground shadow-2xl rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                          <div className="flex items-center gap-3">
                            <Flame className="size-5 text-red-600 animate-bounce" />
                            <span className="text-[11px] uppercase font-bold tracking-[0.5em] text-red-500">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[9px] uppercase tracking-tighter bg-red-600/10 text-red-500 border-red-500/20">
                            Protocol: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-loose mb-6",
                        msg.role === "user" ? "text-white" : "text-gray-100"
                      )}>
                        {msg.content}
                      </div>

                      {/* Display Attack Chain Steps */}
                      {msg.chain && (
                        <div className="space-y-6 mt-8 p-6 bg-black/40 rounded-3xl border border-white/5">
                           <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-[0.5em] mb-4 flex items-center gap-2">
                             <Crosshair className="size-3" /> Autonomous Execution Chain
                           </h4>
                           {msg.chain.map((step, idx) => (
                             <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 animate-in slide-in-from-left-4" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="size-8 rounded-xl bg-red-600/20 flex items-center justify-center text-xs font-bold text-red-500 border border-red-600/30">
                                  {idx + 1}
                                </div>
                                <div className="flex-1">
                                   <div className="flex justify-between items-center mb-1">
                                      <span className="text-xs font-bold text-white uppercase tracking-tighter">{step.step}</span>
                                      <Badge className="bg-emerald-500/20 text-emerald-500 text-[8px] h-4.5">LINKED: {step.module.toUpperCase()}</Badge>
                                   </div>
                                   <p className="text-[10px] text-muted-foreground italic">"{step.action}"</p>
                                </div>
                             </div>
                           ))}
                        </div>
                      )}

                      {/* Display Forged Payload in Chain */}
                      {msg.forgedCode && (
                        <div className="mt-8 space-y-4">
                           <div className="flex items-center justify-between text-red-500">
                              <div className="flex items-center gap-2">
                                <Code2 className="size-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Predator Payload Compiled</span>
                              </div>
                              <Button variant="ghost" size="icon" className="size-8 hover:bg-red-600/20" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Payload Copied" });
                              }}>
                                <Copy className="size-4" />
                              </Button>
                           </div>
                           <div className="rounded-3xl border border-red-500/30 overflow-hidden bg-black shadow-inner">
                              <pre className="p-8 font-code text-xs text-emerald-400 overflow-x-auto max-h-[400px]">
                                <code>{msg.forgedCode}</code>
                              </pre>
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-10 pt-6 border-t border-white/5 flex gap-6">
                           <Button className="bg-red-600 hover:bg-red-500 text-white h-10 px-8 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-red-600/20 group">
                              <Zap className="size-4 mr-2 group-hover:scale-125 transition-transform" /> FULL DEPLOYMENT
                           </Button>
                           <Button variant="outline" className="h-10 px-8 rounded-xl border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10">
                              <ShieldX className="size-4 mr-2 text-red-500" /> SIMULATE IMPACT
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-4 items-start animate-pulse">
                    <div className="max-w-[90%] rounded-3xl p-8 bg-red-950/10 border border-red-600/20 flex items-center gap-6">
                      <div className="flex gap-1.5">
                         <div className="size-2 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
                         <div className="size-2 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
                         <div className="size-2 rounded-full bg-red-600 animate-bounce" />
                      </div>
                      <span className="text-sm font-code text-red-500 uppercase tracking-[0.5em] font-bold italic">ALPHA NODE IS ORCHESTRATING STRIKE CHAIN...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Predator Input Box */}
            <div className="p-10 border-t border-red-600/20 bg-red-950/5 backdrop-blur-3xl">
              <div className="max-w-5xl mx-auto">
                <form onSubmit={handleSend} className="relative group">
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 text-red-600/50 group-focus-within:text-red-600 transition-all">
                    <Skull className="size-8" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter strategic objective for Predator Mode (e.g., 'Full extraction of mobile unit #42 via shadow bypass')..."
                    className="w-full bg-black/60 border-red-600/30 pl-20 pr-24 py-10 font-code text-xl focus-visible:ring-red-600/40 focus-visible:border-red-600 rounded-[3rem] shadow-2xl transition-all placeholder:text-red-900/50 text-white"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-6 top-1/2 -translate-y-1/2 size-16 bg-red-600 hover:bg-red-500 rounded-3xl shadow-[0_0_30px_rgba(239,68,68,0.4)] group"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-8 animate-spin" /> : <Flame className="size-8 group-hover:scale-125 transition-all" />}
                  </Button>
                </form>
                <div className="mt-6 flex justify-between items-center px-4">
                   <div className="flex gap-4">
                      {['SYNCHRONIZED', 'ARMED', 'AUTO_FORGE'].map(t => (
                        <div key={t} className="flex items-center gap-1.5 text-[8px] font-bold text-red-500/60 uppercase tracking-[0.3em]">
                           <div className="size-1 rounded-full bg-red-600" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[9px] font-code text-muted-foreground uppercase tracking-widest">Alpha Node Command Input // v18.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
