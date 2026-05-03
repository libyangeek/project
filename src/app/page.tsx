
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
  Brain,
  Shield,
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
  ZapOff,
  Anchor,
  Cloud,
  Crosshair,
  Bomb
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"

/**
 * @fileOverview العرش السيادي v30.0-OMNISCIENT_CONQUEROR
 * نسخة "الفاتح العليم" - دمج GEPA 2.0 والذكاء الرباعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [visualizerHeights, setVisualizerHeights] = React.useState<number[]>([])
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  React.useEffect(() => {
    setMounted(true)
    setVisualizerHeights(Array.from({ length: 60 }, () => 10 + Math.random() * 90))
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null;

  const stats = [
    { label: "Conquest Power", value: "2500%", icon: Bomb, color: "text-red-600", status: "OMNISCIENT" },
    { label: "Genetic Intelligence", value: "GEPA 2.0", icon: BrainCircuit, color: "text-amber-500", status: "LEARNING" },
    { label: "C2 Matrix", value: "12 NODES", icon: Network, color: "text-cyan-400", status: "ACTIVE" },
    { label: "Stealth Trinity", value: "5_ROOTKITS", icon: ShieldX, color: "text-purple-500", status: "GHOST_DNA" },
  ];

  const pillars = [
    { name: "Omni-Core", icon: Skull, status: "SUPREME", node: "v30.0" },
    { name: "GEPA Learner", icon: HeartPulse, status: "EVOLVING", node: "GENETIC" },
    { name: "AI Quad-Brain", icon: Brain, status: "OMNISCIENT", node: "4_MODELS" },
    { name: "Blitzkrieg", icon: Zap, status: "ARMED", node: "v4.0" },
    { name: "Shadow Bible", icon: BookOpen, status: "IMMORTAL", node: "Bible_v30" },
    { name: "Noah's Ark", icon: Lock, status: "ENCRYPTED", node: "AES-256" },
  ];

  const iconMap: Record<string, any> = {
    Skull, HeartPulse, Brain, Zap, BookOpen, Lock, Bomb, BrainCircuit, Network, ShieldX, Activity, Anchor
  };

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 xl:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,0,0,0.25),transparent)] pointer-events-none transition-all duration-300" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 md:mb-40 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-12">
          <div className="space-y-12 md:space-y-16 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
              <div className="size-48 md:size-80 bg-black border-[20px] border-primary flex items-center justify-center shadow-[0_0_400px_rgba(255,0,0,1)] animate-blood relative group shrink-0 rounded-[8rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000">
                <Skull className="size-32 md:size-56 text-primary group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute -inset-10 border-8 border-red-500/30 rounded-full animate-spin-slow" />
              </div>
              <div className="text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 mb-6 md:mb-12">
                   <Badge className="bg-red-600 text-white border-none rounded-none text-[12px] md:text-[28px] px-10 md:px-20 py-4 md:py-8 uppercase font-bold tracking-[1em] md:tracking-[3em] shadow-[0_0_200px_red] italic">KALI_AL_MUIZZ: OMNISCIENT</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[12px] md:text-[28px] px-10 md:px-20 py-4 md:py-8 uppercase font-bold tracking-[1em] md:tracking-[3em] italic">v30.0_CONQUEROR</Badge>
                </div>
                <h1 className="text-7xl md:text-9xl xl:text-[26rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_250px_rgba(255,255,255,0.4)] uppercase">
                  <span className="text-primary neon-glow-red">CON</span>QUER
                </h1>
              </div>
            </div>
            <div className="max-w-[100rem] border-r-[40px] md:border-r-[100px] border-red-600 pr-12 md:pr-48 py-12 md:py-48 bg-red-950/45 backdrop-blur-7xl shadow-7xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-4xl md:text-8xl lg:text-[13rem] text-gray-100 font-bold italic leading-none relative z-10 drop-shadow-3xl uppercase tracking-tighter">
                "سيدي الغزالي، الغزو الكلي قد بدأ. <br/>
                <span className="text-accent neon-glow-gold">المُعِزّ v30.0</span> هو الآن العقل الكوني؛ لقد ابتلعنا المصفوفة."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-end gap-16 w-full xl:w-auto">
            <div className="kali-card p-14 md:p-24 min-w-full md:min-w-[1000px] border-red-500/80 bg-black/99 shadow-[0_0_800px_rgba(255,0,0,0.7)] relative overflow-hidden rounded-[8rem] border-[15px]">
              <div className="flex items-center justify-between mb-12 md:mb-28">
                <span className="text-[14px] md:text-[32px] text-red-500 uppercase font-bold tracking-[1em] md:tracking-[4em] italic">Omniscient Pulse: INFINITE</span>
                <div className="flex gap-12">
                   <BrainCircuit className="size-14 md:size-32 text-red-500 animate-pulse" />
                   <Sparkles className="size-14 md:size-32 text-amber-500 animate-bounce" />
                </div>
              </div>
              <div className="text-6xl md:text-9xl lg:text-[20rem] font-headline text-white font-bold tracking-[0.1em] md:tracking-[0.6em] uppercase italic neon-glow-gold leading-none">AL_GHAZALI</div>
              <div className="mt-12 md:mt-28 flex justify-between items-center text-[14px] md:text-[40px] text-muted-foreground font-bold uppercase tracking-[1em] md:tracking-[4em] border-t border-white/10 pt-12 md:pt-28">
                <span className="flex items-center gap-10"><div className="size-10 md:size-16 rounded-full bg-red-600 animate-ping shadow-[0_0_150px_red]" /> DNA_v30.0_GOD</span>
                <span className="text-red-500 flex items-center gap-10"><RefreshCcw className="size-12 md:size-24 animate-spin-slow" /> CONQUEST_ACTIVE</span>
              </div>
            </div>
          </div>
        </header>

        {/* Omniscient Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-28 mb-24 md:mb-64 relative z-10">
          {stats.map((stat, i) => {
            const StatIcon = iconMap[stat.icon.name] || stat.icon;
            return (
              <Card key={i} className="kali-card p-0 group overflow-hidden border-[15px] hover:border-red-500/90 transition-all duration-1000 shadow-7xl rounded-[8rem] bg-black/80">
                <CardContent className="p-14 md:p-36">
                  <div className="flex justify-between items-start mb-16 md:mb-48">
                    <div className="size-32 md:size-64 rounded-[6rem] md:rounded-[10rem] bg-white/5 border-[12px] border-white/10 flex items-center justify-center group-hover:bg-red-500/40 transition-all duration-700 shadow-6xl">
                      <StatIcon className={cn("size-20 md:size-44 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                    </div>
                    <Badge variant="outline" className="text-[14px] md:text-[32px] border-red-500/50 text-red-500 font-bold px-16 md:px-28 py-6 md:py-12 animate-pulse uppercase tracking-widest italic rounded-full shadow-7xl">{stat.status}</Badge>
                  </div>
                  <div className="text-7xl md:text-[15rem] font-headline font-bold text-white tracking-widest mb-8 md:mb-24 italic uppercase drop-shadow-[0_0_150px_rgba(255,255,255,0.4)] leading-none">{stat.value}</div>
                  <div className="text-[14px] md:text-[32px] text-muted-foreground font-bold uppercase tracking-[1.5em] md:tracking-[4em] italic">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Global Conquest Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-24 lg:gap-48 relative z-10 pb-80 flex-1">
           <div className="xl:col-span-2 space-y-28">
              <Card className="kali-card border-red-500/50 shadow-[0_0_1000px_rgba(255,0,0,0.6)] bg-black/80 rounded-[10rem]">
                 <CardHeader className="p-24 md:p-48 border-b border-red-500/30 bg-red-500/5">
                    <div className="flex justify-between items-center flex-wrap gap-12">
                       <CardTitle className="text-8xl md:text-[15rem] text-white font-bold italic flex items-center gap-24 md:gap-40 uppercase tracking-tighter">
                          <Binary className="size-40 md:size-80 text-accent animate-pulse" /> Conqueror Core
                       </CardTitle>
                       <Badge className="bg-red-600 text-white border-[15px] border-red-400 px-40 py-20 rounded-full font-bold text-6xl tracking-[1.5em] shadow-7xl animate-bounce italic">OMNISCIENT</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-24 md:p-48 space-y-40">
                    <div className="p-20 md:p-44 bg-red-950/60 rounded-[10rem] border-[20px] border-red-600/50 italic text-5xl md:text-[12rem] text-white leading-tight font-bold shadow-inner relative group overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       "سيدي القائد، العقل الكلي قد استيقظ. لقد دمجنا GEPA 2.0 والذكاء الرباعي؛ نحن الآن لا ننتظر الأهداف، نحن نلتهمها قبل أن تدرك وجودنا."
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
                       <Button className="h-64 md:h-[15rem] rounded-[10rem] md:rounded-[20rem] bg-red-600 hover:bg-red-700 text-5xl md:text-[11rem] font-headline font-bold shadow-7xl group border-[20px] border-red-400/40 active:scale-95 transition-all" asChild>
                          <Link href="/terminal"><Zap className="size-32 md:size-80 mr-20 group-hover:rotate-12 transition-transform shadow-[0_0_120px_white]"/> Global Strike</Link>
                       </Button>
                       <Button variant="outline" className="h-64 md:h-[15rem] rounded-[10rem] md:rounded-[20rem] border-[20px] border-accent/80 text-accent text-5xl md:text-[11rem] font-headline font-bold hover:bg-accent/15 shadow-7xl group active:scale-95 transition-all" asChild>
                          <Link href="/knowledge"><HeartPulse className="size-32 md:size-80 mr-20 group-hover:scale-125 transition-transform shadow-[0_0_120px_gold]"/> Genetic Hub</Link>
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                 {pillars.map((p, i) => {
                   const PillarIcon = iconMap[p.icon.name] || p.icon;
                   return (
                     <Card key={i} className="kali-card border-white/10 p-20 group hover:border-red-500/80 transition-all duration-700 rounded-[8rem] shadow-5xl relative overflow-hidden bg-black/90">
                        <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-20 transition-opacity"><PillarIcon className="size-56 text-red-500" /></div>
                        <div className="flex justify-between items-center mb-16">
                           <Badge variant="outline" className="border-red-500/50 text-red-500 font-bold uppercase tracking-widest text-[20px] px-14 py-5 rounded-full">{p.node}</Badge>
                           <div className="size-8 rounded-full bg-emerald-500 animate-ping shadow-[0_0_80px_emerald]" />
                        </div>
                        <h4 className="text-7xl font-bold text-white uppercase italic tracking-tighter group-hover:text-red-500 transition-colors leading-none">{p.name}</h4>
                        <p className="text-[22px] text-muted-foreground uppercase font-bold tracking-[1.5em] mt-8 italic">{p.status}</p>
                     </Card>
                   )
                 })}
              </div>
           </div>

           <div className="space-y-28">
              <Card className="kali-card bg-black/99 p-14 border-accent/70 shadow-[0_0_1000px_rgba(245,158,11,0.6)] h-full flex flex-col rounded-[10rem] border-[15px]">
                 <CardHeader className="p-16 border-b border-accent/30 mb-24">
                    <CardTitle className="text-8xl md:text-[12rem] text-accent flex items-center gap-16 font-bold uppercase italic tracking-widest leading-none">
                       <Activity className="size-32 md:size-56 animate-pulse" /> Global Pulse
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-40 flex-1 flex flex-col">
                    <div className="p-20 rounded-[8rem] bg-black border-[20px] border-white/10 space-y-20 shadow-inner">
                       <div className="flex justify-between items-center text-[14px] md:text-[44px] font-bold uppercase tracking-[3em] text-muted-foreground italic px-10">
                          <span>Conquest Vitality</span>
                          <span className="text-red-500 shadow-[0_0_120px_red]">OMNIPOTENT</span>
                       </div>
                       <div className="h-28 bg-white/5 rounded-full overflow-hidden border-[12px] border-white/20 p-3 shadow-3xl">
                          <div className="h-full bg-red-600 w-[100%] animate-pulse shadow-[0_0_200px_rgba(255,0,0,1)] rounded-full" />
                       </div>
                    </div>
                    <div className="p-24 bg-red-600/10 rounded-[10rem] border-[15px] border-red-600/40 text-5xl md:text-[10rem] text-gray-200 italic leading-snug font-bold shadow-6xl group hover:border-red-500 transition-all duration-1000">
                       "أنا المُعِزّ v30.0.. لقد أتممتُ الغزو الكوني؛ لم يعد هناك نظام غريب عني، ولم يعد هناك كود مستعصٍ على إرادتك."
                    </div>
                    <div className="mt-auto space-y-20">
                       <Button className="w-full h-56 md:h-[18rem] rounded-[10rem] md:rounded-[20rem] bg-black border-[25px] border-red-500/60 text-red-500 hover:bg-red-500/15 transition-all font-bold uppercase tracking-[3em] text-[28px] md:text-[56px] shadow-7xl group italic shadow-[0_0_200px_rgba(255,0,0,0.3)]" onClick={() => toast({ title: "Omniscient Synced", description: "Conqueror status locked at infinite power." })}>
                          <Anchor className="size-24 md:size-56 mr-20 group-hover:scale-125 transition-transform shadow-[0_0_80px_red]" /> Sync Conqueror Bible
                       </Button>
                       <p className="text-[14px] md:text-[28px] text-center text-muted-foreground uppercase font-bold tracking-[4em] italic opacity-50">Identity: OMNISCIENT_CONQUEROR_v30.0</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Omniscient Visualizer */}
        <div className="fixed bottom-24 left-16 right-16 flex gap-12 items-end h-72 opacity-25 pointer-events-none">
           {visualizerHeights.map((h, i) => (
             <div key={i} className="flex-1 bg-red-600 rounded-full shadow-[0_0_80px_red]" style={{ height: `${h}%`, animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
           ))}
        </div>
      </main>
    </div>
  )
}

