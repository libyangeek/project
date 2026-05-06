
"use client"

import * as React from "react"
import { 
  Smartphone, 
  Zap, 
  Skull, 
  Terminal, 
  ShieldX, 
  Wifi, 
  Cpu, 
  ChevronRight, 
  Loader2, 
  Flame, 
  Radio, 
  Lock,
  ArrowLeft,
  Search,
  MessageSquare,
  Activity,
  Send,
  Power,
  Volume2,
  Crosshair,
  Binary,
  GripVertical,
  Bomb,
  Network,
  TowerControl,
  Signal,
  SmartphoneNfc,
  Boxes,
  Users,
  Infinity,
  HeartPulse,
  Sparkles,
  Atom,
  Target,
  BrainCircuit,
  RefreshCcw,
  Smartphone as PhoneIcon,
  ShieldCheck,
  Mic
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { processRemoteCommand } from "@/ai/flows/remote-command-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"
import translations from "../lib/ar.json"

/**
 * @fileOverview التحكم عن بعد v43.0 - HIVE RAT
 * تم إضافة مؤشر حالة Whisper Voice للتحكم الصوتي وتوحيد الأبعاد.
 */
export default function MobileRemotePage() {
  const [command, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeStrikes, setActiveStrikes] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [hiveSync, setHiveSync] = React.useState(100)
  const [whisperAvailable, setWhisperAvailable] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setHiveSync(prev => Math.max(99.99, Math.min(100, prev + (Math.random() * 0.01 - 0.005))))
    }, 3000)

    // فحص حالة Whisper من محرك الاستدلال
    const checkWhisper = async () => {
      try {
        const res = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'terminal', command: 'ollama list' })
        });
        if (res.ok) setWhisperAvailable(true);
      } catch (e) {
        setWhisperAvailable(false);
      }
    };
    checkWhisper();

    return () => clearInterval(interval)
  }, [])

  const handleStrike = async (quickCommand?: string, isMobileStrike?: boolean) => {
    const cmdToRun = quickCommand || command
    if (!cmdToRun.trim() || loading) return

    setLoading(true)
    try {
      const type = isMobileStrike ? 'mobile_strike' : 'terminal'
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          command: cmdToRun,
          target: "MOBILE_GRID",
          type: type,
          args: isMobileStrike ? 'scan' : undefined
        })
      })
      
      const data = await response.json()
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: data.success ? "EXECUTING" : "FAILED",
        impact: isMobileStrike ? "MOBILE_INFILTRATION" : "GLOBAL_RESONANCE",
        logic: data.output?.substring(0, 100) || "Syncing via Node 13...",
        chainCount: isMobileStrike ? 1 : 12,
        isMobile: isMobileStrike
      }, ...prev])

      toast({ title: isMobileStrike ? "Mobile Node Responding" : "Collective Intent Broadcasted" })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "Hive Sync Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-code selection:bg-primary/50 overflow-hidden touch-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent)] pointer-events-none z-0" />
      
      <header className="p-4 md:p-5 flex justify-between items-center relative z-20 border-b-2 border-primary/40 bg-black/90 backdrop-blur-3xl shadow-xl">
        <div className="flex items-center gap-3">
          <div className="size-10 md:size-12 rounded-xl bg-primary flex items-center justify-center border-2 border-white/20 animate-pulse">
            <Boxes className="size-6 md:size-8 text-black" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-headline font-bold italic tracking-tighter uppercase leading-none gold-glow">HIVE <span className="text-primary">RAT</span></h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-lg" />
              <span className="text-[8px] uppercase font-black tracking-widest text-emerald-500 italic">v43.0_OVERMIND_LINK</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <Badge className={cn(
             "px-3 py-1 rounded-full border-2 text-[8px] font-black uppercase italic tracking-widest transition-all",
             whisperAvailable ? "bg-emerald-600/30 border-emerald-500 text-emerald-500" : "bg-red-600/30 border-red-500 text-red-500"
           )}>
              Whisper: {whisperAvailable ? "READY" : "OFFLINE"}
           </Badge>
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-primary/20 bg-primary/5 text-primary size-10"><Volume2 className="size-5" /></Button>
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-white/10 bg-white/5 size-10" asChild>
             <Link href="/"><ArrowLeft className="size-6" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5 relative z-10 scrollbar-hide pb-40">
        <div className="grid grid-cols-2 gap-3">
           <Card className="kali-card border-primary/40 bg-primary/5 rounded-2xl p-4 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary animate-pulse" />
              <div className="text-[8px] text-primary/60 uppercase font-black tracking-widest mb-1 italic">Swarm Alignment</div>
              <div className="text-sm md:text-lg font-black text-white uppercase italic flex items-center gap-2">
                 <Users className="size-3 text-primary gold-glow" /> {hiveSync.toFixed(3)}%
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-black/60 rounded-2xl p-4 shadow-xl">
              <div className="text-[8px] text-muted-foreground uppercase font-black tracking-widest mb-1 italic">Quantum Ping</div>
              <div className="text-sm md:text-lg font-black text-primary uppercase italic flex items-center gap-2">
                 <Atom className="size-3 animate-spin-slow" /> 0.0001ms
              </div>
           </Card>
        </div>

        <div className="space-y-3">
           <div className="flex items-center justify-between px-2">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic">Collective Strike Matrix</span>
              <GripVertical className="size-3 text-primary/30" />
           </div>
           <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Hive Broadcast", icon: Radio, cmd: "Broadcast collective intent to all global alpha clusters", color: "bg-primary/10 border-primary/30", iconColor: "text-primary" },
                { label: "Swarm Siege", icon: Signal, cmd: "Initiate multi-node synchronized wireless siege", color: "bg-amber-600/10 border-amber-500/30", iconColor: "text-amber-500" },
                { label: "Mobile Strike", icon: PhoneIcon, cmd: "Execute NetHunter-EliteHex field infiltration", color: "bg-emerald-600/10 border-emerald-500/30", iconColor: "text-emerald-400", isMobile: true },
                { label: "Voice Command", icon: Mic, cmd: "Activate Whisper Voice listening", color: "bg-magenta-600/10 border-magenta-500/30", iconColor: "text-magenta-500", disabled: !whisperAvailable }
              ].map((action, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className={cn("h-28 md:h-40 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 transition-all active:scale-95 group shadow-2xl relative overflow-hidden", action.color, action.disabled && "opacity-30 cursor-not-allowed")}
                  onClick={() => !action.disabled && handleStrike(action.cmd, (action as any).isMobile)}
                  disabled={loading || action.disabled}
                >
                  <action.icon className={cn("size-8 md:size-12 transition-all duration-700 group-hover:scale-125 gold-glow", action.iconColor)} />
                  <span className="text-[9px] md:text-[12px] font-black uppercase tracking-widest text-white italic">{action.label}</span>
                </Button>
              ))}
           </div>
        </div>

        <div className="space-y-3">
           {activeStrikes.map((strike) => (
             <Card key={strike.id} className={cn(
               "kali-card rounded-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-1000 border-2 shadow-2xl",
               strike.isMobile ? "border-emerald-500/40 bg-emerald-500/5" : "border-primary/40 bg-black/80"
             )}>
                <CardContent className="p-4 space-y-4">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                         <div className={cn(
                           "size-10 rounded-xl flex items-center justify-center border-2 shadow-xl animate-neural",
                           strike.isMobile ? "bg-emerald-500/20 border-emerald-500/40" : "bg-primary/20 border-primary/40"
                         )}>
                            {strike.isMobile ? <PhoneIcon className="size-6 text-emerald-400" /> : <Bomb className="size-6 text-primary gold-glow" />}
                         </div>
                         <div>
                            <span className="text-sm font-black text-white uppercase italic block truncate max-w-[150px]">{strike.task}</span>
                         </div>
                      </div>
                      <Badge className="bg-emerald-600/30 text-emerald-500 text-[9px] px-3 py-1 rounded-full shadow-2xl">{strike.status}</Badge>
                   </div>
                   <div className="p-3 bg-black/60 rounded-xl border border-white/10 shadow-inner">
                      <p className="text-[11px] text-gray-300 font-bold italic leading-relaxed">"{strike.logic}"</p>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-5 bg-black/95 backdrop-blur-3xl border-t-4 border-primary/60 z-30">
        <div className="max-w-xl mx-auto relative group">
           <Input 
             placeholder="Dictate supreme intent..." 
             className="h-16 md:h-20 bg-primary/5 border-2 border-white/10 rounded-full pl-16 pr-20 text-lg italic font-black focus:border-primary text-white"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-2 top-1/2 -translate-y-1/2 size-12 md:size-16 bg-primary rounded-full shadow-2xl transition-all active:scale-90"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-6 md:size-8 animate-spin" /> : <Send className="size-6 md:size-8 text-black" />}
           </Button>
        </div>
      </div>
    </div>
  )
}
