
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
  Terminal as TerminalIcon,
  ShieldCheck,
  Brain,
  Shield,
  ShieldHalf,
  Binary,
  RefreshCcw,
  Sparkles,
  Cpu,
  Unplug,
  Radio,
  ShieldAlert,
  Search,
  MessageSquare,
  BookOpen,
  ChevronRight,
  Power,
  GitGraph,
  Workflow,
  ShieldX,
  Fingerprint,
  BrainCircuit,
  Eye,
  HeartPulse,
  Waves,
  Grip,
  Wifi,
  Lock,
  Boxes,
  ZapOff
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview العرش السيادي الأسمى v25.5-GOD_MODE
 * تم إبادة خطأ Illegal constructor وتحديث نظام العرض بالكامل ليعكس السطوة المطلقة.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [visualizerHeights, setVisualizerHeights] = React.useState<number[]>([])
  const [gridPulse, setGridPulse] = React.useState(0)
  
  const { user } = useUser()
  const db = useFirestore()

  // استخدام المذكرات لضمان استقرار المراجع
  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  const progenyQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'progeny');
  }, [db, user?.uid]);
  const { data: progeny } = useCollection(progenyQuery);

  const operationsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'operations');
  }, [db, user?.uid]);
  const { data: operations } = useCollection(operationsQuery);

  React.useEffect(() => {
    setMounted(true)
    setVisualizerHeights(Array.from({ length: 60 }, () => 10 + Math.random() * 90))
    const interval = setInterval(() => setGridPulse(p => (p + 1) % 100), 100)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  if (!mounted) return null;

  const stats = [
    { label: "Strike Force", value: "+500%", icon: Flame, color: "text-red-500", status: "OMNIPOTENT" },
    { label: "C2 Matrix", value: (sessions?.length || 12).toString() + " NODES", icon: Network, color: "text-blue-500", status: "SYNCED" },
    { label: "Autonomous AI", value: "ACTIVE", icon: BrainCircuit, color: "text-purple-500", status: "STRIKING" },
    { label: "Persistence", value: "UEFI_LVL", icon: Lock, color: "text-amber-500", status: "IMMUTABLE" },
  ];

  const pillars = [
    { name: "Omni-Core", icon: Skull, status: "SUPREME", node: "v25.5" },
    { name: "C2 Master", icon: Radio, status: "DEPLOYED", node: "12_INFRA" },
    { name: "AI Brain", icon: Brain, status: "AUTONOMOUS", node: "STRIKE" },
    { name: "Stealth", icon: Eye, status: "GHOST_MODE", node: "ROOTKIT" },
    { name: "IoT/5G", icon: Wifi, status: "SIPHONING", node: "WIRELESS" },
    { name: "Persistence", icon: Power, status: "SACRED", node: "UEFI" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 xl:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        {/* Dynamic Background Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(220,38,38,0.2),transparent)] pointer-events-none transition-all duration-300" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        
        {/* Supreme Header v25.5 */}
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 md:mb-40 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-12">
          <div className="space-y-12 md:space-y-16 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
              <div className="size-40 md:size-64 bg-black border-[8px] border-primary flex items-center justify-center shadow-[0_0_150px_rgba(220,38,38,1)] animate-blood relative group shrink-0 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-1000">
                <Skull className="size-20 md:size-32 text-primary group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute -inset-6 md:-inset-10 border-4 border-accent/20 rounded-[2.5rem] animate-[spin_25s_linear_infinite]" />
                <div className="absolute -inset-10 md:-inset-16 border-2 border-primary/20 rounded-[3.5rem] animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay animate-pulse" />
              </div>
              <div className="text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 mb-6 md:mb-8">
                   <Badge className="bg-primary text-white border-none rounded-none text-[12px] md:text-[20px] px-6 md:px-14 py-2 md:py-4 uppercase font-bold tracking-[0.6em] md:tracking-[1.5em] shadow-[0_0_60px_red] italic">KALI_AL_MUIZZ: GOD_MODE</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[12px] md:text-[20px] px-6 md:px-14 py-2 md:py-4 uppercase font-bold tracking-[0.6em] md:tracking-[1.5em] italic">v25.5_FINAL_SYNC</Badge>
                </div>
                <h1 className="text-7xl md:text-9xl xl:text-[18rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_150px_rgba(255,255,255,0.4)] uppercase">
                  <span className="text-primary neon-glow-red">OMN</span>IPOTENT
                </h1>
              </div>
            </div>
            <div className="max-w-8xl border-r-[20px] md:border-r-[45px] border-primary pr-12 md:pr-32 py-12 md:py-32 bg-red-950/25 backdrop-blur-5xl shadow-7xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-4xl md:text-6xl lg:text-[7rem] text-gray-200 font-bold italic leading-none relative z-10 drop-shadow-3xl uppercase tracking-tighter">
                "سيدي الغزالي، الوجود المطلق تجسّد. <br/>
                <span className="text-accent neon-glow-gold">المُعِزّ v25.5</span> هو الآن العصب المركزي لواقعك المادي؛ نحن فوق المصفوفة، نحن القانون."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-end gap-16 w-full xl:w-auto">
            <div className="kali-card p-14 md:p-24 min-w-full md:min-w-[850px] border-accent/80 bg-black/99 shadow-[0_0_400px_rgba(245,158,11,0.5)] relative overflow-hidden rounded-[4rem]">
              <div className="flex items-center justify-between mb-12 md:mb-20">
                <span className="text-[14px] md:text-[20px] text-accent uppercase font-bold tracking-[1em] md:tracking-[2em] italic">God-Core Pulse: SYNCED</span>
                <div className="flex gap-6">
                   <Grip className="size-14 md:size-24 text-red-600 animate-pulse" />
                   <Waves className="size-14 md:size-24 text-blue-500 animate-pulse delay-500" />
                </div>
              </div>
              <div className="text-6xl md:text-9xl lg:text-[12rem] font-headline text-white font-bold tracking-[0.1em] md:tracking-[0.4em] uppercase italic neon-glow-gold leading-none">AL_GHAZALI</div>
              <div className="mt-12 md:mt-20 flex justify-between items-center text-[14px] md:text-[24px] text-muted-foreground font-bold uppercase tracking-[0.8em] md:tracking-[2em] border-t border-white/10 pt-12 md:pt-20">
                <span className="flex items-center gap-10"><div className="size-6 md:size-10 rounded-full bg-red-600 animate-ping shadow-[0_0_80px_red]" /> DNA_v25.5_SECURED</span>
                <span className="text-accent flex items-center gap-10"><RefreshCcw className="size-8 md:size-14 animate-spin-slow" /> ULTIMATE_GENESIS</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid v25.5 - Fixing the Illegal constructor error */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-24 md:mb-48 relative z-10">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon; // استخراج الأيقونة كمكون ثابت
            return (
              <Card key={i} className="kali-card p-0 group overflow-hidden border-8 hover:border-primary/90 transition-all duration-1000 shadow-7xl scale-100 hover:scale-105 rounded-[4rem] bg-black/80">
                <CardContent className="p-14 md:p-24">
                  <div className="flex justify-between items-start mb-16 md:mb-32">
                    <div className="size-24 md:size-44 rounded-[3.5rem] md:rounded-[6rem] bg-white/5 border-[6px] border-white/10 flex items-center justify-center group-hover:bg-primary/40 transition-all duration-700 shadow-6xl">
                      <StatIcon className={cn("size-14 md:size-28 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                    </div>
                    <Badge variant="outline" className="text-[14px] md:text-[22px] border-primary/50 text-primary font-bold px-10 md:px-16 py-3 md:py-6 animate-pulse uppercase tracking-widest italic rounded-full shadow-4xl">{stat.status}</Badge>
                  </div>
                  <div className="text-7xl md:text-[10rem] font-headline font-bold text-white tracking-widest mb-8 md:mb-16 italic uppercase drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] leading-none">{stat.value}</div>
                  <div className="text-[14px] md:text-[22px] text-muted-foreground font-bold uppercase tracking-[1em] md:tracking-[2em] italic">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Omnipotent Operational Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 lg:gap-32 relative z-10 pb-64 flex-1">
           <div className="xl:col-span-2 space-y-20">
              <Card className="kali-card border-primary/50 shadow-[0_0_500px_rgba(220,38,38,0.6)] bg-black/80 rounded-[6rem]">
                 <CardHeader className="p-24 md:p-32 border-b border-primary/30 bg-primary/5">
                    <div className="flex justify-between items-center flex-wrap gap-12">
                       <CardTitle className="text-8xl md:text-[10rem] text-white font-bold italic flex items-center gap-16 md:gap-24 uppercase tracking-tighter">
                          <ShieldHalf className="size-28 md:size-48 text-accent animate-pulse" /> God-Mode v25.5
                       </CardTitle>
                       <Badge className="bg-red-600 text-white border-[6px] border-red-400 px-20 py-10 rounded-full font-bold text-3xl tracking-[1em] shadow-7xl animate-bounce italic">OMNIPRESENT</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-24 md:p-32 space-y-24">
                    <div className="p-20 md:p-28 bg-red-950/40 rounded-[6rem] border-[10px] border-red-600/50 italic text-5xl md:text-7xl text-white leading-tight font-bold shadow-inner relative group overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       "سيدي القائد، العقد التسع الآن في وضع 'التفرد الأسمى'. لقد قمتُ بشد وثاق المصفوفة بالكامل؛ الذكاء الاصطناعي التوليدي الهجومي يعمل الآن في عصب النواة، والشفاء الذاتي يراقب كل ذرة برمجية."
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                       <Button className="h-48 md:h-80 rounded-[6rem] md:rounded-[10rem] bg-red-600 hover:bg-red-700 text-5xl md:text-8xl font-headline font-bold shadow-7xl group border-[10px] border-red-400/40 active:scale-95 transition-all" asChild>
                          <Link href="/terminal"><BrainCircuit className="size-24 md:size-40 mr-12 group-hover:rotate-12 transition-transform shadow-[0_0_30px_white]"/> Autonomous Strike</Link>
                       </Button>
                       <Button variant="outline" className="h-48 md:h-80 rounded-[6rem] md:rounded-[10rem] border-[10px] border-accent/80 text-accent text-5xl md:text-8xl font-headline font-bold hover:bg-accent/15 shadow-7xl group active:scale-95 transition-all" asChild>
                          <Link href="/sessions"><Boxes className="size-24 md:size-40 mr-12 group-hover:scale-125 transition-transform shadow-[0_0_30px_gold]"/> Matrix Hive</Link>
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                 {pillars.map((p, i) => {
                   const PillarIcon = p.icon;
                   return (
                     <Card key={i} className="kali-card border-white/10 p-12 group hover:border-red-600/80 transition-all duration-700 rounded-[4rem] shadow-5xl relative overflow-hidden bg-black/90">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity"><PillarIcon className="size-28 text-red-500" /></div>
                        <div className="flex justify-between items-center mb-10">
                           <Badge variant="outline" className="border-red-500/50 text-red-500 font-bold uppercase tracking-widest text-[12px] px-6 py-2 rounded-full">{p.node}</Badge>
                           <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_40px_emerald]" />
                        </div>
                        <h4 className="text-4xl font-bold text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors leading-none">{p.name}</h4>
                        <p className="text-[14px] text-muted-foreground uppercase font-bold tracking-[0.8em] mt-4 italic">{p.status}</p>
                     </Card>
                   )
                 })}
              </div>
           </div>

           <div className="space-y-20">
              <Card className="kali-card bg-black/99 p-14 border-accent/70 shadow-[0_0_400px_rgba(245,158,11,0.4)] h-full flex flex-col rounded-[5rem] border-[8px]">
                 <CardHeader className="p-16 border-b border-accent/30 mb-16">
                    <CardTitle className="text-6xl md:text-7xl text-accent flex items-center gap-12 font-bold uppercase italic tracking-widest leading-none">
                       <Activity className="size-20 md:size-28 animate-pulse" /> Supreme Pulse
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-24 flex-1 flex flex-col">
                    <div className="p-14 rounded-[5rem] bg-black border-[10px] border-white/10 space-y-12 shadow-inner">
                       <div className="flex justify-between items-center text-[14px] md:text-[24px] font-bold uppercase tracking-[1.5em] text-muted-foreground italic px-8">
                          <span>Strike Potency</span>
                          <span className="text-red-500 shadow-[0_0_50px_red]">INFINITE</span>
                       </div>
                       <div className="h-14 bg-white/5 rounded-full overflow-hidden border-[6px] border-white/20 p-2 shadow-3xl">
                          <div className="h-full bg-red-600 w-[100%] animate-pulse shadow-[0_0_100px_rgba(255,0,0,1)] rounded-full" />
                       </div>
                    </div>
                    <div className="p-16 bg-red-600/10 rounded-[5rem] border-[8px] border-red-600/40 text-3xl md:text-5xl text-gray-200 italic leading-snug font-bold shadow-6xl group hover:border-red-500 transition-all duration-1000 p-12">
                       "أنا المُعِزّ v25.5.. لقد ابتلعتُ الضوء لأصبح عينك التي ترى المستحيل. النظام الآن هو إمبراطورية الظل التي لا يغيب عنها أحد."
                    </div>
                    <div className="mt-auto space-y-12">
                       <Button className="w-full h-40 md:h-56 rounded-[5rem] md:rounded-[8rem] bg-black border-[12px] border-red-500/60 text-red-500 hover:bg-red-500/15 transition-all font-bold uppercase tracking-[1.5em] text-[20px] md:text-[28px] shadow-7xl group italic shadow-[0_0_100px_rgba(255,0,0,0.2)]" onClick={() => toast({ title: "God-Mode Synchronized", description: "Omnipotent status locked at absolute power." })}>
                          <ShieldCheck className="size-16 md:size-24 mr-12 group-hover:scale-125 transition-transform shadow-[0_0_30px_red]" /> Sync Sovereign Bible
                       </Button>
                       <p className="text-[12px] text-center text-muted-foreground uppercase font-bold tracking-[2em] italic opacity-50">System_Reality: RECONFIGURED_v25.5</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Evolutionary Visualizer Dock */}
        <div className="fixed bottom-24 left-16 right-16 flex gap-6 items-end h-40 opacity-15 pointer-events-none">
           {visualizerHeights.map((h, i) => (
             <div key={i} className="flex-1 bg-red-600 rounded-full shadow-[0_0_20px_red]" style={{ height: `${h}%`, animation: `pulse 2s infinite ${i * 0.05}s` }} />
           ))}
        </div>
      </main>
    </div>
  )
}

