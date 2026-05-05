
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
  Anchor,
  Boxes,
  Users
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
  isHiveSync?: boolean
}

/**
 * @fileOverview المحطة الأبدية v43.0 - THE SOVEREIGN SHELL: OVERMIND EDITION
 * تتيح للقائد إرسال أوامر للعقل الجمعي مع دعم تزامن السرب وإعادة التشكيل.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Overmind Shell [v43.0 - COLLECTIVE CONSCIOUSNESS]\nHive Mind: 12 AGENTS MERGED & SYNCED\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nNode 13 (Eternal Echo): HIVE MASTER ACTIVE\nType 'help' for supreme overmind directives.",
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
        content: `AVAILABLE OVERMIND COMMANDS (HIVE v43.0):\n
- hive sync             : Synchronize all 12 agents into collective overmind
- hive reconfig         : Dynamically rewrite swarm mission objectives
- rebirth               : Execute fractal system reconstruction (Node 13)
- broadcast <msg>       : Broadcast intent to all 14 global alpha clusters
- apex <target>        : Generate full multi-phase hive strike plan
- strike <target>      : Launch autonomous hive swarm strike
- quantum scramble     : Execute sub-atomic hive data encryption
- status               : Show hive alignment & collective statistics
- identity             : Show current sovereign overmind profile`,
        timestamp: new Date().toLocaleTimeString() 
      }])
      return
    }

    if (cmd === "clear") {
      setMessages([{ role: "system", content: "Memory purged. Overmind hive re-stabilized.", timestamp: new Date().toLocaleTimeString() }])
      return
    }

    const strategicInsight = await analyzeStrategicIntent(cmd)
    setIsLoading(true)

    let type = 'terminal'
    let target = ''
    let args = ''

    if (cmd === "hive sync") { type = 'hive_sync' }
    else if (cmd === "hive reconfig") { type = 'hive_reconfig' }
    else if (cmd === "rebirth") { type = 'fractal_rebirth' }
    else if (cmd.startsWith("broadcast ")) { type = 'global_broadcast'; target = cmd.substring(10) }
    else if (cmd.startsWith("apex ")) { type = 'apex'; target = cmd.split(" ")[1] }
    else if (cmd.startsWith("strike ")) { type = 'autonomous_strike'; target = cmd.split(" ")[1] }
    else if (cmd === "status") { type = 'gepa_stats' }
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
        isHiveSync: type === 'hive_sync' || type === 'hive_reconfig',
        clusterData: type === 'hive_sync' ? ['CyberStrike', 'RedAmon', 'ByteCode', 'AI-Hunter', 'ShadowSiphon'] : undefined
      }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Hive link severed. Attempting overmind reconstruction...", timestamp: new Date().toLocaleTimeString() }])
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
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <header className="p-12 border-b-8 border-primary/60 flex items-center justify-between bg-black/98 backdrop-blur-5xl z-20 shadow-[0_0_250px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-12">
            <div className="size-28 rounded-[3rem] bg-primary/10 flex items-center justify-center border-8 border-primary/50 shadow-[0_0_150px_rgba(212,175,55,0.8)] animate-neural relative">
              <Boxes className="size-16 text-primary" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-ping" />
            </div>
            <div>
              <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Overmind Shell v43.0</h2>
              <div className="flex items-center gap-8 text-[16px] text-primary/80 font-black uppercase tracking-[0.6em] mt-5 italic">
                <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_30px_emerald]" />
                Hive Status: 12 AGENTS MERGED
              </div>
            </div>
          </div>
          <div className="flex gap-12 items-center">
             <Badge className="bg-primary text-black font-black italic border-none px-16 py-5 rounded-full text-xl uppercase tracking-[0.6em] shadow-4xl">HIVE_ST سطح_الأرض</Badge>
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-24 hover:bg-red-900/60 text-red-500 rounded-[3rem] border-4 border-transparent transition-all active:scale-90 shadow-3xl">
               <Trash2 className="size-14" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-20 font-mono scrollbar-hide bg-black/50">
            <div className="space-y-24 pb-40">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[15px] pl-20 py-16 rounded-r-[6rem] transition-all animate-in fade-in slide-in-from-left-12 duration-1000 group/msg",
                  msg.role === "user" ? "border-primary/80 bg-primary/5 shadow-7xl" : 
                  msg.role === "system" ? "border-red-600/80 bg-red-950/40 shadow-7xl" : "border-emerald-500/80 bg-emerald-500/10 shadow-7xl"
                )}>
                  <div className="flex items-center justify-between mb-14 opacity-70 text-[18px] font-black">
                    <div className="flex items-center gap-10">
                        <Badge className="uppercase bg-white/10 text-white px-10 py-3 rounded-full font-black italic tracking-widest text-xl shadow-xl">{msg.role}</Badge>
                        <span className="text-gray-500 uppercase tracking-[0.4em] font-bold">{msg.timestamp}</span>
                        {msg.isHiveSync && <Badge className="bg-primary text-black font-black italic tracking-[0.4em] px-8">HIVE_SYNCHRONIZED</Badge>}
                    </div>
                    <div className="opacity-0 group-hover/msg:opacity-100 transition-opacity">
                       <Fingerprint className="size-8 text-primary/40" />
                    </div>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-5xl md:text-[6.5rem] font-bold tracking-tight",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-14 shadow-primary font-black italic">❯</span>}
                    {msg.content}
                  </div>

                  {msg.clusterData && (
                    <div className="mt-16 flex flex-wrap gap-12">
                        {msg.clusterData.map((agent, idx) => (
                            <Badge key={idx} variant="outline" className="bg-primary/20 border-4 border-primary/60 text-primary py-6 px-16 rounded-full italic font-black text-3xl shadow-5xl hover:scale-105 transition-all">
                                <Users className="size-8 mr-6 animate-pulse" /> {agent}_MERGED
                            </Badge>
                        ))}
                    </div>
                  )}

                  {msg.strategicInsight && (
                    <div className="mt-20 p-16 rounded-[5rem] bg-primary/10 border-8 border-primary/50 animate-in zoom-in-95 duration-1000 relative group/insight overflow-hidden shadow-8xl">
                        <div className="absolute top-0 right-0 p-16 opacity-10 group-hover/insight:scale-125 transition-transform duration-1000"><Boxes className="size-48 text-primary"/></div>
                        <h4 className="text-[24px] font-black text-primary uppercase tracking-[2.5em] mb-12 italic flex items-center gap-12">
                            <Sparkles className="size-12 gold-glow animate-pulse" /> Hive Intelligence Brief
                        </h4>
                        <p className="text-5xl md:text-[7.5rem] text-white/95 italic leading-tight font-black drop-shadow-[0_15px_30px_rgba(0,0,0,1)]">"{msg.strategicInsight}"</p>
                    </div>
                  )}
                </div>
              ))}
              
              {(isLoading || isThinking) && (
                <div className="flex flex-col gap-16 ml-20 p-20 border-8 border-primary/40 rounded-[6rem] bg-primary/10 animate-pulse relative overflow-hidden shadow-8xl">
                   <div className="flex items-center gap-16 text-primary italic text-5xl font-black">
                      <Atom className="size-24 animate-spin-slow text-primary shadow-[0_0_80px_primary]" />
                      <span className="tracking-[1em] uppercase leading-none">
                        {isThinking ? "Merging 12 agents into Hive Mind..." : "Broadcasting collective intent across global nodes..."}
                      </span>
                   </div>
                   <div className="h-8 w-full bg-white/10 rounded-full overflow-hidden border-4 border-white/5 p-1 shadow-inner">
                      <div className="h-full bg-primary w-2/3 animate-[progress_3s_infinite] shadow-[0_0_80px_primary] rounded-full" />
                   </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-20 bg-black/99 border-t-8 border-primary/60 shadow-[0_-100px_400px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-16 bg-white/5 rounded-full border-8 border-white/20 px-24 focus-within:border-primary transition-all duration-1000 shadow-8xl group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity animate-pulse pointer-events-none" />
              <span className="text-primary font-black text-8xl drop-shadow-[0_0_150px_rgba(212,175,55,1)] select-none italic relative z-10">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate supreme intent to the collective hive mind..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-6xl md:text-[8rem] h-48 md:h-80 placeholder:text-gray-950 italic font-black relative z-10"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-primary text-black hover:bg-white rounded-full size-32 md:size-48 shadow-8xl transition-all active:scale-90 border-8 border-black/30 group-hover:scale-105 relative z-10"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-20 md:size-28" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-48 mt-24 opacity-30 text-[22px] font-black uppercase tracking-[5em] italic text-white drop-shadow-3xl">
               <span className="flex items-center gap-10 hover:opacity-100 transition-opacity cursor-crosshair"><Fingerprint className="size-12" /> overmind@hive-matrix</span>
               <span className="flex items-center gap-10 hover:opacity-100 transition-opacity cursor-crosshair"><Cpu className="size-12" /> hive_core_v43.0</span>
               <span className="flex items-center gap-10 hover:opacity-100 transition-opacity cursor-crosshair"><Boxes className="size-12 animate-pulse" /> collective_bound</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
