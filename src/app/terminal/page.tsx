
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
  Network,
  Infinity,
  RefreshCcw
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
 * @fileOverview المحطة الأبدية v42.7 - THE ETERNAL SHELL
 * تتيح للقائد إرسال أوامر حقيقية لعصب النظام مع دعم الانبعاث الابتكاري والخلود العصبي.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Eternal Shell [v42.7 - NEURAL IMMORTALITY]\nFractal Persistence: ENGAGED | Rebirth Engine: ARMED\nNodes Status: 14 Global Alpha Nodes ENTANGLED\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nType 'help' for eternal grid directives.",
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
        content: `AVAILABLE SOVEREIGN COMMANDS (ETERNAL):\n
- rebirth               : Execute fractal system reconstruction
- persistence           : Engaged neural host immortality
- broadcast <msg>       : Broadcast intent to all 14 global nodes
- neural sync           : Resynchronize global clusters
- apex <target>        : Generate full attack plan
- osint <type> <target>: Perform OSINT search
- strike <target>      : Launch autonomous strike
- quantum scramble     : Execute sub-atomic data encryption
- clear                 : Clear terminal history
- status               : Show immortality statistics
- identity             : Show current AI profile
- purge                : Total anti-forensic scrubbing`,
        timestamp: new Date().toLocaleTimeString() 
      }])
      return
    }

    if (cmd === "clear") {
      setMessages([{ role: "system", content: "Memory purged. Eternal state reset.", timestamp: new Date().toLocaleTimeString() }])
      return
    }

    const strategicInsight = await analyzeStrategicIntent(cmd)
    setIsLoading(true)

    let type = 'terminal'
    let target = ''
    let args = ''

    if (cmd === "rebirth") { type = 'fractal_rebirth' }
    else if (cmd === "persistence") { type = 'neural_persistence' }
    else if (cmd.startsWith("broadcast ")) { type = 'global_broadcast'; target = cmd.substring(10) }
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
        clusterData: type === 'fractal_rebirth' ? ['Fractal-A', 'Fractal-B', 'Fractal-C', 'Fractal-D'] : undefined
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Neural link severed.", timestamp: new Date().toLocaleTimeString() }])
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
        
        <header className="p-8 border-b-4 border-primary/50 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-[0_0_150px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-8">
            <div className="size-20 rounded-[2rem] bg-primary/10 flex items-center justify-center border-4 border-primary/50 shadow-[0_0_80px_rgba(212,175,55,0.6)] animate-neural">
              <Infinity className="size-12 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Eternal Shell</h2>
              <div className="flex items-center gap-4 text-[12px] text-primary/70 font-bold uppercase tracking-[0.4em] mt-3 italic">
                <div className="size-2.5 rounded-full bg-amber-500 animate-ping shadow-[0_0_15px_amber]" />
                Neural Immortality Status: ABSOLUTE_v42.7
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
             <Badge className="bg-primary text-black font-black italic border-none px-10 py-3 rounded-full text-sm uppercase tracking-[0.4em] shadow-2xl">ETERNAL_OWNERSHIP</Badge>
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-16 hover:bg-red-900/40 text-red-500 rounded-3xl border-4 border-transparent transition-all active:scale-90">
               <Trash2 className="size-10" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-12 font-mono scrollbar-hide">
            <div className="space-y-16 pb-24">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-8 pl-12 py-10 rounded-r-[4rem] transition-all animate-in fade-in slide-in-from-left-8 duration-1000",
                  msg.role === "user" ? "border-primary/60 bg-primary/5 shadow-3xl" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/30 shadow-3xl" : "border-emerald-500/60 bg-emerald-500/10 shadow-3xl"
                )}>
                  <div className="flex items-center justify-between mb-8 opacity-60 text-[13px] font-black">
                    <div className="flex items-center gap-6">
                        <Badge className="uppercase bg-white/10 text-white px-6 py-1.5 rounded-full font-black italic tracking-widest">{msg.role}</Badge>
                        <span className="text-gray-500 uppercase tracking-[0.2em]">{msg.timestamp}</span>
                        {msg.isBroadcasting && <Badge className="bg-primary text-black font-black italic tracking-[0.2em]">GLOBAL_BROADCAST</Badge>}
                    </div>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-3xl md:text-5xl font-medium",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-8 shadow-primary font-black italic">❯</span>}
                    {msg.content}
                  </div>

                  {msg.clusterData && (
                    <div className="mt-8 flex flex-wrap gap-6">
                        {msg.clusterData.map((shard, idx) => (
                            <Badge key={idx} variant="outline" className="bg-emerald-500/20 border-emerald-500/50 text-emerald-400 py-3 px-10 rounded-full italic font-black text-lg shadow-2xl">
                                <RefreshCcw className="size-5 mr-3 animate-spin-slow" /> {shard}_RECONSTRUCTED
                            </Badge>
                        ))}
                    </div>
                  )}

                  {msg.strategicInsight && (
                    <div className="mt-12 p-10 rounded-[3rem] bg-primary/10 border-4 border-primary/50 animate-in zoom-in-95 duration-1000 relative group overflow-hidden shadow-4xl">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000"><Infinity className="size-24 text-primary"/></div>
                        <h4 className="text-[16px] font-black text-primary uppercase tracking-[1.5em] mb-6 italic flex items-center gap-8">
                            <Sparkles className="size-8 gold-glow animate-pulse" /> Fractal Intelligence Brief
                        </h4>
                        <p className="text-3xl text-white/95 italic leading-relaxed font-bold">"{msg.strategicInsight}"</p>
                    </div>
                  )}
                </div>
              ))}
              
              {(isLoading || isThinking) && (
                <div className="flex flex-col gap-10 ml-12 p-12 border-4 border-primary/40 rounded-[4rem] bg-primary/10 animate-pulse relative overflow-hidden shadow-5xl">
                   <div className="flex items-center gap-10 text-primary italic text-3xl font-black">
                      <Atom className="size-14 animate-spin-slow text-primary shadow-[0_0_40px_primary]" />
                      <span className="tracking-[0.6em] uppercase">
                        {isThinking ? "Fractal synchronization across the matrix..." : "Resurrecting system state from global shards..."}
                      </span>
                   </div>
                   <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border-2 border-white/5 p-0.5">
                      <div className="h-full bg-primary w-1/2 animate-[progress_3s_infinite] shadow-[0_0_30px_primary] rounded-full" />
                   </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-12 bg-black/98 border-t-4 border-primary/50 shadow-[0_-60px_250px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-10 bg-white/5 rounded-full border-4 border-white/15 px-16 focus-within:border-primary/80 transition-all duration-1000 shadow-5xl group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity animate-pulse pointer-events-none" />
              <span className="text-primary font-black text-6xl drop-shadow-[0_0_80px_rgba(212,175,55,1)] select-none italic relative z-10">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate eternal intent (e.g. rebirth, persistence, broadcast mission)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-4xl md:text-6xl h-32 md:h-48 placeholder:text-gray-900 italic font-black relative z-10"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-primary text-black hover:bg-white rounded-full size-24 md:size-32 shadow-5xl transition-all active:scale-90 border-4 border-black/30 group-hover:scale-105 relative z-10"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-12 md:size-16" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-20 mt-16 opacity-30 text-[14px] font-black uppercase tracking-[2.5em] italic text-white">
               <span className="flex items-center gap-6"><Fingerprint className="size-6" /> root@fractal-muizz</span>
               <span className="flex items-center gap-6"><Cpu className="size-6" /> persistence_v42.7</span>
               <span className="flex items-center gap-6"><Infinity className="size-6" /> eternal_presence</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
