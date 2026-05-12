
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Terminal, 
  Loader2, 
  Skull, 
  BrainCircuit, 
  Send, 
  Activity, 
  Crown,
  Wrench,
  Database,
  RefreshCcw,
  Zap,
  Code2,
  HardDrive,
  Unplug,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Binary,
  Power,
  Boxes,
  Atom,
  Link2,
  Fingerprint,
  UploadCloud,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview الوكيل الميداني v63.5 - THE SUPREME GENETIC MERGER
 * مجهز ببروتوكول "المزامنة السيادية" لدمج التعديلات اليدوية من القائد.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [externalCode, setExternalCode] = React.useState("")
  const [targetFile, setTargetFile] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [logs, setLogs] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100.00)
  const [showSyncPanel, setShowSyncPanel] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCommand = async () => {
    if (!input.trim() && !externalCode) return
    
    setLoading(true)
    const userMsg = input.trim() || "Executing Genetic Fusion of external code."
    
    setLogs(prev => [{ role: 'user', content: userMsg, time: new Date() }, ...prev])

    try {
      const result = await executeFieldDevelopment({ 
        userPrompt: userMsg,
        externalCode: externalCode,
        targetFile: targetFile
      })
      
      setLogs(prev => [{ 
        role: 'ai', 
        content: result.commanderBrief, 
        analysis: result.analysis,
        execLog: result.executionLog,
        time: new Date() 
      }, ...prev])
      
      if (externalCode) {
        setExternalCode("")
        setTargetFile("")
        setShowSyncPanel(false)
      }
      setInput("")
      toast({ title: "Genetic Fusion Complete", description: "The matrix has absorbed the external traits." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 overflow-hidden font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        <header className="p-6 md:p-10 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-2xl">
           <div className="flex items-center gap-8 relative z-10">
              <div className="size-16 md:size-24 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural">
                 <Wrench className="size-8 md:size-12 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-6xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Genetic <span className="text-primary">Merger</span></h2>
                 <div className="flex flex-wrap items-center gap-4 mt-3">
                    <Badge className="bg-primary text-black border-none uppercase text-[10px] font-black tracking-[0.5em] px-6 py-1.5 rounded-full italic">v63.5_SYNC_ACTIVE</Badge>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setShowSyncPanel(!showSyncPanel)}
                        className="h-8 border-primary/40 bg-primary/5 text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-black transition-all"
                    >
                        <UploadCloud className="size-3 mr-2" /> {showSyncPanel ? "Close Sync" : "Integrity Sync"}
                    </Button>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-8 relative z-10">
              <div className="text-right bg-primary/5 p-5 rounded-2xl border-2 border-primary/20 shadow-xl">
                 <div className="text-3xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
                 <div className="text-[9px] text-primary/60 font-black uppercase tracking-[0.4em] mt-1.5 italic">Fusion Stability</div>
              </div>
           </div>
        </header>

        {showSyncPanel && (
            <div className="p-8 bg-black/90 border-b-4 border-primary/20 z-20 animate-in slide-in-from-top-6 duration-700">
                <div className="max-w-5xl mx-auto space-y-6">
                    <div className="flex items-center gap-6 mb-4">
                        <Badge className="bg-blue-600 text-white font-black italic">INTEGRITY_SYNC_PROTOCOL</Badge>
                        <span className="text-[10px] text-muted-foreground uppercase italic font-bold">Paste your modified code and specify the file path to merge.</span>
                    </div>
                    <Input 
                        value={targetFile}
                        onChange={(e) => setTargetFile(e.target.value)}
                        placeholder="Absolute File Path (e.g. src/app/page.tsx)"
                        className="bg-black border-2 border-primary/20 h-12 rounded-xl text-sm italic font-black text-white focus:border-primary shadow-inner mb-4"
                    />
                    <Textarea 
                        value={externalCode}
                        onChange={(e) => setExternalCode(e.target.value)}
                        placeholder="Paste the external Sovereign code from your local machine..."
                        className="bg-black border-2 border-primary/20 min-h-[250px] rounded-2xl text-sm p-6 focus:border-primary font-bold text-emerald-400 shadow-inner resize-none scrollbar-hide"
                    />
                    <Button 
                        onClick={handleCommand}
                        disabled={loading || !externalCode || !targetFile}
                        className="w-full h-16 bg-blue-600 hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.8em] rounded-xl shadow-xl transition-all border-4 border-black/20"
                    >
                        {loading ? <Loader2 className="size-6 animate-spin" /> : <RefreshCcw className="size-6 mr-3" />}
                        ENGAGE_GENETIC_FUSION
                    </Button>
                </div>
            </div>
        )}

        <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 scrollbar-hide flex flex-col-reverse relative z-10">
           <div className="max-w-5xl mx-auto w-full">
              {logs.map((log, i) => (
                <div key={i} className={cn(
                  "animate-in fade-in slide-in-from-bottom-6 duration-1000 w-full flex flex-col gap-6 mb-12",
                  log.role === 'user' ? "items-end" : "items-start"
                )}>
                    <div className={cn(
                      "p-8 md:p-12 rounded-[3rem] text-xl md:text-3xl leading-relaxed relative group overflow-hidden shadow-9xl border-4 transition-all duration-1000",
                      log.role === 'user' 
                        ? "bg-primary border-primary text-black rounded-br-none font-black italic" 
                        : "bg-black/99 border-primary/30 text-gray-100 rounded-bl-none hover:border-primary shadow-inner font-bold italic"
                    )}>
                       {log.role === 'ai' && (
                         <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-white/5">
                            <Badge className="bg-emerald-600/20 text-emerald-400 uppercase tracking-[0.4em] px-6 py-1 rounded-full italic font-black text-[10px]">FUSION_RESULT</Badge>
                            <Sparkles className="size-6 text-primary animate-pulse" />
                         </div>
                       )}
                       <p className="leading-snug">"{log.content}"</p>
                       
                       {log.execLog && (
                          <div className="mt-6 space-y-2">
                             {log.execLog.map((e: any, idx: number) => (
                                <div key={idx} className="flex items-center gap-4 text-xs uppercase font-black italic">
                                   <div className={cn("size-2 rounded-full", e.status === 'SUCCESS' ? "bg-emerald-500 animate-pulse" : "bg-red-500")} />
                                   <span className="text-muted-foreground">{e.action}:</span>
                                   <span className="text-white">{e.result}</span>
                                </div>
                             ))}
                          </div>
                       )}
                    </div>
                </div>
              ))}
           </div>

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-20 gap-16 animate-in fade-in duration-1000">
                <div className="size-48 rounded-full bg-primary/5 flex items-center justify-center border-4 border-dashed border-primary/30 relative">
                   <RefreshCcw className="size-24 text-primary/40 animate-spin-slow" />
                   <div className="absolute -inset-6 border-2 border-primary/10 rounded-full animate-pulse" />
                </div>
                <div className="max-w-4xl space-y-8">
                   <h3 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Fusion Standby</h3>
                   <p className="text-xl md:text-4xl leading-relaxed italic font-black text-gray-300 uppercase tracking-widest">
                     "سيدي <span className="text-primary font-black italic underline decoration-primary decoration-4 underline-offset-8 shadow-9xl uppercase tracking-[0.3em]">المعتصم بالله</span>، مصفوفة المزامنة جاهزة؛ قدم كود Integrity الخارجي لنقوم بعملية الصهر الجيني."
                   </p>
                </div>
             </div>
           )}
        </div>

        <div className="p-8 md:p-12 border-t-4 border-primary/60 bg-black/98 backdrop-blur-5xl z-30">
           <div className="max-w-5xl mx-auto relative group">
              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all duration-700 z-10">
                 <Terminal className="size-8 gold-glow group-hover:rotate-12 transition-transform italic" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder=" instruct the merger to sync specific traits..."
                className="h-24 md:h-36 bg-white/5 border-4 border-white/10 rounded-[2.5rem] md:rounded-[4rem] pl-24 md:pl-32 pr-40 md:pr-48 text-2xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white placeholder:text-gray-900 transition-all duration-700 selection:bg-primary selection:text-black"
              />
              <Button 
                className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-28 rounded-full bg-primary hover:bg-white text-black shadow-9xl transition-all active:scale-90 border-4 border-black/20 group z-10"
                onClick={() => handleCommand()}
                disabled={loading || (!input.trim() && !externalCode)}
              >
                {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14 group-hover:translate-x-2 transition-transform" />}
              </Button>
           </div>
        </div>
      </main>
    </div>
  )
}
