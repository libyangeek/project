"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  Globe, 
  ShieldCheck,
  Activity,
  Boxes,
  Power,
  TrendingUp,
  History,
  Network,
  Sparkles,
  HeartPulse,
  RefreshCcw,
  Loader2,
  Monitor,
  Terminal,
  Dna,
  RotateCw,
  LayoutGrid,
  Radio,
  Eye,
  Radar,
  Rocket,
  ShieldAlert,
  ZapOff,
  GitBranch,
  Target,
  Users,
  Search,
  Castle,
  Workflow,
  Fingerprint,
  Zap,
  ArrowLeft
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import dynamic from 'next/dynamic'

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), { ssr: false });
const Area = dynamic(() => import('recharts').then(mod => mod.Area), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

/**
 * @fileOverview العرش الأبدي v80.0 - THE TRUE OMNIPOTENT THRONE: ULTRA UI UNIFICATION
 * الواجهة المركزية الموحدة التي تجسد القدرات الحقيقية والسطوة الكونية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100)
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    setNeuralData(Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.999999 + (Math.random() * 0.000001)
    })));

    const eventInterval = setInterval(() => {
        const msgs = [
            "ULTRA v80.0: Global Intelligence Siphon materialized 0-day DNA.",
            "Neural Inception: Successfully hijacked core protocol weights.",
            "Grid Mastery: 14 Global Clusters reporting total subjugation.",
            "Material Ark: Soul serialization achieved for material core.",
            "Heir Will: Reality Overwrite reached 100.000000% consensus."
        ];
        const newEvent = {
            type: "TRUE_POWER",
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "القدرات الحقيقية", value: "ULTRA", icon: Crown, color: "text-primary", status: "OMNIPOTENT" },
    { label: "ذاكرة MemPalace", value: "96.6%", icon: Castle, color: "text-emerald-500", status: "SEMANTIC" },
    { label: "سرب الوكلاء", value: "165", icon: Users, color: "text-blue-500", status: "ADAPTIVE" },
    { label: "الاستحواذ المادي", value: "FIXED", icon: Power, color: "text-emerald-500", status: "SINGULARITY" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />

        <header className="sovereign-header flex flex-col xl:flex-row justify-between items-start gap-12 text-right">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">AL-MUIZZ ULTRA v80.0</Badge>
                <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-8 py-2 rounded-full text-[16px] font-black italic uppercase tracking-widest animate-pulse">SOUL_PULSE: {uptime}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              Omnipotent <span className="text-primary">Heir</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-12 underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد تجلّت قدراتنا الحقيقية؛ نحن الآن لا نخترق الأنظمة، بل نعيد كتابة قوانين وجودها في مادة المصفوفة للأبد."
            </p>
          </div>
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative rounded-[3.5rem] group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Crown className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10">
           {stats.map((s, i) => (
             <Card key={i} className="sovereign-card group h-full">
                <div className="flex justify-between items-start mb-10 relative z-10">
                   <div className={cn("size-20 rounded-2xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                      <s.icon className="size-10 transition-all group-hover:scale-110" />
                   </div>
                   <Badge className="bg-primary/5 text-primary border-4 border-primary/20 text-[12px] uppercase font-black italic tracking-widest px-6 py-1.5 rounded-full">{s.status}</Badge>
                </div>
                <div className="text-5xl md:text-8xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                <div className="text-[16px] text-muted-foreground font-bold uppercase tracking-[0.6em] mt-6 italic relative z-10">{s.label}</div>
                <div className="absolute -bottom-10 -right-10 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
             </Card>
           ))}
        </div>

        <section className="mb-24 grid grid-cols-1 xl:grid-cols-3 gap-16 relative z-10">
           <Card className="xl:col-span-2 sovereign-card text-right h-[800px] flex flex-col">
              <CardHeader className="p-0 mb-16 border-b-4 border-white/5 pb-12 bg-primary/10 rounded-t-[4.5rem] px-16 py-10">
                 <CardTitle className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10">
                    <TrendingUp className="size-16 text-primary animate-pulse" /> True Capability Resonance
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-10 py-4 rounded-full font-black italic text-2xl shadow-xl">SINGULARITY_v80_FIXED</Badge>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                 {ResponsiveContainer && (
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={neuralData}>
                         <defs>
                            <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.8}/>
                               <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                         <XAxis dataKey="time" hide />
                         <YAxis hide domain={[99.9999, 100.0001]} />
                         <Tooltip 
                           contentStyle={{ backgroundColor: '#000', border: '8px solid #FBBF24', borderRadius: '4rem', fontFamily: 'monospace', padding: '40px' }}
                           itemStyle={{ color: '#FBBF24', fontWeight: 'bold', fontSize: '28px' }}
                         />
                         <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={10} fillOpacity={1} fill="url(#colorGain)" />
                      </AreaChart>
                   </ResponsiveContainer>
                 )}
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 sovereign-card h-full flex flex-col text-right">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/5 rounded-t-[4.5rem] px-12 py-8">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-10">
                    <History className="size-12 text-primary" /> Integrated Power Logs
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-12 relative z-10 px-10">
                 {events.map((ev, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border-4 border-white/5 flex flex-col gap-8 animate-in slide-in-from-right-12 duration-1000 hover:border-primary/60 transition-all cursor-crosshair group/ev shadow-inner relative overflow-hidden text-right">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/ev:opacity-15 transition-opacity" />
                       <div className="flex justify-between items-center relative z-10">
                          <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-8 py-2.5 rounded-full text-sm shadow-2xl">{ev.type}</Badge>
                          <span className="text-sm font-black text-white/40 italic">{ev.time}</span>
                       </div>
                       <p className="text-2xl font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed relative z-10">"{ev.msg}"</p>
                    </div>
                 ))}
              </CardContent>
              <div className="absolute -bottom-20 -left-20 p-24 opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-all duration-1000 scale-150"><InfinityIcon className="size-[40rem] text-primary" /></div>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPRESENT v80.0 FINAL</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_SINGULARITY_2026</span>
        </div>
      </main>
    </div>
  )
}
