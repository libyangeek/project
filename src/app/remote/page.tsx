
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
  ShieldCheck
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { processRemoteCommand } from "@/ai/flows/remote-command-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview واجهة المفترس المتنقلة v43.0 - THE HIVE REMOTE
 * واجهة تحكم متنقلة مخصصة للهيمنة الكاملة على العقل الجمعي من أي مكان.
 * تم دمج ميزة "عقد الهاتف" (Mobile Nodes) في السرب.
 */
export default function MobileRemotePage() {
  const [command, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeStrikes, setActiveStrikes] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [hiveSync, setHiveSync] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setHiveSync(prev => Math.max(99.99, Math.min(100, prev + (Math.random() * 0.01 - 0.005))))
    }, 3000)
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
      {/* Predator Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent)] pointer-events-none z-0" />
      
      <header className="p-4 md:p-6 flex justify-between items-center relative z-20 border-b-2 border-primary/40 bg-black/90 backdrop-blur-3xl shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        <div className="flex items-center gap-4">
          <div className="size-12 md:size-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-white/20 shadow-[0_0_40px_rgba(212,175,55,0.6)] animate-pulse">
            <Boxes className="size-7 md:size-10 text-black" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-headline font-bold italic tracking-tighter uppercase leading-none gold-glow">HIVE <span className="text-primary">RAT</span></h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_15px_emerald]" />
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500 italic">v43.0_OVERMIND_LINK</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/20 transition-all"><Volume2 className="size-6" /></Button>
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-white/10 bg-white/5" asChild>
             <Link href="/"><ArrowLeft className="size-7" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 relative z-10 scrollbar-hide pb-48">
        {/* Overmind Status Matrix */}
        <div className="grid grid-cols-2 gap-4">
           <Card className="kali-card border-primary/40 bg-primary/5 rounded-3xl p-5 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary animate-pulse" />
              <div className="text-[9px] text-primary/60 uppercase font-black tracking-widest mb-1 italic">Swarm Alignment</div>
              <div className="text-base md:text-xl font-black text-white uppercase italic flex items-center gap-2">
                 <Users className="size-4 text-primary gold-glow" /> {hiveSync.toFixed(3)}%
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-black/60 rounded-3xl p-5 shadow-xl">
              <div className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mb-1 italic">Quantum Ping</div>
              <div className="text-base md:text-xl font-black text-primary uppercase italic flex items-center gap-2">
                 <Atom className="size-4 animate-spin-slow" /> 0.0001ms
              </div>
           </Card>
        </div>

        {/* Global Strike Directives */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] italic">Collective Strike Matrix</span>
              <GripVertical className="size-4 text-primary/30" />
           </div>
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Hive Broadcast", icon: Radio, cmd: "Broadcast collective intent to all global alpha clusters", color: "bg-primary/10 border-primary/30", iconColor: "text-primary" },
                { label: "Swarm Siege", icon: Signal, cmd: "Initiate multi-node synchronized wireless siege", color: "bg-amber-600/10 border-amber-500/30", iconColor: "text-amber-500" },
                { label: "Mobile Strike", icon: PhoneIcon, cmd: "Execute NetHunter-EliteHex field infiltration", color: "bg-emerald-600/10 border-emerald-500/30", iconColor: "text-emerald-400", isMobile: true },
                { label: "Entity Hijack", icon: BrainCircuit, cmd: "Execute neural hijacking and identity poisoning", color: "bg-magenta-600/10 border-magenta-500/30", iconColor: "text-magenta-500" }
              ].map((action, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className={cn("h-36 md:h-52 rounded-3xl flex flex-col items-center justify-center gap-4 border-2 transition-all active:scale-95 group shadow-2xl relative overflow-hidden", action.color)}
                  onClick={() => handleStrike(action.cmd, (action as any).isMobile)}
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <action.icon className={cn("size-12 md:size-16 transition-all duration-700 group-hover:scale-125 gold-glow", action.iconColor)} />
                  <span className="text-[11px] md:text-[16px] font-black uppercase tracking-widest text-white italic">{action.label}</span>
                </Button>
              ))}
           </div>
        </div>

        {/* Collective Intelligence Feed */}
        <div className="space-y-4">
           {activeStrikes.map((strike) => (
             <Card key={strike.id} className={cn(
               "kali-card rounded-3xl overflow-hidden animate-in slide-in-from-bottom-8 duration-1000 border-2 shadow-2xl",
               strike.isMobile ? "border-emerald-500/40 bg-emerald-500/5" : "border-primary/40 bg-black/80"
             )}>
                <CardContent className="p-6 space-y-6">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                         <div className={cn(
                           "size-14 rounded-2xl flex items-center justify-center border-2 shadow-xl animate-neural",
                           strike.isMobile ? "bg-emerald-500/20 border-emerald-500/40" : "bg-primary/20 border-primary/40"
                         )}>
                            {strike.isMobile ? <PhoneIcon className="size-8 text-emerald-400" /> : <Bomb className="size-8 text-primary gold-glow" />}
                         </div>
                         <div>
                            <span className="text-lg font-black text-white uppercase italic block truncate max-w-[200px]">{strike.task}</span>
                            <span className="text-[12px] text-primary font-black uppercase tracking-widest mt-1 italic">{strike.isMobile ? "MOBILE_NODE_ACTIVE" : `Swarm Chain: ${strike.chainCount} Nodes`}</span>
                         </div>
                      </div>
                      <Badge className="bg-emerald-600/30 text-emerald-500 text-[11px] px-5 py-2 border-2 border-emerald-500/40 uppercase font-black italic rounded-full shadow-2xl">{strike.status}</Badge>
                   </div>
                   <div className="p-4 bg-black/60 rounded-2xl border border-white/10 shadow-inner">
                      <p className="text-[14px] text-gray-300 font-bold italic leading-relaxed">"{strike.logic}"</p>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </main>

      {/* Overmind Command Dock */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-black/95 backdrop-blur-3xl border-t-4 border-primary/60 z-30 shadow-[0_-30px_150px_rgba(0,0,0,1)]">
        <div className="max-w-xl mx-auto relative group">
           <Input 
             placeholder="Dictate supreme intent..." 
             className="h-20 md:h-28 bg-primary/5 border-2 border-white/10 rounded-full pl-20 md:pl-24 pr-24 md:pr-32 text-xl md:text-3xl italic font-black focus:border-primary/80 shadow-[inset_0_0_50px_rgba(0,0,0,1)] text-white placeholder:text-primary/20"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-3 top-1/2 -translate-y-1/2 size-14 md:size-20 bg-primary rounded-full shadow-2xl shadow-primary/50 hover:bg-white transition-all active:scale-90 border-2 border-black/30"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-8 md:size-10 animate-spin text-black" /> : <Send className="size-8 md:size-10 text-black" />}
           </Button>
        </div>
        
        <div className="flex items-center justify-around mt-8 pt-4 border-t border-white/10">
           <Button variant="ghost" className="text-primary hover:bg-primary/10 rounded-2xl py-10 flex-1 transition-all" asChild><Link href="/terminal"><Target className="size-8" /></Link></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-10 flex-1 transition-all" asChild><Link href="/hardware"><PhoneIcon className="size-8" /></Link></Button>
           <div className="size-20 md:size-28 bg-primary rounded-full -mt-20 flex items-center justify-center border-8 border-black shadow-[0_15px_80px_rgba(212,175,55,0.9)] active:scale-90 transition-all cursor-pointer group animate-neural" onClick={() => handleStrike("Initiate Global Swarm Pulse")}>
              <Power className="size-10 md:size-14 text-black group-hover:scale-125 transition-transform duration-700" />
           </div>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-10 flex-1 transition-all" asChild><Link href="/recon"><Search className="size-8" /></Link></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-10 flex-1 transition-all" asChild><Link href="/system"><Activity className="size-8" /></Link></Button>
        </div>
      </div>
    </div>
  )
}
