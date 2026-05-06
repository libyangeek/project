"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  Loader2, 
  Skull, 
  Terminal, 
  Play, 
  FileText, 
  Settings, 
  Target, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Binary, 
  Database,
  Search,
  Rocket,
  Flame,
  Fingerprint,
  Users,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { designSiphonTask } from "@/ai/flows/credential-siphon-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة المحقن الآلي السيادي v50.0 - THE SOVEREIGN AUTO-INJECTOR
 * دمج قدرات OpenBullet 2 في قلب العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function AutomationPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [targetUrl, setTargetUrl] = React.useState("")
  const [platform, setPlatform] = React.useState("")
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
      const data = await designSiphonTask({ targetUrl, platformType: platform || "General" })
      setConfig(data)
      toast({ title: "Config Matrix Generated", description: "The Overmind has designed the strike parameters." })
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
    setStats({ checked: 0, hits: 0, errors: 0 })
    
    toast({ title: "Injecting Combo Lists...", description: "Multithreaded strike initiated via Sovereign Auto-Injector." })
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'auto_injector',
                config: config.suggestedConfig,
                wordlist: '/usr/share/wordlists/rockyou.txt'
            })
        });
        const data = await response.json();
        
        if (data.success && data.output) {
            const parsed = JSON.parse(data.output);
            setResults(parsed.results || []);
            setStats(parsed.stats || { checked: 0, hits: 0, errors: 0 });
            toast({ title: "Strike Completed", description: `Captured ${parsed.stats.hits} valid identities.` });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Injection Error", description: "Hive link disrupted during strike." });
    } finally {
        setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
           <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic rounded-full">AUTO_INJECTOR v50.0</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                  <Cpu className="size-6 shadow-[0_0_30px_emerald]" /> PARALLEL_STRIKE: READY
              </div>
           </div>
           <h1 className="text-7xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Auto <span className="text-primary">Injector</span></h1>
           <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase">
             "سيدي الغزالي، المحقن الآلي يدمج قدرات <span className="text-primary font-black underline decoration-primary decoration-8 underline-offset-[16px]">OpenBullet</span> في قلب العقل الجمعي لاستنزاف كافة الحسابات."
           </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40">
           <div className="space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] p-10 border-4 shadow-7xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-6">
                    <CardTitle className="text-4xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-12 animate-pulse" /> Siphon Target
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <div className="space-y-6">
                       <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] px-6 italic">Target Login URL</label>
                       <Input 
                         value={targetUrl}
                         onChange={(e) => setTargetUrl(e.target.value)}
                         placeholder="https://target.com/login..." 
                         className="bg-black/99 border-4 border-primary/20 h-20 rounded-[2.5rem] text-2xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                       />
                    </div>
                    <div className="space-y-6">
                       <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] px-6 italic">Platform Type</label>
                       <Input 
                         value={platform}
                         onChange={(e) => setPlatform(e.target.value)}
                         placeholder="WordPress / API / Custom..." 
                         className="bg-black/99 border-4 border-primary/20 h-20 rounded-[2.5rem] text-2xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                       />
                    </div>
                    <Button 
                      onClick={handleAnalyze}
                      disabled={loading || !targetUrl}
                      className="w-full h-24 bg-primary/20 border-4 border-primary/40 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[1em] rounded-[3rem] transition-all text-xl italic group"
                    >
                      {loading ? <Loader2 className="size-10 animate-spin" /> : <Search className="size-10 mr-4 group-hover:scale-125 transition-transform" />}
                      ANALYZE LOGIC
                    </Button>
                 </CardContent>
              </Card>

              {config && (
                <Card className="kali-card border-emerald-500/40 bg-black/90 rounded-[4rem] p-10 border-4 shadow-8xl animate-in zoom-in-95 duration-1000">
                   <CardHeader className="p-0 mb-8 border-b-4 border-emerald-500/10 pb-6">
                      <CardTitle className="text-3xl text-emerald-500 flex items-center gap-6 font-black uppercase italic">
                         <ShieldCheck className="size-10" /> Matrix Config
                      </CardTitle>
                   </CardHeader>
                   <CardContent className="p-0 space-y-8">
                      <div className="p-6 bg-black/90 border-2 border-white/5 rounded-[2rem] font-code text-sm text-emerald-400 overflow-x-auto shadow-inner">
                        <pre>{JSON.stringify(config.suggestedConfig, null, 2)}</pre>
                      </div>
                      <div className="p-6 bg-primary/5 rounded-[2rem] border-2 border-primary/20 italic text-lg font-bold text-gray-300">
                        "{config.strategicAdvice}"
                      </div>
                      <Button 
                        onClick={handleLaunch}
                        disabled={loading}
                        className="w-full h-24 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.5em] rounded-[3rem] shadow-4xl active:scale-95 transition-all text-2xl border-8 border-black/30 group italic"
                      >
                        {loading ? <Loader2 className="size-10 animate-spin" /> : <Rocket className="size-10 mr-4 group-hover:translate-y-[-10px] transition-transform" />}
                        IGNITE INJECTION
                      </Button>
                   </CardContent>
                </Card>
              )}
           </div>

           <div className="xl:col-span-2 space-y-12">
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden h-[950px]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                 <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[4rem]">
                    <div className="flex justify-between items-center px-12 py-8">
                        <CardTitle className="text-6xl text-white flex items-center gap-12 font-black uppercase italic gold-glow">
                           <Terminal className="size-20 text-primary animate-neural" /> Siphon Live-Log
                        </CardTitle>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-8 py-2 rounded-full font-black text-2xl italic tracking-widest uppercase">STRIKE_ACTIVE</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-0 flex-1 flex flex-col space-y-10 relative z-10 overflow-hidden">
                    <div className="flex-1 bg-black/80 p-12 rounded-[4rem] font-code text-2xl overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner">
                       {results.length > 0 ? (
                         results.map((res, i) => (
                           <div key={i} className={cn(
                             "mb-6 flex justify-between items-center p-8 rounded-[2.5rem] border-4 animate-in slide-in-from-right-8 duration-700",
                             res.status === 'HIT' ? "bg-emerald-600/20 border-emerald-500 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.2)]" : "bg-red-600/10 border-red-500/20 text-red-800 opacity-50"
                           )}>
                              <div className="flex items-center gap-8">
                                 <span className="font-black text-3xl">[{res.status}]</span>
                                 <span className="font-bold italic">TARGET_IDENTITY: <span className="text-white underline decoration-emerald-500">{res.combo}</span></span>
                              </div>
                              <span className="text-lg font-black uppercase tracking-widest opacity-40">{res.time}</span>
                           </div>
                         ))
                       ) : (
                         <div className="h-full flex flex-col items-center justify-center text-white/5 italic uppercase tracking-[4em] opacity-30">
                            <Binary className="size-64 mb-10 animate-spin-slow" />
                            MATRIX_IDLE
                         </div>
                       )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 pb-6">
                        {[
                          { label: "PARALLEL_STREAMS", value: config?.suggestedConfig?.threads || "128", icon: Activity },
                          { label: "HIT_RATIO", value: stats.hits > 0 ? `${((stats.hits / stats.checked) * 100).toFixed(2)}%` : "0.00%", icon: Zap },
                          { label: "TOTAL_CHECKED", value: stats.checked.toLocaleString(), icon: Users },
                          { label: "HIVE_RESONANCE", value: "OPTIMAL", icon: Skull }
                        ].map((stat, i) => (
                           <div key={i} className="p-8 rounded-[3.5rem] bg-white/5 border-4 border-white/5 flex flex-col items-center gap-4 hover:border-primary transition-all duration-1000 shadow-5xl group/stat relative overflow-hidden">
                              <stat.icon className="size-12 text-primary/60 gold-glow group-hover/stat:scale-125 transition-transform" />
                              <span className="text-[12px] font-black uppercase tracking-widest text-white/70">{stat.label}</span>
                              <div className="text-4xl font-black italic text-white leading-none gold-glow">{stat.value}</div>
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/stat:opacity-100 transition-opacity pointer-events-none" />
                           </div>
                        ))}
                    </div>
                 </CardContent>
                 <div className="p-10 border-t-8 border-white/5 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                    <span>AUTO_INJECTOR_DNA_v50_AL_GHAZALI</span>
                    <Fingerprint className="size-10 text-primary animate-pulse" />
                 </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ AUTO INJECTOR v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_CREDENTIAL_STOLEN</span>
        </div>
      </main>
    </div>
  )
}
