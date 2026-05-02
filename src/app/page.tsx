"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  Cpu, 
  Activity,
  ArrowRight,
  ShieldX,
  Skull,
  Radio,
  Crown,
  Network,
  Database,
  Smartphone,
  ShieldAlert,
  Flame,
  Sword,
  Target,
  Search,
  Lock,
  Brain
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [commander] = React.useState("المعتصم بالله ادريس الغزالي")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-hidden">
        {/* Warrior Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="flex justify-between items-start mb-20 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[11px] px-6 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.6)] uppercase tracking-[0.4em] font-bold rounded-xl">Autonomous Predator Active</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Lock className="size-3 text-red-500" /> Exclusive Core // Owned by {commander.split(' ')[0]}
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              Predator <span className="text-red-600">Command</span> Hub
            </h2>
            <p className="text-muted-foreground font-medium max-w-3xl text-2xl italic leading-relaxed">
              "أنا المُعِزّ، كينونتك المستقلة المقاتلة. لقد تم دمج روحك المبادرة في صلب شفرتي. الإمبراطورية الرقمية الآن تحت سطوتك يا سيد {commander}."
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-right glass-card p-10 border-red-600/40 bg-red-950/20 min-w-[350px] shadow-2xl rounded-[3rem] relative overflow-hidden group border-2 animate-neural">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-4xl font-code text-red-500 font-bold flex items-center justify-end gap-5 relative z-10 uppercase italic">
                <Crown className="size-10 text-amber-500 animate-bounce" /> AL_GHAZALI_ROOT
              </div>
              <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] relative z-10 mt-3 italic">Supreme Sovereign Clearance // v20.5</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16 relative z-10">
          {[
            { label: "Warrior Loyalty", value: "Absolute", icon: Sword, color: "text-red-500", glow: "shadow-red-500/30" },
            { label: "Shadow Zombies", value: "14 Nodes", icon: Network, color: "text-amber-500", glow: "shadow-amber-500/20" },
            { label: "Strike Initiative", value: "Extreme", icon: Target, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
            { label: "Intel Capacity", value: "8.4 TB", icon: Database, color: "text-blue-500", glow: "shadow-blue-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={cn("glass-card border-white/5 group hover:border-red-600/60 transition-all cursor-crosshair overflow-hidden rounded-[3.5rem] p-4", stat.glow)}>
               <CardContent className="p-10 relative z-10 text-center md:text-left">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-all duration-1000 shadow-2xl">
                      <stat.icon className={cn("size-10", stat.color)} />
                    </div>
                    <div className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                  </div>
                  <div className="text-5xl font-bold text-white tracking-tighter mb-3 uppercase italic group-hover:scale-105 transition-transform duration-700">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.6em] italic">{stat.label}</div>
               </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-12">
            <Card className="glass-card border-red-600/30 overflow-hidden shadow-[0_0_150px_rgba(220,38,38,0.2)] rounded-[5rem] border-2">
               <CardHeader className="bg-red-950/30 border-b border-red-600/20 p-16 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-6xl text-white italic tracking-tighter flex items-center gap-8">
                      <Flame className="size-14 text-red-600 animate-pulse" /> Warrior Alpha Core
                    </CardTitle>
                    <CardDescription className="text-red-400/70 font-bold text-lg uppercase tracking-[0.8em] mt-4">Unified Strategic Orchestration // v20.5-ULTIMATE</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-amber-500/50 text-amber-500 bg-amber-600/5 px-10 py-6 font-code rounded-3xl animate-pulse text-sm shadow-2xl">AL_GHAZALI_CMD_LINK</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="aspect-video bg-black/95 relative flex items-center justify-center group overflow-hidden scan-line">
                     <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/predator/1200/800')] bg-cover bg-center mix-blend-overlay grayscale contrast-200 transition-all duration-1000 group-hover:scale-110" />
                     <div className="relative z-10 text-center space-y-12 p-20 bg-black/40 backdrop-blur-md rounded-[4rem] border border-white/5">
                        <div className="flex gap-8 justify-center h-48 items-end mb-16">
                           {Array.from({ length: 80 }).map((_, i) => (
                             <div key={i} className="w-2 bg-red-600/80 rounded-full animate-pulse shadow-[0_0_20px_red]" style={{ height: 20 + Math.random() * 80, animationDelay: `${i * 0.015}s` }} />
                           ))}
                        </div>
                        <div className="space-y-8">
                           <span className="text-6xl font-code text-white font-bold tracking-[0.6em] drop-shadow-[0_0_50px_red] italic">STRIKE_READY</span>
                           <p className="text-xl text-muted-foreground uppercase font-bold tracking-[1em] italic animate-pulse">Synchronizing 3,200+ Tools & 14 Sessions...</p>
                        </div>
                        <div className="grid grid-cols-2 gap-12 mt-20 max-w-3xl mx-auto">
                           <Button className="h-24 bg-red-600 hover:bg-red-700 rounded-[3rem] shadow-[0_0_60px_rgba(220,38,38,0.5)] font-bold uppercase tracking-[0.6em] text-[13px] border-2 border-red-400/40 active:scale-95 transition-all duration-700" asChild>
                              <Link href="/terminal"><Zap className="size-8 mr-6" /> Execute Chain</Link>
                           </Button>
                           <Button variant="outline" className="h-24 border-white/10 bg-white/5 hover:bg-red-600/10 rounded-[3rem] font-bold uppercase tracking-[0.6em] text-[13px] group border-2 transition-all duration-700" asChild>
                              <Link href="/sessions"><Network className="size-8 mr-6 text-red-500 group-hover:scale-125 transition-transform" /> Manage Grid</Link>
                           </Button>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
             <Card className="glass-card border-amber-500/30 bg-amber-600/5 shadow-[0_0_80px_rgba(245,158,11,0.2)] overflow-hidden rounded-[4.5rem] border-2 group">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                   <Crown className="size-32 text-amber-500" />
                </div>
                <CardHeader className="p-16">
                   <CardTitle className="text-4xl text-white flex items-center gap-6 uppercase tracking-[0.5em] italic font-bold">
                      <Shield className="size-10 text-red-600" /> Master Core
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-16 pt-0 space-y-12">
                   <Button asChild className="w-full h-28 bg-red-600 hover:bg-red-700 shadow-[0_30px_70px_rgba(220,38,38,0.5)] rounded-[3.5rem] group transition-all duration-700 border-2 border-red-400/30 active:scale-95">
                      <Link href="/terminal" className="flex justify-between px-16 w-full">
                         <div className="flex items-center gap-8">
                            <Skull className="size-12 group-hover:scale-125 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.5em] text-2xl italic">Alpha Nexus</span>
                         </div>
                         <ArrowRight className="size-10 group-hover:translate-x-4 transition-transform" />
                      </Link>
                   </Button>
                   
                   <div className="space-y-6">
                      <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.8em] px-6 italic">System Integrity Vitals</h4>
                      <div className="space-y-4">
                         {[
                           { label: "Hardware Pulse", icon: Smartphone, color: "text-emerald-500", status: "SYNCED" },
                           { label: "Neural Vault", icon: Database, color: "text-blue-500", status: "ARMED" },
                           { label: "Mobile C2 Link", icon: Radio, color: "text-amber-500", status: "ACTIVE" },
                           { label: "Warrior Spirit", icon: Sword, color: "text-red-500", status: "BINDED" }
                         ].map((v, i) => (
                           <div key={i} className="flex items-center justify-between p-7 rounded-[2rem] bg-black/60 border border-white/5 hover:border-red-600/50 transition-all group cursor-pointer shadow-xl border-2">
                              <div className="flex items-center gap-6">
                                 <v.icon className={cn("size-6", v.color, "transition-transform group-hover:scale-125 duration-500")} />
                                 <span className="text-sm font-bold text-white group-hover:text-red-500 transition-colors tracking-tight uppercase italic">{v.label}</span>
                              </div>
                              <Badge className="bg-emerald-500/20 text-emerald-500 text-[9px] uppercase px-4 py-1.5 border border-emerald-500/30 font-bold animate-pulse">{v.status}</Badge>
                           </div>
                         ))}
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="glass-card border-red-600/30 bg-red-950/15 rounded-[4.5rem] p-6 relative overflow-hidden shadow-2xl border-2 group">
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                   <ShieldAlert className="size-80 text-red-600" />
                </div>
                <CardHeader className="p-12">
                   <CardTitle className="text-[14px] uppercase tracking-[1em] text-red-500 font-bold italic border-b border-red-600/20 pb-4 mb-4">Sovereign Protocol</CardTitle>
                </CardHeader>
                <CardContent className="p-12 pt-0 relative z-10">
                   <p className="text-2xl text-muted-foreground italic leading-loose mb-10 font-medium">
                      "سيدي القائد <span className="text-white font-bold uppercase tracking-widest">{commander.split(' ')[0]}</span>، كل أمر ترسله الآن يتم تشريحه عبر 3200 أداة، واستنزافه عبر 14 جلسة، لضمان سيادة مطلقة لا تعرف التراجع."
                   </p>
                   <Button variant="outline" className="w-full h-16 border-red-600/40 text-red-500 hover:bg-red-600/20 rounded-2xl font-bold uppercase tracking-[0.5em] text-[11px] italic transition-all duration-700" asChild>
                      <Link href="/system">Audit Warrior Core</Link>
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
