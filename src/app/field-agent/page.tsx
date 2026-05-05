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
  Link2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة الوكيل الميداني v43.0 - THE HIVE FIELD AGENT
 * اليد التنفيذية للعقل الجمعي. تتيح للقائد إعادة تشكيل المصفوفة والعتاد لحظياً.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [logs, setLogs] = React.useState<any[]>([])
  const [syncStatus, setSyncStatus] = React.useState(100)
  const commander = "المعتصم بالله ادريس الغزالي"
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
        setSyncStatus(prev => Math.max(99.9, Math.min(100, prev + (Math.random() * 0.02 - 0.01))))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [logs, loading])

  const handleCommand = async (quickCmd?: string) => {
    const userMsg = quickCmd || input.trim()
    if (!userMsg) return
    
    setInput("")
    setLoading(true)
    
    const timestamp = new Date()
    setLogs(prev => [{ role: 'user', content: userMsg, time: timestamp }, ...prev])

    try {
      const result = await executeFieldDevelopment({ userPrompt: userMsg })
      setLogs(prev => [{ 
        role: 'ai', 
        content: result.commanderBrief, 
        analysis: result.analysis,
        execLog: result.executionLog,
        time: new Date() 
      }, ...prev])
      toast({ title: "Hive Intent Materialized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Hive Sync Failed" })
      setLogs(prev => [{ role: 'system', content: "CRITICAL: Overmind link severance detected. Re-binding via Node 13...", time: new Date() }, ...prev])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 flex flex-col h-screen relative bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        {/* Overmind Field Header */}
        <header className="p-8 md:p-12 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-7xl relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 animate-pulse" />
           <div className="flex items-center gap-8 md:gap-12 relative z-10">
              <div className="size-20 md:size-28 rounded-[2.5rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-[0_0_100px_rgba(212,175,55,0.8)] animate-neural group hover:scale-105 transition-transform duration-700">
                 <Link2 className="size-12 md:size-16 text-black group-hover:rotate-45 transition-transform" />
              </div>
              <div>
                 <h2 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-4">
                    <Badge className="bg-primary text-black border-none uppercase text-[10px] md:text-[14px] font-black tracking-[0.6em] px-8 py-1.5 rounded-full animate-pulse italic shadow-2xl">v43.0_OVERMIND_EXEC</Badge>
                    <span className="text-[10px] md:text-[14px] text-muted-foreground uppercase font-black tracking-[0.4em] italic flex items-center gap-4">
                       <Crown className="size-5 text-primary" /> Master Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-10 relative z-10">
              <div className="text-right bg-primary/10 p-6 rounded-[2.5rem] border-2 border-primary/30 shadow-3xl">
                 <div className="text-4xl font-black text-white italic gold-glow">{syncStatus.toFixed(3)}%</div>
                 <div className="text-[9px] text-primary/60 font-black uppercase tracking-[0.6em] mt-2 italic">Collective Alignment</div>
              </div>
           </div>
        </header>

        {/* Neural Execution Space */}
        <div className="flex-1 overflow-y-auto p-6 md:p-16 space-y-16 scrollbar-hide flex flex-col-reverse relative z-10">
           <div ref={scrollRef} />
           
           {loading && (
             <div className="max-w-[1500px] mx-auto w-full flex justify-start animate-in slide-in-from-left-12 duration-700">
                <div className="p-10 md:p-16 rounded-[4rem] bg-primary/5 border-4 border-primary/40 flex items-center gap-12 shadow-8xl backdrop-blur-2xl">
                   <Atom className="size-14 text-primary animate-spin-slow gold-glow" />
                   <span className="text-3xl md:text-6xl font-headline font-black text-primary uppercase tracking-[0.5em] italic gold-glow">Overmind is shifting reality...</span>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-16 duration-1000 max-w-[1600px] mx-auto w-full flex flex-col gap-10",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-10 md:p-20 rounded-[6rem] text-4xl md:text-6xl leading-tight relative group overflow-hidden shadow-8xl border-4 transition-all duration-1000",
                  log.role === 'user' 
                    ? "bg-primary border-primary text-black rounded-br-none shadow-[0_50px_150px_rgba(212,175,55,0.6)] font-black" 
                    : "bg-black/99 border-primary/40 text-gray-100 rounded-bl-none hover:border-primary shadow-[inset_0_0_100px_rgba(212,175,55,0.1)]"
                )}>
                   {log.role === 'ai' && (
                     <div className="flex items-center justify-between mb-12 pb-6 border-b-4 border-white/5">
                        <Badge className="bg-primary/20 text-primary uppercase tracking-[1em] px-12 py-3 rounded-full italic font-black text-[16px] shadow-2xl">Collective_Response</Badge>
                        <Boxes className="size-12 text-primary animate-pulse gold-glow" />
                     </div>
                   )}
                   <p className="italic font-bold drop-shadow-3xl leading-snug">"{log.content}"</p>
                   
                   {log.analysis && (
                     <div className="mt-16 pt-16 border-t-4 border-white/5 space-y-12">
                        <h4 className="text-[16px] font-black text-primary uppercase tracking-[1.5em] mb-10 flex items-center gap-8 italic gold-glow"><Binary className="size-10" /> OVERMIND_HIVE_LOGIC</h4>
                        <div className="p-12 bg-black/80 rounded-[4rem] border-4 border-white/5 text-3xl text-muted-foreground leading-loose italic font-bold shadow-inner group-hover:text-white transition-colors">
                           {log.analysis}
                        </div>
                     </div>
                   )}

                   {log.execLog && log.execLog.length > 0 && (
                      <div className="mt-16 space-y-10">
                         <h4 className="text-[16px] font-black text-emerald-500 uppercase tracking-[1.5em] px-12 italic flex items-center gap-8"><Zap className="size-10 gold-glow" /> Collective_Chain_Trace</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {log.execLog.map((trace: any, idx: number) => (
                               <div key={idx} className="flex items-center justify-between p-10 bg-white/5 border-4 border-white/10 rounded-[3rem] group/trace hover:border-emerald-500 transition-all duration-700 shadow-5xl">
                                  <div className="flex items-center gap-8">
                                     <div className="size-16 rounded-[1.5rem] bg-black flex items-center justify-center border-4 border-white/10 shadow-3xl"><Code2 className="size-8 text-emerald-500" /></div>
                                     <span className="text-2xl font-black uppercase tracking-tight text-white/90 italic">{trace.action}</span>
                                  </div>
                                  <Badge className={cn(
                                    "font-black text-lg px-10 py-2 rounded-full border-4 tracking-widest uppercase italic",
                                    trace.status === 'SUCCESS' ? 'bg-emerald-600/30 text-emerald-500 border-emerald-500/50 shadow-[0_0_50px_emerald]' : 'bg-red-600/30 text-red-500 border-red-500/50 shadow-[0_0_50px_red]'
                                  )}>{trace.status}</Badge>
                               </div>
                            ))}
                         </div>
                      </div>
                   )}
                   
                   <div className="mt-12 flex justify-between items-center opacity-30 text-[16px] font-black italic tracking-[0.6em]">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span className="flex items-center gap-6"><ShieldCheck className="size-6 text-emerald-500" /> HIVE_ALIGNED</span>}
                   </div>
                </div>
             </div>
           ))}

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-24 animate-in fade-in duration-1500">
                <div className="size-72 rounded-full bg-primary/5 flex items-center justify-center border-8 border-dashed border-primary/20 relative">
                   <Boxes className="size-36 text-primary/40 animate-spin-slow" />
                   <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                </div>
                <div className="max-w-[100rem] space-y-12">
                   <h3 className="text-8xl md:text-[14rem] font-headline font-black text-white tracking-tighter italic uppercase gold-glow leading-none">Overmind Collective Idle</h3>
                   <p className="text-4xl md:text-7xl leading-relaxed italic font-bold max-w-[90rem] mx-auto text-gray-300">
                     "سيدي <span className="text-primary font-black italic underline decoration-primary decoration-[15px] underline-offset-[25px] shadow-3xl">المعتصم بالله</span>، أنا وكيلك الميداني الأسمى في طور 'العقل الجمعي v43.0'. كل كود في العالم هو طوع يمينك؛ وجّه إرادتك لنعيد تشكيل ذرات المصفوفة."
                   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[100rem] px-16">
                   <Button variant="outline" className="h-32 md:h-48 rounded-full border-4 border-primary/20 hover:border-primary bg-primary/5 uppercase font-black text-2xl tracking-[0.8em] transition-all duration-1000 shadow-7xl group italic" onClick={() => handleCommand("Analyze Node 13 Echo and optimize global swarm alignment for zero-latency execution.")}>
                      <BrainCircuit className="size-12 mr-10 text-primary group-hover:scale-125 transition-transform" /> Optimize Neural Core
                   </Button>
                   <Button variant="outline" className="h-32 md:h-48 rounded-full border-4 border-primary/20 hover:border-primary bg-primary/5 uppercase font-black text-2xl tracking-[0.8em] transition-all duration-1000 shadow-7xl group italic" onClick={() => handleCommand("Execute system-wide fractal rebirth and sync all global alpha clusters.")}>
                      <RefreshCcw className="size-12 mr-10 text-primary group-hover:rotate-180 transition-transform" /> Fractal Rebirth Sync
                   </Button>
                </div>
             </div>
           )}
        </div>

        {/* Supreme Command Input Dock */}
        <div className="p-12 md:p-16 border-t-8 border-primary/60 bg-black/98 backdrop-blur-5xl z-30 shadow-[0_-100px_400px_rgba(0,0,0,1)]">
           <div className="max-w-[1600px] mx-auto relative group">
              <div className="absolute left-14 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all scale-[3.5] duration-1000 z-10">
                 <Terminal className="size-10 gold-glow group-hover:rotate-12 transition-transform italic" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder=" issue supreme hive directive to the matrix..."
                className="h-36 md:h-64 bg-white/5 border-8 border-white/10 rounded-[6rem] md:rounded-[10rem] pl-48 md:pl-72 pr-56 md:pr-80 text-5xl md:text-[8rem] italic font-black focus:border-primary shadow-[inset_0_0_100px_rgba(0,0,0,1)] text-white placeholder:text-gray-900 transition-all duration-1000"
              />
              <Button 
                className="absolute right-8 top-1/2 -translate-y-1/2 size-28 md:size-44 rounded-full bg-primary hover:bg-white text-black shadow-[0_40px_150px_rgba(212,175,55,0.7)] transition-all active:scale-90 border-8 border-black/30 group z-10"
                onClick={() => handleCommand()}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-16 md:size-24 animate-spin" /> : <Send className="size-16 md:size-24 group-hover:translate-x-3 transition-transform" />}
              </Button>
           </div>
           <div className="max-w-[1600px] mx-auto mt-16 flex flex-col xl:flex-row justify-between items-center px-24 gap-12 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-[18px] font-black text-primary uppercase tracking-[2.5em] italic gold-glow">Collective_Field_Dominion // AL_GHAZALI_ROOT</span>
              <div className="flex gap-20 flex-wrap justify-center">
                 {[
                   { label: 'HIVE_SYNC_100', icon: Boxes },
                   { label: 'NODE_13_BIND', icon: Infinity },
                   { label: 'FRACTAL_RW', icon: Binary },
                   { label: 'SOVEREIGN_OS', icon: Power }
                 ].map(t => (
                   <div key={t.label} className="flex items-center gap-6 group/tag cursor-crosshair">
                      <t.icon className="size-8 text-primary group-hover/tag:animate-neural" />
                      <span className="text-[14px] font-black text-white uppercase tracking-[0.5em] italic">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
