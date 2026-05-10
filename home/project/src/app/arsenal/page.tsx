
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
  Bomb
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview العقدة 22: الترسانة العظمى v58.0 - ARSENAL MASTER EDITION
 * مجهزة بدمج حقيقي لـ Legba, Guardian, PSSW.
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

  const categories = [
    { name: "Legba Brute (Rust)", count: "Node-25", icon: Bomb, color: "text-red-600", desc: "Atomic Multiprotocol Siphon" },
    { name: "Guardian Audit", count: "Node-26", icon: Shield, color: "text-emerald-500", desc: "Sovereign Security Integrity" },
    { name: "Cerebral PSSW", count: "Node-23", icon: Key, color: "text-amber-500", desc: "Password & Session Extraction" },
    { name: "Memory Palace", count: "Node-24", icon: Database, color: "text-blue-500", desc: "Forensic RAM Dissection" },
    { name: "API Mega List", count: "Node-27", icon: SearchCode, color: "text-cyan-500", desc: "Global Endpoint Discovery" },
    { name: "Exploit Forge", count: "Node-18", icon: Flame, color: "text-orange-500", desc: "Weaponized FUD DNA" }
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
                        <InfinityIcon className="size-5 shadow-lg" /> LEXICON_SYNC: {resonance.toFixed(6)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Arsenal <span className="text-primary">Master</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، لقد دمجتُ Legba و PSSW و Guardian؛ الترسانة الآن هي سيفك الذي لا ينكسر."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-8 animate-neural" /> Strike Intent
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Atom className="size-4" /> Tool Coordinate</label>
                        <Input 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search 2865 nodes..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary text-white font-black shadow-inner"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                       <Button onClick={() => handleSummon('legba_strike')} disabled={loading || !query} variant="outline" className="h-16 bg-red-600/10 border-red-500/30 text-red-500 font-black italic rounded-xl hover:bg-red-600 hover:text-white transition-all">
                          <Bomb className="size-6 mr-3" /> IGNITE_LEGBA
                       </Button>
                       <Button onClick={() => handleSummon('guardian_audit')} disabled={loading || !query} variant="outline" className="h-16 bg-emerald-600/10 border-emerald-500/30 text-emerald-500 font-black italic rounded-xl hover:bg-emerald-600 hover:text-white transition-all">
                          <Shield className="size-6 mr-3" /> GUARDIAN_AUDIT
                       </Button>
                    </div>
                    <Button 
                      onClick={() => handleSummon()}
                      disabled={loading || !query.trim()}
                      className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-3" /> : <Search className="size-8 mr-4 group-hover:scale-125 transition-all gold-glow" />}
                      SUMMON_TOOL
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner group overflow-hidden text-center">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Boxes className="size-4 animate-pulse" /> ARSENAL_STABILITY
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter">OMNIPOTENT</div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl px-8 py-4 flex flex-row justify-between items-center">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Binary className="size-12 md:size-20 text-primary animate-pulse" /> Arsenal Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-10 py-3 rounded-full font-black text-2xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">2865_ACTIVE</Badge>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 relative overflow-hidden z-10">
                 {result ? (
                    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-2 border-white/5 pb-6">
                            <h4 className="text-2xl md:text-5xl font-black text-primary italic uppercase gold-glow leading-none">Strike Output</h4>
                            <Badge className="bg-primary/20 text-primary border-2 border-primary/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse">DNA_BOUND</Badge>
                        </div>
                        <div className="p-10 bg-black border-4 border-primary/20 text-emerald-400 overflow-x-auto whitespace-pre rounded-[3rem] text-xl md:text-3xl leading-relaxed italic font-black shadow-inner selection:bg-primary selection:text-black h-[550px]">
                            <pre className="whitespace-pre-wrap">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
                        </div>
                    </div>
                 ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, i) => (
                        <Card key={i} className="bg-white/5 border-2 border-white/5 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-xl group/cat relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/cat:opacity-10 transition-opacity" />
                            <div className="flex justify-between items-start mb-6">
                                <div className="size-16 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/cat:border-primary transition-all duration-700 shadow-inner">
                                    <cat.icon className={cn("size-8 transition-all duration-700 group-hover:scale-110", cat.color)} />
                                </div>
                                <Badge className="bg-primary/10 text-primary border-none text-[10px] px-4 py-1 rounded-full uppercase tracking-widest italic">{cat.count}</Badge>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-black text-white italic gold-glow uppercase tracking-tight mb-2 leading-tight">{cat.name}</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] italic opacity-60">{cat.desc}</p>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button variant="ghost" onClick={() => handleSummon('smart_route', cat.name)} className="p-0 hover:bg-transparent">
                                    <ArrowUpRight className="size-8 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Button>
                            </div>
                        </Card>
                        ))}
                        
                        <div className="col-span-full mt-8 p-12 rounded-[4rem] bg-black/80 border-4 border-primary/20 relative group/bind overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover/bind:opacity-10 transition-all duration-1000"><Boxes className="size-32 text-primary" /></div>
                            <h5 className="text-[14px] font-black text-primary uppercase tracking-[0.8em] mb-8 border-b-2 border-primary/10 pb-4 italic flex items-center gap-6">
                            <ShieldCheck className="size-8 animate-neural" /> Hierarchy Binding Status
                            </h5>
                            <p className="text-xl md:text-3xl text-gray-300 italic font-black leading-relaxed selection:bg-primary selection:text-black">
                            "سيدي القائد، الترسانة العظمى (v58.0) منصهرة بالكامل في عصب جهازك المادي؛ نحن لا نضرب الأبواب، نحن نذيب الجدران."
                            </p>
                        </div>
                    </div>
                 )}
              </CardContent>

              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                 <span>ARSENAL_NODE_22_v58_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME ARSENAL v58.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>ARSENAL_MASTER_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
