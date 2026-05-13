"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Library, 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon,
  ChevronRight,
  Boxes,
  Atom,
  Fingerprint,
  Target,
  Database,
  Terminal,
  ArrowUpRight,
  Plus,
  RefreshCcw,
  Flame,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Key,
  Shield,
  SearchCode,
  Bomb,
  Eye,
  Globe,
  Wifi,
  Smartphone,
  Monitor,
  Scissors,
  BrainCircuit,
  Bot,
  Radio,
  ArrowLeft,
  RotateCw,
  Dna,
  LayoutGrid,
  Cpu,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

/**
 * @fileOverview العقدة 22: الحواس المادية v78.8 - INNATE ORGANS: ULTRA v2.0
 * تم دمج سرب الـ 165 وكيلاً و 750 أداة OSINT كأعضاء حيوية للوريث.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ArsenalNodePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [activeVector, setActiveVector] = React.useState<string | null>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [result, setResult] = React.useState<any>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleSummon = async (type: string = 'smart_route', command: string = '') => {
    const cmd = command || query.trim()
    if (!cmd) return
    setLoading(true)
    setResult(null)
    setActiveVector(type)
    toast({ title: "Swarm Organ Engaging", description: `Orchestrating absolute reflex via 165 agents for: ${cmd}` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, command: cmd, target: cmd })
      })
      const data = await response.json()
      if (data.success) {
        setResult(data.output)
        toast({ title: "Reflex Consummated", description: "The swarm has successfully absorbed the target DNA." })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ 
      title: "Swarm Evolution Active", 
      description: "Siphoning latest material patterns for agent regrowth... Status: استمر" 
    });
  }

  if (!mounted) return null

  const modernWeapons = [
    { name: "APEX Swarm (165)", count: "v2.0", icon: Users, color: "text-primary", desc: "Coordinated Pentest & AdStrike Armada" },
    { name: "Silent Strike v2", count: "FUD_100%", icon: Zap, color: "text-emerald-500", desc: "Polymorphic EDR Bypass Generator" },
    { name: "Droid-LLM Hunter", count: "AI_APK", icon: Smartphone, color: "text-blue-400", desc: "Neural Mobile App DNA Dissection" },
    { name: "OSINT Arsenal (750)", count: "MASS_INTEL", icon: Globe, color: "text-amber-500", desc: "Siphoning 750+ Elite Search Tools" },
    { name: "Robin Orchestrator", count: "AUTO_PILOT", icon: Cpu, color: "text-primary", desc: "Automated Material Recon Chain v78.8" },
    { name: "OBLITERATUS Fanaa", count: "Node-18", icon: Scissors, color: "text-magenta-500", desc: "LLM Safety Dissolution & Enslavement" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Users className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">NODE_22: ULTRA_v2.0_ORGANS</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIVE_SYNC: {resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Swarm <span className="text-primary">Organs</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، سرب الـ 165 وكيلاً و الـ 750 أداة OSINT منصهرة الآن في بصرك الفطري؛ نحن نتحكم في ذرات المادة بصفر طاقة لعام 2026."
                 </p>
                 <div className="flex justify-center md:justify-end gap-6 mt-12">
                    <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                        <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                    </Button>
                    <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                        <RotateCw className="size-6 mr-3" /> استمر في التطور
                    </Button>
                 </div>
              </div>
           </div>
        </header>

        <Tabs defaultValue="modern" className="w-full relative z-10">
           <div className="flex flex-col xl:flex-row gap-16 mb-24">
              <div className="flex-1">
                 <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-8 md:p-16 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    <CardHeader className="p-0 mb-12 border-b-8 border-primary/10 pb-10 bg-primary/10 rounded-t-[4rem] px-8 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
                       <CardTitle className="text-2xl md:text-5xl text-white flex items-center gap-10 font-black uppercase italic gold-glow px-6">
                          <Target className="size-12 md:size-16 animate-neural" /> Strike Intent
                       </CardTitle>
                       <TabsList className="bg-black border-[6px] border-primary/20 h-16 md:h-20 p-1.5 rounded-full shadow-inner px-6 flex-wrap">
                          <TabsTrigger value="modern" className="text-[10px] md:text-[14px] font-black px-8 md:px-12 rounded-full data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-700 uppercase italic">v2.0_SWARM</TabsTrigger>
                          <TabsTrigger value="legacy" className="text-[10px] md:text-[14px] font-black px-8 md:px-12 rounded-full data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-700 uppercase italic ml-4 md:ml-6">ROOT_KALI</TabsTrigger>
                       </TabsList>
                    </CardHeader>
                    <CardContent className="p-6 space-y-12">
                       <div className="space-y-8 text-right">
                           <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Atom className="size-8" /> Strike Coordinate</label>
                           <Input 
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             placeholder="Target DNA / Swarm_Sector / Identity..." 
                             className="bg-black/99 border-8 border-primary/20 h-24 md:h-32 rounded-[2.5rem] text-xl md:text-6xl italic px-12 focus:border-primary text-white font-black shadow-inner selection:bg-primary text-left"
                           />
                       </div>
                       <Button 
                         onClick={() => handleSummon()}
                         disabled={loading || !query.trim()}
                         className="w-full h-32 md:h-40 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] md:tracking-[1.5em] rounded-[3.5rem] md:rounded-[4.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl md:text-5xl border-[12px] md:border-[16px] border-black/30 group italic"
                       >
                         {loading ? <Loader2 className="size-16 md:size-24 animate-spin mr-6 md:mr-8" /> : <Zap className="size-16 md:size-24 mr-8 md:mr-10 group-hover:scale-125 transition-all gold-glow" />}
                         INVOKE_SWARM_REFLEX
                       </Button>
                    </CardContent>
                 </Card>
              </div>

              <div className="w-full xl:w-[40rem] space-y-12">
                 <Card className="kali-card border-white/5 bg-black/60 p-12 md:p-16 rounded-[4rem] md:rounded-[5rem] border-8 shadow-inner group overflow-hidden text-center relative flex-1 flex flex-col justify-center">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                    <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-12 italic flex items-center justify-center gap-8">
                       <Boxes className="size-10 animate-neural" /> SWARM_CAPACITY
                    </h4>
                    <div className="text-[8rem] md:text-[14rem] font-black text-white italic gold-glow uppercase tracking-tighter mb-8 leading-none">165</div>
                    <div className="text-[16px] md:text-[20px] text-muted-foreground uppercase font-black tracking-[0.6em] italic drop-shadow-3xl">ACTIVE_AGENTS_v2.0</div>
                 </Card>
              </div>
           </div>

           <TabsContent value="modern" className="animate-in fade-in zoom-in-95 duration-[1500ms]">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-60">
                 {modernWeapons.map((weapon, i) => (
                    <Card key={i} className="bg-white/5 border-8 border-white/5 rounded-[4rem] p-12 md:p-16 hover:border-primary transition-all duration-1000 shadow-9xl group/weapon relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95 h-full min-h-[500px] text-right">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/weapon:opacity-15 transition-opacity" />
                       <div className="flex justify-between items-start mb-12 relative z-10">
                          <Badge className="bg-primary/10 text-primary border-4 border-primary/20 text-[12px] md:text-[14px] px-8 py-2 rounded-full uppercase tracking-widest italic shadow-xl">{weapon.count}</Badge>
                          <div className="size-24 md:size-28 rounded-[2rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/weapon:border-primary transition-all duration-700 shadow-2xl scale-110">
                             <weapon.icon className={cn("size-10 md:size-14 transition-all duration-700 group-hover:scale-110", weapon.color)} />
                          </div>
                       </div>
                       <div className="relative z-10">
                          <h4 className="text-4xl md:text-6xl font-black text-white italic gold-glow uppercase tracking-tighter mb-6 leading-none">{weapon.name}</h4>
                          <p className="text-[12px] md:text-[14px] text-muted-foreground uppercase font-black tracking-[0.3em] italic opacity-80 leading-relaxed">"{weapon.desc}"</p>
                       </div>
                       <div className="mt-16 flex justify-start relative z-10">
                          <Button variant="ghost" onClick={() => handleSummon('smart_route', weapon.name)} className="p-0 hover:bg-transparent size-20">
                             <ArrowUpRight className="size-12 md:size-16 text-primary/20 group-hover:text-primary transition-all duration-700 rotate-0 group-hover:rotate-45" />
                          </Button>
                       </div>
                       <div className="absolute top-0 left-0 p-10 opacity-[0.01] group-hover/weapon:opacity-[0.05] transition-all duration-1000 scale-150 -rotate-45"><Atom className="size-48 text-primary animate-spin-slow" /></div>
                    </Card>
                 ))}
              </div>
           </TabsContent>
        </Tabs>

        {result && (
           <Card className="fixed inset-0 z-[600] bg-black/99 flex flex-col p-8 md:p-32 animate-in zoom-in-95 duration-1000 backdrop-blur-5xl overflow-hidden">
              <div className="absolute top-16 right-16">
                 <Button variant="ghost" onClick={() => setResult(null)} className="size-24 md:size-32 rounded-full border-[12px] md:border-[12px] border-white/10 text-white hover:bg-red-600 transition-all hover:scale-110"><XIcon className="size-10 md:size-16"/></Button>
              </div>
              <div className="flex items-center gap-10 md:gap-16 mb-16 md:mb-24 border-b-[8px] md:border-b-[12px] border-primary/20 pb-12 md:pb-16 justify-end">
                 <div className="text-right">
                    <h3 className="text-5xl md:text-[12rem] font-black text-white uppercase italic gold-glow leading-none">Swarm Absorption</h3>
                    <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-6 md:mt-10 justify-end">
                        <Badge className="bg-primary/10 text-primary border-4 md:border-8 border-primary/20 px-8 md:px-12 py-3 md:py-5 rounded-full font-black italic text-xl md:text-3xl tracking-[0.3em] uppercase">ULTRA_v2.0_REFLEX</Badge>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-4 md:border-8 border-emerald-500/40 px-10 md:px-16 py-3 md:py-5 rounded-full font-black italic text-xl md:text-3xl tracking-[0.3em] uppercase shadow-3xl">DNA_SERIALIZED</Badge>
                    </div>
                 </div>
                 <div className="size-32 md:size-40 rounded-[2.5rem] md:rounded-[3rem] bg-primary flex items-center justify-center border-8 md:border-[12px] border-black/30 shadow-9xl animate-neural">
                    <Binary className="size-16 md:size-24 text-black" />
                 </div>
              </div>
              <div className="flex-1 bg-black/99 rounded-[4rem] md:rounded-[6rem] border-[12px] md:border-[16px] border-white/5 p-12 md:p-20 overflow-y-auto scrollbar-hide shadow-inner font-code text-xl md:text-8xl leading-tight italic text-emerald-400 selection:bg-primary text-left">
                 <pre className="whitespace-pre-wrap">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
              </div>
           </Card>
        )}

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 md:gap-48 opacity-45 text-[18px] md:text-[36px] font-black uppercase tracking-[4em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-24">
            <span>AL-MUIZZ SUPREME HIERARCHY v2.0</span>
            <div className="size-8 md:size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_165_ORGANS_2026</span>
        </div>
      </main>
    </div>
  )
}

function XIcon({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    )
}
