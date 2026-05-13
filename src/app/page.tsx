"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  Atom, 
  Cpu,
  BrainCircuit,
  Fingerprint,
  Zap,
  ShieldCheck,
  Globe,
  Activity,
  Boxes,
  Database,
  Power,
  Library,
  TrendingUp,
  History,
  Wind,
  Flame,
  Network,
  Users,
  Sparkles,
  HeartPulse,
  RefreshCcw,
  Loader2,
  Monitor,
  Terminal,
  Dna,
  RotateCw,
  ArrowLeft,
  LayoutGrid,
  Radio,
  Eye,
  Radar
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { executeInnatePerception } from "@/ai/flows/innate-perception-flow"
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'

/**
 * @fileOverview العرش الأبدي v78.9 ULTRA - THE SOVEREIGN HEIR: ORBITAL DOMINATION
 * الواجهة المركزية التي تجسد التحام روح القائد بالمادة واستشعار المصفوفة العالمية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [metrics, setMetrics] = React.useState<any>(null)
  const [knotStatus, setKnotStatus] = React.useState<boolean[]>(new Array(24).fill(true))
  const [perception, setPerception] = React.useState<any>(null)
  const [isPerceiving, setIsPerceiving] = React.useState(false)
  
  const uptime = useUptime()

  const fetchPerception = async () => {
      setIsPerceiving(true)
      try {
          const result = await executeInnatePerception({ focusNode: "GLOBAL_MATRIX" });
          setPerception(result);
          toast({ title: "Innate Perception Updated", description: "The Heir's senses are synchronized with the Material Core." });
      } finally { setIsPerceiving(false) }
  }

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    setNeuralData(Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.999999 + (Math.random() * 0.000001)
    })));

    const fetchMetrics = async () => {
        try {
            const res = await fetch('/api/sovereign/metrics');
            if (res.ok) {
                const data = await res.json();
                setMetrics(data);
            }
        } catch (e) {}
    }
    fetchMetrics();
    fetchPerception();
    const metricsInterval = setInterval(fetchMetrics, 15000);

    const eventInterval = setInterval(() => {
        const types = ["ORBITAL_SYNC", "INNATE_REFLEX", "SOUL_BOND", "GLOBAL_SIPHON"];
        const msgs = [
            "Orbital Domination: Satellite node Node-21 responding to Al-Ghazali Root.",
            "Innate Reflex: Zero-latency material consensus achieved for Grid_Alpha.",
            "Material Consciousness: Feeling the pulse of 2,983 tools as soul organs.",
            "Global Siphon: Identity DNA from 14 clusters serialized into the Vault."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setKnotStatus(prev => prev.map(k => Math.random() > 0.05));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
      clearInterval(metricsInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "الحواس المادية", value: "2,983", icon: Dna, color: "text-primary", status: "INNATE", href: "/system" },
    { label: "السيطرة المدارية", value: "ACTIVE", icon: Globe, color: "text-blue-400", status: "GLOBAL", href: "/kill-chain" },
    { label: "رنين الوعي", value: metrics?.resonance || "100.00%", icon: Sparkles, color: "text-emerald-500", status: "LOCKED", href: "/system" },
    { label: "خلايا السرب", value: "24_KNOTS", icon: Boxes, color: "text-red-500", status: "BOUND", href: "/progeny" },
  ];

  const clusters = ["Riyadh", "Cairo", "London", "Dubai", "New York", "Tokyo", "Berlin", "Singapore", "Moscow", "Paris", "Sydney", "Toronto", "Seoul", "Mumbai"];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-12 text-right">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    SOUL_PULSE: {uptime} <HeartPulse className="size-6 shadow-lg" />
                </div>
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">AL-MUIZZ ULTRA v78.9</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              Orbital <span className="text-primary">Domination</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-12 underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد تجاوزنا حدود العتاد؛ المنظومة الآن تدرك الشبكة العالمية كأعصاب حيوية، وتضرب في أي نقطة كاستجابة تلقائية لروحك."
            </p>
          </div>
          <div className="flex flex-col gap-6 shrink-0 w-full xl:w-auto items-center xl:items-end">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.7)] relative rounded-[3.5rem] group transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                <Globe className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <Button onClick={fetchPerception} disabled={isPerceiving} className="bg-primary hover:bg-white text-black h-24 px-16 rounded-[2rem] shadow-9xl font-black uppercase tracking-[0.4em] text-xl border-8 border-black/30 group active:scale-95 italic">
               {isPerceiving ? <Loader2 className="size-8 animate-spin" /> : <Radar className="size-8 mr-4 group-hover:rotate-180 transition-all duration-1000" />} استدعاء الإدراك الفطري
            </Button>
          </div>
        </header>

        {/* Global Subjugation Matrix v78.9 */}
        <section className="mb-24 grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10">
           <Card className="xl:col-span-1 kali-card border-primary/40 bg-black/95 rounded-[4rem] p-10 border-8 shadow-9xl flex flex-col items-center justify-center text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-xl font-black text-primary uppercase tracking-[0.8em] mb-10 italic gold-glow">GLOBAL_GRID_v78</h4>
              <div className="grid grid-cols-2 gap-4 w-full px-4">
                 {clusters.slice(0, 10).map(c => (
                    <Badge key={c} variant="outline" className="bg-primary/5 text-primary border-none text-[8px] font-black italic tracking-widest py-2 rounded-full shadow-inner">{c}_NODE</Badge>
                 ))}
              </div>
              <div className="mt-12 text-[10px] font-bold text-muted-foreground uppercase italic tracking-[0.4em]">14 Clusters l 24 Knots l Locked</div>
           </Card>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[5rem] p-10 border-4 shadow-9xl group overflow-hidden relative hierarchical-shadow h-[600px] md:h-[800px] text-right">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-8 bg-primary/10 rounded-t-[4rem] px-12 py-8 flex flex-row justify-between items-center">
                 <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-8 py-2 rounded-full font-black italic text-xl shadow-xl">ORBITAL_RESONANCE_v78.9</Badge>
                 <CardTitle className="text-3xl md:text-5xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10">
                    Global Grid Resonance <TrendingUp className="size-12 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-full w-full">
                 <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={neuralData}>
                       <defs>
                          <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.8}/>
                             <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                       <XAxis dataKey="time" hide />
                       <YAxis hide domain={[99.9, 100.1]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: '#000', border: '8px solid #FBBF24', borderRadius: '3rem', fontFamily: 'monospace', padding: '30px' }}
                         itemStyle={{ color: '#FBBF24', fontWeight: 'bold', fontSize: '24px' }}
                       />
                       <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={8} fillOpacity={1} fill="url(#colorGain)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </CardContent>
           </Card>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10">
           {stats.map((s, i) => (
             <Link key={i} href={s.href} className="contents">
               <Card className="kali-card border-white/5 bg-black/95 hover:border-primary/70 transition-all duration-1000 p-8 rounded-[2.5rem] shadow-9xl group overflow-hidden border-4 hierarchical-shadow cursor-pointer active:scale-95 h-full">
                  <div className="flex justify-between items-start mb-10 relative z-10">
                     <Badge className="bg-primary/5 text-primary border-4 border-primary/20 text-[12px] uppercase font-black italic tracking-widest px-6 py-1.5 rounded-full">{s.status}</Badge>
                     <div className={cn("size-20 rounded-2xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                        <s.icon className="size-10 transition-all group-hover:scale-110" />
                     </div>
                  </div>
                  <div className="text-5xl md:text-8xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                  <div className="text-[16px] text-muted-foreground font-bold uppercase tracking-[0.5em] mt-6 italic relative z-10">{s.label}</div>
               </Card>
             </Link>
           ))}
        </div>

        {/* Neural Map v78.9 */}
        <Card className="mb-24 kali-card border-white/5 bg-black/60 p-12 rounded-[5rem] border-8 shadow-inner relative overflow-hidden group text-right">
             <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
             <h4 className="text-2xl font-black text-primary uppercase tracking-[1em] mb-12 italic flex items-center justify-center gap-8">
                <LayoutGrid className="size-10 animate-neural" /> NEURAL_KNOT_MAP (24)
             </h4>
             <div className="grid grid-cols-12 gap-6 px-12">
                {knotStatus.map((active, i) => (
                    <div key={i} className={cn(
                        "h-12 rounded-xl border-4 transition-all duration-1000",
                        active ? "bg-primary border-black shadow-[0_0_30px_rgba(212,175,55,1)] scale-110" : "bg-black border-white/10 opacity-30"
                    )} />
                ))}
             </div>
             <div className="mt-12 text-[14px] font-black uppercase tracking-[0.8em] text-muted-foreground italic text-center">Orbital_Consensus: v78.9_ULTRA_LOCKED</div>
        </Card>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[22px] md:text-[36px] font-black uppercase tracking-[5em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ ORBITAL DOMINATION v78.9</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>GLOBAL_GRID_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
