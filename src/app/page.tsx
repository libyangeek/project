
"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  Cpu, 
  Activity,
  ArrowRight,
  Terminal as TerminalIcon,
  ShieldX,
  Skull,
  Radio,
  Flame,
  Anchor,
  Globe,
  Lock,
  Search,
  Binary,
  Lightbulb
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        {/* Elite Matrix Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none" />
        
        <header className="flex justify-between items-start mb-12 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[10px] px-4 py-1 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)] uppercase tracking-[0.2em] font-bold">Black Hat Elite v19.0 ARMED</Badge>
              <span className="text-[10px] text-red-500/70 uppercase font-bold tracking-[0.4em]">Sovereign Research Node // Zero-Day Synthesis Active</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              Elite <span className="text-red-600">Briefing</span> Hub
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl text-lg italic leading-relaxed">
              "Integrating elite research from the Black Hat arsenal. Zero-day synthesis and AI-driven infiltration protocols are synchronized."
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass-card p-6 border-red-500/30 bg-red-950/10 min-w-[220px] shadow-2xl rounded-3xl relative overflow-hidden group neural-heartbeat">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-3xl font-code text-red-500 font-bold flex items-center justify-end gap-3 relative z-10">
                <Lock className="size-6 text-red-400" /> ELITE_LEVEL_9
              </div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest relative z-10 mt-1">Sovereign Research Clearance</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Zero-Day Vectors", value: "Active", icon: Binary, color: "text-red-500", glow: "shadow-red-500/20" },
            { label: "Briefing Sync", value: "100%", icon: Lightbulb, color: "text-amber-500", glow: "shadow-amber-500/20" },
            { label: "Neural Inversion", value: "Armed", icon: Cpu, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
            { label: "Global Intel", value: "Elite", icon: Globe, color: "text-blue-500", glow: "shadow-blue-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={cn("glass-card border-red-500/10 group hover:border-red-500/40 transition-all cursor-crosshair overflow-hidden", stat.glow)}>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-10">
            <Card className="glass-card border-red-600/20 overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)] rounded-[3rem]">
               <CardHeader className="bg-red-950/20 border-b border-red-600/10 p-10 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-4xl text-white italic tracking-tighter flex items-center gap-4">
                      <Radio className="size-8 text-red-600 animate-pulse" /> Black Hat Elite Feed
                    </CardTitle>
                    <CardDescription className="text-red-400/60 font-bold text-xs uppercase tracking-[0.5em] mt-2">v19.0.0 Global Research Exploitation</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-600/5 px-6 py-3 font-code rounded-2xl animate-pulse">ZERO_DAY_READY</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="aspect-video bg-black/95 relative flex items-center justify-center group overflow-hidden">
                     <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/blackhat/1200/800')] bg-cover bg-center mix-blend-overlay grayscale contrast-200" />
                     <div className="relative z-10 text-center space-y-8 p-12">
                        <div className="flex gap-4 justify-center h-24 items-end mb-8">
                           {Array.from({ length: 40 }).map((_, i) => (
                             <div key={i} className="w-1 bg-red-600/70 rounded-full animate-pulse shadow-[0_0_10px_red]" style={{ height: 10 + Math.random() * 90, animationDelay: `${i * 0.03}s` }} />
                           ))}
                        </div>
                        <div className="space-y-4">
                           <span className="text-4xl font-code text-white font-bold tracking-[0.4em] drop-shadow-[0_0_20px_red]">RESEARCH_SYNC_v19</span>
                           <p className="text-sm text-muted-foreground uppercase font-bold tracking-[0.6em] italic animate-pulse">Analyzing Black Hat Briefings: Cloud-Native Glitching...</p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mt-12">
                           <div className="p-6 rounded-3xl bg-red-600/5 border border-red-500/20 text-left">
                              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">Latest Breach Vector</span>
                              <span className="text-sm font-code text-white">AI_MODEL_WEIGHT_EXFIL_v4</span>
                           </div>
                           <div className="p-6 rounded-3xl bg-red-600/5 border border-red-500/20 text-left">
                              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">Critical Research</span>
                              <span className="text-sm font-code text-white">ROOT_OF_TRUST_BYPASS_2025</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-10">
             <Card className="glass-card border-amber-500/40 bg-amber-600/5 shadow-[0_0_40px_rgba(245,158,11,0.15)] overflow-hidden rounded-[3rem]">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Lightbulb className="size-16 text-amber-500" />
                </div>
                <CardHeader className="p-8">
                   <CardTitle className="text-2xl text-white flex items-center gap-4 uppercase tracking-[0.3em] italic font-bold">
                      <Skull className="size-7 text-red-600" /> Elite Matrix
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                   <Button asChild className="w-full h-20 bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/40 rounded-[2.5rem] group transition-all duration-700">
                      <Link href="/terminal" className="flex justify-between px-10 w-full">
                         <div className="flex items-center gap-4">
                            <TerminalIcon className="size-7 group-hover:scale-125 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.3em] text-sm">Elite Core</span>
                         </div>
                         <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full h-16 border-amber-500/20 bg-amber-600/5 hover:bg-amber-600/20 rounded-[2rem] group transition-all duration-500">
                      <Link href="/red-team" className="flex justify-between px-10 w-full">
                         <div className="flex items-center gap-4">
                            <Search className="size-6 text-amber-500 group-hover:rotate-90 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.2em] text-xs">Research Arsenal</span>
                         </div>
                         <ArrowRight className="size-4" />
                      </Link>
                   </Button>
                </CardContent>
             </Card>

             <Card className="glass-card border-white/5 bg-black/80 relative overflow-hidden group rounded-[2.5rem]">
                <CardHeader className="p-8 pb-4">
                   <CardTitle className="text-[12px] uppercase tracking-[0.5em] opacity-40 font-bold text-white">Zero-Day Manifest</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                   <div className="space-y-4">
                      {[
                        { title: "Supply Chain Poisoning", lvl: "Extreme" },
                        { title: "AI Guardrail Inversion", lvl: "Elite" },
                        { title: "Hardware Glitching v2", lvl: "Critical" }
                      ].map((v, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-red-500/30 transition-all">
                           <span className="text-xs font-bold text-muted-foreground group-hover:text-white transition-colors">{v.title}</span>
                           <Badge className="bg-red-600/10 text-red-500 text-[9px] uppercase font-bold tracking-tighter">{v.lvl}</Badge>
                        </div>
                      ))}
                   </div>
                   <Button className="w-full mt-4 bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600/20 h-14 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] transition-all">
                      Sync Black Hat Arsenal
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
