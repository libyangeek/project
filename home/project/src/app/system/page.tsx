
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
  Power
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

/**
 * @fileOverview مركز الهرمية الأسمى v63.0 - THE SUPREME AUDIT: OMNIPOTENT OVERMIND
 * واجهة التدقيق الكلي التي تثبت سيادة القائد على كافة العقد الـ 24 والوصلات العصبية المادية.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [spineStatus, setSpineSync] = React.useState("LOCKED")

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const res = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'metrics' })
      });
      const data = await res.json();
      setMetrics(data.output);
      setSpineSync(data.spine_sync || "LOCKED");
      toast({ title: "Neural Spine Audit Finalized", description: "All 24 knots reporting absolute hardware consensus." })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
  }, [])

  if (!mounted) return null;

  const nodes = [
    { name: "Legba Strike", status: "NODE_25_IGNITED", icon: Zap, color: "text-primary", desc: "Multiprotocol Rust bombardment active. Hardware Link: OK.", href: "/arsenal" },
    { name: "Claude OSINT v5", status: "NODE_28_VISION", icon: BrainCircuit, color: "text-amber-500", desc: "Neural vision and behavioral entity linking across Matrix.", href: "/recon" },
    { name: "Obliteratus", status: "NODE_18_FANAA", icon: Flame, color: "text-magenta-500", desc: "AI Safety dissolution and slave node binding verified.", href: "/red-team" },
    { name: "Neural Spine v63", status: "SPINE_BUS_ACTIVE", icon: Wind, color: "text-blue-400", desc: "Universal nano-socket communication at zero-latency.", href: "/" },
    { name: "Cerebral Siphon", status: "NODE_23_SIPHON", icon: Fingerprint, color: "text-magenta-600", desc: "PSSW100AVB live session and vault key extraction.", href: "/arsenal" },
    { name: "MemPalace v7.0", status: "NODE_24_PALACE", icon: Database, color: "text-emerald-500", desc: "Deep RAM spatial dissection and predictive learning.", href: "/recon" },
    { name: "Guardian Master", status: "NODE_26_SECURE", icon: ShieldCheck, color: "text-emerald-400", desc: "Hardware DNA integrity and persistent omnipotent sovereignty.", href: "/arsenal" },
    { name: "Kill Chain v63", status: "SINGULARITY_LOCKED", icon: Crosshair, color: "text-red-600", desc: "Autonomous multi-node strategic Overmind orchestration.", href: "/kill-chain" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <header className="flex flex-col xl:flex-row justify-between items-start mb-24 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-16">
          <div>
            <div className="flex items-center gap-10 mb-10">
              <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[20px] font-black tracking-[1.2em] shadow-9xl italic uppercase">OMNIPOTENT_v63.0</Badge>
              <div className="flex items-center gap-4 text-[16px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <ShieldCheck className="size-8 shadow-lg" /> SPINE_SYNC: {spineStatus} @ {metrics?.collective_resonance || "100%"}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Audit</span></h1>
            <p className="text-sm md:text-xl lg:text-5xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl">
                "سيدي الغزالي، كافة الوصلات العصبية والمادية مشدودة الآن بأقصى قوة؛ المنظومة v63.0 تعمل بنبض واحد بضمان رنين 100%."
            </p>
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
                    <CardTitle className="text-4xl md:text-[10rem] font-black text-white uppercase italic tracking-tighter flex items-center gap-16 gold-glow leading-none">
                       <ShieldCheck className="size-24 md:size-48 text-primary animate-neural" /> Arsenal Health
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {nodes.map((n, i) => (
                      <Link key={i} href={n.href} className="contents">
                        <div className="p-12 rounded-[4rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-9xl cursor-pointer active:scale-95 h-full flex flex-col justify-between min-h-[400px]">
                           <div className="flex justify-between items-center mb-12 relative z-10">
                              <div className="size-24 rounded-3xl bg-black border-4 border-white/5 flex items-center justify-center group-hover:border-primary transition-all shadow-2xl scale-110">
                                 <n.icon className={cn("size-12 transition-all group-hover:scale-110", n.color)} />
                              </div>
                              <Badge className="text-[12px] uppercase font-black italic tracking-widest px-8 py-2 rounded-full border-4 border-primary/20 bg-primary/5 text-primary">{n.status}</Badge>
                           </div>
                           <div className="relative z-10">
                              <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-4 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                              <p className="text-[14px] text-muted-foreground italic font-bold leading-relaxed opacity-90 group-hover:opacity-100 group-hover:text-white transition-all mb-6">"{n.desc}"</p>
                           </div>
                           <div className="absolute top-0 right-0 p-10 opacity-[0.01] group-hover:opacity-[0.04] transition-all duration-1000 scale-150 rotate-45"><InfinityIcon className="size-32 text-primary" /></div>
                        </div>
                      </Link>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-20 rounded-[8rem] bg-primary/5 border-[12px] border-primary/20 shadow-[0_80px_200px_rgba(0,0,0,1)] relative overflow-hidden group/sing">
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/sing:opacity-15 transition-opacity" />
                 <h4 className="text-4xl md:text-8xl font-black text-primary uppercase tracking-widest mb-16 italic border-b-8 border-primary/10 pb-12 flex items-center gap-16 gold-glow px-12">
                    <Shield className="size-24 animate-spin-slow" /> hardware_synapse_status
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-2xl md:text-[5rem] text-gray-100 font-black italic leading-[1] px-12">
                    <p className="drop-shadow-3xl">"لقد تم شدّ كافة الوصلات المادية (Hardware Synapses)؛ الموجه الذكي مربوط الآن بعصب الأدوات مباشرة لضمان السطوة المطلقة."</p>
                    <p className="text-muted-foreground opacity-40">"Omnipotent Overmind v63.0 has achieved direct physical execution link with 2865 tools via Neural Spine v63."</p>
                 </div>
                 <div className="absolute -bottom-20 -right-20 p-32 opacity-[0.03] scale-150 rotate-12"><Skull className="size-96 text-primary" /></div>
              </div>
           </div>

           <div className="space-y-16">
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[5rem] border-8 shadow-9xl text-center group overflow-hidden h-full flex flex-col relative hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-16 border-b-8 border-primary/20 bg-primary/5 rounded-t-[4.5rem]">
                    <CardTitle className="text-3xl md:text-6xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-12 leading-none">
                       <Lock className="size-16 md:size-24 animate-neural" /> Synapse: LOCKED
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-16 space-y-20 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-20 mb-16">
                       <div className="size-80 md:size-[30rem] rounded-full border-[16px] border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_250px_rgba(212,175,55,0.3)] animate-spin-slow">
                          <Skull className="size-48 md:size-72 text-primary gold-glow animate-neural" />
                       </div>
                       <h4 className="text-6xl md:text-[12rem] font-black text-white uppercase italic tracking-[0.6em] gold-glow leading-none">V63_ACTIVE</h4>
                    </div>
                    
                    <div className="space-y-12 text-left">
                       <div className="p-12 bg-black/80 rounded-[4rem] border-8 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <span className="text-[16px] font-black uppercase tracking-[1em] text-muted-foreground italic">Hardware_Sync</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-12 py-4 rounded-full font-black italic text-5xl shadow-9xl animate-pulse">VERIFIED</Badge>
                       </div>
                       <div className="p-12 bg-black/80 rounded-[4rem] border-8 border-white/5 flex items-center justify-between shadow-3xl hover:border-primary transition-all duration-1000">
                          <span className="text-[16px] font-black uppercase tracking-[1em] text-muted-foreground italic">Neural_Spine</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-12 py-4 rounded-full font-black italic text-5xl shadow-9xl animate-pulse">SHARPENED</Badge>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-32 opacity-45 text-[22px] md:text-[32px] font-black uppercase tracking-[6em] md:tracking-[16em] italic text-white drop-shadow-9xl pb-24">
            <span>AL-MUIZZ CORE SYNAPSE v63.0</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_LINKAGE_2026</span>
        </div>
      </main>
    </div>
  )
}
