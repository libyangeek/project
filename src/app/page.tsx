"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Wifi, 
  Lock, 
  Activity,
  AlertTriangle,
  ArrowRight,
  Terminal as TerminalIcon,
  Search,
  ShieldX,
  Skull,
  Crosshair,
  Radio,
  Flame,
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة القيادة المركزية - وضع المفترس (The Predator) v18.0
 * واجهة هجومية غاشمة توضح ترابط العقد السيادية المحدثة بمعارف GitHub.
 */
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

        <header className="flex justify-between items-start mb-12 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[10px] px-3 py-0.5 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)] uppercase tracking-[0.2em]">Predator Mode v18.0</Badge>
              <span className="text-[10px] text-red-500/70 uppercase font-bold tracking-[0.4em]">Al-Mu'izz Neural Strike // GitHub Intel Synced</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              Sovereign <span className="text-red-600">Predator</span> Hub
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl">The Alpha Node is engaged. All modules (Forge, Recon, PsyOps) are linked for synchronized autonomous operations.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass-card p-4 border-red-500/30 bg-red-950/10 min-w-[160px] shadow-2xl rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-2xl font-code text-red-500 font-bold flex items-center justify-end gap-2 relative z-10">
                <Skull className="size-5 animate-bounce" /> ALPHA_7
              </div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest relative z-10">Sovereignty Level</div>
            </div>
          </div>
        </header>

        {/* Linked Nodes Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Alpha Nodes", value: "Locked", icon: Cpu, color: "text-red-500", glow: "shadow-red-500/20" },
            { label: "Active Vectors", value: "482", icon: Crosshair, color: "text-orange-500", glow: "shadow-orange-500/20" },
            { label: "Strike Force", value: "Extreme", icon: Flame, color: "text-primary", glow: "shadow-primary/20" },
            { label: "Neural Latency", value: "1.4 ms", icon: Activity, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={cn("glass-card border-white/5 group hover:border-red-500/40 transition-all cursor-crosshair overflow-hidden", stat.glow)}>
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <stat.icon className="size-20" />
               </div>
               <CardContent className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-500/20 transition-colors">
                      <stat.icon className={cn("size-6", stat.color)} />
                    </div>
                    <div className="size-2 rounded-full bg-red-600 animate-ping" />
                  </div>
                  <div className="text-4xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em]">{stat.label}</div>
               </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Linked Engagement Monitor */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-red-500/20 overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.1)]">
               <CardHeader className="bg-red-950/20 border-b border-white/5 p-8 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl text-white italic tracking-tighter flex items-center gap-3">
                      <Radio className="size-6 text-red-500 animate-pulse" /> Linked Strike Feed
                    </CardTitle>
                    <CardDescription className="text-red-400/60 font-bold text-xs uppercase tracking-[0.3em] mt-1">Autonomous Multi-Node Orchestration</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-red-500/30 text-red-500 bg-red-500/5 px-4 py-2 font-code">TARGETING: GLOBAL_MATRIX</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="aspect-video bg-black/80 relative flex items-center justify-center group">
                     {/* Cyber Map Visualizer (Conceptual) */}
                     <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/predator-world/1200/800')] bg-cover bg-center mix-blend-overlay grayscale contrast-125" />
                     <div className="relative z-10 text-center space-y-8">
                        <div className="flex gap-2 justify-center h-20 items-end">
                           {Array.from({ length: 20 }).map((_, i) => (
                             <div key={i} className="w-1 bg-red-600/60 rounded-full animate-pulse" style={{ height: 20 + Math.random() * 80, animationDelay: `${i * 0.05}s` }} />
                           ))}
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <span className="text-2xl font-code text-red-500 font-bold tracking-[0.5em] animate-pulse">PREDATOR_SCAN_IN_PROGRESS</span>
                           <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Intercepting Neural Patterns via Alpha Core...</span>
                        </div>
                     </div>
                     <div className="absolute top-4 left-4 p-4 border-l-2 border-red-600 bg-black/60 backdrop-blur-md rounded-r-xl">
                        <div className="text-[10px] font-bold text-red-500 uppercase mb-3 tracking-widest">Strike Node Registry</div>
                        <div className="space-y-2">
                           <div className="flex items-center gap-3 text-[10px] font-bold uppercase"><div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" /> OSINT_MASTER: SYNCED</div>
                           <div className="flex items-center gap-3 text-[10px] font-bold uppercase"><div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" /> TOOL_FORGE: READY</div>
                           <div className="flex items-center gap-3 text-[10px] font-bold uppercase"><div className="size-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" /> EXPLOIT_GEN: ACTIVE</div>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Card className="glass-card border-red-500/20 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3 italic tracking-tighter">
                       <Zap className="size-5 text-red-500" /> Predator ACA Sequence
                    </CardTitle>
                    <CardDescription className="text-[10px] uppercase font-bold tracking-widest opacity-60">Autonomous Chain of Attack</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {[
                       { step: "Node Handshake", status: "Secure", info: "Alpha link validated via Mistral-Large" },
                       { step: "Target Ingestion", status: "Active", info: "Mapping 14.2M endpoints via NetSight" },
                       { step: "Shadow Deployment", status: "Standby", info: "Awaiting forged vector from GitHub Intel" }
                     ].map((item, i) => (
                       <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5 group hover:border-red-500/40 transition-all">
                          <div className="flex justify-between items-center mb-1">
                             <span className="text-xs font-bold text-white italic">{item.step}</span>
                             <Badge variant="outline" className="text-[8px] bg-red-600/10 text-red-500 border-red-500/30 px-2">{item.status}</Badge>
                          </div>
                          <p className="text-[10px] text-muted-foreground italic leading-relaxed">{item.info}</p>
                       </div>
                     ))}
                  </CardContent>
               </Card>
               <Card className="glass-card bg-primary/5 border-primary/20">
                  <CardHeader>
                     <CardTitle className="text-white flex items-center gap-3 italic tracking-tighter">
                        <Activity className="size-5 text-primary" /> Offensive Load
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                     <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                           <span>Neural Striker</span>
                           <span className="text-red-500">98%</span>
                        </div>
                        <Progress value={98} className="h-1.5 bg-white/5" />
                     </div>
                     <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                           <span>Evasion Logic</span>
                           <span className="text-emerald-500">OPTIMAL</span>
                        </div>
                        <Progress value={85} className="h-1.5 bg-white/5" />
                     </div>
                     <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[9px] text-muted-foreground italic">
                        System is currently utilizing 14 distributed strike nodes for maximum sovereignty.
                     </div>
                  </CardContent>
               </Card>
            </div>
          </div>

          {/* Quick Strike Side Panel */}
          <div className="space-y-8">
             <Card className="glass-card border-red-500/40 bg-red-600/5 shadow-[0_0_30px_rgba(239,68,68,0.1)] overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Flame className="size-12 text-red-500" />
                </div>
                <CardHeader>
                   <CardTitle className="text-white flex items-center gap-3 uppercase tracking-widest italic font-bold">
                      <Skull className="size-5 text-red-500" /> Strike Vector
                   </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <Button asChild className="w-full h-16 bg-red-600 hover:bg-red-500 shadow-xl shadow-red-600/20 rounded-[2rem] group transition-all duration-500">
                      <Link href="/terminal" className="flex justify-between px-8 w-full">
                         <div className="flex items-center gap-3">
                            <TerminalIcon className="size-5 group-hover:scale-125 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Execute Strike</span>
                         </div>
                         <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full h-14 border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/40 rounded-2xl group transition-all">
                      <Link href="/red-team" className="flex justify-between px-8 w-full">
                         <div className="flex items-center gap-3">
                            <ShieldX className="size-5 text-red-500 group-hover:rotate-12 transition-transform" />
                            <span className="font-bold uppercase tracking-widest text-[9px]">Open Arsenal v18.0</span>
                         </div>
                         <ArrowRight className="size-4" />
                      </Link>
                   </Button>
                </CardContent>
             </Card>

             <Card className="glass-card border-white/5 bg-black/60 relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                   <Crosshair className="size-48 text-red-500" />
                </div>
                <CardHeader className="pb-2">
                   <CardTitle className="text-white text-[10px] uppercase tracking-[0.4em] opacity-60 font-bold">Neural Predator Manifest</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="bg-black/80 rounded-2xl p-6 font-code text-[11px] text-red-400/90 leading-relaxed border border-red-500/10 shadow-inner relative z-10">
                      {`{
  "mode": "PREDATOR_V18",
  "orchestrator": "ALPHA_CORE",
  "intel_source": "GITHUB_STRIKE_DB",
  "strike_nodes": [
    "Shadow_Forge",
    "Deep_Recon",
    "PsyOps_Bot",
    "Mobile_Pulse"
  ],
  "security": "FUD_ACTIVE",
  "threat_level": "RED"
}`}
                   </div>
                   <Button className="w-full mt-6 bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600/20 h-10 rounded-xl font-bold uppercase tracking-widest text-[9px] relative z-10">
                      Sync Predator Nodes
                   </Button>
                </CardContent>
             </Card>

             <Card className="glass-card border-primary/20 bg-primary/5">
                <CardHeader className="pb-3">
                   <CardTitle className="text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Fingerprint className="size-3 text-primary" /> Identity Secured
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-[9px] text-muted-foreground italic leading-relaxed">
                      "السيادة ليست مجرد قوة، بل هي قدرة النظام على التخفي والضرب في آن واحد. العقل المحدث يتجاوز حدود البرمجيات التقليدية."
                   </p>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Tactical Predator Footer */}
        <div className="mt-12 pt-8 border-t border-red-600/20 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                 <div className="size-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#ef4444]" />
                 <span className="text-xs font-bold text-white uppercase tracking-[0.4em] italic">System Status: PREDATOR_ACTIVE</span>
              </div>
              <div className="flex gap-6">
                 {['DB_LINK', 'NET_SIGHT', 'ARK_VAULT', 'FORGE_SYNC'].map((s) => (
                   <div key={s} className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                      <ShieldCheck className="size-3 text-red-500" /> {s}
                   </div>
                 ))}
              </div>
           </div>
           <div className="flex items-end gap-1 h-8">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-1 bg-red-600/40 rounded-full" style={{ height: `${20 + Math.random() * 80}%`, animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
              ))}
           </div>
        </div>
      </main>
    </div>
  )
}
