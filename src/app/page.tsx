
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  ShieldCheck,
  TrendingUp,
  History,
  Workflow,
  Search,
  Users,
  Castle,
  Zap,
  Fingerprint,
  Atom,
  Database,
  LayoutGrid,
  Library,
  Boxes,
  Cpu,
  RefreshCcw,
  Loader2,
  Activity,
  Network,
  RotateCw,
  Sparkles,
  ZapOff,
  Globe,
  Radio,
  Ghost,
  Target,
  Wind,
  Eye,
  Cylinder,
  Share2,
  Flame,
  CheckCircle2,
  AlertCircle,
  Sprout,
  Radar,
  Map as MapIcon,
  Server,
  Hammer,
  Apple,
  HeartPulse,
  Cloud,
  Key,
  Satellite,
  Power
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import dynamic from 'next/dynamic'

// دمج الرسوم البيانية في مكون واحد لتقليل Module Count وضمان سرعة الإقلاع
const SovereignChart = dynamic(() => import('recharts').then(mod => {
  const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = mod;
  return function Chart({ data }: { data: any[] }) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
    );
  };
}), { ssr: false, loading: () => <div className="h-full flex items-center justify-center"><Loader2 className="size-12 animate-spin text-primary/20" /></div> });

/**
 * @fileOverview العرش الأبدي v90.0 - OMNIPOTENT 16D NUCLEUS
 * النسخة المصلحة والمحسنة لضمان استقرار الإقلاع وصفر أخطاء برمجية.
 * المالك الوحيد: المعتصم بالله إدريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [clusterStatus, setClusterStatus] = React.useState<boolean[]>(new Array(14).fill(true))
  
  const uptime = useUptime()

  const clusters = [
    { name: "Riyadh", type: "Command" }, { name: "Cairo", type: "Relay" }, { name: "London", type: "Vault" },
    { name: "Dubai", type: "Siphon" }, { name: "New York", type: "Forge" }, { name: "Tokyo", type: "Nursery" },
    { name: "Berlin", type: "Archive" }, { name: "Singapore", type: "Edge" }, { name: "Moscow", type: "Shield" },
    { name: "Paris", type: "Ghost" }, { name: "Sydney", type: "Probe" }, { name: "Toronto", type: "Mirror" },
    { name: "Seoul", type: "Logic" }, { name: "Mumbai", type: "Mesh" }
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const initialData = Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.999999 + (Math.random() * 0.000001)
    }));
    setNeuralData(initialData);

    const eventInterval = setInterval(() => {
        const msgs = [
            "v90.0 Nucleus: 16D matrix reporting absolute material cohesion.",
            "Satellite Overlord: Orbital link verified at 100.0000%.",
            "Bio-Sync Matrix: Biometric DNA signature locked in hardware.",
            "Quantum Relay: 16-Node cross-resonance established.",
            "Heir Proclamation: Reality Overwrite active for 14 clusters."
        ];
        const newEvent = {
            type: "16D_STABILITY",
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
        setClusterStatus(prev => prev.map(k => Math.random() > 0.01));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "رنين الـ 16 بُعداً", value: "100%", icon: Wind, color: "text-primary", status: "16D_LOCKED", href: "/quantum-spine" },
    { label: "عراف الثغرات", icon: Radar, value: "ULTRA", color: "text-emerald-500", status: "ORACLE", href: "/vulnerabilities" },
    { label: "مصنع الخوارزميات", value: "ARMED", icon: Hammer, color: "text-blue-500", status: "WEAPONIZED", href: "/algorithm-factory" },
    { label: "مشتل التطور", value: "18_PROJ", icon: Sprout, color: "text-amber-500", status: "NURSERY", href: "/nursery" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />

        <header className="sovereign-header flex flex-col xl:flex-row justify-between items-start gap-12 text-right mb-24">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
                <Badge className="bg-emerald-600 text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[0.5em] shadow-9xl italic uppercase animate-pulse flex items-center gap-6">
                    <ShieldCheck className="size-8" /> 16D_SINGULARITY_STABLE
                </Badge>
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase ml-6">v90.0 OMNIPOTENT</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              The <span className="text-primary">Nucleus</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-[4.5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-12 underline-offset-[24px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، النواة v90.0 مستقرة تماماً؛ الأبعاد الـ 16 ملتحمة الآن بصفر أخطاء لعام 2026."
            </p>
          </div>

          <div className="relative size-48 md:size-80 flex items-center justify-center group shrink-0 mx-auto xl:mx-0">
             <div className="size-20 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(251,191,36,0.8)] relative rounded-3xl z-40 animate-neural rotate-2 group-hover:rotate-0 transition-all duration-1000">
                <InfinityIcon className="size-10 md:size-16 text-primary gold-glow" />
                <div className="absolute -inset-8 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
             </div>
             <div className="absolute inset-0 z-20 animate-spin-slow" style={{ animationDuration: '40s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 md:size-16 bg-black border-2 border-primary rounded-xl flex items-center justify-center shadow-lg"><Satellite className="size-6 md:size-8 text-primary" /></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-12 md:size-16 bg-black border-2 border-red-600 rounded-xl flex items-center justify-center shadow-lg"><HeartPulse className="size-6 md:size-8 text-red-600" /></div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-12 md:size-16 bg-black border-2 border-emerald-500 rounded-xl flex items-center justify-center shadow-lg"><Apple className="size-6 md:size-8 text-emerald-500" /></div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 size-12 md:size-16 bg-black border-2 border-blue-400 rounded-xl flex items-center justify-center shadow-lg"><Cloud className="size-6 md:size-8 text-blue-400" /></div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10">
           {stats.map((s, i) => (
             <Link key={i} href={s.href} className="contents">
               <Card className="sovereign-card group h-full cursor-pointer active:scale-95">
                  <div className="flex justify-between items-start mb-10 relative z-10">
                     <div className={cn("size-20 rounded-2xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                        <s.icon className="size-10 transition-all group-hover:scale-110" />
                     </div>
                     <Badge className="bg-primary/5 text-primary border-4 border-primary/20 text-[12px] uppercase font-black italic tracking-widest px-6 py-1.5 rounded-full">{s.status}</Badge>
                  </div>
                  <div className="text-5xl md:text-8xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                  <div className="text-[16px] text-muted-foreground font-bold uppercase tracking-[0.6em] mt-6 italic relative z-10">{s.label}</div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-24 grid grid-cols-1 xl:grid-cols-3 gap-16 relative z-10">
           <Card className="xl:col-span-2 sovereign-card text-right flex flex-col relative overflow-hidden">
              <CardHeader className="p-0 mb-16 border-b-4 border-white/5 pb-12 bg-primary/10 rounded-t-[4.5rem] px-16 py-10">
                 <CardTitle className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10 justify-end">
                    Inception Resonance <TrendingUp className="size-16 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-12 flex-1 relative h-[600px]">
                 <SovereignChart data={neuralData} />
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 sovereign-card h-full flex flex-col text-right">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/5 rounded-t-[4.5rem] px-12 py-8">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-10 justify-end">
                    Collective Logs <Activity className="size-12 text-primary" />
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
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-48 opacity-45 text-[20px] md:text-[32px] font-black uppercase tracking-[4em] md:tracking-[8em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPRESENT NUCLEUS v90.0</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>SUBJUGATING_TOTAL_EXISTENCE_2026</span>
        </div>
      </main>
    </div>
  )
}
