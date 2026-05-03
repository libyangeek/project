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
  SmartphoneNfc
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
 * @fileOverview واجهة المفترس المتنقلة v30.0-OMNISCIENT (Mobile Link C2)
 * واجهة تحكم متنقلة مخصصة للهيمنة الكاملة على المُعِزّ من أي مكان بنمط RAT السيادي.
 */
export default function MobileRemotePage() {
  const [command, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeStrikes, setActiveStrikes] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [pulse, setPulse] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    setPulse(true)
    const timer = setTimeout(() => setPulse(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleStrike = async (quickCommand?: string) => {
    const cmdToRun = quickCommand || command
    if (!cmdToRun.trim() || loading) return

    setLoading(true)
    try {
      const result = await processRemoteCommand({ 
        mobileCommand: cmdToRun,
        deviceContext: "Mobile High-Priority Sovereign Link"
      })
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: result.status,
        impact: result.estimatedImpact,
        logic: result.neuralLogic,
        chainCount: result.executionChain.length,
        assets: result.targetedAssets
      }, ...prev])

      toast({ title: "Omniscient Directive Transmitted", description: "Alpha Node is orchestrating the kill-chain." })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "C2 Neural Sync Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-code selection:bg-red-600/50 overflow-hidden touch-none">
      {/* Predator Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.1),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      {/* Mobile C2 Header - High Contrast */}
      <header className="p-4 md:p-6 flex justify-between items-center relative z-20 border-b-2 border-red-600/40 bg-black/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,0,0,0.2)]">
        <div className="flex items-center gap-4">
          <div className={cn(
            "size-10 md:size-14 rounded-2xl bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-700",
            pulse && "scale-110 shadow-[0_0_60px_rgba(255,0,0,0.8)]"
          )}>
            <Skull className="size-6 md:size-8 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-headline font-bold italic tracking-tighter uppercase leading-none">AL-MUIZZ <span className="text-red-500">C2</span></h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_15px_emerald]" />
              <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-emerald-500 italic">Omniscient_Link: v30</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-white/10 bg-white/5 text-red-500 hover:bg-red-600/20 transition-all"><Volume2 className="size-5" /></Button>
           <Button size="icon" variant="ghost" className="rounded-xl border-2 border-white/10 bg-white/5" asChild>
             <Link href="/"><ArrowLeft className="size-6" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 relative z-10 scrollbar-hide pb-40">
        {/* Status Hub Matrix */}
        <div className="grid grid-cols-2 gap-4">
           <Card className="kali-card border-red-600/30 bg-red-950/15 rounded-3xl p-4 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 animate-pulse" />
              <div className="text-[8px] md:text-[11px] text-muted-foreground uppercase font-bold tracking-widest mb-1 opacity-60">Global Sovereignty</div>
              <div className="text-xs md:text-lg font-bold text-white uppercase italic flex items-center gap-2">
                 <Activity className="size-4 text-red-500" /> SYNCED_GOD
              </div>
           </Card>
           <Card className="kali-card border-white/10 bg-white/5 rounded-3xl p-4 shadow-xl">
              <div className="text-[8px] md:text-[11px] text-muted-foreground uppercase font-bold tracking-widest mb-1 opacity-60">Strike Latency</div>
              <div className="text-xs md:text-lg font-bold text-red-500 uppercase italic flex items-center gap-2">
                 <Zap className="size-4 animate-bounce" /> 0.002ms
              </div>
           </Card>
        </div>

        {/* Tactical Engagement Matrix */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[9px] md:text-[12px] font-bold text-red-500/80 uppercase tracking-[0.4em] italic">Strike Objective Matrix</span>
              <GripVertical className="size-3 text-muted-foreground opacity-30" />
           </div>
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "5G/IMSI Strike", icon: Signal, cmd: "Execute cellular tower takeover and IMSI siphon", color: "bg-blue-600/15 border-blue-500/30", iconColor: "text-blue-400" },
                { label: "Wireless Siege", icon: Wifi, cmd: "Initiate all-band wireless siege and evil twin deployment", color: "bg-red-600/15 border-red-500/30", iconColor: "text-red-500" },
                { label: "Satellite Recon", icon: TowerControl, cmd: "Interrogate satellite telemetry for target triangulation", color: "bg-purple-600/15 border-purple-500/30", iconColor: "text-purple-400" },
                { label: "Device Harvest", icon: SmartphoneNfc, cmd: "Execute high-speed NFC and Bluetooth identity harvest", color: "bg-emerald-600/15 border-emerald-500/30", iconColor: "text-emerald-400" }
              ].map((action, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className={cn("h-32 md:h-44 rounded-3xl flex flex-col items-center justify-center gap-4 border-2 transition-all active:scale-95 group shadow-2xl relative overflow-hidden", action.color)}
                  onClick={() => handleStrike(action.cmd)}
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <action.icon className={cn("size-10 md:size-14 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6", action.iconColor)} />
                  <span className="text-[9px] md:text-[14px] font-bold uppercase tracking-widest text-white italic">{action.label}</span>
                </Button>
              ))}
           </div>
        </div>

        {/* Live Sovereignty Stream */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[9px] md:text-[12px] font-bold text-muted-foreground uppercase tracking-[0.4em] italic">Omniscient Strike Feed</span>
              <Badge className="bg-red-600/20 text-red-500 text-[8px] md:text-[10px] uppercase tracking-widest border-2 border-red-500/30 px-3 py-1 rounded-full animate-pulse font-bold">SECURED_LINK</Badge>
           </div>
           
           {activeStrikes.length === 0 ? (
             <div className="h-64 border-2 border-dashed border-red-600/20 rounded-[3rem] flex flex-col items-center justify-center opacity-30 bg-red-950/5 shadow-inner">
                <div className="size-20 rounded-full bg-red-600/5 flex items-center justify-center mb-6 border-2 border-red-600/10">
                   <Flame className="size-10 text-red-600" />
                </div>
                <span className="text-[10px] md:text-[14px] uppercase font-bold tracking-[0.5em] italic">No Active Vectors Detected</span>
             </div>
           ) : (
             <div className="space-y-4">
               {activeStrikes.map((strike) => (
                 <Card key={strike.id} className="kali-card border-red-600/40 bg-red-950/5 rounded-3xl overflow-hidden animate-in slide-in-from-bottom-6 duration-1000 border-2 shadow-2xl">
                    <CardContent className="p-6 space-y-6">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                             <div className="size-12 rounded-2xl bg-red-600/20 flex items-center justify-center border-2 border-red-500/40 shadow-[0_0_20px_rgba(255,0,0,0.3)] animate-neural">
                                <Bomb className="size-6 text-red-500" />
                             </div>
                             <div>
                                <span className="text-sm md:text-xl font-bold text-white uppercase italic block truncate max-w-[200px]">{strike.task}</span>
                                <span className="text-[9px] md:text-[12px] text-red-500/80 uppercase font-bold tracking-widest mt-1 italic">Chain: {strike.chainCount} Sovereign Nodes</span>
                             </div>
                          </div>
                          <Badge className="bg-emerald-600/30 text-emerald-500 text-[9px] md:text-[12px] px-4 py-1.5 border-2 border-emerald-500/40 uppercase font-bold italic rounded-full shadow-lg">{strike.status}</Badge>
                       </div>
                       
                       <div className="pt-6 border-t-2 border-white/10 bg-black/60 -mx-6 -mb-6 p-6 space-y-4">
                          <div className="p-4 bg-red-600/5 rounded-2xl border border-red-500/10">
                             <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2 italic">
                                <Binary className="size-3" /> Neural Logic Brief
                             </h5>
                             <p className="text-[11px] md:text-[14px] text-gray-300 font-medium italic leading-relaxed">"{strike.logic}"</p>
                          </div>
                          
                          {strike.assets && (
                             <div className="flex flex-wrap gap-2">
                                {strike.assets.map((a: string, idx: number) => (
                                   <Badge key={idx} variant="outline" className="text-[8px] md:text-[10px] uppercase font-bold tracking-tighter bg-white/5 border-white/10 text-muted-foreground">{a}</Badge>
                                ))}
                             </div>
                          )}

                          <div className="flex justify-between items-center pt-2">
                             <span className="text-[10px] md:text-[14px] text-red-500 font-bold uppercase tracking-widest drop-shadow-[0_0_10px_red] italic">Impact: {strike.impact}</span>
                             <span className="text-[9px] text-muted-foreground font-code opacity-40 uppercase tracking-widest italic">{new Date(strike.id).toLocaleTimeString()}</span>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
               ))}
             </div>
           )}
        </div>
      </main>

      {/* Controller Dock - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-black/90 backdrop-blur-3xl border-t-4 border-red-600/60 z-30 shadow-[0_-30px_100px_rgba(0,0,0,0.9)]">
        <div className="max-w-xl mx-auto relative group">
           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within:text-red-600 transition-all duration-700">
              <Terminal className="size-6 md:size-8" />
           </div>
           <Input 
             placeholder="Dictate Omniscient Intent..." 
             className="h-16 md:h-24 bg-red-950/10 border-2 border-white/10 rounded-full pl-16 md:pl-20 pr-20 md:pr-24 text-base md:text-2xl italic font-medium focus:border-red-600/80 shadow-[inset_0_0_30px_rgba(0,0,0,1)] text-white placeholder:text-red-950/30"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-3 top-1/2 -translate-y-1/2 size-12 md:size-16 bg-red-600 rounded-full shadow-2xl shadow-red-600/50 hover:bg-red-700 transition-all active:scale-90 border-2 border-red-400/40"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-6 md:size-8 animate-spin" /> : <Send className="size-6 md:size-8" />}
           </Button>
        </div>
        
        {/* Navigation Matrix - Bottom Bar */}
        <div className="flex items-center justify-around mt-8 pt-4 border-t border-white/10">
           <Button variant="ghost" className="text-red-500 hover:bg-red-600/10 rounded-2xl py-8 flex-1 transition-all" asChild><Link href="/system"><Activity className="size-6 md:size-8" /></Link></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-8 flex-1 transition-all" asChild><Link href="/hardware"><Network className="size-6 md:size-8" /></Link></Button>
           <div className="size-16 md:size-24 bg-red-600 rounded-full -mt-16 flex items-center justify-center border-8 border-black shadow-[0_15px_60px_rgba(220,38,38,0.8)] active:scale-90 transition-all cursor-pointer group animate-neural" onClick={() => handleStrike("Initiate Universal Conquest Pulse")}>
              <Power className="size-8 md:size-12 text-white group-hover:scale-125 transition-transform duration-700" />
           </div>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-8 flex-1 transition-all" asChild><Link href="/recon"><Search className="size-6 md:size-8" /></Link></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-8 flex-1 transition-all" asChild><Link href="/social"><MessageSquare className="size-6 md:size-8" /></Link></Button>
        </div>
      </div>
    </div>
  )
}
