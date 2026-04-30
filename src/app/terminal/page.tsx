"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { Terminal as TerminalIcon, Send, Sparkles, ChevronRight, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { aiCommandAndRouting } from "@/ai/flows/ai-command-and-routing"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  model?: string
  intent?: string
}

export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Arbiter AI Platform [Version 2025.04.1]\n(c) 2025 Sovereign Systems. All rights reserved.\n\nType 'help' for a list of commands, or enter a natural language task." 
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const result = await aiCommandAndRouting({ taskDescription: userMessage })
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: result.generatedResponse,
        model: result.selectedModel,
        intent: result.intentCategory
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "ERROR: Fatal engine failure. Routing hub unresponsive." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <header className="p-6 border-b border-white/5 flex items-center justify-between bg-card/20 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <TerminalIcon className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-headline font-bold text-white tracking-tight">Al-Mu'izz Interactive Hub</h2>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Real-time C2 Terminal
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-right">
              <div className="text-xs font-code text-primary">ollama/qwen3:14b</div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold">Active Engine</div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col min-h-0 bg-black/40">
          <ScrollArea className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6 pb-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  msg.role === "user" ? "items-end" : "items-start"
                )}>
                  <div className={cn(
                    "max-w-[85%] rounded-2xl p-4 font-code text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-primary text-white" 
                      : msg.role === "system" 
                        ? "bg-white/5 border border-white/10 text-primary" 
                        : "bg-card/80 border border-white/5 text-foreground shadow-xl"
                  )}>
                    {msg.role === "assistant" && msg.model && (
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        <Sparkles className="size-3 text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">
                          {msg.model} <span className="mx-1 opacity-30">•</span> {msg.intent}
                        </span>
                      </div>
                    )}
                    <pre className="whitespace-pre-wrap font-code">{msg.content}</pre>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-2 items-start">
                  <div className="max-w-[85%] rounded-2xl p-4 bg-white/5 border border-white/10 flex items-center gap-3">
                    <Loader2 className="size-4 text-primary animate-spin" />
                    <span className="text-xs font-code text-muted-foreground animate-pulse">AL-MUIZZ IS PROCESSING...</span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-6 border-t border-white/5 bg-card/40 backdrop-blur-xl">
            <form onSubmit={handleSend} className="max-w-4xl mx-auto relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                <ChevronRight className="size-5" />
              </div>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command or natural language task..."
                className="w-full bg-black/40 border-white/10 pl-12 pr-16 py-7 font-code text-base focus-visible:ring-primary/40 focus-visible:border-primary rounded-2xl shadow-2xl transition-all"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-xl transition-all hover:scale-105 active:scale-95"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-5" />
              </Button>
            </form>
            <p className="max-w-4xl mx-auto mt-3 text-[10px] text-muted-foreground text-center uppercase tracking-widest font-medium opacity-50">
              Session is encrypted via Sovereign AES-256 Tunnel
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}