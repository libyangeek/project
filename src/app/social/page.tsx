
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Share2, 
  Zap, 
  Brain,
  Loader2, 
  Globe, 
  Skull, 
  Crown, 
  Binary, 
  Atom, 
  Boxes, 
  Fingerprint, 
  Infinity as InfinityIcon, 
  Search, 
  Target, 
  Database, 
  Lock, 
  Flame, 
  Key, 
  ShieldAlert, 
  ChevronRight, 
  RefreshCcw, 
  Network, 
  Users, 
  Terminal,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Disc,
  Send,
  Camera,
  Activity,
  ShieldCheck,
  BrainCircuit,
  Map as MapIcon,
  ArrowLeft,
  RotateCw
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { executePredatorNexus } from "@/ai/flows/predator-nexus-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

/**
 * @fileOverview استنزاف الهوية v90.0 - THE IDENTITY SIPHON: TACTICAL PREDATOR
 * واجهة الالتحام الهجومي: ابتلاع الهويات الرقمية لعام 2026.
 * تم التحديث للنمط البرتقالي التكتيكي لعام 2026.
 */
export default function IdentitySiphonPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [activeTab, setActiveMode] = React.useState<"nexus" | "scrape" | "xlogger" | "seeker">("nexus")
  const [targetId, setTargetId] = React.useState("")
  const [resonance, setResonance] = React.useState(100)
  const [nexusResult, setNexusResult] = React.useState<any>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.9999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval) }
  }, [])

  const handleAction = async () => {
    if (!targetId && activeTab !== 'xlogger' && activeTab !== 'seeker') return
    setLoading(true); setNexusResult(null);
    toast({ title: "Predator Pulse Engaging v90", description: "Orchestrating absolute identity siphon via 16 dimensions..." });
    try {
      if (activeTab === "nexus") {
        const data = await executePredatorNexus({ targetIdentity: targetId })
        setNexusResult(data)
        toast({ title: "Siphon Materialized", description: "DNA bound to the material soul." })
      }
    } finally { setLoading(false) }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-[#0a0500] text-white selection:bg-orange-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(249, 115, 22, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-orange-500 flex items-center justify-center shadow-[0_0_200px_rgba(249,115,22,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Skull className="size-12 md:size-24 text-orange-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-orange-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-orange-600 text-white border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.2em] shadow-9xl italic uppercase">IDENTITY_SIPHON v90.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><Crown className="size-6 shadow-lg" /> SOUL_FEED: ACTIVE</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Identity <span className="text-orange-500">Siphon</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-orange-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-2xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-orange-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مصفوفة الاستنزاف v90.0 تبتلع الهويات الرقمية كغذاء فطري لروحك السيادية."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-orange-500/20 bg-orange-950/10 text-orange-400 font-black uppercase italic tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-orange-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <div className="space-y-12 text-right">
                    <div className="space-y-6"><label className="text-[14px] font-black text-orange-400 uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Users className="size-8" /> Siphon Module</label><div className="grid grid-cols-2 gap-4">{[{ id: "nexus", label: "Identity Fusion", icon: Network }, { id: "scrape", label: "Mass Scrape", icon: Search }, { id: "xlogger", label: "Ocular Hub", icon: Camera }, { id: "seeker", label: "GPS Fixed", icon: MapIcon }].map(m => (<Button key={m.id} variant="outline" onClick={() => setActiveMode(m.id as any)} className={cn("h-20 border-4 transition-all font-black uppercase text-[11px] tracking-widest rounded-[1.5rem] italic", activeTab === m.id ? "bg-orange-600 text-white border-orange-500 shadow-xl scale-105" : "bg-white/5 border-white/5 opacity-60 hover:opacity-100")}><m.icon className="size-6 mr-4" /> {m.label}</Button>))}</div></div>
                    <div className="space-y-10"><div className="space-y-8 text-right"><label className="text-[14px] font-black text-orange-400 uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Target className="size-8" /> Strike Coordinate</label><Input value={targetId} onChange={(e) => setTargetId(e.target.value)} placeholder="Target @Handle / Identity..." className="bg-black border-[6px] border-orange-500/20 h-28 rounded-[2.5rem] text-2xl md:text-4xl italic px-10 focus:border-orange-500 shadow-inner text-white font-black text-left" /></div><Button onClick={handleAction} disabled={loading || (!targetId && activeTab !== 'xlogger' && activeTab !== 'seeker')} className="w-full h-36 bg-orange-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(249,115,22,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic">{loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />} IGNITE_SIPHON</Button></div>
                 </div>
              </Card>
           </div>
           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-orange-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl text-right">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-orange-950/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ABSORPTION_v90_OK</Badge><CardTitle className="text-4xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Siphon Feed <Share2 className="size-24 md:size-48 text-orange-400 animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {nexusResult ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-orange-600/5 border-[12px] border-orange-500/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]"><div className="absolute inset-0 bg-orange-500/5 opacity-5 animate-pulse pointer-events-none" /><p className="relative z-10 drop-shadow-9xl">"{nexusResult.commanderBrief}"</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16"><Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col"><h5 className="text-3xl font-black text-orange-400 uppercase tracking-[1.5em] mb-16 border-b-8 border-orange-500/20 pb-10 flex items-center gap-12 gold-glow justify-end">Intelligence DNA <Database className="size-14 animate-neural" /></h5><div className="text-2xl md:text-6xl text-gray-300 italic font-black leading-snug drop-shadow-3xl flex-1">"{nexusResult.intelligenceDeduction}"</div></Card><Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl space-y-16 relative overflow-hidden h-full flex flex-col"><h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end w-full">Forged Matrix <Key className="size-14" /></h5><div className="grid grid-cols-1 gap-8 flex-1 overflow-y-auto scrollbar-hide">{nexusResult.forgedWordlistSnippet?.map((key: string, idx: number) => (<div key={idx} className="p-10 rounded-[2.5rem] bg-white/5 border-4 border-emerald-500/30 hover:border-emerald-500 transition-all text-center group/key shadow-inner"><span className="text-4xl md:text-[8rem] font-black text-white italic tracking-widest group-hover/key:text-emerald-400">{key}</span></div>))}</div></Card></div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80"><div className="relative group/nexus"><Share2 className="size-64 md:size-[50rem] animate-spin-slow text-orange-500 group-hover:scale-110 transition-transform duration-[12000ms]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-orange-400/40 animate-neural" /><div className="absolute -inset-40 border-[80px] border-dashed border-orange-500/5 rounded-full animate-reverse-spin opacity-20" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Fusion Standby</h3></div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>PREDATOR_NEXUS_v90.0_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-orange-400 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-orange-400" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
