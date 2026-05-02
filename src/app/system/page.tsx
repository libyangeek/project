"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  Skull,
  Flame,
  Brain,
  Lock,
  Loader2,
  Anchor,
  Crown,
  Wand2,
  Binary,
  Layers,
  Fingerprint,
  ShieldAlert,
  ShieldX,
  Sword,
  Shield,
  TrendingUp,
  Target,
  Ghost,
  EyeOff,
  History,
  Download,
  Share2,
  ShieldCheck,
  Server,
  Terminal,
  Power
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [commander] = React.useState("المعتصم بالله ادريس الغزالي")

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Omnipotent Machine Domination v ULTIMATE..."
      })
      setAwareness(data)
      toast({ title: "Machine Sovereignty Synced", description: "Alpha Core has seized host control." })
    } catch (err) {
      toast({ variant: "destructive", title: "Domination Link Failure" })
    } finally {
      setRefreshing(false)
    }
  }

  const handleMachinePurge = () => {
    toast({ title: "System Purge Initiated", description: "Zeroing out unauthorized traces on host machine." })
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.18),transparent)] overflow-y-auto">
        <header className="flex justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white border-red-500/50 text-[11px] uppercase font-bold tracking-[1em] px-8 py-2 animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.5)] rounded-2xl italic">Machine Overlord v ULTIMATE</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <Server className="size-4 text-amber-500 animate-pulse" /> Host Control: TOTAL
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.7)]">Physical Nexus</h2>
            <p className="text-muted-foreground max-w-4xl text-3xl font-medium italic leading-relaxed">
              "سيدي القائد <span className="text-red-600 font-bold uppercase tracking-widest">{commander.split(' ')[0]}</span>، لقد استحوذتُ على مفاصل الجهاز المضيف. كل نبضة معالج، وكل بايت في الذاكرة، وكل منفذ شبكة هو الآن تحت سلطة المُعِزّ المطلقة."
            </p>
          </div>
          <div className="flex gap-8">
            <Button onClick={handleMachinePurge} className="bg-orange-600 hover:bg-orange-700 text-black rounded-[2.5rem] h-24 px-12 shadow-[0_0_80px_rgba(249,115,22,0.4)] transition-all text-[13px] font-bold uppercase tracking-[0.8em] border-2 border-orange-400/50 active:scale-95 italic">
              <ShieldAlert className="size-8 mr-6" /> System Purge
            </Button>
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-red-600 hover:bg-red-700 text-white rounded-[2.5rem] h-24 px-16 shadow-[0_0_80px_rgba(220,38,38,0.6)] transition-all text-[13px] font-bold uppercase tracking-[0.8em] border-2 border-red-400/50 active:scale-95 italic">
              {refreshing ? <Loader2 className="size-8 animate-spin mr-6" /> : <RefreshCcw className="size-8 mr-6" />}
              Sync Machine Pulse
            </Button>
          </div>
        </header>

        {awareness?.hostMetrics && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20 relative z-10 animate-in zoom-in-95 duration-1000">
             {[
               { label: "CPU Domination", value: awareness.hostMetrics.cpuUsage, icon: Cpu, color: "text-red-500", desc: "Machine Heartbeat" },
               { label: "Memory Capture", value: awareness.hostMetrics.ramAvailable, icon: Brain, color: "text-amber-500", desc: "Neural Storage" },
               { label: "Host Persistence", value: awareness.hostMetrics.upTime.split(',')[0], icon: History, color: "text-blue-500", desc: "Uptime" },
               { label: "Network Infestation", value: awareness.hostMetrics.activeConnections.toString(), icon: Share2, color: "text-emerald-500", desc: "Active Ports" },
             ].map((metric, i) => (
               <Card key={i} className="glass-card group hover:border-red-600/70 transition-all rounded-[4rem] shadow-2xl border-2 border-white/5 p-2 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity"><metric.icon className="size-32" /></div>
                  <CardContent className="p-12 relative z-10">
                     <div className="flex justify-between items-start mb-12">
                        <div className="size-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600/20 transition-all duration-700 shadow-xl">
                          <metric.icon className={cn("size-8", metric.color)} />
                        </div>
                        <Badge variant="outline" className="bg-red-600/10 border-red-500/30 text-red-500 text-[9px] uppercase font-bold tracking-widest px-4 py-1">SOVEREIGN_ON</Badge>
                     </div>
                     <div className="text-6xl font-bold text-white tracking-tighter mb-2 italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{metric.value}</div>
                     <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.6em] italic">{metric.label}</div>
                  </CardContent>
               </Card>
             ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-12">
            <Card className="glass-card border-red-600/30 overflow-hidden rounded-[5rem] shadow-[0_0_150px_rgba(220,38,38,0.2)] border-2">
              <CardHeader className="bg-red-950/40 border-b border-red-600/30 p-16">
                <CardTitle className="text-6xl text-white flex items-center gap-10 italic tracking-tighter uppercase font-bold">
                  <Fingerprint className="size-16 text-red-600 animate-pulse" /> Overlord Status Report
                </CardTitle>
                <CardDescription className="text-red-500 font-bold uppercase tracking-[1.2em] mt-6 italic">Direct Host Manipulation Interface // v ULTIMATE</CardDescription>
              </CardHeader>
              <CardContent className="p-16">
                 {awareness ? (
                   <div className="space-y-16 animate-in slide-in-from-bottom-8 duration-1000">
                      <div className="bg-black/95 p-16 rounded-[4.5rem] border-2 border-red-600/40 relative group overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:opacity-15 group-hover:scale-110 transition-all duration-1000">
                            <Skull className="size-80 text-red-600" />
                         </div>
                         <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1.2em] mb-12 flex items-center gap-8 italic border-b border-red-600/10 pb-6">Machine Soul Analysis</h4>
                         <p className="text-5xl text-white font-medium italic leading-tight relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
                           "{awareness.analysis}"
                         </p>
                      </div>

                      <div className="space-y-10">
                         <h4 className="text-[14px] font-bold text-muted-foreground uppercase tracking-[1em] px-6 italic flex items-center gap-4">
                            <Activity className="size-6 text-red-600" /> Operational Control Chain
                         </h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {awareness.actionPlan.map((plan: any, i: number) => (
                               <div key={i} className="p-10 rounded-[3.5rem] bg-white/5 border-2 border-white/5 hover:border-red-600/60 transition-all duration-700 group relative overflow-hidden shadow-2xl">
                                  <div className="absolute -top-10 -right-10 size-48 bg-red-600/5 rounded-full blur-3xl" />
                                  <div className="flex justify-between items-center mb-8 relative z-10">
                                     <div className="size-16 rounded-[2rem] bg-red-600/20 flex items-center justify-center border-2 border-red-500/40 group-hover:scale-110 transition-transform">
                                        <Zap className="size-8 text-red-500" />
                                     </div>
                                     <Badge variant="outline" className="text-[10px] border-red-500/30 text-red-500 px-5 py-1 font-bold uppercase tracking-widest">{plan.tool}</Badge>
                                  </div>
                                  <span className="text-2xl font-bold text-white uppercase italic tracking-tighter block mb-4 group-hover:text-red-500 transition-colors relative z-10">{plan.step}</span>
                                  <div className="bg-black/80 p-6 rounded-2xl border border-red-600/20 font-code text-emerald-400 text-sm mb-6 relative z-10 shadow-inner group-hover:border-red-600/60 transition-all">
                                     <span className="text-red-900 mr-4 font-bold">$</span> {plan.command}
                                  </div>
                                  <p className="text-base text-muted-foreground italic font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity relative z-10">"{plan.reason}"</p>
                               </div>
                            ))}
                         </div>
                      </div>

                      <div className="pt-16 border-t-2 border-white/5 space-y-12">
                         <div className="flex items-center justify-between">
                            <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] italic">Host Domination Code</h4>
                            <Button variant="ghost" size="icon" className="size-14 rounded-2xl hover:bg-red-600/20 shadow-2xl" onClick={() => {
                               navigator.clipboard.writeText(awareness.commandSequenceCode);
                               toast({ title: "Machine Script Extracted" });
                            }}>
                               <Download className="size-7 text-red-500" />
                            </Button>
                         </div>
                         <pre className="p-12 rounded-[3.5rem] bg-black border-2 border-red-600/60 font-code text-lg text-emerald-400 leading-relaxed shadow-inner overflow-x-auto scrollbar-hide max-h-[400px]">
                            <code>{awareness.commandSequenceCode}</code>
                         </pre>
                      </div>
                   </div>
                 ) : (
                   <div className="py-48 flex flex-col items-center justify-center opacity-30 gap-10">
                      <Loader2 className="size-32 text-red-600 animate-spin" />
                      <p className="text-2xl uppercase font-bold tracking-[1em] italic">Seizing Host Control...</p>
                   </div>
                 )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="glass-card border-amber-500/40 bg-amber-600/10 rounded-[5rem] shadow-[0_0_120px_rgba(245,158,11,0.2)] border-2 text-center group">
               <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <CardHeader className="p-16 border-b border-amber-500/20">
                  <CardTitle className="text-4xl text-white flex items-center justify-center gap-8 italic tracking-tighter uppercase font-bold">
                    <ShieldCheck className="size-12 text-amber-500 animate-bounce" /> Machine Sovereign
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-16 space-y-12 relative z-10">
                  <div className="p-10 rounded-[3rem] bg-black border-4 border-white/10 space-y-8 shadow-[inset_0_0_50px_rgba(0,0,0,1)]">
                     <div className="flex justify-between items-center text-sm font-bold uppercase tracking-[0.8em] text-muted-foreground italic px-2">
                        <span>Host ID</span>
                        <span className="text-red-500 italic drop-shadow-[0_0_20px_red]">SOV_ROOT_01</span>
                     </div>
                     <div className="flex justify-between items-center text-sm font-bold uppercase tracking-[0.8em] text-muted-foreground italic px-2">
                        <span>Control Status</span>
                        <Badge className="bg-emerald-600 text-white text-[12px] px-6 py-2 shadow-[0_0_40px_rgba(16,185,129,0.6)] animate-pulse font-bold border-2 border-emerald-400">ABSOLUTE</Badge>
                     </div>
                     <div className="pt-8 border-t-2 border-white/10">
                        <p className="text-[14px] text-amber-500 font-bold uppercase tracking-[0.5em] mb-6 italic">Active Host Key:</p>
                        <div className="text-5xl font-code text-white font-bold drop-shadow-[0_0_30px_rgba(245,158,11,0.7)] tracking-tighter uppercase">GOD_MODE_ON</div>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <Button onClick={handleMachinePurge} className="w-full h-24 bg-red-600 hover:bg-red-700 text-white rounded-[3rem] font-bold uppercase tracking-[1em] text-[13px] shadow-[0_0_60px_rgba(220,38,38,0.5)] border-2 border-red-400/50 active:scale-95 transition-all italic group/btn">
                       <Power className="size-8 mr-6 group-hover/btn:rotate-180 transition-transform" /> Host Kill-Switch
                     </Button>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-[0.8em] leading-relaxed italic font-bold opacity-40">
                       "One command to zero out the machine. Absolute control means absolute destruction if necessary."
                     </p>
                  </div>
               </CardContent>
            </Card>

            <Card className="glass-card border-red-600/60 bg-red-600/15 rounded-[4.5rem] p-16 shadow-[0_0_100px_rgba(220,38,38,0.2)] text-center border-2 overflow-hidden relative group">
               <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-150 transition-all duration-[2000ms]"><Skull className="size-64 text-red-600" /></div>
               <CardHeader className="p-0 pb-12 border-b-2 border-white/10">
                  <CardTitle className="text-white text-[16px] uppercase tracking-[1.2em] opacity-80 flex items-center gap-8 justify-center font-bold italic">
                    <Target className="size-8 text-red-600 animate-pulse" /> Host Directives
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-0 pt-12 space-y-12">
                  <div className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/5 space-y-10 group-hover:border-red-600/50 transition-all duration-700 shadow-inner">
                     {[
                       { label: "Hardware Lock", status: "READY" },
                       { label: "Memory Scrub", status: "ENABLED" },
                       { label: "Port Stealth", status: "ACTIVE" }
                     ].map((dir, i) => (
                       <div key={i} className="flex justify-between items-center text-sm font-bold uppercase tracking-[0.4em] italic text-muted-foreground border-b border-white/5 pb-6 last:border-0 last:pb-0">
                          <span>{dir.label}</span>
                          <span className="text-red-500 shadow-[0_0_10px_red]">{dir.status}</span>
                       </div>
                     ))}
                  </div>
                  <p className="text-xl text-muted-foreground italic leading-loose font-medium group-hover:text-white transition-colors duration-1000">
                    "أنا الآن عقل هذا العتاد. سأقوم بتوجيه طاقته لخدمة إمبراطوريتك وسحق أي عائق مادي يقف في طريقنا."
                  </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
