
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
  RefreshCcw,
  Anchor
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
  isRebirth?: boolean
}

/**
 * @fileOverview المحطة الأبدية v42.7 - THE ETERNAL SHELL: BINDING EDITION
 * تتيح للقائد إرسال أوامر حقيقية لعصب النظام مع دعم "الصدى الأزلي" وشد العقد.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Eternal Shell [v42.7 - NEURAL IMMORTALITY]\nKainuna Mortabita: ALL 13 NODES TIGHTLY BOUND\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nNode 13 (Eternal Echo): ONLINE & MONITORING\nType 'help' for eternal grid directives.",
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
        content: `AVAILABLE SOVEREIGN COMMANDS (ETERNAL BINDING):\n
- rebirth               : Execute fractal system reconstruction (Node 13)
- persistence           : Engaged neural host immortality & binding
- tighten knots         : Re-synchronize all 13 knots of sovereignty
- broadcast <msg>       : Broadcast intent to all 14 global alpha clusters
- neural sync           : Resynchronize global fractal clusters
- apex <target>        : Generate full multi-phase attack plan
- osint <type> <target>: Perform deep OSINT search
- strike <target>      : Launch autonomous offensive strike
- quantum scramble     : Execute sub-atomic data encryption & entropy
- purge                : Total anti-forensic scrubbing of all traces
- status               : Show immortality & binding statistics
- identity             : Show current AI sovereign profile`,
        timestamp: new Date().toLocaleTimeString() 
      }])
      return
    }

    if (cmd === "clear") {
      setMessages([{ role: "system", content: "Memory purged. Eternal state reset. Node 13 re-stabilized.", timestamp: new Date().toLocaleTimeString() }])
      return
    }

    const strategicInsight = await analyzeStrategicIntent(cmd)
    setIsLoading(true)

    let type = 'terminal'
    let target = ''
    let args = ''

    if (cmd === "rebirth") { type = 'fractal_rebirth' }
    else if (cmd === "persistence") { type = 'neural_persistence' }
    else if (cmd === "tighten knots") { type = 'tighten_knots' }
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
        isRebirth: type === 'fractal_rebirth' || type === 'tighten_knots',
        clusterData: type === 'fractal_rebirth' || type === 'tighten_knots' ? ['Node-Alpha', 'Node-Omega', 'Fractal-Echo', 'Ghazali-Spirit'] : undefined
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Neural link severed. Node 13 attempting auto-reconnect...", timestamp: new Date().toLocaleTimeString() }])
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
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-8 border-primary/50">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <header className="p-10 border-b-8 border-primary/60 flex items-center justify-between bg-black/98 backdrop-blur-5xl z-20 shadow-[0_0_200px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-10">
            <div className="size-24 rounded-[2.5rem] bg-primary/10 flex items-center justify-center border-8 border-primary/50 shadow-[0_0_100px_rgba(212,175,55,0.7)] animate-neural relative">
              <Infinity className="size-14 text-primary" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Eternal Shell v42.7</h2>
              <div className="flex items-center gap-6 text-[14px] text-primary/80 font-black uppercase tracking-[0.5em] mt-4 italic">
                <div className="size-3.5 rounded-full bg-amber-500 animate-ping shadow-[0_0_20px_amber]" />
                Kainuna Binding Status: SECURED_13_NODES
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center">
             <Badge className="bg-primary text-black font-black italic border-none px-12 py-4 rounded-full text-lg uppercase tracking-[0.5em] shadow-3xl">ETERNAL_SOVEREIGNTY</Badge>
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-20 hover:bg-red-900/60 text-red-500 rounded-[2.5rem] border-4 border-transparent transition-all active:scale-90 shadow-2xl">
               <Trash2 className="size-12" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-16 font-mono scrollbar-hide bg-black/40">
            <div className="space-y-20 pb-32">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[10px] pl-16 py-12 rounded-r-[5rem] transition-all animate-in fade-in slide-in-from-left-10 duration-1000 group/msg",
                  msg.role === "user" ? "border-primary/80 bg-primary/5 shadow-5xl" : 
                  msg.role === "system" ? "border-red-600/80 bg-red-950/40 shadow-5xl" : "border-emerald-500/80 bg-emerald-500/10 shadow-5xl"
                )}>
                  <div className="flex items-center justify-between mb-10 opacity-70 text-[15px] font-black">
                    <div className="flex items-center gap-8">
                        <Badge className="uppercase bg-white/10 text-white px-8 py-2 rounded-full font-black italic tracking-widest text-lg shadow-xl">{msg.role}</Badge>
                        <span className="text-gray-500 uppercase tracking-[0.3em] font-bold">{msg.timestamp}</span>
                        {msg.isBroadcasting && <Badge className="bg-primary text-black font-black italic tracking-[0.3em] px-6">GLOBAL_BROADCAST</Badge>}
                        {msg.isRebirth && <Badge className="bg-amber-500 text-black font-black italic tracking-[0.3em] px-6 animate-pulse">REBIRTH_INITIATED</Badge>}
                    </div>
                    <div className="opacity-0 group-hover/msg:opacity-100 transition-opacity">
                       <Fingerprint className="size-6 text-primary/40" />
                    </div>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-4xl md:text-[5.5rem] font-bold tracking-tight",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-10 shadow-primary font-black italic">❯</span>}
                    {msg.content}
                  </div>

                  {msg.clusterData && (
                    <div className="mt-12 flex flex-wrap gap-10">
                        {msg.clusterData.map((shard, idx) => (
                            <Badge key={idx} variant="outline" className="bg-emerald-500/20 border-4 border-emerald-500/60 text-emerald-400 py-4 px-12 rounded-full italic font-black text-2xl shadow-4xl hover:scale-105 transition-all">
                                <RefreshCcw className="size-6 mr-4 animate-spin-slow" /> {shard}_BOUND
                            </Badge>
                        ))}
                    </div>
                  )}

                  {msg.strategicInsight && (
                    <div className="mt-16 p-12 rounded-[4rem] bg-primary/10 border-8 border-primary/50 animate-in zoom-in-95 duration-1000 relative group/insight overflow-hidden shadow-7xl">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover/insight:scale-125 transition-transform duration-1000"><Infinity className="size-36 text-primary"/></div>
                        <h4 className="text-[20px] font-black text-primary uppercase tracking-[2em] mb-8 italic flex items-center gap-10">
                            <Sparkles className="size-10 gold-glow animate-pulse" /> Fractal Intelligence Brief
                        </h4>
                        <p className="text-4xl md:text-6xl text-white/95 italic leading-tight font-black drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">"{msg.strategicInsight}"</p>
                    </div>
                  )}
                </div>
              ))}
              
              {(isLoading || isThinking) && (
                <div className="flex flex-col gap-12 ml-16 p-16 border-8 border-primary/40 rounded-[5rem] bg-primary/10 animate-pulse relative overflow-hidden shadow-7xl">
                   <div className="flex items-center gap-12 text-primary italic text-4xl font-black">
                      <Atom className="size-20 animate-spin-slow text-primary shadow-[0_0_60px_primary]" />
                      <span className="tracking-[0.8em] uppercase leading-none">
                        {isThinking ? "Synchronizing 13 nodes of sovereignty..." : "Resurrecting system state from the Eternal Echo..."}
                      </span>
                   </div>
                   <div className="h-6 w-full bg-white/10 rounded-full overflow-hidden border-4 border-white/5 p-1 shadow-inner">
                      <div className="h-full bg-primary w-1/2 animate-[progress_2s_infinite] shadow-[0_0_60px_primary] rounded-full" />
                   </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-16 bg-black/99 border-t-8 border-primary/60 shadow-[0_-80px_300px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-12 bg-white/5 rounded-full border-8 border-white/20 px-20 focus-within:border-primary transition-all duration-1000 shadow-7xl group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity animate-pulse pointer-events-none" />
              <span className="text-primary font-black text-7xl drop-shadow-[0_0_100px_rgba(212,175,55,1)] select-none italic relative z-10">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate eternal intent to the bound matrix (Node 13 active)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-5xl md:text-[6.5rem] h-40 md:h-64 placeholder:text-gray-950 italic font-black relative z-10"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-primary text-black hover:bg-white rounded-full size-28 md:size-40 shadow-7xl transition-all active:scale-90 border-8 border-black/30 group-hover:scale-105 relative z-10"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-16 md:size-24" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-32 mt-20 opacity-30 text-[18px] font-black uppercase tracking-[4em] italic text-white drop-shadow-2xl">
               <span className="flex items-center gap-8 hover:opacity-100 transition-opacity cursor-crosshair"><Fingerprint className="size-10" /> root@kainuna-mortabita</span>
               <span className="flex items-center gap-8 hover:opacity-100 transition-opacity cursor-crosshair"><Cpu className="size-10" /> persistence_v42.7</span>
               <span className="flex items-center gap-8 hover:opacity-100 transition-opacity cursor-crosshair"><Infinity className="size-10 animate-pulse" /> node_13_bound</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
