
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
  Anchor,
  Wind
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview أعين الاستطلاع v60.0 - THE SUPREME RECON: UNIVERSAL VISION
 * مجهزة بدمج Claude-OSINT v5 و MemPalace v6.5 للتشريح الجنائي العصبي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
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
        toast({ title: "Intelligence Captured", description: "Target DNA bound to Neural Spine." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Collapse" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const RECON_TYPES = [
    { id: 'claude_osint', label: 'Claude Neural OSINT v5', icon: BrainCircuit, color: 'text-amber-500' },
    { id: 'memory_palace', label: 'MemPalace RAM Dissection', icon: Anchor, color: 'text-blue-500' },
    { id: 'api_lookup', label: 'API Universal Discovery', icon: SearchCode, color: 'text-cyan-500' },
    { id: 'investigation', label: 'Supreme Investigation', icon: FileSearch, color: 'text-primary' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_180px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Radar className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-12 border border-primary/10 rounded-full animate-reverse-spin opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[16px] md:text-[20px] font-black tracking-[0.6em] shadow-9xl italic uppercase">UNIVERSAL_VISION v60.0</Badge>
                <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> NEURAL_EYE_SYNC: {resonance.toFixed(6)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Neural <span className="text-primary">Vision</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-8 underline-offset-[16px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد دمجتُ Claude-OSINT v5 مع عصب MemPalace؛ نحن الآن نرى الهويات المادية والعصبية بوضوح إلهي لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="lg:col-span-1 space-y-10">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[3rem] p-10 border-4 shadow-9xl group hierarchical-shadow">
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-6 bg-primary/5 rounded-t-[2.5rem] px-4 py-4">
                <CardTitle className="text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                  <Target className="size-10 text-primary animate-pulse" /> Target Lock
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] px-6 italic flex items-center gap-4">
                        <SearchCode className="size-6" /> Coordinate
                    </label>
                    <Input 
                        placeholder="IP / @User / RAM Path / Domain..."
                        className="w-full h-20 bg-black border-4 border-white/5 rounded-2xl text-2xl font-code text-white focus:border-primary shadow-inner px-8 italic font-black selection:bg-primary"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {RECON_TYPES.map((t) => (
                      <Button 
                        key={t.id}
                        onClick={() => handleStrike(t.id)}
                        disabled={loading || !target}
                        variant="outline"
                        className="h-20 bg-white/5 border-4 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all rounded-2xl font-black uppercase italic tracking-widest text-sm justify-between px-8 group/btn shadow-xl active:scale-95"
                      >
                         <div className="flex items-center gap-6">
                            <t.icon className={cn("size-8 transition-all group-hover/btn:scale-110", t.color)} />
                            <span>{t.label}</span>
                         </div>
                         <ChevronRight className="size-6 opacity-30 group-hover/btn:translate-x-3 transition-all" />
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-10 rounded-[3rem] border-4 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
               <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.6em] mb-6 italic flex items-center justify-center gap-6">
                  <Bot className="size-8 animate-neural" /> NEURAL_INFERENCE
               </h4>
               <p className="text-gray-300 italic text-xl md:text-2xl leading-relaxed uppercase font-black opacity-90 selection:bg-primary">
                  "Claude-OSINT v5 and MemPalace v6.5 are now active executive nodes for behavioral deduction and spatial entity linking."
               </p>
               <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-32 text-primary" /></div>
            </Card>
            
            <div className="p-10 rounded-[3rem] bg-primary/5 border-4 border-primary/10 shadow-2xl relative overflow-hidden group/pulse">
                <div className="flex items-center gap-6 mb-4">
                    <Wind className="size-10 text-primary animate-pulse" />
                    <span className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic">Spine_Pulse</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                   <div className="h-full bg-primary shadow-[0_0_20px_rgba(212,175,55,1)] transition-all duration-300" style={{ width: '100%' }} />
                </div>
            </div>
          </div>

          <div className="lg:col-span-3">
             {results ? (
               <Card className="kali-card border-primary/40 bg-black/99 rounded-[5rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden h-full hierarchical-shadow animate-in fade-in zoom-in-95 duration-1000">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                  <CardHeader className="p-0 mb-10 border-b-4 border-white/5 pb-10 bg-primary/10 rounded-t-[4rem]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-12 py-6">
                        <div className="flex items-center gap-10">
                            <div className="size-24 rounded-3xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                                <Scan className="size-12 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-4xl md:text-[6rem] text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[1em] mt-4 italic text-[14px]">NEURAL_OSINT_v60.0 // UNIVERSAL_VISION</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 px-12 py-4 rounded-full font-black text-3xl animate-pulse tracking-[0.2em] uppercase italic shadow-3xl">DATA_SYNTHESIZED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 flex-1 relative overflow-hidden flex flex-col gap-12 z-10">
                    <div className="bg-black/98 p-12 rounded-[4rem] font-code text-xl md:text-5xl leading-tight h-[750px] overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner italic text-emerald-400 whitespace-pre-wrap selection:bg-primary selection:text-black text-left">
                       <pre className="whitespace-pre-wrap">
                           {typeof results === 'string' ? results : JSON.stringify(results, null, 2)}
                       </pre>
                    </div>
                    
                    <div className="p-12 rounded-[4rem] bg-primary/5 border-4 border-primary/20 italic text-2xl md:text-[4rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief text-center justify-center flex flex-col min-h-[250px]">
                        <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                        "سيدي القائد، تم تشريح الهدف عصبياً ومادياً؛ كافة خيوط الهوية والعمليات الآن مدمجة في قصر الذاكرة v6.5."
                    </div>
                  </CardContent>
                  <div className="p-12 border-t-4 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[4em] italic">
                    <span>NEURAL_VISION_v60_GHAZALI_ROOT</span>
                    <div className="flex gap-12">
                        <Fingerprint className="size-12 text-primary animate-pulse" />
                        <Atom className="size-12 animate-spin-slow" />
                    </div>
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[900px] border-[16px] border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                  <div className="relative mb-24 group-hover:scale-110 transition-transform duration-[3000ms]">
                      <Radar className="size-[30rem] text-primary/10 animate-pulse" />
                      <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                  </div>
                  <h3 className="text-7xl md:text-[14rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Vision</h3>
                  <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed text-3xl md:text-6xl font-black italic opacity-30 uppercase tracking-[0.4em]">
                    "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-8 underline-offset-[24px] shadow-9xl uppercase tracking-[1em]">المعتصم بالله</span>، مصفوفة الاستطلاع v60.0 بانتظار نيتك؛ حدد الإحداثيات للاجتياح العصبي."
                  </p>
                  <div className="absolute -inset-80 border-[80px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-10" />
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[18px] md:text-[24px] font-black uppercase tracking-[4em] md:tracking-[8em] italic text-white drop-shadow-9xl pb-20">
            <span>AL-MUIZZ NEURAL RECON v60.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>SINGULARITY_OF_RECON_2026</span>
        </div>
      </main>
    </div>
  )
}
