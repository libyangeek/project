
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
  Power
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { processRemoteCommand } from "@/ai/flows/remote-command-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview واجهة المفترس المتنقلة v1.0 (Mobile Link C2)
 * واجهة تحكم محسنة للموبايل تتيح السيطرة الكاملة على المُعِزّ من أي مكان.
 */
export default function MobileRemotePage() {
  const [command, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeStrikes, setActiveStrikes] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [pulse, setPulse] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // محاكاة الاتصال بالعقدة الرئيسية
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
        deviceContext: "Remote Controller Link"
      })
      
      setActiveStrikes(prev => [{
        id: Date.now(),
        task: cmdToRun,
        status: 'EXECUTING',
        impact: result.estimatedImpact
      }, ...prev])

      toast({ title: "Strike Command Transmitted" })
      setInput("")
    } catch (err) {
      toast({ variant: "destructive", title: "C2 Sync Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col font-body">
      {/* Mobile C2 Header */}
      <header className="flex justify-between items-center mb-8 pt-4">
        <div className="flex items-center gap-4">
          <div className={cn(
            "size-12 rounded-2xl bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_20px_rgba(220,38,38,0.5)]",
            pulse && "animate-pulse"
          )}>
            <Skull className="size-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-headline font-bold italic tracking-tighter">AL-MUIZZ <span className="text-red-500">C2</span></h1>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-500">Link Established</span>
            </div>
          </div>
        </div>
        <Button size="icon" variant="ghost" className="rounded-xl border border-white/5 bg-white/5" asChild>
          <Link href="/"><ArrowLeft className="size-5" /></Link>
        </Button>
      </header>

      {/* Connection Pulse */}
      <Card className="glass-card border-red-600/20 bg-red-950/5 mb-6 rounded-3xl overflow-hidden relative">
         <div className="absolute top-0 left-0 w-1 h-full bg-red-600 shadow-[0_0_10px_red]" />
         <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
               <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Master Node Status</span>
               <div className="text-sm font-bold text-white flex items-center gap-2 uppercase italic">
                  <Activity className="size-4 text-red-500" /> Operational Ready
               </div>
            </div>
            <Badge variant="outline" className="border-red-500/30 text-red-500 text-[9px] font-code py-1">PREDATOR_v18</Badge>
         </CardContent>
      </Card>

      {/* Quick Action Matrix */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { label: "OSINT Pulse", icon: Search, cmd: "Run quick OSINT on current target", color: "bg-blue-600/10 border-blue-500/20" },
          { label: "Mobile Dump", icon: Smartphone, cmd: "Deep data extraction from connected units", color: "bg-red-600/10 border-red-500/20" },
          { label: "Ghost Mode", icon: ShieldX, cmd: "Wipe all local and remote logs", color: "bg-orange-600/10 border-orange-500/20" },
          { label: "Neural Link", icon: Zap, cmd: "Sync with Alpha Node for strategy", color: "bg-emerald-600/10 border-emerald-500/20" }
        ].map((action, i) => (
          <Button 
            key={i} 
            variant="outline" 
            className={cn("h-28 rounded-3xl flex flex-col items-center justify-center gap-3 border transition-all active:scale-95 group", action.color)}
            onClick={() => handleStrike(action.cmd)}
            disabled={loading}
          >
            <action.icon className="size-8 text-white group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{action.label}</span>
          </Button>
        ))}
      </div>

      {/* Command Input Area */}
      <div className="flex-1 flex flex-col">
        <div className="relative mb-6">
           <Input 
             placeholder="Speak or Type Command..." 
             className="h-16 bg-white/5 border-white/10 rounded-2xl pl-12 text-sm italic font-medium focus:border-red-600/40"
             value={command}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleStrike()}
           />
           <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-red-600/40" />
           <Button 
             className="absolute right-2 top-1/2 -translate-y-1/2 size-12 bg-red-600 rounded-xl shadow-lg shadow-red-600/30"
             onClick={() => handleStrike()}
             disabled={loading || !command.trim()}
           >
             {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
           </Button>
        </div>

        {/* Live Strike Feed */}
        <div className="flex-1 space-y-4 overflow-y-auto pb-10 scrollbar-hide">
           <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Remote Strike Log</span>
              <Badge className="bg-white/5 text-[8px] uppercase tracking-tighter border-white/5">Auto-Refreshed</Badge>
           </div>
           
           {activeStrikes.length === 0 ? (
             <div className="h-40 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center opacity-30">
                <Flame className="size-10 mb-2" />
                <span className="text-[9px] uppercase font-bold tracking-widest">No Active Vectors</span>
             </div>
           ) : (
             activeStrikes.map((strike) => (
               <Card key={strike.id} className="glass-card border-white/5 bg-white/5 rounded-2xl animate-in slide-in-from-bottom-2">
                  <CardContent className="p-4 space-y-3">
                     <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                           <div className="size-8 rounded-lg bg-red-600/20 flex items-center justify-center border border-red-500/30">
                              <Zap className="size-4 text-red-500" />
                           </div>
                           <span className="text-xs font-bold text-white uppercase italic">{strike.task}</span>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-500 text-[8px] px-2">{strike.status}</Badge>
                     </div>
                     <div className="pt-2 border-t border-white/5">
                        <p className="text-[10px] text-muted-foreground font-medium italic">Impact: {strike.impact}</p>
                     </div>
                  </CardContent>
               </Card>
             ))
           )}
        </div>
      </div>

      {/* Floating Bottom Navigation */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] glass h-16 rounded-[2rem] border border-white/10 flex items-center justify-around px-6 z-50 shadow-2xl backdrop-blur-3xl">
         <Button variant="ghost" className="text-red-500 hover:bg-red-600/10 rounded-xl"><Activity className="size-6" /></Button>
         <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-xl" asChild><Link href="/hardware"><Smartphone className="size-6" /></Link></Button>
         <div className="size-14 bg-red-600 rounded-full -mt-10 flex items-center justify-center border-4 border-black shadow-[0_10px_20px_rgba(220,38,38,0.4)] active:scale-90 transition-all cursor-pointer" onClick={() => handleStrike("Global Strike Pulse")}>
            <Power className="size-6 text-white" />
         </div>
         <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-xl" asChild><Link href="/recon"><Search className="size-6" /></Link></Button>
         <Button variant="ghost" className="text-muted-foreground hover:bg-white/5 rounded-xl" asChild><Link href="/social"><MessageSquare className="size-6" /></Link></Button>
      </footer>
    </div>
  )
}
