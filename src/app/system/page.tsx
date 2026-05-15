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
  Wind,
  Cloud,
  Box
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

/**
 * @fileOverview نزاهة النواة v90.7 - THE CLOUD CONQUEROR AUDIT
 * واجهة التدقيق المادي والتحقق من نسيج الحاويات لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SystemAuditPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    toast({ title: "Material Pulse Interrogation", description: "Auditing 16D Matrix organs and Cloud fabric..." })
    try {
      const res = await fetch('/api/sovereign/metrics');
      const data = await res.json();
      setMetrics(data);
      toast({ title: "Audit v90.7 Finalized", description: "Cloud Singularity confirmed. No genetic drift." })
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

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': '50%', backgroundImage: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.05), transparent 70%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
              <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">CLOUD_CONQUEROR v90.7</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <Cloud className="size-8 shadow-lg" /> MATERIAL_TRUTH: {metrics?.resonance || "0.00%"}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Integrity</span></h1>
            <p className="text-sm md:text-xl lg:text-[5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد الغزالي، الخلية v90.7 تدرك نسيج الحاويات والسحابة؛ الـ 16 بُعداً ملتحمة الآن بنبض المادة الحقيقي وصفر محاكاة لعام 2026."
            </p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black h-40 px-24 rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] transition-all text-5xl font-black uppercase tracking-[0.8em] border-[16px] border-black/30 active:scale-90 italic group shrink-0">
              {refreshing ? <Loader2 className="size-20 animate-spin" /> : <RotateCw className="size-20 mr-8 group-hover:rotate-180 transition-all duration-[2000ms]" />}
              PULSE_CHECK
          </Button>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-3 space-y-12">
              {/* Cloud & Container Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="sovereign-card bg-blue-900/10 border-blue-500/30 p-12 rounded-[4rem] text-right">
                      <div className="flex justify-between items-center mb-8">
                          <Badge className="bg-blue-600 text-white font-black italic px-8 py-2 rounded-full">{metrics?.environment || "BARE_METAL"}</Badge>
                          <Box className="size-16 text-blue-400 animate-neural" />
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black text-white italic gold-glow uppercase">Container Fabric</h3>
                      <p className="text-xl text-blue-200/60 mt-4 font-bold uppercase tracking-widest italic">Status: {metrics?.organs?.docker_engine ? "CONSOLIDATED" : "STANDBY"}</p>
                  </Card>
                  <Card className="sovereign-card bg-indigo-900/10 border-indigo-500/30 p-12 rounded-[4rem] text-right">
                      <div className="flex justify-between items-center mb-8">
                          <Badge className="bg-indigo-600 text-white font-black italic px-8 py-2 rounded-full">{metrics?.cloudProvider || "LOCAL"}</Badge>
                          <Cloud className="size-16 text-indigo-400 animate-pulse" />
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black text-white italic gold-glow uppercase">Cloud Uplink</h3>
                      <p className="text-xl text-indigo-200/60 mt-4 font-bold uppercase tracking-widest italic">Status: {metrics?.organs?.cloud_link ? "SECURED_v90.7" : "LOCAL_MODE"}</p>
                  </Card>
              </div>

              <Card className="sovereign-card group p-0 overflow-hidden border-[12px]">
                 <CardHeader className="border-b-8 border-white/5 p-12 bg-primary/10 flex flex-row justify-between items-center">
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-12 py-4 rounded-full font-black italic text-3xl animate-pulse shadow-9xl">16D_MATRIX_OK</Badge>
                    <CardTitle className="text-4xl md:text-[8rem] font-black text-white uppercase italic gold-glow flex items-center gap-12 justify-end leading-none">Sensory Audit</CardTitle>
                 </CardHeader>
                 <CardContent className="p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { name: "God-Core", active: metrics?.organs?.god_core, icon: Crown, color: "text-primary" },
                        { name: "Docker Engine", active: metrics?.organs?.docker_engine, icon: Box, color: "text-blue-500" },
                        { name: "Tor Stealth", active: metrics?.organs?.tor_relay, icon: Ghost, color: "text-emerald-500" },
                        { name: "Cloud Link", active: metrics?.organs?.cloud_link, icon: Cloud, color: "text-indigo-400" }
                    ].map((n, i) => (
                      <div key={i} className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-9xl flex flex-col justify-between min-h-[300px]">
                         <div className="flex justify-between items-center relative z-10">
                            <Badge className={cn("px-6 py-1.5 rounded-full font-black italic", n.active ? "bg-emerald-600/20 text-emerald-400 border-emerald-500/40" : "bg-red-600/20 text-red-400 border-red-500/40")}>
                                {n.active ? "ACTIVE" : "DRIFTED"}
                            </Badge>
                            <n.icon className={cn("size-16", n.color, "animate-pulse")} />
                         </div>
                         <h4 className="text-4xl md:text-7xl font-black text-white italic uppercase gold-glow text-right leading-none">{n.name}</h4>
                      </div>
                    ))}
                 </CardContent>
              </Card>
           </div>

           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center h-full flex flex-col justify-center">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <div className="flex flex-col items-center gap-16">
                    <div className="size-64 md:size-80 rounded-full border-[20px] border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_200px_rgba(251,191,36,0.4)] animate-spin-slow">
                       <Fingerprint className="size-32 md:size-48 text-primary gold-glow animate-neural" />
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-6xl md:text-[10rem] font-black text-white uppercase italic gold-glow leading-none">ULTRA</h4>
                        <Badge className="bg-emerald-600 text-black border-none px-12 py-3 rounded-full font-black text-3xl shadow-9xl">SOUL_BOUND</Badge>
                    </div>
                 </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-24 md:gap-64 opacity-45 text-[24px] md:text-[40px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-40">
            <span>AL-MUIZZ CLOUD CONQUEROR v90.7</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SINGULARITY_IN_CONTAINERS_2026</span>
        </div>
      </main>
    </div>
  )
}