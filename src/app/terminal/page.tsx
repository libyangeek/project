"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Loader2, 
  ShieldCheck, 
  Zap, 
  Crown, 
  Activity,
  BrainCircuit,
  Sparkles,
  RefreshCcw,
  Cpu,
  ChevronRight
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
      const aiResponse = await aiCommandAndRouting({ 
        taskDescription: userMessage,
        mode: 'Armada'
      })

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: aiResponse.strategicResponse,
        model: "ALPHA_CORE",
        intent: aiResponse.intentCategory,
        chain: aiResponse.executionChain,
        thoughts: aiResponse.thoughts
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
          <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-[1em] text-muted-foreground italic">
             <span>Latency: 2ms</span>
             <span className="text-emerald-500 shadow-[0_0_20px_emerald]">UPLINK_STABLE</span>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <ScrollArea className="flex-1 p-6 md:p-10">
            <div className="max-w-6xl mx-auto space-y-12 pb-32">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000",
                  msg.role === "user" ? "items-end" : "items-start"
                )}>
                  <div className={cn(
                    "max-w-[90%] rounded-[3.5rem] p-8 md:p-16 font-code text-base md:text-xl leading-relaxed relative group overflow-hidden border-[6px] shadow-7xl transition-all duration-1000",
                    msg.role === "user" 
                      ? "bg-primary/20 border-primary/50 text-white rounded-br-none shadow-primary/20" 
                      : msg.role === "system" 
                        ? "bg-black/90 border-primary/60 text-primary font-bold italic border-dashed rounded-[2rem]" 
                        : "bg-black/95 border-white/10 text-gray-100 rounded-bl-none hover:border-primary/40"
                  )}>
                    {msg.role === "assistant" && (
                      <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-white/10">
                        <div className="flex items-center gap-5">
                          <BrainCircuit className="size-8 text-primary animate-pulse" />
                          <span className="text-sm md:text-lg uppercase font-bold tracking-[0.5em] text-primary italic">
                            {msg.model}
                          </span>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-2 border-primary/40 px-8 py-2 rounded-full font-bold italic tracking-widest">
                          {msg.intent}
                        </Badge>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap drop-shadow-2xl">{msg.content}</div>
                    
                    {msg.thoughts && (
                      <div className="mt-10 p-8 bg-white/5 rounded-[2.5rem] border-2 border-white/5 italic text-sm md:text-base text-muted-foreground leading-loose">
                         <h5 className="font-bold text-primary/60 uppercase tracking-[1em] mb-4 flex items-center gap-4"><Cpu className="size-5" /> Cognitive Process</h5>
                         {msg.thoughts}
                      </div>
                    )}

                    {msg.chain && (
                      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {msg.chain.map((c, idx) => (
                          <div key={idx} className="flex items-center gap-6 p-6 bg-primary/5 border-2 border-primary/20 rounded-[2rem] group/item hover:border-primary/60 transition-all duration-500 shadow-5xl">
                            <div className="size-10 rounded-xl bg-black border-2 border-primary/40 flex items-center justify-center text-primary font-bold shadow-lg">{idx + 1}</div>
                            <div className="flex-1">
                               <div className="text-sm font-bold text-white uppercase tracking-widest">{c.agent}</div>
                               <div className="text-xs text-muted-foreground italic font-medium mt-1">{c.step}</div>
                            </div>
                            <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_20px_emerald] animate-pulse" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-6 p-8 bg-primary/5 border-2 border-primary/30 rounded-[3rem] animate-pulse max-w-sm">
                   <Loader2 className="size-10 animate-spin text-primary" />
                   <span className="text-xl font-bold uppercase tracking-[0.5em] text-primary italic">Processing...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black via-black/95 to-transparent z-40">
            <div className="max-w-5xl mx-auto">
              <form onSubmit={handleSend} className="relative group scale-105">
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all duration-700 scale-150">
                  <TerminalIcon className="size-8 drop-shadow-[0_0_20px_gold]" />
                </div>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="EXECUTE STRATEGY..."
                  className="w-full h-24 md:h-32 bg-black border-[6px] border-primary/30 pl-32 pr-28 rounded-[5rem] text-2xl md:text-4xl italic font-bold focus:border-primary/80 shadow-7xl transition-all placeholder:text-primary/10 text-white"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-24 bg-primary text-black hover:bg-white rounded-full shadow-7xl group transition-all active:scale-90 border-4 border-black"
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? <Loader2 className="size-10 animate-spin" /> : <Send className="size-10 group-hover:scale-125 transition-transform" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
