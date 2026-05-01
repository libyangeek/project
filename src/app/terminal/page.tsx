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
  Search, 
  Smartphone,
  Database,
  History,
  Info,
  Hammer,
  Code2,
  Copy,
  Wrench
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
  forgedCode?: string
  forgedAnalysis?: string
}

export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [Version 17.5.0-ULTIMATE]\n(c) 2025 Sovereign Systems - Intelligence Division.\n\nNeural link established. Unified Tactical Orchestrator is ACTIVE. All systems operational." 
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
        content: result.generatedResponse,
        model: result.selectedModel,
        intent: result.intentCategory,
        forgedCode: result.forgedToolCode,
        forgedAnalysis: result.forgedToolAnalysis
      }])
      
      if (result.forgedToolCode) {
        toast({ title: "Auto-Forge Triggered", description: "A custom tool was forged to handle this scenario." })
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "ERROR: Critical engine failure. Autonomous routing hub is unresponsive." }])
      toast({ variant: "destructive", title: "Core Sync Failure", description: "The neural routing hub encountered a fatal error." })
    } finally {
      setIsLoading(false)
    }
  }

  const quickCommands = [
    { label: "Scan Target URL", icon: Search, cmd: "Run Deep Eye scanner on https://example.com" },
    { label: "Forge Stealth RAT", icon: Hammer, cmd: "Create a Python-based stealth RAT for Linux target" },
    { label: "Mobile Sync", icon: Smartphone, cmd: "Check connected mobile hardware and map vectors" },
    { label: "System Pulse", icon: Activity, cmd: "Generate full platform health report" }
  ]

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(170,76,255,0.03),transparent)]">
        {/* Header */}
        <header className="p-6 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-2xl z-20">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_20px_rgba(170,76,255,0.2)]">
              <TerminalIcon className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-headline font-bold text-white tracking-tight italic">Al-Mu'izz Central Core</h2>
              <div className="flex items-center gap-3 mt-1">
                <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] uppercase font-bold tracking-widest px-2 py-0">
                  <ShieldCheck className="size-3 mr-1" />
                  Sovereign-Admin Level 7
                </Badge>
                <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Tactical Orchestrator Active
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-right hidden md:block">
              <div className="text-xs font-code text-primary uppercase tracking-widest font-bold">Forge-Enabled Mode</div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">Autonomous Script Generation</div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 relative">
          <aside className="w-64 border-r border-white/5 bg-black/20 p-6 hidden xl:flex flex-col gap-8 overflow-y-auto">
             <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] opacity-60">System Awareness</h4>
                <div className="space-y-3">
                   {[
                     { name: "Tool Forge", status: "Linked", color: "bg-primary" },
                     { name: "Neural Router", status: "Active", color: "bg-emerald-500" },
                     { name: "Deep Eye", status: "Armed", color: "bg-red-500" }
                   ].map((node, i) => (
                     <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-[10px] text-white font-medium">{node.name}</span>
                        <div className="flex items-center gap-1.5">
                           <span className={cn("size-1 rounded-full", node.color)} />
                           <span className="text-[8px] uppercase font-bold text-muted-foreground">{node.status}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </aside>

          <div className="flex-1 flex flex-col min-w-0 bg-black/10">
            <ScrollArea className="flex-1 p-8">
              <div className="max-w-5xl mx-auto space-y-8 pb-4">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[90%] rounded-3xl p-6 font-code text-sm leading-relaxed relative group overflow-hidden",
                      msg.role === "user" 
                        ? "bg-primary text-white shadow-[0_10px_30px_rgba(170,76,255,0.2)] rounded-br-none" 
                        : msg.role === "system" 
                          ? "bg-white/5 border border-white/10 text-primary font-bold italic" 
                          : "bg-card/40 backdrop-blur-xl border border-white/5 text-foreground shadow-2xl rounded-bl-none"
                    )}>
                      {msg.role === "assistant" && msg.model && (
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                          <div className="flex items-center gap-2">
                            <Sparkles className="size-3.5 text-primary" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">
                              {msg.model}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-[8px] uppercase tracking-tighter bg-white/5">
                            Intent: {msg.intent}
                          </Badge>
                        </div>
                      )}
                      <pre className="whitespace-pre-wrap font-code leading-loose">
                        {msg.content}
                      </pre>

                      {/* عرض الكود المولد تلقائياً في التيرمينال */}
                      {msg.forgedCode && (
                        <div className="mt-8 space-y-4 animate-in slide-in-from-top-4 duration-700">
                          <div className="flex items-center gap-2 text-primary">
                            <Hammer className="size-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Autonomous Forge Triggered</span>
                          </div>
                          <div className="rounded-2xl border border-primary/20 overflow-hidden bg-black/60 shadow-inner">
                            <div className="p-3 border-b border-white/5 bg-primary/5 flex justify-between items-center">
                              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                <Code2 className="size-3" /> Auto-Generated Payload
                              </span>
                              <Button variant="ghost" size="icon" className="size-6 rounded-lg" onClick={() => {
                                navigator.clipboard.writeText(msg.forgedCode!);
                                toast({ title: "Code Copied" });
                              }}>
                                <Copy className="size-3" />
                              </Button>
                            </div>
                            <pre className="p-4 font-code text-xs text-emerald-400 overflow-x-auto max-h-[300px]">
                              <code>{msg.forgedCode}</code>
                            </pre>
                            {msg.forgedAnalysis && (
                              <div className="p-3 bg-white/5 border-t border-white/5">
                                <p className="text-[9px] text-muted-foreground italic leading-relaxed">
                                  <Info className="size-3 inline mr-1 text-primary"/> {msg.forgedAnalysis}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {msg.role === "assistant" && (
                        <div className="mt-6 pt-4 border-t border-white/5 flex gap-4">
                           <Button variant="ghost" size="sm" className="h-7 text-[9px] uppercase tracking-widest text-muted-foreground hover:text-white">
                              <History className="size-3 mr-2" /> Logs
                           </Button>
                           <Button variant="ghost" size="sm" className="h-7 text-[9px] uppercase tracking-widest text-muted-foreground hover:text-white">
                              <Zap className="size-3 mr-2" /> Execute
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col gap-2 items-start animate-pulse">
                    <div className="max-w-[85%] rounded-2xl p-6 bg-white/5 border border-white/10 flex items-center gap-4">
                      <div className="flex gap-1">
                         <div className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                         <div className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                         <div className="size-1.5 rounded-full bg-primary animate-bounce" />
                      </div>
                      <span className="text-xs font-code text-muted-foreground uppercase tracking-widest font-bold">Al-Mu'izz Orchestrator is analyzing and forging...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input & Quick Actions */}
            <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                   {quickCommands.map((qc, i) => (
                     <Button 
                       key={i} 
                       variant="outline" 
                       size="sm" 
                       className="h-8 bg-white/5 border-white/5 hover:bg-primary/20 hover:border-primary/40 text-[10px] rounded-full px-4 transition-all group"
                       onClick={() => handleSend(undefined, qc.cmd)}
                       disabled={isLoading}
                     >
                       <qc.icon className="size-3 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                       {qc.label}
                     </Button>
                   ))}
                </div>

                <form onSubmit={handleSend} className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <ChevronRight className="size-6" />
                  </div>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter strategic command or request a custom tool..."
                    className="w-full bg-white/5 border-white/5 pl-14 pr-20 py-8 font-code text-lg focus-visible:ring-primary/40 focus-visible:border-primary rounded-[2rem] shadow-2xl transition-all"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-12 bg-primary hover:bg-primary/90 rounded-2xl shadow-xl"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="size-6 animate-spin" /> : <Send className="size-6" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
