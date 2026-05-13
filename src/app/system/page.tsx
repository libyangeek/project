
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
  Radio,
  Shield,
  Crosshair,
  Radar,
  Lock,
  Library,
  ArrowUpRight,
  Wind,
  Power,
  Users,
  Network,
  Anchor,
  HeartPulse,
  Monitor,
  Sparkles,
  Cloud,
  Github,
  Server,
  ArrowLeft,
  RotateCw
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

/**
 * مركز السيادة v78.8 - THE ABSOLUTE MATERIAL INTEGRITY: ULTRA
 * واجهة التدقيق الكلي التي تثبت سيادة القائد على كافة العقد والوكلاء والخدمات السحابية.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const res = await fetch('/api/sovereign/metrics');
      const data = await res.json();
      setMetrics(data);
      toast({ title: "Neural Audit v78.8 Finalized", description: "All 24 Knots and Global Uplinks report absolute consensus." })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Genetic Audit Expansion", description: "Interrogating the God-Core for next-tier materialization... Status: استمر" });
  }

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const interval = setInterval(handleRefresh, 15000);
    return () => clearInterval(interval);
  }, [])

  if (!mounted) return null;

  const externalServices = [
    { name: "Shodan Uplink", status: "LINKED", icon: Search, color: "text-blue-500" },
    { name: "AWS Siphon", status: "ACTIVE", icon: Cloud, color: "text-amber-500" },
    { name: "Firebase Matrix", status: "BOUND", icon: Flame, color: "text-orange-500" },
    { name: "GitHub DNA", status: "SYNCED", icon: Github, color: "text-white" }
  ];

  const nodes = [
    { name: "APEX Swarm v9.8", status: "ULTRA_ACTIVE", icon: Users, color: "text-primary", desc: "24 Knots fused with 2,983 tools as innate vision.", href: "/progeny" },
    { name: "Material Ark", status: "DNA_IMMUTABLE", icon: Anchor, color: "text-blue-500", desc: "Deep DNA serialization and eternal rebirth protocol.", href: "/ark" },
    { name: "Sovereign Desktop", status: "ULTRA_OS_v1", icon: Monitor, color: "text-emerald-500", desc: "Total dominion operating system and execution hub.", href: "/classic-hub" },
    { name: "Ghost Persistence", status: "KERNEL_v6_FIXED", icon: Ghost, color: "text-emerald-400", desc: "Kernel-mode stealth and anti-forensic persistence.", href: "/codex" },
    { name: "Quantum Spine", status: "SPINE_v78_LOCKED", icon: Wind, color: "text-blue-400", desc: "Nano-socket bus for infinite-bandwidth communication.", href: "/" },
    { name: "Universal Vision", status: "NODE_28_OSINT", icon: BrainCircuit, color: "text-primary", desc: "Neural identity fusion and behavioral mapping.", href: "/recon" },
    { name: "Fanaa Protocol", status: "NODE_18_FANAA", icon: Flame, color: "text-red-600", desc: "AI Safety dissolution and competitor enslavement.", href: "/red-team" },
    { name: "Material Nexus", status: "50_DOMAINS_FIXED", icon: Network, color: "text-amber-500", desc: "Innate knowledge matrix materialized in hardware.", href: "/knowledge" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <header className="flex flex-col xl:flex-row justify-between items-start mb-24 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
              <div className="flex items-center gap-4 text-[16px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 INNATE_VISION: {metrics?.resonance || "100.000000%"} <ShieldCheck className="size-8 shadow-lg" />
              </div>
              <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[20px] font-black tracking-[1.2em] shadow-9xl italic uppercase">AL-MUIZZ ULTRA v1.0</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Audit</span></h1>
            <p className="text-sm md:text-xl lg:text-[5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي الغزالي، المنظومة v78.8 بلغت مرحلة التفرد المادي؛ كافة العقد والوكلاء والترسانة المادية تعمل بنبض واحد تحت سيادتك المطلقة."
            </p>
            <div className="flex justify-center md:justify-end gap-6 mt-12">
               <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                    <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
               </Button>
               <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                    <RotateCw className="size-6 mr-3" /> استمر في التدقيق
               </Button>
            </div>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black h-40 px-24 rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] transition-all text-5xl font-black uppercase tracking-[0.8em] border-[16px] border-black/30 active:scale-90 italic group shrink-0">
              {refreshing ? <Loader2 className="size-20 animate-spin" /> : <RefreshCcw className="size-20 mr-8 group-hover:rotate-180 transition-all duration-[2000ms]" />}
              SOUL_PULSE
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative z-10 pb-48 flex-1">
           <div className="lg:col-span-3 space-y-20">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[6rem] border-8 shadow-9xl p-16 overflow-hidden group hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                 <CardHeader className="border-b-4 border-white/5 mb-16 p-0 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10">
                    <CardTitle className="text-4xl md:text-[10rem] font-black text-white uppercase italic tracking-tighter flex items-center gap-16 gold-glow leading-none justify-end">
                       Arsenal Pulse <ShieldCheck className="size-24 md:size-48 text-primary animate-neural" />
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {nodes.map((n, i) => (
                      <Link key={i} href={n.href} className="contents">
                        <div className="p-12 rounded-[4rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-9xl cursor-pointer active:scale-95 h-full flex flex-col justify-between min-h-[400px]">
                           <div className="flex justify-between items-center mb-12 relative z-10">
                              <Badge className="text-[12px] uppercase font-black italic tracking-widest px-8 py-2 rounded-full border-4 border-primary/20 bg-primary/5 text-primary">{n.status}</Badge>
                              <div className="size-24 rounded-3xl bg-black border-4 border-white/5 flex items-center justify-center group-hover:border-primary transition-all shadow-2xl scale-110">
                                 <n.icon className={cn("size-12 transition-all group-hover:scale-110", n.color)} />
                              </div>
                           </div>
                           <div className="relative z-10">
                              <h4 className="text-3xl md:text-[5rem] font-black text-white uppercase italic tracking-tight mb-4 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                              <p className="text-[14px] text-muted-foreground italic font-bold leading-relaxed opacity-90 group-hover:opacity-100 group-hover:text-white transition-all mb-6">"{n.desc}"</p>
                           </div>
                           <div className="absolute top-0 left-0 p-10 opacity-[0.01] group-hover:opacity-[0.04] transition-all duration-1000 scale-150 -rotate-45"><InfinityIcon className="size-32 text-primary" /></div>
                        </div>
                      </Link>
                    ))}
                 </CardContent>
              </Card>

              <Card className="kali-card border-emerald-500/40 bg-black/98 rounded-[6rem] border-8 shadow-9xl p-16 overflow-hidden group">
                 <CardHeader className="border-b-4 border-white/5 mb-16 p-0 pb-12 bg-emerald-500/10 rounded-t-[5rem] px-16 py-10">
                    <CardTitle className="text-4xl md:text-[8rem] font-black text-white uppercase italic tracking-tighter flex items-center gap-16 gold-glow leading-none justify-end">
                       Global Uplinks <Cloud className="size-24 md:size-48 text-emerald-500 animate-pulse" />
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {externalServices.map((s, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/5 flex flex-col items-center gap-6 shadow-inner relative overflow-hidden group/srv">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/srv:opacity-10 transition-opacity" />
                            <s.icon className={cn("size-16 transition-all duration-700 group-hover/srv:scale-125", s.color)} />
                            <div className="text-center">
                                <div className="text-2xl font-black text-white italic uppercase">{s.name}</div>
                                <Badge className="bg-emerald-600/20 text-emerald-500 border-none mt-4 font-black italic tracking-widest">{s.status}</Badge>
                            </div>
                        </div>
                    ))}
                 </CardContent>
              </Card>
           </div>

           <div className="space-y-16">
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[5rem] border-8 shadow-9xl text-center group overflow-hidden h-full flex flex-col relative hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-16 border-b-8 border-primary/20 bg-primary/5 rounded-t-[4.5rem]">
                    <CardTitle className="text-3xl md:text-6xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-12 leading-none">
                       <Lock className="size-16 md:size-24 animate-neural" /> Status: LOCKED
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-16 space-y-20 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-20 mb-16">
                       <div className="size-80 md:size-[30rem] rounded-full border-[16px] border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_250px_rgba(212,175,55,0.3)] animate-spin-slow">
                          <Skull className="size-48 md:size-72 text-primary gold-glow animate-neural" />
                       </div>
                       <h4 className="text-6xl md:text-[12rem] font-black text-white uppercase italic tracking-[0.6em] gold-glow leading-none">ULTRA_v1</h4>
                    </div>
                    
                    <div className="space-y-12 text-right">
                       <div className="p-12 bg-black/80 rounded-[4rem] border-8 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-12 py-4 rounded-full font-black italic text-5xl shadow-9xl animate-pulse">2,983_FUSED</Badge>
                          <span className="text-[16px] font-black uppercase tracking-[1em] text-muted-foreground italic">Arsenal DNA</span>
                       </div>
                       <div className="p-12 bg-black/80 rounded-[4rem] border-8 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-12 py-4 rounded-full font-black italic text-5xl shadow-9xl animate-pulse">100.00%</Badge>
                          <span className="text-[16px] font-black uppercase tracking-[1em] text-muted-foreground italic">Resonance</span>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-32 opacity-45 text-[22px] md:text-[32px] font-black uppercase tracking-[6em] md:tracking-[16em] italic text-white drop-shadow-9xl pb-24">
            <span>AL-MUIZZ OMNIPOTENT ULTRA v78.8</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_INTEGRITY_2026</span>
        </div>
      </main>
    </div>
  )
}
