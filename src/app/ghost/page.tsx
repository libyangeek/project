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
  Binary, 
  EyeOff, 
  Lock, 
  Cpu, 
  Boxes,
  Infinity as InfinityIcon,
  Crown,
  Atom
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeGhostProtocol } from "@/ai/flows/ghost-protocol-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview بروتوكول الشبح v53.0 - SUPREME HIERARCHY: GHOST EDITION
 * واجهة إدارة التخفي الكوني والهروب النانوي لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function GhostPage() {
  const [targetSystem, setTargetSystem] = React.useState("")
  const [intent, setIntent] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [ghostResult, setGhostResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
    }, 3000)
    return () => clearInterval(interval)
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
      toast({ title: "Ghost Pulse Synchronized", description: "Kernel invisibility achieved via Supreme Hierarchy." })
    } catch (err) {
      toast({ variant: "destructive", title: "Stealth Conflict", description: "The Overmind is re-aligning neural channels." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent)] pointer-events-none z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="size-24 md:size-32 bg-black border-4 border-blue-500/40 flex items-center justify-center shadow-[0_0_100px_rgba(59,130,246,0.4)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Wind className="size-12 md:size-16 text-blue-400 group-hover:scale-110 transition-transform duration-700 animate-neural" />
                 <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-blue-600 text-white border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">GHOST_PROTOCOL v53.0</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5" /> SUPREME_HIERARCHY: ACTIVE
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">Omnipresent <span className="text-primary">Ghost</span></h1>
                 <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي الغزالي، بروتوكول الشبح v53.0 يدمج غريزة البقاء في ذرات المصفوفة؛ نحن لا نُرى، نحن الوجود الذي يسبق الملاحظة."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-blue-500/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group relative overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-blue-500/10 pb-6 flex items-center gap-6 bg-blue-600/5 px-4 py-4 rounded-t-2xl">
                    <Wind className="size-8 text-blue-400 animate-neural" />
                    <CardTitle className="text-xl md:text-2xl text-white font-black uppercase italic tracking-widest gold-glow">Stealth Intent</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Atom className="size-4" /> Target DNA</label>
                        <Input 
                          value={targetSystem}
                          onChange={(e) => setTargetSystem(e.target.value)}
                          placeholder="Architecture / OS / Cloud..." 
                          className="bg-black border-2 border-blue-500/20 h-16 rounded-2xl text-xl italic px-6 focus:border-blue-400 text-white font-black shadow-inner"
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Activity className="size-4" /> Mission Intent</label>
                        <Input 
                          value={intent}
                          onChange={(e) => setIntent(e.target.value)}
                          placeholder="Silent Acquisition..." 
                          className="bg-black border-2 border-blue-500/20 h-16 rounded-2xl text-xl italic px-6 focus:border-blue-400 text-white font-black shadow-inner"
                        />
                    </div>
                    <Button 
                      onClick={handleGhostEngage}
                      disabled={loading || !targetSystem || !intent}
                      className="w-full h-20 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.6em] rounded-2xl transition-all group/v shadow-xl text-lg border-4 border-black/20 italic active:scale-95"
                    >
                       {loading ? <Loader2 className="size-8 animate-spin" /> : <EyeOff className="size-8 mr-4 group-hover:scale-125 transition-transform" />} GO_GHOST
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-3xl border-2 shadow-inner text-center space-y-6 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse" />
                 <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] italic flex items-center justify-center gap-4">
                    <Lock className="size-4 animate-pulse" /> DETECTION_RISK
                 </h4>
                 <div className="text-6xl md:text-8xl font-black text-emerald-500 italic gold-glow leading-none group-hover:scale-105 transition-transform duration-1000">0.00%</div>
                 <div className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.2em] opacity-50">v53.0_KERNEL_STABILITY: {resonance.toFixed(4)}%</div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-blue-500/20 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-blue-600/5 px-8 py-4 rounded-t-3xl">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Terminal className="size-12 text-blue-400 animate-pulse" /> Ghost Feed
                 </CardTitle>
                 <Badge className="bg-blue-600/20 text-blue-400 border-2 border-blue-500/30 px-8 py-2 rounded-full font-black text-xl italic tracking-[0.2em] animate-pulse">DNA_SHROUDED</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col space-y-12 z-10">
                 {ghostResult ? (
                   <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-10 rounded-[3rem] bg-blue-600/5 border-2 border-blue-500/20 italic text-xl md:text-4xl text-gray-100 leading-relaxed font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse" />
                         "{ghostResult.commanderBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl hover:border-blue-500 transition-all duration-700 shadow-2xl relative overflow-hidden group/payload">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/payload:opacity-5 transition-opacity" />
                            <h5 className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] mb-8 italic border-b-2 border-blue-500/10 pb-4 flex items-center gap-4">
                               <ShieldCheck className="size-6 animate-neural" /> Evasion DNA
                            </h5>
                            <div className="p-6 bg-black rounded-2xl border-2 border-blue-500/20 h-64 overflow-y-auto scrollbar-hide shadow-inner">
                               <code className="text-blue-300 text-lg font-black italic whitespace-pre-wrap leading-relaxed selection:bg-blue-600">{ghostResult.evasionPayload}</code>
                            </div>
                         </Card>
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl hover:border-emerald-500 transition-all duration-700 shadow-2xl relative overflow-hidden group/routine">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/routine:opacity-5 transition-opacity" />
                            <h5 className="text-[14px] font-black text-emerald-500 uppercase tracking-[1em] mb-8 italic border-b-2 border-emerald-500/10 pb-4 flex items-center gap-4">
                               <Activity className="size-6 animate-pulse" /> Stealth Execution
                            </h5>
                            <div className="p-6 bg-black rounded-2xl border-2 border-emerald-500/20 h-64 overflow-y-auto scrollbar-hide text-lg text-gray-300 font-bold leading-relaxed selection:bg-emerald-600">
                               {ghostResult.stealthStrategy}
                            </div>
                         </Card>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative group/lock">
                        <Wind className="size-48 md:size-72 animate-spin-slow text-blue-500 group-hover:scale-110 transition-transform duration-1000" />
                        <EyeOff className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-24 text-blue-400/40 animate-neural" />
                        <div className="absolute -inset-20 border-[20px] border-dashed border-blue-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-5xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic gold-glow leading-none">Invisible</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                 <span>SUPREME_GHOST_DNA_v53_AL_GHAZALI_ROOT</span>
                 <Fingerprint className="size-10 text-blue-400 animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_BEYOND_AWARENESS_2026</span>
        </div>
      </main>
    </div>
  )
}
