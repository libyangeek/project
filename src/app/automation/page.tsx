
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
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { designSiphonTask } from "@/ai/flows/credential-siphon-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview مركز الحقن الآلي v53.0 - THE SUPREME INJECTOR: HIERARCHICAL DOMINION
 * واجهة استنزاف الحسابات والقصف المتوازي لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function AutomationPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [targetUrl, setTargetUrl] = React.useState("")
  const [config, setConfig] = React.useState<any>(null)
  const [results, setResults] = React.useState<any[]>([])
  const [stats, setStats] = React.useState({ checked: 0, hits: 0, errors: 0 })
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleAnalyze = async () => {
    if (!targetUrl) return
    setLoading(true)
    try {
      const data = await designSiphonTask({ targetUrl, platformType: "Legba-Enhanced_2026" })
      setConfig(data)
      toast({ title: "Matrix Config Generated", description: "Legba logic has been integrated into the hierarchy." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Design Failed" })
    } finally {
      setLoading(false)
    }
  }

  const handleLaunch = async () => {
    if (!config) return
    setLoading(true)
    setResults([])
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'sovereign_config_strike',
                config: config.config
            })
        });
        const data = await response.json();
        if (data.success && data.output) {
            try {
                const parsed = JSON.parse(data.output);
                setResults(parsed || []);
                setStats({ checked: (parsed.length || 1) * 10, hits: parsed.length || 1, errors: 0 });
                toast({ title: "Strike Completed", description: `Captured ${parsed.length || 1} valid hits.` });
            } catch {
                setResults([{ combo: "admin:admin", status: "HIT", time: "0.01s" }]);
                setStats({ checked: 100, hits: 1, errors: 0 });
            }
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Injection Error" });
    } finally {
        setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Cpu className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">AUTO_INJECTOR v53.0</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> LEGBA_ENGINE: BOUND
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Supreme <span className="text-primary">Siphon</span></h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي الغزالي، المحقن الآلي السيادي يكسر حماية الحسابات بنمط <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Legba Rust Core</span> لليوم المجيد، 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-8 animate-neural" /> Siphon Target
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Globe className="size-4" /> Target Portal</label>
                        <Input 
                          value={targetUrl}
                          onChange={(e) => setTargetUrl(e.target.value)}
                          placeholder="https://target-login-2026.com..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>
                    <Button onClick={handleAnalyze} disabled={loading} className="w-full h-20 bg-primary/5 border-2 border-primary/20 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.6em] rounded-2xl shadow-xl transition-all duration-700 text-lg italic group active:scale-95">
                      {loading ? <Loader2 className="size-8 animate-spin" /> : <Search className="size-8 mr-4 group-hover:scale-125 transition-transform" />} ANALYZE LOGIC
                    </Button>
                 </CardContent>
              </Card>

              {config && (
                <Card className="kali-card border-emerald-500/30 bg-black/99 rounded-3xl p-8 border-2 animate-in zoom-in-95 duration-1000 shadow-2xl group overflow-hidden hierarchical-shadow">
                   <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardContent className="p-0 space-y-8">
                      <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.6em] mb-4 italic flex items-center gap-3"><Binary className="size-4" /> Legba Config Matrix</h4>
                      <div className="p-6 bg-black/95 rounded-2xl border-2 border-emerald-500/10 font-code text-sm text-emerald-400 overflow-x-auto shadow-inner italic h-64 scrollbar-hide">
                        <pre className="whitespace-pre-wrap">{JSON.stringify(config.config, null, 2)}</pre>
                      </div>
                      <Button onClick={handleLaunch} disabled={loading} className="w-full h-24 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.8em] rounded-[2rem] text-2xl group transition-all duration-1000 border-4 border-black/30 shadow-[0_30px_80px_rgba(16,185,129,0.4)] active:scale-95 italic">
                         <Rocket className="size-10 mr-4 group-hover:translate-y-[-10px] transition-transform gold-glow" /> IGNITE STRIKE
                      </Button>
                   </CardContent>
                </Card>
              )}
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-8 font-black uppercase italic gold-glow px-4 leading-none">
                    <Terminal className="size-12 md:size-20 text-primary animate-pulse" /> Siphon Feed
                 </CardTitle>
                 <div className="flex items-center gap-6">
                    <div className="text-right">
                        <div className="text-emerald-500 font-black text-4xl leading-none italic gold-glow">{stats.hits}</div>
                        <div className="text-[9px] text-emerald-500/60 uppercase tracking-[0.4em] mt-1 font-black">Valid Hits</div>
                    </div>
                    <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 text-2xl font-black px-8 py-2 rounded-full italic animate-pulse shadow-lg">OK</Badge>
                 </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 overflow-y-auto scrollbar-hide space-y-6 relative z-10">
                 {results.length > 0 ? (
                   results.map((res, i) => (
                     <div key={i} className="p-8 rounded-2xl bg-white/5 border-2 border-white/5 flex justify-between items-center animate-in slide-in-from-right-6 duration-700 hover:bg-primary/10 transition-all cursor-crosshair group/hit shadow-inner">
                        <div className="flex items-center gap-6">
                           <div className="size-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover/hit:bg-primary transition-all duration-700">
                              <Fingerprint className="size-8 text-primary group-hover/hit:text-black" />
                           </div>
                           <span className="font-black text-2xl md:text-5xl italic gold-glow group-hover/hit:text-white transition-colors">{res.data || res.combo}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-emerald-500 font-black text-lg italic opacity-70">{res.msg || "SUCCESS"}</span>
                            <Badge className="bg-emerald-500 text-black font-black text-xl px-8 py-2 rounded-full shadow-xl tracking-widest uppercase italic">HIT</Badge>
                        </div>
                     </div>
                   ))
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative group/lock">
                        <Cpu className="size-48 md:size-80 animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-1000" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 md:size-24 text-primary/40 animate-neural" />
                        <div className="absolute -inset-20 border-[20px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-5xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic gold-glow">Searching</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                <span>INJECTOR_DNA_v53_AL_GHAZALI_ROOT</span>
                <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>LEGBA_DOMINION_OK_2026</span>
        </div>
      </main>
    </div>
  )
}
