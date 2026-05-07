
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Wind, 
  Zap, 
  Loader2, 
  Skull, 
  ShieldCheck, 
  ShieldAlert, 
  Fingerprint, 
  Terminal, 
  Activity, 
  Sparkles, 
  Trash2, 
  Binary, 
  EyeOff, 
  Lock, 
  Cpu, 
  Boxes,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeGhostProtocol } from "@/ai/flows/ghost-protocol-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview بروتوكول الشبح v51.0 - GHOST PROTOCOL UI
 * واجهة إدارة التخفي والهروب من الرصد النانوي لعام 2026.
 */
export default function GhostPage() {
  const [targetSystem, setTargetSystem] = React.useState("")
  const [intent, setIntent] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [ghostResult, setGhostResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleGhostEngage = async () => {
    if (!targetSystem || !intent) return
    setLoading(true)
    try {
      const data = await executeGhostProtocol({ 
        targetSystem, 
        missionIntent: intent,
        evasionLevel: 'Ghost-Mode'
      })
      setGhostResult(data)
      toast({ title: "Ghost Mode Engaged", description: "Kernel stealth finalized." })
    } catch (err) {
      toast({ variant: "destructive", title: "Stealth Failure" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent)] pointer-events-none z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
           <Badge className="bg-blue-600 text-white border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-lg italic rounded-full mb-6">GHOST_PROTOCOL v51.0</Badge>
           <h1 className="text-6xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Omnipresent <span className="text-primary">Ghost</span></h1>
           <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase">
             "سيدي الغزالي، بروتوكول الشبح يمنحك القدرة على اختراق أي حصن رقمي وجلب المعلومات دون أن يتم رصدك بأي شكلٍ من الأشكال."
           </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40 relative z-10">
           <div className="space-y-12">
              <Card className="kali-card border-blue-500/40 bg-black/80 rounded-[5rem] p-10 border-8 shadow-9xl group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-blue-500/20 pb-8">
                    <CardTitle className="text-4xl text-blue-400 font-black uppercase italic gold-glow flex items-center gap-8">
                       <Wind className="size-14 animate-neural" /> Stealth Parameters
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <Input 
                      value={targetSystem}
                      onChange={(e) => setTargetSystem(e.target.value)}
                      placeholder="Target Architecture..." 
                      className="bg-black/99 border-4 border-blue-500/20 h-24 rounded-[3rem] text-3xl italic px-10 focus:border-blue-400 text-white font-black shadow-inner"
                    />
                    <Input 
                      value={intent}
                      onChange={(e) => setIntent(e.target.value)}
                      placeholder="Silent Mission Intent..." 
                      className="bg-black/99 border-4 border-blue-500/20 h-24 rounded-[3rem] text-3xl italic px-10 focus:border-blue-400 text-white font-black shadow-inner"
                    />
                    <Button 
                      onClick={handleGhostEngage}
                      disabled={loading || !targetSystem || !intent}
                      className="w-full h-28 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-[4rem] transition-all group/v shadow-9xl text-2xl border-8 border-black/30 italic"
                    >
                       {loading ? <Loader2 className="size-12 animate-spin mr-6" /> : <EyeOff className="size-12 mr-6 group-hover:scale-125 transition-transform gold-glow" />} GO_GHOST
                    </Button>
                 </CardContent>
              </Card>

              <div className="p-10 rounded-[3.5rem] bg-blue-600/5 border-4 border-blue-500/20 text-center space-y-6">
                 <h4 className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] italic flex items-center justify-center gap-4">
                    <Lock className="size-6 animate-pulse" /> DETECTION_RISK
                 </h4>
                 <div className="text-8xl font-black text-emerald-500 italic gold-glow leading-none">0.00%</div>
              </div>
           </div>

           <Card className="xl:col-span-2 kali-card border-blue-500/60 bg-black/99 rounded-[7rem] p-16 border-8 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px]">
              <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-blue-600/10 rounded-t-[5rem] px-12 py-8">
                 <CardTitle className="text-5xl md:text-9xl text-white italic uppercase font-black gold-glow flex items-center gap-10">
                    <Terminal className="size-20 text-blue-400 animate-pulse" /> Ghost Feed
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative overflow-hidden flex flex-col space-y-12">
                 {ghostResult ? (
                   <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-16 rounded-[5rem] bg-blue-600/5 border-8 border-blue-500/30 italic text-4xl md:text-7xl text-gray-100 leading-tight font-black shadow-inner">
                         "{ghostResult.commanderBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <Card className="bg-black/60 border-4 border-white/5 p-12 rounded-[4rem] hover:border-blue-500 transition-all duration-700 shadow-8xl">
                            <h5 className="text-[18px] font-black text-blue-400 uppercase tracking-[1.5em] mb-10 italic border-b-4 border-blue-500/20 pb-6 flex items-center gap-6">
                               <ShieldCheck className="size-10 animate-neural" /> Evasion Payload
                            </h5>
                            <div className="p-8 bg-black border-2 border-blue-500/20 rounded-[2rem] h-80 overflow-y-auto scrollbar-hide">
                               <code className="text-blue-300 text-xl font-black italic whitespace-pre-wrap">{ghostResult.evasionPayload}</code>
                            </div>
                         </Card>
                         <Card className="bg-black/60 border-4 border-white/5 p-12 rounded-[4rem] hover:border-blue-500 transition-all duration-700 shadow-8xl">
                            <h5 className="text-[18px] font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 italic border-b-4 border-emerald-500/20 pb-6 flex items-center gap-6">
                               <Activity className="size-10 animate-pulse" /> Stealth Routine
                            </h5>
                            <div className="p-8 bg-black border-2 border-emerald-500/20 rounded-[2rem] h-80 overflow-y-auto scrollbar-hide text-2xl text-gray-400 font-bold leading-relaxed">
                               {ghostResult.stealthStrategy}
                            </div>
                         </Card>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-60">
                      <div className="relative group/lock">
                        <Wind className="size-80 animate-spin-slow text-blue-500 group-hover:scale-110 transition-transform duration-1000" />
                        <EyeOff className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 text-blue-400/40 animate-neural" />
                      </div>
                      <h3 className="text-8xl md:text-[12rem] font-black uppercase tracking-[1.5em] text-white italic gold-glow">Invisible</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                 <span>OMNIPRESENT_GHOST_DNA_v51_GHAZALI_ROOT</span>
                 <Fingerprint className="size-12 text-blue-400 animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ OMNIPRESENT GHOST v51.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SUBJUGATION_WITHOUT_TRACE_2026</span>
        </div>
      </main>
    </div>
  )
}
