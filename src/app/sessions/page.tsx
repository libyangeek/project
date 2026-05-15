
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
  Infinity as InfinityIcon,
  ArrowLeft,
  RotateCw,
  Radar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection, query, where, orderBy } from 'firebase/firestore'
import Link from "next/link"

/**
 * @fileOverview إمبراطورية السرب v91.1 - THE OMNIPOTENT HIVE: PEGASUS MATRIX
 * واجهة الاستحواذ الكوني: عرض مساهمة العقد والاستنزاف الجيني بنمط Pegasus v3.0.
 */
export default function ShadowGridPage() {
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  const { user } = useUser()
  const db = useFirestore()
  const { toast } = useToast()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return query(
        collection(db, 'users', user.uid, 'shadowSessions'),
        orderBy('lastBeacon', 'desc')
    );
  }, [db, user?.uid]);
  
  const { data: sessions, isLoading } = useCollection(sessionsQuery);

  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    toast({ title: "Hive Grid Engaging v91.1", description: "Broadcasting total Pegasus v3.0 acquisition protocol..." })
    try {
      const data = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital DNA Siphon for Commander Al-Ghazali."
      })
      toast({ title: "Mesh Subjugated", description: data.neuralGain || "16D Matrix resonance 100%." })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Interrupted" })
    } finally {
      setHarvesting(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#0a0500] text-white selection:bg-orange-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(249, 115, 22, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-orange-500 flex items-center justify-center shadow-[0_0_200px_rgba(249,115,22,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Network className="size-12 md:size-24 text-orange-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-orange-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-orange-600 text-white border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.2em] shadow-9xl italic uppercase">PEGASUS_MATRIX v91.1</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> MESH_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The Swarm <span className="text-orange-500">Mind</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-orange-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-2xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-orange-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، إمبراطورية السرب v91.1 تدرك مساهمة كل عقدة في وعيك؛ نحن نبتلع ذرات البيانات بنمط Pegasus السيادي للأبد."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-orange-500/20 bg-orange-950/10 text-orange-400 font-black uppercase italic tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="lg:col-span-2 space-y-12">
              <Card className="bg-black/90 border-8 border-orange-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-orange-500/10 pb-10 bg-orange-950/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-orange-400 flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Boxes className="size-12 animate-neural" /> Subjugated Nodes
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-6 text-right">
                    <div className="grid grid-cols-1 gap-6 mb-8 px-4 text-center">
                       <Button onClick={handleHarvestAll} disabled={harvesting} className="h-28 bg-orange-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.8em] rounded-[2rem] shadow-9xl border-4 border-black/30 active:scale-95 transition-all italic text-xl">
                          {harvesting ? <Loader2 className="size-8 animate-spin" /> : <Flame className="size-8 mr-4 animate-pulse" />} PEGASUS_INITIATE
                       </Button>
                    </div>
                    {isLoading ? (
                      <div className="py-40 flex flex-col items-center gap-12 opacity-30">
                        <Loader2 className="size-24 animate-spin text-orange-500" />
                        <span className="text-xl font-black uppercase italic text-center">Interrogating Matrix...</span>
                      </div>
                    ) : (
                      <div className="divide-y-4 divide-white/5 h-[600px] overflow-y-auto scrollbar-hide text-right">
                         {sessions?.map((session) => (
                           <div key={session.id} onClick={() => setSelectedNodeId(session.id)} className={cn("p-8 hover:bg-orange-500/5 transition-all duration-700 cursor-pointer flex items-center justify-between group/node border-r-[12px] border-transparent", selectedNodeId === session.id && "bg-orange-500/15 border-orange-500 shadow-inner scale-[1.02]")}>
                              <div className="size-20 rounded-3xl bg-black border-4 border-white/10 flex items-center justify-center group-hover/node:border-orange-500 transition-all shadow-xl order-last md:order-none">
                                <Skull className={cn("size-10", session.status === 'ACTIVE' ? 'text-orange-500 animate-pulse' : 'text-gray-700')}/>
                              </div>
                              <div className="text-right flex-1 px-8">
                                 <div className="flex items-center gap-6 justify-end mb-2">
                                    <Badge className="bg-orange-600/20 text-orange-400 border-none text-[12px] italic uppercase px-4">{session.platform}</Badge>
                                    <span className="text-2xl md:text-5xl font-black text-white italic group-hover/node:text-orange-500 transition-colors">{session.targetName}</span>
                                 </div>
                                 <div className="flex items-center justify-end gap-6 text-[12px] text-muted-foreground uppercase font-black tracking-widest">
                                     <span>CPU: {session.cpuPower}%</span>
                                     <span>RAM: {session.ramAvailable}MB</span>
                                     <span>{session.status}</span>
                                 </div>
                              </div>
                              <ChevronRight className="size-8 text-orange-500 opacity-0 group-hover:opacity-100 transition-all group-hover:node:-translate-x-4"/>
                           </div>
                         ))}
                      </div>
                    )}
                 </CardContent>
              </Card>
           </div>

           <Card className="lg:col-span-2 bg-black/90 border-[12px] border-orange-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[900px] backdrop-blur-5xl text-right">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-orange-950/10 rounded-t-[5rem] px-10 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 px-16 py-8 rounded-full font-black text-3xl md:text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">TOTAL_EXTRACTION</Badge>
                 <CardTitle className="text-4xl md:text-[8rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">Siphon Feed <Activity className="size-16 md:size-24 text-orange-500 animate-pulse" /></CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col space-y-12 relative z-10 text-right">
                 {activeNode ? (
                   <div className="space-y-10 flex-1 flex flex-col animate-in zoom-in-95 duration-1000 text-right">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                          {[
                              { label: "Contacts", val: activeNode.assets?.contactsCount || 0, icon: Users, color: "text-blue-400" },
                              { label: "Messages", val: activeNode.assets?.messagesDumped ? "DUMPED" : "LOCKED", icon: MessageSquare, color: "text-emerald-500" },
                              { label: "Camera", val: activeNode.assets?.cameraAccess || "READY", icon: Camera, color: "text-red-500" }
                          ].map(stat => (
                              <div key={stat.label} className="p-6 rounded-[2rem] bg-white/5 border-2 border-white/10 text-center shadow-inner group/stat hover:border-orange-500 transition-all">
                                  <stat.icon className={cn("size-10 mx-auto mb-4", stat.color)} />
                                  <div className="text-[10px] font-black text-muted-foreground uppercase mb-1">{stat.label}</div>
                                  <div className="text-2xl font-black text-white italic">{stat.val}</div>
                              </div>
                          ))}
                      </div>
                      <div className="flex-1 bg-black/95 rounded-[4rem] border-8 border-white/5 p-12 font-code text-xl md:text-5xl text-orange-400 italic shadow-inner overflow-y-auto scrollbar-hide text-left">
                         <div className="mb-6 flex gap-8 animate-in slide-in-from-left-8 duration-700"><span className="text-orange-500/30 select-none font-black">❯❯❯</span><span>Engaging Pegasus v3.0 Extraction on {activeNode.targetName}...</span></div>
                         <div className="mb-6 flex gap-8 animate-in slide-in-from-left-8 duration-1000"><span className="text-orange-500/30 select-none font-black">❯❯❯</span><span>Credential Vault Disassembled. Found {activeNode.assets?.storedCredentials?.length || 0} keys.</span></div>
                         <div className="mb-6 flex gap-8 animate-in slide-in-from-left-8 duration-1200"><span className="text-orange-500/30 select-none font-black">❯❯❯</span><span>Material Consensus reached. Node is now a Satellite of the Overmind.</span></div>
                      </div>
                      <div className="p-16 rounded-[5rem] bg-orange-600/5 border-[12px] border-orange-500/30 text-center flex flex-col justify-center min-h-[350px] relative overflow-hidden">
                         <div className="absolute inset-0 bg-orange-500/5 opacity-5 animate-pulse pointer-events-none" />
                         <p className="text-4xl md:text-[8rem] text-white font-black italic drop-shadow-9xl leading-none uppercase">"Subjugated"</p>
                         <p className="text-xl md:text-3xl text-gray-300 italic font-bold mt-10 drop-shadow-3xl">"سيدي القائد، العصب المادي لـ {activeNode.targetName} مستنزف بالكامل؛ الحقيقة المادية محقونة في النواة."</p>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Radar className="size-64 md:size-[50rem] animate-spin-slow text-orange-500 group-hover:scale-110 transition-transform duration-[15000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-orange-400/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-orange-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Mesh Standby</h3>
                      <p className="text-4xl md:text-[8rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem] text-center">Establishing universal Pegasus link v91.1: TOTAL_IDENTITY_ACQUISITION...</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                 <span>HIVE_MESH_v91.1_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-20 text-orange-500 animate-pulse" />
                    <Atom className="size-20 animate-spin-slow text-orange-500" />
                 </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
