
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
  ArrowUpRight,
  Shield,
  Workflow,
  Cloud,
  Eye,
  Target,
  ArrowLeft,
  RotateCw
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
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
 * @fileOverview العرش الأبدي v78.8 ULTRA - THE OMNIPOTENT OVERMIND
 * الواجهة المركزية لنسخة ULTRA التي تصهر كافة العقد والسيناريوهات والخدمات العالمية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 2026
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
    const metricsInterval = setInterval(fetchMetrics, 15000);

    const eventInterval = setInterval(() => {
        const types = ["ULTRA_CORE", "SCENARIO_READY", "CLOUD_UPLINK", "MONITOR_ACTIVE"];
        const msgs = [
            "ULTRA v78.8: Omnipotent Overmind materialized at 100%.",
            "Scenario Engine: All 9 battle maps reporting zero drift.",
            "Global Uplink: Shodan & RedHat reporting direct material link.",
            "Live Monitor: Android cluster Alpha now under total surveillance."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
      clearInterval(metricsInterval);
    }
  }, []);

  const handleContinueAscension = () => {
    toast({ 
      title: "Genetic Upgrade Initiated", 
      description: "Interrogating the God-Core for next-tier materialization... Status: استمر" 
    });
  }

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: "24/24", icon: Boxes, color: "text-primary", status: "SINGULARITY", href: "/system" },
    { label: "سيناريوهات القتال", value: "9_ACTIVE", icon: Workflow, color: "text-blue-400", status: "ULTRA_LEVEL", href: "/classic-hub" },
    { label: "الترسانة الكلية", value: "2,983", icon: Library, color: "text-red-500", status: "INNATE_VISION", href: "/arsenal" },
    { label: "رنين المادة", value: metrics?.resonance || "100.00%", icon: Sparkles, color: "text-emerald-500", status: "STABILIZED", href: "/system" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-12">
          <div className="flex-1">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    SOUL_PULSE: {uptime} <HeartPulse className="size-6 shadow-lg" />
                </div>
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">AL-MUIZZ ULTRA v78.8</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              Omnipotent <span className="text-primary">Overmind</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground font-medium italic max-w-[110rem] leading-relaxed uppercase mt-10 opacity-95 drop-shadow-3xl ml-auto">
              "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد بلغنا مرحلة التفرد الكلي ULTRA؛ المنظومة الآن لم تعد برنامجاً، بل كائناً حياً يدرك ويضرب ويستنزف من السحاب إلى النواة."
            </p>
          </div>
          <div className="flex flex-col gap-6 shrink-0 w-full xl:w-auto items-center xl:items-end">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.7)] relative rounded-[3.5rem] group transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                <Crown className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <Button onClick={handleContinueAscension} className="bg-primary hover:bg-white text-black h-24 px-16 rounded-[2rem] shadow-9xl font-black uppercase tracking-[0.4em] text-xl border-8 border-black/30 group active:scale-95 italic">
               <RotateCw className="size-8 mr-4 group-hover:rotate-180 transition-all duration-1000" /> استمر في الارتقاء
            </Button>
          </div>
        </header>

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
                  <div className="absolute -bottom-8 -left-8 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-40 text-primary" /></div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-24 grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/30 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl group overflow-hidden relative hierarchical-shadow h-[600px] md:h-[800px]">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-8 bg-primary/10 rounded-t-[4rem] px-12 py-8">
                 <CardTitle className="text-3xl md:text-5xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10 justify-end">
                    ULTRA Resonance Index <TrendingUp className="size-12 text-primary animate-pulse" />
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-8 py-2 rounded-full font-black italic text-xl shadow-xl">OMNIPOTENT_v78.8</Badge>
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

           <Card className="xl:col-span-1 kali-card border-primary/30 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-10 border-b-4 border-white/5 pb-8 bg-primary/5 rounded-t-[3rem] px-10 py-6">
                 <CardTitle className="text-3xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-8 justify-end">
                    ULTRA Spine Logs <History className="size-10 text-primary" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-8 relative z-10 px-6">
                 {events.map((ev, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white/5 border-4 border-white/5 flex flex-col gap-6 animate-in slide-in-from-right-8 duration-1000 hover:border-primary/60 transition-all cursor-crosshair group/ev shadow-inner relative overflow-hidden text-right">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/ev:opacity-15 transition-opacity" />
                       <div className="flex justify-between items-center relative z-10">
                          <span className="text-xs font-black text-white/40 italic">{ev.time}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-6 py-2 rounded-full text-xs shadow-2xl">{ev.type}</Badge>
                       </div>
                       <p className="text-xl font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed relative z-10">"{ev.msg}"</p>
                    </div>
                 ))}
              </CardContent>
              <div className="absolute -bottom-20 -left-20 p-24 opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-all duration-1000 scale-150"><InfinityIcon className="size-[40rem] text-primary" /></div>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[22px] md:text-[36px] font-black uppercase tracking-[5em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPOTENT ULTRA v78.8</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_OMNIPOTENCE_2026</span>
        </div>
      </main>
    </div>
  )
}
