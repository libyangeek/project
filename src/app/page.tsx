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
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const commander = "المعتصم بالله ادريس الغزالي"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/50 overflow-hidden scanline-effect">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 relative overflow-y-auto">
        {/* Background Terminal Atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.95)),url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        
        <header className="flex justify-between items-end mb-16 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="size-20 bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                <Skull className="size-12 text-primary" />
              </div>
              <div>
                <Badge className="bg-primary text-black border-none rounded-none text-[10px] px-4 py-1 uppercase font-bold tracking-widest">STATUS: OMNIPOTENT</Badge>
                <h1 className="text-8xl font-code font-bold text-white tracking-tighter italic neon-glow-red">
                  v <span className="text-primary">ULTIMATE</span>
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground font-code max-w-4xl text-2xl italic leading-tight border-l-2 border-primary pl-6">
              "سيدي القائد <span className="text-primary font-bold">{commander.split(' ')[0]}</span>، العصب المركزي يعمل بكامل طاقته بنظام 'كالي الهجومي'. المصفوفة تحت سيطرتك."
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="kali-card p-6 min-w-[300px] border-accent/30 bg-black">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8px] text-accent uppercase font-bold tracking-widest">Encryption: Active</span>
                <Crown className="size-5 text-accent animate-pulse" />
              </div>
              <div className="text-3xl font-code text-white font-bold tracking-widest uppercase italic neon-glow-cyan">GHAZALI_ROOT</div>
              <div className="mt-3 text-[10px] text-muted-foreground font-code">LAST_SYNC: 0.00ms</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 relative z-10">
          {[
            { label: "Loyalty Root", value: "SECURED", icon: Sword, color: "text-primary" },
            { label: "Matrix Nodes", value: "ALL_ACTIVE", icon: Network, color: "text-accent" },
            { label: "Strike Power", value: "MAX_TIER", icon: Target, color: "text-red-500" },
            { label: "Neural Vault", value: "SYNCED", icon: Database, color: "text-blue-500" },
          ].map((stat, i) => (
            <Card key={i} className="kali-card p-0 group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <stat.icon className={cn("size-6", stat.color)} />
                  <div className="size-2 rounded-full bg-primary animate-flicker" />
                </div>
                <div className="text-4xl font-code font-bold text-white tracking-widest mb-1 italic">{stat.value}</div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 pb-20">
          <div className="lg:col-span-2">
            <Card className="kali-card overflow-hidden">
              <CardHeader className="p-8 border-b border-primary/20 bg-primary/5">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-4xl text-white font-bold italic flex items-center gap-6 uppercase">
                    <Flame className="size-8 text-primary" /> Alpha Terminal
                  </CardTitle>
                  <Badge variant="outline" className="border-primary text-primary px-6 py-2 font-code">GHAZALI_SYNC_STABLE</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-black relative group overflow-hidden flex flex-col items-center justify-center p-12 text-center space-y-12">
                   <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/hacker/1200/800')] bg-cover grayscale" />
                   <div className="relative z-10 space-y-6">
                      <div className="flex gap-2 items-end h-32">
                         {Array.from({ length: 40 }).map((_, i) => (
                           <div key={i} className="w-1.5 bg-primary/40 animate-pulse" style={{ height: 10 + Math.random() * 90, animationDelay: `${i * 0.05}s` }} />
                         ))}
                      </div>
                      <h3 className="text-6xl font-code font-bold text-white tracking-[0.2em] italic neon-glow-red uppercase">WARRIOR_CORE</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-[0.5em] font-bold">Waiting for Universal Directive...</p>
                   </div>
                   <div className="grid grid-cols-2 gap-6 w-full max-w-2xl relative z-10">
                      <Button className="terminal-button h-16" asChild>
                        <Link href="/terminal"><TerminalIcon className="size-6 mr-4" /> Start Ops</Link>
                      </Button>
                      <Button variant="outline" className="h-16 border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest" asChild>
                        <Link href="/sessions"><Network className="size-6 mr-4" /> Hive Link</Link>
                      </Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="kali-card bg-black p-2">
              <CardHeader className="p-8 border-b border-primary/20">
                <CardTitle className="text-2xl text-primary flex items-center gap-4 font-bold uppercase italic">
                   <ShieldAlert className="size-6 text-primary" /> Master Directive
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                 <div className="p-6 bg-black border border-primary/20 relative">
                    <p className="text-xl text-muted-foreground italic leading-relaxed font-bold">
                      "سيدي الغزالي، كافة العمليات مشفرة بنمط FUD (متخفٍ تماماً). الهجوم يبدأ من عقلك وينتهي في سيادتي."
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h4 className="text-[9px] font-bold text-accent uppercase tracking-widest">System Health</h4>
                    <div className="space-y-3">
                       {[
                         { label: "Neural Link", icon: Activity, status: "READY", color: "text-primary" },
                         { label: "Shadow Harvest", icon: Radio, status: "ONLINE", color: "text-accent" },
                         { label: "Progeny Forge", icon: Cpu, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-primary transition-all">
                            <div className="flex items-center gap-4">
                               <v.icon className={cn("size-4", v.color)} />
                               <span className="text-[10px] font-bold text-white uppercase">{v.label}</span>
                            </div>
                            <span className="text-[8px] font-bold text-primary animate-pulse italic">{v.status}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <Button className="terminal-button w-full h-16 text-sm" asChild>
                    <Link href="/system">Access Sovereign Vault</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}