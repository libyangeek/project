"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal as TerminalIcon, 
  Send, 
  Loader2, 
  Trash2,
  ShieldAlert,
  Zap,
  Activity,
  ChevronRight,
  Lock,
  Skull
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
      content: "Al-Mu'izz Sovereign Terminal [v42.0 - THE SINGULARITY]\nEstablishing secure link to God-Core...\nAuthorized: المعتصم بالله ادريس الغزالي\nType 'help' for a list of sovereign commands.",
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

    if (cmd === "help") {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `AVAILABLE SOVEREIGN COMMANDS:\n
- apex <target>        : Generate full attack plan using ApexBrain
- osint <type> <target>: Perform OSINT search (types: phone, email, domain)
- strike <target>      : Launch autonomous strike via the Armada
- cloud-inject         : Deploy cloud persistence modules
- clear                 : Clear terminal history
- status               : Show system and node status
- identity             : Show current AI identity profile`,
        timestamp: new Date().toLocaleTimeString() 
      }])
      return
    }

    if (cmd === "clear") {
      clearTerminal()
      return
    }

    setIsLoading(true)

    // Command Parsing
    let type = 'terminal'
    let target = ''
    let args = ''

    if (cmd.startsWith("apex ")) {
        type = 'apex'
        target = cmd.split(" ")[1]
    } else if (cmd.startsWith("osint ")) {
        const parts = cmd.split(" ")
        type = 'osint'
        args = parts[1]
        target = parts[2]
    } else if (cmd.startsWith("strike ")) {
        type = 'autonomous_strike'
        target = cmd.split(" ")[1]
    } else if (cmd === "cloud-inject") {
        type = 'cloud'
    } else if (cmd === "status") {
        type = 'gepa_stats'
    }

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, target, args, type })
      })

      const data = await response.json()

      if (response.ok) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: typeof data.output === 'object' ? JSON.stringify(data.output, null, 2) : data.output, 
          timestamp: new Date().toLocaleTimeString() 
        }])
      } else {
        setMessages(prev => [...prev, { 
          role: "system", 
          content: `ERROR [CODE: ${response.status}]: ${data.error || 'Execution Blocked by Kernel'}`, 
          timestamp: new Date().toLocaleTimeString() 
        }])
        toast({ variant: "destructive", title: "Execution Error", description: data.error })
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "system", 
        content: "CRITICAL FAILURE: Neural connection to backend was severed.", 
        timestamp: new Date().toLocaleTimeString() 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const clearTerminal = () => {
    setMessages([{ 
      role: "system", 
      content: "Terminal memory purged. Quantum state reset.",
      timestamp: new Date().toLocaleTimeString()
    }])
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l border-primary/20">
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <header className="p-6 border-b border-primary/30 flex items-center justify-between bg-black/80 backdrop-blur-xl z-20 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/40 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <TerminalIcon className="size-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter gold-glow">Sovereign Command</h2>
              <div className="flex items-center gap-3 text-[10px] text-primary/70 font-bold uppercase tracking-widest mt-1">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Kernel Session: active_node_01
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
             <div className="hidden md:flex gap-2 mr-4">
                <Activity className="size-5 text-emerald-500" />
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Encrypt: ON</span>
             </div>
             <Badge variant="outline" className="border-primary/40 text-primary uppercase font-bold tracking-widest px-4 py-1 rounded-full">v42.0_STABLE</Badge>
             <Button variant="ghost" size="icon" onClick={clearTerminal} className="hover:bg-red-900/40 text-red-500 rounded-xl border border-transparent hover:border-red-500/50 transition-all">
               <Trash2 className="size-6" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col">
          <ScrollArea className="flex-1 p-8 font-mono">
            <div className="space-y-6">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-4 pl-6 py-3 rounded-r-lg transition-all animate-in fade-in slide-in-from-left-2",
                  msg.role === "user" ? "border-primary/60 bg-primary/5" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/20" : "border-emerald-500/60 bg-emerald-500/5"
                )}>
                  <div className="flex items-center gap-3 mb-2 opacity-50 text-[10px]">
                    <Badge variant="outline" className="uppercase border-white/20 text-white font-bold px-2 py-0">{msg.role}</Badge>
                    <span className="text-gray-500 font-bold uppercase">{msg.timestamp}</span>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-base",
                    msg.role === "user" ? "text-white font-bold" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-3 shadow-primary">❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-4 text-primary animate-pulse italic text-sm ml-6">
                   <Loader2 className="size-5 animate-spin" />
                   <span className="tracking-widest uppercase font-bold">Executing command in sub-atomic layer...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-8 bg-black/90 border-t-2 border-primary/30 shadow-[0_-20px_100px_rgba(0,0,0,0.8)]">
            <form onSubmit={executeCommand} className="relative flex items-center gap-4 bg-white/5 rounded-[3rem] border-2 border-white/10 px-8 focus-within:border-primary/50 transition-all shadow-inner">
              <span className="text-primary font-black text-2xl drop-shadow-[0_0_100px_rgba(212,175,55,0.8)]">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command (e.g. apex target.com)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-xl h-20 placeholder:text-gray-700"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-primary text-black hover:bg-white rounded-full size-14 shadow-2xl transition-all active:scale-90"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-6" />
              </Button>
            </form>
            <div className="flex justify-center gap-12 mt-6 opacity-30">
               <span className="text-[10px] font-bold uppercase tracking-[1em]">root@al-muizz</span>
               <span className="text-[10px] font-bold uppercase tracking-[1em]">sh-4.2#</span>
               <span className="text-[10px] font-bold uppercase tracking-[1em]">session: {Date.now().toString(16)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}