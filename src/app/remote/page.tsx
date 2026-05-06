
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
  Fingerprint
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
 * @fileOverview التحكم عن بعد v43.0 - HIVE RAT
 * تم دمج Whisper Voice للتحكم الصوتي وتوحيد الأبعاد السيادية مع ضمان عمل كافة الأزرار.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function MobileRemotePage() {
  const [command, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeStrikes, setActiveStrikes] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [hiveSync, setHiveSync] = React.useState(100)
  const [isMuted, setIsMuted] = React.useState(false)

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
          target: "GLOBAL_GRID",
          type: type,
          args: isMobileStrike ? 'scan' : undefined
        })
      })
      
      const data = await response.json()
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: data.success ? "EXECUTING" : "FAILED",
        impact: isMobileStrike ? "MOBILE_SUBJUGATION" : "GLOBAL_SATURATION",
        logic: data.output?.substring(0, 150) || "Syncing collective intent via Node 13...",
        isMobile: isMobileStrike,
        time: new Date().toLocaleTimeString()
      }, ...prev].slice(0, 10))

      toast({ title: isMobileStrike ? "Mobile Node Responding" : "Hive Resonance Achieved" })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Severed" })
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceCommand = (text: string) => {
    setInput(text);
    handleStrike(text);
  };

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-code selection:bg-primary/50 overflow-hidden touch-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent)] pointer-events-none z-0" />
      
      <header className="p-6 md:p-8 flex justify-between items-center relative z-20 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="size-16 md:size-20 rounded-[1.5rem] bg-primary flex items-center justify-center border-4 border-black/30 animate-pulse shadow-[0_0_50px_rgba(212,175,55,0.5)]">
            <Boxes className="size-10 md:size-12 text-black" />
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl font-headline font-bold italic tracking-tighter uppercase leading-none gold-glow">HIVE <span className="text-primary">RAT</span></h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
              <span className="text-[10px] md:text-[12px] uppercase font-black tracking-[0.4em] text-emerald-500 italic">v43.0_OVERMIND_UPLINK</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <Button onClick={() => setIsMuted(!isMuted)} size="icon" variant="ghost" className="rounded-[1.2rem] border-4 border-primary/20 bg-primary/5 text-primary size-14 md:size-16 shadow-2xl transition-all active:scale-90 group">
             {isMuted ? <VolumeX className="size-8" /> : <Volume2 className="size-8 group-hover:animate-pulse" />}
           </Button>
           <Button size="icon" variant="ghost" className="rounded-[1.2rem] border-4 border-white/10 bg-white/5 size-14 md:size-16 shadow-2xl transition-all active:scale-90" asChild>
             <Link href="/"><ArrowLeft className="size-8" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 relative z-10 scrollbar-hide pb-52">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Card className="kali-card border-primary/40 bg-primary/5 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl group border-4">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary animate-pulse" />
              <div className="text-[10px] text-primary/60 uppercase font-black tracking-[0.6em] mb-3 italic">Swarm Resonance</div>
              <div className="text-2xl md:text-4xl font-black text-white uppercase italic flex items-center gap-4 group-hover:gold-glow transition-all">
                 <Users className="size-8 text-primary" /> {hiveSync.toFixed(3)}%
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-black/60 rounded-[2rem] p-8 shadow-2xl border-4 relative">
              <div className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.6em] mb-3 italic">Quantum Link Latency</div>
              <div className="text-2xl md:text-4xl font-black text-primary uppercase italic flex items-center gap-4 gold-glow">
                 <Atom className="size-8 animate-spin-slow" /> 0.0001ms
              </div>
           </Card>
        </div>

        <div className="space-y-6">
           <div className="flex items-center justify-between px-4">
              <span className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic flex items-center gap-4"><Zap className="size-5 animate-pulse" /> Collective Strike Matrix</span>
              <GripVertical className="size-6 text-primary/30" />
           </div>
           <div className="grid grid-cols-2 gap-6">
              <Button 
                variant="outline" 
                className="h-40 md:h-52 rounded-[2.5rem] flex flex-col items-center justify-center gap-5 border-4 transition-all active:scale-95 group shadow-3xl relative overflow-hidden bg-primary/10 border-primary/30"
                onClick={() => handleStrike("Broadcast supreme collective intent to all worldwide clusters")}
                disabled={loading}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Radio className="size-16 md:size-20 transition-all duration-700 group-hover:scale-125 text-primary gold-glow" />
                <span className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.4em] text-white italic">Hive Broadcast</span>
              </Button>

              <Button 
                variant="outline" 
                className="h-40 md:h-52 rounded-[2.5rem] flex flex-col items-center justify-center gap-5 border-4 transition-all active:scale-95 group shadow-3xl relative overflow-hidden bg-amber-600/10 border-amber-500/30"
                onClick={() => handleStrike("Initiate multi-agent synchronized grid siege")}
                disabled={loading}
              >
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Signal className="size-16 md:size-20 transition-all duration-700 group-hover:scale-125 text-amber-500 gold-glow" />
                <span className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.4em] text-white italic">Swarm Siege</span>
              </Button>

              <Button 
                variant="outline" 
                className="h-40 md:h-52 rounded-[2.5rem] flex flex-col items-center justify-center gap-5 border-4 transition-all active:scale-95 group shadow-3xl relative overflow-hidden bg-emerald-600/10 border-emerald-500/30"
                onClick={() => handleStrike("Execute NetHunter Mobile Infiltration Strike", true)}
                disabled={loading}
              >
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <PhoneIcon className="size-16 md:size-20 transition-all duration-700 group-hover:scale-125 text-emerald-400 gold-glow" />
                <span className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.4em] text-white italic">Mobile Strike</span>
              </Button>

              <VoiceCommand onCommand={handleVoiceCommand} />
           </div>
        </div>

        <div className="space-y-6 pb-12">
           <div className="px-4 flex items-center gap-4">
              <Activity className="size-6 text-primary animate-pulse" />
              <span className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic">Strike Activity Log</span>
           </div>
           {activeStrikes.map((strike) => (
             <Card key={strike.id} className={cn(
               "kali-card rounded-[2.5rem] overflow-hidden animate-in slide-in-from-bottom-12 duration-1000 border-4 shadow-3xl group relative",
               strike.isMobile ? "border-emerald-500/40 bg-emerald-500/5" : "border-primary/40 bg-black/80"
             )}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                <CardContent className="p-8 space-y-6 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-6">
                         <div className={cn(
                           "size-16 rounded-[1.2rem] flex items-center justify-center border-4 shadow-2xl animate-neural",
                           strike.isMobile ? "bg-emerald-500/20 border-emerald-500/40" : "bg-primary/20 border-primary/40"
                         )}>
                            {strike.isMobile ? <PhoneIcon className="size-10 text-emerald-400" /> : <Flame className="size-10 text-primary gold-glow" />}
                         </div>
                         <div>
                            <span className="text-xl md:text-3xl font-black text-white uppercase italic block truncate max-w-[250px] leading-none mb-2">{strike.task}</span>
                            <span className="text-[10px] text-muted-foreground font-black uppercase italic tracking-widest">{strike.time} // {strike.impact}</span>
                         </div>
                      </div>
                      <Badge className={cn("text-[11px] px-6 py-1.5 rounded-full shadow-2xl border-none font-black italic", strike.status === "EXECUTING" ? "bg-emerald-600/30 text-emerald-500 animate-pulse" : "bg-red-600/30 text-red-500")}>
                        {strike.status}
                      </Badge>
                   </div>
                   <div className="p-6 bg-black/90 rounded-[1.5rem] border-2 border-white/5 shadow-inner">
                      <p className="text-lg md:text-xl text-gray-300 font-bold italic leading-relaxed">"{strike.logic}"</p>
                   </div>
                </CardContent>
             </Card>
           ))}
           {activeStrikes.length === 0 && (
             <div className="py-40 text-center opacity-10 group">
                <Radio className="size-32 mx-auto mb-8 animate-pulse text-primary group-hover:scale-110 transition-transform duration-1000" />
                <p className="text-2xl font-black uppercase tracking-[2em] italic text-white leading-none">Awaiting Directives</p>
             </div>
           )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-8 md:p-10 bg-black/98 backdrop-blur-3xl border-t-8 border-primary/60 z-30 shadow-[0_-30px_100px_rgba(0,0,0,0.9)]">
        <div className="max-w-4xl mx-auto relative group">
           <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all duration-700 scale-150 z-10">
              <Mic className="size-6 italic gold-glow" />
           </div>
           <Input 
             placeholder="Dictate supreme overmind intent..." 
             className="h-24 md:h-32 bg-primary/5 border-4 border-white/10 rounded-full pl-24 md:pl-32 pr-32 md:pr-40 text-2xl md:text-4xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-700 placeholder:text-gray-900"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-4 top-1/2 -translate-y-1/2 size-18 md:size-24 bg-primary hover:bg-white text-black rounded-full shadow-3xl transition-all active:scale-90 border-8 border-black/30 group z-10"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />}
           </Button>
        </div>
        <div className="flex justify-center gap-20 mt-6 opacity-20 text-[10px] font-black uppercase tracking-[2em] italic">
           <span className="flex items-center gap-4"><Fingerprint className="size-4" /> AL_GHAZALI_ROOT</span>
           <span className="flex items-center gap-4"><ShieldCheck className="size-4" /> COLLECTIVE_BOUND</span>
        </div>
      </div>
    </div>
  )
}
