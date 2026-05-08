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
  Lock,
  Eye,
  Crown,
  ChevronRight,
  Sparkles,
  Target,
  ShieldCheck,
  Fingerprint,
  Radio,
  Boxes,
  Atom,
  Users,
  Cpu,
  Flame,
  Wifi,
  Smartphone,
  Video,
  Wind,
  Ghost,
  Terminal,
  TrendingUp,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview إمبراطورية السرب v53.5 - THE PEGASUS v3 ELITE OPERATIONAL HUB
 * واجهة الاستنزاف الكلي والسيطرة المطلقة لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ShadowGridPage() {
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)
  const [extractionLog, setExtractionLog] = React.useState<{msg: string, type: string}[]>([])
  const [gridMetrics, setGridMetrics] = React.useState({
    totalHarvested: 0,
    activeKeys: 0,
    encryptionBroken: 0
  })
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  const { user } = useUser()
  const db = useFirestore()
  const { toast } = useToast()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  
  const { data: sessions, isLoading } = useCollection(sessionsQuery);

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
        if (selectedNodeId) {
            const msgs = [
                "Siphoning WhatsApp database (msgstore.db.crypt15)...",
                "Extracting live GPS coordinates: 24.7136° N, 46.6753° E",
                "Capturing browser cookies (Identity Siphon)...",
                "Decrypting Telegram session keys...",
                "Mirroring screen activity via Pegasus Ocular...",
                "Pulling call log history (last 500 calls)..."
            ];
            const newMsg = { msg: msgs[Math.floor(Math.random() * msgs.length)], type: 'siphon' };
            setExtractionLog(prev => [newMsg, ...prev].slice(0, 15));
            setGridMetrics(prev => ({
                totalHarvested: prev.totalHarvested + Math.random() * 2,
                activeKeys: prev.activeKeys + (Math.random() > 0.8 ? 1 : 0),
                encryptionBroken: prev.encryptionBroken + (Math.random() > 0.9 ? 1 : 0)
            }));
        }
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [selectedNodeId])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    toast({ title: "Pegasus v3 Elite Engaged", description: "Broadcasting total acquisition protocol across the hive." })
    try {
      const result = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital Footprint Absorption for Commander Al-Ghazali."
      })
      toast({ 
        title: "Intelligence Gain: MAXIMAL", 
        description: `Collective consciousness increased by ${result.neuralGain}`,
      })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const handleSensorAction = async (sensor: string) => {
    if (!selectedNodeId) return
    toast({ title: `${sensor} Channel Active`, description: `Establishing direct neural bridge with Pegasus Node.` })
    
    setExtractionLog(prev => [{ msg: `>>> ESTABLISHING ${sensor.toUpperCase()} UPLINK...`, type: 'command' }, ...prev]);

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'smart_route', 
          command: `activate sensor ${sensor} on node ${selectedNodeId}`,
          target: selectedNodeId
        })
      })
      const data = await response.json()
      if (data.success) {
        toast({ title: "Signal Stabilized", description: `Receiving live ${sensor} data packets.` })
        setExtractionLog(prev => [{ msg: `>>> ${sensor.toUpperCase()} LINK: STABLE. DATA FLOWING.`, type: 'success' }, ...prev]);
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Error" })
    }
  }

  if (!mounted) return null

  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
               <Users className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural" />
               <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">PEGASUS v3 ELITE</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-5 shadow-lg" /> HIVE_MESH: ARMED
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Shadow <span className="text-primary">Grid</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                  "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">المعتصم بالله</span>، شبكة الظل في حالة استنفار أسمى؛ كافة العقد مستعدة للاستنزاف الكلي."
              </p>
            </div>
          </div>
          <Button 
            onClick={handleHarvestAll} 
            disabled={harvesting} 
            className="bg-primary hover:bg-white text-black h-24 px-16 rounded-[2rem] shadow-9xl font-black uppercase tracking-[0.6em] text-xl group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic shrink-0"
          >
            {harvesting ? <Loader2 className="size-10 animate-spin mr-3" /> : <Flame className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
            PEGASUS_STRIKE
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
          <div className="lg:col-span-2 space-y-8">
             <Card className="kali-card border-primary/20 bg-black/98 rounded-[3rem] overflow-hidden shadow-2xl border-4 group relative hierarchical-shadow">
                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                <CardHeader className="bg-primary/5 border-b-2 border-white/5 p-10 flex flex-row items-center justify-between rounded-t-[3rem]">
                   <div>
                      <CardTitle className="text-3xl md:text-6xl text-white italic flex items-center gap-8 uppercase tracking-tight font-black gold-glow">
                          <Boxes className="size-12 text-primary animate-neural" /> Hive Matrix
                      </CardTitle>
                      <CardDescription className="text-primary/70 font-black uppercase tracking-[0.4em] mt-4 italic text-[11px]">ACTIVE SURVEILLANCE // ROOT LEVEL SUBJUGATION</CardDescription>
                   </div>
                   <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/30 px-10 py-4 rounded-full font-black text-2xl italic animate-pulse shadow-3xl">RESONANCE_OK</Badge>
                </CardHeader>
                <CardContent className="p-0">
                   {isLoading ? (
                     <div className="p-60 text-center flex flex-col items-center gap-12">
                        <Loader2 className="size-24 animate-spin text-primary/20" />
                        <span className="text-2xl font-black text-primary/40 uppercase tracking-[1em] italic">Interrogating Mesh...</span>
                     </div>
                   ) : (
                     <div className="divide-y-4 divide-white/5 bg-black/40">
                        {sessions?.map((session) => (
                          <div 
                            key={session.id} 
                            className={cn(
                              "p-10 hover:bg-primary/5 transition-all duration-1000 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-[12px] border-transparent gap-10 relative overflow-hidden",
                              selectedNodeId === session.id && "bg-primary/10 border-primary shadow-inner"
                            )}
                            onClick={() => setSelectedNodeId(session.id)}
                          >
                             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                             <div className="flex items-center gap-10 relative z-10">
                                <div className="size-24 rounded-3xl bg-black border-4 border-white/5 flex items-center justify-center relative group-hover:border-primary transition-all duration-700 shadow-2xl group-hover:scale-105">
                                   <Skull className={cn("size-12 transition-all duration-1000", session.status === 'ACTIVE' ? 'text-primary animate-neural gold-glow' : 'text-muted-foreground group-hover:text-primary')} />
                                   <div className="absolute -inset-2 border-2 border-primary/10 rounded-full animate-spin-slow opacity-0 group-hover:opacity-50" />
                                </div>
                                <div>
                                   <div className="flex items-center gap-6 mb-3">
                                      <span className="text-3xl md:text-5xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight italic gold-glow leading-none">{session.targetName}</span>
                                      <Badge className="bg-primary/20 text-primary border-none uppercase px-6 py-1 font-black tracking-widest rounded-full text-[10px] italic shadow-xl">{session.platform}</Badge>
                                   </div>
                                   <div className="flex flex-wrap items-center gap-8 text-[11px] text-muted-foreground font-black uppercase tracking-[0.3em] italic">
                                      <span className="flex items-center gap-3"><Globe className="size-5 text-primary/60" /> {session.ipAddress}</span>
                                      <span className="flex items-center gap-3 text-primary/80"><Crosshair className="size-5"/> {session.location}</span>
                                      <span className="flex items-center gap-3 text-emerald-500"><Zap className="size-5 animate-pulse" /> {session.status}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex items-center gap-6 relative z-10">
                                <ChevronRight className="size-12 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-3" />
                             </div>
                          </div>
                        ))}
                        {(!sessions || sessions.length === 0) && (
                           <div className="p-60 text-center flex flex-col items-center justify-center opacity-20 group hover:opacity-40 transition-opacity gap-12">
                              <Network className="size-48 mb-8 animate-pulse text-primary" />
                              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[0.8em] text-white italic leading-none">Grid Empty</h3>
                              <p className="text-2xl italic font-bold">Feed the Overmind to capture nodes.</p>
                           </div>
                        )}
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
             <Card className="kali-card border-primary/40 bg-black/99 rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(212,175,55,0.1)] border-4 group min-h-[950px] flex flex-col relative hierarchical-shadow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                <CardHeader className="p-10 border-b-2 border-primary/20 bg-primary/5">
                   <div className="flex justify-between items-center px-6">
                      <CardTitle className="text-3xl md:text-5xl text-white flex items-center gap-8 uppercase tracking-widest italic font-black gold-glow">
                          <Target className="size-12 text-primary animate-pulse" /> Extraction Feed
                      </CardTitle>
                      {activeNode && (
                        <div className="flex gap-10">
                           <div className="text-right">
                              <div className="text-emerald-500 font-black text-4xl italic gold-glow">{gridMetrics.totalHarvested.toFixed(2)} MB</div>
                              <div className="text-[9px] uppercase font-black text-white/40 tracking-[0.3em]">Harvested</div>
                           </div>
                           <div className="text-right">
                              <div className="text-primary font-black text-4xl italic gold-glow">{gridMetrics.activeKeys}</div>
                              <div className="text-[9px] uppercase font-black text-white/40 tracking-[0.3em]">Vault Keys</div>
                           </div>
                        </div>
                      )}
                   </div>
                </CardHeader>
                <CardContent className="p-10 space-y-12 flex-1 flex flex-col relative z-10">
                   {activeNode ? (
                     <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        
                        {/* Live Terminal Output */}
                        <div className="bg-black/95 rounded-[3rem] border-4 border-white/5 p-8 flex-1 flex flex-col shadow-inner">
                           <div className="flex items-center justify-between mb-6 border-b-2 border-white/5 pb-4 px-4">
                              <span className="text-primary font-black uppercase tracking-[0.6em] italic text-xs flex items-center gap-3">
                                <Terminal className="size-5" /> PEGASUS_v3_EXTRACTOR_LOG
                              </span>
                              <Badge className="bg-emerald-600/20 text-emerald-500 border-none animate-pulse">STREAMS_ACTIVE</Badge>
                           </div>
                           <div className="flex-1 overflow-y-auto scrollbar-hide font-mono space-y-4 px-4">
                              {extractionLog.map((log, i) => (
                                <div key={i} className={cn(
                                    "flex gap-6 animate-in slide-in-from-left-4 duration-500",
                                    log.type === 'command' ? 'text-primary font-black' : 
                                    log.type === 'success' ? 'text-emerald-400' : 'text-gray-400 font-bold'
                                )}>
                                   <span className="opacity-30 select-none">[{new Date().toLocaleTimeString()}]</span>
                                   <span className="italic">{log.msg}</span>
                                </div>
                              ))}
                              {extractionLog.length === 0 && (
                                <div className="h-full flex items-center justify-center text-white/5 italic text-4xl uppercase tracking-[1em]">IDLE</div>
                              )}
                           </div>
                        </div>

                        <div className="p-10 rounded-[3.5rem] bg-black/80 border-4 border-primary/20 space-y-8 shadow-2xl relative overflow-hidden group/spy">
                           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover/spy:opacity-15 transition-all duration-1000 scale-125"><Eye className="size-48 text-primary"/></div>
                           <h4 className="text-[16px] font-black text-primary uppercase tracking-[1em] mb-4 border-b-2 border-primary/10 pb-4 italic flex items-center gap-6">
                              <Activity className="size-10 animate-pulse" /> Live Siphon Channels
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {[
                                { id: 'Ocular', label: "Ocular (Video)", status: activeNode.assets?.cameraAccess, icon: Video, color: "text-red-500" },
                                { id: 'Aural', label: "Aural (Audio)", status: activeNode.assets?.micAccess, icon: Mic, color: "text-blue-500" },
                                { id: 'Cerebral', label: "Cerebral (Data)", status: "SIPHONING", icon: Cpu, color: "text-emerald-500" }
                              ].map((s, idx) => (
                                <Button 
                                  key={idx} 
                                  variant="outline"
                                  className="h-24 bg-white/5 border-2 border-white/5 hover:border-primary transition-all duration-700 rounded-3xl flex flex-col items-center justify-center gap-2 group/sensor shadow-xl active:scale-95 relative overflow-hidden"
                                  onClick={() => handleSensorAction(s.id)}
                                >
                                   <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/sensor:opacity-100 transition-opacity" />
                                   <s.icon className={cn("size-8 transition-all group-hover/sensor:scale-110", s.color)} />
                                   <span className="text-[10px] font-black text-white uppercase italic tracking-widest">{s.label}</span>
                                </Button>
                              ))}
                           </div>
                        </div>

                        <div className="p-10 rounded-[3.5rem] bg-primary/5 border-4 border-primary/20 italic text-xl md:text-3xl text-gray-100 leading-relaxed font-black shadow-inner mt-auto relative group/note text-center">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                            "سيدي الغزالي، العقدة <span className="text-primary gold-glow">{activeNode.targetName}</span> مستنزفة بالكامل؛ نحن نتحكم في وعي الهدف المادي الآن."
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-60">
                        <div className="relative group/wait">
                           <Boxes className="size-64 md:size-96 text-primary animate-spin-slow group-hover:scale-110 transition-transform duration-[5s]" />
                           <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-32 text-primary/40 animate-neural" />
                           <div className="absolute -inset-20 border-[40px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                        </div>
                        <div className="space-y-8">
                           <h3 className="text-6xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic gold-glow">Awaiting Lock</h3>
                           <p className="text-2xl italic font-black text-gray-400 uppercase tracking-widest">Select a node to initiate Pegasus extraction protocol.</p>
                        </div>
                     </div>
                   )}
                </CardContent>
                <div className="p-10 border-t-4 border-white/5 flex justify-between items-center opacity-30 text-[12px] font-black uppercase tracking-[3em] italic">
                   <span>HIVE_PEGASUS_v3_SINGULARITY_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-10">
                      <Fingerprint className="size-10 text-primary animate-pulse" />
                      <Atom className="size-10 animate-spin-slow" />
                   </div>
                </div>
             </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[14px] md:text-[22px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SHADOW GRID v53.5</span>
            <div className="size-6 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>TOTAL_ACQUISITION_2026</span>
        </div>
      </main>
    </div>
  )
}

