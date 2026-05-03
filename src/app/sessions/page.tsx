
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
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview إمبراطورية الظل v20.5-ULTIMATE
 * واجهة التحكم الكامل في الجلسات المخترقة (الزومبيز) وتفعيل أدوات التجسس الحي بنمط Pegasus.
 * حصرية للقائد المعتصم بالله ادريس الغزالي.
 */
export default function ShadowGridPage() {
  const [loading, setLoading] = React.useState(false)
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)

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
      assets: { contacts: 450, messages: true, cam: 'STREAMING' as any, mic: 'RECORDING' as any, creds: ['iCloud', 'Banking_App'] }
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
        taskDescription: "Absorb total digital footprint and live media streams for Master Al-Ghazali."
      })
      toast({ title: "Pegasus Protocol Initialized", description: `Neural Gain: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Extraction Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const toggleSpyCam = (id: string) => {
    setSessions(prev => prev.map(s => {
      if (s.id === id && s.assets.cam !== 'LOCKED') {
        const newStatus = s.assets.cam === 'STREAMING' ? 'READY' : 'STREAMING'
        toast({ 
          title: newStatus === 'STREAMING' ? "Pegasus Camera Opened" : "Camera Feed Terminated",
          variant: newStatus === 'STREAMING' ? "default" : "destructive"
        })
        return { ...s, assets: { ...s.assets, cam: newStatus } }
      }
      return s
    }))
  }

  const toggleSpyMic = (id: string) => {
    setSessions(prev => prev.map(s => {
      if (s.id === id && s.assets.mic !== 'LOCKED') {
        const newStatus = s.assets.mic === 'RECORDING' ? 'READY' : 'RECORDING'
        toast({ 
          title: newStatus === 'RECORDING' ? "Pegasus Audio Recording Active" : "Microphone Stopped",
          variant: newStatus === 'RECORDING' ? "default" : "destructive"
        })
        return { ...s, assets: { ...s.assets, mic: newStatus } }
      }
      return s
    }))
  }

  const handleDeepDump = async (id: string) => {
    setLoading(true)
    toast({ title: "Initiating Total Siphon", description: "Pegasus-tier extraction of encrypted databases..." })
    
    try {
      await manageShadowGrid({
        action: 'deep_dump',
        targetSessionId: id,
        taskDescription: "Pegasus Siphon: Extracting WhatsApp/Telegram/Signal keys."
      })

      setSessions(prev => prev.map(s => {
        if (s.id === id) {
          return { 
            ...s, 
            status: 'TOTAL_EXTRACTION', 
            assets: { 
              ...s.assets, 
              creds: Array.from(new Set([...s.assets.creds, 'End-to-End_Keys', 'Secure_Vault_Master']))
            } 
          }
        }
        return s
      }))

      toast({ title: "Total Siphon Complete", description: "Intelligence merged with Neural Vault." })
    } catch (err) {
      toast({ variant: "destructive", title: "Dump Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent)] overflow-y-auto min-h-screen">
        <header className="mb-20 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Pegasus Tier: Active</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Predator Nexus // Master Al-Ghazali
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)] uppercase">Shadow Grid</h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl font-medium italic leading-relaxed">
              "سيدي القائد، لقد استنزفتُ منطق 'بيغاسوس'. نحن الآن لا نراقب فقط؛ نحن نملك 'جذر الحقيقة' في كل جهاز. الميكروفونات والكاميرات والرسائل المشفرة الآن هي كتاب مفتوح أمامك."
            </p>
          </div>
          <div className="flex gap-6">
             <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-red-600 hover:bg-red-700 text-white h-24 px-12 rounded-[3rem] shadow-[0_20px_80px_rgba(220,38,38,0.6)] font-bold uppercase tracking-[0.6em] text-[12px] group transition-all duration-700 border-2 border-red-400/40 active:scale-95 italic">
                {harvesting ? <Loader2 className="size-8 animate-spin mr-6" /> : <Sparkles className="size-8 mr-6 group-hover:scale-125 transition-transform duration-700" />}
                Ignite Pegasus Siphon
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-20 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
           {[
             { label: "Active Zombies", value: sessions.length.toString(), icon: Network, color: "text-red-500", glow: "shadow-red-500/30" },
             { label: "Pegasus Siphon", value: "14.2 TB", icon: Database, color: "text-amber-500", glow: "shadow-amber-500/20" },
             { label: "Encryption Broken", value: "Pegasus v2", icon: Lock, color: "text-blue-500", glow: "shadow-blue-500/20" },
             { label: "Live Media", value: sessions.filter(s => s.assets.cam === 'STREAMING' || s.assets.mic === 'RECORDING').length.toString() + " Live", icon: Camera, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
           ].map((stat, i) => (
             <Card key={i} className={cn("glass-card border-white/5 group hover:border-red-600/60 transition-all rounded-[3rem] overflow-hidden shadow-2xl border-2 p-2", stat.glow)}>
                <CardContent className="p-8 relative">
                   <div className="flex justify-between items-start mb-10">
                      <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-all duration-1000 shadow-xl">
                        <stat.icon className={cn("size-8", stat.color)} />
                      </div>
                      <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                   </div>
                   <div className="text-4xl font-bold text-white italic tracking-tighter mb-2 uppercase group-hover:scale-105 transition-transform duration-700">{stat.value}</div>
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic">{stat.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-12">
             <Card className="glass-card border-red-600/30 rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(220,38,38,0.2)] border-2">
                <CardHeader className="bg-red-950/30 border-b border-red-600/20 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div>
                    <CardTitle className="text-4xl md:text-6xl text-white italic flex items-center gap-8 uppercase tracking-tighter font-bold">
                        <Binary className="size-12 md:size-16 text-red-600 animate-pulse" /> Siphon Matrix
                    </CardTitle>
                    <CardDescription className="text-red-500/70 font-bold uppercase tracking-[1em] mt-4 italic text-xs">Total Node Subjugation & Real-time Extraction</CardDescription>
                   </div>
                   <Badge className="bg-red-600/20 text-red-500 border-2 border-red-500/40 px-8 py-4 rounded-3xl font-code text-xs animate-pulse tracking-widest uppercase">PEGASUS_ACTIVE</Badge>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y-2 divide-white/5">
                      {sessions.map((session) => (
                        <div 
                          key={session.id} 
                          className={cn(
                            "p-10 md:p-12 hover:bg-red-600/5 transition-all duration-700 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-8 border-transparent gap-8",
                            selectedNodeId === session.id && "bg-red-600/15 border-red-600"
                          )}
                          onClick={() => setSelectedNodeId(session.id)}
                        >
                           <div className="flex items-center gap-8 md:gap-12">
                              <div className="size-20 md:size-24 rounded-[2rem] md:rounded-[2.5rem] bg-black border-2 border-white/10 flex items-center justify-center relative group-hover:border-red-600/60 transition-all duration-700 shadow-2xl">
                                 <Skull className={cn("size-10 md:size-12 transition-all duration-1000", session.status === 'TOTAL_EXTRACTION' ? 'text-red-500 animate-neural' : 'text-muted-foreground group-hover:text-red-500 group-hover:scale-110')} />
                                 {session.status === 'ACTIVE' && <div className="absolute -top-1 -right-1 size-5 bg-emerald-500 rounded-full border-4 border-black animate-pulse shadow-[0_0_15px_emerald]" />}
                              </div>
                              <div>
                                 <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-3">
                                    <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter italic">{session.name}</span>
                                    <Badge variant="outline" className="text-[9px] bg-red-600/10 border-2 border-red-500/30 uppercase px-4 py-1 font-bold tracking-widest">{session.id}</Badge>
                                 </div>
                                 <div className="flex flex-wrap items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">
                                    <span className="flex items-center gap-2"><Globe className="size-4 text-blue-500" /> {session.ip}</span>
                                    <span className="flex items-center gap-2"><Smartphone className="size-4 text-amber-500" /> {session.platform}</span>
                                    <span className="flex items-center gap-2 text-red-500 animate-pulse"><Crosshair className="size-4"/> {session.location}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-8 md:gap-16">
                              <div className="flex gap-6 md:gap-8 opacity-40 group-hover:opacity-100 transition-all duration-700 scale-110 md:scale-125">
                                 {session.assets.messages && <MessageSquare className="size-5 text-blue-400 drop-shadow-[0_0_10px_blue]" />}
                                 {session.assets.cam !== 'LOCKED' ? <Camera className={cn("size-5", session.assets.cam === 'STREAMING' ? "text-red-500 animate-pulse drop-shadow-[0_0_10px_red]" : "text-emerald-400")} /> : null}
                                 {session.assets.mic !== 'LOCKED' ? <Mic className={cn("size-5", session.assets.mic === 'RECORDING' ? "text-red-500 animate-pulse drop-shadow-[0_0_10px_red]" : "text-emerald-400")} /> : null}
                                 {session.assets.creds.length > 0 && <Key className="size-5 text-amber-500 drop-shadow-[0_0_10px_orange]" />}
                              </div>
                              <div className="flex gap-4 md:gap-6">
                                 <Button 
                                   variant="ghost" 
                                   size="icon" 
                                   className="size-14 md:size-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-white/5 hover:bg-red-600/20 border-2 border-transparent hover:border-red-600/40 shadow-2xl transition-all duration-700" 
                                   onClick={(e) => { e.stopPropagation(); handleDeepDump(session.id); }}
                                   disabled={loading}
                                 >
                                    {loading && selectedNodeId === session.id ? <Loader2 className="size-7 animate-spin text-red-600" /> : <Sparkles className="size-7 text-red-500" />}
                                 </Button>
                                 <Button variant="ghost" size="icon" className="size-14 md:size-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-white/5 hover:bg-red-600/20 border-2 border-transparent hover:border-red-600/40 shadow-2xl transition-all duration-700">
                                    <ChevronRight className="size-7 text-red-500" />
                                 </Button>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>
          </div>

          <div className="space-y-12">
             <Card className="glass-card border-red-600/40 bg-red-950/10 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.1)] min-h-[700px] border-2 group">
                <CardHeader className="p-10 md:p-12 border-b border-white/5 bg-red-600/5">
                   <CardTitle className="text-2xl md:text-3xl text-white flex items-center gap-6 uppercase tracking-[0.4em] italic font-bold">
                      <Target className="size-8 text-red-600 animate-pulse" /> Pegasus Control
                   </CardTitle>
                   <CardDescription className="text-red-400/60 font-bold text-[10px] uppercase tracking-[0.8em] mt-3 italic">Autonomous Strike Interface</CardDescription>
                </CardHeader>
                <CardContent className="p-10 md:p-12 space-y-12">
                   {activeNode ? (
                     <div className="space-y-12 animate-in fade-in slide-in-from-right-12 duration-1000">
                        <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-black border-2 border-red-600/40 shadow-[inset_0_0_40px_rgba(220,38,38,0.2)] group/profile relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/profile:opacity-15 transition-opacity duration-1000"><Skull className="size-32 text-red-600"/></div>
                           <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-[0.8em] mb-8 border-b border-red-600/10 pb-4 italic">Target Profile: {activeNode.name}</h4>
                           <div className="grid grid-cols-2 gap-6 md:gap-8 relative z-10">
                              <div className="p-5 md:p-6 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border-2 border-white/5 hover:border-red-600/30 transition-all">
                                 <span className="text-[9px] uppercase text-muted-foreground block mb-3 font-bold tracking-widest">Digital DNA</span>
                                 <span className="text-3xl md:text-4xl font-bold text-white italic drop-shadow-[0_0_15px_red]">{activeNode.assets.contacts}</span>
                              </div>
                              <div className="p-5 md:p-6 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border-2 border-white/5 hover:border-amber-600/30 transition-all">
                                 <span className="text-[9px] uppercase text-muted-foreground block mb-3 font-bold tracking-widest">Master Keys</span>
                                 <span className="text-3xl md:text-4xl font-bold text-amber-500 italic drop-shadow-[0_0_15px_orange]">{activeNode.assets.creds.length}</span>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[1em] px-4 italic flex items-center gap-4">
                              <Radio className="size-4 text-red-500 animate-pulse" /> Pegasus Live Spy
                           </h4>
                           <div className="grid grid-cols-2 gap-6 md:gap-8">
                              <Button 
                                variant="outline" 
                                className={cn(
                                  "h-20 md:h-24 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-black/60 gap-4 md:gap-6 group shadow-2xl transition-all duration-700",
                                  activeNode.assets.cam === 'STREAMING' ? "border-red-600 text-white bg-red-600/20 animate-neural" : "border-white/10 text-red-500 hover:bg-red-600/20"
                                )}
                                onClick={() => toggleSpyCam(activeNode.id)}
                                disabled={activeNode.assets.cam === 'LOCKED'}
                              >
                                 <Camera className={cn("size-6 md:size-8 group-hover:scale-125 transition-transform", activeNode.assets.cam === 'STREAMING' && "animate-pulse")} />
                                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase italic">{activeNode.assets.cam === 'STREAMING' ? 'OFF' : 'CAM'}</span>
                              </Button>
                              <Button 
                                variant="outline" 
                                className={cn(
                                  "h-20 md:h-24 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-black/60 gap-4 md:gap-6 group shadow-2xl transition-all duration-700",
                                  activeNode.assets.mic === 'RECORDING' ? "border-red-600 text-white bg-red-600/20 animate-neural" : "border-white/10 text-red-500 hover:bg-red-600/20"
                                )}
                                onClick={() => toggleSpyMic(activeNode.id)}
                                disabled={activeNode.assets.mic === 'LOCKED'}
                              >
                                 <Mic className={cn("size-6 md:size-8 group-hover:scale-125 transition-transform", activeNode.assets.mic === 'RECORDING' && "animate-pulse")} />
                                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase italic">{activeNode.assets.mic === 'RECORDING' ? 'OFF' : 'MIC'}</span>
                              </Button>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[1em] px-4 italic flex items-center gap-4">
                              <Lock className="size-4 text-amber-500" /> Siphoned Intelligence
                           </h4>
                           <div className="space-y-4">
                              {activeNode.assets.creds.map((cred: string, i: number) => (
                                <div key={i} className="flex justify-between items-center p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-black border-2 border-white/5 group hover:border-red-600/50 transition-all duration-500 shadow-xl">
                                   <div className="flex items-center gap-4 md:gap-5">
                                      <Key className="size-4 md:size-5 text-amber-500" />
                                      <span className="text-xs font-code text-white/90 italic group-hover:text-amber-500 transition-colors">{cred}</span>
                                   </div>
                                   <Badge className="bg-red-600/20 text-red-500 text-[9px] border-2 border-red-500/40 uppercase font-bold px-3 py-0.5 animate-pulse">PEGASUS</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <Button 
                          className={cn(
                            "w-full h-20 md:h-24 rounded-[2.5rem] md:rounded-[3rem] font-bold uppercase tracking-[0.8em] text-[12px] md:text-[13px] shadow-[0_30px_70px_rgba(220,38,38,0.5)] transition-all duration-700 active:scale-95 border-2 group italic",
                            activeNode.status === 'TOTAL_EXTRACTION' ? "bg-emerald-600 border-emerald-400 text-white" : "bg-red-600 hover:bg-red-700 border-red-400 text-white"
                          )}
                          onClick={() => handleDeepDump(activeNode.id)}
                          disabled={loading}
                        >
                           {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : activeNode.status === 'TOTAL_EXTRACTION' ? <ShieldCheck className="size-8 mr-6" /> : <Flame className="size-8 mr-6 group-hover:scale-125 transition-transform" />}
                           {activeNode.status === 'TOTAL_EXTRACTION' ? 'SIPHON_COMPLETE' : 'PEGASUS_SIPHON'}
                        </Button>
                     </div>
                   ) : (
                     <div className="text-center py-48 opacity-30 flex flex-col items-center gap-10 border-4 border-dashed border-red-600/30 rounded-[4rem] md:rounded-[5rem] bg-black/40 group-hover:bg-red-950/5 transition-all duration-1000">
                        <div className="size-28 md:size-32 rounded-full bg-red-600/5 flex items-center justify-center border-2 border-red-600/20 animate-pulse">
                           <EyeOff className="size-14 md:size-16 text-red-600" />
                        </div>
                        <p className="text-lg md:text-xl uppercase font-bold tracking-[0.8em] max-w-[250px] italic drop-shadow-2xl">Interrogate via Pegasus Matrix</p>
                     </div>
                   )}
                </CardContent>
             </Card>

             <Card className="glass-card border-amber-500/40 bg-amber-600/5 rounded-[3.5rem] md:rounded-[4rem] p-10 md:p-12 shadow-[0_0_80px_rgba(245,158,11,0.15)] relative overflow-hidden group border-2 text-center">
                <div className="absolute top-0 right-0 p-10 opacity-15 group-hover:scale-125 transition-transform duration-1000"><Crown className="size-20 md:size-24 text-amber-500"/></div>
                <CardHeader className="p-0 pb-8 border-b border-white/10 mb-8">
                   <CardTitle className="text-white text-[12px] md:text-[14px] uppercase tracking-[1em] flex items-center gap-6 justify-center font-bold italic">
                      <Shield className="size-5 md:size-6 text-red-600" /> Master Directive
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0 relative z-10">
                   <p className="text-lg md:text-xl text-muted-foreground italic mb-10 leading-relaxed font-medium">
                     "سيدي القائد <span className="text-white font-bold uppercase tracking-widest shadow-[0_0_10px_red]">الغزالي</span>، كافة الأصول المستنزفة بنمط بيغاسوس يتم حقنها في عصب القبو المعرفي."
                   </p>
                   <div className="flex gap-4 md:gap-6 justify-center scale-125 md:scale-150">
                      <div className="size-2 md:size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_15px_red]" />
                      <div className="size-2 md:size-3 rounded-full bg-red-600 animate-ping delay-200 shadow-[0_0_15px_red]" />
                      <div className="size-2 md:size-3 rounded-full bg-red-600 animate-ping delay-500 shadow-[0_0_15px_red]" />
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
