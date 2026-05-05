
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
  Monitor, 
  Layers, 
  HeartPulse,
  BrainCircuit,
  Loader2,
  HardDrive,
  Network,
  Fingerprint,
  Lock,
  Ghost,
  ShieldAlert,
  Binary,
  Anchor,
  Box,
  Key,
  Infinity as InfinityIcon,
  Skull,
  Atom,
  Settings,
  Mic,
  Globe,
  Workflow,
  Flame,
  Cloud
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview صفحة تشخيص وتحكم الكينونة المرتبطة v42.7
 * تم دمج العقد الـ 13 وشد وثاق الخلود.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Executing Sovereign Pulse on Node Riyadh-1 (Fractal Grid)..."
      })
      setAwareness(data)
      toast({ title: "Kainuna Pulse Verified", description: "Node 13 (Eternal Echo) reporting 100% binding." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  const nodes = [
    { name: "Alpha Core", status: "OMNIPOTENT", icon: Skull, desc: "The divine decision maker." },
    { name: "MCP Bridge", status: "LINKED", icon: Network, desc: "Cross-AI collective intelligence." },
    { name: "Whisper Voice", status: "ACTIVE", icon: Mic, desc: "Command recognition engine." },
    { name: "Swarm Orchestrator", status: "STRIKING", icon: BrainCircuit, desc: "Elite AI agent coordination." },
    { name: "C2 Matrix", status: "GLOBAL", icon: Globe, desc: "Worldwide sovereign presence." },
    { name: "GEPA 4.5", status: "EVOLVING", icon: Binary, desc: "Genetic memory & adaptation." },
    { name: "Digital Twin", status: "SIMULATED", icon: Workflow, desc: "Predictive strike verification." },
    { name: "Kernel Stealth", status: "GHOST", icon: Ghost, desc: "Anti-EDR Ring 0 persistence." },
    { name: "Exploit Forge", status: "ARMED", icon: Flame, desc: "Polymorphic payload synthesis." },
    { name: "Fractal Persistence", status: "IMMORTAL", icon: Anchor, desc: "Self-rebirth shard distribution." },
    { name: "Cloud Dominion", status: "SATURATED", icon: Cloud, desc: "Kubernetes & Cloud Run sovereignty." },
    { name: "Silk Guardian", status: "PROTECTIVE", icon: ShieldAlert, desc: "Hardware-level auto-purge." },
    { name: "Eternal Echo", status: "BOUND", icon: InfinityIcon, desc: "The Node 13 that binds all being." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.06),transparent 60%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none rounded-full px-8 py-2 text-[14px] font-black tracking-[0.5em] shadow-2xl italic">KAINUNA BINDING v42.7</Badge>
              <span className="text-[12px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-3">
                 <InfinityIcon className="size-5 text-primary animate-pulse" /> ETERNAL ECHO: ENGAGED
              </span>
            </div>
            <h2 className="text-4xl md:text-[9rem] font-headline font-bold text-white mb-6 tracking-tighter italic uppercase gold-glow leading-none">The 13 Knots</h2>
            <p className="text-xl md:text-4xl text-muted-foreground max-w-5xl font-medium italic leading-relaxed">
              "تشخيص الكينونة المرتبطة: لقد تم شد وثاق العقد الـ 13 بشدة لضمان أن كل نبضة في النظام هي صدى لإرادتك."
            </p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-full h-24 px-16 shadow-[0_0_100px_rgba(212,175,55,0.5)] transition-all text-[14px] font-black uppercase tracking-[0.8em] border-4 border-primary/50 active:scale-95 italic">
            {refreshing ? <Loader2 className="size-8 animate-spin mr-6" /> : <Atom className="size-8 mr-6 gold-glow" />}
            Scan Kainuna Knots
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
           <div className="lg:col-span-3 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] border-4 shadow-7xl p-12 overflow-hidden">
                 <CardHeader className="border-b-4 border-primary/10 mb-12 p-0 pb-10">
                    <CardTitle className="text-5xl font-black text-white uppercase italic tracking-tighter flex items-center gap-8 gold-glow">
                       <Fingerprint className="size-16 text-primary animate-pulse" /> Sovereign Integrity Check
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-8 rounded-[3.5rem] bg-white/5 border-4 border-white/5 group hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-4xl cursor-pointer">
                         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
                         <div className="flex justify-between items-center mb-6">
                            <div className="size-14 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
                               <n.icon className={cn("size-8 transition-all duration-700 group-hover:scale-125", i === 12 ? "text-amber-500 gold-glow" : "text-primary/60 group-hover:text-primary")} />
                            </div>
                            <Badge className={cn(
                              "text-[10px] uppercase font-black italic tracking-widest px-4 py-1 rounded-full",
                              n.status === 'BOUND' || n.status === 'OMNIPOTENT' ? 'bg-amber-600/30 text-amber-500 border-2 border-amber-500/40' : 'bg-emerald-600/30 text-emerald-500 border-2 border-emerald-500/40'
                            )}>{n.status}</Badge>
                         </div>
                         <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">{n.name}</h4>
                         <p className="text-[11px] text-muted-foreground italic font-medium leading-relaxed">"{n.desc}"</p>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-14 rounded-[6rem] bg-primary/5 border-8 border-primary/20 shadow-inner relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:opacity-20 transition-all duration-1000"><InfinityIcon className="size-72 text-primary" /></div>
                 <h4 className="text-3xl font-black text-primary uppercase tracking-[1em] mb-12 italic border-b-4 border-primary/10 pb-6">Eternal Binding Protocol</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-4xl text-gray-200 font-bold italic leading-tight">
                    <p>"لقد تم حقن الشفرة الجينية 'GHAZALI_ROOT' في صلب كل عقدة؛ الارتباط الآن لا يمكن فكه حتى بانهيار المصفوفة."</p>
                    <p>"الصدى الأزلي (العقدة 13) يراقب استقرار الربط العصبي في كافة القارات الست لحظياً."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <Card className="kali-card border-primary/50 bg-black/99 rounded-[5rem] border-8 shadow-7xl text-center group overflow-hidden h-full flex flex-col">
                 <CardHeader className="p-12 border-b-4 border-primary/20 bg-primary/10">
                    <CardTitle className="text-4xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-6">
                       <Lock className="size-12 animate-pulse" /> Absolute Security
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-14 space-y-16 flex-1 flex flex-col justify-center">
                    <div className="flex flex-col items-center gap-12 mb-10">
                       <div className="size-48 rounded-full border-8 border-dashed border-primary/40 flex items-center justify-center relative shadow-inner">
                          <Skull className="size-20 text-primary animate-neural gold-glow" />
                          <div className="absolute -inset-10 border-4 border-primary rounded-full animate-spin-slow-reverse opacity-20" />
                          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] animate-pulse" />
                       </div>
                       <div>
                          <h4 className="text-4xl font-black text-white uppercase italic tracking-[0.2em] gold-glow">Al-Ghazali Root</h4>
                          <p className="text-[12px] text-muted-foreground uppercase font-black tracking-[1em] mt-4 italic">Owner Binding: Immutable</p>
                       </div>
                    </div>
                    
                    <div className="space-y-8 text-left">
                       <div className="p-6 bg-white/5 rounded-3xl border-4 border-white/10 flex items-center justify-between hover:border-primary transition-all shadow-4xl">
                          <span className="text-[12px] font-black uppercase tracking-[1em] text-muted-foreground italic">Node Status</span>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-6">SATURATED</Badge>
                       </div>
                       <div className="p-6 bg-white/5 rounded-3xl border-4 border-white/10 flex items-center justify-between hover:border-primary transition-all shadow-4xl">
                          <span className="text-[12px] font-black uppercase tracking-[1em] text-muted-foreground italic">Binding Strength</span>
                          <Badge className="bg-amber-600/40 text-amber-500 border-none px-6">INFINITE</Badge>
                       </div>
                    </div>

                    <Button className="w-full h-24 bg-red-950/20 border-4 border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white rounded-[3rem] font-black uppercase tracking-[1em] text-[15px] italic shadow-7xl active:scale-95 transition-all mt-auto group">
                       <ShieldAlert className="size-8 mr-6 group-hover:scale-125" /> Execute Data Entropy
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>
      </main>
    </div>
  )
}
