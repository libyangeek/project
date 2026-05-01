"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Network, 
  Cpu, 
  Database, 
  Zap, 
  Skull, 
  Activity, 
  Loader2, 
  Power, 
  ChevronRight, 
  Globe, 
  ShieldAlert,
  Flame,
  Binary,
  GripVertical,
  Crosshair,
  Terminal as TerminalIcon,
  HardDrive
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function ShadowGridPage() {
  const [loading, setLoading] = React.useState(false)
  const [harvesting, setHarvesting] = React.useState(false)
  const [gridData, setGridData] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  const [sessions, setSessions] = React.useState([
    { id: "NODE_X01", name: "Corporate_Workstation_04", ip: "192.168.1.142", platform: "Windows 11", status: "ACTIVE", cpu: 3.4, ram: 16, location: "Riyadh, SA" },
    { id: "NODE_M12", name: "Mobile_User_Droid", ip: "10.0.4.22", platform: "Android 14", status: "HARVESTING", cpu: 1.2, ram: 8, location: "Dubai, UAE" },
    { id: "NODE_S77", name: "Cloud_Server_Proxy", ip: "44.204.1.9", platform: "Ubuntu 22.04", status: "ZOMBIE", cpu: 8.0, ram: 64, location: "Ashburn, US" },
  ])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'harvest',
        taskDescription: "Absorb computing cycles for AI model reinforcement."
      })
      setGridData(result)
      toast({ title: "Resource Harvesting Initialized", description: `Neural Gain: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Harvest Failure" })
    } finally {
      setHarvesting(false)
    }
  }

  const handleCommand = async (id: string) => {
    toast({ title: "Linking to Shadow Node", description: `Establishing encrypted tunnel to ${id}...` })
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent)] overflow-y-auto">
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Shadow Grid Nexus</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Predator Resource Command</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Session Grid</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Manage compromised nodes and harvest their computational power for <span className="text-red-600 font-bold">Al-Mu'izz</span> sovereign operations.</p>
          </div>
          <div className="flex gap-4">
             <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-red-600 hover:bg-red-700 text-white h-16 px-10 rounded-2xl shadow-2xl shadow-red-600/40 font-bold uppercase tracking-[0.4em] text-[10px]">
                {harvesting ? <Loader2 className="size-5 animate-spin mr-4" /> : <Flame className="size-5 mr-4" />}
                Harvest All Cycles
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
           {[
             { label: "Active Nodes", value: sessions.filter(s => s.status !== 'LOST').length.toString(), icon: Network, color: "text-red-500" },
             { label: "Total CPU Gain", value: "13.0 Ghz", icon: Cpu, color: "text-amber-500" },
             { label: "Total RAM Pool", value: "88 GB", icon: HardDrive, color: "text-blue-500" },
             { label: "Strike Ready", value: "100%", icon: Zap, color: "text-emerald-500" },
           ].map((stat, i) => (
             <Card key={i} className="glass-card border-red-500/10 group hover:border-red-600/40 transition-all rounded-3xl overflow-hidden shadow-2xl">
                <CardContent className="p-8 relative">
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-colors">
                        <stat.icon className={cn("size-6", stat.color)} />
                      </div>
                      <div className="size-2 rounded-full bg-red-600 animate-ping shadow-[0_0_8px_red]" />
                   </div>
                   <div className="text-3xl font-bold text-white italic tracking-tighter mb-1 uppercase">{stat.value}</div>
                   <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.4em]">{stat.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-8">
             <Card className="glass-card border-red-600/20 rounded-[3rem] overflow-hidden shadow-2xl">
                <CardHeader className="bg-red-950/20 border-b border-red-600/10 p-8">
                   <CardTitle className="text-2xl text-white italic flex items-center gap-4 uppercase tracking-tighter">
                      <Binary className="size-6 text-red-600" /> Active Shadow Matrix
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-white/5">
                      {sessions.map((session) => (
                        <div key={session.id} className="p-8 hover:bg-red-600/5 transition-all group flex items-center justify-between">
                           <div className="flex items-center gap-6">
                              <div className="size-16 rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center relative group-hover:border-red-600/40 transition-all">
                                 <Skull className={cn("size-8 transition-colors", session.status === 'HARVESTING' ? 'text-red-500 animate-pulse' : 'text-muted-foreground group-hover:text-red-500')} />
                                 {session.status === 'ACTIVE' && <div className="absolute top-0 right-0 size-3 bg-emerald-500 rounded-full border-2 border-black" />}
                              </div>
                              <div>
                                 <div className="flex items-center gap-3 mb-1">
                                    <span className="text-lg font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter">{session.name}</span>
                                    <Badge variant="outline" className="text-[8px] bg-red-600/5 border-red-500/20 uppercase px-2">{session.id}</Badge>
                                 </div>
                                 <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Globe className="size-3" /> {session.ip}</span>
                                    <span className="flex items-center gap-1"><Activity className="size-3" /> {session.platform}</span>
                                    <span className="flex items-center gap-1 text-red-500/60 font-bold italic">{session.location}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-12">
                              <div className="text-right hidden md:block">
                                 <div className="text-xs font-bold text-white mb-1 uppercase tracking-tighter">{session.cpu} Ghz / {session.ram} GB</div>
                                 <Progress value={session.status === 'HARVESTING' ? 85 : 0} className="h-1 w-24 bg-white/5" />
                              </div>
                              <div className="flex gap-3">
                                 <Button variant="ghost" size="icon" className="size-12 rounded-2xl hover:bg-red-600/20" onClick={() => handleCommand(session.id)}>
                                    <TerminalIcon className="size-5 text-red-500" />
                                 </Button>
                                 <Button variant="ghost" size="icon" className="size-12 rounded-2xl hover:bg-red-600/20">
                                    <Power className="size-5 text-red-600" />
                                 </Button>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>
          </div>

          <div className="space-y-8">
             <Card className="glass-card border-red-600/30 bg-red-950/5 rounded-[3rem] overflow-hidden shadow-2xl">
                <CardHeader className="p-8">
                   <CardTitle className="text-xl text-white flex items-center gap-4 uppercase tracking-[0.2em] italic font-bold">
                      <Activity className="size-5 text-red-600 animate-pulse" /> Neural Gain Logic
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-8">
                   {gridData ? (
                     <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="p-6 rounded-3xl bg-black border border-red-600/20 shadow-inner">
                           <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-[0.4em] mb-4">Execution Strategy</h4>
                           <p className="text-sm text-muted-foreground italic leading-loose">"{gridData.executionStrategy}"</p>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between text-[11px] font-bold uppercase text-red-500/60 tracking-widest px-2">
                              <span>Power Injected</span>
                              <span className="text-white">{gridData.totalProcessingPower}</span>
                           </div>
                           <div className="p-5 rounded-2xl bg-red-600/10 border border-red-500/30 text-center relative overflow-hidden">
                              <div className="text-3xl font-bold text-white italic drop-shadow-[0_0_10px_red]">{gridData.neuralGain}</div>
                              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">Core Performance Boost</div>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="text-center py-20 opacity-30 flex flex-col items-center gap-6 border-2 border-dashed border-white/5 rounded-3xl">
                        <Crosshair className="size-12" />
                        <p className="text-xs uppercase font-bold tracking-widest">Select Node to Synchronize</p>
                     </div>
                   )}

                   <div className="pt-8 border-t border-white/5 space-y-4">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] px-1">Distributed Tasks</h4>
                      {[
                        { name: "Distributed Brute-force", status: "QUEUED" },
                        { name: "AI Gradient Pushing", status: "READY" },
                        { name: "Global OSINT Proxying", status: "ACTIVE" }
                      ].map((task, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-black border border-white/5 group hover:border-red-600/40 transition-all">
                           <span className="text-xs font-bold text-muted-foreground group-hover:text-white transition-colors">{task.name}</span>
                           <Badge variant="outline" className="text-[9px] bg-red-600/5 border-red-500/20 text-red-500 px-3">{task.status}</Badge>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>

             <Card className="glass-card border-red-600/40 bg-red-600/5 rounded-[3rem] p-4 shadow-2xl">
                <CardHeader className="p-8 pb-4">
                   <CardTitle className="text-white text-[11px] uppercase tracking-[0.6em] opacity-40 flex items-center gap-4 font-bold italic">
                      <Skull className="size-5 text-red-600" /> System Overload
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 text-center">
                   <p className="text-[10px] text-muted-foreground italic mb-6">"Warning: Deploying all harvested cycles simultaneously may cause localized network instability."</p>
                   <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl transition-all active:scale-95">
                     FORCE_GLOBAL_OVERRIDE
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}