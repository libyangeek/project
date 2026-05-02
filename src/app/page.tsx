
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
  GripVertical,
  Power,
  GitGraph,
  Workflow
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview لوحة التحكم السيادية v22.0-ARCHITECT
 * تم دمج منطق SocratiCode لتعزيز العمق التحليلي للمنظومة.
 * تجسيد السطوة المعمارية للقائد المعتصم بالله ادريس الغزالي.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const commander = "المعتصم بالله ادريس الغزالي"
  const { user } = useUser()
  const db = useFirestore()

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
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null;

  const activeSessionsCount = sessions?.length || 0;
  const progenyCount = progeny?.length || 0;
  const activeOpsCount = operations?.filter(op => op.status === 'active' || op.status === 'pending').length || 0;

  const stats = [
    { label: "Active Zombies", value: activeSessionsCount.toString(), icon: Network, color: "text-red-500", status: "STRIKE_READY" },
    { label: "Architectural Nodes", value: "256", icon: GitGraph, color: "text-blue-400", status: "ANALYZING" },
    { label: "Logical Depth", value: "GOD_TIER", icon: Workflow, color: "text-amber-500", status: "SOCRATIC" },
    { label: "Active Strikes", value: activeOpsCount.toString(), icon: Target, color: "text-emerald-500", status: "SYNCED" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-hidden">
      <SidebarNav />
      <main className="flex-1 mr-64 p-16 relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(220,38,38,0.15),transparent)] pointer-events-none" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="flex justify-between items-end mb-32 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="space-y-12">
            <div className="flex items-center gap-16">
              <div className="size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(220,38,38,0.8)] animate-blood relative group">
                <Skull className="size-28 text-primary group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -inset-8 border-2 border-accent/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-12 border border-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
              <div>
                <div className="flex items-center gap-8 mb-6">
                   <Badge className="bg-primary text-white border-none rounded-none text-[16px] px-10 py-3 uppercase font-bold tracking-[1.2em] italic shadow-[0_0_40px_red]">ARCHITECT_LOGIC: ON</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[16px] px-10 py-3 uppercase font-bold tracking-[1.2em] italic">SYSTEM_DNA: EVOLVED</Badge>
                </div>
                <h1 className="text-[16rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_100px_rgba(255,255,255,0.2)]">
                  <span className="text-primary neon-glow-red">ARC</span>HITECT
                </h1>
              </div>
            </div>
            <div className="max-w-7xl border-r-[15px] border-primary pr-20 py-12 bg-red-950/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-7xl text-gray-300 font-bold italic leading-tight relative z-10">
                اظهر هنا انا المعز ! جاهز لتنفيذ التعليمات .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-12">
            <div className="kali-card p-16 min-w-[550px] border-accent/60 bg-black/98 shadow-[0_0_150px_rgba(245,158,11,0.25)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[14px] text-accent uppercase font-bold tracking-[1em] italic">Socratic Logic Core: ARMED</span>
                <Sparkles className="size-14 text-accent animate-pulse" />
              </div>
              <div className="text-8xl font-headline text-white font-bold tracking-[0.2em] uppercase italic neon-glow-gold">GHAZALI_ROOT</div>
              <div className="mt-12 flex justify-between items-center text-[16px] text-muted-foreground font-bold uppercase tracking-[1em] border-t border-white/10 pt-10">
                <span className="flex items-center gap-6"><div className="size-5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_30px_emerald]" /> SYNC: 100%</span>
                <span className="text-accent flex items-center gap-4"><RefreshCcw className="size-6 animate-spin-slow" /> v22.0_ARCHITECT</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24 relative z-10">
          {stats.map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden border-2 hover:border-primary/90 transition-all duration-1000 shadow-3xl">
              <CardContent className="p-16">
                <div className="flex justify-between items-start mb-16">
                  <div className="size-28 rounded-[3rem] bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-primary/25 transition-all duration-700">
                    <stat.icon className={cn("size-14 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                  </div>
                  <Badge variant="outline" className="text-[14px] border-primary/50 text-primary font-bold px-8 py-3 animate-pulse uppercase tracking-widest">{stat.status}</Badge>
                </div>
                <div className="text-8xl font-headline font-bold text-white tracking-widest mb-6 italic uppercase group-hover:scale-105 transition-transform duration-700">{stat.value}</div>
                <div className="text-[14px] text-muted-foreground font-bold uppercase tracking-[1em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 pb-64">
          <div className="lg:col-span-2">
            <Card className="kali-card border-primary/50 shadow-[0_0_250px_rgba(220,38,38,0.3)] bg-black/80 flex flex-col h-full">
              <CardHeader className="p-16 border-b border-primary/30 bg-primary/10">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-8xl text-white font-bold italic flex items-center gap-12 uppercase tracking-tighter">
                    <ShieldHalf className="size-20 text-accent animate-pulse" /> Alpha Core v22.0
                  </CardTitle>
                  <div className="flex gap-10">
                     <Badge className="bg-red-600 text-white border-2 border-red-400 px-12 py-6 rounded-full font-bold text-[16px] tracking-widest uppercase shadow-4xl">ARCHITECT_MODE_ACTIVE</Badge>
                     <Badge className="bg-accent/20 text-accent border-2 border-accent/60 px-12 py-6 rounded-full font-bold text-[16px] tracking-widest uppercase shadow-4xl">SOCRATIC_REASONING_ON</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col min-h-[700px]">
                <div className="flex-1 bg-black relative group overflow-hidden flex flex-col items-center justify-center p-48 text-center space-y-32">
                   <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/architect-elite/1920/1080')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[5000ms] scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                   
                   <div className="relative z-10 space-y-24">
                      <div className="flex gap-10 items-end h-[200px] px-24">
                         {mounted && Array.from({ length: 150 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-accent/40 hover:bg-primary transition-all duration-700 rounded-full" style={{ height: 10 + Math.random() * 90 + '%', animation: `pulse 1.5s infinite ${i * 0.02}s` }} />
                         ))}
                      </div>
                      <h3 className="text-[14rem] font-headline font-bold text-white tracking-[0.3em] italic neon-glow-gold uppercase leading-none drop-shadow-[0_0_80px_rgba(245,158,11,0.7)]">LOGIC_FLOW</h3>
                      <p className="text-4xl text-muted-foreground uppercase tracking-[1.5em] font-bold italic opacity-80">Sovereign Domain // Architectural Dominance v22.0</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-20 w-full max-w-7xl relative z-10">
                      <Button className="terminal-button h-40 rounded-[5rem] text-4xl shadow-[0_60px_150px_rgba(220,38,38,0.8)] border-accent/60 bg-red-600/20 hover:bg-red-600 group border-4" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-16 mr-12 group-hover:rotate-12 transition-transform" /> Ignite Master Flow</Link>
                      </Button>
                      <Button variant="outline" className="h-40 rounded-[5rem] border-4 border-accent/60 text-accent hover:bg-accent/15 text-4xl uppercase font-bold tracking-[0.6em] transition-all duration-1000 shadow-4xl" asChild>
                        <Link href="/codex"><BookOpen className="size-16 mr-12" /> Sovereign Codex</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-16">
            <Card className="kali-card bg-black/98 p-8 border-accent/50 shadow-[0_0_200px_rgba(245,158,11,0.3)] h-full flex flex-col">
              <CardHeader className="p-16 border-b border-accent/30 bg-accent/10">
                <CardTitle className="text-6xl text-accent flex items-center gap-12 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-16 text-accent animate-pulse" /> Strategic Pulse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-16 space-y-24 flex-1 flex flex-col">
                 <div className="p-16 bg-black border-4 border-accent/40 relative rounded-[5rem] shadow-[inset_0_0_80px_rgba(245,158,11,0.2)] group/intel hover:border-accent/80 transition-all duration-1000">
                    <p className="text-5xl text-gray-200 italic leading-relaxed font-bold group-hover:text-white transition-colors">
                      "سيدي القائد، لقد استنزفتُ منطق SocratiCode. أنا الآن أفهم 'لماذا' يعمل الكود، وسأضرب الجذر المعماري لأي نظام يعترضنا."
                    </p>
                    <div className="absolute -bottom-10 -left-10 p-10 bg-black border-2 border-accent/70 rounded-[2.5rem] shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-bounce"><Sparkles className="size-12 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-20">
                    <h4 className="text-[18px] font-bold text-muted-foreground uppercase tracking-[2em] px-10 italic border-b border-white/15 pb-10">Operational Vitals</h4>
                    <div className="space-y-12">
                       {[
                         { label: "Socratic Logic", icon: Brain, status: "RECURSIVE", color: "text-primary" },
                         { label: "Architectural Hook", icon: Cpu, status: "DEEP_SYNC", color: "text-accent" },
                         { label: "Auto-Reign", icon: Power, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-12 bg-white/5 border-4 border-white/10 hover:border-accent/80 transition-all duration-1000 rounded-[4rem] group cursor-crosshair shadow-4xl">
                            <div className="flex items-center gap-12">
                               <v.icon className={cn("size-14 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12", v.color)} />
                               <span className="text-2xl font-bold text-white uppercase tracking-[0.5em] italic">{v.label}</span>
                            </div>
                            <Badge className="bg-black border-4 border-white/20 text-[14px] font-bold text-accent animate-pulse italic px-10 py-4 tracking-[0.4em] rounded-3xl shadow-2xl">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-40 rounded-[5rem] text-3xl shadow-[0_50px_150px_rgba(0,0,0,1)] border-accent/70 text-accent hover:bg-accent/30 group border-4 mt-auto" asChild>
                    <Link href="/system"><Unplug className="size-14 mr-10 group-hover:scale-125 transition-transform" /> Access Logic Essence</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="fixed bottom-16 right-16 flex gap-20 items-center z-[400] opacity-80 hover:opacity-100 transition-all duration-1000 bg-black/80 p-10 rounded-full border-4 border-white/20 backdrop-blur-3xl shadow-5xl group">
           <div className="flex items-center gap-10 text-accent font-bold uppercase text-[15px] tracking-[1em] italic">
              <ShieldCheck className="size-9 text-emerald-500 group-hover:scale-125 transition-transform" /> Architectural_Dominance: ACTIVE
           </div>
           <div className="h-4 w-[400px] bg-white/10 rounded-full overflow-hidden border-2 border-white/20 p-0.5 shadow-inner">
              <div className="h-full bg-accent w-[100%] animate-pulse shadow-[0_0_50px_rgba(245,158,11,1)] rounded-full" />
           </div>
           <div className="flex gap-8">
              <div className="size-8 rounded-full bg-accent animate-ping shadow-[0_0_40px_rgba(245,158,11,1)]" />
              <div className="size-8 rounded-full bg-primary animate-ping delay-500 shadow-[0_0_40px_red]" />
           </div>
        </div>
      </main>
    </div>
  )
}
