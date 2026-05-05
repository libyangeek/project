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
  RefreshCcw
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
      // الحصول على خطة العمل من الذكاء الاصطناعي
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

      // تنفيذ الخطوة الأولى تلقائياً إذا كانت تقنية
      if (aiResponse.executionChain && aiResponse.executionChain.length > 0) {
        const firstStep = aiResponse.executionChain[0];
        if (firstStep.module !== "Logic") {
            toast({ title: "Executing: " + firstStep.step });
            // هنا يمكن استدعاء الـ API الحقيقي لتنفيذ الأوامر
        }
      }
      
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
        </header>

        <div className="flex-1 flex min-h-0 relative">
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
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    {msg.chain && (
                      <div className="mt-8 space-y-4">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">Planned Kill-Chain:</p>
                        {msg.chain.map((c, idx) => (
                          <div key={idx} className="text-xs text-gray-400 bg-white/5 p-3 rounded-lg border border-white/10">
                            [{c.agent}] {c.step}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-primary animate-pulse italic">Thinking...</div>}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

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
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
