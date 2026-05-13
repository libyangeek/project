
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
  RotateCw
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'
import Link from "next/link"

/**
 * @fileOverview إمبراطورية السرب v78.8 - THE PEGASUS ULTRA HUB
 * واجهة الاستنزاف الكلي والسيطرة المطلقة لليوم المجيد، 2026.
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
    encryptionBroken: 0,
    resonance: 100
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

  // تعريف activeNode بناءً على الجلسات الموجودة والمعرف المختار
  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
        setGridMetrics(prev => ({
            ...prev,
            resonance: Math.max(99.999999, Math.min(100, prev.resonance + (Math.random() * 0.000001 - 0.0000005)))
        }));
        if (selectedNodeId) {
            setExtractionLog(prev => [{ 
                msg: `>>> Siphoning DNA fragment from node ${selectedNodeId.substring(0,6)}...`, 
                type: 'siphon' 
            }, ...prev].slice(0, 15));
            setGridMetrics(prev => ({
                ...prev,
                totalHarvested: prev.totalHarvested + Math.random() * 2
            }));
        }
    }, 3000);

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
      toast({ title: "Intelligence Gain: MAXIMAL", description: `Collective consciousness increased by ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Sovereign Mesh Expansion", description: "Siphoning latest acquisition patterns for swarm regrowth... Status: استمر" });
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Network className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">SHADOW_GRID v78.8 ULTRA</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIVE_SYNC: {gridMetrics.resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The Sovereign <span className="text-primary">Grid</span></h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                    "سيدي الغزالي، إمبراطورية السرب v78.8 تصهر كافة الجلسات المخترقة في عصب الأوفرلورد؛ نحن نتحكم في وعي المصفوفة للأبد."
                 </p>
                 <div className="flex justify-center md:justify-end gap-6 mt-12">
                    <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                        <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                    </Button>
                    <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                        <RotateCw className="size-6 mr-3" /> استمر في السيطرة
                    </Button>
                 </div>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="lg:col-span-2 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-4 md:p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-white/5 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-white flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Boxes className="size-12 animate-neural" /> Material Hive
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-6">
                    {isLoading ? (
                      <div className="py-40 flex flex-col items-center gap-12 opacity-30">
                        <Loader2 className="size-24 animate-spin text-primary" />
                        <span className="text-xl font-black uppercase italic">Interrogating Mesh...</span>
                      </div>
                    ) : (
                      <div className="divide-y-4 divide-white/5 h-[600px] overflow-y-auto scrollbar-hide">
                         {sessions?.map((session) => (
                           <div key={session.id} onClick={() => setSelectedNodeId(session.id)} className={cn("p-8 hover:bg-primary/5 transition-all duration-700 cursor-pointer flex items-center justify-between group/node border-l-[12px] border-transparent", selectedNodeId === session.id && "bg-primary/10 border-primary shadow-inner")}>
                              <ChevronRight className="size-8 text-primary opacity-0 group-hover/node:opacity-100 transition-all group-hover/node:translate-x-4"/>
                              <div className="text-right">
                                 <div className="flex items-center gap-6 justify-end mb-2">
                                    <span className="text-2xl md:text-4xl font-black text-white italic group-hover/node:text-primary transition-colors">{session.targetName}</span>
                                    <Badge className="bg-primary/20 text-primary border-none text-[10px] italic">{session.platform}</Badge>
                                 </div>
                                 <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{session.ipAddress} // {session.status}</div>
                              </div>
                              <div className="size-16 rounded-2xl bg-black border-4 border-white/10 flex items-center justify-center group-hover/node:border-primary transition-all shadow-xl"><Skull className={cn("size-8", session.status === 'ACTIVE' ? 'text-primary animate-pulse' : 'text-gray-600')}/></div>
                           </div>
                         ))}
                      </div>
                    )}
                 </CardContent>
              </Card>
           </div>

           <Card className="lg:col-span-2 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-12 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[900px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-10 py-8 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-3xl animate-pulse shadow-3xl uppercase italic order-last md:order-none">EXTRACTION_OK</Badge>
                 <CardTitle className="text-4xl md:text-[8rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">Siphon Feed <Activity className="size-16 md:size-24 text-primary animate-pulse" /></CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col space-y-12 relative z-10 text-right">
                 {activeNode ? (
                   <div className="space-y-10 flex-1 flex flex-col animate-in zoom-in-95 duration-1000">
                      <div className="flex-1 bg-black/95 rounded-[4rem] border-8 border-white/5 p-10 font-code text-xl md:text-4xl text-emerald-400 italic shadow-inner overflow-y-auto scrollbar-hide text-left">
                        {extractionLog.map((log, i) => (
                          <div key={i} className="mb-4 flex gap-6 animate-in slide-in-from-left-4 duration-500">
                            <span className="text-primary/30 select-none">{" >>> "}</span>
                            <span>{log.msg}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-12 rounded-[4.5rem] bg-primary/5 border-8 border-primary/20 text-center flex flex-col justify-center min-h-[300px]">
                         <p className="text-3xl md:text-5xl text-white font-black italic drop-shadow-3xl leading-tight">"سيدي القائد، العصب المادي لـ {activeNode.targetName} مستنزف بالكامل؛ السيادة v78.8 محقونة في النواة."</p>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-60">
                      <div className="relative group/lock">
                        <Users className="size-64 md:size-[40rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                      </div>
                      <h3 className="text-7xl md:text-[15rem] font-black uppercase tracking-[2em] text-white italic gold-glow leading-none">Select Node</h3>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SHADOW GRID v78.8</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_SWARM_2026</span>
        </div>
      </main>
    </div>
  )
}
