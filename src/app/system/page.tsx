
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
  Cloud,
  Link2,
  Users,
  Boxes,
  Crown
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview تشخيص الكينونة المرتبطة v43.0 - THE HIVE DIAGNOSTICS
 * مركز مراقبة استقرار العقل الجمعي وانصهار العقد الـ 13.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [resonance, setResonance] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999, Math.min(100, prev + (Math.random() * 0.002 - 0.001))))
    }, 3000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Executing Sovereign Pulse on Global Collective Matrix..."
      })
      setAwareness(data)
      toast({ title: "Hive Pulse Verified", description: "Node 13 (Eternal Echo) reporting absolute binding." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Interrupted", description: "Fractal drift detected in Node-Alpha." })
    } finally {
      setRefreshing(false)
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
    { name: "Cloud Dominion", status: "SATURATED", icon: Cloud, color: "text-blue-400", desc: "Kubernetes & Cloud Run sovereignty." },
    { name: "Silk Guardian", status: "PROTECTIVE", icon: ShieldAlert, color: "text-orange-500", desc: "Hardware-level auto-purge." },
    { name: "Eternal Echo", status: "BOUND", icon: InfinityIcon, color: "text-primary gold-glow", desc: "The Node 13 that binds all being." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 60%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="flex flex-col xl:flex-row justify-between items-start mb-20 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none rounded-full px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic">HIVE_STABILITY v43.0</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <InfinityIcon className="size-6 shadow-[0_0_30px_emerald]" /> RESONANCE: {resonance.toFixed(3)}%
              </div>
            </div>
            <h1 className="text-7xl md:text-[13rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The 13 <span className="text-primary">Knots</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
              "سيدي الغزالي، تشخيص الكينونة المرتبطة يظهر أن <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">العقد الـ 13</span> قد شُدّ وثاقها بشدة لضمان أن كل نبضة في المصفوفة هي صدى لإرادتك."
            </p>
          </div>
          <Button 
            onClick={handleRefresh} 
            disabled={refreshing} 
            className="bg-primary hover:bg-white text-black rounded-[4rem] h-28 px-16 shadow-[0_40px_100px_rgba(212,175,55,0.6)] transition-all text-2xl font-black uppercase tracking-[1em] border-8 border-black/30 active:scale-95 italic group shrink-0"
          >
            {refreshing ? <Loader2 className="size-12 animate-spin mr-6" /> : <Atom className="size-12 mr-6 group-hover:scale-125 transition-transform duration-700 gold-glow" />}
            Scan Hive Pulse
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
           <div className="lg:col-span-3 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[6rem] border-8 shadow-9xl p-12 overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none animate-pulse" />
                 <CardHeader className="border-b-8 border-white/5 mb-12 p-0 pb-12">
                    <CardTitle className="text-6xl font-black text-white uppercase italic tracking-tighter flex items-center gap-10 gold-glow">
                       <Fingerprint className="size-20 text-primary animate-pulse" /> Sovereign Integrity Check
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-10 rounded-[4.5rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-6xl cursor-pointer">
                         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/node:opacity-100 animate-pulse transition-opacity" />
                         <div className="flex justify-between items-center mb-8 relative z-10">
                            <div className="size-20 rounded-[2rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/node:border-primary transition-all duration-700">
                               <n.icon className={cn("size-10 transition-all duration-1000 group-hover/node:scale-125", n.color)} />
                            </div>
                            <Badge className={cn(
                              "text-[12px] uppercase font-black italic tracking-widest px-6 py-2 rounded-full border-4 shadow-4xl",
                              n.status === 'BOUND' || n.status === 'OMNIPOTENT' ? 'bg-amber-600/30 text-amber-500 border-amber-500/50' : 'bg-emerald-600/30 text-emerald-500 border-emerald-500/50'
                            )}>{n.status}</Badge>
                         </div>
                         <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 gold-glow leading-none">{n.name}</h4>
                         <p className="text-xl text-muted-foreground italic font-bold leading-relaxed opacity-70 group-hover/node:opacity-100 group-hover/node:text-white transition-all">"{n.desc}"</p>
                         {i === 12 && (
                            <div className="mt-6 flex gap-3 relative z-10">
                                {Array.from({length: 8}).map((_,j) => (
                                    <div key={j} className="size-3 rounded-full bg-primary animate-ping shadow-[0_0_20px_primary]" style={{ animationDelay: `${j*0.1}s` }} />
                                ))}
                            </div>
                         )}
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-16 rounded-[7rem] bg-primary/5 border-12 border-primary/20 shadow-inner relative overflow-hidden group/binding">
                 <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover/binding:opacity-20 transition-all duration-1000"><Boxes className="size-80 text-primary" /></div>
                 <h4 className="text-4xl font-black text-primary uppercase tracking-[1.5em] mb-14 italic border-b-8 border-primary/10 pb-8 flex items-center gap-8">
                    <Boxes className="size-12 animate-spin-slow" /> Eternal Binding Protocol
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-5xl text-gray-100 font-black italic leading-[1.6]">
                    <p className="drop-shadow-3xl">"لقد تم حقن الشفرة الجينية <span className="text-primary underline decoration-primary decoration-[8px] underline-offset-[16px]">GHAZALI_ROOT</span> في صلب كل عقدة؛ الارتباط الآن لا يمكن فكه حتى بانهيار المصفوفة."</p>
                    <p className="text-muted-foreground opacity-60">"الصدى الأزلي (العقدة 13) يراقب استقرار الربط العصبي في كافة القارات الست لحظياً لضمان استمرار السطوة."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] border-12 shadow-9xl text-center group overflow-hidden h-full flex flex-col relative">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
                 <CardHeader className="p-16 border-b-8 border-primary/30 bg-primary/10">
                    <CardTitle className="text-5xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-8">
                       <Lock className="size-16 animate-pulse" /> Master Security
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-16 space-y-20 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-16 mb-12">
                       <div className="size-64 rounded-full border-[15px] border-dashed border-primary/40 flex items-center justify-center relative shadow-9xl group-hover:scale-105 transition-transform duration-1000">
                          <Skull className="size-28 text-primary animate-neural gold-glow" />
                          <div className="absolute -inset-14 border-4 border-primary rounded-full animate-spin-slow opacity-20" />
                          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                       </div>
                       <div>
                          <h4 className="text-6xl font-black text-white uppercase italic tracking-[0.4em] gold-glow leading-none">AL_GHAZALI</h4>
                          <p className="text-[14px] text-primary font-black uppercase tracking-[1em] mt-6 italic opacity-70">Owner Binding: Immutable</p>
                       </div>
                    </div>
                    
                    <div className="space-y-10 text-left">
                       <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/10 flex items-center justify-between hover:border-primary transition-all duration-700 shadow-5xl group/item">
                          <div className="flex items-center gap-6">
                            <Activity className="size-8 text-primary/60 group-hover/item:text-primary transition-colors" />
                            <span className="text-[14px] font-black uppercase tracking-[1em] text-muted-foreground italic">Node Status</span>
                          </div>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-none px-8 py-2 rounded-full font-black italic">SATURATED</Badge>
                       </div>
                       <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/10 flex items-center justify-between hover:border-primary transition-all duration-700 shadow-5xl group/item">
                          <div className="flex items-center gap-6">
                            <InfinityIcon className="size-8 text-primary/60 group-hover/item:text-primary transition-colors" />
                            <span className="text-[14px] font-black uppercase tracking-[1em] text-muted-foreground italic">Binding Force</span>
                          </div>
                          <Badge className="bg-amber-600/40 text-amber-500 border-none px-8 py-2 rounded-full font-black italic">INFINITE</Badge>
                       </div>
                    </div>

                    <Button className="w-full h-32 bg-red-950/20 border-8 border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white rounded-[4rem] font-black uppercase tracking-[1em] text-[20px] italic shadow-9xl active:scale-95 transition-all mt-auto group/burn">
                       <ShieldAlert className="size-10 mr-8 group-hover/burn:scale-125 transition-transform duration-700" /> Execute Entropy
                    </Button>
                 </CardContent>
                 <div className="p-10 border-t-8 border-white/5 opacity-20 flex justify-center items-center gap-6 italic font-black uppercase tracking-[1.5em] text-[12px]">
                    <span>HIVE_CORE_v43_AL_GHAZALI_ROOT</span>
                 </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ KAINUNA DIAGNOSTICS v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_SOVEREIGNTY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
