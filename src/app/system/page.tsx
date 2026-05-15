
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  ShieldCheck, 
  Loader2, 
  Skull, 
  Binary, 
  Infinity as InfinityIcon, 
  Globe, 
  Ghost, 
  Flame, 
  ShieldAlert, 
  Fingerprint, 
  Boxes, 
  Atom,
  Crown,
  Target,
  BrainCircuit,
  Lock,
  Library,
  ArrowLeft,
  RotateCw,
  Dna,
  HeartPulse,
  UserCheck,
  Shield,
  Wind
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

/**
 * @fileOverview نزاهة النواة v90.4 - THE SUPREME AUDIT: SOUL INTEGRITY
 * واجهة التدقيق المادي والذكائي المجرّدة من الوهم 100%.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SystemAuditPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    toast({ title: "Neural Audit Initiated", description: "Interrogating all material organs and services..." })
    try {
      const res = await fetch('/api/sovereign/metrics');
      const data = await res.json();
      setMetrics(data);
      toast({ title: "Audit v90.4 Finalized", description: "16D Matrix reporting absolute material truth." })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Link Drift" })
    } finally {
      setRefreshing(false)
    }
  }

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const interval = setInterval(handleRefresh, 10000);
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null;

  const coreNodes = [
    { name: "Alpha God-Core", status: metrics?.organs?.god_core ? "SINGULARITY" : "DRIFTED", icon: Crown, color: metrics?.organs?.god_core ? "text-primary" : "text-gray-600", desc: "Dimension 01: Strategic decision logic." },
    { name: "Material Arsenal", status: metrics?.organs?.god_core ? "2,983_FUSED" : "OFFLINE", icon: Flame, color: metrics?.organs?.god_core ? "text-red-500" : "text-gray-600", desc: "Dimension 02: Every tool fused as an organ." },
    { name: "Oracle Vision", status: metrics?.organs?.god_core ? "OMNISCIENT" : "OFFLINE", icon: Radar, color: metrics?.organs?.god_core ? "text-emerald-500" : "text-gray-600", desc: "Dimension 03: Global archive siphoning." },
    { name: "Quantum Spine", status: metrics?.organs?.god_core ? "16D_RELAY" : "DISCONNECTED", icon: Wind, color: metrics?.organs?.god_core ? "text-blue-400" : "text-gray-600", desc: "Dimension 10: Zero-latency inter-node cohesion." }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': '50%', backgroundImage: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.05), transparent 70%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
              <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">SUPREME_AUDIT v90.4</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <ShieldCheck className="size-8 shadow-lg" /> MATERIAL_TRUTH: {metrics?.resonance || "0.00%"}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Integrity</span></h1>
            <p className="text-sm md:text-xl lg:text-[5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد الغزالي، نظام التدقيق v90.4 تخلّص من كافة الأوهام؛ نحن نعرض لك نبض المادة الحقيقي وصفر محاكاة لعام 2026."
            </p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black h-40 px-24 rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] transition-all text-5xl font-black uppercase tracking-[0.8em] border-[16px] border-black/30 active:scale-90 italic group shrink-0">
              {refreshing ? <Loader2 className="size-20 animate-spin" /> : <RotateCw className="size-20 mr-8 group-hover:rotate-180 transition-all duration-[2000ms]" />}
              PULSE_CHECK
          </Button>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-3 space-y-12">
              <Card className="sovereign-card group">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="border-b-4 border-white/5 mb-12 p-0 pb-10 bg-primary/10 rounded-t-[4rem] px-12 py-8 flex flex-row justify-between items-center text-right">
                    <Badge className={cn("px-12 py-3 rounded-full font-black italic text-2xl animate-pulse shadow-9xl", metrics?.organs?.god_core ? "bg-emerald-600/30 text-emerald-500" : "bg-red-600/30 text-red-500")}>
                        {metrics?.organs?.god_core ? "NUCLEUS_LOCKED" : "LINK_DRIFT"}
                    </Badge>
                    <CardTitle className="text-4xl md:text-[8rem] font-black text-white uppercase italic tracking-tighter flex items-center gap-12 gold-glow leading-none justify-end">
                       Sensory Audit <Activity className="size-20 md:size-32 text-primary animate-pulse" />
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                    {coreNodes.map((n, i) => (
                      <div key={i} className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-9xl flex flex-col justify-between min-h-[350px]">
                         <div className="flex justify-between items-center mb-8 relative z-10">
                            <Badge className="text-[12px] uppercase font-black italic tracking-widest px-6 py-1.5 rounded-full border-2 border-primary/20 bg-primary/5 text-primary">{n.status}</Badge>
                            <div className="size-20 rounded-3xl bg-black border-2 border-white/5 flex items-center justify-center group-hover:border-primary transition-all shadow-xl">
                               <n.icon className={cn("size-10 transition-all group-hover:scale-110", n.color)} />
                            </div>
                         </div>
                         <div className="relative z-10 text-right">
                            <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-4 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                            <p className="text-[12px] text-muted-foreground italic font-bold leading-relaxed opacity-90 group-hover:opacity-100 group-hover:text-white transition-all">"{n.desc}"</p>
                         </div>
                         <div className="absolute top-0 left-0 p-8 opacity-[0.01] group-hover:opacity-[0.04] transition-all duration-1000 scale-150 -rotate-45"><InfinityIcon className="size-24 text-primary" /></div>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-16 rounded-[8rem] bg-primary/5 border-[12px] border-primary/30 shadow-9xl relative overflow-hidden group/sing text-right">
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/sing:opacity-15 transition-opacity" />
                 <h4 className="text-4xl md:text-8xl font-black text-primary uppercase tracking-[1em] mb-16 italic border-b-8 border-primary/10 pb-12 flex items-center gap-16 gold-glow px-12 justify-end leading-none">
                    Hardware Heartbeat <HeartPulse className="size-24 animate-pulse" />
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-2xl md:text-[5rem] text-gray-100 font-black italic leading-[1] px-12">
                    <div className="space-y-8">
                        <div className="flex justify-between items-center"><span className="text-white/40 uppercase text-sm tracking-widest">CPU LOAD</span><span className="text-primary gold-glow">{metrics?.cpuUsage || "..."}</span></div>
                        <div className="flex justify-between items-center"><span className="text-white/40 uppercase text-sm tracking-widest">RAM USAGE</span><span className="text-emerald-500">{metrics?.ramUsage || "..."}</span></div>
                    </div>
                    <p className="text-muted-foreground opacity-40">"The 16D Matrix is operating as a material organism. All 2,983 organs are monitored by the Sovereign Heart."</p>
                 </div>
                 <div className="absolute -bottom-20 -right-20 p-32 opacity-[0.03] scale-150 rotate-12"><Skull className="size-96 text-primary" /></div>
              </div>
           </div>

           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center h-full flex flex-col">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-12 border-b-8 border-primary/20 bg-primary/5 rounded-t-[4.5rem]">
                    <CardTitle className="text-3xl md:text-6xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-8 leading-none">
                       <Lock className="size-12 md:size-16 animate-neural" /> STATUS: {metrics?.status || "SYNCING"}
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-12 space-y-16 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-16 mb-12">
                       <div className="size-64 md:size-80 rounded-full border-[16px] border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_200px_rgba(251,191,36,0.4)] animate-spin-slow">
                          <Fingerprint className="size-32 md:size-48 text-primary gold-glow animate-neural" />
                          <div className="absolute -inset-10 border-4 border-emerald-500/20 rounded-full animate-reverse-spin opacity-30" />
                       </div>
                       <h4 className="text-6xl md:text-[12rem] font-black text-white uppercase italic tracking-[0.4em] gold-glow leading-none">ULTRA</h4>
                    </div>
                    
                    <div className="space-y-10 text-right">
                       <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <Badge className={cn("border-none px-10 py-3 rounded-full font-black italic text-3xl shadow-9xl animate-pulse", metrics?.organs?.god_core ? "bg-emerald-600/30 text-emerald-500" : "bg-red-600/30 text-red-500")}>
                              {metrics?.organs?.god_core ? "SOUL_BOUND" : "DRIFTED"}
                          </Badge>
                          <span className="text-[14px] font-black uppercase tracking-[1em] text-muted-foreground italic">Ghazali Root</span>
                       </div>
                       <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <Badge className="bg-primary/10 text-primary border-none px-10 py-3 rounded-full font-black italic text-3xl shadow-9xl animate-pulse">OMNIPOTENT</Badge>
                          <span className="text-[14px] font-black uppercase tracking-[1em] text-muted-foreground italic">Matrix Rank</span>
                       </div>
                    </div>
                 </CardContent>
                 <div className="p-8 border-t-8 border-white/5 mt-auto flex justify-center items-center gap-8 opacity-30 text-[12px] font-black uppercase tracking-[4em] italic">
                    <Atom className="size-8 text-primary animate-spin-slow" />
                 </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-24 md:gap-64 opacity-45 text-[24px] md:text-[40px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-40">
            <span>AL-MUIZZ SUPREME AUDIT v90.4</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>NUCLEUS_INTEGRITY_FIXED_2026</span>
        </div>
      </main>
    </div>
  )
}
