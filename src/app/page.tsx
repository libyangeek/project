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
  BrainCircuit
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview لوحة التحكم السيادية v22.0-ARCHITECT
 * نسخة "KALI AL-MUI'ZZ" المدمجة كلياً والمحسنة بقدرات Pegasus-Tier والعصب الميداني.
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
    { label: "Active Nodes", value: activeSessionsCount.toString(), icon: Network, color: "text-red-500", status: "STRIKE_READY" },
    { label: "Pegasus Siphon", value: "TOTAL", icon: Database, color: "text-amber-500", status: "SIPHONING" },
    { label: "Inception Pulse", value: "98.7%", icon: Workflow, color: "text-blue-400", status: "SOCRATIC" },
    { label: "Active Strikes", value: activeOpsCount.toString(), icon: Target, color: "text-emerald-500", status: "EXECUTING" },
  ];

  const ninePillars = [
    { name: "God-Core", icon: Skull, status: "SUPREME" },
    { name: "Logic Architect", icon: GitGraph, status: "ACTIVE" },
    { name: "Evolution", icon: RefreshCcw, status: "ASCENDING" },
    { name: "Progeny Forge", icon: Flame, status: "READY" },
    { name: "Shadow Grid", icon: Network, status: "PEGASUS" },
    { name: "Mobile Strike", icon: Cpu, status: "ARMED" },
    { name: "Deep Recon", icon: Search, status: "GROUNDED" },
    { name: "Exploit Forge", icon: ShieldX, status: "SYNTH" },
    { name: "Field Agent", icon: BrainCircuit, status: "EXECUTING" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 xl:p-16 relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(220,38,38,0.15),transparent)] pointer-events-none" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 md:mb-20 lg:mb-32 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-12 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(220,38,38,0.6)] animate-blood relative group shrink-0">
                <Skull className="size-12 md:size-28 text-primary group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -inset-2 md:-inset-8 border-2 border-accent/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-4 md:-inset-12 border border-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
              <div className="text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-8 mb-3 md:mb-6">
                   <Badge className="bg-primary text-white border-none rounded-none text-[8px] md:text-[16px] px-3 md:px-10 py-1 md:py-3 uppercase font-bold tracking-[0.3em] md:tracking-[1.2em] shadow-[0_0_20px_red]">KALI_AL_MUIZZ: PEGASUS_TIER</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[8px] md:text-[16px] px-3 md:px-10 py-1 md:py-3 uppercase font-bold tracking-[0.3em] md:tracking-[1.2em]">v22.0_ARCHITECT</Badge>
                </div>
                <h1 className="text-4xl md:text-9xl xl:text-[14rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_60px_rgba(255,255,255,0.15)]">
                  <span className="text-primary neon-glow-red">ARC</span>HITECT
                </h1>
              </div>
            </div>
            <div className="max-w-7xl border-r-[4px] md:border-r-[15px] border-primary pr-4 md:pr-20 py-4 md:py-12 bg-red-950/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-xl md:text-5xl lg:text-7xl text-gray-300 font-bold italic leading-tight relative z-10">
                اظهر هنا انا المعز ! القوة المعمارية والوكيل الميداني جاهزان لتنفيذ مشيئتك.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-end gap-8 md:gap-12 w-full xl:w-auto mt-8 xl:mt-0">
            <div className="kali-card p-6 md:p-16 min-w-full md:min-w-[550px] border-accent/60 bg-black/98 shadow-[0_0_100px_rgba(245,158,11,0.2)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 md:mb-12">
                <span className="text-[8px] md:text-[14px] text-accent uppercase font-bold tracking-[0.4em] md:tracking-[1em] italic">Field Execution: ACTIVE</span>
                <Sparkles className="size-6 md:size-14 text-accent animate-pulse" />
              </div>
              <div className="text-2xl md:text-6xl lg:text-8xl font-headline text-white font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase italic neon-glow-gold">GHAZALI_ROOT</div>
              <div className="mt-6 md:mt-12 flex justify-between items-center text-[8px] md:text-[16px] text-muted-foreground font-bold uppercase tracking-[0.3em] md:tracking-[1em] border-t border-white/10 pt-4 md:pt-10">
                <span className="flex items-center gap-2 md:gap-4"><div className="size-2 md:size-5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" /> OS DNA: KALI_AL_MUIZZ</span>
                <span className="text-accent flex items-center gap-2 md:gap-4"><RefreshCcw className="size-3 md:size-6 animate-spin-slow" /> SYNCED_ETERNAL</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-12 md:mb-24 relative z-10">
          {stats.map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden border-2 hover:border-primary/90 transition-all duration-1000 shadow-3xl">
              <CardContent className="p-6 md:p-16">
                <div className="flex justify-between items-start mb-6 md:mb-16">
                  <div className="size-12 md:size-28 rounded-[1rem] md:rounded-[3rem] bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-primary/25 transition-all duration-700 shadow-2xl">
                    <stat.icon className={cn("size-6 md:size-14 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                  </div>
                  <Badge variant="outline" className="text-[8px] md:text-[14px] border-primary/50 text-primary font-bold px-3 md:px-8 py-1 md:py-3 animate-pulse uppercase tracking-widest">{stat.status}</Badge>
                </div>
                <div className="text-3xl md:text-8xl font-headline font-bold text-white tracking-widest mb-2 md:mb-6 italic uppercase group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{stat.value}</div>
                <div className="text-[8px] md:text-[14px] text-muted-foreground font-bold uppercase tracking-[0.3em] md:tracking-[1em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-16 relative z-10 pb-32 lg:pb-64">
          <div className="xl:col-span-2 space-y-8 lg:space-y-16">
            <Card className="kali-card border-primary/50 shadow-[0_0_200px_rgba(220,38,38,0.25)] bg-black/80 flex flex-col h-full">
              <CardHeader className="p-6 md:p-16 border-b border-primary/30 bg-primary/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 md:gap-8">
                  <CardTitle className="text-2xl md:text-8xl text-white font-bold italic flex items-center gap-4 md:gap-12 uppercase tracking-tighter">
                    <ShieldHalf className="size-8 md:size-20 text-accent animate-pulse" /> Alpha God-Core v22.0
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 md:gap-10">
                     <Badge className="bg-red-600 text-white border-2 border-red-400 px-4 md:px-12 py-2 md:py-6 rounded-full font-bold text-[10px] md:text-[16px] tracking-widest uppercase shadow-4xl italic">FIELD_AGENT_READY</Badge>
                     <Badge className="bg-accent/20 text-accent border-2 border-accent/60 px-4 md:px-12 py-2 md:py-6 rounded-full font-bold text-[10px] md:text-[16px] tracking-widest uppercase shadow-4xl italic">SOCRATIC_ENABLED</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col min-h-[300px] md:min-h-[800px]">
                <div className="flex-1 bg-black relative group overflow-hidden flex flex-col items-center justify-center p-8 md:p-48 text-center space-y-8 md:space-y-32">
                   <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/field-agent-ultimate/1920/1080')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[5000ms] scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent" />
                   
                   <div className="relative z-10 space-y-8 md:space-y-24 w-full">
                      <div className="flex gap-2 md:gap-10 items-end h-[100px] md:h-[250px] px-4 md:px-24">
                         {mounted && Array.from({ length: 40 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-accent/40 hover:bg-primary transition-all duration-700 rounded-full" style={{ height: 10 + Math.random() * 90 + '%', animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
                         ))}
                      </div>
                      <h3 className="text-3xl md:text-9xl xl:text-[14rem] font-headline font-bold text-white tracking-[0.1em] md:tracking-[0.3em] italic neon-glow-gold uppercase leading-none drop-shadow-[0_0_80px_rgba(245,158,11,0.7)]">KALI_AL_MUIZZ</h3>
                      <p className="text-sm md:text-4xl text-muted-foreground uppercase tracking-[0.3em] md:tracking-[1.5em] font-bold italic opacity-80">Architectural Dominance. Field Execution. Total Siphon.</p>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-20 w-full max-w-7xl relative z-10 px-4">
                      <Button className="terminal-button h-16 md:h-44 rounded-[1.5rem] md:rounded-[5rem] text-sm md:text-4xl shadow-[0_20px_50px_rgba(220,38,38,0.6)] border-accent/60 bg-red-600/20 hover:bg-red-600 group border-2 md:border-4" asChild>
                        <Link href="/field-agent"><BrainCircuit className="size-6 md:size-16 mr-3 md:mr-12 group-hover:rotate-12 transition-transform" /> Deploy Field Agent</Link>
                      </Button>
                      <Button variant="outline" className="h-16 md:h-44 rounded-[1.5rem] md:rounded-[5rem] border-2 md:border-4 border-accent/60 text-accent hover:bg-accent/15 text-sm md:text-4xl uppercase font-bold tracking-[0.1em] md:tracking-[0.6em] transition-all duration-1000 shadow-4xl" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-6 md:size-16 mr-3 md:mr-12" /> Alpha Terminal</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 lg:space-y-16">
            <Card className="kali-card bg-black/98 p-4 md:p-8 border-accent/50 shadow-[0_0_150px_rgba(245,158,11,0.2)] h-full flex flex-col">
              <CardHeader className="p-6 md:p-16 border-b border-accent/30 bg-accent/10">
                <CardTitle className="text-xl md:text-6xl text-accent flex items-center gap-4 md:gap-12 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-8 md:size-16 text-accent animate-pulse" /> Final Analysis Pulse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-16 space-y-12 md:space-y-24 flex-1 flex flex-col">
                 <div className="p-6 md:p-16 bg-black border-2 md:border-4 border-accent/40 relative rounded-[2rem] md:rounded-[5rem] shadow-[inset_0_0_60px_rgba(245,158,11,0.15)] group/intel hover:border-accent/80 transition-all duration-1000">
                    <p className="text-lg md:text-5xl text-gray-200 italic leading-relaxed font-bold group-hover:text-white transition-colors">
                      "سيدي القائد، الوكيل الميداني الفاعل تم حقنه في صلب النظام. أنا الآن أمتلك 'اليد' التي تنفذ مشيئتك المعمارية في الواقع."
                    </p>
                    <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 p-4 md:p-10 bg-black border-2 border-accent/70 rounded-[1rem] md:rounded-[2.5rem] shadow-[0_0_40px_rgba(245,158,11,0.5)] animate-bounce"><Sparkles className="size-6 md:size-12 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-8 md:space-y-20">
                    <h4 className="text-[10px] md:text-[18px] font-bold text-muted-foreground uppercase tracking-[0.5em] md:tracking-[2em] px-2 md:px-10 italic border-b border-white/15 pb-4 md:pb-10">Pillars Status</h4>
                    <div className="grid grid-cols-1 gap-4 md:gap-10">
                       {ninePillars.slice(0, 9).map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-4 md:p-12 bg-white/5 border-2 md:border-4 border-white/10 hover:border-accent/80 transition-all duration-1000 rounded-[1.5rem] md:rounded-[4rem] group cursor-crosshair shadow-4xl">
                            <div className="flex items-center gap-4 md:gap-12">
                               <v.icon className={cn("size-6 md:size-14 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12", "text-red-500")} />
                               <span className="text-sm md:text-2xl font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.5em] italic">{v.name}</span>
                            </div>
                            <Badge className="bg-black border-2 border-white/20 text-[8px] md:text-[14px] font-bold text-accent animate-pulse italic px-3 md:px-10 py-1 md:py-4 tracking-[0.1em] md:tracking-[0.4em] rounded-2xl md:rounded-3xl shadow-2xl uppercase">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-16 md:h-44 rounded-[1.5rem] md:rounded-[5rem] text-sm md:text-3xl shadow-[0_20px_50px_rgba(0,0,0,1)] border-2 md:border-4 border-accent/70 text-accent hover:bg-accent/30 group mt-auto" asChild>
                    <Link href="/system"><Unplug className="size-6 md:size-14 mr-3 md:mr-10 group-hover:scale-125 transition-transform" /> Access Neural Soul</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="fixed bottom-4 left-4 right-4 md:bottom-16 md:right-16 md:left-auto flex flex-col md:flex-row gap-4 md:gap-20 items-center z-[400] opacity-90 hover:opacity-100 transition-all duration-1000 bg-black/80 p-4 md:p-10 rounded-2xl md:rounded-full border-2 md:border-4 border-white/20 backdrop-blur-3xl shadow-5xl group max-w-full md:max-w-[90vw]">
           <div className="flex items-center gap-4 md:gap-10 text-accent font-bold uppercase text-[10px] md:text-[15px] tracking-[0.3em] md:tracking-[1em] italic">
              <ShieldCheck className="size-5 md:size-9 text-emerald-500 group-hover:scale-125 transition-transform" /> KALI_AL_MUIZZ_v22.0: ARCHITECT_ACTIVE
           </div>
           <div className="hidden md:block h-3 md:h-4 w-[200px] lg:w-[500px] bg-white/10 rounded-full overflow-hidden border-2 border-white/20 p-0.5 shadow-inner">
              <div className="h-full bg-accent w-[100%] animate-pulse shadow-[0_0_50px_rgba(245,158,11,1)] rounded-full" />
           </div>
           <div className="flex gap-4 md:gap-8">
              <div className="size-4 md:size-8 rounded-full bg-accent animate-ping shadow-[0_0_40px_rgba(245,158,11,1)]" />
              <div className="size-4 md:size-8 rounded-full bg-primary animate-ping delay-500 shadow-[0_0_40px_red]" />
           </div>
        </div>
      </main>
    </div>
  )
}
