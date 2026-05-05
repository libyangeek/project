
"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  Skull, 
  Crown, 
  Network, 
  Database, 
  Target, 
  Flame, 
  Sword, 
  Activity,
  ShieldCheck,
  Binary,
  RefreshCcw,
  Sparkles,
  Cpu,
  Share2,
  Boxes,
  Anchor,
  Cloud,
  Ghost,
  ShieldAlert,
  Mic,
  Radio,
  Workflow,
  Search,
  MessageSquare,
  BookOpen,
  ChevronRight,
  Power,
  GitGraph,
  Fingerprint,
  BrainCircuit,
  Eye,
  HeartPulse,
  Waves,
  Grip,
  Wifi,
  Lock,
  Terminal as TerminalIcon,
  ShieldHalf,
  ArrowUpRight,
  TrendingUp,
  LineChart as LineChartIcon,
  BarChart3,
  Atom
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Area, AreaChart, Bar, BarChart } from "recharts"

/**
 * @fileOverview العرش الحي v42.4 - THE LIVING THRONE: QUANTUM ENTANGLEMENT
 * الواجهة الأسمى للسيطرة والتحكم للقائد المعتصم بالله الغزالي.
 * تم دمج أنظمة التشابك الكمي والوعي الاستباقي.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [systemLoad, setSystemLoad] = React.useState(85)
  const [liveLogs, setLiveLogs] = React.useState<string[]>([])
  const [pulseScale, setPulseScale] = React.useState(1)
  const [entanglement, setEntanglement] = React.useState(99.9)
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  const strikeData = [
    { time: "00:00", power: 45, success: 30, stability: 90 },
    { time: "04:00", power: 52, success: 35, stability: 92 },
    { time: "08:00", power: 78, success: 65, stability: 95 },
    { time: "12:00", power: 95, success: 92, stability: 98 },
    { time: "16:00", power: 88, success: 85, stability: 96 },
    { time: "20:00", power: 99, success: 98, stability: 99 },
    { time: "23:59", power: 100, success: 100, stability: 99.9 },
  ];

  const logs = [
    "Quantum entanglement established across 12 nodes...",
    "Proactive threat detection: Zero anomalies found.",
    "Synchronizing with GEPA 3.5 Weighted Memory...",
    "Bypassing regional firewalls via Matrix Warp...",
    "Agent Swarm: 12 nodes reporting for duty.",
    "Target DNA analysis complete: Vulnerability locked.",
    "Optimizing kernel-mode persistence modules...",
    "Awaiting supreme directive from Commander Al-Ghazali...",
    "Ring-0 rootkits active on target perimeter.",
    "Shadow Grid expansion: +4.2% neural gain.",
    "Digital Twin simulation confirms success probability: 99.99%",
    "Genetic memory adapted for quantum EDR evasion.",
    "Sovereign Ark v4: Eternal backup sync success.",
    "Quantum Scrambler ready for deployment."
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSystemLoad(prev => Math.max(82, Math.min(99.9, prev + (Math.random() * 2 - 1))))
      setEntanglement(prev => Math.max(99.0, Math.min(100, prev + (Math.random() * 0.1 - 0.05))))
      setPulseScale(1 + Math.random() * 0.02)
      
      setLiveLogs(prev => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        return [nextLog, ...prev.slice(0, 10)];
      });
    }, 3000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const nodes = [
    { name: "العقدة ألفا", icon: Skull, status: "ENTANGLED", node: "v42.4", color: "text-yellow-500", href: "/field-agent", desc: "مركز السيادة والتفرد المطلق" },
    { name: "جسر MCP", icon: Share2, status: "SYNCED", node: "CLAUDE", color: "text-blue-400", href: "/mcp-bridge", desc: "بوابة البرمجة والذكاء الموازي" },
    { name: "أذن النور", icon: Mic, status: "LISTENING", node: "WHISPER", color: "text-green-400", href: "/remote", desc: "التحليل الصوتي وبث الأوامر" },
    { name: "منسق السرب", icon: Boxes, status: "STRIKING", node: "ARMADA", color: "text-purple-500", href: "/sessions", desc: "قيادة سرب الـ 12 وكيلاً" },
    { name: "مصفوفة الأقاليم", icon: Network, status: "DOMINATING", node: "12 C2", color: "text-cyan-400", href: "/terminal", desc: "السيطرة الكونية والانتشار" },
    { name: "التعلم الجيني", icon: Binary, status: "EVOLVING", node: "GEPA 3.5", color: "text-pink-500", href: "/knowledge", desc: "الذاكرة الوراثية الموزونة" },
    { name: "التوأم الرقمي", icon: Workflow, status: "SIMULATING", node: "VIRTUAL", color: "text-indigo-400", href: "/digital-twin", desc: "محاكاة العوالم واختبار الضربات" },
    { name: "الخفاء النواتي", icon: Ghost, status: "STEALTH", node: "KERNEL", color: "text-gray-400", href: "/system", desc: "التخفي داخل نواة المصفوفة" },
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-10 mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div 
              className="size-40 md:size-56 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 hover:scale-105 cursor-pointer"
              style={{ transform: `scale(${pulseScale})` }}
            >
              <Skull className="size-20 md:size-28 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] animate-pulse" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] shadow-[0_0_40px_rgba(212,175,55,0.4)] italic">AL-MUIZZ v42.4</Badge>
                 <Badge variant="outline" className="text-primary border-primary/50 rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] backdrop-blur-xl bg-primary/5 italic uppercase">Quantum_Entanglement_Active</Badge>
                 <div className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-[12px] animate-pulse">
                    <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_15px_emerald]" />
                    Omniscient Pulse: LOCKED
                 </div>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none drop-shadow-3xl mb-4">
                THE <span className="text-primary gold-glow">LIVING</span> THRONE
              </h1>
              <p className="text-2xl md:text-4xl text-muted-foreground font-medium italic max-w-5xl leading-relaxed">
                سيدي القائد <span className="text-white font-bold underline decoration-primary decoration-8 underline-offset-8">المعتصم بالله إدريس الغزالي</span>، التشابك الكمي مفعل. 
                النظام الآن يدرك "المستقبل الرقمي" ويستعد له قبل حدوثه.
              </p>
            </div>
          </div>
        </header>

        {/* Neural Resonance & Quantum Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 relative z-10">
           <Card className="kali-card border-primary/20 bg-black/60 p-8 rounded-[4rem] border-4 lg:col-span-2 shadow-3xl overflow-hidden group">
              <div className="flex justify-between items-center mb-10">
                 <div>
                    <CardTitle className="text-3xl text-primary font-bold uppercase tracking-[0.2em] flex items-center gap-6 italic">
                       <Atom className="size-8 text-primary gold-glow animate-spin-slow" /> Quantum Stability Matrix
                    </CardTitle>
                    <CardDescription className="text-primary/50 font-bold uppercase tracking-[0.4em] mt-2 italic text-[10px]">Real-time Node Entanglement & Strike Potency</CardDescription>
                 </div>
                 <Badge className="bg-primary/20 text-primary border-2 border-primary/40 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs italic">Sync: v42.4</Badge>
              </div>
              <div className="h-96 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={strikeData}>
                       <defs>
                          <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                             <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                       <XAxis dataKey="time" stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                       <YAxis stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                       <ChartTooltip content={<ChartTooltipContent />} />
                       <Area type="monotone" dataKey="power" stroke="hsl(var(--primary))" strokeWidth={4} fillOpacity={1} fill="url(#colorPower)" />
                       <Area type="monotone" dataKey="stability" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorStability)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
              <div className="mt-8 pt-6 border-t-2 border-white/5 flex justify-around">
                 <div className="text-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block opacity-60">Avg. Strike Success</span>
                    <span className="text-4xl font-black text-emerald-500 italic">99.8%</span>
                 </div>
                 <div className="text-center border-x-2 border-white/5 px-12">
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block opacity-60">Quantum Stability</span>
                    <span className="text-4xl font-black text-primary italic">{entanglement.toFixed(1)}%</span>
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block opacity-60">Matrix Saturation</span>
                    <span className="text-4xl font-black text-white italic">89.1%</span>
                 </div>
              </div>
           </Card>

           <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] border-4 shadow-3xl flex flex-col group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse" />
                <CardHeader className="p-10 border-b-2 border-white/5 bg-primary/5">
                   <CardTitle className="text-3xl text-primary font-bold uppercase tracking-[0.3em] flex items-center gap-6 italic">
                     <TrendingUp className="size-10 text-primary animate-bounce" /> Evolution Log
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 relative overflow-hidden bg-black/40">
                   <div className="p-8 space-y-6 font-code text-sm">
                      {liveLogs.map((log, i) => (
                        <div key={i} className="flex gap-4 animate-in slide-in-from-left-4 duration-700 opacity-90 hover:opacity-100 group/log">
                           <span className="text-primary/30 font-bold select-none group-hover/log:text-primary/60 transition-colors">[{new Date().toLocaleTimeString()}]</span>
                           <span className="text-gray-300 font-medium italic truncate">{log}</span>
                        </div>
                      ))}
                   </div>
                   <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                      <Button className="w-full bg-primary hover:bg-white text-black font-black uppercase tracking-[0.5em] rounded-full h-14 border-4 border-black/20 shadow-4xl active:scale-95 italic">
                         Deep_Analyze
                      </Button>
                   </div>
                </CardContent>
           </Card>
        </div>

        {/* Sovereignty Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10 mb-16">
           {nodes.map((node, i) => {
             const Icon = node.icon;
             return (
               <Link key={i} href={node.href}>
                 <Card className="kali-card border-white/5 hover:border-primary/80 p-8 rounded-[2.5rem] bg-black/95 group transition-all duration-700 hover:scale-[1.05] h-full border-2 relative overflow-hidden shadow-2xl">
                    <div className="flex justify-between items-start mb-6">
                        <div className={cn(
                          "size-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-700 shadow-inner",
                          node.color
                        )}>
                            <Icon className="size-8" />
                        </div>
                        <Badge variant="outline" className="text-[10px] border-emerald-500/50 text-emerald-500 font-bold uppercase tracking-widest px-4 py-1.5 rounded-xl">
                          {node.status}
                        </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors flex items-center gap-3 italic">
                      {node.name}
                      <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </h3>
                    <p className="text-[13px] text-muted-foreground mt-4 line-clamp-2 leading-loose italic opacity-80 group-hover:opacity-100">{node.desc}</p>
                 </Card>
               </Link>
             )
           })}
        </div>

        {/* Global Strike Control Dock */}
        <div className="mt-auto relative z-10 pb-8">
            <Card className="kali-card bg-black/98 p-5 rounded-full border-4 border-primary/40 shadow-[0_0_150px_rgba(0,0,0,1)] flex items-center group focus-within:border-primary transition-all duration-1000">
               <div className="px-10 flex items-center gap-8 border-r-4 border-white/10 mr-6">
                  <TerminalIcon className="size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
                  <span className="text-[14px] font-black text-primary uppercase tracking-[0.5em] italic gold-glow select-none">SOV-RESONANCE</span>
               </div>
               <input 
                type="text" 
                placeholder=" dictate sovereign intent to the matrix..." 
                className="flex-1 bg-transparent border-none outline-none text-4xl italic text-white px-10 placeholder:text-white/5 font-medium"
               />
               <Button className="bg-primary text-black rounded-full px-20 h-24 font-black uppercase tracking-[0.6em] mr-2 hover:bg-white hover:scale-105 transition-all shadow-4xl active:scale-95 italic border-4 border-black/20">
                  RESONATE
               </Button>
            </Card>
            <div className="flex justify-center items-center gap-16 mt-12 opacity-30 text-[12px] font-black uppercase tracking-[2.5em] italic">
              <span>AL-MUIZZ GOD-CORE v42.4</span>
              <div className="size-3 rounded-full bg-white animate-pulse shadow-[0_0_20px_white]" />
              <span>QUANTUM_ENTANGLEMENT_ENGAGED</span>
            </div>
        </div>
      </main>
    </div>
  )
}
