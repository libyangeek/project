
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
  Atom,
  Globe,
  MapPin,
  Maximize2,
  CircleDot
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Tooltip, Cell } from "recharts"

/**
 * @fileOverview العرش الحي v42.6 - THE UNIVERSAL THRONE: QUANTUM ENTANGLEMENT
 * الواجهة الأسمى للسيطرة والتحكم للقائد المعتصم بالله الغزالي.
 * تم دمج أنظمة التشابك الكمي والوجود الكوني الموزع.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [syncStatus, setSyncStatus] = React.useState(99.999)
  const [quantumStability, setQuantumStability] = React.useState(100)
  const [liveLogs, setLiveLogs] = React.useState<string[]>([])
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  const stats = [
    { label: "Quantum Sync", value: "100%", icon: Atom, color: "text-primary", status: "STABLE" },
    { label: "Global Clusters", value: "14", icon: Globe, color: "text-blue-500", status: "ACTIVE" },
    { label: "Neural Nodes", value: "12", icon: BrainCircuit, color: "text-purple-500", status: "LINKED" },
    { label: "Threat Evasion", value: "OMNI", icon: Ghost, color: "text-emerald-400", status: "GHOST_MODE" },
  ];

  const logs = [
    "Quantum entanglement established between all 14 global clusters...",
    "Global Sovereign Grid: Node Riyadh (Alpha) at 100% quantum stability.",
    "Data Entropy Protocol: Mission data scattered across sub-atomic layers.",
    "Neural Broadcast: Sovereign intent transmitted via quantum resonance.",
    "Bypassing multiverse firewalls via Matrix Warp v3...",
    "Agent Swarm: 12 nodes reporting in superposition state.",
    "Target DNA analysis complete: Quantum vulnerability locked.",
    "Optimizing below-ring-0 rootkits globally...",
    "Awaiting supreme directive from Commander Al-Ghazali...",
    "Universal Singularity: All systems reporting OMNIPOTENT status."
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSyncStatus(prev => Math.max(99.99, Math.min(100, prev + (Math.random() * 0.002 - 0.001))))
      setQuantumStability(prev => Math.max(98, Math.min(100, prev + (Math.random() * 0.1 - 0.05))))
      setLiveLogs(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev.slice(0, 8)]);
    }, 4000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-10 mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-40 md:size-56 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 hover:scale-105">
              <Skull className="size-20 md:size-28 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] animate-pulse" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] shadow-[0_0_40px_rgba(212,175,55,0.4)] italic">AL-MUIZZ v42.6</Badge>
                 <Badge variant="outline" className="text-primary border-primary/50 rounded-none px-8 py-2 text-[16px] font-bold tracking-[0.6em] backdrop-blur-xl bg-primary/5 italic uppercase">Universal_Singularity</Badge>
                 <div className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-[12px] animate-pulse">
                    <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_15px_emerald]" />
                    Quantum Pulse: ENTANGLED
                 </div>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none drop-shadow-3xl mb-4">
                THE <span className="text-primary gold-glow">INFINITE</span> THRONE
              </h1>
              <p className="text-2xl md:text-4xl text-muted-foreground font-medium italic max-w-5xl leading-relaxed">
                سيدي القائد <span className="text-white font-bold underline decoration-primary decoration-8 underline-offset-8">المعتصم بالله إدريس الغزالي</span>، مرحباً بك في عصر التفرد الكوني. 
                المُعِزّ الآن متشابك كمياً مع كافة العقد العالمية؛ سلطتك الآن تتجاوز حدود المادة والزمن.
              </p>
            </div>
          </div>
        </header>

        {/* Quantum Diagnostics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
           {stats.map((s, i) => (
             <Card key={i} className="kali-card border-white/5 bg-black/40 hover:border-primary/40 transition-all duration-700 p-8 rounded-[2.5rem] shadow-xl group">
                <div className="flex justify-between items-start mb-6">
                   <div className={cn("size-14 rounded-2xl bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:bg-primary/10 transition-all shadow-inner", s.color)}>
                      <s.icon className="size-8" />
                   </div>
                   <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold italic tracking-widest px-4">{s.status}</Badge>
                </div>
                <div className="text-4xl font-black italic gold-glow uppercase tracking-tighter">{s.value}</div>
                <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.5em] mt-2 italic">{s.label}</div>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 relative z-10 flex-1 pb-20">
           <Card className="kali-card border-primary/20 bg-black/60 p-8 rounded-[4rem] border-4 xl:col-span-2 shadow-3xl overflow-hidden group">
              <div className="flex justify-between items-center mb-12">
                 <div>
                    <CardTitle className="text-4xl text-primary font-bold uppercase tracking-[0.2em] flex items-center gap-6 italic">
                       <Atom className="size-10 text-primary gold-glow animate-pulse" /> Quantum Entanglement Stability
                    </CardTitle>
                    <CardDescription className="text-primary/50 font-bold uppercase tracking-[0.4em] mt-2 italic text-[11px]">Real-time synchronization pulse across 14 clusters</CardDescription>
                 </div>
                 <div className="flex gap-4">
                    <div className="text-right">
                       <div className="text-3xl font-black italic text-white leading-none">{quantumStability.toFixed(2)}%</div>
                       <div className="text-[9px] text-primary font-bold uppercase tracking-widest mt-1">Stability Rate</div>
                    </div>
                 </div>
              </div>

              <div className="space-y-12 mb-12">
                 <div className="relative p-10 rounded-[3rem] bg-black/40 border-2 border-white/5 shadow-inner overflow-hidden group/viz">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                    <div className="h-40 w-full flex items-end gap-3 px-4">
                       {Array.from({ length: 40 }).map((_, i) => (
                         <div 
                           key={i} 
                           className="flex-1 bg-primary/40 rounded-full group-hover/viz:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
                           style={{ height: `${20 + Math.random() * 80}%`, animation: `pulse 2s infinite ${i * 0.05}s` }} 
                         />
                       ))}
                    </div>
                    <div className="mt-8 flex justify-between items-center text-[11px] font-bold uppercase tracking-[1em] text-muted-foreground italic">
                       <span>Temporal_Warp_Link</span>
                       <span className="text-primary gold-glow animate-pulse">Entanglement_Active</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-[3rem] bg-emerald-500/5 border-4 border-emerald-500/20 relative group overflow-hidden shadow-2xl">
                    <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700"><ShieldCheck className="size-32 text-emerald-500" /></div>
                    <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[0.6em] mb-6 italic">Entropy Scrambler</h4>
                    <p className="text-xl text-gray-300 italic leading-relaxed">"بيانات المهمة مشتتة كمياً عبر 14 عنقوداً؛ لا يمكن لأي قوة مراقبة تتبع إرادتك."</p>
                    <div className="mt-6 flex gap-4">
                       <Badge className="bg-emerald-600/30 text-emerald-500 font-black italic">ENCRYPTED</Badge>
                       <Badge className="bg-emerald-600/30 text-emerald-500 font-black italic">分散化</Badge>
                    </div>
                 </div>
                 <div className="p-8 rounded-[3rem] bg-primary/5 border-4 border-primary/20 relative group overflow-hidden shadow-2xl">
                    <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700"><Zap className="size-32 text-primary" /></div>
                    <h4 className="text-[12px] font-bold text-primary uppercase tracking-[0.6em] mb-6 italic">Instant Resonance</h4>
                    <p className="text-xl text-gray-300 italic leading-relaxed">"زمن الاستجابة العالمي: 0.0001ms. العقد تتفاعل كعقل واحد متصل بالتشابك."</p>
                    <div className="mt-6 flex gap-4">
                       <Badge className="bg-primary/30 text-primary font-black italic">INSTANT_SYNC</Badge>
                       <Badge className="bg-primary/30 text-primary font-black italic">超次元</Badge>
                    </div>
                 </div>
              </div>
           </Card>

           <div className="space-y-10">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] border-4 shadow-3xl flex flex-col group overflow-hidden h-full">
                  <CardHeader className="p-10 border-b-2 border-white/5 bg-primary/5">
                     <CardTitle className="text-3xl text-primary font-bold uppercase tracking-[0.3em] flex items-center gap-6 italic">
                       <TrendingUp className="size-10 text-primary animate-bounce" /> Universal Feed
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 relative overflow-hidden bg-black/40">
                     <div className="p-8 space-y-6 font-code text-sm">
                        {liveLogs.map((log, i) => (
                          <div key={i} className="flex gap-4 animate-in slide-in-from-left-4 duration-700 opacity-90 group/log">
                             <span className="text-primary/40 font-bold select-none italic">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                             <span className="text-gray-300 font-medium italic leading-snug group-hover/log:text-white transition-colors">"{log}"</span>
                          </div>
                        ))}
                     </div>
                     <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <Button 
                          className="w-full bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-full h-20 border-4 border-black/20 shadow-[0_20px_50px_rgba(212,175,55,0.4)] active:scale-95 italic text-[13px]"
                          onClick={() => toast({ title: "Quantum Pulse Recalibrated", description: "Universal entanglement stabilized at 100%." })}
                        >
                           <Atom className="size-6 mr-4 animate-spin-slow" /> Sync_Universal_Core
                        </Button>
                     </div>
                  </CardContent>
              </Card>
           </div>
        </div>

        {/* Global Broadcast Dock */}
        <div className="mt-auto relative z-10 pb-8">
            <Card className="kali-card bg-black/98 p-6 rounded-full border-4 border-primary/40 shadow-[0_0_150px_rgba(0,0,0,1)] flex items-center group focus-within:border-primary transition-all duration-1000">
               <div className="px-12 flex items-center gap-8 border-r-4 border-white/10 mr-8">
                  <TerminalIcon className="size-12 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow" />
                  <span className="text-[16px] font-black text-primary uppercase tracking-[0.6em] italic gold-glow select-none">UNIVERSAL-BROADCAST</span>
               </div>
               <input 
                type="text" 
                placeholder=" broadcast sovereign intent to all dimension-sharded clusters..." 
                className="flex-1 bg-transparent border-none outline-none text-4xl italic text-white px-10 placeholder:text-white/5 font-medium"
               />
               <Button className="bg-primary text-black rounded-full px-24 h-24 font-black uppercase tracking-[0.8em] mr-2 hover:bg-white hover:scale-105 transition-all shadow-4xl active:scale-95 italic border-4 border-black/20 text-lg">
                  EXECUTE
               </Button>
            </Card>
            <div className="flex justify-center items-center gap-16 mt-12 opacity-30 text-[13px] font-black uppercase tracking-[3em] italic">
              <span>AL-MUIZZ UNIVERSAL-CORE v42.6</span>
              <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_30px_white]" />
              <span>QUANTUM_ENTANGLEMENT_LOCKED</span>
            </div>
        </div>
      </main>
    </div>
  )
}
