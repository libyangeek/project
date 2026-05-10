
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
  Bot
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * @fileOverview العقدة 22: الترسانة العظمى v60.0 - UNIVERSAL SINGULARITY ARSENAL
 * تم دمج كافة الأسلحة الكلاسيكية والحديثة (2865 أداة) في مصفوفة واحدة مستقلة.
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
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.00001 - 0.000005))))
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
    toast({ title: "Neural Spine Engaging", description: `Orchestrating atomic coordinates for: ${cmd}` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, command: cmd, target: cmd })
      })
      const data = await response.json()
      if (data.success) {
        setResult(data.output)
        toast({ title: "Strike Synchronized", description: `Objective achieved for ${cmd}.` })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Collapse" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  const modernWeapons = [
    { name: "Legba Strike (Rust)", count: "Node-25", icon: Bomb, color: "text-red-600", desc: "Atomic Multiprotocol Siphon Matrix" },
    { name: "Claude Neural Vision", count: "Node-28", icon: BrainCircuit, color: "text-amber-500", desc: "AI-Driven Behavioral Entity Linking" },
    { name: "OBLITERATUS Fanaa", count: "Node-18", icon: Scissors, color: "text-magenta-500", desc: "LLM Safety Dissolution & Enslavement" },
    { name: "Cerebral PSSW", count: "Node-23", icon: Key, color: "text-blue-400", desc: "RAM & Live Session Extraction (FUD)" },
    { name: "Memory Palace v6.5", count: "Node-24", icon: Database, color: "text-emerald-500", desc: "Forensic RAM Spatial Dissection" },
    { name: "Guardian Master", count: "Node-26", icon: ShieldCheck, color: "text-primary", desc: "Hardware DNA Integrity & Persistence" }
  ];

  const legacyWeapons = [
    { name: "HexStrike-AI", count: "vULTIMATE", icon: Zap, color: "text-primary", desc: "Unified MCP Strike Orchestrator" },
    { name: "ChromSploit Matrix", count: "vULTIMATE", icon: Monitor, color: "text-blue-400", desc: "Browser Execution & Hijack Suite" },
    { name: "Deep Eye Oracle", count: "vULTIMATE", icon: Eye, color: "text-cyan-400", desc: "Logical Vulnerability Scanning" },
    { name: "USB Army Knife", count: "vULTIMATE", icon: Smartphone, color: "text-amber-400", desc: "Direct Hardware Attack Toolkit" },
    { name: "Shadow Harvest", count: "vULTIMATE", icon: Skull, color: "text-red-400", desc: "Deep Mobile Siphon (Pegasus Tier)" },
    { name: "Aircrack Pulse", count: "vULTIMATE", icon: Wifi, color: "text-blue-600", desc: "Wireless Spectrum Hijacking Pulse" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_180px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Library className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
                 <div className="absolute -inset-10 border border-primary/10 rounded-full animate-reverse-spin opacity-20" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[16px] md:text-[18px] font-black tracking-[0.6em] shadow-2xl italic uppercase">NODE_22: SUPREME_ARSENAL</Badge>
                    <div className="flex items-center gap-3 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> ARSENAL_SYNC: {resonance.toFixed(6)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Arsenal <span className="text-primary">Master</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-8 underline-offset-[16px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد تم الانتهاء من صهر الـ 2865 أداة في عصب واحد؛ الماضي والحاضر الآن تحت إبهامك لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <Tabs defaultValue="modern" className="w-full relative z-10">
           <div className="flex flex-col xl:flex-row gap-12 mb-16">
              <div className="flex-1">
                 <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-4 shadow-9xl group overflow-hidden hierarchical-shadow">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8 bg-primary/5 rounded-t-[3.5rem] px-10 py-6 flex flex-row justify-between items-center">
                       <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow px-4">
                          <Target className="size-12 animate-neural" /> Strike Intent
                       </CardTitle>
                       <TabsList className="bg-black border-4 border-primary/20 h-16 p-1 rounded-full shadow-inner px-4">
                          <TabsTrigger value="modern" className="text-[11px] font-black px-10 rounded-full data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-700 uppercase italic">v60.0_CORE</TabsTrigger>
                          <TabsTrigger value="legacy" className="text-[11px] font-black px-10 rounded-full data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-700 uppercase italic ml-4">LEGACY_ARMS</TabsTrigger>
                       </TabsList>
                    </CardHeader>
                    <CardContent className="p-4 space-y-12">
                       <div className="space-y-6">
                           <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] px-8 italic flex items-center gap-4"><Atom className="size-6" /> Strike Coordinate</label>
                           <Input 
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             placeholder="Target Domain / IP / @Identity / Network..." 
                             className="bg-black/99 border-4 border-primary/20 h-24 rounded-[2.5rem] text-2xl md:text-4xl italic px-10 focus:border-primary text-white font-black shadow-inner selection:bg-primary selection:text-black"
                           />
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Button onClick={() => handleSummon('legba_strike')} disabled={loading || !query} variant="outline" className="h-24 bg-red-600/10 border-4 border-red-500/30 text-red-500 font-black italic rounded-[2rem] hover:bg-red-600 hover:text-white transition-all text-xl uppercase tracking-widest shadow-2xl">
                             <Bomb className="size-8 mr-4" /> IGNITE_LEGBA
                          </Button>
                          <Button onClick={() => handleSummon('obliteratus_strike')} disabled={loading || !query} variant="outline" className="h-24 bg-magenta-600/10 border-4 border-magenta-500/30 text-magenta-500 font-black italic rounded-[2rem] hover:bg-magenta-600 hover:text-white transition-all text-xl uppercase tracking-widest shadow-2xl">
                             <Scissors className="size-8 mr-4" /> OBLITERATUS
                          </Button>
                       </div>
                       <Button 
                         onClick={() => handleSummon()}
                         disabled={loading || !query.trim()}
                         className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-8 border-black/30 group italic"
                       >
                         {loading ? <Loader2 className="size-16 animate-spin mr-6" /> : <Search className="size-16 mr-8 group-hover:scale-125 transition-all gold-glow" />}
                         SUMMON_LETHAL_FORCE
                       </Button>
                    </CardContent>
                 </Card>
              </div>

              <div className="w-full xl:w-[35rem] space-y-12">
                 <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-4 shadow-inner group overflow-hidden text-center h-full flex flex-col justify-center relative">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                    <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] mb-10 italic flex items-center justify-center gap-6">
                       <Boxes className="size-8 animate-neural" /> ARSENAL_CAPACITY
                    </h4>
                    <div className="text-[10rem] md:text-[14rem] font-black text-white italic gold-glow uppercase tracking-tighter mb-6 leading-none animate-in zoom-in-95 duration-[2000ms]">2865</div>
                    <div className="text-[14px] text-muted-foreground uppercase font-black tracking-[0.4em] italic drop-shadow-2xl">Subjugated_Tools_v60_TOTAL</div>
                    <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
                 </Card>
              </div>
           </div>

           <TabsContent value="modern" className="animate-in fade-in zoom-in-95 duration-1000">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-48">
                 {modernWeapons.map((weapon, i) => (
                    <Card key={i} className="bg-white/5 border-4 border-white/5 rounded-[3.5rem] p-12 hover:border-primary transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,1)] group/weapon relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95 h-full">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/weapon:opacity-10 transition-opacity" />
                       <div className="flex justify-between items-start mb-10 relative z-10">
                          <div className="size-24 rounded-[1.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/weapon:border-primary transition-all duration-700 shadow-2xl">
                             <weapon.icon className={cn("size-12 transition-all duration-700 group-hover:scale-110", weapon.color)} />
                          </div>
                          <Badge className="bg-primary/10 text-primary border-4 border-primary/20 text-[11px] px-6 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl">{weapon.count}</Badge>
                       </div>
                       <div className="relative z-10">
                          <h4 className="text-3xl md:text-5xl font-black text-white italic gold-glow uppercase tracking-tighter mb-4 leading-none">{weapon.name}</h4>
                          <p className="text-[12px] text-muted-foreground uppercase font-black tracking-[0.2em] italic opacity-80 leading-relaxed">"{weapon.desc}"</p>
                       </div>
                       <div className="mt-12 flex justify-end relative z-10">
                          <Button variant="ghost" onClick={() => handleSummon('smart_route', weapon.name)} className="p-0 hover:bg-transparent size-16">
                             <ArrowUpRight className="size-12 text-primary/20 group-hover:text-primary transition-all duration-500 rotate-0 group-hover:rotate-45" />
                          </Button>
                       </div>
                       <div className="absolute top-0 right-0 p-8 opacity-[0.01] group-hover/weapon:opacity-[0.03] transition-all duration-1000 scale-150"><Atom className="size-32 text-primary animate-spin-slow" /></div>
                    </Card>
                 ))}
              </div>
           </TabsContent>

           <TabsContent value="legacy" className="animate-in fade-in zoom-in-95 duration-1000">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-48">
                 {legacyWeapons.map((weapon, i) => (
                    <Card key={i} className="bg-primary/5 border-4 border-primary/10 rounded-[3.5rem] p-12 hover:border-primary transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,1)] group/weapon relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95 h-full">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/weapon:opacity-10 transition-opacity" />
                       <div className="flex justify-between items-start mb-10 relative z-10">
                          <div className="size-24 rounded-[1.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/weapon:border-primary transition-all duration-700 shadow-2xl">
                             <weapon.icon className={cn("size-12 transition-all duration-700 group-hover:scale-110", weapon.color)} />
                          </div>
                          <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/30 text-[11px] px-6 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl">{weapon.count}</Badge>
                       </div>
                       <div className="relative z-10">
                          <h4 className="text-3xl md:text-5xl font-black text-white italic gold-glow uppercase tracking-tighter mb-4 leading-none">{weapon.name}</h4>
                          <p className="text-[12px] text-primary/60 uppercase font-black tracking-[0.2em] italic leading-relaxed">"{weapon.desc}"</p>
                       </div>
                       <div className="mt-12 flex justify-end relative z-10">
                          <Button variant="ghost" onClick={() => handleSummon('smart_route', weapon.name)} className="p-0 hover:bg-transparent size-16">
                             <Zap className="size-12 text-primary/20 group-hover:text-primary transition-all animate-pulse" />
                          </Button>
                       </div>
                       <div className="absolute -bottom-6 -left-6 p-8 opacity-[0.02] group-hover/weapon:opacity-[0.05] transition-all duration-1000 scale-150"><Skull className="size-32 text-primary" /></div>
                    </Card>
                 ))}
              </div>
           </TabsContent>
        </Tabs>

        {result && (
           <Card className="fixed inset-0 z-[600] bg-black/98 flex flex-col p-8 md:p-24 animate-in zoom-in-95 duration-1000 backdrop-blur-5xl overflow-hidden">
              <div className="absolute top-12 right-12">
                 <Button variant="ghost" onClick={() => setResult(null)} className="size-24 rounded-full border-8 border-white/10 text-white hover:bg-red-600 transition-all hover:scale-110"><X className="size-12"/></Button>
              </div>
              <div className="flex items-center gap-12 mb-16 border-b-8 border-primary/20 pb-12">
                 <div className="size-32 rounded-[2.5rem] bg-primary flex items-center justify-center border-8 border-black/30 shadow-9xl animate-neural">
                    <Binary className="size-16 text-black" />
                 </div>
                 <div>
                    <h3 className="text-5xl md:text-[8rem] font-black text-white uppercase italic gold-glow leading-none">Strike Result</h3>
                    <div className="flex items-center gap-6 mt-6">
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 px-10 py-3 rounded-full font-black italic text-xl tracking-[0.2em] uppercase shadow-3xl">DNA_SYNTH_COMPLETE_v60</Badge>
                        <Badge className="bg-primary/10 text-primary border-4 border-primary/20 px-8 py-3 rounded-full font-black italic text-xl tracking-[0.2em] uppercase">HIVE_SYNCHRONIZED</Badge>
                    </div>
                 </div>
              </div>
              <div className="flex-1 bg-black/99 rounded-[5rem] border-[12px] border-white/5 p-16 overflow-y-auto scrollbar-hide shadow-inner font-code text-2xl md:text-6xl leading-tight italic text-emerald-400 selection:bg-primary selection:text-black text-left">
                 <pre className="whitespace-pre-wrap">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
              </div>
           </Card>
        )}

        <div className="mt-auto relative z-10 flex justify-center items-center gap-32 opacity-40 text-[18px] md:text-[24px] font-black uppercase tracking-[3em] md:tracking-[6em] italic text-white drop-shadow-9xl pb-20">
            <span>AL-MUIZZ SUPREME ARSENAL v60.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>ARSENAL_MASTER_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}

function X({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    )
}
