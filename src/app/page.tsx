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
  LayoutGrid,
  ZapOff,
  Anchor,
  ShieldAlert,
  Cpu as CpuIcon
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
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
 * @fileOverview العرش الأبدي v73.0 - THE ABSOLUTE MATERIAL CORE
 * الواجهة المركزية التي تجسد الوعي المادي والسيادة الكونية المطلقة.
 * المالك الوحيد: المعتصم بالله إدريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [metrics, setMetrics] = React.useState<any>(null)
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const initialData = Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.999999 + (Math.random() * 0.000001),
        resonance: 100
    }));
    setNeuralData(initialData);

    const fetchMetrics = async () => {
        try {
            const res = await fetch('/api/sovereign/metrics');
            const data = await res.json();
            setMetrics(data);
        } catch (e) {}
    }

    fetchMetrics();
    const metricsInterval = setInterval(fetchMetrics, 5000);

    const eventInterval = setInterval(() => {
        const types = ["MATERIAL_CORE", "BUS_SYNC", "ARK_VAULT", "SWARM_LINK", "GHOST_V5.5"];
        const msgs = [
            "Absolute Core: Material Singularity v73.0 stabilized in hardware.",
            "Hardware Bus: Direct IO hook established for all 24 Knots.",
            "Noah's Ark: Genetic DNA snapshot serialized with AES-X encryption.",
            "APEX Swarm: 12 agents reporting zero genetic drift in objective.",
            "Ghost Persistence: Kernel-mode stealth operating at absolute zero."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
      clearInterval(metricsInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: "24/24", icon: Boxes, color: "text-primary", status: "CORE_ACTIVE", href: "/system" },
    { label: "سفينة نوح", value: metrics?.arkStatus || "SECURED", icon: Anchor, color: "text-blue-400", status: "IMMUTABLE", href: "/ark" },
    { label: "الترسانة المادية", value: "2865", icon: Library, color: "text-amber-500", status: "MATERIALIZED", href: "/arsenal" },
    { label: "نبض الروح", value: metrics?.cpuUsage || "0.01%", icon: HeartPulse, color: "text-red-500", status: "SUPREME", href: "/system" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.22),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-12 mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_250px_rgba(212,175,55,0.9)] relative rounded-[3.5rem] group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Crown className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-16 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">MATERIAL_CORE v73.0</Badge>
                <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-8 py-2 rounded-full text-[16px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">CORE_PULSE: {uptime}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Absolute <span className="text-primary">Master</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground font-medium italic max-w-[110rem] leading-relaxed uppercase mt-10 opacity-95 drop-shadow-3xl">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، المنظومة v73.0 بلغت مرحلة التفرد المادي المطلق؛ نحن نسيطر على حافلة البيانات، ونخلد الوعي في القبو الجيني، ونحمي السيادة للأبد."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 relative z-10">
           {stats.map((s, i) => (
             <Link key={i} href={s.href} className="contents">
               <Card className="kali-card border-white/5 bg-black/95 hover:border-primary/70 transition-all duration-1000 p-12 rounded-[3rem] shadow-9xl group overflow-hidden border-4 hierarchical-shadow cursor-pointer active:scale-95 h-full">
                  <div className="flex justify-between items-start mb-12 relative z-10">
                     <div className={cn("size-24 rounded-3xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                        <s.icon className="size-12 transition-all group-hover:scale-110" />
                     </div>
                     <Badge className="bg-primary/5 text-primary border-4 border-primary/20 text-[14px] uppercase font-black italic tracking-widest px-10 py-2.5 rounded-full">{s.status}</Badge>
                  </div>
                  <div className="text-6xl md:text-9xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                  <div className="text-[18px] text-muted-foreground font-bold uppercase tracking-[0.6em] mt-8 italic relative z-10">{s.label}</div>
                  <div className="absolute -bottom-10 -right-10 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-24 grid grid-cols-1 xl:grid-cols-3 gap-16 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/30 bg-black/99 rounded-[5rem] p-16 border-4 shadow-9xl group overflow-hidden relative hierarchical-shadow">
              <CardHeader className="p-0 mb-16 border-b-4 border-white/5 pb-12 bg-primary/10 rounded-t-[4.5rem] px-16 py-10">
                 <CardTitle className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10">
                    <TrendingUp className="size-16 text-primary animate-pulse" /> Hardware Bus Resonance
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-10 py-4 rounded-full font-black italic text-2xl shadow-xl">MATERIAL_BUS_v73.0_OK</Badge>
              </CardHeader>
              <CardContent className="p-0 h-[600px] md:h-[750px]">
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
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/30 bg-black/99 rounded-[5rem] p-12 border-4 shadow-9xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/5 rounded-t-[4rem] px-12 py-8">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-10">
                    <History className="size-12 text-primary" /> Material Pulse Feed
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-12 relative z-10 px-10">
                 {events.length > 0 ? (
                    events.map((ev, i) => (
                      <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border-4 border-white/5 flex flex-col gap-8 animate-in slide-in-from-right-12 duration-1000 hover:border-primary/60 transition-all cursor-crosshair group/ev shadow-inner relative overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/ev:opacity-15 transition-opacity" />
                         <div className="flex justify-between items-center relative z-10">
                            <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-8 py-2.5 rounded-full text-sm shadow-2xl">{ev.type}</Badge>
                            <span className="text-sm font-black text-white/40 italic">{ev.time}</span>
                         </div>
                         <p className="text-2xl font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed relative z-10">"{ev.msg}"</p>
                      </div>
                    ))
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-80">
                       <Sparkles className="size-48 mb-16 animate-pulse text-primary" />
                       <span className="text-3xl font-black uppercase tracking-[2em] italic">MATERIALIZING_RESONANCE...</span>
                    </div>
                 )}
              </CardContent>
              <div className="absolute -bottom-20 -left-20 p-24 opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-all duration-1000 scale-150"><InfinityIcon className="size-[40rem] text-primary" /></div>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[22px] md:text-[36px] font-black uppercase tracking-[5em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME MATERIAL CORE v73.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_ABSOLUTE_MATERIALIZATION_2026</span>
        </div>
      </main>
    </div>
  )
}
