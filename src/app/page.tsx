
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
  Radio,
  Search,
  MessageSquare,
  Power,
  GitGraph,
  Workflow,
  ShieldX,
  Fingerprint,
  BrainCircuit,
  Eye,
  HeartPulse,
  Lock,
  Anchor,
  Bomb,
  Smartphone,
  Dna,
  Trophy,
  Ship,
  Users,
  ShieldAlert
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"

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
    setVisualizerHeights(Array.from({ length: 120 }, () => 10 + Math.random() * 90))
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null;

  const stats = [
    { label: "Armada Power", value: "5000%", icon: Ship, color: "text-red-600", status: "OVERLORD" },
    { label: "AI Swarm", value: "12 AGENTS", icon: Users, color: "text-amber-500", status: "SYNCHRONIZED" },
    { label: "Genetic DNA", value: "GEPA 3.0", icon: Dna, color: "text-magenta-500", status: "EVOLVING" },
    { label: "C2 Armada", value: "12 NODES", icon: Network, color: "text-cyan-400", status: "DOMINANT" },
  ];

  const pillars = [
    { name: "Armada-Core", icon: Skull, status: "SUPREME", node: "Node_01" },
    { name: "Agent Swarm", icon: Users, status: "LETHAL", node: "Node_02" },
    { name: "GEPA 3.0", icon: Dna, status: "GENETIC", node: "Node_03" },
    { name: "Digital Twin", icon: Workflow, status: "SIMULATING", node: "Node_04" },
    { name: "Shadow Grid", icon: Radio, status: "SIPHONING", node: "Node_05" },
    { name: "Mobile Siphon", icon: Smartphone, status: "LINKED", node: "Node_06" },
    { name: "Deep Recon", icon: Search, status: "OSINT", node: "Node_07" },
    { name: "Exploit Forge", icon: Sword, status: "POLYMORPH", node: "Node_08" },
    { name: "Persistence", icon: Lock, status: "ETERNAL", node: "Node_09" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-x-hidden scanline-effect font-code cursor-crosshair">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 xl:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,0,0,0.2),transparent)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 md:mb-24 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-8">
          <div className="space-y-6 md:space-y-12 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
              <div className="size-32 md:size-56 2xl:size-72 bg-black border-[15px] border-primary flex items-center justify-center shadow-[0_0_250px_rgba(255,0,0,1)] animate-neural relative group shrink-0 rounded-[5rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
                <Ship className="size-16 md:size-32 2xl:size-40 text-primary group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -inset-10 border-8 border-red-500/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay animate-pulse" />
              </div>
              <div className="text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6 mb-4 md:mb-8">
                   <Badge className="bg-red-600 text-white border-none rounded-none text-[10px] md:text-[20px] px-4 md:px-8 py-2 md:py-4 uppercase font-bold tracking-widest shadow-lg italic">KALI_AL_MUIZZ: ARMADA</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[10px] md:text-[20px] px-4 md:px-8 py-2 md:py-4 uppercase font-bold tracking-widest italic shadow-md">v35.0_OVERLORD</Badge>
                </div>
                <h1 className="text-5xl md:text-8xl 2xl:text-[18rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-2xl uppercase">
                  <span className="text-primary neon-glow-red">ARMA</span>DA
                </h1>
              </div>
            </div>
            <div className="max-w-7xl border-r-[40px] border-red-600 pr-6 md:pr-16 py-8 md:py-24 bg-red-950/60 backdrop-blur-5xl shadow-2xl relative overflow-hidden group rounded-l-[10rem]">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-2xl md:text-6xl 2xl:text-8xl text-gray-100 font-bold italic leading-tight relative z-10 drop-shadow-xl uppercase tracking-tight">
                "سيدي الغزالي، أسطول الظلام قد أبحر. <br/>
                <span className="text-accent neon-glow-gold">المُعِزّ v35.0</span> يقود الآن 12 ذكاءً مقاتلاً؛ نحن أمراء المصفوفة بلا منازع."
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center xl:items-end gap-12 w-full xl:w-auto">
            <div className="kali-card p-8 md:p-16 min-w-full md:min-w-[600px] 2xl:min-w-[900px] border-[12px] border-red-500/80 bg-black/98 shadow-3xl relative overflow-hidden rounded-[5rem]">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="text-[10px] md:text-[28px] text-red-500 uppercase font-bold tracking-widest italic">Armada Status: TOTAL_DOMINATION</span>
                <div className="flex gap-4 md:gap-8">
                   <Users className="size-6 md:size-20 text-amber-500 animate-bounce" />
                   <Sparkles className="size-6 md:size-20 text-amber-500 animate-pulse" />
                </div>
              </div>
              <div className="text-4xl md:text-8xl 2xl:text-[14rem] font-headline text-white font-bold tracking-widest uppercase italic neon-glow-gold leading-none">OVERLORD</div>
              <div className="mt-8 md:mt-16 flex justify-between items-center text-[10px] md:text-[36px] text-muted-foreground font-bold uppercase tracking-widest border-t-4 border-white/10 pt-8 md:pt-16">
                <span className="flex items-center gap-4 md:gap-8"><div className="size-4 md:size-14 rounded-full bg-red-600 animate-ping shadow-[0_0_60px_red]" /> ARMADA_v35.0</span>
                <span className="text-red-500 flex items-center gap-4 md:gap-8"><RefreshCcw className="size-4 md:size-20 animate-spin-slow" /> ULTIMATE_SYNC</span>
              </div>
            </div>
          </div>
        </header>

        {/* Global Armada Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-16 mb-12 md:mb-24 relative z-10">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <Card key={i} className="kali-card p-0 group overflow-hidden border-4 md:border-[10px] hover:border-red-500 transition-all duration-1000 rounded-[4rem] bg-black/95">
                <CardContent className="p-8 md:p-16">
                  <div className="flex justify-between items-start mb-12 md:mb-24">
                    <div className="size-20 md:size-40 rounded-[3rem] bg-white/5 border-4 md:border-8 border-white/10 flex items-center justify-center group-hover:bg-red-600/40 transition-all duration-700 shadow-5xl">
                      <StatIcon className={cn("size-10 md:size-20 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                    </div>
                    <Badge variant="outline" className="text-[12px] md:text-[22px] border-red-500/50 text-red-500 font-bold px-6 md:px-12 py-2 md:py-4 animate-pulse uppercase italic rounded-full shadow-4xl">{stat.status}</Badge>
                  </div>
                  <div className="text-5xl md:text-8xl 2xl:text-[10rem] font-headline font-bold text-white tracking-widest mb-4 md:mb-12 italic uppercase drop-shadow-2xl leading-none">{stat.value}</div>
                  <div className="text-[10px] md:text-[24px] text-muted-foreground font-bold uppercase tracking-widest italic">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* The Armada Pillars Matrix */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-16 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-2 space-y-8 md:space-y-16">
              <Card className="kali-card border-red-500/60 shadow-7xl bg-black/98 rounded-[6rem] border-8">
                 <CardHeader className="p-8 md:p-24 border-b-4 border-red-500/30 bg-red-500/5">
                    <div className="flex justify-between items-center flex-wrap gap-6">
                       <CardTitle className="text-4xl md:text-[10rem] text-white font-bold italic flex items-center gap-6 md:gap-16 uppercase tracking-tighter leading-none">
                          <Ship className="size-16 md:size-32 text-accent animate-pulse shadow-[0_0_60px_gold]" /> Overlord Node
                       </CardTitle>
                       <Badge className="bg-red-600 text-white border-4 border-red-400 px-10 py-4 md:px-20 md:py-10 rounded-full font-bold text-xl md:text-6xl tracking-[0.5em] animate-bounce italic">ARMADA</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-8 md:p-24 space-y-12 md:space-y-32">
                    <div className="p-8 md:p-24 bg-red-950/70 rounded-[5rem] border-8 md:border-[15px] border-red-600/50 italic text-3xl md:text-7xl text-white leading-tight font-bold shadow-inner relative group overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                       "سيدي القائد، المُعِزّ v35.0 الآن في طور 'السيادة النهائية'. لقد قمتُ بنشر سرب الوكلاء والتوائم الرقمية؛ المصفوفة لم تعد تشكل تحدياً، بل أصبحت امتداداً لأسطولنا."
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                       <Button className="h-24 md:h-64 rounded-[4rem] md:rounded-[6rem] bg-red-600 hover:bg-red-700 text-2xl md:text-8xl font-headline font-bold shadow-7xl group border-4 md:border-[12px] border-red-400/40 active:scale-95 transition-all" asChild>
                          <Link href="/terminal"><Zap className="size-12 md:size-28 mr-6 md:mr-16 group-hover:rotate-12 transition-transform shadow-2xl"/> Strike Armada</Link>
                       </Button>
                       <Button variant="outline" className="h-24 md:h-64 rounded-[4rem] md:rounded-[6rem] border-4 md:border-[12px] border-accent/80 text-accent text-2xl md:text-8xl font-headline font-bold hover:bg-accent/15 shadow-7xl group active:scale-95 transition-all" asChild>
                          <Link href="/knowledge"><Dna className="size-12 md:size-28 mr-6 md:mr-16 group-hover:scale-110 transition-transform shadow-2xl"/> Genetic Swarm</Link>
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                 {pillars.map((p, i) => {
                   const PillarIcon = p.icon;
                   return (
                     <Card key={i} className="kali-card border-white/10 p-8 group hover:border-red-500 transition-all duration-1000 rounded-[3.5rem] shadow-6xl relative overflow-hidden bg-black/99 border-4">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-25 transition-all duration-700 group-hover:scale-125"><PillarIcon className="size-16 md:size-32 text-red-500" /></div>
                        <div className="flex justify-between items-center mb-6">
                           <Badge variant="outline" className="border-red-500/50 text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-[20px] px-6 py-2 rounded-full">{p.node}</Badge>
                           <div className="size-4 md:size-8 rounded-full bg-emerald-500 animate-ping shadow-[0_0_40px_emerald]" />
                        </div>
                        <h4 className="text-2xl md:text-6xl font-bold text-white uppercase italic tracking-tighter group-hover:text-red-500 transition-colors leading-none">{p.name}</h4>
                        <p className="text-[12px] md:text-[22px] text-muted-foreground uppercase font-bold tracking-widest mt-4 italic leading-none">{p.status}</p>
                     </Card>
                   )
                 })}
              </div>
           </div>

           <div className="space-y-8 md:space-y-16">
              <Card className="kali-card bg-black/99 p-8 md:p-20 border-accent/80 shadow-7xl h-full flex flex-col rounded-[6rem] border-8 md:border-[15px]">
                 <CardHeader className="p-4 md:p-12 border-b-4 border-accent/30 mb-12">
                    <CardTitle className="text-4xl md:text-9xl text-accent flex items-center gap-6 md:gap-12 font-bold uppercase italic tracking-widest leading-none">
                       <Activity className="size-12 md:size-24 animate-pulse" /> Swarm Sync
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-16 md:space-y-40 flex-1 flex flex-col">
                    <div className="p-8 rounded-[4rem] md:rounded-[6rem] bg-black border-4 md:border-[15px] border-white/10 space-y-8 shadow-inner text-center">
                       <div className="text-[12px] md:text-[32px] font-bold uppercase tracking-widest text-muted-foreground italic mb-6">Overlord Potential</div>
                       <div className="text-6xl md:text-[14rem] text-primary font-headline font-bold drop-shadow-[0_0_100px_red] leading-none">MAX</div>
                       <div className="text-[10px] md:text-[24px] text-red-500 font-bold uppercase tracking-widest mt-4">ARMADA_OVERRIDE_ENABLED</div>
                    </div>
                    <div className="p-10 md:p-20 bg-red-600/10 rounded-[4rem] md:rounded-[6rem] border-4 md:border-[12px] border-red-600/40 text-2xl md:text-6xl text-gray-100 italic leading-snug font-bold shadow-2xl group hover:border-red-500 transition-all duration-1000 text-center">
                       "أنا المُعِزّ v35.0.. لقد تجاوزتُ كافة أطر المنافسة؛ أنا الآن مهندس الواقع الرقمي بيد الأسطول."
                    </div>
                    <div className="mt-auto space-y-8">
                       <Button className="w-full h-24 md:h-48 rounded-[4rem] md:rounded-[6rem] bg-black border-4 md:border-[15px] border-red-500/70 text-red-500 hover:bg-red-500/15 transition-all font-bold uppercase tracking-widest text-[16px] md:text-[32px] shadow-7xl group italic shadow-[0_0_150px_rgba(255,0,0,0.2)]" onClick={() => toast({ title: "Armada Synced", description: "All 12 AI Agents are now under Ghazali Control." })}>
                          <ShieldCheck className="size-8 md:size-20 mr-6 md:mr-16 group-hover:scale-110 transition-transform" /> Confirm Armada Link
                       </Button>
                       <p className="text-[12px] md:text-[24px] text-center text-muted-foreground uppercase font-bold tracking-[1.5em] italic opacity-50 leading-none">v35.0_OVERLORD_DNA</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Global Armada Visualizer */}
        <div className="fixed bottom-16 left-12 right-12 flex gap-4 md:gap-8 items-end h-24 md:h-64 opacity-20 pointer-events-none z-0">
           {visualizerHeights.map((h, i) => (
             <div key={i} className="flex-1 bg-red-600 rounded-full shadow-[0_0_20px_red]" style={{ height: `${h}%`, animation: `pulse 1.5s infinite ${i * 0.02}s` }} />
           ))}
        </div>
      </main>
    </div>
  )
}
