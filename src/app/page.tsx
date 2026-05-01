"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Activity,
  ArrowRight,
  Terminal as TerminalIcon,
  Search,
  ShieldX,
  Skull,
  Crosshair,
  Radio,
  Flame,
  Fingerprint,
  Smartphone,
  Anchor
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-500/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 relative overflow-hidden">
        {/* Predator Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none" />

        <header className="flex justify-between items-start mb-12 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[10px] px-3 py-0.5 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)] uppercase tracking-[0.2em]">Universal Predator v18.8 ARMED</Badge>
              <span className="text-[10px] text-red-500/70 uppercase font-bold tracking-[0.4em]">Al-Mu'izz Neural Strike // Sovereign Alpha Node</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              Sovereign <span className="text-red-600">Predator</span> Hub
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl text-lg italic">"The Universal Alpha Node is synchronized. Integrated with 2800+ BlackArch tools for absolute offensive dominance."</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass-card p-6 border-red-500/30 bg-red-950/10 min-w-[200px] shadow-2xl rounded-3xl relative overflow-hidden group neural-heartbeat">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-3xl font-code text-red-500 font-bold flex items-center justify-end gap-3 relative z-10">
                <Skull className="size-6 animate-bounce" /> SUPREME_LEVEL_8
              </div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest relative z-10 mt-1">Sovereignty Status</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Strike Capacity", value: "99.9%", icon: Flame, color: "text-red-500", glow: "shadow-red-500/20" },
            { label: "BlackArch Sync", value: "2800+", icon: Cpu, color: "text-red-400", glow: "shadow-red-400/20" },
            { label: "Neural Latency", value: "0.2 ms", icon: Activity, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
            { label: "Operational Load", value: "Optimal", icon: Anchor, color: "text-orange-500", glow: "shadow-orange-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={cn("glass-card border-red-500/10 group hover:border-red-500/40 transition-all cursor-crosshair overflow-hidden", stat.glow)}>
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <stat.icon className="size-24" />
               </div>
               <CardContent className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-colors">
                      <stat.icon className={cn("size-7", stat.color)} />
                    </div>
                    <div className="size-2.5 rounded-full bg-red-600 animate-ping shadow-[0_0_8px_red]" />
                  </div>
                  <div className="text-4xl font-bold text-white tracking-tighter mb-1 uppercase">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">{stat.label}</div>
               </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-red-600/20 overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)] rounded-[3rem]">
               <CardHeader className="bg-red-950/20 border-b border-red-500/10 p-10 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-4xl text-white italic tracking-tighter flex items-center gap-4">
                      <Radio className="size-8 text-red-600 animate-pulse" /> Universal Strike Feed
                    </CardTitle>
                    <CardDescription className="text-red-400/60 font-bold text-xs uppercase tracking-[0.5em] mt-2">v18.8 Multi-Vector Autonomous Execution</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-red-500/30 text-red-500 bg-red-600/5 px-6 py-3 font-code rounded-2xl">ALPHA_ENCODED</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="aspect-video bg-black/90 relative flex items-center justify-center group overflow-hidden">
                     <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/predator-world/1200/800')] bg-cover bg-center mix-blend-overlay grayscale contrast-150" />
                     <div className="relative z-10 text-center space-y-10">
                        <div className="flex gap-3 justify-center h-28 items-end">
                           {Array.from({ length: 30 }).map((_, i) => (
                             <div key={i} className="w-1.5 bg-red-600/80 rounded-full animate-pulse shadow-[0_0_10px_red]" style={{ height: 20 + Math.random() * 100, animationDelay: `${i * 0.05}s` }} />
                           ))}
                        </div>
                        <div className="flex flex-col items-center gap-3">
                           <span className="text-3xl font-code text-red-600 font-bold tracking-[0.6em] animate-pulse drop-shadow-[0_0_10px_red]">UNIVERSAL_NODE_SYNCED</span>
                           <span className="text-[12px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic">Orchestrating 2800+ BlackArch Strike Vectors...</span>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
             <Card className="glass-card border-red-600/40 bg-red-600/5 shadow-[0_0_40px_rgba(239,68,68,0.2)] overflow-hidden rounded-[3rem]">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Flame className="size-16 text-red-500" />
                </div>
                <CardHeader className="p-8">
                   <CardTitle className="text-2xl text-white flex items-center gap-4 uppercase tracking-[0.3em] italic font-bold">
                      <Skull className="size-7 text-red-600" /> Engage Alpha
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-5">
                   <Button asChild className="w-full h-20 bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/30 rounded-[2.5rem] group transition-all duration-700">
                      <Link href="/terminal" className="flex justify-between px-10 w-full">
                         <div className="flex items-center gap-4">
                            <TerminalIcon className="size-7 group-hover:scale-125 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.3em] text-sm">Alpha Core</span>
                         </div>
                         <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full h-16 border-white/10 bg-white/5 hover:bg-red-600/20 hover:border-red-600/40 rounded-[2rem] group transition-all duration-500">
                      <Link href="/red-team" className="flex justify-between px-10 w-full">
                         <div className="flex items-center gap-4">
                            <ShieldX className="size-6 text-red-600 group-hover:rotate-12 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.2em] text-xs">BlackArch Arsenal</span>
                         </div>
                         <ArrowRight className="size-4" />
                      </Link>
                   </Button>
                </CardContent>
             </Card>

             <Card className="glass-card border-white/5 bg-black/60 relative overflow-hidden group rounded-[2.5rem]">
                <div className="absolute -bottom-10 -right-10 p-10 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                   <Crosshair className="size-56 text-red-600" />
                </div>
                <CardHeader className="p-8 pb-4">
                   <CardTitle className="text-[12px] uppercase tracking-[0.5em] opacity-40 font-bold text-white">Neural Heartbeat</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                   <div className="bg-black/90 rounded-[2rem] p-8 font-code text-[12px] text-red-400/90 leading-loose border border-red-500/20 shadow-inner relative z-10">
                      {`{
  "predator_version": "18.8.0",
  "lexicon": "Kali + BlackArch",
  "total_tools": 2854,
  "node_status": "SYNCHRONIZED",
  "heartbeat": "0.2ms",
  "mode": "UNIVERSAL_STRIKE"
}`}
                   </div>
                   <Button className="w-full mt-8 bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600/20 h-14 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] relative z-10 transition-all">
                      Sync Universal Node
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
