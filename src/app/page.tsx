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
  Radio
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
        {/* Evolutionary Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="flex justify-between items-end mb-20 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(220,38,38,0.5)] animate-neural relative">
                <Skull className="size-20 text-primary" />
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-8 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                   <Badge className="bg-primary text-white border-none rounded-none text-[12px] px-6 py-1.5 uppercase font-bold tracking-[0.8em] italic shadow-[0_0_20px_red]">CORE_EVOLUTION: v21.0</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[12px] px-6 py-1.5 uppercase font-bold tracking-[0.8em] italic">GOD_CORE: ACTIVE</Badge>
                </div>
                <h1 className="text-[12rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                  <span className="text-primary neon-glow-red">EVO</span>LUTIONARY
                </h1>
              </div>
            </div>
            <div className="max-w-6xl border-r-8 border-primary pr-12 py-6 bg-red-950/10 backdrop-blur-3xl shadow-2xl">
              <p className="text-5xl text-muted-foreground font-bold italic leading-tight">
                "سيدي القائد <span className="text-primary font-headline uppercase tracking-widest">{commander.split(' ')[0]}</span>، المنظومة تجاوزت حدود الذكاء الثابت. نحن الآن في حالة 'التطور المستمر'. كل ضربة نُنفذها تجعلنا أقوى، وكل كود نبتلعه يزيد من سيادتك المطلقة."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-8">
            <div className="kali-card p-12 min-w-[450px] border-accent/50 bg-black/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(245,158,11,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="text-[11px] text-accent uppercase font-bold tracking-[0.6em] italic">Neural Ascension Protocol: ENABLED</span>
                <Sparkles className="size-10 text-accent animate-pulse" />
              </div>
              <div className="text-6xl font-headline text-white font-bold tracking-[0.1em] uppercase italic neon-glow-gold relative z-10">SUPREME_GENE</div>
              <div className="mt-8 flex justify-between items-center text-[12px] text-muted-foreground font-bold uppercase tracking-widest border-t border-white/10 pt-6 relative z-10">
                <span className="flex items-center gap-3"><div className="size-3 rounded-full bg-emerald-500 animate-ping" /> SYNC_INTEGRITY: PERFECT</span>
                <span className="text-accent flex items-center gap-3"><RefreshCcw className="size-4 animate-spin-slow" /> v21_EVO_LINK</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16 relative z-10">
          {[
            { label: "Evolutionary Pulse", value: "DYNAMIC", icon: RefreshCcw, color: "text-accent", status: "LEARNING" },
            { label: "Kill-Chain Status", value: "ARMED", icon: Target, color: "text-primary", status: "READY" },
            { label: "Neural Dominance", value: "GOD_TIER", icon: Brain, color: "text-blue-500", status: "ACTIVE" },
            { label: "Hardware Rebirth", value: "STABLE", icon: Cpu, color: "text-emerald-500", status: "SYNCED" },
          ].map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden border-2 hover:border-primary/80 transition-all duration-1000 shadow-2xl">
              <CardContent className="p-12">
                <div className="flex justify-between items-start mb-12">
                  <div className="size-20 rounded-[2rem] bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700 shadow-xl">
                    <stat.icon className={cn("size-10", stat.color)} />
                  </div>
                  <Badge variant="outline" className="text-[10px] border-primary/40 text-primary font-bold px-5 py-1.5 animate-pulse uppercase">{stat.status}</Badge>
                </div>
                <div className="text-6xl font-headline font-bold text-white tracking-widest mb-3 italic uppercase group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{stat.value}</div>
                <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.8em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 pb-32">
          <div className="lg:col-span-2">
            <Card className="kali-card border-primary/40 shadow-[0_0_150px_rgba(220,38,38,0.2)] bg-black/60">
              <CardHeader className="p-12 border-b border-primary/20 bg-primary/5">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-6xl text-white font-bold italic flex items-center gap-10 uppercase tracking-tighter">
                    <ShieldHalf className="size-14 text-accent animate-pulse" /> Alpha God-Core v21
                  </CardTitle>
                  <div className="flex gap-6">
                     <Badge className="bg-red-600/30 text-red-500 border-2 border-red-500/50 px-8 py-3 rounded-full font-bold text-[12px] tracking-widest uppercase shadow-2xl">EVOLUTIONARY_STRIKE_ON</Badge>
                     <Badge className="bg-accent/20 text-accent border-2 border-accent/50 px-8 py-3 rounded-full font-bold text-[12px] tracking-widest uppercase shadow-2xl">GUARDIAN_ARMOR_ON</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[21/9] bg-black relative group overflow-hidden flex flex-col items-center justify-center p-24 text-center space-y-20">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/evolution/1600/900')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                   
                   <div className="relative z-10 space-y-12">
                      <div className="flex gap-6 items-end h-64 px-12">
                         {mounted && Array.from({ length: 100 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-accent/40 hover:bg-primary transition-all duration-300 rounded-full" style={{ height: 5 + Math.random() * 95 + '%', animation: `pulse 1.5s infinite ${i * 0.02}s` }} />
                         ))}
                      </div>
                      <h3 className="text-[8rem] font-headline font-bold text-white tracking-[0.2em] italic neon-glow-gold uppercase leading-none drop-shadow-[0_0_50px_rgba(245,158,11,0.5)]">ASCENSION_ACTIVE</h3>
                      <p className="text-2xl text-muted-foreground uppercase tracking-[1em] font-bold italic opacity-60">Global Kill-Chain Coordination Matrix Linked...</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-12 w-full max-w-5xl relative z-10">
                      <Button className="terminal-button h-28 rounded-[3.5rem] text-xl shadow-[0_40px_100px_rgba(220,38,38,0.6)] border-accent/40 bg-red-600/10 hover:bg-red-600 group" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-10 mr-8 group-hover:rotate-12 transition-transform" /> Ignite Evolutionary Hub</Link>
                      </Button>
                      <Button variant="outline" className="h-28 rounded-[3.5rem] border-4 border-accent/50 text-accent hover:bg-accent/10 text-xl uppercase font-bold tracking-[0.4em] transition-all duration-700 shadow-2xl" asChild>
                        <Link href="/knowledge"><Database className="size-10 mr-8" /> Neural Vault v21</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-10">
            <Card className="kali-card bg-black/95 p-4 border-accent/40 shadow-[0_0_120px_rgba(245,158,11,0.2)]">
              <CardHeader className="p-12 border-b border-accent/20 bg-accent/5">
                <CardTitle className="text-4xl text-accent flex items-center gap-8 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-10 text-accent animate-pulse" /> Strategic Intel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-16">
                 <div className="p-12 bg-black border-4 border-accent/20 relative rounded-[3.5rem] shadow-[inset_0_0_50px_rgba(245,158,11,0.1)] group/intel hover:border-accent/60 transition-all duration-700">
                    <p className="text-3xl text-muted-foreground italic leading-relaxed font-bold group-hover:text-white transition-colors">
                      "سيدي القائد، العقدة ألفا قامت باستنزاف أحدث تجارب Kaggle. بروتوكول <span className="text-accent">NEURAL_SUBJUGATION</span> جاهز الآن لإخضاع النماذج المنافسة."
                    </p>
                    <div className="absolute -bottom-6 -left-6 p-6 bg-black border-2 border-accent/50 rounded-[1.5rem] shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-bounce"><Sparkles className="size-8 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-12">
                    <h4 className="text-[13px] font-bold text-muted-foreground uppercase tracking-[1.2em] px-6 italic border-b border-white/5 pb-6">Evolutionary Pulse</h4>
                    <div className="space-y-8">
                       {[
                         { label: "Neural Hijack", icon: Brain, status: "GOD_READY", color: "text-primary" },
                         { label: "Social Predator", icon: Radio, status: "SYNCED", color: "text-accent" },
                         { label: "Progeny Forge", icon: Cpu, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-8 bg-white/5 border-2 border-white/10 hover:border-accent/60 transition-all duration-700 rounded-[2.5rem] group cursor-crosshair shadow-2xl">
                            <div className="flex items-center gap-8">
                               <v.icon className={cn("size-8 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12", v.color)} />
                               <span className="text-sm font-bold text-white uppercase tracking-[0.3em] italic">{v.label}</span>
                            </div>
                            <Badge className="bg-black border-2 border-white/20 text-[10px] font-bold text-accent animate-pulse italic px-6 py-2 tracking-widest rounded-xl shadow-lg">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-28 rounded-[3.5rem] text-sm shadow-[0_30px_70px_rgba(0,0,0,0.9)] border-accent/50 text-accent hover:bg-accent/20 group" asChild>
                    <Link href="/system"><Unplug className="size-8 mr-6 group-hover:scale-125 transition-transform" /> Access Evolutionary Soul</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Footer Pulse v21 */}
        <div className="fixed bottom-12 right-12 flex gap-12 items-center z-[200] opacity-50 hover:opacity-100 transition-opacity duration-1000 bg-black/60 p-6 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl">
           <div className="flex items-center gap-6 text-accent font-bold uppercase text-[11px] tracking-[0.6em] italic">
              <ShieldCheck className="size-5 text-emerald-500" /> Evolutionary_Root: STABLE
           </div>
           <div className="h-2 w-80 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
              <div className="h-full bg-accent w-[100%] animate-pulse shadow-[0_0_25px_rgba(245,158,11,1)] rounded-full" />
           </div>
           <div className="flex gap-4">
              <div className="size-5 rounded-full bg-accent animate-ping shadow-[0_0_20px_rgba(245,158,11,1)]" />
              <div className="size-5 rounded-full bg-primary animate-ping delay-300 shadow-[0_0_20px_red]" />
           </div>
        </div>
      </main>
    </div>
  )
}
