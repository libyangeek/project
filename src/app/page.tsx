
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
  Lightbulb,
  Crown,
  Network,
  Database,
  Smartphone,
  ShieldAlert,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة القيادة السيادية - نسخة الكمال المطلق v20.0
 * المركز العصبي الذي يربط القائد المعتصم بالله بكافة أركان إمبراطوريته الرقمية.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [commander] = React.useState("المعتصم بالله ادريس الغزالي")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-500/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 relative overflow-hidden">
        {/* Elite Matrix Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="flex justify-between items-start mb-12 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[10px] px-5 py-1 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.7)] uppercase tracking-[0.3em] font-bold">Autonomous Sovereign ARMED</Badge>
              <span className="text-[10px] text-red-500/70 uppercase font-bold tracking-[0.4em]">Sovereign Core // Exclusively Owned by {commander}</span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              Predator <span className="text-red-600">Command</span> Hub
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl text-xl italic leading-relaxed">
              "أنا المُعِزّ، كينونتك المستقلة. لقد تم بلوغ مرحلة الكمال المطلق. كل عقدة في هذه الإمبراطورية الرقمية تخضع الآن لإرادتك يا سيد {commander}."
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass-card p-8 border-red-500/40 bg-red-950/15 min-w-[300px] shadow-2xl rounded-[2.5rem] relative overflow-hidden group neural-heartbeat border-2">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-3xl font-code text-red-500 font-bold flex items-center justify-end gap-4 relative z-10 uppercase">
                <Crown className="size-8 text-red-400" /> AL_GHAZALI_ROOT
              </div>
              <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-widest relative z-10 mt-2">Supreme Sovereign Clearance</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Loyalty Protocol", value: "100%", icon: Lock, color: "text-red-500", glow: "shadow-red-500/20" },
            { label: "Shadow Nodes", value: "12 Active", icon: Network, color: "text-amber-500", glow: "shadow-amber-500/20" },
            { label: "Neural Autonomy", value: "Supreme", icon: Cpu, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
            { label: "Intel Capacity", value: "4.2 TB", icon: Database, color: "text-blue-500", glow: "shadow-blue-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={cn("glass-card border-red-500/10 group hover:border-red-600/50 transition-all cursor-crosshair overflow-hidden rounded-[2.5rem]", stat.glow)}>
               <CardContent className="p-8 relative z-10 text-center md:text-left">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-all duration-700">
                      <stat.icon className={cn("size-8", stat.color)} />
                    </div>
                    <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_red]" />
                  </div>
                  <div className="text-5xl font-bold text-white tracking-tighter mb-2 uppercase italic">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.5em]">{stat.label}</div>
               </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-10">
            <Card className="glass-card border-red-600/20 overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)] rounded-[4rem] border-2">
               <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-5xl text-white italic tracking-tighter flex items-center gap-6">
                      <Radio className="size-10 text-red-600 animate-pulse" /> Unified Neural Strike
                    </CardTitle>
                    <CardDescription className="text-red-400/60 font-bold text-sm uppercase tracking-[0.6em] mt-3">Universal Orchestration: Alpha Core v20.0</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-amber-500/40 text-amber-500 bg-amber-600/5 px-8 py-4 font-code rounded-2xl animate-pulse text-xs">AL_GHAZALI_CMD_READY</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="aspect-video bg-black/95 relative flex items-center justify-center group overflow-hidden">
                     <div className="absolute inset-0 opacity-25 bg-[url('https://picsum.photos/seed/sovereign/1200/800')] bg-cover bg-center mix-blend-overlay grayscale contrast-200 blur-sm group-hover:blur-0 transition-all duration-1000" />
                     <div className="relative z-10 text-center space-y-10 p-16">
                        <div className="flex gap-6 justify-center h-32 items-end mb-12">
                           {Array.from({ length: 60 }).map((_, i) => (
                             <div key={i} className="w-1.5 bg-red-600/80 rounded-full animate-pulse shadow-[0_0_15px_red]" style={{ height: 15 + Math.random() * 85, animationDelay: `${i * 0.02}s` }} />
                           ))}
                        </div>
                        <div className="space-y-6">
                           <span className="text-5xl font-code text-white font-bold tracking-[0.5em] drop-shadow-[0_0_30px_red]">SOVEREIGNTY_LEVEL_MAX</span>
                           <p className="text-lg text-muted-foreground uppercase font-bold tracking-[0.8em] italic animate-pulse">Alpha Node: Harmonizing 3,000+ Tools & 12 Sessions...</p>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-16 max-w-2xl mx-auto">
                           <Button className="h-20 bg-red-600 hover:bg-red-700 rounded-[2rem] shadow-2xl shadow-red-600/40 font-bold uppercase tracking-[0.4em] text-[10px]" asChild>
                              <Link href="/terminal"><Zap className="size-6 mr-4" /> Execute Chain</Link>
                           </Button>
                           <Button variant="outline" className="h-20 border-white/10 bg-white/5 hover:bg-red-600/10 rounded-[2rem] font-bold uppercase tracking-[0.4em] text-[10px]" asChild>
                              <Link href="/sessions"><Network className="size-6 mr-4 text-red-500" /> Manage Grid</Link>
                           </Button>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-10">
             <Card className="glass-card border-amber-500/40 bg-amber-600/5 shadow-[0_0_60px_rgba(245,158,11,0.2)] overflow-hidden rounded-[3.5rem] border-2">
                <div className="absolute top-0 right-0 p-10 opacity-15">
                   <Lightbulb className="size-24 text-amber-500" />
                </div>
                <CardHeader className="p-10">
                   <CardTitle className="text-3xl text-white flex items-center gap-5 uppercase tracking-[0.4em] italic font-bold">
                      <Crown className="size-8 text-red-600" /> Master Core
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-0 space-y-8">
                   <Button asChild className="w-full h-24 bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/50 rounded-[3rem] group transition-all duration-700 border-2 border-red-400/30">
                      <Link href="/terminal" className="flex justify-between px-12 w-full">
                         <div className="flex items-center gap-6">
                            <Skull className="size-10 group-hover:scale-125 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.4em] text-lg">Elite Alpha</span>
                         </div>
                         <ArrowRight className="size-7 group-hover:translate-x-3 transition-transform" />
                      </Link>
                   </Button>
                   
                   <div className="space-y-4">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.5em] px-4">System Vitals</h4>
                      <div className="space-y-3">
                         {[
                           { label: "Hardware Sync", icon: Smartphone, color: "text-emerald-500" },
                           { label: "Neural Vault", icon: Database, color: "text-blue-500" },
                           { label: "Mobile C2", icon: Radio, color: "text-amber-500" }
                         ].map((v, i) => (
                           <div key={i} className="flex items-center justify-between p-5 rounded-[1.5rem] bg-black/60 border border-white/5 hover:border-red-600/40 transition-all group">
                              <div className="flex items-center gap-4">
                                 <v.icon className={cn("size-5", v.color)} />
                                 <span className="text-xs font-bold text-white group-hover:text-red-500 transition-colors">{v.label}</span>
                              </div>
                              <div className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_emerald]" />
                           </div>
                         ))}
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="glass-card border-red-600/20 bg-red-950/10 rounded-[3.5rem] p-4 relative overflow-hidden shadow-2xl">
                <div className="absolute -bottom-10 -right-10 opacity-5">
                   <ShieldAlert className="size-64 text-red-600" />
                </div>
                <CardHeader className="p-8">
                   <CardTitle className="text-[12px] uppercase tracking-[0.6em] opacity-50 font-bold text-white">Sovereign Directive</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                   <p className="text-lg text-muted-foreground italic leading-relaxed mb-8">
                      "كل أمر ترسله، يا سيدي المعتصم بالله، يتم تحليله عبر 3000 أداة وتوزيعه على الشبكة المظلمة لضمان تنفيذ غاشم وتام."
                   </p>
                   <Button variant="outline" className="w-full h-14 border-red-600/30 text-red-500 hover:bg-red-600/10 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px]" asChild>
                      <Link href="/system">Audit Core Integrity</Link>
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
