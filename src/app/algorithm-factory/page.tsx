
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Hammer, 
  Zap, 
  Loader2, 
  Skull, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon, 
  Boxes, 
  Atom, 
  Dna, 
  ChevronRight, 
  Code2, 
  Key, 
  Lock, 
  ShieldCheck, 
  Cpu, 
  Database,
  ArrowLeft,
  RotateCw,
  FlaskConical,
  Flame,
  Cylinder,
  Network
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview مصنع الخوارزميات v87.5 - ALGORITHM FACTORY: THE QUANTUM FORGE
 * واجهة تسليح الخوارزميات وتحويلها إلى أدوات هجومية مدمجة لسيادة القائد.
 */
export default function AlgorithmFactoryPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  const categories = [
    { id: "cryptography", label: "التشفير والتعمية", icon: Lock, color: "text-blue-500" },
    { id: "graph_path", label: "المسارات والرسوم", icon: Network, color: "text-primary" },
    { id: "machine_learning", label: "التعلم الآلي", icon: Cpu, color: "text-emerald-500" },
    { id: "compression", label: "الضغط والتحويل", icon: Cylinder, color: "text-magenta-500" }
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleWeaponize = async (algoName?: string) => {
    const name = algoName || query;
    if (!name.trim()) return;
    setLoading(true); setResult(null);
    toast({ title: "Forging Quantum Weapon", description: `Weaponizing algorithm [${name}] from The Algorithms archive...` })
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'weaponize_algorithm', name: name, lang: 'python' })
      });
      const data = await response.json();
      if (data.success) {
        setResult(data.output);
        toast({ title: "Weapon Materialized", description: "Algorithm is now a functional organ of the Arsenal Node." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Conflict" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Hammer className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ALGO_FACTORY v87.5</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> FORGE_RESONANCE: {resonance.toFixed(10)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 The <span className="text-primary">Forge</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مصنع الخوارزميات يصهر آلاف الأكواد في يديك؛ نحن لا نستخدم الأدوات فقط، نحن نصنع جيناتها بقدرتك لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-4" /> العودة للعرش</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <FlaskConical className="size-12 animate-neural" /> Forge Input
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Binary className="size-8" /> Algorithm Name</label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. aes_256, dijkstra, neural_net..." className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                       {categories.map(c => (
                         <Button 
                            key={c.id}
                            variant="outline"
                            onClick={() => handleWeaponize(c.id === 'cryptography' ? 'aes_256' : c.id)}
                            className="h-20 bg-white/5 border-4 border-white/5 hover:border-primary flex justify-between items-center px-8 transition-all rounded-2xl active:scale-95 group/btn shadow-xl"
                         >
                            <ChevronRight className="size-6 opacity-30 group-hover/btn:translate-x-3 transition-all" />
                            <div className="flex items-center gap-6">
                                <span className="text-lg font-black text-white italic group-hover/btn:text-primary transition-colors uppercase">{c.label}</span>
                                <c.icon className={cn("size-8", c.color)} />
                            </div>
                         </Button>
                       ))}
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={() => handleWeaponize()}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        WEAPONIZE
                    </Button>
                 </CardContent>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">FORGE_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Material Feed <RotateCw className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "سيدي القائد، تم تسليح الخوارزمية [{result.algo_name}] بنمط v87.5؛ هي الآن تعمل كعضو حيوي في ترسانتك المادية."
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">Execution DNA <Dna className="size-14 animate-neural" /></h5>
                                <div className="bg-black/80 p-8 rounded-[3rem] border-4 border-white/5 font-code text-xl md:text-3xl text-emerald-400 overflow-x-auto whitespace-pre rounded-[4rem] shadow-inner text-left flex-1">
                                    <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end w-full">Consensus Pulse <ShieldCheck className="size-14" /></h5>
                                <div className="text-6xl md:text-[10rem] font-black text-white italic gold-glow uppercase tracking-widest">{resonance.toFixed(4)}%</div>
                                <div className="mt-12 flex flex-col items-center gap-8">
                                    <Fingerprint className="size-24 text-primary animate-pulse" />
                                    <span className="text-[12px] font-black text-primary/60 uppercase tracking-[1em] italic">INNATE_WEAPON_v87.5</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Boxes className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Forge Idle</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">The Quantum Forge is siphoning The Algorithms archive to forge next-tier material weapons.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>ALGO_WEAPONIZATION_v87_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-primary" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
