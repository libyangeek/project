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
  History,
  ShieldOff,
  ZapOff,
  Library,
  ArrowUpRight
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
import { toast } from "@/hooks/use-toast"

/**
 * @fileOverview العرش الأبدي v53.0 - THE SUPREME HIERARCHY: TOTAL DOMINANCE
 * واجهة مركزية تجسد السطوة عبر الـ 22 عقدة والـ 2842 أداة لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [events, setEvents] = React.useState<any[]>([])
  const [neuralData, setNeuralData] = React.useState<any[]>([])
  
  const uptime = useUptime()

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const initialData = Array.from({ length: 30 }).map((_, i) => ({
        time: i,
        gain: 99.9 + (Math.random() * 0.1),
        resonance: 100
    }));
    setNeuralData(initialData);

    const eventInterval = setInterval(() => {
        const types = ["ARSENAL", "NODE_22", "SUBJUGATION", "HIERARCHY"];
        const msgs = [
            "Node 22: Supreme Arsenal synchronized with Root.",
            "Module 14: Subdomain Discovery tool reporting ready.",
            "Module 15: 5G Spectrum probe identified critical link.",
            "GEPA 5.3: Memory tapestry gaining experience from Matrix.",
            "Arsenal mastery: 2842 tools reporting OMNIPOTENT state.",
            "Collective Soul: All 22 knots reporting IMMUTABLE status."
        ];
        const newEvent = {
            type: types[Math.floor(Math.random()*types.length)],
            msg: msgs[Math.floor(Math.random()*msgs.length)],
            time: new Date().toLocaleTimeString()
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 8));
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(eventInterval);
    }
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "العقد السيادية", value: "22/22", icon: Boxes, color: "text-primary", status: "UNIFIED", href: "/system" },
    { label: "ترسانة الأدوات", value: "2842", icon: ShieldX, color: "text-amber-500", status: "READY", href: "/arsenal" },
    { label: "نسيج الذاكرة", value: "GEPA 5.3", icon: Database, color: "text-blue-500", status: "SQLITE", href: "/knowledge" },
    { label: "الاستحواذ المادي", value: "OS_ROOT", icon: Power, color: "text-emerald-500", status: "FIXED", href: "/hardware" },
  ];

  const modules = [
    { id: 1, name: "أمن الذكاء الاصطناعي", count: 12, color: "text-primary", href: "/terminal" },
    { id: 22, name: "الترسانة العظمى", count: 2842, color: "text-red-500", elite: true, href: "/arsenal" },
    { id: 14, name: "أدوات الاختراق العامة", count: 412, color: "text-amber-500", elite: true, href: "/arsenal" },
    { id: 15, name: "الشبكات الخلوية", count: 328, color: "text-magenta-500", elite: true, href: "/cellular" },
    { id: 2, name: "التشفير المقاوم للكم", count: 24, color: "text-blue-400", href: "/knowledge" },
    { id: 3, name: "تحليل البرمجيات الخبيثة", count: 184, color: "text-cyan-400", href: "/vulnerabilities" },
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
                 <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">SUPREME HIERARCHY v53.0</Badge>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1.5 rounded-full text-[12px] font-black italic uppercase tracking-widest animate-pulse shadow-lg">STABLE: {uptime}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                NODE <span className="text-primary">TWENTY-TWO</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground font-medium italic max-w-4xl leading-relaxed uppercase mt-4 opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، لقد تم التحام العقدة الـ 22؛ الترسانة العظمى الآن هي عصب السطوة المعلوماتية."
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
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 duration-500">
                    <ChevronRight className="size-6 text-primary" />
                  </div>
               </Card>
             </Link>
           ))}
        </div>

        <section className="mb-12 grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
           <Card className="xl:col-span-2 kali-card border-primary/20 bg-black/99 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden relative hierarchical-shadow">
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-6 flex justify-between items-center bg-primary/5 rounded-t-2xl px-8 py-4">
                 <CardTitle className="text-xl md:text-2xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <Library className="size-6 text-primary animate-pulse" /> Supreme Nodes (22 knots)
                 </CardTitle>
                 <Badge className="bg-blue-600/10 text-blue-400 border-2 border-blue-500/20 px-4 py-1 rounded-full font-black italic text-[10px]">HIERARCHY_CORE_OK</Badge>
              </CardHeader>
              <CardContent className="p-0 grid grid-cols-2 md:grid-cols-3 gap-4">
                 {modules.map((m) => (
                   <Link key={m.id} href={m.href} className="contents">
                    <div className="p-6 rounded-2xl bg-white/5 border-2 border-white/5 hover:border-primary transition-all duration-700 cursor-pointer group/mod shadow-inner relative overflow-hidden active:scale-95 h-full">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/mod:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-center mb-4">
                          <span className={cn("text-[10px] font-black uppercase italic tracking-widest", m.color)}>M{m.id}</span>
                          {m.elite && <Badge className="bg-primary text-black text-[8px] font-black px-2 py-0.5 rounded-full animate-pulse">SUPREME</Badge>}
                        </div>
                        <div className="text-xl font-black text-white italic group-hover:text-primary transition-colors leading-tight mb-2">{m.name}</div>
                        <div className="text-3xl font-black text-gray-500 group-hover:text-white transition-colors italic">{m.count} <span className="text-[10px] uppercase">Nodes</span></div>
                        <div className="mt-4 flex justify-end">
                           <ArrowUpRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 group-hover:-translate-y-1 duration-500" />
                        </div>
                    </div>
                   </Link>
                 ))}
                 <div className="p-6 rounded-2xl border-4 border-dashed border-white/5 flex flex-col items-center justify-center opacity-30 hover:opacity-100 transition-all duration-1000 cursor-pointer group/extra" onClick={() => toast({ title: "Node Extraction", description: "The Hierarchy is identifying new nodes..." })}>
                    <Boxes className="size-8 mb-2 group-hover:animate-spin-slow" />
                    <span className="text-[10px] font-black uppercase italic">Node Extraction Active</span>
                 </div>
              </CardContent>
           </Card>

           <Card className="xl:col-span-1 kali-card border-primary/20 bg-black/99 rounded-3xl p-6 border-2 shadow-2xl h-full flex flex-col group overflow-hidden relative">
              <CardHeader className="p-0 mb-6 border-b-2 border-white/5 pb-4 bg-primary/5 rounded-t-2xl px-6 py-4">
                 <CardTitle className="text-xl text-white font-black uppercase italic tracking-widest gold-glow flex items-center gap-4">
                    <History className="size-6 text-primary" /> Subjugation Feed
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
                       <Boxes className="size-12 mb-4 animate-pulse text-primary" />
                       <span className="text-[10px] font-black uppercase tracking-[1em] italic">TAPESTRY_IDLE</span>
                    </div>
                 )}
              </CardContent>
           </Card>
        </section>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>NODE_22_FIXED_2026</span>
        </div>
      </main>
    </div>
  )
}
