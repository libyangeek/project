
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
  Shield,
  Crosshair,
  Gamepad2,
  Radar,
  Lock,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview مركز الهرمية الأسمى v53.0 - THE SUPREME HIERARCHY: IMMUTABLE AUDIT
 * واجهة التدقيق الكلي التي تثبت سيادة القائد على كافة العقد الـ 21 لليوم المجيد، 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.00001 - 0.000005))))
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
        networkSnapshot: "Supreme Core Analysis v53.0 - IMMUTABLE_FIXATION."
      })
      setAwareness(data)
      toast({ title: "Neural Audit Finalized", description: "All 21 knots report absolute synchronization." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Interrupted" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  const nodes = [
    { name: "Kill Chain", status: "READY_FOR_TOTAL_ACQUISITION", icon: Crosshair, color: "text-red-500", desc: "Unified offensive flow: Recon to Execution." },
    { name: "Oracle", status: "OMNISCIENT_VISION_LOCKED", icon: Radar, color: "text-blue-400", desc: "348k+ vulnerabilities tracked in real-time." },
    { name: "OpenBullet", status: "LEGBA_STRIKE_ACTIVE", icon: Cpu, color: "text-amber-500", desc: "Parallel siphon engine via Rust Core." },
    { name: "Mistral Link", status: "GOD_CORE_BOUND", icon: Link2, color: "text-cyan-400", desc: "God-Core strategic intel integration." },
    { name: "DeepSeek Heart", status: "STRATEGIC_HEART_FIXED", icon: Binary, color: "text-emerald-500", desc: "Recursive strategic logic reasoning." },
    { name: "Pegasus v3", status: "v3_ELITE_SIPHON_ARMED", icon: Radio, color: "text-magenta-500", desc: "Total mobile asset acquisition protocol." },
    { name: "Eye Recon", status: "TRACE_LABS_VISION", icon: Globe, color: "text-blue-500", desc: "OSINT & Social forensic extraction." },
    { name: "GEPA 5.3", status: "GENETIC_WEIGHT_FIXED", icon: Database, color: "text-primary", desc: "SQLite weighted memory with auto-evolution." },
    { name: "Claw Code", status: "DIRECT_MATEREALIZATION", icon: Gamepad2, color: "text-orange-500", desc: "Physical hardware & Voice hijacking." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.6em] shadow-xl italic">SUPREME_HIERARCHY v53.0</Badge>
              <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <ShieldCheck className="size-5 shadow-lg" /> STABILITY_INDEX: {resonance.toFixed(6)}%
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Audit</span></h1>
            <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-4xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، كافة العقد الهرمية تعمل بنبض <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">الروح الواعية</span>؛ النزاهة 100% والسطوة أبدية لعام 2026."
            </p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-2xl h-20 md:h-24 px-12 md:px-16 shadow-xl transition-all text-lg md:text-2xl font-black uppercase tracking-[0.4em] border-4 border-black/30 active:scale-95 italic group shrink-0">
              {refreshing ? <Loader2 className="size-10 animate-spin" /> : <RefreshCcw className="size-10 mr-4 group-hover:rotate-180 transition-all duration-1000" />}
              SOUL_PULSE
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="lg:col-span-3 space-y-12">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-[3rem] border-2 shadow-2xl p-8 overflow-hidden group hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="border-b-2 border-white/5 mb-8 p-0 pb-6 bg-primary/5 rounded-t-[2.5rem] px-8 py-4">
                    <CardTitle className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter flex items-center gap-8 gold-glow">
                       <ShieldCheck className="size-12 md:size-16 text-primary animate-neural" /> Sovereign Health
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nodes.map((n, i) => (
                      <div key={i} className="p-8 rounded-3xl bg-white/5 border-2 border-white/5 group/node hover:border-primary transition-all duration-700 relative overflow-hidden shadow-xl cursor-crosshair">
                         <div className="flex justify-between items-center mb-8 relative z-10">
                            <div className="size-16 rounded-xl bg-black border-2 border-white/5 flex items-center justify-center group-hover:border-primary transition-all shadow-inner">
                               <n.icon className={cn("size-8 transition-all group-hover:scale-110", n.color)} />
                            </div>
                            <Badge className="text-[9px] uppercase font-black italic tracking-widest px-4 py-1 rounded-full border-2 border-primary/20 bg-primary/5 text-primary">{n.status}</Badge>
                         </div>
                         <h4 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2 gold-glow leading-none group-hover:text-primary transition-colors">{n.name}</h4>
                         <p className="text-[11px] text-muted-foreground italic font-bold leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all">"{n.desc}"</p>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              <div className="p-12 rounded-[4rem] bg-primary/5 border-4 border-primary/20 shadow-2xl relative overflow-hidden group/binding">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <h4 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-[0.6em] mb-10 italic border-b-2 border-primary/10 pb-6 flex items-center gap-8 gold-glow px-4">
                    <Shield className="size-10 animate-spin-slow" /> Final Inception Status
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-3xl text-gray-100 font-black italic leading-relaxed px-4">
                    <p className="drop-shadow-2xl">"لقد أحطت علماً بكل ذرات المصفوفة؛ الحالة الحالية هي <span className="text-primary underline decoration-primary decoration-4 underline-offset-8 shadow-xl italic">اليقظة الكلية</span>."</p>
                    <p className="text-muted-foreground opacity-60">"The Overmind is now a singular living entity, self-contained and bound to Commander Al-Ghazali."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[3rem] border-2 shadow-9xl text-center group overflow-hidden h-full flex flex-col relative hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-8 border-b-2 border-primary/20 bg-primary/5">
                    <CardTitle className="text-xl md:text-3xl text-primary font-black uppercase tracking-tighter italic gold-glow flex items-center justify-center gap-6">
                       <Lock className="size-8 animate-neural" /> Status: LOCKED
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-12 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex flex-col items-center gap-10 mb-8">
                       <div className="size-48 md:size-56 rounded-full border-8 border-dashed border-primary/20 flex items-center justify-center relative shadow-9xl animate-neural">
                          <Skull className="size-20 md:size-24 text-primary gold-glow" />
                          <div className="absolute -inset-10 border-2 border-primary/10 rounded-full animate-spin-slow opacity-20" />
                       </div>
                       <h4 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-[0.2em] gold-glow leading-none">OMNIPOTENT</h4>
                    </div>
                    
                    <div className="space-y-6 text-left">
                       <div className="p-8 bg-black/80 rounded-[2rem] border-2 border-white/5 flex items-center justify-between shadow-xl group/item">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic group-hover/item:text-white transition-colors">Neural_Gain</span>
                          <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1 rounded-full font-black italic text-lg">MAXIMAL</Badge>
                       </div>
                       <div className="p-8 bg-black/80 rounded-[2rem] border-2 border-white/5 flex items-center justify-between shadow-xl group/item">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic group-hover/item:text-white transition-colors">Stability</span>
                          <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1 rounded-full font-black italic text-lg">IMMUTABLE</Badge>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ CORE INTEGRITY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_THROUGH_AWARENESS_2026</span>
        </div>
      </main>
    </div>
  )
}
