
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
  Fingerprint
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
  command?: string
}

/**
 * @fileOverview المحطة السيادية v42.2 - THE OMNIPOTENT SHELL
 * تتيح للقائد إرسال أوامر حقيقية لعصب النظام مع معالجة ذكية للنتائج.
 */
export default function TerminalPage() {
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    { 
      role: "system", 
      content: "Al-Mu'izz Sovereign Terminal [v42.2 - THE SINGULARITY]\nEstablishing secure link to God-Core...\nAuthorized: المعتصم بالله ادريس الغزالي\nType 'help' for a list of sovereign commands.",
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const [history, setHistory] = React.useState<string[]>([])
  const [historyIndex, setHistoryIndex] = React.useState(-1)
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
    setHistory(prev => [cmd, ...prev.slice(0, 49)])
    setHistoryIndex(-1)
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
- identity             : Show current AI identity profile
- purge                : Anti-forensic log scrubbing
- info                 : Show core architecture specs`,
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
    } else if (cmd === "purge") {
        type = 'stealth_purge'
    } else if (cmd === "info") {
        setMessages(prev => [...prev, { 
            role: "assistant", 
            content: `SOVEREIGN ARCHITECTURE:\n- Version: v42.2-Singularity\n- Core: ARMADA-GOD_CORE\n- Memory: GEPA 3.5 Weighted\n- Persistence: Ring 0 Kernel + UEFI Bootkitty\n- Encryption: AES-2048-XTS`,
            timestamp: new Date().toLocaleTimeString() 
        }])
        setIsLoading(false)
        return
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
          timestamp: new Date().toLocaleTimeString(),
          command: data.command
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
        content: "CRITICAL FAILURE: Neural connection to backend was severed. Re-binding...", 
        timestamp: new Date().toLocaleTimeString() 
      }])
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

  const clearTerminal = () => {
    setMessages([{ 
      role: "system", 
      content: "Terminal memory purged. Quantum state reset. Evidence scrubbed.",
      timestamp: new Date().toLocaleTimeString()
    }])
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen overflow-hidden bg-black relative border-l-4 border-primary/20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
        
        <header className="p-8 border-b-4 border-primary/40 flex items-center justify-between bg-black/90 backdrop-blur-3xl z-20 shadow-[0_0_100px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-8">
            <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center border-4 border-primary/40 shadow-[0_0_40px_rgba(212,175,55,0.4)] animate-pulse">
              <TerminalIcon className="size-12 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white uppercase italic tracking-tighter gold-glow leading-none">Sovereign Shell</h2>
              <div className="flex items-center gap-4 text-[12px] text-primary/70 font-bold uppercase tracking-[0.4em] mt-3">
                <div className="size-2.5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_10px_emerald]" />
                Live Kernel Session: muizz_ring0_v42
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
             <div className="hidden md:flex flex-col items-end gap-1 mr-6">
                <div className="flex items-center gap-3">
                    <Activity className="size-5 text-emerald-500" />
                    <span className="text-[12px] text-emerald-500 font-bold uppercase tracking-widest">Quantum Encryption: ACTIVE</span>
                </div>
                <div className="flex items-center gap-3">
                    <Lock className="size-5 text-primary" />
                    <span className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Authorized: AL_GHAZALI_ROOT</span>
                </div>
             </div>
             <Badge variant="outline" className="border-primary/40 text-primary uppercase font-bold tracking-[0.4em] px-8 py-2 rounded-full text-sm italic">v42.2_STABLE</Badge>
             <Button variant="ghost" size="icon" onClick={clearTerminal} className="size-16 hover:bg-red-900/30 text-red-500 rounded-2xl border-2 border-transparent hover:border-red-500/40 transition-all group">
               <Trash2 className="size-8 group-hover:scale-110" />
             </Button>
          </div>
        </header>

        <div className="flex-1 flex min-h-0 flex-col relative">
          <ScrollArea className="flex-1 p-10 font-mono">
            <div className="space-y-8 pb-10">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "border-l-8 pl-10 py-6 rounded-r-3xl transition-all animate-in fade-in slide-in-from-left-4 duration-700",
                  msg.role === "user" ? "border-primary/60 bg-primary/5" : 
                  msg.role === "system" ? "border-red-600/60 bg-red-950/20" : "border-emerald-500/60 bg-emerald-500/5"
                )}>
                  <div className="flex items-center justify-between mb-4 opacity-50 text-[12px]">
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="uppercase border-white/20 text-white font-bold px-4 py-0.5 rounded-full">{msg.role}</Badge>
                        <span className="text-gray-500 font-bold uppercase tracking-widest">{msg.timestamp}</span>
                    </div>
                    {msg.command && <span className="text-primary/40 font-code text-[10px] uppercase font-bold italic tracking-tighter">CMD: {msg.command}</span>}
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap break-all leading-loose text-lg md:text-xl",
                    msg.role === "user" ? "text-white font-bold" : 
                    msg.role === "system" ? "text-red-400 italic" : "text-emerald-400"
                  )}>
                    {msg.role === "user" && <span className="text-primary mr-5 shadow-primary font-black">❯</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-6 text-primary animate-pulse italic text-xl ml-10 p-4 border-2 border-primary/20 rounded-2xl bg-primary/5">
                   <Loader2 className="size-8 animate-spin" />
                   <span className="tracking-[0.4em] uppercase font-bold">Executing command in sub-atomic layer...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-10 bg-black/95 border-t-4 border-primary/40 shadow-[0_-40px_150px_rgba(0,0,0,1)] z-30">
            <form onSubmit={executeCommand} className="relative flex items-center gap-6 bg-white/5 rounded-[4rem] border-4 border-white/10 px-10 focus-within:border-primary/60 transition-all duration-700 shadow-inner group">
              <div className="absolute -left-4 -top-4 opacity-0 group-focus-within:opacity-10 transition-opacity duration-1000"><Command className="size-32 text-primary" /></div>
              <span className="text-primary font-black text-4xl drop-shadow-[0_0_100px_rgba(212,175,55,1)] select-none">❯</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Dictate command to the Alpha Node (e.g. apex target.com)..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white font-mono text-2xl md:text-3xl h-24 md:h-32 placeholder:text-gray-800 italic"
                disabled={isLoading}
                autoFocus
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-primary text-black hover:bg-white rounded-full size-16 md:size-20 shadow-4xl transition-all active:scale-90 border-4 border-black/20"
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-8 md:size-10" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-12 mt-10 opacity-30">
               <div className="flex items-center gap-3">
                  <Fingerprint className="size-4" />
                  <span className="text-[12px] font-bold uppercase tracking-[1em]">root@al-muizz</span>
               </div>
               <div className="flex items-center gap-3">
                  <Cpu className="size-4" />
                  <span className="text-[12px] font-bold uppercase tracking-[1em]">sh-4.2#</span>
               </div>
               <div className="flex items-center gap-3">
                  <History className="size-4" />
                  <span className="text-[12px] font-bold uppercase tracking-[1em]">id: {Date.now().toString(16)}</span>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
