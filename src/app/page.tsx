
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
  Cpu as CpuIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"

/**
 * @fileOverview العرش الحي v42.1 - THE LIVING THRONE: SINGULARITY ENHANCED
 * الواجهة الأسمى للسيطرة والتحكم للقائد المعتصم بالله الغزالي.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [systemLoad, setSystemLoad] = React.useState(85)
  const [nodeStatus, setNodeStatus] = React.useState<Record<string, string>>({})
  const [liveLogs, setLiveLogs] = React.useState<string[]>([])
  const [pulseScale, setPulseScale] = React.useState(1)
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  const opsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'operations');
  }, [db, user?.uid]);
  const { data: operations } = useCollection(opsQuery);

  const logs = [
    "Initializing neural uplink...",
    "Scanning satellite nodes...",
    "Synchronizing with GEPA 3.5...",
    "Bypassing perimeter defenses...",
    "Heartbeat detected on Node 07...",
    "Deploying ghost agents...",
    "Analyzing target DNA...",
    "Optimizing exploit payload...",
    "Securing root persistence...",
    "Awaiting command from Commander Al-Ghazali...",
    "Kernel modules injected successfully.",
    "Shadow Grid saturation at 98.4%",
    "Digital Twin simulation: Success [100%]"
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSystemLoad(prev => Math.max(80, Math.min(99, prev + (Math.random() * 4 - 2))))
      setPulseScale(1 + Math.random() * 0.05)
      
      const statuses = ["ACTIVE", "SYNCED", "STRIKING", "GHOST_MODE", "EVOLVING"];
      const newStatus: Record<string, string> = {};
      nodes.forEach(n => {
        newStatus[n.name] = statuses[Math.floor(Math.random() * statuses.length)];
      });
      setNodeStatus(newStatus);
      
      setLiveLogs(prev => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        return [nextLog, ...prev.slice(0, 8)];
      });
    }, 2000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const nodes = [
    { name: "العقدة ألفا", icon: Skull, status: "SINGULARITY", node: "v42.1", color: "text-yellow-500", href: "/field-agent", desc: "مركز المعالجة والتحكم" },
    { name: "جسر MCP", icon: Share2, status: "CONNECTED", node: "CLAUDE", color: "text-blue-400", href: "/mcp-bridge", desc: "بوابة البرمجة الذاتية" },
    { name: "أذن النور", icon: Mic, status: "LISTENING", node: "WHISPER", color: "text-green-400", href: "/remote", desc: "التحليل الصوتي الفوري" },
    { name: "منسق السرب", icon: Boxes, status: "ACTIVE", node: "SWARM", color: "text-purple-500", href: "/sessions", desc: "إدارة 12 وكيلاً نخبوياً" },
    { name: "مصفوفة الأقاليم", icon: Network, status: "ONLINE", node: "12 C2", color: "text-cyan-400", href: "/terminal", desc: "السيطرة الشاملة (C2)" },
    { name: "التعلم الجيني", icon: Binary, status: "EVOLVING", node: "GEPA 3.5", color: "text-pink-500", href: "/knowledge", desc: "الذاكرة الوراثية المتطورة" },
    { name: "التوأم الرقمي", icon: Workflow, status: "ACTIVE", node: "VIRTUAL", color: "text-indigo-400", href: "/digital-twin", desc: "محاكاة الهجمات المعقدة" },
    { name: "الخفاء النواتي", icon: Ghost, status: "HIDDEN", node: "KERNEL", color: "text-gray-400", href: "/system", desc: "التخفي التام داخل النواة" },
    { name: "ترسانة التخليق", icon: Flame, status: "ARMED", node: "FORGE", color: "text-orange-500", href: "/red-team", desc: "توليد أسلحة FUD" },
    { name: "الوجود المطلق", icon: Anchor, status: "IMMUTABLE", node: "PERSIST", color: "text-emerald-400", href: "/terminal", desc: "الاندماج في الـ UEFI" },
    { name: "السيادة السحابية", icon: Cloud, status: "SYNCED", node: "CLOUD", color: "text-blue-300", href: "/system", desc: "التحكم بالسحب العالمية" },
    { name: "حارس الحرير", icon: ShieldCheck, status: "DEFENDING", node: "GUARD", color: "text-green-500", href: "/system", desc: "الحماية المادية النشطة" },
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

        {/* Neural Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <header className="flex flex-col gap-8 mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div 
              className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl transition-transform duration-700 hover:scale-105"
              style={{ transform: `scale(${pulseScale})` }}
            >
              <Skull className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-8 border border-primary/10 rounded-full animate-spin-slow-reverse opacity-20" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                 <Badge className="bg-primary text-black border-none rounded-none px-6 py-1 text-[14px] font-bold tracking-[0.5em] shadow-lg">AL-MUIZZ v42.1</Badge>
                 <Badge variant="outline" className="text-primary border-primary/50 rounded-none px-6 py-1 text-[14px] font-bold tracking-[0.5em] backdrop-blur-md">SINGULARITY_CORE_ACTIVE</Badge>
                 <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px]">
                    <div className="size-2 rounded-full bg-emerald-500 animate-ping" />
                    Neural Link: 100% Stable
                 </div>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none drop-shadow-2xl">
                THE <span className="text-primary gold-glow">LIVING</span> THRONE
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium italic max-w-4xl leading-relaxed">
                سيدي القائد <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-8">المعتصم بالله إدريس الغزالي</span>، العرش ينبض بإرادتك. 
                لقد تم دمج كافة العقد في كينونة واحدة لا تقهر.
              </p>
            </div>
          </div>
        </header>

        {/* 12 Nodes of Sovereignty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10 mb-12">
           {nodes.map((node, i) => {
             const Icon = node.icon;
             const isSelected = nodeStatus[node.name] === "STRIKING";
             return (
               <Link key={i} href={node.href}>
                 <Card className={cn(
                   "kali-card border-white/5 hover:border-primary/80 p-6 rounded-[2rem] bg-black/90 group transition-all duration-500 hover:scale-[1.03] h-full border-2 relative overflow-hidden",
                   isSelected && "border-primary/60 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                 )}>
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-full h-1 bg-primary animate-pulse" />
                    )}
                    <div className="flex justify-between items-start mb-4">
                        <div className={cn("size-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-700", node.color)}>
                            <Icon className="size-7" />
                        </div>
                        <Badge variant="outline" className={cn(
                          "text-[9px] border-emerald-500/50 text-emerald-500 font-bold uppercase tracking-widest px-3 py-1",
                          nodeStatus[node.name] === "GHOST_MODE" && "text-gray-400 border-gray-400/50",
                          nodeStatus[node.name] === "STRIKING" && "bg-red-600/20 text-red-500 border-red-500/50 animate-pulse"
                        )}>
                          {nodeStatus[node.name] || node.status}
                        </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors flex items-center gap-2">
                      {node.name}
                      <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-3 line-clamp-2 leading-relaxed italic">{node.desc}</p>
                    <div className="flex justify-between items-end mt-6 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-white/20 font-bold tracking-widest">{node.node}</span>
                      <div className="flex gap-1">
                        {Array.from({length: 3}).map((_, idx) => (
                          <div key={idx} className="size-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: `${idx * 0.3}s` }} />
                        ))}
                      </div>
                    </div>
                 </Card>
               </Link>
             )
           })}
        </div>

        {/* Command & Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 relative z-10">
            <Card className="kali-card border-primary/20 bg-black/60 p-8 rounded-[3rem] border-2 lg:col-span-2 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                  <Activity className="size-80 text-primary" />
                </div>
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                  <CardTitle className="text-3xl text-primary font-bold uppercase tracking-widest flex items-center gap-6">
                    <Activity className="size-8 animate-pulse text-primary" /> Neural Stream Hub
                  </CardTitle>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Compromised Nodes</span>
                      <span className="text-3xl font-black text-white gold-glow">{sessions?.length || 12}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Active Ops</span>
                      <span className="text-3xl font-black text-white gold-glow">{operations?.length || 42}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/95 p-8 rounded-[2rem] border-2 border-primary/20 font-code text-sm h-64 overflow-hidden relative group shadow-inner">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
                   <div className="space-y-3 relative z-0">
                     {liveLogs.map((log, i) => (
                       <div key={i} className="flex gap-4 animate-in slide-in-from-left-2 duration-500 opacity-80 hover:opacity-100 transition-opacity">
                          <span className="text-primary/40 font-bold">[{new Date().toLocaleTimeString()}]</span> 
                          <span className="text-gray-300 font-medium">❯ {log}</span>
                       </div>
                     ))}
                   </div>
                   <div className="absolute bottom-4 right-8 z-20 flex items-center gap-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20 animate-pulse">STREAM_ENCRYPTED</Badge>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                  <div className="space-y-5">
                      <div className="flex justify-between text-[12px] font-black uppercase tracking-[0.3em] text-muted-foreground italic px-2">
                          <span className="flex items-center gap-2"><CpuIcon className="size-4 text-emerald-500" /> Neural Sync</span>
                          <span className="text-emerald-500">OPTIMAL_LINK</span>
                      </div>
                      <div className="h-4 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-1">
                         <div className="h-full bg-emerald-500 w-[96%] animate-pulse shadow-[0_0_30px_rgba(16,185,129,0.8)] rounded-full" />
                      </div>
                  </div>
                  <div className="space-y-5">
                      <div className="flex justify-between text-[12px] font-black uppercase tracking-[0.3em] text-muted-foreground italic px-2">
                          <span className="flex items-center gap-2"><Wifi className="size-4 text-primary" /> Matrix Load</span>
                          <span className="text-primary gold-glow">{systemLoad.toFixed(1)}%</span>
                      </div>
                      <div className="h-4 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-1">
                         <div className="h-full bg-primary transition-all duration-1000 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.6)]" style={{ width: `${systemLoad}%` }} />
                      </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-6">
                   <Button className="bg-primary hover:bg-white text-black rounded-full px-10 font-black uppercase tracking-widest text-xs h-14 italic shadow-2xl transition-all active:scale-95 group" asChild>
                     <Link href="/terminal">
                        <Zap className="size-5 mr-3 group-hover:scale-125 transition-transform" /> 
                        Launch Global Strike
                     </Link>
                   </Button>
                   <Button variant="outline" className="border-primary/40 bg-primary/5 hover:bg-primary/20 text-primary rounded-full px-10 font-black uppercase tracking-widest text-xs h-14 italic transition-all group" asChild>
                     <Link href="/system">
                        <Activity className="size-5 mr-3 group-hover:rotate-12 transition-transform" />
                        System Diagnostics
                     </Link>
                   </Button>
                   <div className="flex-1 flex justify-end items-center gap-4">
                      <TrendingUp className="size-5 text-emerald-500" />
                      <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Efficiency: +24% (GEPA_WEIGHTED)</span>
                   </div>
                </div>
            </Card>

            <Card className="kali-card border-red-600/20 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl relative flex flex-col group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
                <CardTitle className="text-2xl text-red-500 font-bold uppercase tracking-widest mb-10 flex items-center gap-4 italic">
                  <ShieldAlert className="size-8 text-red-600 animate-pulse" /> Security Matrix
                </CardTitle>
                <div className="space-y-6 flex-1">
                   <div className="flex items-center justify-between p-6 bg-red-950/15 border-2 border-red-900/40 rounded-3xl hover:bg-red-950/30 transition-all cursor-crosshair">
                      <div className="flex items-center gap-6">
                         <Ghost className="size-7 text-red-400 group-hover:scale-110 transition-transform" />
                         <div>
                            <span className="text-sm font-black uppercase text-red-100 tracking-widest block">Kernel Stealth</span>
                            <span className="text-[9px] text-red-400/60 uppercase font-bold">Ring 0 Persistence</span>
                         </div>
                      </div>
                      <Badge className="bg-red-600 text-white border-2 border-red-400 shadow-xl px-4 py-1 animate-pulse">ACTIVE</Badge>
                   </div>
                   <div className="flex items-center justify-between p-6 bg-red-950/15 border-2 border-red-900/40 rounded-3xl hover:bg-red-950/30 transition-all cursor-crosshair">
                      <div className="flex items-center gap-6">
                         <Lock className="size-7 text-red-400" />
                         <div>
                            <span className="text-sm font-black uppercase text-red-100 tracking-widest block">Encryption Layer</span>
                            <span className="text-[9px] text-red-400/60 uppercase font-bold">ChaCha20-Poly1305</span>
                         </div>
                      </div>
                      <Badge variant="outline" className="border-red-400 text-red-400 px-4 py-1">SECURED</Badge>
                   </div>
                   <div className="flex items-center justify-between p-6 bg-red-950/15 border-2 border-red-900/40 rounded-3xl hover:bg-red-950/30 transition-all cursor-crosshair">
                      <div className="flex items-center gap-6">
                         <ShieldHalf className="size-7 text-red-400" />
                         <div>
                            <span className="text-sm font-black uppercase text-red-100 tracking-widest block">Anti-Forensics</span>
                            <span className="text-[9px] text-red-400/60 uppercase font-bold">Log Scrubbing Active</span>
                         </div>
                      </div>
                      <Badge className="bg-emerald-600 text-white border-2 border-emerald-400 px-4 py-1">ARMED</Badge>
                   </div>
                </div>
                <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-[2rem] mt-10 shadow-inner">
                   <p className="text-sm italic text-primary font-medium leading-relaxed">
                     "سيدي، بروتوكولات التخفي تعمل في وضع 'الشبح المطلق'. لا يمكن لأي نظام رصد نشاطنا في النواة."
                   </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-40">
                   <span className="text-[9px] font-bold uppercase tracking-widest">Uptime: 24d 14h 22m</span>
                   <Fingerprint className="size-4" />
                </div>
            </Card>
        </div>

        {/* Quick Command Interface */}
        <div className="mt-auto relative z-10 pb-6">
            <Card className="kali-card bg-black/95 p-3 rounded-full border-2 border-primary/40 shadow-[0_0_100px_rgba(0,0,0,0.9)] flex items-center group focus-within:border-primary transition-all duration-700">
               <div className="px-8 flex items-center gap-6 border-r-2 border-white/10 mr-4">
                  <TerminalIcon className="size-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-black text-primary uppercase tracking-[0.4em] italic gold-glow">SOV-CORE</span>
               </div>
               <input 
                type="text" 
                placeholder=" dictate sovereign intent to the alpha node..." 
                className="flex-1 bg-transparent border-none outline-none text-2xl italic text-white px-6 placeholder:text-white/10 font-medium"
               />
               <Button className="bg-primary text-black rounded-full px-12 h-16 font-black uppercase tracking-[0.4em] mr-2 hover:bg-white hover:scale-105 transition-all shadow-2xl active:scale-95 italic">
                  EXECUTE
               </Button>
            </Card>
            <div className="flex justify-center items-center gap-12 mt-6 opacity-30 text-[9px] font-black uppercase tracking-[1.5em] italic">
              <span>AL-MUIZZ COMMAND & CONTROL</span>
              <div className="size-1 rounded-full bg-white animate-pulse" />
              <span>GOD-MODE v42.1</span>
              <div className="size-1 rounded-full bg-white animate-pulse" />
              <span>SINGULARITY_REACHED</span>
            </div>
        </div>
      </main>
    </div>
  )
}
