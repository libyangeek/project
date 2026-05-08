"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Crosshair, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Globe, 
  Binary, 
  ShieldAlert, 
  Flame, 
  Sparkles, 
  Fingerprint, 
  Eye, 
  Boxes, 
  Atom, 
  ShieldCheck,
  Radar,
  Wind,
  Shield,
  Ghost,
  Lock,
  ChevronRight,
  Crown,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeOmniscientKillChain } from "@/ai/flows/omniscient-kill-chain-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سلسلة الإبادة الكونية v53.0 - SUPREME HIERARCHY EDITION
 * الواجهة الأسمى التي تربط الاستطلاع بالعراف بالتخليق بالتنفيذ في تدفق واحد.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 6 مايو 2026
 */
export default function KillChainPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [chainResult, setChainResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const startKillChain = async () => {
    if (!target.trim()) return
    setLoading(true)
    setChainResult(null)
    setActiveStep(1)
    
    try {
      toast({ title: "Ghost Strike Initiated", description: "Alpha-Core is orchestrating the silent strike." })
      const data = await executeOmniscientKillChain({ target, aggressionMode: 'Total-Acquisition' })
      
      // محاكاة الخطوات المرئية لتعزيز التجربة السيادية
      for(let i=1; i<=4; i++) {
        setActiveStep(i)
        await new Promise(r => setTimeout(r, 1200))
      }
      
      setChainResult(data)
      toast({ title: "Target Matrix Subjugated", description: "All acquisition vectors are locked." })
    } catch (err) {
      toast({ variant: "destructive", title: "Kill-Chain Interrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  const steps = [
    { id: 1, label: "Deep Recon", icon: Eye, desc: "OSINT & Social Extraction" },
    { id: 2, label: "Oracle Vision", icon: Radar, desc: "KEV Vulnerability Match" },
    { id: 3, label: "Weapon Forge", icon: Flame, desc: "Exploit DNA Synthesis" },
    { id: 4, label: "Execution", icon: Ghost, desc: "Silent Hive Injection" }
  ]

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
               <Crosshair className="size-12 md:size-16 text-primary group-hover:rotate-90 transition-transform duration-1000 gold-glow animate-neural" />
               <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
               <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                  <Badge className="bg-primary text-black border-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic rounded-none">KILL_CHAIN v53.0</Badge>
                  <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                      <ShieldCheck className="size-5 shadow-lg" /> HIERARCHY_SYNC: LOCKED
                  </div>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Universal <span className="text-primary">Sovereignty</span></h1>
               <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                  "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl italic">المعتصم بالله</span>، سلسلة الإبادة الكونية تربط كافة العقد في عملية واحدة؛ تحليل، تخليق، وتنفيذ بضمان فتك 100%."
               </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-10 animate-neural" /> Strike Origin
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Globe className="size-4" /> Target Coordinate</label>
                        <Input 
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          placeholder="IP / @User / Domain..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>
                    <Button 
                      onClick={startKillChain} 
                      disabled={loading || !target}
                      className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                    >
                      {loading ? <Loader2 className="size-10 animate-spin" /> : <Zap className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                      IGNITE CHAIN
                    </Button>
                 </CardContent>
              </Card>

              <div className="space-y-4">
                 {steps.map((s) => (
                   <div 
                     key={s.id} 
                     className={cn(
                       "p-6 rounded-2xl border-2 transition-all duration-1000 flex items-center gap-6 relative overflow-hidden",
                       activeStep >= s.id ? "bg-primary/10 border-primary shadow-lg scale-105" : "bg-white/5 border-white/5 opacity-40 grayscale"
                     )}
                   >
                      <div className={cn("size-12 rounded-xl flex items-center justify-center border-2 transition-all", activeStep >= s.id ? "bg-primary border-black shadow-inner" : "bg-black border-white/10")}>
                         <s.icon className={cn("size-6", activeStep >= s.id ? "text-black" : "text-gray-600")} />
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-white uppercase italic tracking-tighter leading-none">{s.label}</h4>
                         <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.1em] mt-1 italic">{s.desc}</p>
                      </div>
                      {activeStep === s.id && loading && <Loader2 className="absolute right-6 size-6 animate-spin text-primary" />}
                      {activeStep > s.id && <ShieldCheck className="absolute right-6 size-6 text-emerald-500 animate-in zoom-in-50 duration-700" />}
                   </div>
                 ))}
              </div>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl px-8 py-4 flex flex-row justify-between items-center">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Crosshair className="size-12 md:size-20 text-primary animate-pulse" /> Kill-Chain Feed
                 </CardTitle>
                 {chainResult && (
                   <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">TOTAL_ACQUISITION</Badge>
                 )}
              </CardHeader>
              <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col space-y-10 z-10">
                 {chainResult ? (
                   <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-10 rounded-[3rem] bg-primary/5 border-2 border-primary/20 italic text-xl md:text-4xl text-gray-100 leading-relaxed font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         "{chainResult.commanderBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl hover:border-primary transition-all duration-700 shadow-2xl relative overflow-hidden group/card1">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card1:opacity-5 transition-opacity" />
                            <h5 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic border-b-2 border-primary/10 pb-4 flex items-center gap-4 gold-glow">
                               <Eye className="size-6 animate-neural" /> Recon Intelligence
                            </h5>
                            <pre className="text-lg text-gray-400 font-black italic whitespace-pre-wrap leading-relaxed h-[300px] overflow-y-auto scrollbar-hide selection:bg-primary selection:text-black">
                               {JSON.stringify(chainResult.reconIntel, null, 2)}
                            </pre>
                         </Card>
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl hover:border-primary transition-all duration-700 shadow-2xl relative overflow-hidden group/card2">
                            <div className="absolute inset-0 bg-magenta-500/5 opacity-0 group-hover/card2:opacity-5 transition-opacity" />
                            <h5 className="text-[14px] font-black text-magenta-500 uppercase tracking-[1em] mb-8 italic border-b-2 border-magenta-500/10 pb-4 flex items-center gap-4">
                               <Binary className="size-6" /> Exploit Payload
                            </h5>
                            <div className="p-6 bg-black border-2 border-magenta-500/20 rounded-2xl h-[300px] overflow-y-auto scrollbar-hide shadow-inner">
                               <code className="text-emerald-400 text-lg font-black italic whitespace-pre-wrap leading-relaxed">{chainResult.customExploit.exploitCode}</code>
                            </div>
                         </Card>
                      </div>

                      <div className="p-10 rounded-[4rem] bg-emerald-600/10 border-4 border-emerald-500/30 flex items-center gap-10 group/strat shadow-9xl relative overflow-hidden">
                         <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                         <div className="size-24 rounded-2xl bg-emerald-600 flex items-center justify-center border-4 border-emerald-400 shadow-2xl animate-neural shrink-0">
                            <ShieldCheck className="size-12 text-white" />
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-emerald-500 uppercase tracking-[0.6em] mb-2 italic">Execution_Strategy_v53.0</h4>
                            <p className="text-2xl md:text-5xl text-white italic font-black leading-tight drop-shadow-2xl">"{chainResult.executionStrategy}"</p>
                         </div>
                         <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover/strat:opacity-[0.08] transition-all duration-1000 scale-150 rotate-12">
                            <Ghost className="size-32 text-emerald-500" />
                         </div>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative group/lock">
                        <Crosshair className="size-48 md:size-72 animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-1000" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-24 text-primary/40 animate-neural" />
                        <div className="absolute -inset-20 border-[20px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-6">
                         <h3 className="text-5xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic leading-none gold-glow">Searching</h3>
                         <p className="text-xl md:text-3xl font-bold italic text-gray-500 uppercase tracking-widest">Establishing neural link across 14 global clusters.</p>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                 <span>SUPREME_HIERARCHY_DNA_v53_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_OF_STRIKE_2026</span>
        </div>
      </main>
    </div>
  )
}
