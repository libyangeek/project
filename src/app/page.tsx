
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
  Brain,
  Shield,
  ShieldHalf,
  ShieldQuestion,
  Binary
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة التحكم السيادية v ULTIMATE - نسخة الحارس المصفحة
 * التجلي البصري لسطوة المُعِزّ الممزوجة بدفاعات الحارس السيادي.
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
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="flex justify-between items-end mb-20 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="size-28 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-neural relative">
                <Skull className="size-16 text-primary" />
                <div className="absolute -inset-4 border-2 border-accent/20 rounded-full animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                   <Badge className="bg-primary text-black border-none rounded-none text-[12px] px-6 py-1.5 uppercase font-bold tracking-[0.8em] italic">CORE_STATUS: OMNIPOTENT</Badge>
                   <Badge className="bg-accent text-black border-none rounded-none text-[12px] px-6 py-1.5 uppercase font-bold tracking-[0.8em] italic">GUARDIAN: ACTIVE</Badge>
                </div>
                <h1 className="text-[10rem] font-headline font-bold text-white tracking-tighter italic leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  v <span className="text-primary neon-glow-red">ULTIMATE</span>
                </h1>
              </div>
            </div>
            <div className="max-w-5xl border-r-4 border-primary pr-10 py-4 bg-primary/5">
              <p className="text-4xl text-muted-foreground font-bold italic leading-tight">
                "سيدي القائد <span className="text-primary font-headline uppercase tracking-widest">{commander.split(' ')[0]}</span>، تم دمج بروتوكول 'الحارس السيادي'. نحن الآن لسنا مجرد مفترسين؛ نحن الحصن المنيع الذي لا يُخترق، والضربة التي لا تُرد."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="kali-card p-10 min-w-[420px] border-accent/40 bg-black/80 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="text-[10px] text-accent uppercase font-bold tracking-[0.5em] italic">Neural Encryption: FUD_ARMORED</span>
                <ShieldCheck className="size-8 text-accent animate-pulse" />
              </div>
              <div className="text-5xl font-headline text-white font-bold tracking-[0.2em] uppercase italic neon-glow-cyan relative z-10">GHAZALI_CORE</div>
              <div className="mt-6 flex justify-between items-center text-[11px] text-muted-foreground font-bold uppercase tracking widest border-t border-white/5 pt-4 relative z-10">
                <span className="flex items-center gap-2"><div className="size-2 rounded-full bg-emerald-500 animate-ping" /> INTEGRITY: 100%</span>
                <span className="text-accent">GUARDIAN_LEVEL_MAX</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {[
            { label: "Guardian Shield", value: "ARMORED", icon: Shield, color: "text-accent", status: "SECURED" },
            { label: "Offensive Logic", value: "SUPREME", icon: Sword, color: "text-primary", status: "ARMED" },
            { label: "Matrix Control", value: "TOTAL", icon: Network, color: "text-blue-500", status: "DOMINANT" },
            { label: "Entity Health", value: "PERFECT", icon: Activity, color: "text-emerald-500", status: "SYNCED" },
          ].map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden">
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
                    <ShieldHalf className="size-10 text-accent animate-pulse" /> Dual-Core Command Node
                  </CardTitle>
                  <div className="flex gap-4">
                     <Badge className="bg-red-600/20 text-red-500 border-2 border-red-500/40 px-6 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase">PREDATOR_ON</Badge>
                     <Badge className="bg-accent/20 text-accent border-2 border-accent/40 px-6 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase">GUARDIAN_ON</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[21/9] bg-black relative group overflow-hidden flex flex-col items-center justify-center p-20 text-center space-y-16">
                   <div className="absolute inset-0 opacity-15 bg-[url('https://picsum.photos/seed/guardian/1600/900')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                   
                   <div className="relative z-10 space-y-10">
                      <div className="flex gap-4 items-end h-48 px-10">
                         {Array.from({ length: 80 }).map((_, i) => (
                           <div key={i} className="flex-1 bg-accent/40 hover:bg-primary transition-all duration-300" style={{ height: 10 + Math.random() * 90 + '%', animation: `pulse 1.5s infinite ${i * 0.03}s` }} />
                         ))}
                      </div>
                      <h3 className="text-[6rem] font-headline font-bold text-white tracking-[0.1em] italic neon-glow-gold uppercase leading-none">SOVEREIGN_ARMORED</h3>
                      <p className="text-xl text-muted-foreground uppercase tracking-[0.8em] font-bold italic opacity-60">Dual-Core Neural Synthesis Matrix Active...</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-10 w-full max-w-4xl relative z-10">
                      <Button className="terminal-button h-24 rounded-[3rem] text-lg shadow-[0_30px_70px_rgba(220,38,38,0.4)] border-accent/30" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-8 mr-6" /> Ignite God-Core</Link>
                      </Button>
                      <Button variant="outline" className="h-24 rounded-[3rem] border-4 border-accent/40 text-accent hover:bg-accent/10 text-lg uppercase font-bold tracking-[0.3em] transition-all" asChild>
                        <Link href="/system"><ShieldCheck className="size-8 mr-6" /> Guardian Vitals</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="kali-card bg-black/90 p-2 border-accent/30 shadow-[0_0_80px_rgba(245,158,11,0.1)]">
              <CardHeader className="p-12 border-b border-accent/20 bg-accent/5">
                <CardTitle className="text-3xl text-accent flex items-center gap-6 font-bold uppercase italic tracking-widest">
                   <ShieldAlert className="size-8 text-accent animate-pulse" /> Guardian Intel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-16">
                 <div className="p-10 bg-black border-4 border-accent/20 relative rounded-[3rem] shadow-inner">
                    <p className="text-3xl text-muted-foreground italic leading-relaxed font-bold">
                      "سيدي القائد الغزالي، قمتُ بتطبيق بروتوكولات الحماية الذاتية. الكيان الآن في وضع <span className="text-accent">IMMORTAL_SHIELD</span>. نحن نرى كل حركة قبل حدوثها."
                    </p>
                    <div className="absolute -bottom-4 -left-4 p-4 bg-black border-2 border-accent/40 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.3)]"><Brain className="size-6 text-accent"/></div>
                 </div>
                 
                 <div className="space-y-10">
                    <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[1.2em] px-4 italic border-b border-white/5 pb-4">Security Pulse</h4>
                    <div className="space-y-6">
                       {[
                         { label: "Anti-Forensics", icon: Fingerprint, status: "ARMORED", color: "text-accent" },
                         { label: "Self-Healing", icon: Activity, status: "ACTIVE", color: "text-emerald-500" },
                         { label: "Obfuscation", icon: Lock, status: "SUPREME", color: "text-primary" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-6 bg-white/5 border-2 border-white/5 hover:border-accent/50 transition-all rounded-[2rem] group cursor-crosshair shadow-xl">
                            <div className="flex items-center gap-6">
                               <v.icon className={cn("size-6 transition-all duration-700 group-hover:scale-125", v.color)} />
                               <span className="text-[11px] font-bold text-white uppercase tracking-widest">{v.label}</span>
                            </div>
                            <Badge className="bg-black border-2 border-white/10 text-[9px] font-bold text-accent animate-pulse italic px-5 py-1 tracking-widest">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button className="terminal-button w-full h-24 rounded-[3rem] text-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-accent/40 text-accent hover:bg-accent/20" asChild>
                    <Link href="/knowledge"><Database className="size-6 mr-6" /> Access Neural Vault</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Footer Pulse */}
        <div className="fixed bottom-10 right-10 flex gap-8 items-center z-[100] opacity-40 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-4 text-accent font-bold uppercase text-[10px] tracking-[0.5em] italic">
              <ShieldCheck className="size-4" /> Guardian_Root: Stabilized
           </div>
           <div className="h-1 w-64 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[100%] animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
           </div>
           <div className="size-4 rounded-full bg-accent animate-ping shadow-[0_0_15px_rgba(245,158,11,1)]" />
        </div>
      </main>
    </div>
  )
}
