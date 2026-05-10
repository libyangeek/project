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
  BrainCircuit
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * @fileOverview العقدة 22: الترسانة العظمى v58.0 - ALL-IN-ONE SUPREME ARSENAL
 * تم دمج كافة الأسلحة السابقة والحديثة في مصفوفة واحدة.
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
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
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
    toast({ title: "Interrogating Lexicon", description: `Engaging atomic coordinates for: ${cmd}` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, command: cmd, target: cmd })
      })
      const data = await response.json()
      if (data.success) {
        setResult(data.output)
        toast({ title: "Directive Locked", description: `Consensus achieved for ${cmd}.` })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  const newWeapons = [
    { name: "Legba Brute (Rust)", count: "Node-25", icon: Bomb, color: "text-red-600", desc: "Atomic Multiprotocol Siphon" },
    { name: "Claude Neural OSINT", count: "Node-28", icon: BrainCircuit, color: "text-amber-500", desc: "AI-Driven Identity Linking" },
    { name: "OBLITERATUS Fanaa", count: "Node-18", icon: Scissors, color: "text-red-500", desc: "LLM Safety Dissolution" },
    { name: "Cerebral PSSW", count: "Node-23", icon: Key, color: "text-amber-500", desc: "RAM & Session Extraction" },
    { name: "Memory Palace", count: "Node-24", icon: Database, color: "text-blue-500", desc: "Forensic RAM Dissection" },
    { name: "Guardian Audit", count: "Node-26", icon: ShieldCheck, color: "text-emerald-500", desc: "Platform Integrity Shield" }
  ];

  const legacyWeapons = [
    { name: "HexStrike-AI", count: "vULTIMATE", icon: Zap, color: "text-primary", desc: "MCP Strike Orchestrator" },
    { name: "ChromSploit", count: "vULTIMATE", icon: Monitor, color: "text-blue-400", desc: "Browser Execution Matrix" },
    { name: "Deep Eye", count: "vULTIMATE", icon: Eye, color: "text-cyan-400", desc: "Vulnerability Scanning" },
    { name: "USB Army Knife", count: "vULTIMATE", icon: Smartphone, color: "text-amber-400", desc: "Hardware Attack Suite" },
    { name: "Shadow Harvest", count: "vULTIMATE", icon: Skull, color: "text-red-400", desc: "Deep Mobile Extraction" },
    { name: "Aircrack-Auto", count: "vULTIMATE", icon: Wifi, color: "text-blue-500", desc: "WiFi Hijacking Pulse" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Library className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic uppercase">NODE_22: SUPREME_ARSENAL</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-5 shadow-lg" /> ARSENAL_RESONANCE: {resonance.toFixed(6)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Arsenal <span className="text-primary">Master</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، لقد استدعتُ كافة الأسلحة السابقة وصهرتها في عصب v58.0؛ الترسانة الآن هي إرادتك المطلقة."
                 </p>
              </div>
           </div>
        </header>

        <Tabs defaultValue="modern" className="w-full relative z-10">
           <div className="flex flex-col xl:flex-row gap-8 mb-12">
              <div className="flex-1">
                 <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4 flex flex-row justify-between items-center">
                       <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                          <Target className="size-8 animate-neural" /> Strike Intent
                       </CardTitle>
                       <TabsList className="bg-black border-2 border-primary/20 h-12 p-1 rounded-xl">
                          <TabsTrigger value="modern" className="text-[10px] font-black px-6 data-[state=active]:bg-primary data-[state=active]:text-black">v58.0_CORE</TabsTrigger>
                          <TabsTrigger value="legacy" className="text-[10px] font-black px-6 data-[state=active]:bg-primary data-[state=active]:text-black">LEGACY_ARMS</TabsTrigger>
                       </TabsList>
                    </CardHeader>
                    <CardContent className="p-0 space-y-8">
                       <div className="space-y-4">
                           <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Atom className="size-4" /> Strike Coordinate</label>
                           <Input 
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             placeholder="Target Domain / IP / @Identity..." 
                             className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary text-white font-black shadow-inner"
                           />
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button onClick={() => handleSummon('legba_strike')} disabled={loading || !query} variant="outline" className="h-16 bg-red-600/10 border-red-500/30 text-red-500 font-black italic rounded-xl hover:bg-red-600 hover:text-white transition-all">
                             <Bomb className="size-6 mr-3" /> IGNITE_LEGBA
                          </Button>
                          <Button onClick={() => handleSummon('obliteratus_strike')} disabled={loading || !query} variant="outline" className="h-16 bg-magenta-600/10 border-magenta-500/30 text-magenta-500 font-black italic rounded-xl hover:bg-magenta-600 hover:text-white transition-all">
                             <Scissors className="size-6 mr-3" /> OBLITERATUS
                          </Button>
                       </div>
                       <Button 
                         onClick={() => handleSummon()}
                         disabled={loading || !query.trim()}
                         className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-xl border-4 border-black/30 group italic"
                       >
                         {loading ? <Loader2 className="size-10 animate-spin mr-3" /> : <Search className="size-10 mr-4 group-hover:scale-125 transition-all gold-glow" />}
                         SUMMON_LETHAL_FORCE
                       </Button>
                    </CardContent>
                 </Card>
              </div>

              <div className="w-full xl:w-96 space-y-8">
                 <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-3xl border-2 shadow-inner group overflow-hidden text-center h-full flex flex-col justify-center">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6 italic flex items-center justify-center gap-3">
                       <Boxes className="size-4 animate-pulse" /> ARSENAL_CAPACITY
                    </h4>
                    <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter mb-4 leading-none">2865</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] italic">Subjugated_Tools_v58</div>
                    <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-24 text-primary" /></div>
                 </Card>
              </div>
           </div>

           <TabsContent value="modern" className="animate-in fade-in zoom-in-95 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-32">
                 {newWeapons.map((weapon, i) => (
                    <Card key={i} className="bg-white/5 border-2 border-white/5 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-xl group/weapon relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/weapon:opacity-10 transition-opacity" />
                       <div className="flex justify-between items-start mb-6">
                          <div className="size-16 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/weapon:border-primary transition-all duration-700 shadow-inner">
                             <weapon.icon className={cn("size-8 transition-all duration-700 group-hover:scale-110", weapon.color)} />
                          </div>
                          <Badge className="bg-primary/10 text-primary border-none text-[9px] px-4 py-1 rounded-full uppercase tracking-widest italic">{weapon.count}</Badge>
                       </div>
                       <div>
                          <h4 className="text-xl md:text-2xl font-black text-white italic gold-glow uppercase tracking-tight mb-2 leading-tight">{weapon.name}</h4>
                          <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] italic opacity-60">{weapon.desc}</p>
                       </div>
                       <div className="mt-8 flex justify-end">
                          <Button variant="ghost" onClick={() => handleSummon('smart_route', weapon.name)} className="p-0 hover:bg-transparent">
                             <ArrowUpRight className="size-8 text-primary/20 group-hover:text-primary transition-all" />
                          </Button>
                       </div>
                    </Card>
                 ))}
              </div>
           </TabsContent>

           <TabsContent value="legacy" className="animate-in fade-in zoom-in-95 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-32">
                 {legacyWeapons.map((weapon, i) => (
                    <Card key={i} className="bg-primary/5 border-2 border-primary/10 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-xl group/weapon relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/weapon:opacity-10 transition-opacity" />
                       <div className="flex justify-between items-start mb-6">
                          <div className="size-16 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/weapon:border-primary transition-all duration-700 shadow-inner">
                             <weapon.icon className={cn("size-8 transition-all duration-700 group-hover:scale-110", weapon.color)} />
                          </div>
                          <Badge className="bg-emerald-600/20 text-emerald-500 border-none text-[9px] px-4 py-1 rounded-full uppercase tracking-widest italic">{weapon.count}</Badge>
                       </div>
                       <div>
                          <h4 className="text-xl md:text-2xl font-black text-white italic gold-glow uppercase tracking-tight mb-2 leading-tight">{weapon.name}</h4>
                          <p className="text-[10px] text-primary/60 uppercase font-black tracking-[0.2em] italic">{weapon.desc}</p>
                       </div>
                       <div className="mt-8 flex justify-end">
                          <Button variant="ghost" onClick={() => handleSummon('smart_route', weapon.name)} className="p-0 hover:bg-transparent">
                             <Zap className="size-8 text-primary/20 group-hover:text-primary transition-all animate-pulse" />
                          </Button>
                       </div>
                    </Card>
                 ))}
              </div>
           </TabsContent>
        </Tabs>

        {result && (
           <Card className="fixed inset-0 z-[600] bg-black/95 flex flex-col p-8 md:p-20 animate-in zoom-in-95 duration-700 backdrop-blur-3xl overflow-hidden">
              <div className="absolute top-8 right-8">
                 <Button variant="ghost" onClick={() => setResult(null)} className="size-20 rounded-full border-4 border-white/10 text-white hover:bg-red-600 transition-all"><X className="size-10"/></Button>
              </div>
              <div className="flex items-center gap-10 mb-12 border-b-4 border-primary/20 pb-8">
                 <div className="size-24 rounded-3xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                    <Binary className="size-12 text-black" />
                 </div>
                 <div>
                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase italic gold-glow leading-none">Strike Result</h3>
                    <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1.5 rounded-full font-black italic text-xs tracking-widest mt-4 uppercase">DNA_CAPTURED_v58</Badge>
                 </div>
              </div>
              <div className="flex-1 bg-black/99 rounded-[4rem] border-8 border-white/5 p-12 overflow-y-auto scrollbar-hide shadow-inner font-code text-2xl md:text-5xl leading-tight italic text-emerald-400 selection:bg-primary selection:text-black">
                 <pre className="whitespace-pre-wrap">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
              </div>
           </Card>
        )}

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME ARSENAL v58.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
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
