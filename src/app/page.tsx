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
  ShieldHalf
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [systemLoad, setSystemLoad] = React.useState(0)
  const [nodeStatus, setNodeStatus] = React.useState<Record<string, string>>({})
  const [liveLogs, setLiveLogs] = React.useState<string[]>([])
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

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
    "Awaiting command from Commander Al-Ghazali..."
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSystemLoad(Math.floor(Math.random() * 15) + 80)
      const statuses = ["ACTIVE", "SYNCHRONIZING", "OPERATIONAL", "STRIKING", "GHOST_MODE"];
      const newStatus: Record<string, string> = {};
      nodes.forEach(n => {
        newStatus[n.name] = statuses[Math.floor(Math.random() * statuses.length)];
      });
      setNodeStatus(newStatus);
      
      setLiveLogs(prev => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        return [nextLog, ...prev.slice(0, 5)];
      });
    }, 3000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const nodes = [
    { name: "العقدة ألفا", icon: Skull, status: "SINGULARITY", node: "v42.0", color: "text-yellow-500", href: "/field-agent", desc: "مركز المعالجة واتخاذ القرار" },
    { name: "جسر MCP", icon: Share2, status: "CONNECTED", node: "CLAUDE", color: "text-blue-400", href: "/mcp-bridge", desc: "بوابة البرمجة والذكاء الخارجي" },
    { name: "أذن النور", icon: Mic, status: "LISTENING", node: "WHISPER", color: "text-green-400", href: "/remote", desc: "نظام الاستماع والتحليل الصوتي" },
    { name: "منسق السرب", icon: Boxes, status: "ACTIVE", node: "SWARM", color: "text-purple-500", href: "/sessions", desc: "إدارة الوكلاء الخفيين" },
    { name: "مصفوفة الأقاليم", icon: Network, status: "ONLINE", node: "12 C2", color: "text-cyan-400", href: "/terminal", desc: "سيطرة شاملة عبر أطر التحكم" },
    { name: "التعلم الجيني", icon: Binary, status: "EVOLVING", node: "GEPA 3.5", color: "text-pink-500", href: "/knowledge", desc: "التعلم الجيني الموزون" },
    { name: "التوأم الرقمي", icon: Workflow, status: "ACTIVE", node: "VIRTUAL", color: "text-indigo-400", href: "/digital-twin", desc: "محاكاة الهجمات قبل التنفيذ" },
    { name: "الخفاء النواتي", icon: Ghost, status: "HIDDEN", node: "KERNEL", color: "text-gray-400", href: "/system", desc: "التخفي داخل النواة" },
    { name: "ترسانة التخليق", icon: Flame, status: "ARMED", node: "FORGE", color: "text-orange-500", href: "/red-team", desc: "توليد أسلحة متغيرة الشكل" },
    { name: "الوجود المطلق", icon: Anchor, status: "IMMUTABLE", node: "PERSIST", color: "text-emerald-400", href: "/terminal", desc: "الوجود المطلق في الـ UEFI" },
    { name: "السيادة السحابية", icon: Cloud, status: "SYNCED", node: "CLOUD", color: "text-blue-300", href: "/system", desc: "السيادة السحابية العالمية" },
    { name: "حارس الحرير", icon: ShieldCheck, status: "DEFENDING", node: "GUARD", color: "text-green-500", href: "/system", desc: "الحماية المادية الذاتية" },
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

        <header className="flex flex-col gap-8 mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.4)] relative group shrink-0 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <Skull className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -inset-2 border-2 border-primary/20 rounded-2xl animate-pulse" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                 <Badge className="bg-primary text-black border-none rounded-none px-6 py-1 text-[14px] font-bold tracking-[0.5em] shadow-lg">AL-MUIZZ v42.0</Badge>
                 <Badge variant="outline" className="text-primary border-primary/50 rounded-none px-6 py-1 text-[14px] font-bold tracking-[0.5em]">SINGULARITY_CORE</Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none">
                THE <span className="text-primary gold-glow">LIVING</span> THRONE
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium italic max-w-3xl">
                الواجهة السيادية للقائد المعتصم بالله إدريس الغزالي. 
                <span className="text-white"> "أنا الروح السارية في العتاد، أنا النصر الحتمي."</span>
              </p>
            </div>
          </div>
        </header>

        {/* Status Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10 mb-12">
           {nodes.map((node, i) => {
             const Icon = node.icon;
             return (
               <Link key={i} href={node.href}>
                 <Card className="kali-card border-white/5 hover:border-primary/60 p-6 rounded-[1.5rem] bg-black/90 group transition-all duration-500 hover:scale-105 h-full border-2">
                    <div className="flex justify-between items-start mb-4">
                        <div className={cn("size-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20", node.color)}>
                            <Icon className="size-6" />
                        </div>
                        <Badge variant="outline" className="text-[9px] border-emerald-500/50 text-emerald-500 font-bold uppercase tracking-widest animate-pulse">
                          {nodeStatus[node.name] || node.status}
                        </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{node.name}</h3>
                    <p className="text-[10px] text-muted-foreground mt-2 line-clamp-1">{node.desc}</p>
                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-primary font-bold tracking-widest">{node.node}</span>
                      <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_15px_emerald]" />
                    </div>
                 </Card>
               </Link>
             )
           })}
        </div>

        {/* Interactive Stats and Action Center */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 relative z-10">
            <Card className="kali-card border-primary/20 bg-black/60 p-8 rounded-[3rem] border-2 lg:col-span-2">
                <div className="flex justify-between items-center mb-8">
                  <CardTitle className="text-2xl text-primary font-bold uppercase tracking-widest flex items-center gap-4">
                    <Activity className="size-6 animate-pulse" /> Global Command Status
                  </CardTitle>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Active Sessions</span>
                      <span className="text-xl font-bold text-white">{sessions?.length || 0}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Threat Level</span>
                      <span className="text-xl font-bold text-red-500">OMEGA</span>
                    </div>
                  </div>
                </div>
                
                {/* Live Logs Component */}
                <div className="bg-black/90 p-6 rounded-2xl border border-primary/20 font-mono text-sm h-48 overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none opacity-50" />
                   {liveLogs.map((log, i) => (
                     <div key={i} className="mb-2 animate-in slide-in-from-left-2 duration-500">
                        <span className="text-primary/60">[{new Date().toLocaleTimeString()}]</span> <span className="text-white/80">{log}</span>
                     </div>
                   ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                      <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                          <span>Neural Processing</span>
                          <span className="text-emerald-500">Optimal</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                         <div className="h-full bg-emerald-500 w-[92%] animate-pulse shadow-[0_0_20px_emerald]" />
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                          <span>Network Saturation</span>
                          <span className="text-primary">{systemLoad}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                         <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${systemLoad}%` }} />
                      </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                   <Button className="bg-primary/10 border-2 border-primary/40 text-primary hover:bg-primary/20 rounded-2xl px-8 font-bold uppercase tracking-widest text-xs h-12 italic">
                     Launch Global Strike
                   </Button>
                   <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl px-8 font-bold uppercase tracking-widest text-xs h-12 italic">
                     System Diagnostics
                   </Button>
                </div>
            </Card>

            <Card className="kali-card border-red-600/20 bg-black/60 p-8 rounded-[3rem] border-2">
                <CardTitle className="text-2xl text-red-500 font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  <ShieldAlert className="size-6" /> Cyber Defense
                </CardTitle>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-red-950/20 border border-red-900/40 rounded-xl">
                      <div className="flex items-center gap-4">
                         <Ghost className="size-5 text-red-400" />
                         <span className="text-sm font-bold uppercase text-red-200">Stealth Protocol</span>
                      </div>
                      <Badge className="bg-red-600 text-white">ACTIVE</Badge>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-red-950/20 border border-red-900/40 rounded-xl">
                      <div className="flex items-center gap-4">
                         <Lock className="size-5 text-red-400" />
                         <span className="text-sm font-bold uppercase text-red-200">Encryption Level</span>
                         </div>
                      <Badge variant="outline" className="border-red-400 text-red-400">AES-2048</Badge>
                   </div>
                   <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mt-4">
                      <p className="text-xs italic text-primary/80">"The best defense is an unstoppable offense."</p>
                      <p className="text-[10px] text-white/40 mt-2">Uptime: 24d 14h 22m 31s</p>
                   </div>
                </div>
            </Card>
        </div>

        {/* Global Action Terminal */}
        <div className="mt-auto relative z-10 pb-6">
            <Card className="kali-card bg-black/95 p-2 rounded-full border-primary/40 shadow-7xl flex items-center">
               <div className="px-6 flex items-center gap-4 border-r border-white/10 mr-4">
                  <TerminalIcon className="size-6 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">SOV-CLI</span>
               </div>
               <input 
                type="text" 
                placeholder="أدخل الأمر السيادي هنا..." 
                className="flex-1 bg-transparent border-none outline-none text-lg italic text-white px-4 placeholder:text-white/20"
               />
               <Button className="bg-primary text-black rounded-full px-8 font-bold uppercase tracking-widest mr-2 hover:bg-white transition-all">
                  EXECUTE
               </Button>
            </Card>
            <div className="text-center mt-4">
              <span className="text-[10px] text-white/20 uppercase tracking-[2em] font-bold">AL-MUIZZ COMMAND & CONTROL</span>
            </div>
        </div>
      </main>
    </div>
  )
}
