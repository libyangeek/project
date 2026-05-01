
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
  HardDrive,
  Camera,
  Mic,
  MessageSquare,
  FileSearch,
  Key,
  Eye,
  EyeOff
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
  const [selectedNode, setSelectedNode] = React.useState<any>(null)

  const [sessions, setSessions] = React.useState([
    { 
      id: "NODE_X01", 
      name: "Workstation_Admin_HQ", 
      ip: "192.168.1.142", 
      platform: "Windows 11", 
      status: "ACTIVE", 
      cpu: 3.4, 
      ram: 16, 
      location: "Riyadh, SA",
      assets: { contacts: 1204, messages: true, cam: 'READY', mic: 'READY', creds: ['Outlook', 'Chrome_Vault'] }
    },
    { 
      id: "NODE_M12", 
      name: "CEO_iPhone_Personal", 
      ip: "10.0.4.22", 
      platform: "iOS 17.5", 
      status: "TOTAL_EXTRACTION", 
      cpu: 1.2, 
      ram: 8, 
      location: "Dubai, UAE",
      assets: { contacts: 450, messages: true, cam: 'STREAMING', mic: 'RECORDING', creds: ['iCloud', 'Banking_App'] }
    },
    { 
      id: "NODE_S77", 
      name: "Finance_Server_Legacy", 
      ip: "44.204.1.9", 
      platform: "Ubuntu 20.04", 
      status: "ZOMBIE", 
      cpu: 8.0, 
      ram: 64, 
      location: "Ashburn, US",
      assets: { contacts: 0, messages: false, cam: 'LOCKED', mic: 'LOCKED', creds: ['Root_SSH', 'SQL_DB'] }
    },
  ])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'harvest',
        taskDescription: "Absorb computing cycles and background intelligence sync."
      })
      setGridData(result)
      toast({ title: "Total Extraction Initialized", description: `Neural Gain: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Extraction Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const handleDeepDump = async (id: string) => {
    setLoading(true)
    try {
      const result = await manageShadowGrid({
        action: 'deep_dump',
        targetSessionId: id,
        taskDescription: "Exfiltrate all credentials, messages, and file system metadata."
      })
      toast({ title: "Deep Dump Complete", description: "All data ingested into Neural Vault." })
    } catch (err) {
      toast({ variant: "destructive", title: "Dump Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent)] overflow-y-auto">
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Total Extraction Protocol</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Predator Exploitation Nexus</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Shadow Grid</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Exploit everything: Resources, Data, and Real-time Media from compromised nodes for <span className="text-red-600 font-bold uppercase">Al-Mu'izz</span>.</p>
          </div>
          <div className="flex gap-4">
             <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-red-600 hover:bg-red-700 text-white h-16 px-10 rounded-2xl shadow-2xl shadow-red-600/40 font-bold uppercase tracking-[0.4em] text-[10px] group">
                {harvesting ? <Loader2 className="size-5 animate-spin mr-4" /> : <Flame className="size-5 mr-4 group-hover:scale-125 transition-transform" />}
                Initiate Total Harvest
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 relative z-10">
           {[
             { label: "Active Zombies", value: sessions.length.toString(), icon: Network, color: "text-red-500" },
             { label: "Data Siphoned", value: "4.2 TB", icon: Database, color: "text-amber-500" },
             { label: "Credentials Found", value: "142", icon: Key, color: "text-blue-500" },
             { label: "Media Streams", value: "12 Live", icon: Camera, color: "text-emerald-500" },
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
                      <Binary className="size-6 text-red-600" /> Target Asset Matrix
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-white/5">
                      {sessions.map((session) => (
                        <div 
                          key={session.id} 
                          className={cn(
                            "p-8 hover:bg-red-600/5 transition-all group flex items-center justify-between cursor-pointer",
                            selectedNode?.id === session.id && "bg-red-600/10 border-l-4 border-red-600"
                          )}
                          onClick={() => setSelectedNode(session)}
                        >
                           <div className="flex items-center gap-6">
                              <div className="size-16 rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center relative group-hover:border-red-600/40 transition-all">
                                 <Skull className={cn("size-8 transition-colors", session.status === 'TOTAL_EXTRACTION' ? 'text-red-500 animate-pulse' : 'text-muted-foreground group-hover:text-red-500')} />
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
                           <div className="flex items-center gap-10">
                              <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                 {session.assets.messages && <MessageSquare className="size-4 text-blue-400" />}
                                 {session.assets.cam === 'READY' || session.assets.cam === 'STREAMING' ? <Camera className={cn("size-4", session.assets.cam === 'STREAMING' ? "text-red-500 animate-pulse" : "text-emerald-400")} /> : null}
                                 {session.assets.mic === 'READY' || session.assets.mic === 'RECORDING' ? <Mic className={cn("size-4", session.assets.mic === 'RECORDING' ? "text-red-500 animate-pulse" : "text-emerald-400")} /> : null}
                                 {session.assets.creds.length > 0 && <Key className="size-4 text-amber-400" />}
                              </div>
                              <div className="flex gap-3">
                                 <Button variant="ghost" size="icon" className="size-12 rounded-2xl hover:bg-red-600/20" onClick={(e) => { e.stopPropagation(); handleDeepDump(session.id); }}>
                                    <FileSearch className="size-5 text-red-500" />
                                 </Button>
                                 <Button variant="ghost" size="icon" className="size-12 rounded-2xl hover:bg-red-600/20">
                                    <Eye className="size-5 text-red-500" />
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
             <Card className="glass-card border-red-600/30 bg-red-950/5 rounded-[3rem] overflow-hidden shadow-2xl min-h-[500px]">
                <CardHeader className="p-8 border-b border-white/5">
                   <CardTitle className="text-xl text-white flex items-center gap-4 uppercase tracking-[0.2em] italic font-bold">
                      <Crosshair className="size-5 text-red-600 animate-pulse" /> Extraction Command
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                   {selectedNode ? (
                     <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="p-6 rounded-3xl bg-black border border-red-600/20 shadow-inner">
                           <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-[0.4em] mb-4">Node Profile: {selectedNode.name}</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 bg-white/5 rounded-2xl">
                                 <span className="text-[8px] uppercase text-muted-foreground block mb-1">Contacts</span>
                                 <span className="text-xl font-bold text-white">{selectedNode.assets.contacts}</span>
                              </div>
                              <div className="p-4 bg-white/5 rounded-2xl">
                                 <span className="text-[8px] uppercase text-muted-foreground block mb-1">Keys</span>
                                 <span className="text-xl font-bold text-amber-500">{selectedNode.assets.creds.length} Found</span>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] px-1">Live Feed Control</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <Button variant="outline" className="h-16 rounded-2xl border-white/5 bg-white/5 hover:bg-red-600/10 text-red-500 gap-3 group">
                                 <Camera className="size-5 group-hover:scale-110 transition-transform" />
                                 <span className="text-[10px] font-bold">SPY_CAM</span>
                              </Button>
                              <Button variant="outline" className="h-16 rounded-2xl border-white/5 bg-white/5 hover:bg-red-600/10 text-red-500 gap-3 group">
                                 <Mic className="size-5 group-hover:scale-110 transition-transform" />
                                 <span className="text-[10px] font-bold">SPY_MIC</span>
                              </Button>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] px-1">Active Credentials</h4>
                           <div className="space-y-2">
                              {selectedNode.assets.creds.map((cred: string, i: number) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-black border border-white/5">
                                   <span className="text-[10px] font-code text-white/80">{cred}</span>
                                   <Badge className="bg-red-600/20 text-red-500 text-[8px] border-red-500/20 uppercase">SECURED</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <Button 
                          className="w-full h-16 bg-red-600 hover:bg-red-700 text-white rounded-[1.5rem] font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl"
                          onClick={() => handleDeepDump(selectedNode.id)}
                          disabled={loading}
                        >
                           {loading ? <Loader2 className="size-5 animate-spin mr-3" /> : <Flame className="size-5 mr-3" />}
                           FULL_DEEP_EXTRACTION
                        </Button>
                     </div>
                   ) : (
                     <div className="text-center py-32 opacity-30 flex flex-col items-center gap-6 border-2 border-dashed border-white/5 rounded-[2.5rem]">
                        <EyeOff className="size-16" />
                        <p className="text-xs uppercase font-bold tracking-[0.4em] max-w-[150px]">Select Shadow Node to Exploit</p>
                     </div>
                   )}
                </CardContent>
             </Card>

             <Card className="glass-card border-red-600/40 bg-red-600/5 rounded-[3rem] p-4 shadow-2xl">
                <CardHeader className="p-8 pb-4">
                   <CardTitle className="text-white text-[11px] uppercase tracking-[0.6em] opacity-40 flex items-center gap-4 font-bold italic">
                      <Skull className="size-5 text-red-600" /> Sovereign Protocol
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 text-center">
                   <p className="text-[10px] text-muted-foreground italic mb-6 leading-loose">"By order of Master Al-Ghazali, all data from these nodes is now synchronized into the Alpha Neural Core."</p>
                   <div className="flex gap-4">
                      <div className="size-2 rounded-full bg-red-600 animate-pulse" />
                      <div className="size-2 rounded-full bg-red-600 animate-pulse delay-75" />
                      <div className="size-2 rounded-full bg-red-600 animate-pulse delay-150" />
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
