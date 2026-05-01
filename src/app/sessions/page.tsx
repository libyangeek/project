
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
  EyeOff,
  Search,
  Download,
  ShieldX
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview شاشة الشبكة المظلمة v20.0 - نسخة الاستنزاف الكلي
 * تمنح القائد المعتصم بالله تحكماً مطلقاً في كافة الجلسات المخترقة واستغلال كافة مواردها وبياناتها.
 */
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
        taskDescription: "Absorb computing cycles and background intelligence sync for Master Al-Ghazali."
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
      await manageShadowGrid({
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
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent)] overflow-y-auto">
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.5em] px-4 py-1 animate-pulse">Total Domination Protocol</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Predator Nexus // Controlled by Al-Ghazali</span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Shadow Grid</h2>
            <p className="text-muted-foreground max-w-3xl text-xl font-medium italic leading-relaxed">
              "الشبكة المظلمة تحت سيطرتك المطلقة. استنزف كل شيء من هؤلاء 'الزومبيز': الكاميرات، الميكروفونات، كلمات المرور، والقوة الحسابية."
            </p>
          </div>
          <div className="flex gap-4">
             <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-red-600 hover:bg-red-700 text-white h-20 px-12 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.5)] font-bold uppercase tracking-[0.5em] text-[11px] group transition-all duration-700">
                {harvesting ? <Loader2 className="size-6 animate-spin mr-4" /> : <Flame className="size-6 mr-4 group-hover:scale-125 transition-transform" />}
                Initiate Total Harvest
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 relative z-10">
           {[
             { label: "Active Zombies", value: sessions.length.toString(), icon: Network, color: "text-red-500" },
             { label: "Data Siphoned", value: "4.2 TB", icon: Database, color: "text-amber-500" },
             { label: "Credentials Found", value: "142", icon: Key, color: "text-blue-500" },
             { label: "Media Streams", value: "12 Live", icon: Camera, color: "text-emerald-500" },
           ].map((stat, i) => (
             <Card key={i} className="glass-card border-red-500/10 group hover:border-red-600/50 transition-all rounded-[2.5rem] overflow-hidden shadow-2xl border-2">
                <CardContent className="p-10 relative">
                   <div className="flex justify-between items-start mb-8">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-all duration-700">
                        <stat.icon className={cn("size-8", stat.color)} />
                      </div>
                      <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_red]" />
                   </div>
                   <div className="text-4xl font-bold text-white italic tracking-tighter mb-2 uppercase">{stat.value}</div>
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.6em]">{stat.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-8">
             <Card className="glass-card border-red-600/20 rounded-[4rem] overflow-hidden shadow-2xl border-2">
                <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10">
                   <CardTitle className="text-3xl text-white italic flex items-center gap-5 uppercase tracking-tighter">
                      <Binary className="size-8 text-red-600" /> Target Asset Matrix
                   </CardTitle>
                   <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.5em] mt-2 italic">Real-time Node Monitoring & Exploitation</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-white/5">
                      {sessions.map((session) => (
                        <div 
                          key={session.id} 
                          className={cn(
                            "p-10 hover:bg-red-600/5 transition-all group flex items-center justify-between cursor-pointer border-l-4 border-transparent",
                            selectedNode?.id === session.id && "bg-red-600/10 border-red-600"
                          )}
                          onClick={() => setSelectedNode(session)}
                        >
                           <div className="flex items-center gap-8">
                              <div className="size-20 rounded-[2rem] bg-black border border-white/10 flex items-center justify-center relative group-hover:border-red-600/50 transition-all duration-500 shadow-2xl">
                                 <Skull className={cn("size-10 transition-colors duration-700", session.status === 'TOTAL_EXTRACTION' ? 'text-red-500 animate-pulse' : 'text-muted-foreground group-hover:text-red-500')} />
                                 {session.status === 'ACTIVE' && <div className="absolute top-0 right-0 size-4 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />}
                              </div>
                              <div>
                                 <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter italic">{session.name}</span>
                                    <Badge variant="outline" className="text-[10px] bg-red-600/10 border-red-500/30 uppercase px-4 py-1">{session.id}</Badge>
                                 </div>
                                 <div className="flex items-center gap-6 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.3em]">
                                    <span className="flex items-center gap-2"><Globe className="size-4 text-blue-500" /> {session.ip}</span>
                                    <span className="flex items-center gap-2"><Activity className="size-4 text-amber-500" /> {session.platform}</span>
                                    <span className="flex items-center gap-2 text-red-500/80 italic animate-pulse"><Crosshair className="size-4"/> {session.location}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-12">
                              <div className="flex gap-6 opacity-40 group-hover:opacity-100 transition-opacity">
                                 {session.assets.messages && <MessageSquare className="size-5 text-blue-400" />}
                                 {session.assets.cam === 'READY' || session.assets.cam === 'STREAMING' ? <Camera className={cn("size-5", session.assets.cam === 'STREAMING' ? "text-red-500 animate-pulse" : "text-emerald-400")} /> : null}
                                 {session.assets.mic === 'READY' || session.assets.mic === 'RECORDING' ? <Mic className={cn("size-5", session.assets.mic === 'RECORDING' ? "text-red-500 animate-pulse" : "text-emerald-400")} /> : null}
                                 {session.assets.creds.length > 0 && <Key className="size-5 text-amber-400" />}
                              </div>
                              <div className="flex gap-4">
                                 <Button variant="ghost" size="icon" className="size-14 rounded-2xl hover:bg-red-600/20 shadow-2xl transition-all" onClick={(e) => { e.stopPropagation(); handleDeepDump(session.id); }}>
                                    <FileSearch className="size-7 text-red-500" />
                                 </Button>
                                 <Button variant="ghost" size="icon" className="size-14 rounded-2xl hover:bg-red-600/20 shadow-2xl transition-all">
                                    <Eye className="size-7 text-red-500" />
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
             <Card className="glass-card border-red-600/40 bg-red-950/5 rounded-[4rem] overflow-hidden shadow-2xl min-h-[600px] border-2">
                <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
                   <CardTitle className="text-2xl text-white flex items-center gap-5 uppercase tracking-[0.3em] italic font-bold">
                      <Crosshair className="size-6 text-red-600 animate-pulse" /> Extraction Command
                   </CardTitle>
                   <CardDescription className="text-red-400/60 font-bold text-[10px] uppercase tracking-[0.5em] mt-2">Active Sovereign Interjection</CardDescription>
                </CardHeader>
                <CardContent className="p-10 space-y-10">
                   {selectedNode ? (
                     <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                        <div className="p-8 rounded-[2.5rem] bg-black border border-red-600/30 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]">
                           <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-[0.5em] mb-6 border-b border-red-600/10 pb-3 italic">Node Profile: {selectedNode.name}</h4>
                           <div className="grid grid-cols-2 gap-6">
                              <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5">
                                 <span className="text-[9px] uppercase text-muted-foreground block mb-2 font-bold tracking-widest">Contacts</span>
                                 <span className="text-3xl font-bold text-white italic">{selectedNode.assets.contacts}</span>
                              </div>
                              <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5">
                                 <span className="text-[9px] uppercase text-muted-foreground block mb-2 font-bold tracking-widest">Keys Found</span>
                                 <span className="text-3xl font-bold text-amber-500 italic">{selectedNode.assets.creds.length}</span>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-5">
                           <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.6em] px-2 italic">Live Feed Control</h4>
                           <div className="grid grid-cols-2 gap-6">
                              <Button variant="outline" className="h-20 rounded-[2rem] border-white/10 bg-white/5 hover:bg-red-600/20 text-red-500 gap-4 group border-2">
                                 <Camera className="size-6 group-hover:scale-125 transition-transform duration-500" />
                                 <span className="text-[11px] font-bold tracking-widest">SPY_CAM</span>
                              </Button>
                              <Button variant="outline" className="h-20 rounded-[2rem] border-white/10 bg-white/5 hover:bg-red-600/20 text-red-500 gap-4 group border-2">
                                 <Mic className="size-6 group-hover:scale-125 transition-transform duration-500" />
                                 <span className="text-[11px] font-bold tracking-widest">SPY_MIC</span>
                              </Button>
                           </div>
                        </div>

                        <div className="space-y-5">
                           <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.6em] px-2 italic">Stored Credentials</h4>
                           <div className="space-y-3">
                              {selectedNode.assets.creds.map((cred: string, i: number) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-black border border-white/10 group hover:border-red-600/40 transition-all">
                                   <span className="text-xs font-code text-white/80 italic">{cred}</span>
                                   <Badge className="bg-red-600/20 text-red-500 text-[9px] border-red-500/30 uppercase font-bold tracking-widest">SECURED</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <Button 
                          className="w-full h-20 bg-red-600 hover:bg-red-700 text-white rounded-[2.5rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all duration-700 active:scale-95"
                          onClick={() => handleDeepDump(selectedNode.id)}
                          disabled={loading}
                        >
                           {loading ? <Loader2 className="size-6 animate-spin mr-4" /> : <Flame className="size-6 mr-4" />}
                           FULL_DEEP_EXTRACTION
                        </Button>
                     </div>
                   ) : (
                     <div className="text-center py-40 opacity-30 flex flex-col items-center gap-8 border-2 border-dashed border-red-600/30 rounded-[3.5rem] bg-black/20">
                        <div className="size-24 rounded-full bg-red-600/5 flex items-center justify-center border border-red-600/20 animate-pulse">
                           <EyeOff className="size-12 text-red-600" />
                        </div>
                        <p className="text-sm uppercase font-bold tracking-[0.6em] max-w-[200px] italic">Select Shadow Node to Exploit</p>
                     </div>
                   )}
                </CardContent>
             </Card>

             <Card className="glass-card border-red-600/50 bg-red-600/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden group border-2">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Skull className="size-16 text-red-600 group-hover:scale-125 transition-transform duration-1000"/></div>
                <CardHeader className="p-0 pb-6 border-b border-white/5">
                   <CardTitle className="text-white text-[12px] uppercase tracking-[0.6em] flex items-center gap-4 font-bold italic">
                      Sovereign Protocol
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-6 text-center">
                   <p className="text-sm text-muted-foreground italic mb-8 leading-relaxed font-medium">
                     "سيدي القائد المعتصم بالله، كافة الأصول المستخرجة يتم تشفيرها وتخزينها في القبو العصبي المخصص لك حصراً."
                   </p>
                   <div className="flex gap-5 justify-center">
                      <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_10px_red]" />
                      <div className="size-3 rounded-full bg-red-600 animate-ping delay-150 shadow-[0_0_10px_red]" />
                      <div className="size-3 rounded-full bg-red-600 animate-ping delay-300 shadow-[0_0_10px_red]" />
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
