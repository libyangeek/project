
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
  Skull,
  Command,
  History,
  Cpu,
  Fingerprint,
  BrainCircuit,
  Sparkles,
  Atom,
  Globe,
  Wifi,
  Radio,
  Signal,
  Network
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { aiCommandAndRouting } from "@/ai/flows/ai-command-and-routing"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
  command?: string
  strategicInsight?: string
  isBroadcasting?: boolean
  clusterData?: string[]
}

/**
 * @fileOverview المحطة السيادية v42.5 - THE GLOBAL SHELL
 * تتيح للقائد إرسال أوامر حقيقية لعصب النظام مع دعم التحليل الكمي والبث العالمي الموزع.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Global Shell [v42.5 - NEURAL SYNC]\nEstablishing global link to 14 Alpha Nodes...\nPresence: Riyadh, Cairo, London, Dubai, Tokyo, New York...\nAuthorized: المعتصم بالله ادريس الغزالي\nType 'help' or 'broadcast <message>' for global grid intent.",
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isThinking, setIsThinking] = React.useState(false)
  const [history, setHistory] = React.useState<string[]>([])
  const [historyIndex, setHistoryIndex] = React.useState(-1)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading, isThinking])

  const analyzeStrategicIntent = async (cmd: string) => {
    if (cmd.length < 5 || cmd.startsWith("/") || cmd.split(" ").length < 2) return null;
    
    setIsThinking(true)
    try {
        const result = await aiCommandAndRouting({ taskDescription: cmd, mode: 'Omniscient' })
        return result.strategicResponse
    } catch (e) {
        return null
    } finally {
        setIsThinking(false)
    }
  }

  const executeCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isLoading) return

    const cmd = input.trim()
    const time = new Date().toLocaleTimeString()
    
    setMessages(prev => [...prev, { role: "user", content: cmd, timestamp: time }])
    setHistory(prev => [cmd, ...prev.slice(0, 49)])
    setHistoryIndex(-1)
    setInput("")

    if (cmd === "help") {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `AVAILABLE SOVEREIGN COMMANDS (GLOBAL):\n
- broadcast <msg>       : Broadcast intent to all 14 global nodes
- neural sync           : Resynchronize all global clusters
- apex <target>        : Generate full attack plan
- osint <type> <target>: Perform OSINT search
- strike <target>      : Launch autonomous strike
- quantum scramble     : Execute quantum data encryption
- clear                 : Clear terminal history
- status               : Show system statistics
- identity             : Show current AI profile
- purge                : Anti-forensic scrubbing`,
        timestamp: new Date().toLocaleTimeString() 
      }])
      return
    }

    if (cmd === "clear") {
      setMessages([{ role: "system", content: "Memory purged. Global state reset.", timestamp: new Date().toLocaleTimeString() }])
      return
    }

    // AI Strategic Thinking for non-standard commands
    const strategicInsight = await analyzeStrategicIntent(cmd)

    setIsLoading(true)

    // Command Logic Mapping
    let type = 'terminal'
    let target = ''
    let args = ''

    if (cmd.startsWith("broadcast ")) { type = 'global_broadcast'; target = cmd.substring(10) }
    else if (cmd === "neural sync") { type = 'neural_sync' }
    else if (cmd.startsWith("apex ")) { type = 'apex'; target = cmd.split(" ")[1] }
    else if (cmd.startsWith("osint ")) { const parts = cmd.split(" "); type = 'osint'; args = parts[1]; target = parts[2] }
    else if (cmd.startsWith("strike ")) { type = 'autonomous_strike'; target = cmd.split(" ")[1] }
    else if (cmd === "status") { type = 'gepa_stats' }
    else if (cmd === "purge") { type = 'stealth_purge' }
    else if (cmd === "quantum scramble") { type = 'quantum_scramble' }

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, target, args, type })
      })

      const data = await response.json()

      setMessages(prev => [...prev, { 
        role: data.success ? "assistant" : "system", 
        content: data.output || data.error || 'No output received.', 
        timestamp: new Date().toLocaleTimeString(),
        command: data.command,
        strategicInsight: strategicInsight || undefined,
        isBroadcasting: type === 'global_broadcast',
        clusterData: type === 'neural_sync' ? ['Riyadh', 'Cairo', 'London', 'Dubai', 'Tokyo', 'New York'] : undefined
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Global link severed.", timestamp: new Date().toLocaleTimeString() }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1
            setHistoryIndex(newIndex)
            setInput(history[newIndex])
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1
            setHistoryIndex(newIndex)
            setInput(history[newIndex])
        } else if (historyIndex === 0) {
            setHistoryIndex(-1)
            setInput("")
        }
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-4 border-primary/30">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <header className="p-8 border-b-4 border-primary/40 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-[0_0_150px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-8">
            <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center border-4 border-primary/40 shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-pulse">
              <Globe className="size-12 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">Global Shell</h2>
              <div className="flex items-center gap-4 text-[12px] text-primary/70 font-bold uppercase tracking-[0.4em] mt-3 italic">
                <div className="size-2.5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_10px_emerald]" />
                Live Global Link: v42.5_NEURAL_SYNC
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
             <Badge variant="outline" className="border-primary/40 text-primary uppercase font-bold tracking-[0.4em] px-10 py-3 rounded-full text-sm italic">COMMANDER_AL_GHAZALI</Badge>
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-16 hover:bg-red-900/30 text-red-500 rounded-2xl border-2 border-transparent transition-all">
               <Trash2 className="size-8" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-10 font-mono">
            <div className="space-y-12 pb-20">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-8 pl-10 py-8 rounded-r-[3rem] transition-all animate-in fade-in slide-in-from-left-6 duration-1000",
                  msg.role === "user" ? "border-primary/60 bg-primary/5 shadow-2xl" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/20 shadow-2xl" : "border-emerald-500/60 bg-emerald-500/5 shadow-2xl"
                )}>
                  <div className="flex items-center justify-between mb-6 opacity-60 text-[12px] font-bold">
                    <div className="flex items-center gap-4">
                        <Badge className="uppercase bg-white/10 text-white px-5 py-1 rounded-full">{msg.role}</Badge>
                        <span className="text-gray-500 uppercase tracking-widest">{msg.timestamp}</span>
                        {msg.isBroadcasting && <Badge className="bg-primary text-black font-black italic">GLOBAL_BROADCAST_ACTIVE</Badge>}
                    </div>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-2xl md:text-3xl",
                    msg.role === "user" ? "text-white font-bold" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-6 shadow-primary font-black italic">❯</span>}
                    {msg.content}
                  </div>

                  {msg.clusterData && (
                    <div className="mt-6 flex flex-wrap gap-4">
                        {msg.clusterData.map((city, idx) => (
                            <Badge key={idx} variant="outline" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 py-2 px-6 rounded-full italic font-bold">
                                <Network className="size-3 mr-2" /> {city}_SYNCED
                            </Badge>
                        ))}
                    </div>
                  )}

                  {msg.strategicInsight && (
                    <div className="mt-10 p-8 rounded-[2rem] bg-primary/10 border-2 border-primary/40 animate-in zoom-in-95 duration-1000 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform"><BrainCircuit className="size-16 text-primary"/></div>
                        <h4 className="text-[14px] font-bold text-primary uppercase tracking-[1em] mb-4 italic flex items-center gap-6">
                            <Sparkles className="size-6 gold-glow" /> Global Analysis
                        </h4>
                        <p className="text-2xl text-white/90 italic leading-relaxed font-medium">"{msg.strategicInsight}"</p>
                    </div>
                  )}
                </div>
              ))}
              
              {(isLoading || isThinking) && (
                <div className="flex flex-col gap-6 ml-10 p-8 border-2 border-primary/30 rounded-[3rem] bg-primary/5 animate-pulse relative overflow-hidden">
                   <div className="flex items-center gap-8 text-primary italic text-2xl font-bold">
                      <Atom className="size-10 animate-spin-slow text-primary shadow-[0_0_20px_primary]" />
                      <span className="tracking-[0.4em] uppercase">
                        {isThinking ? "Quantum synchronization across 14 clusters..." : "Executing global directive in the sub-atomic layer..."}
                      </span>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/3 animate-[progress_2s_infinite]" />
                   </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-10 bg-black/98 border-t-4 border-primary/40 shadow-[0_-50px_200px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-8 bg-white/5 rounded-[4rem] border-4 border-white/10 px-12 focus-within:border-primary/60 transition-all duration-1000 shadow-inner group">
              <span className="text-primary font-black text-5xl drop-shadow-[0_0_100px_rgba(212,175,55,1)] select-none italic">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate global intent to the Alpha Core (e.g. broadcast mission start)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-3xl md:text-5xl h-32 md:h-44 placeholder:text-gray-900 italic font-medium"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-primary text-black hover:bg-white rounded-full size-20 md:size-28 shadow-4xl transition-all active:scale-90 border-4 border-black/20 group-hover:scale-105"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-10 md:size-14" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-16 mt-12 opacity-30 text-[12px] font-black uppercase tracking-[1.5em] italic">
               <span className="flex items-center gap-4"><Fingerprint className="size-5" /> root@global-muizz</span>
               <span className="flex items-center gap-4"><Cpu className="size-5" /> grid_v42.5</span>
               <span className="flex items-center gap-4"><Globe className="size-5" /> global_presence</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
