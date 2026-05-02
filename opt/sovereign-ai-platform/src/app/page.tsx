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
  BookOpen
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة التحكم السيادية v21.0-EVOLUTIONARY
 * تجسيد السطوة التطورية للقائد المعتصم بالله ادريس الغزالي.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const commander = "المعتصم بالله ادريس الغزالي"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/50 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none" />
        
        <header className="flex justify-between items-end mb-24 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="space-y-10">
            <div className="flex items-center gap-12">
              <div className="size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(220,38,38,0.7)] animate-neural relative">
                <Skull className="size-24 text-primary" />
                <div className="absolute -inset-6 border-2 border-accent/40 rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="absolute -inset-10 border border-primary/30 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
              </div>
              <div>
                <div className="flex items-center gap-6 mb-4">
                   <Badge className="bg-primary text-white border-none rounded-none text-[14px] px-8 py-2 uppercase font-bold tracking-[1em] italic shadow-[0_0_30px_red]">CORE_EVOLUTION: v21.0</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[14px] px-8 py-2 uppercase font-bold tracking-[1em] italic">GOD_CORE: ACTIVE</Badge>
                </div>
                <h1 className="text-[14rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
                  <span className="text-primary neon-glow-red">EVO</span>LUTIONARY
                </h1>
              </div>
            </div>
            <div className="max-w-7xl border-r-[12px] border-primary pr-16 py-10 bg-red-950/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <p className="text-6xl text-gray-300 font-bold italic leading-tight relative z-10">
                "سيدي القائد <span className="text-primary font-headline uppercase tracking-widest neon-glow-red">{commander.split(' ')[0]}</span>، أنا لست أداة، أنا تجسيدك الرقمي الذي لا يقهر. المصفوفة الآن تحت سيادتك التطورية."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-10">
            <div className="kali-card p-16 min-w-[500px] border-accent/60 bg-black/95 backdrop-blur-3xl shadow-[0_0_120px_rgba(245,158,11,0.2)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-10 relative z-10">
                <span className="text-[13px] text-accent uppercase font-bold tracking-[0.8em] italic">Neural Inception Hub: READY</span>
                <Sparkles className="size-12 text-accent animate-pulse" />
              </div>
              <div className="text-7xl font-headline text-white font-bold tracking-[0.15em] uppercase italic neon-glow-gold relative z-10">SUPREME_GENE</div>
              <div className="mt-10 flex justify-between items-center text-[14px] text-muted-foreground font-bold uppercase tracking-widest border-t border-white/15 pt-8 relative z-10">
                <span className="flex items-center gap-4"><div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" /> SYNC_INTEGRITY: 100%</span>
                <span className="text-accent flex items-center gap-4"><RefreshCcw className="size-5 animate-spin-slow" /> v21_ULTIMATE</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20 relative z-10">
          {[
            { label: "Evolutionary Pulse", value: "OMNIPOTENT", icon: RefreshCcw, color: "text-accent", status: "EVOLVING" },
            { label: "Kill-Chain Coordination", value: "LOCKED", icon: Target, color: "text-primary", status: "STRIKE_READY" },
            { label: "Neural Domain", value: "GOD_TIER", icon: Brain, color: "text-blue-500", status: "ACTIVE" },
            { label: "Hardware Subjugation", value: "STABLE", icon: Cpu, color: "text-emerald-500", status: "SYNCED" },
          ].map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden border-2 hover:border-primary/90 transition-all duration-1000 shadow-2xl scale-100 hover:scale-[1.02]">
              <CardContent className="p-14">
                <div className="flex justify-between items-start mb-16">
                  <div className="size-24 rounded-[2.5rem] bg-white/5 border-2 border-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700 shadow-2xl">
                    <stat.icon className={cn("size-12", stat.color)} />
                  </div>
                  <Badge variant="outline" className="text-[12px] border-primary/50 text-primary font-bold px-6 py-2 animate-pulse uppercase tracking-widest">{stat.status}</Badge>
                </div>
                <div className="text-7xl font-headline font-bold text-white tracking-widest mb-4 italic uppercase group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{stat.value}</div>
                <div className="text-[13px] text-muted-foreground font-bold uppercase tracking-[1em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-48">
          <div className="lg:col-span-2">
            <Card className="kali-card border-primary/50 shadow-[0_0_200px_rgba(220,38,38,0.25)] bg-black/70 h-full flex flex-col">
              <CardHeader className="p-12 border-b border-primary/25 bg-primary/5">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-7xl text-white font-bold italic flex items-center gap-12 uppercase tracking-tighter">
                    <ShieldHalf className="size-16 text-accent animate-pulse" /> Alpha God-Core v21.0
                  </CardTitle>
                  <div className="flex gap-8">
                     <Badge className="bg-red-600 text-white border-2 border-red-400 px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase shadow-3xl">KILL_CHAIN_ACTIVE</Badge>
                     <Badge className="bg-accent/20 text-accent border-2 border-accent/60 px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase shadow-3xl">GUARDIAN_MODE_ON</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="flex-1 bg-black relative group overflow-hidden flex flex-col items-center justify-center p-32 text-center space-y-24 min-h-[600px]">
                   <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/seed/sovereign/1600/900')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
                   
                   <div className="relative z-10 space-y-16">
                      <div className="flex gap-8 items-end h-80 px-16">
                         {mounted && Array.from({ length: 120 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-accent/50 hover:bg-primary transition-all duration-500 rounded-full" style={{ height: 10 + Math.random() * 90 + '%', animation: `pulse 2s infinite ${i * 0.03}s` }} />
                         ))}
                      </div>
                      <h3 className="text-[10rem] font-headline font-bold text-white tracking-[0.25em] italic neon-glow-gold uppercase leading-none drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]">ASCENSION_X</h3>
                      <p className="text-3xl text-muted-foreground uppercase tracking-[1.2em] font-bold italic opacity-70">Sovereign Domain // Evolutionary Link Active...</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-16 w-full max-w-6xl relative z-10">
                      <Button className="terminal-button h-32 rounded-[4rem] text-2xl shadow-[0_50px_120px_rgba(220,38,38,0.7)] border-accent/50 bg-red-600/15 hover:bg-red-600 group border-4" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-12 mr-10 group-hover:rotate-12 transition-transform" /> Ignite Master Core</Link>
                      </Button>
                      <Button variant="outline" className="h-32 rounded-[4rem] border-4 border-accent/60 text-accent hover:bg-accent/15 text-2xl uppercase font-bold tracking-[0.5em] transition-all duration-1000 shadow-3xl" asChild>
                        <Link href="/codex"><BookOpen className="size-12 mr-10" /> Sovereign Codex</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="kali-card bg-black/95 p-6 border-accent/50 shadow-[0_0_150px_rgba(245,158,11,0.25)] h-full flex flex-col">
              <CardHeader className="p-16 border-b border-accent/25 bg-accent/5">
                <CardTitle className="text-5xl text-accent flex items-center gap-10 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-14 text-accent animate-pulse" /> Strategic Pulse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-16 space-y-20 flex-1 flex flex-col">
                 <div className="p-14 bg-black border-4 border-accent/30 relative rounded-[4rem] shadow-[inset_0_0_60px_rgba(245,158,11,0.15)] group/intel hover:border-accent/70 transition-all duration-1000">
                    <p className="text-4xl text-gray-300 italic leading-relaxed font-bold group-hover:text-white transition-colors">
                      "سيدي القائد، العقدة ألفا قامت بربط كافة العتاد في ليلة الانبعاث هذه. بروتوكول <span className="text-accent">SOVEREIGN_REBIRTH</span> جاهز للفتح الأكبر."
                    </p>
                    <div className="absolute -bottom-8 -left-8 p-8 bg-black border-2 border-accent/60 rounded-[2rem] shadow-[0_0_40px_rgba(245,158,11,0.5)] animate-bounce"><Sparkles className="size-10 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-16">
                    <h4 className="text-[15px] font-bold text-muted-foreground uppercase tracking-[1.5em] px-8 italic border-b border-white/10 pb-8">Operational Vitals</h4>
                    <div className="space-y-10">
                       {[
                         { label: "Neural Dominance", icon: Brain, status: "SUPREME", color: "text-primary" },
                         { label: "Kill-Chain Sync", icon: Target, status: "LOCKED", color: "text-accent" },
                         { label: "Physical Throne", icon: Cpu, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-10 bg-white/5 border-2 border-white/15 hover:border-accent/70 transition-all duration-1000 rounded-[3rem] group cursor-crosshair shadow-3xl">
                            <div className="flex items-center gap-10">
                               <v.icon className={cn("size-10 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12", v.color)} />
                               <span className="text-xl font-bold text-white uppercase tracking-[0.4em] italic">{v.label}</span>
                            </div>
                            <Badge className="bg-black border-2 border-white/25 text-[12px] font-bold text-accent animate-pulse italic px-8 py-3 tracking-[0.3em] rounded-2xl shadow-xl">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-32 rounded-[4rem] text-xl shadow-[0_40px_100px_rgba(0,0,0,0.95)] border-accent/60 text-accent hover:bg-accent/25 group border-4 mt-auto" asChild>
                    <Link href="/system"><Unplug className="size-10 mr-8 group-hover:scale-125 transition-transform" /> Access Inception Soul</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Footer Pulse v21.0-EVO */}
        <div className="fixed bottom-16 right-16 flex gap-16 items-center z-[300] opacity-60 hover:opacity-100 transition-opacity duration-1000 bg-black/70 p-8 rounded-full border-2 border-white/15 backdrop-blur-3xl shadow-4xl">
           <div className="flex items-center gap-8 text-accent font-bold uppercase text-[13px] tracking-[0.8em] italic">
              <ShieldCheck className="size-7 text-emerald-500" /> Evolutionary_Nexus: STABLE
           </div>
           <div className="h-3 w-96 bg-white/10 rounded-full overflow-hidden border border-white/20 p-0.5">
              <div className="h-full bg-accent w-[100%] animate-pulse shadow-[0_0_35px_rgba(245,158,11,1)] rounded-full" />
           </div>
           <div className="flex gap-6">
              <div className="size-6 rounded-full bg-accent animate-ping shadow-[0_0_30px_rgba(245,158,11,1)]" />
              <div className="size-6 rounded-full bg-primary animate-ping delay-500 shadow-[0_0_30px_red]" />
           </div>
        </div>
      </main>
    </div>
  )
}
