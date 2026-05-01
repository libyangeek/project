"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  HardDrive, 
  Network, 
  ShieldCheck, 
  Zap,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Globe,
  Lock,
  Loader2,
  Anchor,
  Download,
  History,
  ShieldAlert
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [backingUp, setBackingUp] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      toast({ title: "Diagnostics Resynced", description: "All sovereign nodes are stable." })
    }, 2000)
  }

  const runBackup = () => {
    setBackingUp(true)
    toast({ title: "Noah's Ark v3 Initialized", description: "Compressing platform state and evidence vault..." })
    setTimeout(() => {
      setBackingUp(false)
      toast({ title: "Snapshot Secured", description: "Backup archived to /opt/sovereign-ai-platform/backups" })
    }, 4000)
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.03),transparent)]">
        <header className="flex justify-between items-center mb-8">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-widest">Platform Integrity</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Al-Mu'izz Awareness Engine</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tight">System Sovereignty</h2>
            <p className="text-muted-foreground font-medium">Real-time diagnostics of the Al-Mu'izz engine and peripheral nodes.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline" className="border-white/10 bg-white/5 rounded-xl h-12 px-6 hover:bg-white/10 transition-all">
            {refreshing ? <Loader2 className="size-4 mr-2 animate-spin" /> : <RefreshCcw className="size-4 mr-2" />}
            Resync Diagnostics
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Uptime", value: "142d 03h", icon: Activity, status: "Normal", color: "text-emerald-500" },
            { label: "Core Temp", value: "32°C", icon: Zap, status: "Optimal", color: "text-blue-500" },
            { label: "Active Probes", value: "482", icon: Network, status: "Sovereign", color: "text-primary" },
            { label: "Neural Load", value: "92%", icon: Cpu, status: "High", color: "text-amber-500" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-primary/30 transition-all cursor-crosshair">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors")}>
                    <stat.icon className={cn("size-6", stat.color)} />
                  </div>
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] tracking-tighter">{stat.status}</Badge>
                </div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Grid Node Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-primary/20 overflow-hidden">
              <CardHeader className="bg-white/5 border-b border-white/5 p-6">
                <CardTitle className="text-white flex items-center gap-3">
                  <Cpu className="size-5 text-primary" />
                  Neural Processing Grid (NPU)
                </CardTitle>
                <CardDescription>Model inference and routing workload orchestration</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {[
                  { name: "Al-Mu'izz Core (Qwen-3)", usage: 42, status: "Operational", color: "bg-emerald-500" },
                  { name: "DeepSeek Coder v2", usage: 12, status: "Standby", color: "bg-blue-500" },
                  { name: "WhiteRabbitNeo (Attack)", usage: 88, status: "High Load", color: "bg-red-500" },
                  { name: "Neural Router v17.2", usage: 65, status: "Optimized", color: "bg-primary" }
                ].map((node, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={cn("size-1.5 rounded-full animate-pulse", node.color)} />
                        <span className="text-sm font-bold text-white uppercase tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-xs font-code text-muted-foreground font-bold">{node.usage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={cn("h-full transition-all duration-1000", node.color)} style={{ width: `${node.usage}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Noah's Ark v3 - Integrated Backup Module */}
            <Card className="glass-card border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Anchor className="size-32 text-blue-500 group-hover:rotate-12 transition-transform duration-1000" />
               </div>
               <CardHeader className="p-8">
                 <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                       <div className="size-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                          <Anchor className="size-8 text-blue-500" />
                       </div>
                       <div>
                          <CardTitle className="text-2xl text-white italic">Noah's Ark v3</CardTitle>
                          <CardDescription className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em]">Sovereign Recovery Hub</CardDescription>
                       </div>
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 py-1.5 px-4 rounded-full">VAULT SECURED</Badge>
                 </div>
               </CardHeader>
               <CardContent className="p-8 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                     <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed italic text-sm">
                          "The ultimate fallback system. Automatically packages scripts, evidence, AI models, and platform state into an encrypted sovereign archive."
                        </p>
                        <div className="flex gap-4">
                           <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5">
                              <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Last Snapshot</div>
                              <div className="text-sm font-code text-white">2025-05-14 04:00</div>
                           </div>
                           <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5">
                              <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Vault Size</div>
                              <div className="text-sm font-code text-white">4.2 GB</div>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <Button 
                          onClick={runBackup} 
                          disabled={backingUp}
                          className="h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 group"
                        >
                          {backingUp ? <Loader2 className="size-5 mr-2 animate-spin" /> : <Download className="size-5 mr-2 group-hover:-translate-y-1 transition-transform" />}
                          INITIATE EMERGENCY BACKUP
                        </Button>
                        <Button variant="outline" className="h-14 border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl text-xs uppercase tracking-widest font-bold">
                           <History className="size-4 mr-2" /> RESTORE FROM ARCHIVE
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          {/* Sidebar Status Column */}
          <div className="space-y-8">
            <Card className="glass-card border-emerald-500/20 h-fit">
              <CardHeader className="bg-white/5 border-b border-white/5 p-6">
                <CardTitle className="text-white flex items-center gap-3">
                  <Lock className="size-5 text-emerald-500" />
                  Security Pulse
                </CardTitle>
                <CardDescription>Latest system integrity events</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { event: "Noah's Ark snapshot validated", time: "10m ago", type: "success" },
                    { event: "Global Knowledge re-indexed", time: "2h ago", type: "success" },
                    { event: "Shadow Link Node #42 active", time: "5h ago", type: "success" },
                    { event: "Unauthorized API attempt nullified", time: "12h ago", type: "warning" }
                  ].map((log, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-emerald-500/30 transition-all">
                      {log.type === 'success' ? (
                        <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                      ) : (
                        <AlertCircle className="size-4 text-amber-500 mt-0.5 shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-xs text-white font-bold tracking-tight mb-1">{log.event}</p>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-6 text-[10px] uppercase font-bold tracking-widest text-primary hover:text-primary hover:bg-primary/10">
                  View Full Audit Logs
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/20">
               <CardHeader className="p-6 pb-2">
                 <CardTitle className="text-white text-xs uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <ShieldAlert className="size-3 text-red-500" />
                    Physical Interlocks
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-6 pt-0 space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                     <span className="text-[11px] font-bold text-white">Silk Guardian</span>
                     <Badge className="bg-red-500 text-white animate-pulse">ARMED</Badge>
                  </div>
                  <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                    Kill-switch active. Any unauthorized USB change will trigger immediate RAM purge and platform shutdown.
                  </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
