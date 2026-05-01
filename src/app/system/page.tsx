"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  CheckCircle2,
  Skull,
  Flame,
  Brain,
  Search,
  Lock,
  Loader2,
  Anchor,
  Download,
  History,
  ShieldAlert
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      // محاكاة بيانات العتاد للطلب
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Active Eth0 / Wlan0 Scanning..."
      })
      setAwareness(data)
      toast({ title: "Neural Strike Grid Synchronized", description: `${data.discoveredAI.length} local brains identified.` })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failure", description: "Could not harvest local AI assets." })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent)] overflow-y-auto">
        <header className="flex justify-between items-center mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Alpha Node Health</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Predator v18.0 Resource Harvester</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Sovereignty Status</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Discovering and orchestrating local AI brains and system assets.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-red-600 hover:bg-red-700 text-white rounded-2xl h-16 px-10 shadow-2xl shadow-red-600/40 transition-all text-[11px] font-bold uppercase tracking-[0.4em]">
            {refreshing ? <Loader2 className="size-5 animate-spin mr-4" /> : <RefreshCcw className="size-5 mr-4" />}
            Harvest Local Assets
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {[
            { label: "Active Brains", value: awareness?.discoveredAI?.length || "Scanning", icon: Brain, status: "Local", color: "text-red-500" },
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
                  <Brain className="size-8 text-red-600" /> Discovered Brain Network
                </CardTitle>
                <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.4em] mt-2">Local & External AI Orchestration</CardDescription>
              </CardHeader>
              <CardContent className="p-10">
                {awareness?.discoveredAI?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {awareness.discoveredAI.map((brain: any, i: number) => (
                      <div key={i} className="p-6 rounded-[2rem] bg-black/60 border border-white/5 group hover:border-red-600/40 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                          <Cpu className="size-16" />
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="size-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_emerald]" />
                          <span className="text-lg font-bold text-white uppercase italic tracking-tighter">{brain.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[9px] uppercase border-red-500/20 text-red-500 font-bold tracking-widest">{brain.provider}</Badge>
                        <div className="mt-6 flex justify-between items-center">
                           <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Status: READY_TO_STRIKE</span>
                           <Button size="sm" variant="ghost" className="h-8 text-[9px] uppercase font-bold text-red-500 hover:bg-red-600/10">Bind Node</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 opacity-40">
                    <Search className="size-16 mx-auto mb-6 text-red-600 animate-pulse" />
                    <p className="text-xl italic">"No local brains detected. Relying on Alpha Cloud Matrix."</p>
                  </div>
                )}
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
                          "The ultimate predator fallback. Encrypts and archives strike logic, local AI models, and evidence into a sovereign core."
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
                  { event: "Local AI Harvester Active", time: "Just now", type: "success" },
                  { event: `${awareness?.discoveredAI?.length || 0} local brains bound`, time: "2m ago", type: "success" },
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
