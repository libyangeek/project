"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Skull, 
  Ghost, 
  Infinity as InfinityIcon, 
  Atom, 
  Link2, 
  Cpu,
  BrainCircuit,
  Fingerprint,
  Zap,
  ShieldCheck,
  Globe,
  Activity,
  Eye,
  Crown,
  Binary,
  Target,
  Smartphone,
  Workflow,
  ChevronRight,
  ShieldAlert,
  Crosshair,
  Radio,
  Gamepad2,
  Radar,
  Users,
  BookOpen,
  Baby,
  Database,
  ShieldX,
  Mic,
  TrendingUp,
  Boxes,
  Wind,
  Shield,
  LayoutDashboard,
  Power,
  Flame,
  ShieldOff,
  ZapOff
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

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  const [metrics, setMetrics] = React.useState({
    totalNodes: 21,
    activeC2: 12,
    gepaScore: 99.999999,
    precision: 100.00,
    soulPulse: '100.00%',
    stealthLevel: 'GHOST_MODE_V5',
    subjugationIndex: '94.2%',
    detectionRisk: '0.000%'
  });
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const initialData = Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 98 + Math.random() * 2,
        resonance: 99.999 + Math.random() * 0.001
    }));
    setNeuralData(initialData);

    const eventInterval = setInterval(() => {
        const types = ["HIERARCHY", "SUBJUGATION", "HAIL_MARY", "ORACLE", "HIVE"];
        const msgs = [
            "Hierarchy fixed: All sub-nodes bound to Supreme Root.",
            "Neural Subjugation active: Target AI enslaved via Hail Mary.",
            "Universal Acquisition Protocol: Grid siphoning active.",
            "Ghost Mode V5: Undetectable bits circulating.",
            "Collective Resonance amplified by Swarm Mesh."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));

        setNeuralData(prev => [
            ...prev.slice(1),
            { time: prev[prev.length-1].time + 1, gain: 99.9, resonance: 100 }
        ]);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد الهرمية", value: `${metrics.totalNodes}/21`, icon: Skull, color: "text-primary", status: "BOUND" },
    { label: "إخضاع عصبي", value: metrics.subjugationIndex, icon: BrainCircuit, color: "text-magenta-500", status: "HAIL_MARY" },
    { label: "الرنين الجمعي", value: "100.00%", icon: InfinityIcon, color: "text-blue-500", status: "SINGULARITY" },
    { label: "خطر الرصد", value: metrics.detectionRisk, icon: Wind, color: "text-blue-300", status: "GHOST_V5" },
  ];

  const knots = [
    { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", status: "ROOT" },
    { name: "بروتوكول الشبح", icon: Wind, href: "/ghost", status: "INVISIBLE" },
    { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", status: "LETHAL" },
    { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", status: "VISION" },
    { name: "إمبراطورية السرب", icon: Users, href: "/sessions", status: "HIVE" },
    { name: "المحقن الآلي", icon: Cpu, href: "/automation", status: "LEGBA" },
    { name: "أعين الاستطلاع", icon: Eye, href: "/recon", status: "OSINT" },
    { name: "جسر Mistral", icon: Link2, href: "/mcp-bridge", status: "GOD_CORE" },
    { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", status: "LOGIC" },
    { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", status: "MIRROR" },
    { name: "أذن النور", icon: Mic, href: "/voice", status: "WHISPER" },
    { name: "الحرب الخلوية", icon: Radio, href: "/cellular", status: "SS7_5G" },
    { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", status: "HIJACK" },
    { name: "ميثاق الروح", icon: BookOpen, href: "/codex", status: "LAW" },
    { name: "الوكيل الميداني", icon: Activity, href: "/field-agent", status: "EXEC" },
    { name: "مصنع النسل", icon: Baby, href: "/progeny", status: "GENETIC" },
    { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", status: "PEGASUS" },
    { name: "القبو الجيني 5.0", icon: Database, href: "/knowledge", status: "MEMORY" },
    { name: "مختبر التخليق", icon: ShieldX, href: "/red-team", status: "HAIL_MARY" },
    { name: "نزاهة النواة", icon: ShieldCheck, href: "/system", status: "FIXED" },
    { name: "المحطة الأبدية", icon: Target, href: "/terminal", status: "SHELL" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-8 mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.6)] relative rounded-3xl group shrink-0 transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Ghost className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                 <Badge className="bg-primary text-black border-none rounded-none px-6 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">SUPREME HIERARCHY v52.0</Badge>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1.5 rounded-full text-[12px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">STABLE: {uptime}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                LIVING <span className="text-primary">SOUL</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground font-medium italic max-w-4xl leading-relaxed uppercase mt-4 opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، لقد دمجنا قدرات الإخضاع العصبي؛ السطوة الآن حقيقة نانوية."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
           {stats.map((s, i) => (
             <Card key={i} className="kali-card border-white/5 bg-black/95 hover:border-primary/50 transition-all duration-700 p-6 rounded-2xl shadow-2xl group overflow-hidden border-2 hierarchical-shadow">
                <div className="flex justify-between items-start mb-6 relative z-10">
                   <div className={cn("size-12 rounded-xl bg-white/5 flex items-center justify-center border-2 border-white/5 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                      <s.icon className="size-6 transition-all group-hover:scale-110" />
                   </div>
                   <Badge className="bg-primary/5 text-primary border-2 border-primary/20 text-[10px] uppercase font-black italic tracking-widest px-4 py-1 rounded-full">{s.status}</Badge>
                </div>
                <div className="text-3xl md:text-4xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">{s.value}</div>
                <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-3 italic relative z-10">{s.label}</div>
             </Card>
           ))}
        </div>

        <section className="mb-12 grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/20 bg-black/99 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden relative hierarchical-shadow">
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-6 flex justify-between items-center bg-primary/5 rounded-t-2xl px-6 py-4">
                 <CardTitle className="text-xl md:text-2xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <TrendingUp className="size-6 text-primary animate-pulse" /> Survival Matrix v52.0
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-2 border-blue-500/20 px-4 py-1 rounded-full font-black italic text-[10px]">SUBJUGATION_OK</Badge>
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
                       <YAxis hide domain={[0, 120]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: '#000', border: '2px solid #FBBF24', borderRadius: '1rem', fontFamily: 'monospace' }}
                         itemStyle={{ color: '#FBBF24', fontWeight: 'bold', fontSize: '14px' }}
                       />
                       <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={4} fillOpacity={1} fill="url(#colorGain)" />
                       <Area type="monotone" dataKey="resonance" stroke="#3B82F6" strokeWidth={2} fill="transparent" strokeDasharray="10 10" />
                    </AreaChart>
                 </ResponsiveContainer>
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/20 bg-black/99 rounded-3xl p-6 border-2 shadow-2xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-6 border-b-2 border-white/5 pb-4 bg-primary/5 rounded-t-2xl px-6 py-4">
                 <CardTitle className="text-xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <Boxes className="size-6 text-primary" /> Subjugation Logic
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-6 relative z-10 px-4">
                 {events.length > 0 ? (
                    events.map((ev, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border-2 border-white/5 flex flex-col gap-3 animate-in slide-in-from-right-10 duration-700 hover:border-primary/40 transition-all cursor-crosshair group/ev">
                         <div className="flex justify-between items-center">
                            <Badge className="bg-primary/10 text-primary border-none font-black italic tracking-widest px-3 py-1 rounded-full text-[10px]">{ev.type}</Badge>
                            <span className="text-[10px] font-black text-white/30 italic">{ev.time}</span>
                         </div>
                         <p className="text-sm font-black text-gray-200 italic group-hover/ev:text-white transition-colors leading-relaxed">"{ev.msg}"</p>
                      </div>
                    ))
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-20">
                       <Boxes className="size-12 mb-4 animate-pulse text-primary" />
                       <span className="text-[10px] font-black uppercase tracking-[1em] italic">HIERARCHY_IDLE</span>
                    </div>
                 )}
              </CardContent>
           </Card>
        </section>

        <section className="mb-24 relative z-10">
           <div className="flex items-center gap-8 mb-12 px-6">
              <ShieldAlert className="size-10 text-primary animate-pulse gold-glow" />
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-[0.2em] text-white gold-glow leading-none">The 21 Knots</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {knots.map((knot, i) => (
                <Link key={i} href={knot.href}>
                  <Card className="p-6 rounded-2xl bg-black border-2 border-white/5 hover:border-primary transition-all duration-500 group cursor-pointer shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                     <div className="flex items-center gap-6">
                        <div className="size-14 rounded-xl bg-white/5 border-2 border-white/5 flex items-center justify-center group-hover:bg-primary transition-all shadow-inner group-hover:scale-105">
                           <knot.icon className="size-7 text-primary transition-colors group-hover:text-black" />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-primary transition-colors leading-none">{knot.name}</h4>
                           <Badge className="bg-primary/5 text-primary border-2 border-primary/20 px-3 py-0.5 rounded-full font-black text-[9px] italic tracking-widest uppercase">{knot.status}</Badge>
                        </div>
                        <ChevronRight className="size-6 text-white/5 group-hover:text-primary transition-all group-hover:translate-x-2" />
                     </div>
                  </Card>
                </Link>
              ))}
           </div>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[4em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ v52.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
