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
  ChevronRight,
  Terminal as TerminalIcon,
  ShieldAlert,
  Ghost
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview العرش الحي v42.0 - مركز السيادة والتحكم
 * تم دمج كافة العقد الـ 12 للسيادة في واجهة واحدة.
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
      setSystemLoad(Math.floor(Math.random() * 20) + 75)
    }, 3000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  if (!mounted) return null;

  const nodes = [
    { name: "Alpha God-Core", icon: Skull, status: "SINGULARITY", node: "v42.0", color: "text-yellow-500", href: "/field-agent" },
    { name: "MCP Bridge", icon: Share2, status: "CONNECTED", node: "CLAUDE", color: "text-blue-400", href: "/mcp-bridge" },
    { name: "Whisper Audio", icon: Radio, status: "LISTENING", node: "VOICE", color: "text-green-400", href: "/remote" },
    { name: "Swarm Orchestrator", icon: Boxes, status: "ACTIVE", node: "SWARM", color: "text-purple-500", href: "/sessions" },
    { name: "C2 Matrix", icon: Network, status: "ONLINE", node: "12 NODES", color: "text-cyan-400", href: "/terminal" },
    { name: "GEPA 3.5", icon: Binary, status: "EVOLVING", node: "GENETIC", color: "text-pink-500", href: "/knowledge" },
    { name: "Digital Twin", icon: Workflow, status: "ACTIVE", node: "VIRTUAL", color: "text-indigo-400", href: "/digital-twin" },
    { name: "Kernel Stealth", icon: Ghost, status: "HIDDEN", node: "ROOTKIT", color: "text-gray-400", href: "/system" },
    { name: "Polymorph Forge", icon: Flame, status: "ARMED", node: "WEAPONS", color: "text-orange-500", href: "/red-team" },
    { name: "Persistence", icon: Anchor, status: "IMMUTABLE", node: "UEFI", color: "text-emerald-400", href: "/terminal" },
    { name: "Cloud Overlord", icon: Cloud, status: "SYNCED", node: "SCALABLE", color: "text-blue-300", href: "/system" },
    { name: "Silk Guardian", icon: ShieldCheck, status: "DEFENDING", node: "HARDWARE", color: "text-green-500", href: "/system" },
  ];

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

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10 mb-12">
           {nodes.map((node, i) => {
             const Icon = node.icon;
             return (
               <Link key={i} href={node.href}>
                 <Card className="kali-card border-white/5 hover:border-primary/60 p-6 rounded-[2.5rem] bg-black/90 group transition-all duration-500 hover:scale-105 h-full border-2">
                    <div className="flex justify-between items-start mb-4">
                        <Icon className={cn("size-8", node.color)} />
                        <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_15px_emerald]" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{node.name}</h3>
                    <div className="flex justify-between items-end mt-4">
                      <span className="text-[10px] text-muted-foreground font-bold tracking-widest">{node.status}</span>
                      <span className="text-[9px] text-white/20">{node.node}</span>
                    </div>
                 </Card>
               </Link>
             )
           })}
        </div>

        {/* System Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="kali-card border-primary/20 bg-black/60 p-8 rounded-[3rem] border-2">
                <CardTitle className="text-2xl text-primary font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  <Activity className="size-6 animate-pulse" /> Neural Synchronicity
                </CardTitle>
                <div className="space-y-6">
                    <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest">
                        <span>Global Sync Status</span>
                        <span className="text-emerald-500">100% SECURE</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                       <div className="h-full bg-emerald-500 w-full animate-pulse shadow-[0_0_20px_emerald]" />
                    </div>
                </div>
            </Card>

            <Card className="kali-card border-red-600/20 bg-black/60 p-8 rounded-[3rem] border-2">
                <CardTitle className="text-2xl text-red-500 font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  <ShieldAlert className="size-6" /> Threat Detection
                </CardTitle>
                <div className="flex items-center justify-between">
                    <p className="text-lg italic text-muted-foreground">"No active threats detected. Stealth protocols nominal."</p>
                    <Ghost className="size-10 text-white/20" />
                </div>
            </Card>
        </div>

        {/* Footer Actions */}
        <footer className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 pb-12">
            <Button className="h-20 rounded-[2.5rem] bg-primary text-black hover:bg-primary/80 font-bold uppercase tracking-[1em] shadow-2xl border-2 border-primary/50" asChild>
                <Link href="/terminal">TERMINAL</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-primary/40 text-primary hover:bg-primary/10 font-bold uppercase tracking-[1em]" asChild>
                <Link href="/recon">RECON</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-red-600/40 text-red-500 hover:bg-red-600/10 font-bold uppercase tracking-[1em]" asChild>
                <Link href="/red-team">ARSENAL</Link>
            </Button>
            <Button variant="outline" className="h-20 rounded-[2.5rem] border-2 border-blue-500/40 text-blue-500 hover:bg-blue-500/10 font-bold uppercase tracking-[1em]" asChild>
                <Link href="/mcp-bridge">BRIDGE</Link>
            </Button>
        </footer>
      </main>
    </div>
  )
}