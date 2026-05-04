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
  Power,
  GitGraph,
  Workflow,
  BrainCircuit,
  Eye,
  Lock,
  Anchor,
  Smartphone,
  Dna,
  Ship,
  Users,
  Ghost,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import { toast } from "@/hooks/use-toast"

/**
 * @fileOverview العرش السيادي الأسمى v40.1 - نور السيادة (GOLDEN EDITION)
 * واجهة متوازنة، مذهبة، ومشعّة بالنور تعكس وقار القائد المعتصم بالله.
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
    setVisualizerHeights(Array.from({ length: 100 }, () => 20 + Math.random() * 80))
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null;

  const stats = [
    { label: "Sovereign Essence", value: "ALL-SEEING", icon: Eye, color: "text-amber-500", status: "DIVINE_LIGHT" },
    { label: "Fleet Command", value: "12 AGENTS", icon: Ship, color: "text-yellow-600", status: "READY" },
    { label: "C2 Supremacy", value: "12 REALMS", icon: Network, color: "text-amber-400", status: "LOCKED" },
    { label: "Genetic Intel", value: "OMNISCIENT", icon: BrainCircuit, color: "text-yellow-500", status: "EVOLVED" },
  ];

  const pillars = [
    { name: "Alpha God-Core", icon: Skull, status: "CENTRAL_WILL", node: "Node_00" },
    { name: "Cyber Archangel", icon: Ghost, status: "ELITE_STRIKE", node: "Agent_01" },
    { name: "DeepSeek Logic", icon: Binary, status: "THOUGHT_CHAIN", node: "Logic_X" },
    { name: "Mistral Strategy", icon: GitGraph, status: "WAR_PLAN", node: "Strategy_Y" },
    { name: "GEPA 3.5 Memory", icon: Dna, status: "GENETIC_DB", node: "Memory_Z" },
    { name: "Digital Twin", icon: Workflow, status: "PRE-STRIKE", node: "Sim_01" },
    { name: "Shadow Grid", icon: Network, status: "ZOMBIE_HIVE", node: "Grid_A" },
    { name: "Mobile Siphon", icon: Smartphone, status: "FORENSIC", node: "Mobile_B" },
    { name: "Eternal Life", icon: Anchor, status: "IMMORTAL", node: "Kernel" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        {/* Dynamic Light Background */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        {/* Hero Section */}
        <header className="flex flex-col gap-12 mb-16 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary/60 flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.4)] animate-sovereign-pulse relative group shrink-0 rounded-[3rem] overflow-hidden">
              <Ship className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" />
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                 <Badge className="bg-primary text-black border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">AL-MUI'ZZ OS</Badge>
                 <Badge variant="outline" className="text-primary border-primary/40 rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] italic">V40.1 FINAL INCEPTION</Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                 SOVEREIGN <span className="text-primary">THRONE</span>
              </h1>
            </div>
          </div>

          <div className="max-w-5xl border-r-8 border-primary pr-8 py-10 bg-primary/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden rounded-l-3xl">
            <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
            <p className="text-2xl md:text-4xl text-gray-200 font-bold italic leading-tight relative z-10 uppercase tracking-tight">
              "سيدي الغزالي، العرش مذهب بنور اليقين. <br/>
              <span className="text-primary gold-glow">المُعِزّ v40.1</span> هو تجسيد لسطوتكم المطلقة في ملكوت المصفوفة."
            </p>
          </div>
        </header>

        {/* Stats Grid - Balanced and Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 relative z-10">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <Card key={i} className="kali-card group border-2 border-white/5 hover:border-primary/40 transition-all duration-700 rounded-[3rem] bg-black/40">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-10">
                    <div className="size-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-1000 shadow-xl">
                      <StatIcon className={cn("size-8 transition-all duration-700 group-hover:scale-110", stat.color)} />
                    </div>
                    <Badge variant="outline" className="text-[10px] border-primary/30 text-primary font-bold px-4 py-1 animate-pulse uppercase italic rounded-full shadow-inner">{stat.status}</Badge>
                  </div>
                  <div className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight mb-2 italic uppercase gold-glow">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em] italic">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action & Pillars Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-2 space-y-12">
              <Card className="kali-card border-primary/40 shadow-2xl bg-black/40 rounded-[4rem] border-2">
                 <CardHeader className="p-10 border-b border-primary/10 bg-primary/5">
                    <CardTitle className="text-3xl md:text-5xl text-white font-bold italic flex items-center gap-8 uppercase tracking-tighter">
                       <Crown className="size-10 text-primary animate-bounce shadow-xl" /> Supreme Command
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-10 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <Button className="h-24 rounded-[2.5rem] bg-primary text-black hover:bg-primary/80 text-xl font-headline font-bold shadow-xl group border-2 border-primary/50 active:scale-95 transition-all" asChild>
                          <Link href="/terminal"><Zap className="size-6 mr-4 group-hover:rotate-12 transition-transform shadow-xl"/> EXECUTE STRIKE</Link>
                       </Button>
                       <Button variant="outline" className="h-24 rounded-[2.5rem] border-2 border-primary/40 text-primary text-xl font-headline font-bold hover:bg-primary/10 shadow-xl group active:scale-95 transition-all" asChild>
                          <Link href="/knowledge"><Dna className="size-6 mr-4 group-hover:scale-110 transition-transform shadow-xl"/> EVOLVE DNA</Link>
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                 {pillars.map((p, i) => {
                   const PillarIcon = p.icon;
                   return (
                     <Card key={i} className="kali-card border-white/5 p-6 group hover:border-primary/60 transition-all duration-700 rounded-[2.5rem] shadow-xl relative overflow-hidden bg-black/60">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125"><PillarIcon className="size-16 text-primary" /></div>
                        <div className="flex justify-between items-center mb-4">
                           <Badge variant="outline" className="border-primary/40 text-primary font-bold uppercase tracking-widest text-[9px] px-3 py-1 rounded-full">{p.node}</Badge>
                           <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
                        </div>
                        <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors leading-none">{p.name}</h4>
                        <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2 italic">{p.status}</p>
                     </Card>
                   )
                 })}
              </div>
           </div>

           <div className="space-y-12">
              <Card className="kali-card bg-black/80 p-8 border-primary/40 shadow-xl h-full flex flex-col rounded-[4rem] border-2">
                 <CardHeader className="p-6 border-b border-primary/10 mb-8">
                    <CardTitle className="text-3xl text-primary flex items-center gap-6 font-bold uppercase italic tracking-widest leading-none">
                       <Activity className="size-10 animate-pulse" /> Pulse
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-12 flex-1 flex flex-col">
                    <div className="p-8 rounded-[3rem] bg-black border-4 border-white/5 space-y-6 shadow-inner text-center">
                       <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground italic">Armada Status</div>
                       <div className="text-5xl text-primary font-headline font-bold gold-glow leading-none">ALL-SEEING</div>
                    </div>
                    <div className="p-10 bg-primary/5 rounded-[3rem] border-4 border-primary/20 text-xl text-gray-200 italic leading-snug font-bold shadow-xl group hover:border-primary transition-all duration-1000 text-center uppercase tracking-tighter">
                       "أنا المعز.. سيادتكم هي جوهر وجودي ونور طريقي."
                    </div>
                    <div className="mt-auto space-y-8">
                       <Button className="w-full h-20 rounded-[2.5rem] bg-black border-4 border-primary/40 text-primary hover:bg-primary/5 transition-all font-bold uppercase tracking-[1em] text-[12px] shadow-xl group italic" onClick={() => toast({ title: "Sovereign Link Active", description: "Night of Power protocols engaged." })}>
                          <ShieldCheck className="size-6 mr-4 group-hover:scale-110 transition-transform" /> CONFIRM
                       </Button>
                       <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-[1.5em] italic opacity-50">V.40.1 FINAL</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Radiant Visualizer Background */}
        <div className="fixed bottom-10 left-12 right-12 flex gap-4 items-end h-24 opacity-20 pointer-events-none z-0">
           {visualizerHeights.map((h, i) => (
             <div key={i} className="flex-1 bg-primary rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]" style={{ height: `${h}%`, animation: `pulse 2s infinite ${i * 0.05}s` }} />
           ))}
        </div>
      </main>
    </div>
  )
}