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
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent)]">
        {/* Predator Terminal Header */}
        <header className="p-8 border-b border-red-600/20 flex items-center justify-between bg-red-950/20 backdrop-blur-3xl z-20">
          <div className="flex items-center gap-6">
            <div className="size-16 rounded-[2rem] bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_40px_rgba(239,68,68,0.4)] animate-pulse">
              <Skull className="size-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-headline font-bold text-white tracking-tighter italic uppercase">Alpha Predator Core</h2>
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-red-600 text-white border-red-400 text-[11px] uppercase font-bold tracking-[0.5em] px-3 py-0.5 rounded-lg">ORCHESTRATOR ARMED</Badge>
                <div className="flex items-center gap-3 text-[10px] text-red-400 font-bold uppercase tracking-widest">
                  <span className="size-2.5 rounded-full bg-red-600 animate-ping shadow-[0_0_8px_red]" />
                  Chain Sync: 100%
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
             <div className="text-right">
                <div className="text-[12px] font-code text-red-500 uppercase tracking-widest font-bold">Combat Protocol v18.0</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest italic mt-1">Multi-Node Autonomous Hub</div>
             </div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/60">
            <ScrollArea className="flex-1 p-10">
              <div className="max-w-6xl mx-auto space-y-12 pb-10">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[94%] rounded-[3rem] p-10 font-code text-lg leading-relaxed relative group overflow-hidden border",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-500 shadow-[0_20px_50px_rgba(239,68,68,0.2)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/80 border-red-600/30 text-red-500 font-bold italic" 
                          : "bg-red-950/10 backdrop-blur-3xl border-white/10 text-foreground shadow-2xl rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                          <div className="flex items-center gap-4">
                            <Flame className="size-6 text-red-600 animate-bounce" />
                            <span className="text-[13px] uppercase font-bold tracking-[0.6em] text-red-500">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[10px] uppercase tracking-[0.2em] bg-red-600/10 text-red-500 border-red-500/20 px-4 py-1 rounded-xl">
                            Protocol: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-loose mb-8",
                        msg.role === "user" ? "text-white" : "text-gray-100"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && (
                        <div className="space-y-8 mt-10 p-8 bg-black/60 rounded-[2.5rem] border border-red-500/10 shadow-inner">
                           <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-[0.6em] mb-6 flex items-center gap-3">
                             <Crosshair className="size-4" /> Autonomous Execution Chain
                           </h4>
                           {msg.chain.map((step, idx) => (
                             <div key={idx} className="flex gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 animate-in slide-in-from-left-4 hover:border-red-500/30 transition-all" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="size-10 rounded-2xl bg-red-600/20 flex items-center justify-center text-sm font-bold text-red-500 border border-red-600/40 shadow-lg">
                                  {idx + 1}
                                </div>
                                <div className="flex-1">
                                   <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm font-bold text-white uppercase tracking-widest">{step.step}</span>
                                      <Badge className="bg-emerald-500/20 text-emerald-500 text-[10px] h-6 px-4 rounded-lg">LINKED: {step.module.toUpperCase()}</Badge>
                                   </div>
                                   <p className="text-xs text-muted-foreground italic font-medium">"{step.action}"</p>
                                </div>
                             </div>
                           ))}
                        </div>
                      )}

                      {msg.forgedCode && (
                        <div className="mt-10 space-y-6">
                           <div className="flex items-center justify-between text-red-500">
                              <div className="flex items-center gap-3">
                                <Code2 className="size-5" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Predator Payload Compiled</span>
                              </div>
                              <Button variant="ghost" size="icon" className="size-10 hover:bg-red-600/20 rounded-xl" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Payload Copied" });
                              }}>
                                <Copy className="size-5" />
                              </Button>
                           </div>
                           <div className="rounded-[2.5rem] border border-red-500/30 overflow-hidden bg-black shadow-2xl">
                              <pre className="p-10 font-code text-sm text-emerald-400 overflow-x-auto max-h-[500px] scrollbar-hide">
                                <code>{msg.forgedCode}</code>
                              </pre>
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-12 pt-8 border-t border-white/5 flex gap-8">
                           <Button className="bg-red-600 hover:bg-red-700 text-white h-14 px-10 rounded-2xl font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-red-600/40 group transition-all">
                              <Zap className="size-5 mr-3 group-hover:scale-125 transition-transform" /> Full Deployment
                           </Button>
                           <Button variant="outline" className="h-14 px-10 rounded-2xl border-white/10 bg-white/5 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-red-600/20 hover:border-red-600/40 transition-all">
                              <ShieldX className="size-5 mr-3 text-red-600" /> Simulate Impact
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-6 items-start animate-pulse">
                    <div className="max-w-[90%] rounded-[3rem] p-10 bg-red-950/10 border border-red-600/20 flex items-center gap-8">
                      <div className="flex gap-2">
                         <div className="size-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
                         <div className="size-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
                         <div className="size-3 rounded-full bg-red-600 animate-bounce" />
                      </div>
                      <span className="text-lg font-code text-red-500 uppercase tracking-[0.6em] font-bold italic drop-shadow-[0_0_10px_red]">ALPHA NODE IS ORCHESTRATING STRIKE CHAIN...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-12 border-t border-red-600/30 bg-red-950/5 backdrop-blur-3xl">
              <div className="max-w-6xl mx-auto">
                <form onSubmit={handleSend} className="relative group">
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within:text-red-600 transition-all">
                    <Skull className="size-10" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Define strategic objective for the Predator (e.g., 'Breach mobile unit #42 via cloud-native bypass')..."
                    className="w-full bg-black/80 border-red-600/40 pl-24 pr-32 py-12 font-code text-2xl focus-visible:ring-red-600/40 focus-visible:border-red-600 rounded-[4rem] shadow-[0_20px_70px_rgba(0,0,0,0.8)] transition-all placeholder:text-red-900/40 text-white"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-8 top-1/2 -translate-y-1/2 size-20 bg-red-600 hover:bg-red-700 rounded-[2.5rem] shadow-[0_0_50px_rgba(239,68,68,0.5)] group"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-10 animate-spin" /> : <Flame className="size-10 group-hover:scale-125 transition-all" />}
                  </Button>
                </form>
                <div className="mt-8 flex justify-between items-center px-8">
                   <div className="flex gap-8">
                      {['SYNCHRONIZED', 'ARMED', 'AUTO_FORGE', 'FUD_ACTIVE'].map(t => (
                        <div key={t} className="flex items-center gap-2 text-[10px] font-bold text-red-500/70 uppercase tracking-[0.4em]">
                           <div className="size-1.5 rounded-full bg-red-600 shadow-[0_0_8px_red]" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[10px] font-code text-muted-foreground uppercase tracking-widest opacity-40 italic">Alpha Node Command Input // Predator v18.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}