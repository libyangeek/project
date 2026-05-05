
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
  Infinity as InfinityIcon,
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
 * تتيح للقائد إرسال أوامر للعقل الجمعي. تم تحسين الخطوط والعرض.
 */
export default function TerminalPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isThinking, setIsThinking] = React.useState(false)
  const [history, setHistory] = React.useState<string[]>([])
  const [historyIndex, setHistoryIndex] = React.useState(-1)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    setMessages([
      { 
        role: "system", 
        content: "Al-Mu'izz Sovereign Overmind Shell [v43.0]\nHive Mind: 12 AGENTS MERGED & SYNCED\nAuthorized: القائد المعتصم بالله ادريس الغزالي\nNode 13: HIVE MASTER ACTIVE",
        timestamp: new Date().toLocaleTimeString()
      }
    ])
  }, [])

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading, isThinking])

  if (!mounted) return null;

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
        content: "HIVE v43.0 COMMANDS:\n- hive sync\n- hive reconfig\n- rebirth\n- broadcast <msg>\n- apex <target>\n- strike <target>\n- quantum scramble\n- status\n- identity",
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
      setMessages(prev => [...prev, { role: "system", content: "CRITICAL FAILURE: Hive link severed.", timestamp: new Date().toLocaleTimeString() }])
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
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-2 border-primary/40">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <header className="p-6 border-b border-primary/40 flex items-center justify-between bg-black/95 backdrop-blur-3xl z-20 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="size-16 rounded-[1rem] bg-primary/10 flex items-center justify-center border-2 border-primary/50 shadow-lg animate-neural">
              <Boxes className="size-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter gold-glow leading-none">Overmind Shell v43.0</h2>
              <div className="flex items-center gap-4 text-[11px] text-primary/80 font-black uppercase tracking-[0.4em] mt-2 italic">
                <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-lg" />
                Hive Status: 12 AGENTS MERGED
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
             <Button variant="ghost" size="icon" onClick={() => setMessages([])} className="size-12 hover:bg-red-900/40 text-red-500 rounded-xl border border-transparent transition-all shadow-lg">
               <Trash2 className="size-6" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-8 font-mono scrollbar-hide bg-black/50">
            <div className="space-y-12 pb-24">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-[5px] pl-8 py-6 rounded-r-[1.5rem] transition-all animate-in fade-in slide-in-from-left-6 duration-1000 group/msg",
                  msg.role === "user" ? "border-primary/60 bg-primary/5 shadow-md" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/20 shadow-md" : "border-emerald-500/60 bg-emerald-500/5 shadow-md"
                )}>
                  <div className="flex items-center justify-between mb-4 opacity-70 text-[11px] font-black">
                    <div className="flex items-center gap-6">
                        <Badge className="uppercase bg-white/5 text-white px-4 py-0.5 rounded-full font-black italic tracking-widest text-[10px]">{msg.role}</Badge>
                        <span className="text-gray-500 uppercase tracking-[0.2em] font-bold">{msg.timestamp}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-relaxed text-xl md:text-2xl font-bold tracking-tight",
                    msg.role === "user" ? "text-white" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-4 shadow-primary font-black italic">❯</span>}
                    {msg.content}
                  </div>

                  {msg.strategicInsight && (
                    <div className="mt-6 p-6 rounded-[1.5rem] bg-primary/5 border-2 border-primary/20 animate-in zoom-in-95 duration-1000 relative group/insight overflow-hidden shadow-xl">
                        <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic flex items-center gap-4">
                            <Sparkles className="size-4 gold-glow animate-pulse" /> Hive Intel
                        </h4>
                        <p className="text-lg md:text-xl text-white/90 italic leading-tight font-black">"{msg.strategicInsight}"</p>
                    </div>
                  )}
                </div>
              ))}
              
              {(isLoading || isThinking) && (
                <div className="flex flex-col gap-6 ml-8 p-6 border border-primary/20 rounded-[1.5rem] bg-primary/5 animate-pulse relative overflow-hidden shadow-lg">
                   <div className="flex items-center gap-6 text-primary italic text-lg font-black">
                      <Atom className="size-6 animate-spin-slow text-primary" />
                      <span className="tracking-[0.4em] uppercase leading-none">
                        {isThinking ? "Synthesizing Intent..." : "Broadcasting Directives..."}
                      </span>
                   </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-8 bg-black/99 border-t border-primary/40 shadow-2xl z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-6 bg-white/5 rounded-full border-2 border-white/10 px-8 focus-within:border-primary transition-all duration-700 shadow-xl group overflow-hidden">
              <span className="text-primary font-black text-4xl select-none italic relative z-10">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate supreme intent..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-xl md:text-3xl h-20 md:h-28 placeholder:text-gray-900 italic font-black relative z-10"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-primary text-black hover:bg-white rounded-full size-14 md:size-20 shadow-xl transition-all active:scale-90 border-2 border-black/30 relative z-10"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-8 md:size-10" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-16 mt-6 opacity-30 text-[10px] font-black uppercase tracking-[1em] italic text-white">
               <span className="flex items-center gap-4"><Fingerprint className="size-4" /> overmind@hive-matrix</span>
               <span className="flex items-center gap-4"><Cpu className="size-4" /> hive_core_v43.0</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
