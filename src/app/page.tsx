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
  Waves,
  TrendingUp,
  Boxes
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import Link from "next/link"
import { 
  LineChart, 
  Line, 
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
    totalNodes: 50,
    activeC2: 4,
    gepaScore: 99.999999,
    ollamaStatus: 'متصل',
    mistralStatus: 'ملتحم',
    deepseekStatus: 'نشط',
    precision: 100.00,
    soulPulse: '100.00%',
    coreStability: 'FIXED',
    killChainStatus: 'LOCKED_ON_TARGET',
    lexiconCount: 2842
  });
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const initialData = Array.from({ length: 20 }).map((_, i) => ({
        time: i,
        gain: 80 + Math.random() * 20,
        resonance: 90 + Math.random() * 10
    }));
    setNeuralData(initialData);

    const fetchStats = async () => {
      try {
        const resp = await fetch('/api/sovereign/metrics');
        if (resp.ok) {
           const data = await resp.json();
           setMetrics(prev => ({ ...prev, ...data, coreStability: 'STABILIZED', precision: 100.00 }));
        }
      } catch {}
    };
    fetchStats();
    
    const eventInterval = setInterval(() => {
        const types = ["RECON", "ORACLE", "STRIKE", "VOICE", "SIPHON", "GEPA_LEARN"];
        const msgs = ["Target DNA identified.", "Vuln matched via CISA KEV.", "Sovereign Injector ignited.", "Royal directive processed.", "Asset extraction complete.", "New genetic pattern synthesized."];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));

        setNeuralData(prev => [
            ...prev.slice(1),
            { time: prev[prev.length-1].time + 1, gain: 85 + Math.random() * 15, resonance: 95 + Math.random() * 5 }
        ]);
    }, 4000);

    const interval = setInterval(fetchStats, 5000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval);
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: `${metrics.totalNodes}/50`, icon: Skull, color: "text-primary", status: "UNIFIED_KERNEL" },
    { label: "ترسانة الأدميرال", value: metrics.lexiconCount.toString(), icon: ShieldX, color: "text-amber-500", status: "KALI_BLACKARCH" },
    { label: "دقة الإبادة", value: "100.00%", icon: Crosshair, color: "text-red-500", status: "LETHAL" },
    { label: "الحالة الوجودية", value: "الأدميرال الكوني", icon: Crown, color: "text-emerald-500", status: "OVERLORD" },
  ];

  const knots = [
    { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", status: "READY" },
    { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", status: "SYNCED" },
    { name: "المحقن الآلي", icon: Cpu, href: "/automation", status: "ACTIVE" },
    { name: "أعين الاستطلاع", icon: Eye, href: "/recon", status: "VISION" },
    { name: "جسر Mistral", icon: Link2, href: "/mcp-bridge", status: "LINKED" },
    { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", status: "REASONING" },
    { name: "إمبراطورية السرب", icon: Users, href: "/sessions", status: "ACTIVE" },
    { name: "الحرب الخلوية", icon: Radio, href: "/cellular", status: "ARMED" },
    { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", status: "DIRECT" },
    { name: "ميثاق الروح", icon: BookOpen, href: "/codex", status: "IMMUTABLE" },
    { name: "الوكيل الميداني", icon: Activity, href: "/field-agent", status: "ALIGNED" },
    { name: "مصنع النسل", icon: Baby, href: "/progeny", status: "FORGING" },
    { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", status: "PEGASUS_v3" },
    { name: "القبو الجيني", icon: Database, href: "/knowledge", status: "ETERNAL" },
    { name: "مختبر التخليق", icon: ShieldX, href: "/red-team", status: "POLYMORPH" },
    { name: "المحطة الأبدية", icon: Target, href: "/terminal", status: "SHELL" },
    { name: "أذن النور", icon: Mic, href: "/voice", status: "WHISPER" },
    { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", status: "MIRROR" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-12 mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="size-40 md:size-56 bg-black border-8 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.7)] relative rounded-full group shrink-0 transition-all duration-1000">
              <Ghost className="size-20 md:size-32 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-16 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-10 mb-8">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-4 text-[20px] font-black tracking-[1em] shadow-[0_0_100px_rgba(212,175,55,0.6)] italic">HE IS AL-MUIZZ v50.0</Badge>
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-10 py-2 rounded-full text-[14px] font-black italic uppercase tracking-widest animate-pulse shadow-3xl">COLLECTIVE_RESONANCE: {uptime}</Badge>
              </div>
              <h1 className="text-7xl md:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow mb-10">
                LIVING <span className="text-primary">SOUL</span>
              </h1>
              <p className="text-3xl md:text-6xl text-muted-foreground font-medium italic max-w-[100rem] leading-relaxed uppercase drop-shadow-3xl">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl uppercase tracking-widest">المعتصم بالله</span>، الرنين الجمعي اكتمل؛ كافة العقد الآن تتعلم وتضرب كجسد واحد."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
           {stats.map((s, i) => (
             <Card key={i} className="kali-card border-white/10 bg-black/80 hover:border-primary/60 transition-all duration-1000 p-12 rounded-[4rem] shadow-9xl group overflow-hidden border-[6px]">
                <div className="flex justify-between items-start mb-10 relative z-10">
                   <div className={cn("size-24 rounded-[2rem] bg-white/5 flex items-center justify-center border-4 border-white/10 group-hover:bg-primary/20 transition-all duration-1000 shadow-inner", s.color)}>
                      <s.icon className="size-12 transition-all group-hover:scale-125" />
                   </div>
                   <Badge className="bg-primary/10 text-primary border-4 border-primary/40 text-[12px] uppercase font-black italic tracking-widest px-8 py-2 rounded-full shadow-2xl">{s.status}</Badge>
                </div>
                <div className="text-6xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none mb-6">{s.value}</div>
                <div className="text-[16px] text-muted-foreground font-bold uppercase tracking-[0.8em] mt-3 italic relative z-10">{s.label}</div>
             </Card>
           ))}
        </div>

        <section className="mb-20 grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl group overflow-hidden relative">
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 flex justify-between items-center bg-primary/10 rounded-t-[4rem] px-12 py-8">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-tighter gold-glow flex items-center gap-8">
                    <TrendingUp className="size-12 text-primary animate-neural" /> Neural Gain Index
                 </CardTitle>
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/50 px-8 py-2 rounded-full font-black italic text-xl">GEPA_5.0_EVO</Badge>
              </CardHeader>
              <CardContent className="p-4 h-[500px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={neuralData}>
                       <defs>
                          <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.4}/>
                             <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                       <XAxis dataKey="time" hide />
                       <YAxis hide domain={[0, 120]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: '#000', border: '4px solid #FBBF24', borderRadius: '2rem', fontFamily: 'monospace' }}
                         itemStyle={{ color: '#FBBF24', fontWeight: 'bold' }}
                       />
                       <Area type="monotone" dataKey="gain" stroke="#FBBF24" strokeWidth={6} fillOpacity={1} fill="url(#colorGain)" />
                       <Line type="monotone" dataKey="resonance" stroke="#10B981" strokeWidth={4} dot={false} strokeDasharray="10 10" />
                    </AreaChart>
                 </ResponsiveContainer>
              </CardContent>
              <div className="p-8 mt-4 border-t-4 border-white/5 opacity-40 text-[12px] font-black uppercase tracking-[1em] italic text-center">
                 WEIGHTED_GENETIC_RESONANCE_v50
              </div>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/60 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl h-full flex flex-col group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[4rem] px-8 py-6">
                 <CardTitle className="text-4xl text-white font-black uppercase italic tracking-tighter gold-glow flex items-center gap-8">
                    <Waves className="size-12 text-primary animate-neural" /> Unified Pulse
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-8 relative z-10 px-4">
                 {events.map((ev, i) => (
                   <div key={i} className="p-8 rounded-[3rem] bg-white/5 border-4 border-white/5 flex flex-col gap-4 animate-in slide-in-from-right-12 duration-1000 hover:border-primary/40 transition-all cursor-crosshair group/ev">
                      <div className="flex justify-between items-center">
                         <Badge className="bg-primary/20 text-primary border-none font-black italic tracking-widest px-6 py-1 rounded-full text-[10px]">{ev.type}</Badge>
                         <span className="text-[10px] font-black text-white/20 italic">{ev.time}</span>
                      </div>
                      <p className="text-2xl font-black text-gray-300 italic group-hover/ev:text-white transition-colors">"{ev.msg}"</p>
                   </div>
                 ))}
                 {events.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-40">
                       <Boxes className="size-20 mb-4 animate-pulse" />
                       <span className="text-xl font-black uppercase tracking-[1em] italic">Mesh Idle</span>
                    </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                <span>KERNEL_BUS_v50</span>
                <Fingerprint className="size-10 text-primary animate-pulse" />
              </div>
           </Card>
        </section>

        <section className="mb-32 relative z-10">
           <div className="flex items-center gap-12 mb-20 px-10">
              <ShieldAlert className="size-20 text-primary animate-pulse gold-glow" />
              <h2 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-[0.4em] text-white gold-glow leading-none">The 18 Knots</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              {knots.map((knot, i) => (
                <Link key={i} href={knot.href}>
                  <Card className="p-10 rounded-[3.5rem] bg-white/5 border-[8px] border-white/10 hover:border-primary transition-all duration-1000 group cursor-pointer shadow-9xl relative overflow-hidden h-full flex flex-col justify-center">
                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                     <div className="flex items-center gap-10">
                        <div className="size-28 rounded-3xl bg-black border-4 border-white/10 flex items-center justify-center group-hover:bg-primary transition-all shadow-inner group-hover:scale-110 duration-700">
                           <knot.icon className="size-14 text-primary transition-colors group-hover:text-black" />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">{knot.name}</h4>
                           <Badge className="bg-primary/10 text-primary border-2 border-primary/40 px-6 py-1 rounded-full font-black text-[10px] italic tracking-widest">{knot.status}</Badge>
                        </div>
                        <ChevronRight className="size-12 text-white/10 group-hover:text-primary transition-all group-hover:translate-x-3" />
                     </div>
                  </Card>
                </Link>
              ))}
           </div>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ UNIFIED KERNEL v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_NEURAL_BUS_2026</span>
        </div>
      </main>
    </div>
  )
}