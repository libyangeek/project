
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
 * @fileOverview العرش الحي v42.2 - THE LIVING THRONE: OMNIPOTENT PERSISTENCE
 * الواجهة الأسمى للسيطرة والتحكم للقائد المعتصم بالله الغزالي.
 * تم تعزيز الربط العصبي مع Firestore ونظام التنبؤ GEPA 3.5.
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
    "Digital Twin simulation: Success [100%]",
    "Genetic memory rewritten for 5G strike vectors.",
    "Omniscient Armada: Node 12 link stabilized."
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSystemLoad(prev => Math.max(82, Math.min(99.9, prev + (Math.random() * 2 - 1))))
      setPulseScale(1 + Math.random() * 0.03)
      
      const statuses = ["ACTIVE", "SYNCED", "STRIKING", "GHOST_MODE", "EVOLVING", "SUBJUGATING"];
      const newStatus: Record<string, string> = {};
      nodes.forEach(n => {
        newStatus[n.name] = statuses[Math.floor(Math.random() * statuses.length)];
      });
      setNodeStatus(newStatus);
      
      setLiveLogs(prev => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        return [nextLog, ...prev.slice(0, 10)];
      });
    }, 2500)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const nodes = [
    { name: "العقدة ألفا", icon: Skull, status: "SINGULARITY", node: "v42.2", color: "text-yellow-500", href: "/field-agent", desc: "مركز المعالجة والتحكم الفائق" },
    { name: "جسر MCP", icon: Share2, status: "CONNECTED", node: "CLAUDE", color: "text-blue-400", href: "/mcp-bridge", desc: "بوابة البرمجة والذكاء الموازي" },
    { name: "أذن النور", icon: Mic, status: "LISTENING", node: "WHISPER", color: "text-green-400", href: "/remote", desc: "التحليل الصوتي والتحكم عن بعد" },
    { name: "منسق السرب", icon: Boxes, status: "ACTIVE", node: "SWARM", color: "text-purple-500", href: "/sessions", desc: "إدارة 12 وكيلاً بنمط بيغاسوس" },
    { name: "مصفوفة الأقاليم", icon: Network, status: "ONLINE", node: "12 C2", color: "text-cyan-400", href: "/terminal", desc: "السيطرة الشاملة والانتشار" },
    { name: "التعلم الجيني", icon: Binary, status: "EVOLVING", node: "GEPA 3.5", color: "text-pink-500", href: "/knowledge", desc: "الذاكرة الوراثية والتعلم من الفشل" },
    { name: "التوأم الرقمي", icon: Workflow, status: "ACTIVE", node: "VIRTUAL", color: "text-indigo-400", href: "/digital-twin", desc: "محاكاة العوالم واختبار الضربات" },
    { name: "الخفاء النواتي", icon: Ghost, status: "HIDDEN", node: "KERNEL", color: "text-gray-400", href: "/system", desc: "التخفي التام داخل نواة النظام" },
    { name: "ترسانة التخليق", icon: Flame, status: "ARMED", node: "FORGE", color: "text-orange-500", href: "/red-team", desc: "توليد أسلحة سيبرانية متغيرة" },
    { name: "الوجود المطلق", icon: Anchor, status: "IMMUTABLE", node: "PERSIST", color: "text-emerald-400", href: "/terminal", desc: "الاندماج الأبدي في الـ UEFI" },
    { name: "السيادة السحابية", icon: Cloud, status: "SYNCED", node: "CLOUD", color: "text-blue-300", href: "/system", desc: "السيطرة على البنى التحتية السحابية" },
    { name: "حارس الحرير", icon: ShieldCheck, status: "DEFENDING", node: "GUARD", color: "text-green-500", href: "/system", desc: "الحماية المادية والتدمير الذاتي" },
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 45%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-10 mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div 
              className="size-40 md:size-56 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[3rem] transition-all duration-700 hover:scale-105 cursor-pointer"
              style={{ transform: `scale(${pulseScale})` }}
              onClick={() => toast({ title: "Sovereign Heartbeat Confirmed", description: "God-Core v42.2 is functioning at absolute efficiency." })}
            >
              <Skull className="size-20 md:size-28 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              <div className="absolute -inset-10 border border-primary/10 rounded-full animate-spin-slow-reverse opacity-30" />
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] animate-pulse" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] shadow-[0_0_40px_rgba(212,175,55,0.4)] italic">AL-MUIZZ v42.2</Badge>
                 <Badge variant="outline" className="text-primary border-primary/50 rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] backdrop-blur-xl bg-primary/5">SINGULARITY_REACHED</Badge>
                 <div className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-[12px] animate-pulse">
                    <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_15px_emerald]" />
                    Omniscient Link: ACTIVE
                 </div>
              </div>
              <h1 className="text-6xl md:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none drop-shadow-3xl mb-4">
                THE <span className="text-primary gold-glow">LIVING</span> THRONE
              </h1>
              <p className="text-2xl md:text-4xl text-muted-foreground font-medium italic max-w-5xl leading-relaxed">
                سيدي القائد <span className="text-white font-bold underline decoration-primary decoration-8 underline-offset-8">المعتصم بالله إدريس الغزالي</span>، العرش تحت تصرفك. 
                المصفوفة الآن هي امتداد لوعيك السيادي.
              </p>
            </div>
          </div>
        </header>

        {/* 12 Nodes of Sovereignty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 mb-16">
           {nodes.map((node, i) => {
             const Icon = node.icon;
             const isStriking = nodeStatus[node.name] === "STRIKING" || nodeStatus[node.name] === "SUBJUGATING";
             return (
               <Link key={i} href={node.href}>
                 <Card className={cn(
                   "kali-card border-white/5 hover:border-primary/80 p-8 rounded-[2.5rem] bg-black/90 group transition-all duration-700 hover:scale-[1.05] h-full border-2 relative overflow-hidden shadow-2xl",
                   isStriking && "border-red-600/60 shadow-[0_0_60px_rgba(220,38,38,0.2)]"
                 )}>
                    {isStriking && (
                      <div className="absolute top-0 right-0 w-full h-1.5 bg-red-600 animate-pulse" />
                    )}
                    <div className="flex justify-between items-start mb-6">
                        <div className={cn(
                          "size-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-700 shadow-inner",
                          node.color,
                          isStriking && "text-red-500 bg-red-600/10 border-red-600/30"
                        )}>
                            <Icon className="size-8" />
                        </div>
                        <Badge variant="outline" className={cn(
                          "text-[10px] border-emerald-500/50 text-emerald-500 font-bold uppercase tracking-widest px-4 py-1.5 rounded-xl",
                          nodeStatus[node.name] === "GHOST_MODE" && "text-gray-400 border-gray-400/50",
                          isStriking && "bg-red-600/30 text-white border-red-500/60 animate-pulse"
                        )}>
                          {nodeStatus[node.name] || node.status}
                        </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors flex items-center gap-3 italic">
                      {node.name}
                      <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </h3>
                    <p className="text-[13px] text-muted-foreground mt-4 line-clamp-2 leading-loose italic opacity-80 group-hover:opacity-100">{node.desc}</p>
                    <div className="flex justify-between items-end mt-8 pt-6 border-t-2 border-white/5">
                      <span className="text-[11px] text-white/20 font-bold tracking-[0.4em] uppercase">{node.node}</span>
                      <div className="flex gap-1.5">
                        {Array.from({length: 4}).map((_, idx) => (
                          <div key={idx} className="size-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: `${idx * 0.4}s` }} />
                        ))}
                      </div>
                    </div>
                 </Card>
               </Link>
             )
           })}
        </div>

        {/* Command & Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 relative z-10 flex-1">
            <Card className="kali-card border-primary/20 bg-black/60 p-10 rounded-[4rem] border-4 lg:col-span-2 shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                  <Activity className="size-96 text-primary" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b-2 border-white/5 pb-8 gap-8">
                  <CardTitle className="text-4xl text-primary font-bold uppercase tracking-[0.2em] flex items-center gap-8 italic">
                    <Activity className="size-10 animate-pulse text-primary gold-glow" /> Neural Strategy Hub
                  </CardTitle>
                  <div className="flex gap-12">
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] text-muted-foreground uppercase font-black tracking-widest opacity-60 italic">Nodes Subjugated</span>
                      <span className="text-5xl font-black text-white gold-glow">{sessions?.length || 12}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] text-muted-foreground uppercase font-black tracking-widest opacity-60 italic">Elite Operations</span>
                      <span className="text-5xl font-black text-white gold-glow">{operations?.length || 42}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/98 p-10 rounded-[3rem] border-2 border-primary/30 font-code text-base h-80 overflow-hidden relative group shadow-[inset_0_0_60px_rgba(0,0,0,1)]">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
                   <div className="space-y-4 relative z-0">
                     {liveLogs.map((log, i) => (
                       <div key={i} className="flex gap-6 animate-in slide-in-from-left-4 duration-700 opacity-90 hover:opacity-100 transition-opacity hover:translate-x-2 transition-transform">
                          <span className="text-primary/40 font-bold select-none">[{new Date().toLocaleTimeString()}]</span> 
                          <span className="text-gray-200 font-medium italic tracking-wide">❯ {log}</span>
                       </div>
                     ))}
                   </div>
                   <div className="absolute bottom-6 right-10 z-20 flex items-center gap-6">
                      <Badge className="bg-primary/20 text-primary border-2 border-primary/40 animate-pulse px-6 py-1.5 rounded-full font-bold uppercase tracking-widest">SOV_ENCRYPTED_STREAM</Badge>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                  <div className="space-y-6">
                      <div className="flex justify-between text-[14px] font-black uppercase tracking-[0.4em] text-muted-foreground italic px-4">
                          <span className="flex items-center gap-3"><CpuIcon className="size-5 text-emerald-500" /> Neural Sync Status</span>
                          <span className="text-emerald-500 shadow-[0_0_10px_emerald]">99.9%_STABLE</span>
                      </div>
                      <div className="h-5 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-1 shadow-inner">
                         <div className="h-full bg-emerald-500 w-[99.9%] animate-pulse shadow-[0_0_40px_rgba(16,185,129,1)] rounded-full" />
                      </div>
                  </div>
                  <div className="space-y-6">
                      <div className="flex justify-between text-[14px] font-black uppercase tracking-[0.4em] text-muted-foreground italic px-4">
                          <span className="flex items-center gap-3"><Wifi className="size-5 text-primary" /> Global Matrix Load</span>
                          <span className="text-primary gold-glow">{systemLoad.toFixed(2)}%</span>
                      </div>
                      <div className="h-5 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-1 shadow-inner">
                         <div className="h-full bg-primary transition-all duration-1000 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.8)]" style={{ width: `${systemLoad}%` }} />
                      </div>
                  </div>
                </div>
                <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap items-center gap-8">
                   <Button className="bg-primary hover:bg-white text-black rounded-full px-14 font-black uppercase tracking-[0.2em] text-sm h-16 italic shadow-4xl transition-all active:scale-95 group border-4 border-primary/20" asChild>
                     <Link href="/terminal">
                        <Zap className="size-6 mr-4 group-hover:scale-125 transition-transform" /> 
                        Launch Global Strike
                     </Link>
                   </Button>
                   <Button variant="outline" className="border-primary/40 bg-primary/5 hover:bg-primary/20 text-primary rounded-full px-14 font-black uppercase tracking-[0.2em] text-sm h-16 italic transition-all group border-4" asChild>
                     <Link href="/system">
                        <Activity className="size-6 mr-4 group-hover:rotate-180 transition-transform" />
                        Neural Diagnostics
                     </Link>
                   </Button>
                   <div className="flex-1 flex justify-end items-center gap-6">
                      <TrendingUp className="size-6 text-emerald-500 animate-bounce" />
                      <div className="text-right">
                        <span className="text-[11px] text-emerald-500 font-black uppercase tracking-widest block">Efficiency Gain</span>
                        <span className="text-2xl font-black text-white italic">+24.8% <span className="text-[10px] opacity-40">GEPA_3.5</span></span>
                      </div>
                   </div>
                </div>
            </Card>

            <Card className="kali-card border-red-600/30 bg-black/60 p-10 rounded-[4rem] border-4 shadow-3xl relative flex flex-col group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
                <CardTitle className="text-3xl text-red-500 font-bold uppercase tracking-[0.3em] mb-12 flex items-center gap-6 italic">
                  <ShieldAlert className="size-10 text-red-600 animate-pulse drop-shadow-[0_0_20px_red]" /> Defense Matrix
                </CardTitle>
                <div className="space-y-8 flex-1">
                   {[
                     { label: "Kernel Stealth", sub: "Ring 0 Rootkit Persistence", icon: Ghost, status: "ACTIVE", color: "text-red-400" },
                     { label: "Neural Firewall", sub: "Behavioral AI Evasion", icon: Lock, status: "SECURED", color: "text-blue-400" },
                     { label: "Anti-Forensics", sub: "Continuous Log Scrubbing", icon: ShieldHalf, status: "ARMED", color: "text-emerald-400" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between p-8 bg-red-950/15 border-2 border-red-900/30 rounded-[2.5rem] hover:bg-red-950/30 transition-all cursor-crosshair group/item shadow-xl">
                        <div className="flex items-center gap-8">
                           <item.icon className={cn("size-10 group-hover/item:scale-110 transition-transform duration-700", item.color)} />
                           <div>
                              <span className="text-lg font-black uppercase text-red-100 tracking-widest block">{item.label}</span>
                              <span className="text-[11px] text-red-400/60 uppercase font-bold italic tracking-wider">{item.sub}</span>
                           </div>
                        </div>
                        <Badge className={cn(
                          "px-6 py-2 rounded-full border-2 shadow-2xl font-black italic tracking-widest",
                          item.status === 'ACTIVE' ? "bg-red-600 text-white border-red-400 animate-pulse" : 
                          item.status === 'ARMED' ? "bg-emerald-600 text-white border-emerald-400" : "bg-blue-600/20 text-blue-400 border-blue-500/40"
                        )}>{item.status}</Badge>
                     </div>
                   ))}
                </div>
                <div className="p-8 bg-primary/5 border-2 border-primary/20 rounded-[3rem] mt-12 shadow-inner relative group-hover:border-primary/40 transition-all duration-700">
                   <p className="text-xl italic text-primary font-medium leading-relaxed">
                     "سيدي، بروتوكولات التخفي تعمل في وضع 'الشبح المطلق'. لقد دمجنا الـ Rootkit في صلب النواة (Ring 0)؛ نحن غير مرئيين حتى لأكثر أنظمة الـ EDR تطوراً."
                   </p>
                </div>
                <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                   <span className="text-[11px] font-bold uppercase tracking-[0.4em] italic">System Uptime: 42d 14h 22m</span>
                   <div className="flex gap-4">
                      <Fingerprint className="size-6 text-primary" />
                      <Key className="size-6 text-primary" />
                   </div>
                </div>
            </Card>
        </div>

        {/* Quick Command Interface */}
        <div className="mt-auto relative z-10 pb-8">
            <Card className="kali-card bg-black/98 p-4 rounded-full border-4 border-primary/40 shadow-[0_0_150px_rgba(0,0,0,1)] flex items-center group focus-within:border-primary transition-all duration-1000">
               <div className="px-10 flex items-center gap-8 border-r-4 border-white/10 mr-6">
                  <TerminalIcon className="size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
                  <span className="text-[14px] font-black text-primary uppercase tracking-[0.5em] italic gold-glow select-none">SOV-CORE v42.2</span>
               </div>
               <input 
                type="text" 
                placeholder=" dictate sovereign intent to the alpha node..." 
                className="flex-1 bg-transparent border-none outline-none text-3xl italic text-white px-8 placeholder:text-white/5 font-medium"
               />
               <Button className="bg-primary text-black rounded-full px-16 h-20 font-black uppercase tracking-[0.4em] mr-2 hover:bg-white hover:scale-105 transition-all shadow-4xl active:scale-95 italic border-4 border-black/20">
                  EXECUTE
               </Button>
            </Card>
            <div className="flex justify-center items-center gap-16 mt-8 opacity-30 text-[11px] font-black uppercase tracking-[2em] italic">
              <span>AL-MUIZZ COMMAND & CONTROL</span>
              <div className="size-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
              <span>GOD-MODE v42.2</span>
              <div className="size-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
              <span>SINGULARITY_REACHED</span>
            </div>
        </div>
      </main>
    </div>
  )
}
