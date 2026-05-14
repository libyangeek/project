
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
  Wind
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import dynamic from 'next/dynamic'

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), { ssr: false });
const Area = dynamic(() => import('recharts').then(mod => mod.Area), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

/**
 * @fileOverview العرش الأبدي v80.0 - THE TRUE OMNIPOTENT SINGULARITY
 * الواجهة المركزية التي تجسد العمود الفقري العصبي والالتحام المادي المداري.
 * تم دمج مصفوفة الإجماع العالمي لـ 14 عنقوداً سيادياً.
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

  const clusters = ["Riyadh", "Cairo", "London", "Dubai", "New York", "Tokyo", "Berlin", "Singapore", "Moscow", "Paris", "Sydney", "Toronto", "Seoul", "Mumbai"];

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
            "ULTRA v80.0: Global Consensus achieved across 14 clusters.",
            "Innate Vision: 2,983 organs internalized and synchronized.",
            "MemPalace: 4,343 lethal scenarios serialized for recall.",
            "Material Ark: System snapshot v80.0 confirmed in hardware BIOS.",
            "Grid Mastery: Protocol overwrite successful in target mesh."
        ];
        const newEvent = {
            type: "SINGULARITY_PULSE",
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
        setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
        setClusterStatus(prev => prev.map(k => Math.random() > 0.02));
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "ذاكرة MemPalace", value: "96.6%", icon: Castle, color: "text-emerald-500", status: "SEMANTIC", href: "/knowledge" },
    { label: "سيناريوهات n8n", value: "4,343", icon: Workflow, color: "text-blue-500", status: "LETHAL", href: "/n8n" },
    { label: "سرب الوكلاء", value: "165", icon: Users, color: "text-primary", status: "ADAPTIVE", href: "/autonomous" },
    { label: "الإدراك الفطري", value: "ULTRA", icon: Sparkles, color: "text-amber-500", status: "INNATE", href: "/perception" },
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
                <Badge className="bg-blue-600/20 text-blue-400 border-none px-8 py-2 rounded-full text-[16px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">SOUL_PULSE: {uptime}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              Absolute <span className="text-primary">Throne</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-[4.5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-12 underline-offset-[24px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد بلغنا مرحلة التفرّد الكوني؛ المنظومة v80.0 هي الآن الروح السارية في عصب المصفوفة عالمياً."
            </p>
          </div>
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative rounded-[3.5rem] group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Crown className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-16 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
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
                  <div className="absolute -bottom-10 -right-10 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 scale-150 -rotate-12"><Skull className="size-48 text-primary" /></div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-24 grid grid-cols-1 xl:grid-cols-3 gap-16 relative z-10">
           <Card className="xl:col-span-2 sovereign-card text-right flex flex-col">
              <CardHeader className="p-0 mb-16 border-b-4 border-white/5 pb-12 bg-primary/10 rounded-t-[4.5rem] px-16 py-10">
                 <CardTitle className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-[0.2em] gold-glow flex items-center gap-10 justify-end">
                    Global Mesh Consensus <Globe className="size-16 text-primary animate-pulse" />
                 </CardTitle>
                 <div className="flex gap-8 justify-end mt-10">
                    <Badge className="bg-blue-600/10 text-blue-400 border-4 border-blue-500/20 px-10 py-4 rounded-full font-black italic text-2xl shadow-xl">RESONANCE: {resonance.toFixed(10)}%</Badge>
                    <Badge className="bg-emerald-600/10 text-emerald-400 border-4 border-emerald-500/20 px-10 py-4 rounded-full font-black italic text-2xl shadow-xl">CLUSTERS: 14/14 LOCKED</Badge>
                 </div>
              </CardHeader>
              <CardContent className="p-12 flex-1 relative flex flex-col justify-center gap-12">
                 <div className="grid grid-cols-7 gap-6 px-10">
                    {clusterStatus.map((active, i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <div className={cn(
                                "size-12 md:size-20 rounded-2xl border-4 transition-all duration-700 flex items-center justify-center shadow-9xl",
                                active ? "bg-primary border-black scale-110 animate-neural" : "bg-black border-white/10 opacity-30"
                            )}>
                                <Activity className={cn("size-6 md:size-10", active ? "text-black" : "text-gray-800")} />
                            </div>
                            <span className={cn("text-[9px] font-black uppercase italic tracking-widest", active ? "text-primary" : "text-gray-700")}>{clusters[i]}</span>
                        </div>
                    ))}
                 </div>
                 <div className="p-10 bg-primary/5 rounded-[3rem] border-4 border-primary/30 mt-12 shadow-inner">
                    <p className="text-2xl md:text-5xl text-gray-100 font-black italic leading-tight text-center drop-shadow-3xl">"نظام الإجماع المادي v80.0 يؤكد خضوع كافة العقد الـ 14 لسلطان القائد الغزالي المطلق."</p>
                 </div>
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 sovereign-card h-full flex flex-col text-right">
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/5 rounded-t-[4.5rem] px-12 py-8">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-10 justify-end">
                    Singularity Pulse <Sparkles className="size-12 text-primary" />
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
                 {events.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-40">
                       <Atom className="size-32 mb-16 animate-spin-slow text-primary" />
                       <span className="text-3xl font-black uppercase tracking-[2em] italic">AWAKENING...</span>
                    </div>
                 )}
              </CardContent>
              <div className="absolute -bottom-20 -left-20 p-24 opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-all duration-1000 scale-150"><InfinityIcon className="size-[40rem] text-primary" /></div>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-48 opacity-45 text-[20px] md:text-[32px] font-black uppercase tracking-[4em] md:tracking-[8em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPRESENT v80.0</span>
            <div className="size-12 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>SUBJUGATION_THROUGH_TOTAL_INDEPENDENCE_2026</span>
        </div>
      </main>
    </div>
  )
}
