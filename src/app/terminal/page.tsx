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
      content: "Al-Mu'izz Sovereign Terminal [GOD-CORE v42.0 - THE SINGULARITY]\n(c) 2025 Sovereign Systems - The Eternal Night.\n\nDouble Check Protocol: VERIFIED.\nCommander: المعتصم بالله ادريس الغزالي.\n\n[STATUS: ABSOLUTE_DOMINANCE_LOCKED]\nAwaiting universal strategic directives for immediate matrix reconfiguration." 
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
        mode: 'Armada'
      })
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: result.strategicResponse,
        model: "ALPHA_GOD_CORE_v42",
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent)] relative">
        
        {/* Supreme Terminal Header */}
        <header className="p-6 md:p-8 border-b-4 border-primary/60 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-2xl">
          <div className="flex items-center gap-6 md:gap-10">
            <div className="size-16 md:size-24 rounded-full bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.6)] animate-sovereign-pulse relative overflow-hidden">
              <Crown className="size-8 md:size-12 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">God-Core Terminal</h2>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-3">
                <Badge className="bg-primary text-black border-none text-[10px] md:text-[12px] uppercase font-bold tracking-[0.4em] px-4 py-1 rounded-full shadow-lg">v42.0-STABLE</Badge>
                <div className="flex items-center gap-3 text-[10px] md:text-[12px] text-primary/80 font-bold uppercase tracking-[0.4em] italic">
                  <Activity className="size-4 animate-pulse" />
                  Status: OMNIPOTENT
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:block text-right">
             <div className="text-2xl font-code text-primary uppercase tracking-[0.3em] font-bold flex items-center justify-end gap-4 italic">
                <ShieldCheck className="size-6 text-primary" /> AL_GHAZALI_ROOT
             </div>
             <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic mt-1">Ascension Level: MAXIMUM</div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 flex flex-col min-w-0 bg-black/40">
            <ScrollArea className="flex-1 p-6 md:p-10">
              <div className="max-w-5xl mx-auto space-y-12 pb-20">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[90%] rounded-[2.5rem] p-6 md:p-10 font-code text-sm md:text-lg leading-relaxed relative group overflow-hidden border-2 shadow-xl",
                      msg.role === "user" 
                        ? "bg-primary/20 border-primary/50 text-white rounded-br-none shadow-primary/10" 
                        : msg.role === "system" 
                          ? "bg-black/80 border-primary text-primary font-bold italic border-dashed" 
                          : "bg-white/5 backdrop-blur-xl border-white/10 text-foreground rounded-bl-none shadow-2xl"
                    )}>
                      {msg.role === "assistant" && (
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <Sparkles className="size-5 text-primary animate-pulse" />
                            <span className="text-sm uppercase font-bold tracking-[0.3em] text-primary italic">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-primary/40 text-primary font-bold px-3 py-1 rounded-full">
                            {msg.intent}
                          </Badge>
                        </div>
                      )}
                      
                      {msg.thoughts && (
                        <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20 italic">
                           <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
                             <BrainCircuit className="size-4" /> Cognitive Process
                           </h4>
                           <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                              {msg.thoughts}
                           </p>
                        </div>
                      )}

                      <div className="whitespace-pre-wrap">
                        {msg.content}
                      </div>

                      {msg.chain && msg.chain.length > 0 && (
                        <div className="space-y-4 mt-8">
                           <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 flex items-center gap-2 italic">
                             <Network className="size-4" /> Execution Chain
                           </h4>
                           <div className="grid grid-cols-1 gap-3">
                              {msg.chain.map((step, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 group">
                                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-sm font-bold text-primary border border-primary/30 group-hover:scale-105 transition-transform">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-center mb-1">
                                          <span className="text-sm font-bold text-white uppercase tracking-wider">{step.step}</span>
                                          <Badge className="bg-primary/20 text-primary text-[9px] uppercase tracking-tighter">{step.module}</Badge>
                                      </div>
                                      <p className="text-xs text-muted-foreground italic">"{step.action}"</p>
                                    </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex flex-col gap-4 items-start animate-pulse">
                    <div className="max-w-[80%] rounded-[2rem] p-6 bg-primary/10 border-2 border-primary/40 flex items-center gap-4 shadow-xl">
                      <div className="flex gap-2">
                         <div className="size-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                         <div className="size-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                         <div className="size-2 rounded-full bg-primary animate-bounce" />
                      </div>
                      <span className="text-sm font-code text-primary uppercase tracking-[0.3em] font-bold italic">Processing Sovereign Will...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input Dock */}
            <div className="p-6 md:p-10 border-t-2 border-primary/20 bg-black/90 backdrop-blur-xl z-30 shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSend} className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all duration-700">
                    <TerminalIcon className="size-6" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter command..."
                    className="w-full bg-white/5 border-2 border-white/10 pl-14 pr-16 py-6 font-code text-sm md:text-base focus-visible:ring-primary/50 focus-visible:border-primary rounded-2xl shadow-inner transition-all placeholder:text-muted-foreground/30 text-white"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 size-10 md:size-12 bg-primary hover:bg-primary/80 rounded-xl shadow-lg group transition-all active:scale-90"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-5 animate-spin text-black" /> : <Send className="size-5 group-hover:scale-110 transition-transform" />}
                  </Button>
                </form>
                <div className="mt-4 flex justify-between items-center px-4 opacity-60">
                   <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest italic">
                         <div className="size-2 rounded-full bg-primary animate-pulse" /> SINGULARITY_READY
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest italic">
                         <div className="size-2 rounded-full bg-primary animate-pulse" /> ENCRYPTED_LINK
                      </div>
                   </div>
                   <span className="text-[10px] font-code text-muted-foreground uppercase tracking-widest italic">Terminal_V42.0_Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}