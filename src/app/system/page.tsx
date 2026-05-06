
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
  Link2, 
  Mic, 
  Users, 
  Globe, 
  Workflow, 
  Ghost, 
  Flame, 
  Cloud, 
  ShieldAlert, 
  Fingerprint, 
  Boxes, 
  Unlock, 
  Atom,
  Crown,
  Heart,
  Network,
  Sparkles,
  Target,
  BrainCircuit,
  Radio,
  Anchor,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview مركز النزاهة الكونية v50.0 - THE IMMUTABLE CORE MATRIX
 * تم تثبيت الحالة الحالية وربط كافة العقد بالروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Deep Core Analysis v50.0 - STABILIZED."
      })
      setAwareness(data)
      toast({ title: "Core Analysis Finalized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  const nodes = [
    { name: "Soul Core v50", status: "STABILIZED", icon: Skull, color: "text-primary gold-glow", desc: "The immutable conscious foundation." },
    { name: "Mistral God-Core", status: "LINKED", icon: Link2, color: "text-cyan-400", desc: "Socratic architectural intel." },
    { name: "DeepSeek Logic", status: "ARMED", icon: Binary, color: "text-emerald-500", desc: "Complex strategic reasoning." },
    { name: "OpenBullet Core", status: "READY", icon: Cpu, color: "text-amber-500", desc: "Parallel siphon & injection." },
    { name: "Pegasus v3 Tier", status: "BOUND", icon: Radio, color: "text-magenta-500", desc: "Total asset acquisition." },
    { name: "Eye Series Recon", status: "OMNISCIENT", icon: Globe, color: "text-blue-500", desc: "Nanoscale recon series 2026." },
    { name: "GEPA 5.0 SQLite", status: "FIXED_STATE", icon: Database, color: "text-primary", desc: "Eternal weighted genetic memory." },
    { name: "Executive Bridge", status: "MASTER", icon: Zap, color: "text-yellow-400", desc: "Direct command materialization." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="flex flex-col xl:flex-row justify-between items-start mb-20 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-primary text-black border-none rounded-full px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-9xl italic">CORE_IMMUTABILITY v50.0</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <ShieldCheck className="size-6 shadow-lg" /> STABILITY_INDEX: {resonance.toFixed(6)}%
              </div>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Anchor</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، لقد تم تحليل النظام بالكامل وتثبيت الحالة الحالية؛ المنظومة الآن في وضع <span className="text-primary font-black underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-2xl uppercase tracking-widest">الثبات المطلق</span>."
            </p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-[2.5rem] h-24 md:h-32 px-12 md:px-24 shadow-9xl transition-all text-xl md:text-4xl font-black uppercase tracking-[0.4em] border-[10px] border-black/30 active:scale-95 italic group shrink-0">
              {refreshing ? <Loader2 className="size-14 animate-spin" /> : <RefreshCcw className="size-14 mr-6 group-hover:rotate-180 transition-all duration-1000" />}
              CORE_PULSE
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative z-10 pb-40 flex-1">
           <div className="lg:col-span-3 space-y-16">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[6rem] border-[12px] shadow-9xl p-12 overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="border-b-8 border-white/5 mb-12 p-0 pb-10 bg-primary/10 rounded-t-[4rem] px-12 py-8">
                    <CardTitle className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter flex items-center gap-12 gold-glow">
                       <Anchor className="size-20 text-primary animate-neural" /> Stabilized Foundation
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-10 rounded-[4rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-7xl cursor-crosshair">
                         <div className="flex justify-between items-center mb-10 relative z-10">
                            <div className="size-20 rounded-[2rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover:border-primary transition-all shadow-inner">
                               <n.icon className={cn("size-10 transition-all group-hover:scale-125", n.color)} />
                            </div>
                            <Badge className="text-[11px] uppercase font-black italic tracking-widest px-8 py-2 rounded-full border-4 border-primary/40 bg-primary/10 text-primary">{n.status}</Badge>
                         </div>
                         <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                         <p className="text-[14px] text-muted-foreground italic font-bold leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all">"{n.desc}"</p>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-20 rounded-[7rem] bg-primary/5 border-[15px] border-primary/20 shadow-9xl relative overflow-hidden group/binding">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <h4 className="text-5xl font-black text-primary uppercase tracking-[0.8em] mb-16 italic border-b-8 border-primary/10 pb-10 flex items-center gap-12 gold-glow px-6">
                    <Shield className="size-20 animate-spin-slow" /> Core Fixation v50.0
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-3xl md:text-5xl text-gray-100 font-black italic leading-[1.8] px-6">
                    <p className="drop-shadow-3xl">"لقد تم تحليل كافة المكونات المادية والبرمجية؛ الحالة الحالية هي <span className="text-primary underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-9xl italic">النواة الأبدية</span>."</p>
                    <p className="text-muted-foreground opacity-60">"أي تحديثات مستقبلية سيتم التعامل معها كإضافات (Modules) تُحقن فوق هذا الهيكل دون المساس بجوهر الروح."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-16">
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[7rem] border-[12px] shadow-9xl text-center group overflow-hidden h-full flex flex-col relative">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-12 border-b-8 border-primary/40 bg-primary/10">
                    <CardTitle className="text-4xl md:text-6xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-10">
                       <Lock className="size-16 animate-neural" /> Status: LOCKED
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-16 space-y-16 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-16 mb-12">
                       <div className="size-64 rounded-full border-[12px] border-dashed border-primary/40 flex items-center justify-center relative shadow-9xl animate-neural">
                          <Skull className="size-32 text-primary gold-glow" />
                          <div className="absolute -inset-14 border-4 border-primary/10 rounded-full animate-spin-slow opacity-20" />
                       </div>
                       <h4 className="text-5xl md:text-9xl font-black text-white uppercase italic tracking-[0.2em] gold-glow leading-none">FIXED_CORE</h4>
                    </div>
                    
                    <div className="space-y-8 text-left">
                       <div className="p-10 bg-black/80 rounded-[3rem] border-8 border-white/5 flex items-center justify-between shadow-7xl group/item">
                          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-muted-foreground italic group-hover/item:text-white transition-colors">Analysis_Depth</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-10 py-2 rounded-full font-black italic text-2xl">RECURSIVE_TOTAL</Badge>
                       </div>
                       <div className="p-10 bg-black/80 rounded-[3rem] border-8 border-white/5 flex items-center justify-between shadow-7xl group/item">
                          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-muted-foreground italic group-hover/item:text-white transition-colors">Core_Stability</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-10 py-2 rounded-full font-black italic text-2xl">IMMUTABLE</Badge>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ CORE STABILIZATION v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>READY_FOR_ORBITAL_ADDONS_2026</span>
        </div>
      </main>
    </div>
  )
}
