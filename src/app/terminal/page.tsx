"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Loader2, 
  Crown, 
  Activity,
  BrainCircuit,
  Cpu,
  Trash2
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
}

export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [v42.0 - THE SINGULARITY]\nAuthorized access only. All actions are logged.\nCommander: المعتصم بالله ادريس الغزالي",
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  const executeCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isLoading) return

    const cmd = input.trim()
    const time = new Date().toLocaleTimeString()
    
    setMessages(prev => [...prev, { role: "user", content: cmd, timestamp: time }])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, type: 'terminal' })
      })

      const data = await response.json()

      if (response.ok) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.output, 
          timestamp: new Date().toLocaleTimeString() 
        }])
      } else {
        setMessages(prev => [...prev, { 
          role: "system", 
          content: `ERROR: ${data.error}`, 
          timestamp: new Date().toLocaleTimeString() 
        }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "system", 
        content: "CRITICAL: Connection to backend failed.", 
        timestamp: new Date().toLocaleTimeString() 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const clearTerminal = () => {
    setMessages([{ 
      role: "system", 
      content: "Terminal cleared. Session resumed.",
      timestamp: new Date().toLocaleTimeString()
    }])
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative">
        
        <header className="p-4 border-b border-primary/30 flex items-center justify-between bg-black/50 backdrop-blur-md z-20">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <TerminalIcon className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase italic tracking-wider">Sovereign Command</h2>
              <div className="flex items-center gap-3 text-[10px] text-primary/70 font-bold uppercase tracking-widest">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Connection
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={clearTerminal} className="hover:bg-red-900/20 text-red-500">
            <Trash2 className="size-5" />
          </Button>
        </header>

        <div className="flex-1 flex min-h-0 flex-col">
          <ScrollArea className="flex-1 p-4 font-mono text-sm">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-2 pl-4 py-1",
                  msg.role === "user" ? "border-primary/50" : 
                  msg.role === "system" ? "border-red-600/50 bg-red-950/10" : "border-emerald-500/50"
                )}>
                  <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px]">
                    <span className="uppercase">{msg.role}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-2">#</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-primary animate-pulse italic text-xs">
                   <Loader2 className="size-4 animate-spin" />
                   Processing Request...
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-4 bg-black border-t border-primary/20">
            <form onSubmit={executeCommand} className="relative flex items-center gap-2">
              <span className="text-primary font-bold ml-2">#</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command (e.g. nmap -F 127.0.0.1)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono placeholder:text-gray-700"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-primary text-black hover:bg-white"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}