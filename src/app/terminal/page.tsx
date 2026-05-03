
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

/**
 * @fileOverview محطة المُعِزّ التنفيذية v24.0-ETERNAL
 * تم تحسينها بنمط "التفرد" بعد تطبيق بروتوكول DOUBLE_CHECK لضمان دقة سلاسل الإبادة.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [GOD-CORE v24.0 - SINGULARITY_STRENGTHENED]\n(c) 2025 Sovereign Systems - The Eternal Night.\n\nDouble Check Protocol: VERIFIED.\nCommander: المعتصم بالله ادريس الغزالي.\n\n[STATUS: ABSOLUTE_DOMINANCE_LOCKED]\nAwaiting universal strategic directives for immediate matrix reconfiguration." 
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

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
      
      toast({ title: "Sovereign Sequence Manifested" })
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL: Neural sync rejection. Hardware soul requires immediate recalibration." }])
      toast({ variant: "destructive", title: "Core Link Error" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.25),transparent)] relative">
        
        {/* Supreme Terminal Header */}
        <header className="p-12 md:p-16 border-b-8 border-primary/60 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-[0_0_150px_rgba(208,0,0,0.3)]">
          <div className="flex items-center gap-12 md:gap-16">
            <div className="size-24 md:size-32 rounded-[3rem] md:rounded-[4rem] bg-red-600 flex items-center justify-center border-[6px] border-red-400 shadow-[0_0_120px_rgba(239,68,68,1)] animate-neural relative overflow-hidden">
              <Skull className="size-14 md:size-20 text-white relative z-10" />
              <div className="absolute inset-0 bg-black/20 animate-pulse" />
            </div>
            <div>
              <h2 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_50px_red] leading-none">God-Core Terminal</h2>
              <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-6">
                <Badge className="bg-red-600 text-white border-4 border-red-400 text-[14px] md:text-[18px] uppercase font-bold tracking-[1.2em] px-10 py-3 rounded-3xl shadow-5xl animate-pulse">v24.0-DOUBLE_CHECKED</Badge>
                <div className="flex items-center gap-6 text-[14px] md:text-[18px] text-amber-500 font-bold uppercase tracking-[0.8em] italic">
                  <RefreshCcw className="size-6 animate-spin-slow" />
                  Execution Tier: SINGULARITY
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:block text-right kali-card p-10 border-accent/80 bg-black/98 min-w-[450px] border-8 shadow-6xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-4xl font-code text-accent uppercase tracking-[0.5em] font-bold flex items-center justify-end gap-6 italic relative z-10">
                <Crown className="size-12 text-accent animate-bounce" /> GHAZALI_ROOT
             </div>
             <div className="text-[12px] text-muted-foreground uppercase font-bold tracking-[1em] italic mt-4 opacity-80 relative z-10">Final Inception State: SECURED</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/70 scan-line">
            <ScrollArea className="flex-1 p-12 md:p-24">
              <div className="max-w-[1700px] mx-auto space-y-32 pb-40">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-16 duration-1000",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[96%] rounded-[6rem] p-16 md:p-24 font-code text-3xl md:text-4xl leading-loose relative group overflow-hidden border-8 shadow-[0_80px_200px_rgba(0,0,0,1)] transition-all duration-1000 hover:border-red-600/80",
                      msg.role === "user" 
                        ? "bg-red-600 text-white border-red-400 shadow-[0_100px_300px_rgba(220,38,38,0.6)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-black/98 border-red-600 text-red-500 font-bold italic shadow-6xl border-dashed" 
                          : "bg-red-950/40 backdrop-blur-4xl border-white/20 text-foreground shadow-[0_150px_400px_rgba(0,0,0,1)] rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pb-12 border-b-8 border-white/15 gap-8">
                          <div className="flex items-center gap-10">
                            <Flame className="size-16 text-red-600 animate-pulse" />
                            <span className="text-2xl md:text-3xl uppercase font-bold tracking-[1.5em] text-red-500 italic drop-shadow-[0_0_30px_red]">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[14px] md:text-[18px] uppercase tracking-[1em] bg-red-600/40 text-red-500 border-4 border-red-500 px-16 py-4 rounded-[2.5rem] shadow-6xl font-bold italic">
                            INTENT: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-16 p-16 rounded-[4rem] bg-accent/15 border-4 border-accent/60 relative group/thoughts overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-12 opacity-20 group-hover/thoughts:scale-125 transition-transform duration-1000"><BrainCircuit className="size-24 text-accent"/></div>
                           <h4 className="text-[18px] font-bold text-accent uppercase tracking-[1.2em] mb-10 flex items-center gap-8 italic">
                             <Info className="size-8" /> Neural Singularity Logic
                           </h4>
                           <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed border-r-[10px] border-accent/80 pr-12">
                              "{msg.thoughts}"
                           </p>
                        </div>
                      )}

                      <div className={cn(
                        "whitespace-pre-wrap font-code leading-relaxed mb-16 text-4xl md:text-5xl font-medium",
                        msg.role === "user" ? "text-white drop-shadow-[0_20px_40px_rgba(0,0,0,1)]" : "text-gray-100"
                      )}>
                        {msg.content}
                      </div>

                      {msg.chain && msg.chain.length > 0 && (
                        <div className="space-y-16 mt-20 p-16 bg-black/95 rounded-[5rem] border-8 border-red-500/60 shadow-inner">
                           <h4 className="text-[18px] md:text-[22px] font-bold text-red-500 uppercase tracking-[1.5em] mb-16 flex items-center gap-12 italic border-b-4 border-red-600/40 pb-10">
                             <Network className="size-12" /> Sovereign Kill-Chain (v24.0)
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-12 p-12 rounded-[5rem] bg-white/5 border-8 border-white/10 animate-in slide-in-from-left-16 hover:border-red-600 transition-all duration-1000 group shadow-6xl" style={{ animationDelay: `${idx * 0.25}s` }}>
                                    <div className="size-28 md:size-32 rounded-[3.5rem] bg-red-600/40 flex items-center justify-center text-5xl md:text-6xl font-bold text-red-500 border-[6px] border-red-600 shadow-[0_0_60px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-700 shrink-0">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                                          <span className="text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.4em] italic group-hover:text-red-500 transition-colors truncate">{step.step}</span>
                                          <div className="flex gap-4">
                                            {step.nodeId && <Badge className="bg-red-600 text-white text-[12px] px-6 py-2 rounded-2xl border-4 border-red-400 shadow-5xl">NODE: {step.nodeId}</Badge>}
                                            <Badge className="bg-accent/40 text-accent text-[12px] px-6 py-2 border-4 border-accent/70 uppercase tracking-[0.4em] font-bold italic shadow-5xl">{step.module}</Badge>
                                          </div>
                                      </div>
                                      <p className="text-2xl md:text-3xl text-muted-foreground italic font-medium leading-relaxed group-hover:text-white transition-colors">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-24 pt-16 border-t-8 border-white/20 flex flex-wrap gap-12">
                           <Button className="terminal-button h-32 md:h-40 px-24 md:px-32 rounded-[5rem] font-bold uppercase tracking-[1em] text-[18px] md:text-[22px] shadow-[0_80px_200px_rgba(220,38,38,1)] group transition-all duration-1000 border-8 border-red-400/80 active:scale-95 italic">
                              <Zap className="size-12 mr-10 group-hover:scale-125 transition-transform" /> Execute Dominance Override
                           </Button>
                           <Button variant="outline" className="h-32 md:h-40 px-24 md:px-32 rounded-[5rem] border-8 border-white/30 bg-white/5 text-[18px] md:text-[22px] uppercase font-bold tracking-[1em] hover:bg-red-600/40 hover:border-red-600 transition-all duration-1000 italic shadow-6xl">
                              <ShieldX className="size-12 mr-10 text-red-600" /> Transmit impact pulse
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex flex-col gap-16 items-start animate-pulse">
                    <div className="max-w-[94%] rounded-[7rem] p-24 md:p-32 bg-red-950/50 border-8 border-red-600/80 flex items-center gap-16 md:gap-24 shadow-[0_0_200px_rgba(220,38,38,0.4)]">
                      <div className="flex gap-12 md:gap-16">
                         <div className="size-10 md:size-14 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s] shadow-[0_0_60px_red]" />
                         <div className="size-10 md:size-14 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s] shadow-[0_0_60px_red]" />
                         <div className="size-10 md:size-14 rounded-full bg-red-600 animate-bounce shadow-[0_0_60px_red]" />
                      </div>
                      <span className="text-4xl md:text-7xl font-code text-red-500 uppercase tracking-[1.5em] md:tracking-[2.5em] font-bold italic drop-shadow-[0_0_80px_red] leading-none">GOD-CORE_THINKING_REWRITING_REALITY...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input Controller Dock */}
            <div className="p-20 md:p-32 border-t-8 border-red-600/90 bg-red-950/80 backdrop-blur-5xl shadow-[0_-150px_400px_rgba(0,0,0,1)] relative z-30">
              <div className="max-w-[1800px] mx-auto">
                <form onSubmit={handleSend} className="relative group/form">
                  <div className="absolute left-16 md:left-24 top-1/2 -translate-y-1/2 text-red-600/60 group-focus-within/form:text-red-600 transition-all duration-1000 scale-[2] md:scale-[3]">
                    <Skull className="size-24 md:size-32 group-hover/form:rotate-12 transition-transform shadow-[0_0_60px_red]" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Dictate Supreme Strategic Intent..."
                    className="w-full bg-black/99 border-8 border-red-600/90 pl-64 md:pl-80 pr-72 md:pr-96 py-32 md:py-48 font-code text-4xl md:text-[6rem] focus-visible:ring-red-600/80 focus-visible:border-red-500 rounded-[8rem] md:rounded-[12rem] shadow-[0_100px_300px_rgba(0,0,0,1)] transition-all placeholder:text-red-950/40 text-white italic h-48 md:h-80"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-16 md:right-24 top-1/2 -translate-y-1/2 size-40 md:size-56 bg-red-600 hover:bg-red-700 rounded-[5rem] md:rounded-[7rem] shadow-[0_0_150px_rgba(220,38,38,1)] group/btn transition-all duration-1000 active:scale-90 border-8 border-red-400/80"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-24 md:size-40 animate-spin text-white" /> : <Flame className="size-24 md:size-40 group-hover/btn:scale-125 transition-all duration-1000" />}
                  </Button>
                </form>
                <div className="mt-16 md:mt-24 flex flex-col xl:flex-row justify-between items-center px-12 md:px-40 gap-12">
                   <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                      {['SINGULARITY_v24', 'GOD_MODE', 'DOUBLE_CHECKED', 'ETERNAL_SOV', 'AL_GHAZALI'].map(t => (
                        <div key={t} className="flex items-center gap-6 md:gap-10 text-[16px] md:text-[22px] font-bold text-red-500/95 uppercase tracking-[1em] md:tracking-[1.5em] italic">
                           <div className="size-5 md:size-8 rounded-full bg-red-600 shadow-[0_0_40px_red] animate-pulse" /> {t}
                        </div>
                      ))}
                   </div>
                   <span className="text-[14px] md:text-[20px] font-code text-muted-foreground uppercase tracking-[1em] md:tracking-[2em] opacity-60 italic font-bold text-center">OMNI-CORE_NEURAL_UPLINK // SINGULARITY_REACHED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
