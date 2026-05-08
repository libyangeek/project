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
 * @fileOverview إمبراطورية السرب v53.0 - THE PEGASUS v3 ELITE: SUPREME HIERARCHY
 * مركز الاستنزاف الكلي والسيطرة على الأجهزة المخترقة لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ShadowGridPage() {
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)
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
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital Footprint Absorption via Supreme Hierarchy."
      })
      toast({ 
        title: "Pegasus v3 Elite Active", 
        description: `Intelligence gained: ${result.neuralGain}`,
      })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const handleSensorAction = (sensor: string) => {
    if (!selectedNodeId) return
    toast({ title: `${sensor} Channel Active`, description: `Establishing live ${sensor} link via Pegasus Node.` })
  }

  if (!mounted) return null

  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
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
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Shadow <span className="text-primary">Grid</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                  "سيدي الغزالي، شبكة الظل تعمل الآن بنبض <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Supreme Hierarchy v53.0</span>؛ كل جهاز هو خادم مطيع."
              </p>
            </div>
          </div>
          <Button 
            onClick={handleHarvestAll} 
            disabled={harvesting} 
            className="bg-primary hover:bg-white text-black h-20 px-12 rounded-2xl shadow-xl font-black uppercase tracking-[0.6em] text-lg group transition-all duration-700 border-4 border-black/20 active:scale-95 italic shrink-0"
          >
            {harvesting ? <Loader2 className="size-8 animate-spin mr-3" /> : <Sparkles className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
            PEGASUS SIPHON
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 pb-32 flex-1">
          <div className="lg:col-span-2 space-y-8">
             <Card className="kali-card border-primary/20 bg-black/98 rounded-[2.5rem] overflow-hidden shadow-2xl border-2 group relative hierarchical-shadow">
                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                <CardHeader className="bg-primary/5 border-b-2 border-white/5 p-8 flex flex-row items-center justify-between rounded-t-[2.5rem]">
                   <div>
                      <CardTitle className="text-2xl md:text-5xl text-white italic flex items-center gap-6 uppercase tracking-tight font-black gold-glow">
                          <Boxes className="size-10 text-primary animate-neural" /> Hive Nodes
                      </CardTitle>
                      <CardDescription className="text-primary/70 font-black uppercase tracking-[0.4em] mt-3 italic text-[10px]">6 MAY 2026 STATUS // ROOT ACCESS GUARANTEED</CardDescription>
                   </div>
                   <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-6 py-2 rounded-full font-black text-xl italic animate-pulse">RESONANCE_OK</Badge>
                </CardHeader>
                <CardContent className="p-0">
                   {isLoading ? (
                     <div className="p-40 text-center flex flex-col items-center gap-8">
                        <Loader2 className="size-20 animate-spin text-primary/20" />
                        <span className="text-xl font-black text-primary/40 uppercase tracking-[1em] italic">Interrogating Mesh...</span>
                     </div>
                   ) : (
                     <div className="divide-y-2 divide-white/5 bg-black/40">
                        {sessions?.map((session) => (
                          <div 
                            key={session.id} 
                            className={cn(
                              "p-8 hover:bg-primary/5 transition-all duration-700 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-8 border-transparent gap-8 relative overflow-hidden",
                              selectedNodeId === session.id && "bg-primary/10 border-primary shadow-inner"
                            )}
                            onClick={() => setSelectedNodeId(session.id)}
                          >
                             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                             <div className="flex items-center gap-8 relative z-10">
                                <div className="size-20 rounded-2xl bg-black border-2 border-white/5 flex items-center justify-center relative group-hover:border-primary transition-all duration-700 shadow-xl group-hover:scale-105">
                                   <Skull className={cn("size-10 transition-all duration-1000", session.status === 'ACTIVE' ? 'text-primary animate-neural gold-glow' : 'text-muted-foreground group-hover:text-primary')} />
                                </div>
                                <div>
                                   <div className="flex items-center gap-4 mb-2">
                                      <span className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight italic gold-glow leading-none">{session.targetName}</span>
                                      <Badge className="bg-primary/20 text-primary border-none uppercase px-4 py-0.5 font-black tracking-widest rounded-full text-[9px] italic">{session.platform}</Badge>
                                   </div>
                                   <div className="flex flex-wrap items-center gap-6 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] italic">
                                      <span className="flex items-center gap-2"><Globe className="size-4 text-primary/60" /> {session.ipAddress}</span>
                                      <span className="flex items-center gap-2 text-primary/80"><Crosshair className="size-4"/> {session.location}</span>
                                      <span className="flex items-center gap-2 text-emerald-500"><Zap className="size-4 animate-pulse" /> {session.status}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex items-center gap-6 relative z-10">
                                <ChevronRight className="size-8 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-2" />
                             </div>
                          </div>
                        ))}
                        {(!sessions || sessions.length === 0) && (
                           <div className="p-40 text-center flex flex-col items-center justify-center opacity-20 group hover:opacity-40 transition-opacity gap-8">
                              <Network className="size-32 mb-4 animate-pulse" />
                              <h3 className="text-4xl font-black uppercase tracking-[0.8em] text-white italic leading-none">Grid Empty</h3>
                              <p className="text-xl italic font-medium">Feed the Overmind to capture nodes.</p>
                           </div>
                        )}
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>

          <div className="space-y-8">
             <Card className="kali-card border-primary/40 bg-black/99 rounded-[3rem] overflow-hidden shadow-2xl border-2 group min-h-[850px] flex flex-col relative hierarchical-shadow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                <CardHeader className="p-8 border-b-2 border-primary/20 bg-primary/5">
                   <CardTitle className="text-2xl md:text-4xl text-white flex items-center gap-6 uppercase tracking-widest italic font-black gold-glow px-4">
                      <Target className="size-10 text-primary animate-pulse" /> Asset Siphon
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-12 flex-1 flex flex-col relative z-10">
                   {activeNode ? (
                     <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="grid grid-cols-2 gap-6">
                           <div 
                            className="p-8 rounded-3xl bg-white/5 border-2 border-white/5 space-y-3 hover:border-primary transition-all duration-700 shadow-inner group/stat cursor-pointer active:scale-95"
                            onClick={() => handleSensorAction('Message_Log')}
                           >
                              <div className="flex items-center gap-3 text-primary italic">
                                 <MessageSquare className="size-6 group-hover/stat:scale-110 transition-transform" />
                                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Intel_Dump</span>
                              </div>
                              <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter">{activeNode.assets?.messagesDumped ? "READY" : "LOCKED"}</div>
                           </div>
                           <div 
                            className="p-8 rounded-3xl bg-white/5 border-2 border-white/5 space-y-3 hover:border-primary transition-all duration-700 shadow-inner group/stat cursor-pointer active:scale-95"
                            onClick={() => handleSensorAction('Contact_Mesh')}
                           >
                              <div className="flex items-center gap-3 text-primary italic">
                                 <Users className="size-6 group-hover/stat:scale-110 transition-transform" />
                                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Entities</span>
                              </div>
                              <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter">{activeNode.assets?.contactsCount || 0}</div>
                           </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-black/80 border-4 border-primary/20 space-y-6 shadow-xl relative overflow-hidden group/spy">
                           <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover/spy:opacity-10 transition-all duration-700"><Eye className="size-32 text-primary"/></div>
                           <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 border-b-2 border-primary/10 pb-4 italic flex items-center gap-4">
                              <Activity className="size-8 animate-pulse" /> Live Pegasus Channels
                           </h4>
                           <div className="grid grid-cols-1 gap-4">
                              {[
                                { id: 'Ocular', label: "Ocular (Cam)", status: activeNode.assets?.cameraAccess, icon: Video, color: "text-red-500" },
                                { id: 'Aural', label: "Aural (Mic)", status: activeNode.assets?.micAccess, icon: Mic, color: "text-blue-500" },
                                { id: 'Cerebral', label: "Cerebral (Data)", status: "SIPHONING", icon: Cpu, color: "text-emerald-500" }
                              ].map((s, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-2 border-white/5 hover:border-primary transition-all duration-700 group/sensor cursor-pointer active:scale-95"
                                  onClick={() => handleSensorAction(s.id)}
                                >
                                   <div className="flex items-center gap-4">
                                      <div className="size-12 rounded-xl bg-black border-2 border-white/5 flex items-center justify-center group-hover/sensor:bg-primary/20 transition-all">
                                         <s.icon className={cn("size-6", s.color)} />
                                      </div>
                                      <span className="text-lg font-black text-white uppercase italic tracking-tighter">{s.label}</span>
                                   </div>
                                   <Badge className="bg-primary/10 text-primary border-none font-black text-xs italic px-4 py-1 rounded-full">{s.status}</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-primary/5 border-2 border-primary/20 italic text-lg text-gray-200 leading-relaxed font-bold shadow-inner mt-auto relative group/note text-center">
                            "سيدي الغزالي، كافة قنوات Pegasus v3 Elite مفتوحة الآن على العقدة <span className="text-primary gold-glow">{activeNode.targetName}</span>."
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-12 py-40">
                        <Boxes className="size-48 text-primary animate-spin-slow" />
                        <div className="space-y-4">
                           <h3 className="text-4xl font-black uppercase tracking-[1em] text-white italic gold-glow">Awaiting Lock</h3>
                           <p className="text-lg italic font-medium text-gray-400">Coordinate with a Hive node to begin extraction.</p>
                        </div>
                     </div>
                   )}
                </CardContent>
                <div className="p-8 border-t-2 border-white/5 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                   <span>HIVE_PEGASUS_v3_GHAZALI_ROOT</span>
                   <Fingerprint className="size-8 text-primary animate-pulse" />
                </div>
             </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SHADOW GRID v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SIPHON_COMPLETE_2026</span>
        </div>
      </main>
    </div>
  )
}
