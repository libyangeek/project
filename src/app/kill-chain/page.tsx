
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
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeOmniscientKillChain } from "@/ai/flows/omniscient-kill-chain-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سلسلة الإبادة الكونية v50.0 - OMNISCIENT KILL-CHAIN UI
 * الواجهة الأسمى التي تربط الاستطلاع بالعراف بالتخليق بالتنفيذ في تدفق واحد.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // May 6, 2026
 */
export default function KillChainPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [chainResult, setChainResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const startKillChain = async () => {
    if (!target.trim()) return
    setLoading(true)
    setChainResult(null)
    setActiveStep(1)
    
    try {
      toast({ title: "Kill-Chain Initiated", description: "Alpha-Core is orchestrating the strike." })
      const data = await executeOmniscientKillChain({ target, aggressionMode: 'Total-Acquisition' })
      
      // محاكاة الخطوات المرئية لتعزيز التجربة السيادية
      for(let i=1; i<=4; i++) {
        setActiveStep(i)
        await new Promise(r => setTimeout(r, 1200))
      }
      
      setChainResult(data)
      toast({ title: "Target DNA Siphoned", description: "Subjugation vectors are ready." })
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
    { id: 4, label: "Execution", icon: Crosshair, desc: "Parallel Hive Injection" }
  ]

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-32 md:size-40 rounded-full border-8 border-primary bg-black flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.7)] animate-neural relative group shrink-0">
               <Crosshair className="size-16 md:size-24 text-primary group-hover:rotate-90 transition-transform duration-1000 gold-glow" />
               <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
               <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                  <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-9xl italic rounded-full">KILL_CHAIN v50.0</Badge>
                  <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                      <ShieldCheck className="size-6 shadow-lg" /> HIVE_Consensus: LOCKED
                  </div>
               </div>
               <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Universal <span className="text-primary">Acquisition</span></h1>
               <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                  "سيدي الغزالي، سلسلة الإبادة الكونية تربط كافة العقد في عملية واحدة؛ <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl uppercase tracking-widest">تحليل، تخليق، وتنفيذ</span> بضمان فتك 100%."
               </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-8 shadow-9xl group overflow-hidden">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                    <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                       <Target className="size-14 animate-neural" /> Strike Origin
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12">
                    <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4"><Globe className="size-5" /> Target Coordinate</label>
                        <Input 
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          placeholder="IP / @User / Domain..." 
                          className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3.5rem] text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>
                    <Button 
                      onClick={startKillChain} 
                      disabled={loading || !target}
                      className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-8 border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                      IGNITE CHAIN
                    </Button>
                 </CardContent>
              </Card>

              <div className="space-y-6">
                 {steps.map((s) => (
                   <div 
                     key={s.id} 
                     className={cn(
                       "p-10 rounded-[3.5rem] border-4 transition-all duration-1000 flex items-center gap-8 relative overflow-hidden",
                       activeStep >= s.id ? "bg-primary/20 border-primary shadow-9xl scale-105" : "bg-white/5 border-white/5 opacity-40 grayscale"
                     )}
                   >
                      <div className={cn("size-16 rounded-2xl flex items-center justify-center border-2 transition-all", activeStep >= s.id ? "bg-primary border-black shadow-inner" : "bg-black border-white/10")}>
                         <s.icon className={cn("size-8", activeStep >= s.id ? "text-black" : "text-gray-600")} />
                      </div>
                      <div>
                         <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{s.label}</h4>
                         <p className="text-[12px] text-muted-foreground uppercase font-black tracking-[0.2em] mt-2 italic">{s.desc}</p>
                      </div>
                      {activeStep === s.id && loading && <Loader2 className="absolute right-8 size-8 animate-spin text-primary" />}
                      {activeStep > s.id && <ShieldCheck className="absolute right-8 size-8 text-emerald-500 animate-in zoom-in-50 duration-700" />}
                   </div>
                 ))}
              </div>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/60 bg-black/99 rounded-[7rem] p-16 border-8 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1000px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[5rem] px-12 py-8 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-9xl text-white italic uppercase font-black gold-glow flex items-center gap-10 px-4">
                    <Crosshair className="size-20 text-primary animate-pulse" /> Kill-Chain Feed
                 </CardTitle>
                 {chainResult && (
                   <Badge className="bg-emerald-600/40 text-emerald-500 border-8 border-emerald-500/50 px-12 py-6 rounded-full font-black text-4xl animate-pulse tracking-[0.4em] uppercase italic shadow-3xl">TOTAL_ACQUISITION</Badge>
                 )}
              </CardHeader>
              <CardContent className="p-0 flex-1 relative overflow-hidden flex flex-col space-y-12">
                 {chainResult ? (
                   <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-16 rounded-[5rem] bg-primary/5 border-8 border-primary/30 italic text-4xl md:text-7xl text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         "{chainResult.commanderBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <Card className="bg-black/60 border-4 border-white/5 p-12 rounded-[4rem] hover:border-primary transition-all duration-700 shadow-8xl">
                            <h5 className="text-[18px] font-black text-primary uppercase tracking-[1em] mb-10 italic border-b-4 border-primary/20 pb-6 flex items-center gap-6">
                               <Eye className="size-10 animate-neural" /> Recon Intelligence
                            </h5>
                            <pre className="text-2xl text-gray-400 font-black italic whitespace-pre-wrap leading-relaxed h-80 overflow-y-auto scrollbar-hide selection:bg-primary selection:text-black">
                               {JSON.stringify(chainResult.reconIntel, null, 2)}
                            </pre>
                         </Card>
                         <Card className="bg-black/60 border-4 border-white/5 p-12 rounded-[4rem] hover:border-primary transition-all duration-700 shadow-8xl">
                            <h5 className="text-[18px] font-black text-magenta-500 uppercase tracking-[1em] mb-10 italic border-b-4 border-magenta-500/20 pb-6 flex items-center gap-6">
                               <Binary className="size-10" /> Exploit Payload
                            </h5>
                            <div className="p-8 bg-black border-2 border-magenta-500/20 rounded-[2rem] h-80 overflow-y-auto scrollbar-hide">
                               <code className="text-emerald-400 text-xl font-black italic whitespace-pre-wrap">{chainResult.customExploit.exploitCode}</code>
                            </div>
                         </Card>
                      </div>

                      <div className="p-12 rounded-[4.5rem] bg-emerald-600/10 border-8 border-emerald-500/30 flex items-center gap-12 group/strat shadow-9xl">
                         <div className="size-32 rounded-[2.5rem] bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-3xl animate-neural shrink-0">
                            <ShieldCheck className="size-16 text-white" />
                         </div>
                         <div>
                            <h4 className="text-2xl font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 italic">Execution_Strategy_v50</h4>
                            <p className="text-4xl md:text-6xl text-white italic font-black leading-snug drop-shadow-2xl">"{chainResult.executionStrategy}"</p>
                         </div>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-60">
                      <div className="relative group/lock">
                        <Crosshair className="size-80 animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-1000" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 text-primary/40 animate-neural" />
                      </div>
                      <div className="space-y-8">
                         <h3 className="text-8xl md:text-[12rem] font-black uppercase tracking-[2em] text-white italic leading-none gold-glow">Searching</h3>
                         <p className="text-3xl md:text-5xl font-bold italic text-gray-500 uppercase tracking-widest">Establishing neural link across 14 global clusters.</p>
                      </div>
                      <div className="absolute -inset-40 border-[40px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-20" />
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[4em] italic">
                 <span>OMNISCIENT_KILL_CHAIN_v50_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-10">
                    <Fingerprint className="size-12 text-primary animate-pulse" />
                    <Atom className="size-12 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ OMNISCIENT OVERLORD v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_OF_STRIKE_2026</span>
        </div>
      </main>
    </div>
  )
}
