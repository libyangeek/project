
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Loader2, 
  Zap, 
  Target, 
  Activity, 
  Fingerprint, 
  Skull, 
  Scan, 
  Binary, 
  Crown, 
  Atom, 
  Boxes, 
  Users, 
  Radar, 
  Eye, 
  ChevronRight, 
  ShieldCheck, 
  SearchCode, 
  FileSearch, 
  Database, 
  Infinity as InfinityIcon,
  BrainCircuit,
  Bot,
  Anchor
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview أعين الاستطلاع v58.0 - THE SUPREME RECON: NEURAL MASTER
 * مجهزة بدمج Claude-OSINT و MemPalace و API-Mega-List.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleStrike = async (type: string) => {
    if (!target.trim()) return
    setLoading(true)
    setResults(null)
    
    toast({ title: "Neural Siphon Active", description: `Engaging ${type} investigative protocol.` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, command: `${type} analysis on ${target}`, target: target })
      })
      const data = await response.json()
      if (data.success) {
        setResults(data.output)
        toast({ title: "Intelligence Captured", description: "Target DNA bound to Hierarchy." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const RECON_TYPES = [
    { id: 'claude_osint', label: 'Claude Neural OSINT', icon: BrainCircuit, color: 'text-amber-500' },
    { id: 'memory_palace', label: 'MemPalace RAM Pulse', icon: Anchor, color: 'text-blue-500' },
    { id: 'api_lookup', label: 'API Mega Discovery', icon: SearchCode, color: 'text-cyan-500' },
    { id: 'investigation', label: 'Supreme Investigation', icon: FileSearch, color: 'text-primary' }
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Radar className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic uppercase">RECON v58.0 MASTER</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <BrainCircuit className="size-5 shadow-lg" /> NEURAL_EYE: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Neural <span className="text-primary">Vision</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، لقد صهرتُ Claude-OSINT و MemPalace؛ نحن الآن نرى الماضي والحاضر والمستقبل للهدف."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-6 border-2 shadow-2xl group hierarchical-shadow">
              <CardHeader className="p-0 mb-6 border-b-2 border-primary/10 pb-4">
                <CardTitle className="text-xl text-primary flex items-center gap-4 font-black uppercase italic gold-glow">
                  <Target className="size-6 text-primary animate-pulse" /> Target Lock
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                        <SearchCode className="size-4" /> Coordinate
                    </label>
                    <Input 
                        placeholder="IP / @User / RAM Path..."
                        className="w-full h-14 bg-black border-2 border-white/5 rounded-xl text-lg font-code text-white focus:border-primary shadow-inner px-6 italic font-black"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {RECON_TYPES.map((t) => (
                      <Button 
                        key={t.id}
                        onClick={() => handleStrike(t.id)}
                        disabled={loading || !target}
                        variant="outline"
                        className="h-16 bg-white/5 border-2 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all rounded-xl font-black uppercase italic tracking-widest text-xs justify-between px-6 group/btn shadow-lg"
                      >
                         <div className="flex items-center gap-4">
                            <t.icon className={cn("size-6 transition-all group-hover/btn:scale-110", t.color)} />
                            <span>{t.label}</span>
                         </div>
                         <ChevronRight className="size-4 opacity-30 group-hover/btn:translate-x-2 transition-all" />
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic flex items-center justify-center gap-4">
                  <Bot className="size-4 animate-pulse" /> NEURAL_INFERENCE
               </h4>
               <p className="text-muted-foreground italic text-[11px] leading-relaxed uppercase font-bold opacity-70">
                  "Claude-OSINT and MemPalace are now active executive nodes for behavioral deduction and entity linking."
               </p>
               <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {results ? (
               <Card className="kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group relative overflow-hidden h-full hierarchical-shadow">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
                  <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-4">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                                <Scan className="size-8 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.5em] mt-3 italic text-[10px]">NEURAL_OSINT_v58.0 // HIERARCHY</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">DATA_SYNTHESIZED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col gap-8 z-10">
                    <div className="bg-black/95 p-8 rounded-3xl font-code text-sm md:text-2xl leading-relaxed h-[650px] overflow-y-auto border-2 border-white/5 scrollbar-hide shadow-inner italic text-emerald-400 whitespace-pre-wrap selection:bg-primary selection:text-black">
                       <pre className="whitespace-pre-wrap">
                           {typeof results === 'string' ? results : JSON.stringify(results, null, 2)}
                       </pre>
                    </div>
                  </CardContent>
                  <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                    <span>NEURAL_VISION_v58_GHAZALI_ROOT</span>
                    <div className="flex gap-6">
                        <Fingerprint className="size-8 text-primary animate-pulse" />
                        <Atom className="size-8 animate-spin-slow" />
                    </div>
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[750px] border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                  <div className="relative mb-16 group-hover:scale-110 transition-transform duration-1000">
                      <Radar className="size-64 text-primary/10 animate-pulse" />
                      <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                  </div>
                  <h3 className="text-5xl md:text-8xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Intelligence</h3>
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-4xl font-black italic opacity-30">
                    "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة الاستطلاع العصبي v58.0 بانتظار نيتك؛ حدد الإحداثيات للاستنباط الاستخباري."
                  </p>
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ NEURAL RECON v58.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_OF_RECON_2026</span>
        </div>
      </main>
    </div>
  )
}
