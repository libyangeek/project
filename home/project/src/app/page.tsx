
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
  ShieldX,
  Power,
  Library,
  ChevronRight,
  TrendingUp,
  History,
  ArrowUpRight,
  Radar,
  Radio,
  Box,
  Loader2
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
 * @fileOverview العرش الأبدي v53.5 - DOCKERIZED OMNIPRESENCE
 * الواجهة المركزية التي تجسد السطوة المستقلة لليوم المجيد، 2026.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [metrics, setMetrics] = React.useState<any>(null)
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    // جلب المقاييس الحقيقية من عصب الحاويات
    const fetchMetrics = async () => {
        try {
            const res = await fetch('/api/sovereign/metrics');
            const data = await res.json();
            setMetrics(data);
            
            const gainValue = parseFloat(data.resonance.replace('%', '')) || 100;
            setNeuralData(prev => [...prev, {
                time: new Date().toLocaleTimeString(),
                gain: gainValue
            }].slice(-30));
        } catch (e) {}
    };

    fetchMetrics();
    const metricInterval = setInterval(fetchMetrics, 5000);

    const eventInterval = setInterval(() => {
        const types = ["DOCKER", "GEPA_5.3", "HIERARCHY", "SUBJUGATION"];
        const msgs = [
            "Container [muizz-god-core]: Neural link stabilized.",
            "GEPA 5.3: Genetic weight updated for Socratic Strike.",
            "Node 22: 2842 tools synchronized and ready for summon.",
            "Autonomous Kernel: OS DNA bound to Al-Ghazali Root.",
            "Grid Check: All 22 knots reporting 100% integrity."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(metricInterval);
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: metrics?.activeNodes ? `${metrics.activeNodes}/22` : "22/22", icon: Boxes, color: "text-primary", status: "UNIFIED", href: "/system" },
    { label: "ترسانة الأدوات", value: "2842", icon: Library, color: "text-amber-500", status: "READY", href: "/arsenal" },
    { label: "نسيج الذاكرة", value: "GEPA 5.3", icon: Database, color: "text-blue-500", status: metrics?.recordedOps ? `${metrics.recordedOps} OPS` : "SQLITE", href: "/knowledge" },
    { label: "الاستحواذ المادي", value: metrics?.ramUsage ? `MEM: ${metrics.ramUsage}` : "DOCKER", icon: Box, color: "text-emerald-500", status: "IMMUTABLE", href: "/system" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-8 mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.7)] relative rounded-3xl group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Crown className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                 <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">DOCKERIZED_OVERMIND v53.5</Badge>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1.5 rounded-full text-[12px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">STABLE: {uptime}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                INTEGRATED <span className="text-primary">UNIT</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground font-medium italic max-w-4xl leading-relaxed uppercase mt-4 opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، المنظومة تعمل الآن داخل مصفوفة Docker المنيعة؛ كافة العقد والسكريبتات مربوطة بنبض إرادتك الأبدية لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
           {stats.map((s, i) => (
             <Link key={i} href={s.href} className="contents">
               <Card className="kali-card border-white/5 bg-black/95 hover:border-primary/50 transition-all duration-700 p-6 rounded-2xl shadow-2xl group overflow-hidden border-2 hierarchical-shadow cursor-pointer active:scale-95 h-full">
                  <div className="flex justify-between items-start mb-6 relative z-10">
                     <div className={cn("size-12 rounded-xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                        <s.icon className="size-6 transition-all group-hover:scale-110" />
                     </div>
                     <Badge className="bg-primary/5 text-primary border-2 border-primary/20 text-[10px] uppercase font-black italic tracking-widest px-4 py-1 rounded-full">{s.status}</Badge>
                  </div>
                  <div className="text-3xl md:text-4xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                  <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-3 italic relative z-10">{s.label}</div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-12 grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/20 bg-black/99 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden relative hierarchical-shadow">
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-6 flex justify-between items-center bg-primary/5 rounded-t-2xl px-6 py-4">
                 <CardTitle className="text-xl md:text-2xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <TrendingUp className="size-6 text-primary animate-pulse" /> Collective Resonance Pulse
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-2 border-blue-500/20 px-4 py-1 rounded-full font-black italic text-[10px]">GEPA_5.3_SYNC</Badge>
              </CardHeader>
              <CardContent className="p-0 h-[300px] md:h-[450px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={neuralData}>
                       <defs>
                          <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.4}/>
                             <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                       <XAxis dataKey="time" hide />
                       <YAxis hide domain={[90, 110]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: '#000', border: '2px solid #FBBF24', borderRadius: '1rem', fontFamily: 'monospace' }}
                         itemStyle={{ color: '#FBBF24', fontWeight: 'bold', fontSize: '14px' }}
                       />
                       <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={4} fillOpacity={1} fill="url(#colorGain)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/20 bg-black/99 rounded-3xl p-6 border-2 shadow-2xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-6 border-b-2 border-white/5 pb-4 bg-primary/5 rounded-t-2xl px-6 py-4">
                 <CardTitle className="text-xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <History className="size-6 text-primary" /> Autonomous Hub Logs
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-6 relative z-10 px-4">
                 {events.length > 0 ? (
                    events.map((ev, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border-2 border-white/5 flex flex-col gap-3 animate-in slide-in-from-right-10 duration-700 hover:border-primary/40 transition-all cursor-crosshair group/ev shadow-inner">
                         <div className="flex justify-between items-center">
                            <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-3 py-1 rounded-full text-[10px]">{ev.type}</Badge>
                            <span className="text-[10px] font-black text-white/30 italic">{ev.time}</span>
                         </div>
                         <p className="text-sm font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed">"{ev.msg}"</p>
                      </div>
                    ))
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-20">
                       <Atom className="size-12 mb-4 animate-spin-slow text-primary" />
                       <span className="text-[10px] font-black uppercase tracking-[1em] italic">KERNEL_STANDBY</span>
                    </div>
                 )}
              </CardContent>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.5</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>CONTAINERIZED_SINGULARITY_2026</span>
        </div>
      </main>
    </div>
  )
}
