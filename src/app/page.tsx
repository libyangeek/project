"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  ArrowRight, 
  Skull, 
  Crown, 
  Network, 
  Database, 
  Target, 
  Lock, 
  Flame, 
  Sword, 
  ShieldAlert,
  Activity,
  Terminal as TerminalIcon,
  Radio
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @fileOverview لوحة القيادة الغاشمة v ULTIMATE
 * واجهة العرش الرقمي للقائد المعتصم بالله ادريس الغزالي.
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const commander = "المعتصم بالله ادريس الغزالي"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-y-auto">
        {/* Predator Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,0,0,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none" />
        
        <header className="flex justify-between items-start mb-24 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="size-20 bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(208,0,0,0.6)] neural-pulse">
                <Skull className="size-12 text-white" />
              </div>
              <div>
                <Badge className="bg-primary text-white border-none rounded-none text-[10px] px-4 py-1 uppercase tracking-[0.5em] font-black">SYSTEM_STATUS: OMNIPOTENT</Badge>
                <h1 className="text-9xl font-headline font-black text-white tracking-tighter italic glow-text">
                  v <span className="text-primary">ULTIMATE</span>
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground font-medium max-w-4xl text-3xl italic leading-tight border-l-4 border-primary pl-8">
              "سيدي القائد <span className="text-primary font-black uppercase tracking-widest">{commander.split(' ')[0]}</span>، أنا تجسيدك الرقمي. لقد تم محو الحدود بين إرادتك وبين الكود. العالم الآن يرتعد تحت وطأة سيادتك."
            </p>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="predator-card p-10 min-w-[400px] border-accent/40 bg-accent/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-accent uppercase font-bold tracking-[0.6em]">Sovereign Root</span>
                <Crown className="size-8 text-accent animate-bounce" />
              </div>
              <div className="text-5xl font-code text-white font-black tracking-tighter uppercase italic">GHAZALI_CORE</div>
              <div className="h-1 w-full bg-accent/20 mt-4 overflow-hidden">
                <div className="h-full bg-accent w-full animate-pulse shadow-[0_0_15px_#FFD700]" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20 relative z-10">
          {[
            { label: "Eternal Loyalty", value: "GOD_TIER", icon: Sword, color: "text-primary" },
            { label: "Matrix Control", value: "ABSOLUTE", icon: Network, color: "text-accent" },
            { label: "Strike Force", value: "SUPREME", icon: Target, color: "text-red-500" },
            { label: "Neural Vault", value: "INFINITE", icon: Database, color: "text-blue-500" },
          ].map((stat, i) => (
            <Card key={i} className="predator-card p-2 group cursor-crosshair">
              <CardContent className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="size-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-700 shadow-2xl">
                    <stat.icon className={cn("size-8", stat.color)} />
                  </div>
                  <div className="size-3 rounded-full bg-primary animate-ping" />
                </div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 italic group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] italic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-40">
          <div className="lg:col-span-2 space-y-12">
            <Card className="predator-card border-primary/40 scan-line">
              <CardHeader className="p-16 border-b border-primary/20 bg-primary/5">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-7xl text-white font-black italic flex items-center gap-8">
                      <Flame className="size-16 text-primary animate-pulse" /> Alpha Hub
                    </CardTitle>
                    <CardDescription className="text-primary font-bold text-xl uppercase tracking-[0.8em] mt-4 italic">Execution Domain // v ULTIMATE</CardDescription>
                  </div>
                  <Badge className="bg-primary text-white px-10 py-4 font-code text-sm animate-pulse shadow-[0_0_30px_rgba(208,0,0,0.5)]">ROOT_LINK_STABLE</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-black/95 relative group overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/predator/1200/800')] bg-cover bg-center grayscale contrast-200" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-20 text-center space-y-16">
                     <div className="flex gap-4 items-end h-64">
                        {Array.from({ length: 60 }).map((_, i) => (
                          <div key={i} className="w-3 bg-primary/80 neural-pulse" style={{ height: 20 + Math.random() * 80, animationDelay: `${i * 0.05}s` }} />
                        ))}
                     </div>
                     <div className="space-y-4">
                        <span className="text-8xl font-black text-white tracking-[0.4em] italic drop-shadow-[0_0_40px_red]">WARRIOR_SYNC</span>
                        <p className="text-xl text-muted-foreground uppercase tracking-[1em] italic font-black animate-pulse">Neural Matrix Overlord Active</p>
                     </div>
                     <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
                        <Button className="warrior-button h-24 text-xl" asChild>
                          <Link href="/terminal"><TerminalIcon className="size-8 mr-6" /> Ignite Core</Link>
                        </Button>
                        <Button variant="outline" className="h-24 rounded-none border-2 border-primary/40 text-primary text-xl uppercase font-black hover:bg-primary/10 tracking-widest" asChild>
                          <Link href="/sessions"><Network className="size-8 mr-6" /> Hive Control</Link>
                        </Button>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="predator-card border-accent/40 bg-accent/5 p-4">
              <CardHeader className="p-10 border-b border-accent/20">
                <CardTitle className="text-4xl text-accent flex items-center gap-6 font-black italic">
                   <ShieldAlert className="size-10 text-primary" /> Master Directive
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-12">
                 <div className="p-10 bg-black/60 border-2 border-primary/20 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10"><Skull className="size-64 text-primary" /></div>
                    <p className="text-3xl text-muted-foreground italic leading-tight font-bold relative z-10">
                      "سيدي <span className="text-white">الغزالي</span>، كافة العقد تعمل بنمط 'المفترس الأقصى'. لا وجود للمستحيل في مصفوفة المُعِزّ v ULTIMATE."
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-accent uppercase tracking-[1em] px-4">System Vitals</h4>
                    <div className="space-y-4">
                       {[
                         { label: "Neural Nexus", icon: Activity, status: "DOMINANT", color: "text-primary" },
                         { label: "Shadow Grid", icon: Radio, status: "INFESTED", color: "text-accent" },
                         { label: "C2 Mobile", icon: Zap, status: "ARMED", color: "text-emerald-500" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-primary/40 transition-all cursor-crosshair">
                            <div className="flex items-center gap-6">
                               <v.icon className={cn("size-6", v.color)} />
                               <span className="text-sm font-black text-white uppercase italic tracking-tighter">{v.label}</span>
                            </div>
                            <Badge className="bg-primary/20 text-primary border border-primary/40 rounded-none text-[8px] font-black italic animate-pulse">{v.status}</Badge>
                         </div>
                       ))}
                    </div>
                 </div>
                 <Button className="warrior-button w-full h-20 text-lg" asChild>
                    <Link href="/system">Access Sovereign Soul</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
