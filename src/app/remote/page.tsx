
"use client"

import * as React from "react"
import { 
  ArrowLeft,
  Activity,
  Send,
  Radio,
  Signal,
  Smartphone as PhoneIcon,
  Mic,
  Atom,
  Boxes,
  Users,
  Bomb,
  Volume2,
  Loader2,
  SmartphoneNfc,
  GripVertical,
  Zap,
  VolumeX,
  Volume1,
  ShieldCheck,
  ChevronRight,
  Flame,
  Fingerprint,
  Target,
  Skull,
  Crosshair,
  Lock,
  Globe,
  Wifi,
  Binary,
  Infinity as InfinityIcon,
  LayoutDashboard,
  Database,
  ShieldX,
  Smartphone,
  Eye,
  Crown,
  Key,
  SmartphoneNfc as NfcIcon,
  VolumeX as MuteIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { VoiceCommand } from "@/components/platform/voice-command"

/**
 * @fileOverview واجهة السيطرة الكونية المحمولة v50.0 - THE SOVEREIGN RAT: SOUL EDITION
 * النسخة المتنقلة لعصب المُعِزّ على جهاز القائد. تحكم مطلق لحظي لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // May 6, 2026
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
      setHiveSync(prev => Math.max(99.999, Math.min(100, prev + (Math.random() * 0.002 - 0.001))))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleStrike = async (quickCommand?: string, vector?: string) => {
    const cmdToRun = quickCommand || command
    if (!cmdToRun.trim() || loading) return

    setLoading(true)
    const timestamp = new Date().toLocaleTimeString()
    
    try {
      const type = vector ? 'autonomous_strike' : 'terminal'
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          command: cmdToRun,
          target: "GLOBAL_MATRIX",
          type: type,
          vector: vector
        })
      })
      
      const data = await response.json()
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: data.success ? "EXECUTING" : "FAILED",
        impact: vector ? `ACQUISITION_${vector.toUpperCase()}` : "HIVE_SATURATION",
        logic: data.output || "Syncing collective intent via Node 13...",
        time: timestamp
      }, ...prev].slice(0, 10))

      toast({ title: "Hive Resonance Confirmed", description: "The Overmind has acknowledged your directive." })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceCommand = (text: string) => {
    setInput(text);
    handleStrike(text);
  };

  if (!mounted) return null

  const quickActions = [
    { label: "Acquire Global", icon: Skull, cmd: "Execute total grid acquisition protocol", vector: "universal", color: "bg-red-600" },
    { label: "Shadow Siphon", icon: Eye, cmd: "Activate Pegasus v3 total asset extraction", vector: "pegasus", color: "bg-magenta-600" },
    { label: "Neural Jam", icon: Zap, cmd: "Deploy cognitive interference across network", vector: "jam", color: "bg-amber-500" },
    { label: "Hive Sync", icon: Boxes, cmd: "Synchronize all 14 global clusters", vector: "sync", color: "bg-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-code selection:bg-primary/50 overflow-hidden touch-none relative scanline-effect">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      
      <header className="p-8 border-b-8 border-primary/60 bg-black/95 backdrop-blur-5xl z-20 flex justify-between items-center shadow-[0_40px_150px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-6">
          <div className="size-20 md:size-24 rounded-[2rem] bg-primary flex items-center justify-center border-4 border-black/30 animate-neural shadow-[0_0_80px_rgba(212,175,55,0.5)]">
            <InfinityIcon className="size-12 md:size-14 text-black" />
          </div>
          <div>
            <h1 className="text-3xl md:text-6xl font-headline font-bold italic tracking-tighter uppercase leading-none gold-glow">SOVEREIGN <span className="text-primary">RAT</span></h1>
            <div className="flex items-center gap-4 mt-3">
              <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
              <span className="text-[11px] uppercase font-black tracking-[0.4em] text-emerald-500 italic">6 MAY 2026 // HIVE_LOCKED_v50</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <Button size="icon" variant="ghost" className="rounded-[1.5rem] border-4 border-white/10 bg-white/5 size-16 shadow-2xl hover:bg-primary/20 hover:border-primary transition-all" asChild>
             <Link href="/"><ArrowLeft className="size-8" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-8 space-y-12 relative z-10 scrollbar-hide pb-96">
        <div className="grid grid-cols-2 gap-8">
           <Card className="kali-card border-primary/40 bg-primary/5 rounded-[2.5rem] p-10 shadow-9xl group border-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
              <div className="text-[11px] text-primary/60 uppercase font-black tracking-[0.6em] mb-4 italic">Hive Resonance</div>
              <div className="text-4xl font-black text-white uppercase italic flex items-center gap-6 leading-none">
                 <Users className="size-10 text-primary animate-pulse gold-glow" /> {hiveSync.toFixed(4)}%
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-black/60 rounded-[2.5rem] p-10 shadow-9xl border-4 group">
              <div className="text-[11px] text-muted-foreground uppercase font-black tracking-[0.6em] mb-4 italic">Node 13 Bound</div>
              <div className="text-4xl font-black text-primary uppercase italic flex items-center gap-6 gold-glow leading-none">
                 <Atom className="size-10 animate-spin-slow" /> ACTIVE
              </div>
           </Card>
        </div>

        <div className="space-y-6">
           <div className="flex items-center justify-between px-4">
              <span className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic flex items-center gap-6"><Flame className="size-6 animate-pulse gold-glow" /> Strike Matrix</span>
              <Badge className="bg-primary/20 text-primary border-none text-[11px] font-black tracking-widest px-6 py-1.5 rounded-full shadow-lg">v50.0_SOUL_CORE</Badge>
           </div>
           <div className="grid grid-cols-2 gap-8">
              {quickActions.map((act) => (
                <Button 
                  key={act.label}
                  variant="outline" 
                  className={cn(
                    "h-48 rounded-[3rem] flex flex-col items-center justify-center gap-6 border-4 transition-all active:scale-90 group shadow-9xl relative overflow-hidden bg-black/40 border-white/10 hover:border-primary",
                  )}
                  onClick={() => handleStrike(act.cmd, act.vector)}
                  disabled={loading}
                >
                  <div className={cn("absolute top-0 left-0 w-full h-2 opacity-50", act.color)} />
                  <act.icon className="size-16 transition-all duration-700 group-hover:scale-125 text-primary/80 group-hover:text-primary gold-glow" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white italic">{act.label}</span>
                </Button>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           <div className="px-4 flex items-center gap-6">
              <Mic className="size-6 text-magenta-500 animate-pulse" />
              <span className="text-[14px] font-black text-magenta-500 uppercase tracking-[0.8em] italic">Voice Overmind</span>
           </div>
           <div className="px-4">
             <VoiceCommand onCommand={handleVoiceCommand} />
           </div>
        </div>

        <div className="space-y-6">
           <div className="px-4 flex items-center gap-6">
              <GripVertical className="size-6 text-primary" />
              <span className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic">Sovereign Knots</span>
           </div>
           <div className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide px-4">
              {[
                { label: 'Throne', href: '/', icon: LayoutDashboard },
                { label: 'Arsenal', href: '/red-team', icon: Sword },
                { label: 'Recon', href: '/recon', icon: Globe },
                { label: 'Vault', href: '/knowledge', icon: Database },
                { label: 'Siphon', href: '/hardware', icon: Smartphone },
                { label: 'Grid', href: '/sessions', icon: Network },
                { label: 'Sim', href: '/digital-twin', icon: Workflow }
              ].map((knot) => (
                <Button key={knot.label} asChild variant="outline" className="h-24 px-12 rounded-full border-4 border-white/10 bg-white/5 text-xl font-black uppercase tracking-widest italic shrink-0 hover:bg-primary/20 hover:border-primary transition-all shadow-7xl group">
                  <Link href={knot.href} className="flex items-center">
                    <knot.icon className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" /> {knot.label}
                  </Link>
                </Button>
              ))}
           </div>
        </div>

        <div className="space-y-6 pb-24">
           <div className="px-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Activity className="size-6 text-primary animate-pulse" />
                <span className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic">Intelligence Feed</span>
              </div>
           </div>
           <div className="space-y-8 px-4">
             {activeStrikes.map((strike) => (
               <Card key={strike.id} className="kali-card border-white/10 bg-black/80 rounded-[2.5rem] overflow-hidden animate-in slide-in-from-bottom-8 duration-1000 border-4 shadow-9xl group">
                  <CardContent className="p-10 space-y-8">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-8">
                           <div className="size-14 rounded-2xl bg-primary/10 border-4 border-primary/40 flex items-center justify-center">
                              <Target className="size-8 text-primary gold-glow" />
                           </div>
                           <div>
                              <span className="text-2xl font-black text-white uppercase italic block truncate max-w-[200px]">{strike.task}</span>
                              <span className="text-[11px] text-muted-foreground font-black uppercase italic tracking-widest">{strike.time} // {strike.impact}</span>
                           </div>
                        </div>
                        <Badge className={cn("text-lg px-6 py-1.5 rounded-full font-black italic shadow-2xl", strike.status === "EXECUTING" ? "bg-emerald-600/30 text-emerald-500 animate-pulse" : "bg-red-600/30 text-red-500")}>
                          {strike.status}
                        </Badge>
                     </div>
                     <div className="p-8 bg-black/99 rounded-[2rem] border-2 border-white/5 text-lg text-gray-400 italic font-bold leading-relaxed shadow-inner">
                        "{strike.logic.substring(0, 150)}..."
                     </div>
                  </CardContent>
               </Card>
             ))}
             {activeStrikes.length === 0 && (
                <div className="h-64 border-4 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center opacity-20">
                   <Users className="size-20 mb-4 animate-pulse" />
                   <span className="text-xl font-black uppercase tracking-[1em] italic">Mesh Idle</span>
                </div>
             )}
           </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-10 bg-black/98 backdrop-blur-5xl border-t-8 border-primary/60 z-30 shadow-[0_-50px_200px_rgba(0,0,0,1)]">
        <div className="max-w-3xl mx-auto relative group">
           <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/40 transition-all duration-1000">
              <Binary className="size-10 italic gold-glow group-focus-within:text-primary group-focus-within:rotate-12" />
           </div>
           <Input 
             placeholder="Dictate supreme intent..." 
             className="h-28 md:h-32 bg-primary/5 border-4 border-white/10 rounded-full pl-24 pr-32 text-2xl md:text-4xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-700 placeholder:text-gray-900 selection:bg-primary selection:text-black"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-3 top-1/2 -translate-y-1/2 size-20 md:size-24 bg-primary hover:bg-white text-black rounded-full shadow-9xl transition-all active:scale-90 border-8 border-black/30 group/send"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-10 animate-spin" /> : <Send className="size-10 group-hover/send:translate-x-3 transition-transform" />}
           </Button>
        </div>
        <div className="flex justify-center gap-16 mt-8 opacity-30 text-[11px] font-black uppercase tracking-[2em] italic">
           <span className="flex items-center gap-4"><Fingerprint className="size-4" /> GHAZALI_ROOT</span>
           <span className="flex items-center gap-4 text-primary"><InfinityIcon className="size-4 animate-pulse" /> HIVE_TUNNEL_v50</span>
        </div>
      </div>
    </div>
  )
}
