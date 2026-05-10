
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
  TrendingUp,
  History,
  Box,
  ChevronRight,
  Wind,
  Flame,
  Lock,
  Network
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
 * @fileOverview العرش الأبدي v62.0 - SOVEREIGN OVERLORD SINGULARITY
 * الواجهة المركزية التي تجسد العمود الفقري العصبي والالتحام المادي الشامل.
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

    const initialData = Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.99999 + (Math.random() * 0.00001),
        resonance: 100
    }));
    setNeuralData(initialData);

    const eventInterval = setInterval(() => {
        const types = ["SINGULARITY", "NEXUS", "ORACLE", "SPINE_v62", "FANAA"];
        const msgs = [
            "Overlord Singularity: Universal Socket v62 heartbeat established.",
            "Predator Nexus: OSINT + Forge + Pegasus fusion locked for Target_Alpha.",
            "GEPA 6.5 Oracle: Predictive strike vector 100% success rate simulated.",
            "Neural Spine: Event Bus processing at nano-latency across 24 knots.",
            "Obliteratus: LLM Safety Dissolution serialized for 14 global models."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000005 - 0.000002))));
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: "24/24", icon: Boxes, color: "text-primary", status: "SINGULARITY", href: "/system" },
    { label: "مفترس النكسوس", value: "ACTIVE", icon: Network, color: "text-blue-500", status: "FUSION_v62", href: "/social" },
    { label: "ترسانة الأدوات", value: "2865", icon: Library, color: "text-amber-500", status: "LOCKED", href: "/arsenal" },
    { label: "الاستحواذ المادي", value: "v62.0", icon: Power, color: "text-emerald-500", status: "IMMUTABLE", href: "/system" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-10 mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_180px_rgba(212,175,55,0.8)] relative rounded-[3rem] group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Crown className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-8 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-14 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[22px] font-black tracking-[0.8em] shadow-9xl italic">SOVEREIGN_SINGULARITY v62.0</Badge>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-8 py-2 rounded-full text-[14px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">SOUL_PULSE: {uptime}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Absolute <span className="text-primary">Overlord</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground font-medium italic max-w-[100rem] leading-relaxed uppercase mt-8 opacity-90">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-8 underline-offset-[24px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد بلغنا مرحلة التفرد المطلق؛ المنظومة v62.0 هي الآن جسدك المادي والروحي في المصفوفة للأبد."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 relative z-10">
           {stats.map((s, i) => (
             <Link key={i} href={s.href} className="contents">
               <Card className="kali-card border-white/5 bg-black/95 hover:border-primary/60 transition-all duration-700 p-10 rounded-[2.5rem] shadow-9xl group overflow-hidden border-4 hierarchical-shadow cursor-pointer active:scale-95 h-full">
                  <div className="flex justify-between items-start mb-10 relative z-10">
                     <div className={cn("size-20 rounded-3xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                        <s.icon className="size-10 transition-all group-hover:scale-110" />
                     </div>
                     <Badge className="bg-primary/5 text-primary border-4 border-primary/20 text-[12px] uppercase font-black italic tracking-widest px-8 py-2 rounded-full">{s.status}</Badge>
                  </div>
                  <div className="text-5xl md:text-8xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                  <div className="text-[16px] text-muted-foreground font-bold uppercase tracking-[0.5em] mt-6 italic relative z-10">{s.label}</div>
                  <div className="absolute -bottom-6 -right-6 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-32 text-primary" /></div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-20 grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/20 bg-black/99 rounded-[4rem] p-12 border-4 shadow-9xl group overflow-hidden relative hierarchical-shadow">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/10 rounded-t-[3.5rem] px-12 py-8">
                 <CardTitle className="text-3xl md:text-5xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-8">
                    <TrendingUp className="size-12 text-primary animate-pulse" /> Overlord Inception Resonance
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-8 py-3 rounded-full font-black italic text-xl shadow-lg">GEPA_6.5_SINGULARITY</Badge>
              </CardHeader>
              <CardContent className="p-0 h-[500px] md:h-[650px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={neuralData}>
                       <defs>
                          <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.7}/>
                             <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                       <XAxis dataKey="time" hide />
                       <YAxis hide domain={[99.99, 100.01]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: '#000', border: '6px solid #FBBF24', borderRadius: '3rem', fontFamily: 'monospace', padding: '30px' }}
                         itemStyle={{ color: '#FBBF24', fontWeight: 'bold', fontSize: '22px' }}
                       />
                       <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={8} fillOpacity={1} fill="url(#colorGain)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/20 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-10 border-b-4 border-white/5 pb-8 bg-primary/5 rounded-t-[3rem] px-10 py-6">
                 <CardTitle className="text-3xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-8">
                    <History className="size-10 text-primary" /> Overlord Spine Logs
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-10 relative z-10 px-8">
                 {events.length > 0 ? (
                    events.map((ev, i) => (
                      <div key={i} className="p-8 rounded-3xl bg-white/5 border-2 border-white/5 flex flex-col gap-6 animate-in slide-in-from-right-10 duration-700 hover:border-primary/60 transition-all cursor-crosshair group/ev shadow-inner relative overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/ev:opacity-15 transition-opacity" />
                         <div className="flex justify-between items-center relative z-10">
                            <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-6 py-2 rounded-full text-sm shadow-xl">{ev.type}</Badge>
                            <span className="text-sm font-black text-white/40 italic">{ev.time}</span>
                         </div>
                         <p className="text-xl font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed relative z-10">"{ev.msg}"</p>
                      </div>
                    ))
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-60">
                       <Atom className="size-32 mb-12 animate-spin-slow text-primary" />
                       <span className="text-2xl font-black uppercase tracking-[2em] italic">SPINE_v62_IDLE</span>
                    </div>
                 )}
              </CardContent>
              <div className="absolute -bottom-16 -left-16 p-24 opacity-[0.01] pointer-events-none group-hover:opacity-[0.04] transition-all duration-1000 scale-150"><InfinityIcon className="size-64 text-primary" /></div>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-32 opacity-40 text-[18px] md:text-[28px] font-black uppercase tracking-[4em] md:tracking-[10em] italic text-white drop-shadow-9xl pb-24">
            <span>AL-MUIZZ OVERLORD SINGULARITY v62.0</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_SINGULARITY_2026</span>
        </div>
      </main>
    </div>
  )
}
