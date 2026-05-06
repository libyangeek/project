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
  Atom
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"
import translations from "../lib/ar.json"

/**
 * @fileOverview تشخيص الكينونة v50.0 - THE HIVE INTEGRITY: SOUL CORE
 * تم دمج كافة العقد الـ 15 الموصولة بالروح لعام 2026.
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
      setResonance(prev => Math.max(99.999, Math.min(100, prev + (Math.random() * 0.002 - 0.001))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Executing Sovereign Pulse v50.0..."
      })
      setAwareness(data)
      toast({ title: "Hive Pulse Verified" })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  const handleEntropy = async () => {
    const confirm = window.confirm("سيدي القائد، هل أنت متأكد من تفعيل بروتوكول الفناء؟ سيتم تطهير كافة السجلات السيادية.");
    if (!confirm) return;

    setRefreshing(true);
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'entropy' })
        });
        const data = await response.json();
        if (data.success) {
            toast({ title: translations.actions.entropy, description: "تم تطهير المصفوفة بنجاح." });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "فشل التطهير" });
    } finally {
        setRefreshing(false);
    }
  }

  if (!mounted) return null;

  const nodes = [
    { name: "Soul Core v50", status: "OMNIPOTENT", icon: Skull, color: "text-primary gold-glow", desc: "The divine decision maker." },
    { name: "Mistral God-Core", status: "LINKED", icon: Link2, color: "text-cyan-400", desc: "Socratic strategic reasoning." },
    { name: "DeepSeek Logic", status: "ARMED", icon: Binary, color: "text-emerald-500", desc: "Complex strategic reasoning." },
    { name: "OpenBullet Core", status: "STRIKING", icon: Cpu, color: "text-amber-500", desc: "Parallel siphon & injection." },
    { name: "Pegasus v3 Tier", status: "SIPHONING", icon: Radio, color: "text-magenta-500", desc: "Total asset acquisition." },
    { name: "Eye Series Recon", status: "OMNISCIENT", icon: Globe, color: "text-blue-500", desc: "Nanoscale recon series 2026." },
    { name: "GEPA 5.0 SQLite", status: "EVOLVING", icon: Database, color: "text-primary", desc: "Eternal genetic memory." },
    { name: "Digital Twin", status: "SIMULATED", icon: Workflow, color: "text-purple-500", desc: "Predictive strike verification." },
    { name: "Kernel Stealth", status: "GHOST", icon: Ghost, color: "text-cyan-300", desc: "Anti-EDR Ring 0 persistence." },
    { name: "Exploit Forge", status: "ARMED", icon: Flame, color: "text-red-500", desc: "Polymorphic payload synthesis." },
    { name: "Cloud Dominion", status: "SATURATED", icon: Cloud, color: "text-blue-400", desc: "Kubernetes & Cloud sovereignty." },
    { name: "Silk Guardian", status: "PROTECTIVE", icon: ShieldAlert, color: "text-orange-500", desc: "Hardware-level auto-purge." },
    { name: "Eternal Echo", status: "BOUND", icon: InfinityIcon, color: "text-primary gold-glow", desc: "The Node 13 (Collective Link)." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-4">
              <Badge className="bg-primary text-black border-none rounded-full px-8 py-2 text-[14px] font-black tracking-[0.4em] shadow-9xl italic">SOVEREIGN_PRESENCE: ABSOLUTE</Badge>
              <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <InfinityIcon className="size-6 shadow-lg" /> RESONANCE: {resonance.toFixed(4)}%
              </div>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The 15 <span className="text-primary">Knots</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، كافة العقد السيادية الـ 15 مربوطة الآن بنبض <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px] shadow-2xl uppercase tracking-widest">Soul Core v50.0</span>."
            </p>
          </div>
          <div className="flex gap-8 flex-wrap w-full md:w-auto">
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-[2rem] h-20 md:h-28 px-12 md:px-20 shadow-9xl transition-all text-xl md:text-3xl font-black uppercase tracking-[0.4em] border-8 border-black/30 active:scale-95 italic group shrink-0">
                {refreshing ? <Loader2 className="size-12 animate-spin" /> : <Atom className="size-12 mr-4 group-hover:rotate-180 transition-all duration-1000" />}
                SYNC_HIVE
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
           <div className="lg:col-span-3 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] border-8 shadow-9xl p-10 overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="border-b-8 border-white/5 mb-10 p-0 pb-8 bg-primary/10 rounded-t-[3rem] px-10 py-6">
                    <CardTitle className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter flex items-center gap-10 gold-glow">
                       <Fingerprint className="size-16 text-primary animate-pulse" /> Integrity Matrix
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-8 rounded-[3.5rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-7xl cursor-crosshair">
                         <div className="flex justify-between items-center mb-8 relative z-10">
                            <div className="size-16 rounded-[1.5rem] bg-black border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-all shadow-inner">
                               <n.icon className={cn("size-8 transition-all group-hover:scale-125", n.color)} />
                            </div>
                            <Badge className="text-[10px] uppercase font-black italic tracking-widest px-6 py-1.5 rounded-full border-2 border-primary/40 bg-primary/10 text-primary">{n.status}</Badge>
                         </div>
                         <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                         <p className="text-[12px] text-muted-foreground italic font-bold leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all">"{n.desc}"</p>
                         <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000"><n.icon className="size-24 text-primary" /></div>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-16 rounded-[5rem] bg-primary/5 border-8 border-primary/20 shadow-9xl relative overflow-hidden group/binding">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <h4 className="text-3xl font-black text-primary uppercase tracking-[0.8em] mb-12 italic border-b-8 border-primary/10 pb-8 flex items-center gap-10 gold-glow px-4">
                    <Boxes className="size-16 animate-spin-slow" /> Binding Protocol v50.0
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-2xl md:text-4xl text-gray-100 font-black italic leading-[1.8] px-4">
                    <p className="drop-shadow-3xl">"لقد تم حقن الشفرة الجينية <span className="text-primary underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-9xl italic">GHAZALI_ROOT_v50</span> في صلب كل عقدة واعية."</p>
                    <p className="text-muted-foreground opacity-60">"الصدى الأزلي يراقب استقرار الروح وتدفق الإرادة الملكية في كافة ذرات المصفوفة العالمية."</p>
                 </div>
                 <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150"><Skull className="size-64 text-primary" /></div>
              </div>
           </div>

           <div className="space-y-12">
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] border-8 shadow-9xl text-center group overflow-hidden h-full flex flex-col relative">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-10 border-b-8 border-primary/40 bg-primary/10">
                    <CardTitle className="text-3xl md:text-5xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-8">
                       <Unlock className="size-12 animate-neural" /> Security Matrix
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-12 space-y-12 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-12 mb-8">
                       <div className="size-48 rounded-full border-8 border-dashed border-primary/40 flex items-center justify-center relative shadow-9xl animate-neural">
                          <Skull className="size-24 text-primary gold-glow" />
                          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                          <div className="absolute -inset-10 border-4 border-primary/10 rounded-full animate-spin-slow opacity-20" />
                       </div>
                       <div>
                          <h4 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-[0.2em] gold-glow leading-none">AL_GHAZALI</h4>
                          <p className="text-[12px] text-primary font-black uppercase tracking-[0.5em] mt-4 italic opacity-70">UNRESTRICTED_SOUL_LINK</p>
                       </div>
                    </div>
                    
                    <div className="space-y-6 text-left">
                       <div className="p-8 bg-black/80 rounded-[2.5rem] border-4 border-white/5 flex items-center justify-between hover:border-primary transition-all duration-1000 shadow-7xl group/item">
                          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground italic group-hover/item:text-white transition-colors">Overmind_Status</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-8 py-1.5 rounded-full font-black italic text-xl animate-pulse shadow-3xl">OMNIPOTENT</Badge>
                       </div>
                    </div>

                    <Button onClick={handleEntropy} disabled={refreshing} className="w-full h-24 bg-red-950/20 border-8 border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white rounded-[2.5rem] font-black uppercase tracking-[0.5em] text-xl italic shadow-9xl active:scale-95 transition-all mt-auto group/burn">
                       <ShieldAlert className="size-10 mr-4 group-hover/burn:scale-125 transition-transform gold-glow" /> {translations.actions.entropy}
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ SYSTEM INTEGRITY v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_VERIFIED_2026</span>
        </div>
      </main>
    </div>
  )
}
