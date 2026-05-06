"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, Loader2, Skull, Terminal, Play, Cpu, Target, Rocket, Search, ShieldCheck, Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      const data = await designSiphonTask({ targetUrl, platformType: "Auto-Detect" })
      setConfig(data)
      toast({ title: "Matrix Config Generated", description: "The Overmind has designed the strike." })
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
                type: 'auto_injector',
                config: config.suggestedConfig
            })
        });
        const data = await response.json();
        if (data.success && data.output) {
            const parsed = JSON.parse(data.output);
            setResults(parsed.results || []);
            setStats(parsed.stats || { checked: 0, hits: 0, errors: 0 });
            toast({ title: "Strike Completed", description: `Captured ${parsed.stats.hits} valid hits.` });
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
        <header className="mb-12 relative z-10">
           <Badge className="bg-primary text-black border-none px-6 py-2 text-[12px] font-black tracking-widest italic rounded-full mb-4">AUTO_INJECTOR v50.0</Badge>
           <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow">Auto <span className="text-primary">Injector</span></h1>
           <p className="text-xl md:text-3xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed">
             "سيدي الغزالي، المحقن الآلي السيادي يكسر حماية الحسابات بنمط السرب المتوازي."
           </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
           <div className="space-y-8">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[3rem] p-8 border-4 shadow-7xl">
                 <CardHeader className="p-0 mb-6 border-b border-white/5 pb-4">
                    <CardTitle className="text-2xl text-primary flex items-center gap-4 font-black uppercase italic">
                       <Target className="size-8" /> Siphon Coordinate
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-6">
                    <Input 
                      value={targetUrl}
                      onChange={(e) => setTargetUrl(e.target.value)}
                      placeholder="https://target-login.com..." 
                      className="bg-black/90 border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-8"
                    />
                    <Button onClick={handleAnalyze} disabled={loading} className="w-full h-16 bg-primary/20 border-2 border-primary/40 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-widest rounded-2xl">
                      {loading ? <Loader2 className="size-6 animate-spin" /> : <Search className="size-6 mr-2" />} ANALYZE LOGIC
                    </Button>
                 </CardContent>
              </Card>

              {config && (
                <Card className="kali-card border-emerald-500/40 bg-black/90 rounded-[3rem] p-8 border-4 animate-in zoom-in-95 duration-700">
                   <CardContent className="p-0 space-y-6">
                      <div className="p-4 bg-black rounded-xl border border-white/5 font-code text-[10px] text-emerald-400 overflow-x-auto">
                        <pre>{JSON.stringify(config.suggestedConfig, null, 2)}</pre>
                      </div>
                      <Button onClick={handleLaunch} disabled={loading} className="w-full h-20 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.5em] rounded-2xl text-xl group">
                         <Rocket className="size-6 mr-4 group-hover:translate-y-[-5px] transition-transform" /> IGNITE STRIKE
                      </Button>
                   </CardContent>
                </Card>
              )}
           </div>

           <Card className="xl:col-span-2 kali-card border-primary/60 bg-black/99 rounded-[4rem] p-8 border-8 shadow-9xl flex flex-col h-[700px]">
              <CardHeader className="p-0 mb-6 border-b border-white/5 pb-4 flex flex-row justify-between items-center px-4">
                 <CardTitle className="text-3xl text-white flex items-center gap-6 font-black uppercase italic gold-glow">
                    <Terminal className="size-10 text-primary animate-neural" /> Siphon Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/30 text-emerald-500">HITS: {stats.hits}</Badge>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-hide space-y-4">
                 {results.length > 0 ? (
                   results.map((res, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-white/5 border border-primary/20 flex justify-between items-center animate-in slide-in-from-right-4">
                        <span className="font-black text-xl italic">{res.combo}</span>
                        <Badge className="bg-emerald-500 text-black font-black">HIT_SUCCESS</Badge>
                     </div>
                   ))
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center opacity-20 italic uppercase tracking-[1em]">
                      <Cpu className="size-32 mb-6 animate-pulse" /> AWAITING_STRIKE
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
