
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
  GripVertical
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
 * @fileOverview واجهة المفترس المتنقلة v1.2 (Mobile Link C2)
 * واجهة تحكم محسنة تتيح الهيمنة الكاملة على المُعِزّ من أي مكان بنمط RAT السيادي.
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
    setTimeout(() => setPulse(false), 2000)
  }, [])

  const handleStrike = async (quickCommand?: string) => {
    const cmdToRun = quickCommand || command
    if (!cmdToRun.trim()) return

    setLoading(true)
    try {
      const result = await processRemoteCommand({ 
        mobileCommand: cmdToRun,
        deviceContext: "Mobile Strike Unit Link"
      })
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: result.status,
        impact: result.estimatedImpact,
        logic: result.neuralLogic,
        chainCount: result.executionChain.length
      }, ...prev])

      toast({ title: "Strike Command Transmitted" })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "C2 Neural Sync Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-body selection:bg-red-500/30 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.1),transparent)] pointer-events-none" />
      
      {/* Mobile C2 Header */}
      <header className="p-6 flex justify-between items-center relative z-20 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className={cn(
            "size-12 rounded-2xl bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-700",
            pulse && "scale-110 shadow-[0_0_50px_rgba(220,38,38,0.8)]"
          )}>
            <Skull className="size-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-headline font-bold italic tracking-tighter">AL-MUIZZ <span className="text-red-500">C2</span></h1>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_emerald]" />
              <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-500">Neural Sync: Active</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <Button size="icon" variant="ghost" className="rounded-xl border border-white/5 bg-white/5 text-red-500"><Volume2 className="size-4" /></Button>
           <Button size="icon" variant="ghost" className="rounded-xl border border-white/5 bg-white/5" asChild>
             <Link href="/"><ArrowLeft className="size-5" /></Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-5 space-y-6 relative z-10 scrollbar-hide pb-32">
        {/* Status Hub */}
        <div className="grid grid-cols-2 gap-4">
           <Card className="glass-card border-red-600/30 bg-red-950/10 rounded-3xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600 animate-pulse" />
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Master Link</div>
              <div className="text-sm font-bold text-white uppercase italic flex items-center gap-2">
                 <Activity className="size-4 text-red-500" /> READY_v19.8
              </div>
           </Card>
           <Card className="glass-card border-white/10 bg-white/5 rounded-3xl p-5">
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Strike Load</div>
              <div className="text-sm font-bold text-red-500 uppercase italic flex items-center gap-2">
                 <Zap className="size-4" /> 0.4ms Latency
              </div>
           </Card>
        </div>

        {/* Quick Action Matrix */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-bold text-red-500/60 uppercase tracking-[0.4em]">Strike Matrix</span>
              <GripVertical className="size-3 text-muted-foreground opacity-30" />
           </div>
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "OSINT Pulse", icon: Search, cmd: "Execute immediate OSINT on target domain", color: "bg-blue-600/10 border-blue-500/20" },
                { label: "Mobile Dump", icon: Smartphone, cmd: "Full deep extraction from connected units", color: "bg-red-600/10 border-red-500/20" },
                { label: "Ghost Mode", icon: ShieldX, cmd: "Wipe all digital traces and logs", color: "bg-orange-600/10 border-orange-500/20" },
                { label: "Neural Link", icon: Binary, cmd: "Sync Alpha Node for strategy", color: "bg-emerald-600/10 border-emerald-500/20" }
              ].map((action, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className={cn("h-28 rounded-3xl flex flex-col items-center justify-center gap-3 border transition-all active:scale-95 group shadow-2xl", action.color)}
                  onClick={() => handleStrike(action.cmd)}
                  disabled={loading}
                >
                  <action.icon className="size-8 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{action.label}</span>
                </Button>
              ))}
           </div>
        </div>

        {/* Live Strike Feed */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">Live Intelligence Feed</span>
              <Badge className="bg-red-600/10 text-red-500 text-[8px] uppercase tracking-tighter border-red-500/20 px-3 py-1">SECURED</Badge>
           </div>
           
           {activeStrikes.length === 0 ? (
             <div className="h-48 border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center opacity-30 bg-white/5">
                <div className="size-16 rounded-full bg-red-600/5 flex items-center justify-center mb-4 border border-red-600/10">
                   <Flame className="size-8 text-red-600" />
                </div>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em]">No Active Vectors Detected</span>
             </div>
           ) : (
             <div className="space-y-4">
               {activeStrikes.map((strike) => (
                 <Card key={strike.id} className="glass-card border-red-600/20 bg-red-950/5 rounded-3xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
                    <CardContent className="p-6 space-y-4">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                             <div className="size-10 rounded-2xl bg-red-600/20 flex items-center justify-center border border-red-500/30 shadow-2xl">
                                <Crosshair className="size-5 text-red-500" />
                             </div>
                             <div>
                                <span className="text-xs font-bold text-white uppercase italic block">{strike.task}</span>
                                <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Strike Chain: {strike.chainCount} Nodes</span>
                             </div>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-500 text-[8px] px-3 py-1 border-emerald-500/30 uppercase">{strike.status}</Badge>
                       </div>
                       <div className="pt-4 border-t border-white/5 bg-black/40 -mx-6 -mb-6 p-6">
                          <p className="text-[10px] text-muted-foreground font-medium italic leading-relaxed mb-3">"{strike.logic}"</p>
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] text-red-500 font-bold uppercase tracking-widest">Impact: {strike.impact}</span>
                             <span className="text-[8px] text-muted-foreground font-code opacity-40">{new Date(strike.id).toLocaleTimeString()}</span>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
               ))}
             </div>
           )}
        </div>
      </main>

      {/* Controller Input Dock */}
      <div className="fixed bottom-0 left-0 w-full p-5 bg-black/80 backdrop-blur-3xl border-t border-white/5 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-md mx-auto relative group">
           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within:text-red-600 transition-all">
              <Terminal className="size-5" />
           </div>
           <Input 
             placeholder="Dictate Sovereign Objective..." 
             className="h-16 bg-white/5 border-white/10 rounded-[2rem] pl-14 pr-16 text-sm italic font-medium focus:border-red-600/50 shadow-inner"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Button 
             className="absolute right-2 top-1/2 -translate-y-1/2 size-12 bg-red-600 rounded-[1.5rem] shadow-2xl shadow-red-600/40 hover:bg-red-700 transition-all active:scale-90"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
           </Button>
        </div>
        
        {/* Mobile Navigation Bar */}
        <div className="flex items-center justify-around mt-6 pt-2 border-t border-white/5">
           <Button variant="ghost" className="text-red-500 hover:bg-red-600/10 rounded-2xl py-6 flex-1"><Activity className="size-5" /></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-6 flex-1" asChild><Link href="/hardware"><Smartphone className="size-5" /></Link></Button>
           <div className="size-16 bg-red-600 rounded-full -mt-12 flex items-center justify-center border-4 border-black shadow-[0_10px_30px_rgba(220,38,38,0.5)] active:scale-90 transition-all cursor-pointer group" onClick={() => handleStrike("Initiate Global Strike Sequence")}>
              <Power className="size-7 text-white group-hover:scale-110 transition-transform" />
           </div>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-6 flex-1" asChild><Link href="/recon"><Search className="size-5" /></Link></Button>
           <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-2xl py-6 flex-1" asChild><Link href="/social"><MessageSquare className="size-5" /></Link></Button>
        </div>
      </div>
    </div>
  )
}
