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
  ShieldAlert,
  Skull,
  Flame
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
      toast({ title: "Strike Nodes Resynced" })
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent)]">
        <header className="flex justify-between items-center mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Integrity Pulse</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Alpha Node Health Engine</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Sovereignty Status</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Real-time monitoring of the Predator Core and distributed strike nodes.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline" className="border-red-500/20 bg-red-600/5 rounded-2xl h-16 px-10 hover:bg-red-600/10 hover:border-red-600/40 transition-all text-xs font-bold uppercase tracking-[0.4em]">
            {refreshing ? <Loader2 className="size-5 animate-spin mr-4" /> : <RefreshCcw className="size-5 mr-4" />}
            Resync Strike Nodes
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Strike Force", value: "Locked", icon: Skull, status: "Lethal", color: "text-red-500" },
            { label: "Alpha Temp", value: "31°C", icon: Zap, status: "Optimal", color: "text-red-400" },
            { label: "Strike Capacity", value: "98.4%", icon: Flame, status: "Extreme", color: "text-orange-500" },
            { label: "Neural Load", value: "92%", icon: Cpu, status: "Peak", color: "text-red-600" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-red-600/40 transition-all cursor-crosshair rounded-[2.5rem] shadow-2xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-colors")}>
                    <stat.icon className={cn("size-7", stat.color)} />
                  </div>
                  <Badge variant="outline" className="bg-red-600/5 border-red-500/20 text-[10px] tracking-[0.2em] px-3 uppercase">{stat.status}</Badge>
                </div>
                <div className="text-4xl font-bold text-white tracking-tighter mb-1 uppercase italic">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-10">
            <Card className="glass-card border-red-600/20 overflow-hidden rounded-[3.5rem] shadow-2xl">
              <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10">
                <CardTitle className="text-3xl text-white flex items-center gap-6 italic tracking-tighter uppercase">
                  <Cpu className="size-8 text-red-600" /> Neural Strike Grid (Alpha)
                </CardTitle>
                <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.4em] mt-2">Predator Workload Orchestration</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-12">
                {[
                  { name: "Alpha Core (Qwen-3-Elite)", usage: 98, status: "Lethal", color: "bg-red-600" },
                  { name: "DeepSeek Coder v2 (Forge)", usage: 42, status: "Active", color: "bg-red-400" },
                  { name: "WhiteRabbitNeo-v3 (Attack)", usage: 88, status: "Engaged", color: "bg-orange-600" },
                  { name: "Neural Router v18.0", usage: 100, status: "Synced", color: "bg-red-500" }
                ].map((node, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className={cn("size-2 rounded-full animate-pulse shadow-[0_0_10px_red]", node.color)} />
                        <span className="text-lg font-bold text-white uppercase tracking-tight italic">{node.name}</span>
                      </div>
                      <span className="text-sm font-code text-red-500 font-bold">{node.usage}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className={cn("h-full transition-all duration-1000 shadow-[0_0_15px_red]", node.color)} style={{ width: `${node.usage}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/30 bg-red-950/5 relative overflow-hidden group rounded-[3.5rem] shadow-2xl">
               <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Anchor className="size-48 text-red-600 group-hover:rotate-12 transition-transform duration-1000" />
               </div>
               <CardHeader className="p-10">
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                       <div className="size-16 rounded-[2rem] bg-red-600/20 flex items-center justify-center border border-red-600/40 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                          <Anchor className="size-9 text-red-600" />
                       </div>
                       <div>
                          <CardTitle className="text-3xl text-white italic tracking-tighter uppercase">Noah's Ark v18</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.5em] mt-2">Predator Survival System</CardDescription>
                       </div>
                    </div>
                    <Badge className="bg-red-600 text-white px-6 py-2 rounded-full shadow-2xl animate-pulse">VAULT_ARMED</Badge>
                 </div>
               </CardHeader>
               <CardContent className="p-10 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed italic text-lg font-medium">
                          "The ultimate predator fallback. Encrypts and archives strike logic, evidence, and Alpha models into a sovereign core."
                        </p>
                        <div className="flex gap-6">
                           <div className="flex-1 p-6 rounded-[2rem] bg-black border border-white/5 shadow-inner">
                              <div className="text-[10px] font-bold text-red-500/60 uppercase tracking-[0.4em] mb-2">Last Strike Arch</div>
                              <div className="text-sm font-code text-white">2025-05-14 04:00</div>
                           </div>
                           <div className="flex-1 p-6 rounded-[2rem] bg-black border border-white/5 shadow-inner">
                              <div className="text-[10px] font-bold text-red-500/60 uppercase tracking-[0.4em] mb-2">Matrix Size</div>
                              <div className="text-sm font-code text-white">4.8 GB</div>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-5">
                        <Button 
                          className="h-20 bg-red-600 hover:bg-red-700 text-white font-bold rounded-[2rem] shadow-2xl shadow-red-600/40 text-[11px] uppercase tracking-[0.5em] group"
                        >
                          <Download className="size-6 mr-4 group-hover:-translate-y-2 transition-transform" /> Initiate Emergency Lock
                        </Button>
                        <Button variant="outline" className="h-16 border-white/10 bg-white/5 hover:bg-red-600/20 rounded-[2rem] text-[10px] uppercase tracking-[0.4em] font-bold">
                           <History className="size-5 mr-4" /> Rebuild from Ark
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-10">
            <Card className="glass-card border-red-600/20 h-fit rounded-[3rem] shadow-2xl">
              <CardHeader className="bg-red-600/5 border-b border-red-500/10 p-10">
                <CardTitle className="text-2xl text-white flex items-center gap-4 italic tracking-tighter uppercase">
                  <Lock className="size-6 text-red-600 shadow-[0_0_10px_red]" /> Strike Pulse
                </CardTitle>
                <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.4em] mt-2">Predator Integrity Events</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { event: "Alpha Node re-synced", time: "2m ago", type: "success" },
                  { event: "Shadow Node #42 active", time: "1h ago", type: "success" },
                  { event: "Ark archive validated", time: "5h ago", type: "success" },
                  { event: "Unknown access attempt crushed", time: "12h ago", type: "critical" }
                ].map((log, i) => (
                  <div key={i} className="flex gap-5 p-5 rounded-3xl bg-black/60 border border-white/5 group hover:border-red-600/40 transition-all">
                    {log.type === 'success' ? (
                      <CheckCircle2 className="size-5 text-red-500 mt-1 shrink-0 shadow-[0_0_8px_red]" />
                    ) : (
                      <Skull className="size-5 text-red-600 mt-1 shrink-0 animate-pulse" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-white font-bold tracking-tighter mb-1 uppercase italic">{log.event}</p>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-40">{log.time}</span>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full mt-6 text-[10px] uppercase font-bold tracking-[0.4em] text-red-500 hover:bg-red-600/10 rounded-2xl h-14">
                  Full Audit Log Strike
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/40 bg-red-600/5 rounded-[3rem] p-4 shadow-2xl">
               <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-white text-[11px] uppercase tracking-[0.6em] opacity-40 flex items-center gap-4 font-bold italic">
                    <ShieldAlert className="size-5 text-red-600" /> Physical Kill-Switch
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-8 pt-0 space-y-6">
                  <div className="flex justify-between items-center p-6 rounded-[1.5rem] bg-red-600/10 border border-red-600/30 shadow-2xl">
                     <span className="text-sm font-bold text-white uppercase italic tracking-widest">Silk Guardian</span>
                     <Badge className="bg-red-600 text-white animate-pulse-red py-2 px-6 rounded-full shadow-[0_0_15px_red]">ARMED</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground italic leading-relaxed font-medium text-center opacity-60">
                    "Guardian active. Physical intrusion detected via hardware pulse will trigger immediate data incineration and Alpha Node shutdown."
                  </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}