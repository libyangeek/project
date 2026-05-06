
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
  Eye
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
 * @fileOverview واجهة السيطرة الكونية المحمولة v43.0 - THE SOVEREIGN MOBILE HUB
 * تم تحويل هذه الصفحة لتكون "المرآة المطلقة" لكافة قدرات المُعِزّ على جهاز القائد النقال.
 * Commander: المعتصم بالله ادريس الغزالي // May 6, 2026
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
    <div className="min-h-screen bg-black text-white flex flex-col font-code selection:bg-primary/50 overflow-hidden touch-none relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      
      <header className="p-6 border-b-4 border-primary/60 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-[0_20px_100px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-5">
          <div className="size-14 md:size-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 animate-neural shadow-[0_0_40px_rgba(212,175,55,0.4)]">
            <InfinityIcon className="size-8 md:size-10 text-black" />
          </div>
          <div>
            <h1 className="text-xl md:text-4xl font-headline font-bold italic tracking-tighter uppercase leading-none gold-glow">SOVEREIGN <span className="text-primary">RAT</span></h1>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="size-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[9px] uppercase font-black tracking-[0.3em] text-emerald-500 italic">6 MAY 2026 // HIVE_LOCKED</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-white/10 bg-white/5 size-12 shadow-xl" asChild>
             <Link href="/"><ArrowLeft className="size-6" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-8 relative z-10 scrollbar-hide pb-64">
        <div className="grid grid-cols-2 gap-4">
           <Card className="kali-card border-primary/40 bg-primary/5 rounded-[1.5rem] p-6 shadow-2xl group border-2 relative overflow-hidden">
              <div className="text-[9px] text-primary/60 uppercase font-black tracking-[0.4em] mb-2 italic">Hive Resonance</div>
              <div className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                 <Users className="size-6 text-primary animate-pulse" /> {hiveSync.toFixed(4)}%
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-black/60 rounded-[1.5rem] p-6 shadow-2xl border-2">
              <div className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.4em] mb-2 italic">Node 13 Link</div>
              <div className="text-2xl font-black text-primary uppercase italic flex items-center gap-3 gold-glow">
                 <Atom className="size-6 animate-spin-slow" /> ACTIVE
              </div>
           </Card>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] italic flex items-center gap-3"><Flame className="size-4 animate-pulse" /> Strike Matrix</span>
              <Badge className="bg-primary/20 text-primary border-none text-[8px] font-black tracking-widest px-3 py-0.5 rounded-full">v43.0_OFFENSIVE</Badge>
           </div>
           <div className="grid grid-cols-2 gap-4">
              {quickActions.map((act) => (
                <Button 
                  key={act.label}
                  variant="outline" 
                  className={cn(
                    "h-32 rounded-[2rem] flex flex-col items-center justify-center gap-3 border-2 transition-all active:scale-90 group shadow-xl relative overflow-hidden bg-black/40 border-white/10 hover:border-primary",
                  )}
                  onClick={() => handleStrike(act.cmd, act.vector)}
                  disabled={loading}
                >
                  <div className={cn("absolute top-0 left-0 w-full h-1 opacity-50", act.color)} />
                  <act.icon className="size-10 transition-all duration-500 group-hover:scale-125 text-primary/80 group-hover:text-primary gold-glow" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white italic">{act.label}</span>
                </Button>
              ))}
           </div>
        </div>

        <div className="space-y-4">
           <div className="px-2 flex items-center gap-3">
              <Mic className="size-4 text-magenta-500" />
              <span className="text-[11px] font-black text-magenta-500 uppercase tracking-[0.6em] italic">Voice Overmind</span>
           </div>
           <VoiceCommand onCommand={handleVoiceCommand} />
        </div>

        <div className="space-y-4">
           <div className="px-2 flex items-center gap-3">
              <GripVertical className="size-4 text-primary" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] italic">Sovereign Knots</span>
           </div>
           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
              {[
                { label: 'Throne', href: '/', icon: LayoutDashboard },
                { label: 'Arsenal', href: '/red-team', icon: Sword },
                { label: 'Recon', href: '/recon', icon: Globe },
                { label: 'Vault', href: '/knowledge', icon: Database },
                { label: 'Siphon', href: '/hardware', icon: Smartphone },
                { label: 'Grid', href: '/sessions', icon: Network },
                { label: 'Sim', href: '/digital-twin', icon: Workflow }
              ].map((knot) => (
                <Button key={knot.label} asChild variant="outline" className="h-16 px-8 rounded-full border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest italic shrink-0 hover:bg-primary/20 hover:border-primary transition-all">
                  <Link href={knot.href}><knot.icon className="size-4 mr-2" /> {knot.label}</Link>
                </Button>
              ))}
           </div>
        </div>

        <div className="space-y-4 pb-12">
           <div className="px-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="size-4 text-primary animate-pulse" />
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] italic">Intelligence Feed</span>
              </div>
           </div>
           <div className="space-y-4">
             {activeStrikes.map((strike) => (
               <Card key={strike.id} className="kali-card border-white/10 bg-black/80 rounded-[1.5rem] overflow-hidden animate-in slide-in-from-bottom-4 duration-700 border-2 shadow-xl group">
                  <CardContent className="p-5 space-y-4">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                           <div className="size-10 rounded-xl bg-primary/10 border-2 border-primary/40 flex items-center justify-center">
                              <Target className="size-5 text-primary gold-glow" />
                           </div>
                           <div>
                              <span className="text-sm font-black text-white uppercase italic block truncate max-w-[150px]">{strike.task}</span>
                              <span className="text-[8px] text-muted-foreground font-black uppercase italic tracking-widest">{strike.time} // {strike.impact}</span>
                           </div>
                        </div>
                        <Badge className={cn("text-[9px] px-3 py-0.5 rounded-full font-black italic", strike.status === "EXECUTING" ? "bg-emerald-600/30 text-emerald-500 animate-pulse" : "bg-red-600/30 text-red-500")}>
                          {strike.status}
                        </Badge>
                     </div>
                     <div className="p-3 bg-black/90 rounded-xl border border-white/5 text-[10px] text-gray-400 italic font-bold leading-relaxed">
                        "{strike.logic.substring(0, 100)}..."
                     </div>
                  </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-black/98 backdrop-blur-4xl border-t-4 border-primary/60 z-30 shadow-[0_-20px_100px_rgba(0,0,0,1)]">
        <div className="max-w-2xl mx-auto relative group">
           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 transition-all duration-700">
              <Binary className="size-6 italic gold-glow" />
           </div>
           <Input 
             placeholder="Dictate supreme intent..." 
             className="h-16 bg-primary/5 border-2 border-white/10 rounded-full pl-16 pr-24 text-lg italic font-black focus:border-primary text-white shadow-inner transition-all duration-500 placeholder:text-gray-900"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-2 top-1/2 -translate-y-1/2 size-12 bg-primary hover:bg-white text-black rounded-full shadow-2xl transition-all active:scale-90 border-4 border-black/20"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-6 animate-spin" /> : <Send className="size-6" />}
           </Button>
        </div>
        <div className="flex justify-center gap-8 mt-4 opacity-30 text-[8px] font-black uppercase tracking-[1em] italic">
           <span className="flex items-center gap-2"><Fingerprint className="size-3" /> GHAZALI_ROOT</span>
           <span className="flex items-center gap-2 text-primary"><InfinityIcon className="size-3" /> NODE_13_BOUND</span>
        </div>
      </div>
    </div>
  )
}
