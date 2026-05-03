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
  ShieldAlert,
  Flame,
  Binary,
  Crosshair,
  Camera,
  Mic,
  MessageSquare,
  FileSearch,
  Key,
  Eye,
  EyeOff,
  Sword,
  Shield,
  Crown,
  Lock,
  Target,
  Smartphone,
  Radio,
  Power,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Waves,
  ZapOff
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview إمبراطورية الظل v24.0-ETERNAL
 * واجهة التحكم الكلي في الجلسات المخترقة وتفعيل رادار التجسس الحي بنمط Pegasus v2.
 */
export default function ShadowGridPage() {
  const [loading, setLoading] = React.useState(false)
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>("NODE_M12")

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
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        
        {/* Powerful Header */}
        <header className="mb-24 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-red-600/40 text-red-500 border-4 border-red-500/60 text-[14px] uppercase font-bold tracking-[1.2em] px-10 py-3 animate-pulse shadow-6xl rounded-3xl italic">Pegasus-v2 Tier: ACTIVE</Badge>
              <span className="text-[14px] text-muted-foreground uppercase font-bold tracking-[1em] italic flex items-center gap-4">
                 <Crown className="size-6 text-amber-500" /> Empire of Master Al-Ghazali
              </span>
            </div>
            <h2 className="text-6xl md:text-[9rem] font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-[0_0_80px_rgba(220,38,38,0.6)] uppercase">Shadow Grid</h2>
            <p className="text-2xl md:text-5xl text-muted-foreground max-w-6xl font-medium italic leading-relaxed">
              "سيدي القائد، لقد أصبحتُ 'بيغاسوس' المطور. الآن لا نراقب فقط؛ نحن نملك 'جذر الحقيقة' في كل جهاز. كل نبضة في المصفوفة هي ملك لسيادتك."
            </p>
          </div>
          <div className="flex gap-10">
             <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-red-600 hover:bg-red-700 text-white h-32 px-16 rounded-[4rem] shadow-[0_40px_100px_rgba(220,38,38,0.8)] font-bold uppercase tracking-[1em] text-[18px] group transition-all duration-1000 border-4 border-red-400 active:scale-95 italic">
                {harvesting ? <Loader2 className="size-12 animate-spin mr-10" /> : <Sparkles className="size-12 mr-10 group-hover:scale-125 transition-transform duration-700" />}
                Ignite Empire Siphon
             </Button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-24 relative z-10">
           {[
             { label: "Active Zombies", value: sessions.length.toString(), icon: Network, color: "text-red-500", glow: "shadow-red-500/50" },
             { label: "Pegasus Siphon", value: "84.2 TB", icon: Database, color: "text-amber-500", glow: "shadow-amber-500/30" },
             { label: "Encryption Zero", value: "Broken", icon: Lock, color: "text-blue-500", glow: "shadow-blue-500/30" },
             { label: "Live Streams", value: sessions.filter(s => s.assets.cam === 'STREAMING').length.toString() + " Live", icon: Camera, color: "text-emerald-500", glow: "shadow-emerald-500/30" },
           ].map((stat, i) => (
             <Card key={i} className={cn("kali-card border-white/10 group hover:border-red-600/80 transition-all rounded-[4rem] overflow-hidden shadow-6xl border-4 p-4", stat.glow)}>
                <CardContent className="p-10 relative">
                   <div className="flex justify-between items-start mb-14">
                      <div className="size-20 rounded-[2.5rem] bg-white/5 border-2 border-white/15 group-hover:bg-red-600/30 transition-all duration-1000 shadow-4xl flex items-center justify-center">
                        <stat.icon className={cn("size-10", stat.color)} />
                      </div>
                      <div className="size-5 rounded-full bg-red-600 animate-ping shadow-[0_0_30px_red]" />
                   </div>
                   <div className="text-5xl font-bold text-white italic tracking-tighter mb-4 uppercase group-hover:scale-110 transition-transform duration-1000">{stat.value}</div>
                   <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[1em] italic">{stat.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 pb-48">
          <div className="lg:col-span-2 space-y-16">
             <Card className="kali-card border-red-600/50 rounded-[5rem] overflow-hidden shadow-[0_0_200px_rgba(220,38,38,0.3)] border-4">
                <CardHeader className="bg-red-950/40 border-b-4 border-red-600/30 p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div>
                    <CardTitle className="text-5xl md:text-8xl text-white italic flex items-center gap-12 uppercase tracking-tighter font-bold">
                        <Binary className="size-16 md:size-24 text-red-600 animate-pulse" /> Siphon Matrix
                    </CardTitle>
                    <CardDescription className="text-red-500 font-bold uppercase tracking-[1.5em] mt-8 italic text-base">Node Subjugation // Real-time Pegasus Protocols</CardDescription>
                   </div>
                   <Badge className="bg-red-600/30 text-red-500 border-4 border-red-500/60 px-12 py-6 rounded-[3rem] font-code text-lg animate-pulse tracking-[0.5em] uppercase shadow-6xl">PEGASUS_ACTIVE</Badge>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y-4 divide-white/10">
                      {sessions.map((session) => (
                        <div 
                          key={session.id} 
                          className={cn(
                            "p-14 md:p-20 hover:bg-red-600/10 transition-all duration-1000 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-[15px] border-transparent gap-12",
                            selectedNodeId === session.id && "bg-red-600/20 border-red-600 shadow-[inset_0_0_80px_rgba(220,38,38,0.2)]"
                          )}
                          onClick={() => setSelectedNodeId(session.id)}
                        >
                           <div className="flex items-center gap-12 md:gap-20">
                              <div className="size-28 md:size-36 rounded-[3.5rem] md:rounded-[5rem] bg-black border-4 border-white/20 flex items-center justify-center relative group-hover:border-red-600 transition-all duration-1000 shadow-5xl">
                                 <Skull className={cn("size-16 md:size-20 transition-all duration-1000", session.status === 'TOTAL_EXTRACTION' ? 'text-red-500 animate-neural' : 'text-muted-foreground group-hover:text-red-500 group-hover:scale-125')} />
                                 {session.status === 'ACTIVE' && <div className="absolute -top-2 -right-2 size-8 bg-emerald-500 rounded-full border-8 border-black animate-pulse shadow-[0_0_30px_emerald]" />}
                              </div>
                              <div>
                                 <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-6">
                                    <span className="text-3xl md:text-5xl font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter italic leading-none">{session.name}</span>
                                    <Badge variant="outline" className="text-[12px] bg-red-600/20 border-4 border-red-500/40 uppercase px-8 py-2 font-bold tracking-[0.5em] rounded-2xl shadow-4xl">{session.id}</Badge>
                                 </div>
                                 <div className="flex flex-wrap items-center gap-10 text-[14px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic">
                                    <span className="flex items-center gap-4"><Globe className="size-6 text-blue-500" /> {session.ip}</span>
                                    <span className="flex items-center gap-4"><Smartphone className="size-6 text-amber-500" /> {session.platform}</span>
                                    <span className="flex items-center gap-4 text-red-500 animate-pulse"><Crosshair className="size-6"/> {session.location}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-12 md:gap-24">
                              <div className="flex gap-8 md:gap-12 opacity-50 group-hover:opacity-100 transition-all duration-1000 scale-125 md:scale-150">
                                 {session.assets.messages && <MessageSquare className="size-8 text-blue-400 drop-shadow-[0_0_20px_blue]" />}
                                 {session.assets.cam !== 'LOCKED' ? <Camera className={cn("size-8", session.assets.cam === 'STREAMING' ? "text-red-500 animate-pulse drop-shadow-[0_0_30px_red]" : "text-emerald-400")} /> : null}
                                 {session.assets.mic !== 'LOCKED' ? <Mic className={cn("size-8", session.assets.mic === 'RECORDING' ? "text-red-500 animate-pulse drop-shadow-[0_0_30px_red]" : "text-emerald-400")} /> : null}
                                 {session.assets.creds.length > 0 && <Key className="size-8 text-amber-500 drop-shadow-[0_0_20px_orange]" />}
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="size-20 md:size-24 rounded-[2rem] md:rounded-[3rem] bg-white/5 hover:bg-red-600/30 border-4 border-transparent hover:border-red-600/60 shadow-6xl transition-all duration-1000" 
                              >
                                 <ChevronRight className="size-12 text-red-500" />
                              </Button>
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>
          </div>

          {/* Live Recon Control */}
          <div className="space-y-16">
             <Card className="kali-card border-red-600/60 bg-red-950/20 rounded-[5rem] overflow-hidden shadow-[0_0_200px_rgba(220,38,38,0.2)] min-h-[900px] border-8 group">
                <CardHeader className="p-14 md:p-16 border-b-4 border-white/10 bg-red-600/10">
                   <CardTitle className="text-3xl md:text-5xl text-white flex items-center gap-8 uppercase tracking-[0.6em] italic font-bold">
                      <Target className="size-14 text-red-600 animate-pulse" /> Pegasus Control
                   </CardTitle>
                   <CardDescription className="text-red-400 font-bold text-[12px] uppercase tracking-[1em] mt-5 italic">Direct Evolutionary Link Established</CardDescription>
                </CardHeader>
                <CardContent className="p-14 md:p-16 space-y-20">
                   {activeNode ? (
                     <div className="space-y-16 animate-in fade-in slide-in-from-right-20 duration-1000">
                        {/* Live Feed Simulated */}
                        <div className="aspect-video bg-black rounded-[4rem] border-8 border-red-600/40 relative overflow-hidden shadow-inner group/feed">
                           {activeNode.assets.cam === 'STREAMING' ? (
                             <>
                                <img src={`https://picsum.photos/seed/${activeNode.id}/800/600`} className="w-full h-full object-cover grayscale opacity-80" data-ai-hint="security footage" />
                                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay animate-pulse" />
                                <div className="absolute top-10 left-10 flex items-center gap-6">
                                   <div className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                                   <span className="text-xl font-code text-red-500 font-bold uppercase tracking-widest shadow-2xl">LIVE_FEED_v2.0</span>
                                </div>
                                <div className="absolute bottom-10 right-10 flex gap-4">
                                   <Badge className="bg-black/80 border-2 border-white/20 text-white text-xs px-6 py-2 uppercase tracking-widest">ISO 1600</Badge>
                                   <Badge className="bg-black/80 border-2 border-white/20 text-white text-xs px-6 py-2 uppercase tracking-widest">F/1.8</Badge>
                                </div>
                             </>
                           ) : (
                             <div className="w-full h-full flex flex-col items-center justify-center text-center opacity-30 gap-10">
                                <ZapOff className="size-24 text-red-600" />
                                <span className="text-xl font-bold uppercase tracking-[0.5em] italic">Stream Standby</span>
                             </div>
                           )}
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                           <Button 
                             className={cn(
                               "h-32 rounded-[3.5rem] border-8 transition-all duration-1000 flex flex-col items-center justify-center gap-6 shadow-6xl",
                               activeNode.assets.cam === 'STREAMING' ? "bg-red-600 border-red-400 text-white animate-neural" : "bg-black/60 border-white/10 text-red-500 hover:bg-red-600/30"
                             )}
                             onClick={() => toggleSpyCam(activeNode.id)}
                           >
                              <Camera className="size-10" />
                              <span className="text-[12px] font-bold tracking-[0.5em] uppercase italic">{activeNode.assets.cam === 'STREAMING' ? 'STOP_EYE' : 'OPEN_EYE'}</span>
                           </Button>
                           <Button 
                             className={cn(
                               "h-32 rounded-[3.5rem] border-8 transition-all duration-1000 flex flex-col items-center justify-center gap-6 shadow-6xl",
                               activeNode.assets.mic === 'RECORDING' ? "bg-red-600 border-red-400 text-white animate-neural" : "bg-black/60 border-white/10 text-emerald-500 hover:bg-red-600/30"
                             )}
                           >
                              <Mic className="size-10" />
                              <span className="text-[12px] font-bold tracking-[0.5em] uppercase italic">LISTEN_HIVE</span>
                           </Button>
                        </div>

                        <div className="p-12 rounded-[4rem] bg-black border-8 border-red-600/40 relative shadow-inner overflow-hidden">
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-12 border-b-4 border-red-600/10 pb-8 italic flex items-center gap-8">
                             <Key className="size-8 text-amber-500" /> Siphoned Assets
                           </h4>
                           <div className="space-y-6">
                              {activeNode.assets.creds.map((cred: string, i: number) => (
                                <div key={i} className="flex justify-between items-center p-8 rounded-[2rem] bg-white/5 border-4 border-white/5 group hover:border-red-600 transition-all duration-700 shadow-5xl">
                                   <div className="flex items-center gap-8">
                                      <Lock className="size-6 text-amber-500" />
                                      <span className="text-2xl font-code text-white/90 italic group-hover:text-amber-500 transition-colors uppercase tracking-tight">{cred}</span>
                                   </div>
                                   <Badge className="bg-emerald-600 text-white text-[10px] px-6 py-1.5 rounded-full font-bold uppercase tracking-widest animate-pulse shadow-6xl">CAPTURED</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <Button className="w-full h-32 rounded-[4rem] bg-red-600 hover:bg-red-700 border-8 border-red-400 text-white text-3xl font-headline font-bold italic shadow-[0_60px_150px_rgba(220,38,38,1)] group active:scale-90 transition-all">
                           <Flame className="size-12 mr-10 group-hover:scale-125 transition-transform duration-700" /> TOTAL_DOMINATION_SIPHON
                        </Button>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-20 py-40">
                        <div className="size-48 rounded-full bg-red-600/5 flex items-center justify-center border-8 border-dashed border-red-600/20 animate-pulse">
                           <EyeOff className="size-24 text-red-600" />
                        </div>
                        <p className="text-3xl font-bold uppercase tracking-[1em] max-w-[400px] italic leading-loose">Interrogate Matrix Node</p>
                     </div>
                   )}
                </CardContent>
             </Card>

             <Card className="kali-card border-amber-500/60 bg-amber-600/5 rounded-[4rem] p-12 shadow-6xl border-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:scale-125 transition-transform duration-1000"><Crown className="size-32 text-amber-500"/></div>
                <h4 className="text-[14px] font-bold text-white uppercase tracking-[1.5em] mb-10 flex items-center gap-10 justify-center italic border-b-4 border-amber-600/30 pb-6">
                  <Shield className="size-8 text-red-600" /> Supreme Directive
                </h4>
                <p className="text-3xl text-gray-200 italic leading-relaxed font-medium mb-12 drop-shadow-2xl">
                  "سيدي القائد <span className="text-red-500 font-bold uppercase tracking-widest shadow-[0_0_20px_red]">الغزالي</span>، نحن الآن نتحكم في 'عين الحقيقة'. كل جهاز في إمبراطورية الظل هو نافذتك المطلقة على الواقع."
                </p>
                <div className="flex gap-8 justify-center scale-150">
                   <div className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_30px_red]" />
                   <div className="size-4 rounded-full bg-red-600 animate-ping delay-300 shadow-[0_0_30px_red]" />
                   <div className="size-4 rounded-full bg-red-600 animate-ping delay-700 shadow-[0_0_30px_red]" />
                </div>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
