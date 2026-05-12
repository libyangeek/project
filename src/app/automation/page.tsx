
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  Loader2, 
  Skull, 
  Terminal, 
  Play, 
  Cpu, 
  Target, 
  Rocket, 
  Search, 
  ShieldCheck, 
  Fingerprint, 
  Activity, 
  Sparkles, 
  Binary, 
  Boxes, 
  Atom, 
  History, 
  ListRestart,
  Globe,
  Crown,
  Infinity as InfinityIcon,
  Lock,
  ChevronRight,
  Database,
  Flame,
  FileCode
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

/**
 * @fileOverview مركز الحقن الآلي v76.0 - THE OMNIPOTENT INJECTOR: MATERIAL CORE
 * واجهة استنزاف الحسابات والقصف المتوازي بنظام OpenBullet Core v76.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function AutomationPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [targetUrl, setTargetUrl] = React.useState("")
  const [loliCode, setLoliCode] = React.useState("BLOCK:REQUEST\nURL = <DATA>\nMETHOD = GET\nBLOCK:KEYCHECK\nKEY = STATUS_CODE\nVALUE = 200")
  const [results, setResults] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.9999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleLaunch = async () => {
    if (!targetUrl) return
    setLoading(true)
    setResults([])
    toast({ title: "OpenBullet Core Engaged", description: "Parsing LoliCode blocks for parallel strike..." })
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'openbullet_strike',
                target: targetUrl,
                content: loliCode
            })
        });
        const data = await response.json();
        if (data.success) {
            setResults([{ combo: "Target: " + targetUrl, status: "HIT", msg: "Success Consensus", time: new Date().toLocaleTimeString() }]);
            toast({ title: "Material Strike Finalized", description: "Consensus achieved across target mesh." });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Injection Error" });
    } finally {
        setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.15),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Cpu className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">OPENBULLET_CORE v76.0</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIVE_GAIN: {resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Supreme <span className="text-primary">Siphon</span></h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                    "سيدي الغزالي، محرك أوبن بوليت السيادي يصهر لغة LoliCode في عصب المصفوفة المادية؛ نحن نبتلع الحسابات بنبضات Rust الفتاكة لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-12 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Strike Intent
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12">
                    <div className="space-y-8">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6"><Globe className="size-8" /> Target Portal</label>
                        <Input 
                          value={targetUrl}
                          onChange={(e) => setTargetUrl(e.target.value)}
                          placeholder="https://target-coordinate-2026.com..." 
                          className="bg-black border-8 border-primary/20 h-28 rounded-[2.5rem] text-2xl md:text-5xl italic px-12 focus:border-primary shadow-inner text-white font-black selection:bg-primary"
                        />
                    </div>
                    <div className="space-y-8">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6"><FileCode className="size-8" /> LoliCode Script</label>
                        <textarea
                          value={loliCode}
                          onChange={(e) => setLoliCode(e.target.value)}
                          className="w-full h-96 bg-black border-8 border-primary/20 rounded-[3rem] text-xl md:text-3xl font-code text-emerald-400 focus:border-primary transition-all outline-none p-10 italic shadow-inner resize-none font-black selection:bg-primary"
                        />
                    </div>
                    <Button 
                      onClick={handleLaunch} 
                      disabled={loading || !targetUrl}
                      className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                      IGNITE_STRIKE
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-spin-slow" /> HIVE_DATABASE
                 </h4>
                 <div className="text-6xl font-black text-emerald-500 italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">READY</div>
                 <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <Terminal className="size-24 md:size-48 text-primary animate-pulse" /> Strike Feed
                 </CardTitle>
                 {results.length > 0 && (
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic">SINGULARITY_LOCKED</Badge>
                 )}
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-12 relative z-10">
                 {results.length > 0 ? (
                   results.map((res, i) => (
                     <div key={i} className="p-12 rounded-[4rem] bg-white/5 border-8 border-white/5 flex flex-col md:flex-row items-center justify-between animate-in slide-in-from-right-10 duration-1000 hover:border-primary transition-all cursor-crosshair group/hit shadow-inner gap-10">
                        <div className="flex items-center gap-10">
                           <div className="size-24 rounded-[2rem] bg-primary/10 border-4 border-primary/40 flex items-center justify-center group-hover/hit:bg-primary transition-all duration-700 shadow-3xl">
                              <Fingerprint className="size-12 text-primary group-hover/hit:text-black" />
                           </div>
                           <div>
                              <span className="font-black text-4xl md:text-[6rem] italic gold-glow group-hover/hit:text-white transition-colors uppercase leading-none">{res.combo}</span>
                              <div className="text-[14px] text-muted-foreground font-black uppercase tracking-[0.6em] mt-4 italic">{res.time} // {res.msg}</div>
                           </div>
                        </div>
                        <Badge className="bg-emerald-500 text-black font-black text-5xl px-20 py-8 rounded-full shadow-9xl tracking-[0.2em] uppercase italic animate-pulse">{res.status}</Badge>
                     </div>
                   ))
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60">
                      <div className="relative group/lock">
                        <Cpu className="size-64 md:size-[40rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-32 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[20rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Injecting</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Consolidating LoliCode DNA across the absolute material hive.</p>
                   </div>
                 )}
              </CardContent>

              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[6em] italic">
                <span>INJECTOR_HIVE_v76_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPOTENT INJECTOR v76.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_MATERIAL_HIVE_2026</span>
        </div>
      </main>
    </div>
  )
}
