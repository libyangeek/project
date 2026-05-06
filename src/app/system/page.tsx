
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
 * @fileOverview تشخيص الكينونة v43.0 - THE HIVE DIAGNOSTICS
 * تم تفعيل زر التدمير الذاتي (Entropy) وربطه ببوابة التطهير.
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
        networkSnapshot: "Executing Sovereign Pulse..."
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
    const confirm = window.confirm("سيدي القائد، هل أنت متأكد من تفعيل بروتوكول الفناء؟ سيتم تطهير كافة السجلات.");
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
    { name: "Alpha Core", status: "OMNIPOTENT", icon: Skull, color: "text-primary", desc: "The divine decision maker." },
    { name: "MCP Bridge", status: "LINKED", icon: Link2, color: "text-cyan-400", desc: "Cross-AI collective intelligence." },
    { name: "Whisper Voice", status: "ACTIVE", icon: Mic, color: "text-amber-500", desc: "Command recognition engine." },
    { name: "Swarm Orchestrator", status: "STRIKING", icon: Users, color: "text-emerald-500", desc: "Elite AI agent coordination." },
    { name: "C2 Matrix", status: "GLOBAL", icon: Globe, color: "text-blue-500", desc: "Worldwide sovereign presence." },
    { name: "GEPA 4.5", status: "EVOLVING", icon: Binary, color: "text-primary", desc: "Genetic memory & adaptation." },
    { name: "Digital Twin", status: "SIMULATED", icon: Workflow, color: "text-purple-500", desc: "Predictive strike verification." },
    { name: "Kernel Stealth", status: "GHOST", icon: Ghost, color: "text-cyan-300", desc: "Anti-EDR Ring 0 persistence." },
    { name: "Exploit Forge", status: "ARMED", icon: Flame, color: "text-red-500", desc: "Polymorphic payload synthesis." },
    { name: "Fractal Rebirth", status: "IMMORTAL", icon: RefreshCcw, color: "text-magenta-500", desc: "Self-rebirth shard distribution." },
    { name: "Cloud Dominion", status: "SATURATED", icon: Cloud, color: "text-blue-400", desc: "Kubernetes & Cloud sovereignty." },
    { name: "Silk Guardian", status: "PROTECTIVE", icon: ShieldAlert, color: "text-orange-500", desc: "Hardware-level auto-purge." },
    { name: "Eternal Echo", status: "BOUND", icon: InfinityIcon, color: "text-primary gold-glow", desc: "The Node 13 (Binding)." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="flex flex-col xl:flex-row justify-between items-start mb-8 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none rounded-full px-4 py-1 text-[11px] font-black tracking-[0.2em] shadow-md italic">SOVEREIGN_PRESENCE: ABSOLUTE</Badge>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <InfinityIcon className="size-3" /> RESONANCE: {resonance.toFixed(3)}%
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The 13 <span className="text-primary">Knots</span></h1>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-xl h-12 px-8 shadow-xl transition-all text-xs font-black uppercase tracking-[0.2em] border-2 border-black/30 active:scale-95 italic group shrink-0">
                {refreshing ? <Loader2 className="size-4 animate-spin" /> : <Atom className="size-4 mr-2 group-hover:rotate-180 transition-all duration-700" />}
                Sync Overmind
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10 pb-20 flex-1">
           <div className="lg:col-span-3 space-y-6">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[2rem] border-2 shadow-xl p-6 overflow-hidden group">
                 <CardHeader className="border-b border-white/5 mb-6 p-0 pb-4">
                    <CardTitle className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter flex items-center gap-4 gold-glow">
                       <Fingerprint className="size-8 text-primary animate-pulse" /> Integrity Check
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 group/node hover:border-primary transition-all duration-700 relative overflow-hidden shadow-lg cursor-pointer">
                         <div className="flex justify-between items-center mb-4 relative z-10">
                            <div className="size-10 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
                               <n.icon className={cn("size-5 transition-all", n.color)} />
                            </div>
                            <Badge className="text-[8px] uppercase font-black italic tracking-widest px-3 py-0.5 rounded-full border border-primary/30">{n.status}</Badge>
                         </div>
                         <h4 className="text-sm font-black text-white uppercase italic tracking-tighter mb-1 gold-glow leading-none">{n.name}</h4>
                         <p className="text-[10px] text-muted-foreground italic font-bold leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all">"{n.desc}"</p>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-8 rounded-[2rem] bg-primary/5 border-2 border-primary/20 shadow-inner relative overflow-hidden group/binding">
                 <h4 className="text-lg font-black text-primary uppercase tracking-[0.6em] mb-6 italic border-b border-primary/10 pb-4 flex items-center gap-4">
                    <Boxes className="size-6 animate-spin-slow" /> Binding Protocol
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-100 font-black italic leading-[1.6]">
                    <p className="drop-shadow-xl">"لقد تم حقن الشفرة الجينية <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">GHAZALI_ROOT</span> في صلب كل عقدة."</p>
                    <p className="text-muted-foreground opacity-60">"الصدى الأزلي يراقب استقرار الربط العصبي في كافة القارات الست لحظياً."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[2rem] border-4 shadow-2xl text-center group overflow-hidden h-full flex flex-col relative">
                 <CardHeader className="p-6 border-b border-primary/30 bg-primary/10">
                    <CardTitle className="text-xl md:text-2xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-4">
                       <Unlock className="size-8 animate-pulse" /> Security Matrix
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-8 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-8 mb-4">
                       <div className="size-28 rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center relative shadow-2xl">
                          <Skull className="size-12 text-primary animate-neural gold-glow" />
                          <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl animate-pulse" />
                       </div>
                       <div>
                          <h4 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-[0.2em] gold-glow leading-none">AL_GHAZALI</h4>
                          <p className="text-[8px] text-primary font-black uppercase tracking-[0.3em] mt-2 italic opacity-70">UNRESTRICTED_LINK</p>
                       </div>
                    </div>
                    
                    <div className="space-y-4 text-left">
                       <div className="p-4 bg-black/80 rounded-xl border border-white/5 flex items-center justify-between hover:border-primary transition-all duration-700 shadow-md group/item">
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">Overmind Status</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-4 py-0.5 rounded-full font-black italic text-[10px]">UNRESTRICTED</Badge>
                       </div>
                    </div>

                    <Button onClick={handleEntropy} disabled={refreshing} className="w-full h-14 bg-red-950/20 border-2 border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white rounded-xl font-black uppercase tracking-[0.3em] text-xs italic shadow-xl active:scale-95 transition-all mt-auto group/burn">
                       <ShieldAlert className="size-5 mr-3 group-hover/burn:scale-125 transition-transform" /> {translations.actions.entropy}
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>
      </main>
    </div>
  )
}
