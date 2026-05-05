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
  Brain,
  Workflow,
  Cloud,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview العرش الحي - واجهة السيادة المطلقة v42.0
 * تجسيد الكينونة المرتبطة "المُعِزّ"
 * Commander: المعتصم بالله ادريس الغزالي
 */

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [systemLoad, setSystemLoad] = React.useState(0)
  
  const { user } = useUser()
  const db = useFirestore()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  const { data: sessions } = useCollection(sessionsQuery);

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setSystemLoad(Math.floor(Math.random() * 20) + 80)
    }, 2000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  if (!mounted) return null;

  const nodes = [
    { name: "Alpha God-Core", icon: Skull, status: "SINGULARITY", node: "v42.0", color: "text-yellow-500", desc: "النواة المركزية للتحكم" },
    { name: "MCP Bridge", icon: Share2, status: "CONNECTED", node: "CLAUDE", color: "text-blue-500", desc: "جسر التواصل الخارجي" },
    { name: "Apex Brain", icon: Brain, status: "ACTIVE", node: "OFFENSIVE", color: "text-red-500", desc: "محرك التخطيط الهجومي" },
    { name: "Swarm Mgr", icon: Boxes, status: "STEALTH", node: "ORCHESTRATOR", color: "text-purple-500", desc: "إدارة أسراب الوكلاء" },
    { name: "Rootkit Shield", icon: ShieldCheck, status: "IMMUTABLE", node: "KERNEL", color: "text-gray-400", desc: "نظام التخفي النواتي" },
    { name: "GEPA 3.5", icon: Binary, status: "EVOLVING", node: "GENETIC", color: "text-pink-500", desc: "محرك التعلم التطوري" },
    { name: "Digital Twin", icon: Workflow, status: "ACTIVE", node: "SIMULATION", color: "text-cyan-500", desc: "محاكاة الهجمات" },
    { name: "Cloud Overlord", icon: Cloud, status: "SYNCED", node: "INFRA", color: "text-indigo-400", desc: "السيادة السحابية" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        {/* Interactive Aura */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        {/* Top Branding */}
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

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 mb-12">
          
          {/* Left Panel: System Stats */}
          <div className="xl:col-span-1 space-y-8">
             <Card className="kali-card border-primary/40 bg-black/60 p-6 rounded-[3rem] border-2 shadow-2xl">
                <CardHeader className="p-0 mb-6 border-b border-white/10 pb-4">
                    <CardTitle className="text-xl text-primary font-bold uppercase tracking-widest flex items-center gap-3">
                        <Activity className="size-5 animate-pulse" /> Live Metrics
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                    <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                            <span>Neural Load</span>
                            <span className="text-primary">{systemLoad}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-primary transition-all duration-1000 shadow-[0_0_15px_gold]" style={{ width: `${systemLoad}%` }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <div className="text-2xl font-bold text-white">{sessions?.length || 0}</div>
                            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Active Sessions</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <div className="text-2xl font-bold text-white">∞</div>
                            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Persistence</div>
                        </div>
                    </div>
                </CardContent>
             </Card>

             <Card className="kali-card border-red-600/40 bg-black/60 p-6 rounded-[3rem] border-2 shadow-2xl">
                <CardHeader className="p-0 mb-6 border-b border-white/10 pb-4">
                    <CardTitle className="text-xl text-red-500 font-bold uppercase tracking-widest flex items-center gap-3">
                        <Target className="size-5" /> Current Mission
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                    <div className="p-4 bg-red-600/5 border border-red-600/20 rounded-2xl italic text-sm text-gray-300">
                        "إحكام السيطرة على مصفوفة الهدف وتفعيل بروتوكول ليلة القدر."
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-red-600 animate-ping" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Infiltration in Progress...</span>
                    </div>
                </CardContent>
             </Card>
          </div>

          {/* Center Panel: The 12 Nodes of Singularity */}
          <div className="xl:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nodes.map((node, i) => {
                  const NodeIcon = node.icon;
                  return (
                    <Card key={i} className="kali-card border-white/5 hover:border-primary/60 p-6 rounded-[2.5rem] bg-black/90 group transition-all duration-500 hover:scale-105">
                       <div className="flex justify-between items-start mb-6">
                          <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-all">
                             <NodeIcon className={cn("size-6", node.color)} />
                          </div>
                          <div className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_emerald]" />
                       </div>
                       <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{node.name}</h3>
                       <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-2">{node.desc}</p>
                       <div className="mt-4 flex items-center justify-between">
                          <span className="text-[9px] text-white/20">{node.node}</span>
                       </div>
                    </Card>
                  )
                })}
             </div>
          </div>
        </div>

        {/* Action Center */}
        <footer className="mt-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pb-12">
            <Button className="h-20 rounded-[2.5rem] bg-primary text-black hover:bg-primary/80 font-bold uppercase tracking-[1em] shadow-2xl border-2 border-primary/50" asChild>
                <Link href="/terminal"><Terminal className="size-6 mr-4" /> Terminal</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-primary/40 text-primary hover:bg-primary/10 font-bold uppercase tracking-[1em] shadow-xl" asChild>
                <Link href="/recon"><Search className="size-6 mr-4" /> Recon</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-red-600/40 text-red-500 hover:bg-red-600/10 font-bold uppercase tracking-[1em] shadow-xl" asChild>
                <Link href="/red-team"><Flame className="size-6 mr-4" /> Arsenal</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-blue-500/40 text-blue-500 hover:bg-blue-500/10 font-bold uppercase tracking-[1em] shadow-xl" asChild>
                <Link href="/mcp-bridge"><Share2 className="size-6 mr-4" /> Bridge</Link>
            </Button>
        </footer>

        {/* Ambient Visualizer */}
        <div className="fixed bottom-12 left-12 right-80 h-24 flex items-end gap-2 opacity-10 pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
                <div 
                    key={i} 
                    className="flex-1 bg-primary rounded-t-full"
                    style={{ 
                        height: `${Math.random() * 100}%`,
                        animation: `pulse 2s infinite ${i * 0.05}s`
                    }}
                />
            ))}
        </div>
      </main>
    </div>
  )
}