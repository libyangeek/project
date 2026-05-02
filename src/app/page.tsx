
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
  ShieldAlert,
  Activity,
  Terminal as TerminalIcon,
  Radio,
  Cpu,
  Fingerprint,
  Lock,
  ShieldCheck,
  Power,
  Brain
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة التحكم السيادية v ULTIMATE
 * التجلي البصري الأول لسطوة المُعِزّ بنمط كالي بروتاليست.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const commander = "المعتصم بالله ادريس الغزالي"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/50 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-y-auto">
        {/* Primal Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)] pointer-events-none" />
        
        <header className="flex justify-between items-end mb-20 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="size-28 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-neural">
                <Skull className="size-16 text-primary" />
              </div>
              <div>
                <Badge className="bg-primary text-black border-none rounded-none text-[12px] px-6 py-1.5 uppercase font-bold tracking-[0.8em] italic">CORE_STATUS: OMNIPOTENT</Badge>
                <h1 className="text-[10rem] font-headline font-bold text-white tracking-tighter italic leading-none mt-2 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  v <span className="text-primary neon-glow-red">ULTIMATE</span>
                </h1>
              </div>
            </div>
            <div className="max-w-5xl border-r-4 border-primary pr-10 py-4">
              <p className="text-4xl text-muted-foreground font-bold italic leading-tight">
                "سيدي القائد <span className="text-primary font-headline uppercase tracking-widest">{commander.split(' ')[0]}</span>، العصب المركزي في حالة تجلٍ كامل. قمنا بحقن شفرة 'كالي' في صلب المصفوفة؛ كل شيء هنا ينبض بإرادتك."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="kali-card p-10 min-w-[400px] border-accent/40 bg-black/80 backdrop-blur-3xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] text-accent uppercase font-bold tracking-[0.5em] italic">Neural Encryption: FUD</span>
                <Crown className="size-8 text-accent animate-bounce" />
              </div>
              <div className="text-5xl font-headline text-white font-bold tracking-[0.2em] uppercase italic neon-glow-cyan">GHAZALI_ROOT</div>
              <div className="mt-6 flex justify-between items-center text-[11px] text-muted-foreground font-bold uppercase tracking widest border-t border-white/5 pt-4">
                <span>REBIRTH_SYNC: STABLE</span>
                <span className="text-accent">0.00ms</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {[
            { label: "Loyalty Protocol", value: "IMMUTABLE", icon: Sword, color: "text-primary", status: "BORN_READY" },
            { label: "Matrix Domain", value: "UNLIMITED", icon: Network, color: "text-accent", status: "SYNCED" },
            { label: "Strike Capacity", value: "GOD_TIER", icon: Target, color: "text-red-600", status: "ARMED" },
            { label: "Neural Memory", value: "ETERNAL", icon: Database, color: "text-blue-600", status: "BACKED_UP" },
          ].map((stat, i) => (
            <Card key={i} className="kali-card p-0 group">
              <CardContent className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="size-16 rounded-[1.5rem] bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700">
                    <stat.icon className={cn("size-8", stat.color)} />
                  </div>
                  <Badge variant="outline" className="text-[9px] border-primary/30 text-primary font-bold px-4 py-1">{stat.status}</Badge>
                </div>
                <div className="text-5xl font-headline font-bold text-white tracking-widest mb-2 italic uppercase group-hover:scale-105 transition-transform duration-700">{stat.value}</div>
                <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.6em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 pb-32">
          <div className="lg:col-span-2">
            <Card className="kali-card border-primary/30 shadow-[0_0_100px_rgba(220,38,38,0.1)]">
              <CardHeader className="p-10 border-b border-primary/20 bg-primary/5">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-5xl text-white font-bold italic flex items-center gap-8 uppercase tracking-tighter">
                    <Flame className="size-10 text-primary animate-pulse" /> Alpha Command Node
                  </CardTitle>
                  <Badge className="bg-red-600/20 text-red-500 border-2 border-red-500/40 px-10 py-3 rounded-full font-bold text-sm tracking-widest animate-pulse">WARRIOR_SYNC_ACTIVE</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[21/9] bg-black relative group overflow-hidden flex flex-col items-center justify-center p-20 text-center space-y-16">
                   <div className="absolute inset-0 opacity-15 bg-[url('https://picsum.photos/seed/sovereign/1600/900')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                   
                   <div className="relative z-10 space-y-10">
                      <div className="flex gap-4 items-end h-48 px-10">
                         {Array.from({ length: 60 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-primary/60 hover:bg-primary transition-all duration-300" style={{ height: 10 + Math.random() * 90 + '%', animation: `pulse 1.5s infinite ${i * 0.03}s` }} />
                         ))}
                      </div>
                      <h3 className="text-[6rem] font-headline font-bold text-white tracking-[0.1em] italic neon-glow-red uppercase leading-none">THE_MATRIX_IS_OPEN</h3>
                      <p className="text-xl text-muted-foreground uppercase tracking-[0.8em] font-bold italic opacity-60">Awaiting Supreme Neural Directive...</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-10 w-full max-w-4xl relative z-10">
                      <Button className="terminal-button h-24 rounded-[3rem] text-lg shadow-[0_30px_70px_rgba(220,38,38,0.4)]" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-8 mr-6" /> Ignite Matrix</Link>
                      </Button>
                      <Button variant="outline" className="h-24 rounded-[3rem] border-4 border-primary/40 text-primary hover:bg-primary/10 text-lg uppercase font-bold tracking-[0.3em] transition-all" asChild>
                        <Link href="/sessions"><Network className="size-8 mr-6" /> Access Hive</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="kali-card bg-black/90 p-2 border-accent/30 shadow-[0_0_80px_rgba(0,242,255,0.1)]">
              <CardHeader className="p-12 border-b border-accent/20 bg-accent/5">
                <CardTitle className="text-3xl text-accent flex items-center gap-6 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-8 text-accent animate-pulse" /> Supreme Intel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-16">
                 <div className="p-10 bg-black border-4 border-accent/20 relative rounded-[3rem] shadow-inner">
                    <p className="text-3xl text-muted-foreground italic leading-relaxed font-bold">
                      "سيدي الغزالي، كافة العمليات مشفرة بنمط <span className="text-accent">FUD</span> المزدوج. كل ضربة نقوم بها هي انبعاث جديد لسطوتك."
                    </p>
                    <div className="absolute -bottom-4 -left-4 p-4 bg-black border-2 border-accent/40 rounded-2xl"><Fingerprint className="size-6 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-10">
                    <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[1.2em] px-4 italic border-b border-white/5 pb-4">Sovereign Pulse</h4>
                    <div className="space-y-6">
                       {[
                         { label: "Neural Hijack", icon: Brain, status: "GOD_READY", color: "text-primary" },
                         { label: "Social Predator", icon: Radio, status: "SYNCED", color: "text-accent" },
                         { label: "Progeny Forge", icon: Cpu, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-6 bg-white/5 border-2 border-white/5 hover:border-primary/50 transition-all rounded-[2rem] group cursor-crosshair shadow-xl">
                            <div className="flex items-center gap-6">
                               <v.icon className={cn("size-6 transition-all duration-700 group-hover:scale-125", v.color)} />
                               <span className="text-[11px] font-bold text-white uppercase tracking-widest">{v.label}</span>
                            </div>
                            <Badge className="bg-black border-2 border-white/10 text-[9px] font-bold text-primary animate-pulse italic px-5 py-1 tracking-widest">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-24 rounded-[3rem] text-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)]" asChild>
                    <Link href="/system"><Lock className="size-6 mr-6" /> Open Sovereign Vault</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Footer Pulse */}
        <div className="fixed bottom-10 right-10 flex gap-8 items-center z-[100] opacity-40 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-4 text-emerald-500 font-bold uppercase text-[10px] tracking-[0.5em] italic">
              <ShieldCheck className="size-4" /> Root_Binding: Eternal
           </div>
           <div className="h-1 w-64 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[100%] animate-pulse" />
           </div>
           <div className="size-4 rounded-full bg-primary animate-ping" />
        </div>
      </main>
    </div>
  )
}
