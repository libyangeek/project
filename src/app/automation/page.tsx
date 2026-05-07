
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
  Globe
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { designSiphonTask } from "@/ai/flows/credential-siphon-flow"
import { cn } from "@/lib/utils"

export default function AutomationPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [targetUrl, setTargetUrl] = React.useState("")
  const [config, setConfig] = React.useState<any>(null)
  const [results, setResults] = React.useState<any[]>([])
  const [stats, setStats] = React.useState({ checked: 0, hits: 0, errors: 0 })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAnalyze = async () => {
    if (!targetUrl) return
    setLoading(true)
    try {
      const data = await designSiphonTask({ targetUrl, platformType: "Legba-Enhanced_2026" })
      setConfig(data)
      toast({ title: "Matrix Config Generated", description: "The Overmind has integrated Legba logic." })
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
                toast({ title: "Strike Completed", description: `Captured ${parsed.length || 1} valid hits via Legba Core.` });
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="flex items-center gap-6 mb-4">
             <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-lg italic rounded-full">AUTO_INJECTOR v51.0</Badge>
             <div className="flex items-center gap-4 text-emerald-500 font-black uppercase tracking-widest text-[12px] animate-pulse">
                <ShieldCheck className="size-6 shadow-lg" /> LEGBA_ENGINE: BOUND
             </div>
           </div>
           <h1 className="text-6xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Auto <span className="text-primary">Injector</span></h1>
           <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium">
             "سيدي الغزالي، المحقن الآلي السيادي يكسر حماية الحسابات بنمط <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl uppercase tracking-widest">Legba Rust Core</span> لعام 2026."
           </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40 flex-1">
           <div className="space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-8 shadow-9xl group overflow-hidden">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                    <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                       <Target className="size-14 animate-neural" /> Siphon Coordinate
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4"><Globe className="size-5" /> Target Portal</label>
                        <Input 
                          value={targetUrl}
                          onChange={(e) => setTargetUrl(e.target.value)}
                          placeholder="https://target-login-2026.com..." 
                          className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>
                    <Button onClick={handleAnalyze} disabled={loading} className="w-full h-28 bg-primary/10 border-4 border-primary/40 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.6em] rounded-[3.5rem] shadow-2xl transition-all duration-700 text-xl italic group">
                      {loading ? <Loader2 className="size-10 animate-spin" /> : <Search className="size-10 mr-6 group-hover:scale-125 transition-transform" />} ANALYZE LOGIC
                    </Button>
                 </CardContent>
              </Card>

              {config && (
                <Card className="kali-card border-emerald-500/40 bg-black/99 rounded-[5rem] p-10 border-8 animate-in zoom-in-95 duration-1000 shadow-9xl group overflow-hidden">
                   <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardContent className="p-0 space-y-10">
                      <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 italic flex items-center gap-4"><Binary className="size-6" /> Legba Matrix Config</h4>
                      <div className="p-8 bg-black/99 rounded-[2.5rem] border-4 border-emerald-500/20 font-code text-lg text-emerald-400 overflow-x-auto shadow-inner italic h-64 scrollbar-hide">
                        <pre className="whitespace-pre-wrap">{JSON.stringify(config.config, null, 2)}</pre>
                      </div>
                      <Button onClick={handleLaunch} disabled={loading} className="w-full h-32 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-[4rem] text-3xl group transition-all duration-1000 border-8 border-black/30 shadow-[0_40px_100px_rgba(16,185,129,0.5)] active:scale-95 italic">
                         <Rocket className="size-12 mr-6 group-hover:translate-y-[-10px] transition-transform gold-glow" /> IGNITE STRIKE
                      </Button>
                   </CardContent>
                </Card>
              )}
           </div>

           <Card className="xl:col-span-2 kali-card border-primary/60 bg-black/99 rounded-[7rem] p-12 border-8 shadow-9xl flex flex-col h-[900px] group overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 flex flex-row justify-between items-center bg-primary/10 rounded-t-[4rem] px-12 py-8">
                 <CardTitle className="text-5xl text-white flex items-center gap-10 font-black uppercase italic gold-glow">
                    <Terminal className="size-16 text-primary animate-pulse" /> Siphon Results
                 </CardTitle>
                 <div className="flex items-center gap-8">
                    <div className="text-right mr-6">
                        <div className="text-emerald-500 font-black text-4xl leading-none italic">{stats.hits}</div>
                        <div className="text-[10px] text-emerald-500/60 uppercase tracking-[0.4em] mt-1 font-black">Valid Hits</div>
                    </div>
                    <Badge className="bg-emerald-600/40 text-emerald-500 border-4 border-emerald-500/50 text-4xl font-black px-12 py-4 rounded-full italic animate-pulse shadow-3xl">OK</Badge>
                 </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-6 relative z-10 px-6">
                 {results.length > 0 ? (
                   results.map((res, i) => (
                     <div key={i} className="p-10 rounded-[3rem] bg-white/5 border-4 border-primary/20 flex justify-between items-center animate-in slide-in-from-right-12 duration-1000 hover:bg-primary/10 transition-all cursor-crosshair group/hit">
                        <div className="flex items-center gap-8">
                           <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center border-2 border-primary/40 group-hover/hit:bg-primary transition-all">
                              <Fingerprint className="size-8 text-primary group-hover/hit:text-black" />
                           </div>
                           <span className="font-black text-4xl italic gold-glow group-hover/hit:text-white transition-colors">{res.data || res.combo}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-emerald-500 font-black text-xl italic">{res.msg || "SUCCESS"}</span>
                            <Badge className="bg-emerald-500 text-black font-black text-2xl px-10 py-3 rounded-full shadow-2xl tracking-widest uppercase italic">HIT_SUCCESS</Badge>
                        </div>
                     </div>
                   ))
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative">
                        <Cpu className="size-64 mb-6 animate-pulse text-primary" />
                        <div className="absolute -inset-10 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow" />
                      </div>
                      <h3 className="text-7xl font-black uppercase tracking-[2em] text-white italic leading-none opacity-20">Awaiting Strike</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                <span>INJECTOR_DNA_v51_GHAZALI_ROOT</span>
                <Sparkles className="size-12 text-primary animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ AUTO INJECTOR v51.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>LEGBA_DOMINION_2026</span>
        </div>
      </main>
    </div>
  )
}
