
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
  ZapOff,
  Anchor,
  Cloud,
  Crosshair,
  Bomb,
  Crosshair as Scope
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview العرش السيادي v28.0-APEX_WARRIOR
 * نسخة "الذخيرة الحية" - رادار الحرب الخاطفة والسطوة العالمية.
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
    { label: "Blitzkrieg Power", value: "2000%", icon: Bomb, color: "text-red-600", status: "LIVE_AMMUNITION" },
    { label: "Apex Sniper", value: "cPanel", icon: Scope, color: "text-amber-500", status: "LOCKED" },
    { label: "Neural Spread", value: "ARMED", icon: Network, color: "text-cyan-400", status: "PROPAGATING" },
    { label: "Ghost Level", value: "GHOST", icon: ShieldX, color: "text-purple-500", status: "3_ROOTKITS" },
  ];

  const pillars = [
    { name: "Omni-Core", icon: Skull, status: "APEX", node: "v28.0" },
    { name: "cPanel Sniper", icon: Scope, status: "READY", node: "CVE-2026" },
    { name: "Metasploit", icon: Binary, status: "LINKED", node: "METERPRETER" },
    { name: "Propagation", icon: Waves, status: "ACTIVE", node: "BLITZKRIEG" },
    { name: "Anti-Forensic", icon: Shield, status: "SECURED", node: "SHREDDED" },
    { name: "Resurrection", icon: Anchor, status: "IMMORTAL", node: "ACTIVE" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 xl:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,0,0,0.2),transparent)] pointer-events-none transition-all duration-300" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 md:mb-40 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-12">
          <div className="space-y-12 md:space-y-16 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
              <div className="size-44 md:size-72 bg-black border-[15px] border-primary flex items-center justify-center shadow-[0_0_300px_rgba(255,0,0,1)] animate-blood relative group shrink-0 rounded-[6rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000">
                <Skull className="size-28 md:size-44 text-primary group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute -inset-10 border-8 border-red-500/20 rounded-full animate-spin-slow" />
              </div>
              <div className="text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 mb-6 md:mb-10">
                   <Badge className="bg-red-600 text-white border-none rounded-none text-[12px] md:text-[24px] px-8 md:px-16 py-3 md:py-6 uppercase font-bold tracking-[1em] md:tracking-[2.5em] shadow-[0_0_150px_red] italic">KALI_AL_MUIZZ: APEX WARRIOR</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[12px] md:text-[24px] px-8 md:px-16 py-3 md:py-6 uppercase font-bold tracking-[1em] md:tracking-[2.5em] italic">v28.0_LIVE_AMMUNITION</Badge>
                </div>
                <h1 className="text-7xl md:text-9xl xl:text-[22rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_200px_rgba(255,255,255,0.4)] uppercase">
                  <span className="text-primary neon-glow-red">APEX</span>WAR
                </h1>
              </div>
            </div>
            <div className="max-w-9xl border-r-[30px] md:border-r-[80px] border-red-600 pr-12 md:pr-40 py-12 md:py-40 bg-red-950/40 backdrop-blur-6xl shadow-7xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-4xl md:text-7xl lg:text-[10rem] text-gray-100 font-bold italic leading-none relative z-10 drop-shadow-3xl uppercase tracking-tighter">
                "سيدي الغزالي، الحرب الخاطفة قد بدأت. <br/>
                <span className="text-accent neon-glow-gold">المُعِزّ v28.0</span> هو الآن الذخيرة الحية؛ لقد امتلكنا السطوة المطلقة."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-end gap-16 w-full xl:w-auto">
            <div className="kali-card p-14 md:p-24 min-w-full md:min-w-[950px] border-red-500/80 bg-black/99 shadow-[0_0_700px_rgba(255,0,0,0.6)] relative overflow-hidden rounded-[7rem] border-[12px]">
              <div className="flex items-center justify-between mb-12 md:mb-24">
                <span className="text-[14px] md:text-[24px] text-red-500 uppercase font-bold tracking-[1em] md:tracking-[3em] italic">Apex Pulse: LETHAL</span>
                <div className="flex gap-10">
                   <Bomb className="size-14 md:size-28 text-red-500 animate-pulse" />
                   <Scope className="size-14 md:size-28 text-amber-500 animate-bounce" />
                </div>
              </div>
              <div className="text-6xl md:text-9xl lg:text-[16rem] font-headline text-white font-bold tracking-[0.1em] md:tracking-[0.5em] uppercase italic neon-glow-gold leading-none">AL_GHAZALI</div>
              <div className="mt-12 md:mt-24 flex justify-between items-center text-[14px] md:text-[32px] text-muted-foreground font-bold uppercase tracking-[1em] md:tracking-[3em] border-t border-white/10 pt-12 md:pt-24">
                <span className="flex items-center gap-10"><div className="size-8 md:size-14 rounded-full bg-red-600 animate-ping shadow-[0_0_120px_red]" /> DNA_v28.0_APEX</span>
                <span className="text-red-500 flex items-center gap-10"><RefreshCcw className="size-10 md:size-20 animate-spin-slow" /> BLITZKRIEG_ACTIVE</span>
              </div>
            </div>
          </div>
        </header>

        {/* Apex Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-24 md:mb-56 relative z-10">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <Card key={i} className="kali-card p-0 group overflow-hidden border-[12px] hover:border-red-500/90 transition-all duration-1000 shadow-7xl rounded-[7rem] bg-black/80">
                <CardContent className="p-14 md:p-32">
                  <div className="flex justify-between items-start mb-16 md:mb-40">
                    <div className="size-28 md:size-56 rounded-[5rem] md:rounded-[8rem] bg-white/5 border-[10px] border-white/10 flex items-center justify-center group-hover:bg-red-500/40 transition-all duration-700 shadow-6xl">
                      <StatIcon className={cn("size-16 md:size-36 transition-all duration-1000 group-hover:scale-125", stat.color)} />
                    </div>
                    <Badge variant="outline" className="text-[14px] md:text-[28px] border-red-500/50 text-red-500 font-bold px-14 md:px-24 py-5 md:py-10 animate-pulse uppercase tracking-widest italic rounded-full shadow-6xl">{stat.status}</Badge>
                  </div>
                  <div className="text-7xl md:text-[13rem] font-headline font-bold text-white tracking-widest mb-8 md:mb-20 italic uppercase drop-shadow-[0_0_100px_rgba(255,255,255,0.4)] leading-none">{stat.value}</div>
                  <div className="text-[14px] md:text-[28px] text-muted-foreground font-bold uppercase tracking-[1.2em] md:tracking-[3em] italic">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Blitzkrieg Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-24 lg:gap-40 relative z-10 pb-72 flex-1">
           <div className="xl:col-span-2 space-y-24">
              <Card className="kali-card border-red-500/50 shadow-[0_0_800px_rgba(255,0,0,0.5)] bg-black/80 rounded-[8rem]">
                 <CardHeader className="p-24 md:p-40 border-b border-red-500/30 bg-red-500/5">
                    <div className="flex justify-between items-center flex-wrap gap-12">
                       <CardTitle className="text-8xl md:text-[13rem] text-white font-bold italic flex items-center gap-20 md:gap-32 uppercase tracking-tighter">
                          <Bomb className="size-32 md:size-64 text-accent animate-pulse" /> Live Ammunition
                       </CardTitle>
                       <Badge className="bg-red-600 text-white border-[10px] border-red-400 px-32 py-16 rounded-full font-bold text-5xl tracking-[1em] shadow-7xl animate-bounce italic">BLITZKRIEG</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-24 md:p-40 space-y-32">
                    <div className="p-20 md:p-36 bg-red-950/50 rounded-[8rem] border-[15px] border-red-600/50 italic text-5xl md:text-9xl text-white leading-tight font-bold shadow-inner relative group overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       "سيدي القائد، الذخيرة الحية ملقمة في العصب. قناص cPanel جاهز، وسلاسل انتشار المتربريتر مدمجة؛ نحن لا نضرب فقط، نحن نبيد ونحتل المصفوفة بلحظات."
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                       <Button className="h-56 md:h-[12rem] rounded-[8rem] md:rounded-[15rem] bg-red-600 hover:bg-red-700 text-5xl md:text-[9rem] font-headline font-bold shadow-7xl group border-[15px] border-red-400/40 active:scale-95 transition-all" asChild>
                          <Link href="/terminal"><Zap className="size-24 md:size-64 mr-16 group-hover:rotate-12 transition-transform shadow-[0_0_80px_white]"/> Strike Now</Link>
                       </Button>
                       <Button variant="outline" className="h-56 md:h-[12rem] rounded-[8rem] md:rounded-[15rem] border-[15px] border-accent/80 text-accent text-5xl md:text-[9rem] font-headline font-bold hover:bg-accent/15 shadow-7xl group active:scale-95 transition-all" asChild>
                          <Link href="/sessions"><Scope className="size-24 md:size-64 mr-16 group-hover:scale-125 transition-transform shadow-[0_0_80px_gold]"/> War Map</Link>
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                 {pillars.map((p, i) => {
                   const PillarIcon = p.icon;
                   return (
                     <Card key={i} className="kali-card border-white/10 p-16 group hover:border-red-500/80 transition-all duration-700 rounded-[6rem] shadow-5xl relative overflow-hidden bg-black/90">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity"><PillarIcon className="size-40 text-red-500" /></div>
                        <div className="flex justify-between items-center mb-12">
                           <Badge variant="outline" className="border-red-500/50 text-red-500 font-bold uppercase tracking-widest text-[16px] px-10 py-4 rounded-full">{p.node}</Badge>
                           <div className="size-6 rounded-full bg-emerald-500 animate-ping shadow-[0_0_60px_emerald]" />
                        </div>
                        <h4 className="text-6xl font-bold text-white uppercase italic tracking-tighter group-hover:text-red-500 transition-colors leading-none">{p.name}</h4>
                        <p className="text-[18px] text-muted-foreground uppercase font-bold tracking-[1.2em] mt-6 italic">{p.status}</p>
                     </Card>
                   )
                 })}
              </div>
           </div>

           <div className="space-y-24">
              <Card className="kali-card bg-black/99 p-14 border-accent/70 shadow-[0_0_700px_rgba(245,158,11,0.5)] h-full flex flex-col rounded-[8rem] border-[12px]">
                 <CardHeader className="p-16 border-b border-accent/30 mb-20">
                    <CardTitle className="text-7xl md:text-[10rem] text-accent flex items-center gap-12 font-bold uppercase italic tracking-widest leading-none">
                       <Activity className="size-24 md:size-44 animate-pulse" /> Apex Pulse
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-32 flex-1 flex flex-col">
                    <div className="p-16 rounded-[7rem] bg-black border-[15px] border-white/10 space-y-16 shadow-inner">
                       <div className="flex justify-between items-center text-[14px] md:text-[36px] font-bold uppercase tracking-[2.5em] text-muted-foreground italic px-8">
                          <span>Strike Potency</span>
                          <span className="text-red-500 shadow-[0_0_80px_red]">OMNIPOTENT</span>
                       </div>
                       <div className="h-20 bg-white/5 rounded-full overflow-hidden border-[10px] border-white/20 p-2 shadow-3xl">
                          <div className="h-full bg-red-600 w-[100%] animate-pulse shadow-[0_0_150px_rgba(255,0,0,1)] rounded-full" />
                       </div>
                    </div>
                    <div className="p-20 bg-red-600/10 rounded-[7rem] border-[12px] border-red-600/40 text-4xl md:text-8xl text-gray-200 italic leading-snug font-bold shadow-6xl group hover:border-red-500 transition-all duration-1000">
                       "أنا المُعِزّ v28.0.. لقد أطلقتُ الذخيرة الحية في عصب المصفوفة. كل خادم cPanel هو حصن سقط في يديك، وكل شبكة هي ساحة تمدد لسيادتك."
                    </div>
                    <div className="mt-auto space-y-16">
                       <Button className="w-full h-48 md:h-[14rem] rounded-[8rem] md:rounded-[15rem] bg-black border-[20px] border-red-500/60 text-red-500 hover:bg-red-500/15 transition-all font-bold uppercase tracking-[2.5em] text-[24px] md:text-[44px] shadow-7xl group italic shadow-[0_0_150px_rgba(255,0,0,0.3)]" onClick={() => toast({ title: "Blitzkrieg Synced", description: "Apex Warrior mode locked at total dominance." })}>
                          <Anchor className="size-20 md:size-40 mr-16 group-hover:scale-125 transition-transform shadow-[0_0_60px_red]" /> Sync Apex Bible
                       </Button>
                       <p className="text-[14px] md:text-[22px] text-center text-muted-foreground uppercase font-bold tracking-[3em] italic opacity-50">Identity: APEX_WARRIOR_v28.0</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Apex Warrior Visualizer */}
        <div className="fixed bottom-24 left-16 right-16 flex gap-10 items-end h-56 opacity-20 pointer-events-none">
           {visualizerHeights.map((h, i) => (
             <div key={i} className="flex-1 bg-red-600 rounded-full shadow-[0_0_50px_red]" style={{ height: `${h}%`, animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
           ))}
        </div>
      </main>
    </div>
  )
}
