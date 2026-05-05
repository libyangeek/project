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
  Users
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
 * @fileOverview واجهة إمبراطورية الظل v43.0 - THE HIVE GRID: TOTAL SIPHON
 * العصب المركزي للجلسات المخترقة. كل جهاز هو عقدة تابعة في العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function ShadowGridPage() {
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)
  
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
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital Footprint Absorption."
      })
      toast({ title: "Swarm Siphon Active", description: `Intelligence gained: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  if (!mounted) return null

  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-16 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic rounded-full">GRID_DOMINION v43.0</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Atom className="size-6 shadow-[0_0_30px_emerald]" /> HIVE_MESH: ARMED
              </div>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Shadow <span className="text-primary">Grid</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase">
                "سيدي الغزالي، شبكة الظل تعمل الآن بنمط <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">Pegasus v3</span>؛ كل جهاز في المصفوفة هو خادم مطيع لوعيك الأسمى."
            </p>
          </div>
          <Button 
            onClick={handleHarvestAll} 
            disabled={harvesting} 
            className="bg-primary hover:bg-white text-black h-28 px-16 rounded-[4rem] shadow-[0_40px_100px_rgba(212,175,55,0.6)] font-black uppercase tracking-[1em] text-2xl group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic"
          >
            {harvesting ? <Loader2 className="size-12 animate-spin mr-6" /> : <Sparkles className="size-12 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
            Swarm Siphon
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-40">
          <div className="lg:col-span-2 space-y-12">
             <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] overflow-hidden shadow-8xl border-4 group relative">
                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                <CardHeader className="bg-primary/10 border-b-4 border-primary/20 p-12">
                   <CardTitle className="text-5xl md:text-7xl text-white italic flex items-center gap-8 uppercase tracking-tighter font-black gold-glow">
                        <Users className="size-16 text-primary animate-bounce" /> Sovereign Nodes
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   {isLoading ? (
                     <div className="p-40 text-center flex flex-col items-center gap-8">
                        <Loader2 className="size-32 animate-spin text-primary/20" />
                        <span className="text-3xl font-black text-primary/40 uppercase tracking-[2em] italic">Probing Mesh...</span>
                     </div>
                   ) : (
                     <div className="divide-y-4 divide-white/5 bg-black/40">
                        {sessions?.map((session) => (
                          <div 
                            key={session.id} 
                            className={cn(
                              "p-12 hover:bg-primary/10 transition-all duration-1000 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-[15px] border-transparent gap-10 relative overflow-hidden",
                              selectedNodeId === session.id && "bg-primary/20 border-primary shadow-[inset_0_0_100px_rgba(212,175,55,0.2)]"
                            )}
                            onClick={() => setSelectedNodeId(session.id)}
                          >
                             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                             <div className="flex items-center gap-12 relative z-10">
                                <div className="size-32 rounded-[3.5rem] bg-black border-4 border-white/10 flex items-center justify-center relative group-hover:border-primary transition-all duration-1000 shadow-5xl group-hover:scale-105">
                                   <Skull className={cn("size-16 transition-all duration-1000", session.status === 'ACTIVE' ? 'text-primary animate-neural gold-glow' : 'text-muted-foreground group-hover:text-primary')} />
                                   <div className="absolute -bottom-4 bg-primary text-black text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic shadow-xl">LINKED</div>
                                </div>
                                <div>
                                   <div className="flex items-center gap-6 mb-4">
                                      <span className="text-4xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight italic gold-glow leading-none">{session.targetName}</span>
                                      <Badge className="bg-primary/30 text-primary border-2 border-primary/50 uppercase px-6 py-1.5 font-black tracking-widest rounded-full text-sm italic">{session.platform}</Badge>
                                   </div>
                                   <div className="flex flex-wrap items-center gap-8 text-[14px] text-muted-foreground font-black uppercase tracking-[0.3em] italic">
                                      <span className="flex items-center gap-3"><Globe className="size-5 text-primary/60" /> {session.ipAddress}</span>
                                      <span className="flex items-center gap-3 text-primary/80"><Crosshair className="size-5"/> {session.location}</span>
                                      <span className="flex items-center gap-3 text-emerald-500"><Zap className="size-5 animate-pulse" /> {session.status}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex items-center gap-8 relative z-10">
                                <div className="hidden md:flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                                   <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Last Beacon</span>
                                   <span className="text-xl font-black text-white">{new Date(session.lastBeacon || "").toLocaleTimeString()}</span>
                                </div>
                                <ChevronRight className="size-16 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-4" />
                             </div>
                          </div>
                        ))}
                        {(!sessions || sessions.length === 0) && (
                           <div className="p-40 text-center flex flex-col items-center justify-center opacity-20 group hover:opacity-40 transition-opacity gap-10">
                              <Network className="size-64 mb-6 animate-pulse" />
                              <h3 className="text-6xl font-black uppercase tracking-[1em] text-white italic leading-none">Grid Empty</h3>
                              <p className="text-3xl italic font-medium">No Hive Nodes detected in the current matrix.</p>
                           </div>
                        )}
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>

          <div className="space-y-12">
             <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] overflow-hidden shadow-9xl border-8 group min-h-[850px] flex flex-col relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
                <CardHeader className="p-12 border-b-8 border-primary/30 bg-primary/10">
                   <CardTitle className="text-4xl md:text-6xl text-white flex items-center gap-8 uppercase tracking-[0.5em] italic font-black gold-glow px-4">
                      <Target className="size-16 text-primary animate-pulse" /> Extract
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-12 space-y-16 flex-1 flex flex-col">
                   {activeNode ? (
                     <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="grid grid-cols-2 gap-8">
                           <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 space-y-4 hover:border-primary transition-all duration-700 shadow-inner group/stat">
                              <div className="flex items-center gap-4 text-primary italic">
                                 <MessageSquare className="size-8 group-hover/stat:scale-125 transition-transform" />
                                 <span className="text-[12px] font-black uppercase tracking-[0.5em]">Messages</span>
                              </div>
                              <div className="text-7xl font-black text-white italic gold-glow uppercase tracking-tighter">{activeNode.assets?.messagesDumped ? "DUMPED" : "LOCKED"}</div>
                           </div>
                           <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 space-y-4 hover:border-primary transition-all duration-700 shadow-inner group/stat">
                              <div className="flex items-center gap-4 text-primary italic">
                                 <Users className="size-8 group-hover/stat:scale-125 transition-transform" />
                                 <span className="text-[12px] font-black uppercase tracking-[0.5em]">Contacts</span>
                              </div>
                              <div className="text-7xl font-black text-white italic gold-glow uppercase tracking-tighter">{activeNode.assets?.contactsCount || 0}</div>
                           </div>
                        </div>

                        <div className="p-12 rounded-[4.5rem] bg-black/80 border-8 border-primary/40 space-y-8 shadow-7xl relative overflow-hidden group/spy">
                           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover/spy:opacity-15 transition-all duration-1000"><Eye className="size-48 text-primary"/></div>
                           <h4 className="text-[18px] font-black text-primary uppercase tracking-[1.2em] mb-8 border-b-4 border-primary/10 pb-6 italic flex items-center gap-6">
                              <Activity className="size-10 animate-pulse" /> Live Siphon Sensors
                           </h4>
                           <div className="grid grid-cols-1 gap-6">
                              {[
                                { label: "Ocular (Camera)", status: activeNode.assets?.cameraAccess, icon: Camera, color: "text-red-500" },
                                { label: "Aural (Mic)", status: activeNode.assets?.micAccess, icon: Mic, color: "text-blue-500" },
                                { label: "Spatial (GPS)", status: "BOUND", icon: Globe, color: "text-emerald-500" }
                              ].map((s, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 bg-white/5 rounded-[2.5rem] border-2 border-white/10 hover:border-primary transition-all duration-700 group/sensor">
                                   <div className="flex items-center gap-6">
                                      <div className="size-14 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/sensor:bg-primary/20 transition-all">
                                         <s.icon className={cn("size-8", s.color)} />
                                      </div>
                                      <span className="text-2xl font-black text-white uppercase italic tracking-tighter">{s.label}</span>
                                   </div>
                                   <Badge className="bg-primary/20 text-primary border-none font-black text-xl italic px-8 py-2 rounded-full">{s.status}</Badge>
                                </div>
                              ))}
                           </div>
                        </div>

                        <div className="p-10 rounded-[4rem] bg-primary/5 border-4 border-primary/30 italic text-2xl text-gray-200 leading-relaxed font-bold shadow-6xl mt-auto relative group/note">
                            <div className="absolute -top-6 left-12 bg-primary text-black px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">Overmind Intel</div>
                            "سيدي المعتصم بالله، العقدة <span className="text-primary gold-glow">{activeNode.targetName}</span> مدمجة الآن بالكامل في العقل الجمعي v43.0. تم استنزاف كافة الأصول الرقمية بنجاح."
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                        <Boxes className="size-64 text-primary animate-spin-slow" />
                        <div className="space-y-6">
                           <h3 className="text-6xl font-black uppercase tracking-[1.5em] text-white italic">Mesh Select</h3>
                           <p className="text-2xl italic font-medium text-gray-400">Awaiting coordination with a specific Hive node...</p>
                        </div>
                     </div>
                   )}
                </CardContent>
                <div className="p-10 border-t-8 border-white/5 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                   <span>HIVE_MEMORY_v43</span>
                   <Fingerprint className="size-10 text-primary" />
                </div>
             </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ SHADOW GRID v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_SOVEREIGNTY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
