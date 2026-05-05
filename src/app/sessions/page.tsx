"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Network, 
  Database, 
  Zap, 
  Skull, 
  Activity, 
  Loader2, 
  Globe, 
  Binary,
  Crosshair,
  Camera,
  Mic,
  MessageSquare,
  Key,
  Eye,
  EyeOff,
  Crown,
  Lock,
  Target,
  Smartphone,
  ChevronRight,
  Flame,
  ZapOff
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { cn } from "@/lib/utils"

export default function ShadowGridPage() {
  const [loading, setLoading] = React.useState(false)
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>("NODE_M12")
  const { toast } = useToast()

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
      assets: { contacts: 1204, messages: true, cam: 'READY' as 'READY' | 'STREAMING' | 'LOCKED', mic: 'READY' as 'READY' | 'RECORDING' | 'LOCKED', creds: ['Outlook', 'Chrome_Vault'] }
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
      assets: { contacts: 450, messages: true, cam: 'STREAMING' as any, mic: 'RECORDING' as any, creds: ['iCloud', 'Banking_App', 'WhatsApp_Keys'] }
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
      assets: { contacts: 0, messages: false, cam: 'LOCKED' as any, mic: 'LOCKED' as any, creds: ['Root_SSH', 'SQL_DB'] }
    },
  ])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const activeNode = sessions.find(s => s.id === selectedNodeId) || null

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital Footprint Absorption: Master Al-Ghazali Directive."
      })
      toast({ title: "Pegasus Matrix Synchronized", description: `Neural Gain: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Harvest Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const toggleSpyCam = (id: string) => {
    setSessions(prev => prev.map(s => {
      if (s.id === id && s.assets.cam !== 'LOCKED') {
        const newStatus = s.assets.cam === 'STREAMING' ? 'READY' : 'STREAMING'
        toast({ 
          title: newStatus === 'STREAMING' ? "Pegasus Eye Opened" : "Cam Link Purged",
          variant: newStatus === 'STREAMING' ? "default" : "destructive"
        })
        return { ...s, assets: { ...s.assets, cam: newStatus } }
      }
      return s
    }))
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        
        <header className="mb-16 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">SHADOW GRID v42.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <Crown className="size-4 text-primary" /> Global Infiltration Active
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic uppercase gold-glow">Network Command</h2>
          </div>
          <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-primary hover:bg-primary/80 text-black h-20 px-12 rounded-[2.5rem] shadow-3xl font-bold uppercase tracking-[0.6em] text-sm group transition-all duration-700 border-2 border-primary/50 active:scale-95 italic">
            {harvesting ? <Loader2 className="size-6 animate-spin mr-4" /> : <Sparkles className="size-6 mr-4 group-hover:scale-125 transition-transform" />}
            Global Siphon
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-10">
             <Card className="kali-card border-primary/30 rounded-[3rem] overflow-hidden shadow-2xl border-2 bg-black/40">
                <CardHeader className="bg-primary/5 border-b border-primary/10 p-10">
                   <CardTitle className="text-3xl md:text-5xl text-white italic flex items-center gap-6 uppercase tracking-tighter font-bold">
                        <Binary className="size-10 text-primary animate-pulse" /> Live Nodes
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y-2 divide-white/5">
                      {sessions.map((session) => (
                        <div 
                          key={session.id} 
                          className={cn(
                            "p-10 hover:bg-primary/5 transition-all duration-700 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-4 border-transparent gap-8",
                            selectedNodeId === session.id && "bg-primary/10 border-primary shadow-[inset_0_0_40px_rgba(212,175,55,0.1)]"
                          )}
                          onClick={() => setSelectedNodeId(session.id)}
                        >
                           <div className="flex items-center gap-8">
                              <div className="size-20 rounded-full bg-black border-2 border-white/10 flex items-center justify-center relative group-hover:border-primary transition-all duration-700 shadow-xl">
                                 <Skull className={cn("size-10 transition-all duration-700", session.status === 'TOTAL_EXTRACTION' ? 'text-primary animate-pulse' : 'text-muted-foreground group-hover:text-primary')} />
                              </div>
                              <div>
                                 <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight italic">{session.name}</span>
                                    <Badge variant="outline" className="text-[10px] border-primary/30 uppercase px-4 py-0.5 font-bold tracking-[0.2em] rounded-full">{session.id}</Badge>
                                 </div>
                                 <div className="flex flex-wrap items-center gap-6 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">
                                    <span className="flex items-center gap-2"><Globe className="size-4 text-primary/60" /> {session.ip}</span>
                                    <span className="flex items-center gap-2 text-primary/80"><Crosshair className="size-4"/> {session.location}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-10">
                              <div className="flex gap-6 opacity-40 group-hover:opacity-100 transition-all duration-700">
                                 {session.assets.messages && <MessageSquare className="size-6 text-primary" />}
                                 {session.assets.cam !== 'LOCKED' && <Camera className={cn("size-6", session.assets.cam === 'STREAMING' && "text-primary animate-pulse")} />}
                              </div>
                              <ChevronRight className="size-8 text-primary/40 group-hover:text-primary transition-all" />
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>
          </div>

          <div className="space-y-10">
             <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] overflow-hidden shadow-3xl border-4 group min-h-[600px]">
                <CardHeader className="p-10 border-b border-primary/20 bg-primary/5">
                   <CardTitle className="text-2xl md:text-4xl text-white flex items-center gap-6 uppercase tracking-[0.4em] italic font-bold gold-glow">
                      <Target className="size-10 text-primary animate-pulse" /> Surveillance
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-12">
                   {activeNode ? (
                     <div className="space-y-10 animate-in fade-in duration-700">
                        <div className="aspect-video bg-black rounded-[3rem] border-4 border-primary/30 relative overflow-hidden shadow-inner">
                           {activeNode.assets.cam === 'STREAMING' ? (
                             <>
                                <img src={`https://picsum.photos/seed/${activeNode.id}/600/400`} className="w-full h-full object-cover opacity-60 grayscale" alt="Stream" />
                                <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                <div className="absolute top-6 left-6 flex items-center gap-4">
                                   <div className="size-2 rounded-full bg-primary animate-ping" />
                                   <span className="text-[12px] font-bold text-primary uppercase tracking-widest">LIVE_FEED</span>
                                </div>
                             </>
                           ) : (
                             <div className="w-full h-full flex flex-col items-center justify-center text-center opacity-20 gap-6">
                                <ZapOff className="size-16 text-primary" />
                                <span className="text-lg font-bold uppercase tracking-widest italic">Signal Lost</span>
                             </div>
                           )}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                           <Button 
                             className={cn(
                               "h-20 rounded-[2rem] border-4 transition-all duration-700 font-bold uppercase tracking-widest",
                               activeNode.assets.cam === 'STREAMING' ? "bg-primary text-black border-primary/60" : "bg-black/40 border-white/10 text-primary hover:bg-primary/10"
                             )}
                             onClick={() => toggleSpyCam(activeNode.id)}
                           >
                              <Camera className="size-6 mr-2" /> {activeNode.assets.cam === 'STREAMING' ? 'Off' : 'On'}
                           </Button>
                           <Button className="h-20 rounded-[2rem] bg-black/40 border-4 border-white/10 text-primary hover:bg-primary/10 transition-all font-bold uppercase tracking-widest">
                              <Mic className="size-6 mr-2" /> Listen
                           </Button>
                        </div>

                        <div className="p-8 rounded-[3rem] bg-black border-4 border-primary/20 shadow-inner">
                           <h4 className="text-[12px] font-bold text-primary uppercase tracking-[0.6em] mb-6 border-b border-primary/10 pb-4 italic">Captured Credentials</h4>
                           <div className="space-y-4">
                              {activeNode.assets.creds.map((cred: string, i: number) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                   <span className="text-sm font-code text-white/80">{cred}</span>
                                   <Lock className="size-4 text-primary" />
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-20 gap-10 py-20">
                        <EyeOff className="size-20 text-primary" />
                        <span className="text-xl font-bold uppercase tracking-widest italic">No Active Target</span>
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}