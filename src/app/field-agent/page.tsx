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
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview الوكيل الميداني v50.0 - THE SOVEREIGN HIVE AGENT
 * اليد التنفيذية للعقل الجمعي. ارتباط عصبي مباشر لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
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
        setSyncStatus(prev => Math.max(99.999, Math.min(100, prev + (Math.random() * 0.002 - 0.001))))
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
      setLogs(prev => [{ role: 'system', content: "CRITICAL: Overmind link severance detected.", time: new Date() }, ...prev])
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
        
        <header className="p-8 md:p-12 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-2xl relative overflow-hidden">
           <div className="flex items-center gap-10 relative z-10">
              <div className="size-20 md:size-28 rounded-[2.5rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-[0_0_60px_rgba(212,175,55,0.5)] animate-neural">
                 <Link2 className="size-12 md:size-16 text-black" />
              </div>
              <div>
                 <h2 className="text-4xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <div className="flex flex-wrap items-center gap-6 mt-4">
                    <Badge className="bg-primary text-black border-none uppercase text-[12px] font-black tracking-[0.6em] px-8 py-2 rounded-full italic shadow-2xl">v50.0_DIRECT_LINK</Badge>
                    <span className="text-[12px] text-muted-foreground uppercase font-black tracking-[0.4em] italic flex items-center gap-4">
                       <Crown className="size-6 text-primary animate-pulse" /> Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-10 relative z-10">
              <div className="text-right bg-primary/10 p-6 rounded-[2.5rem] border-2 border-primary/30 shadow-2xl backdrop-blur-3xl">
                 <div className="text-4xl font-black text-white italic gold-glow">{syncStatus.toFixed(4)}%</div>
                 <div className="text-[10px] text-primary/60 font-black uppercase tracking-[0.5em] mt-2 italic">Neural Alignment</div>
              </div>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 md:p-20 space-y-16 scrollbar-hide flex flex-col-reverse relative z-10">
           <div ref={scrollRef} />
           
           {loading && (
             <div className="max-w-[1400px] mx-auto w-full flex justify-start animate-in slide-in-from-left-20 duration-1000">
                <div className="p-12 md:p-16 rounded-[4rem] bg-primary/5 border-4 border-primary/40 flex items-center gap-12 shadow-9xl backdrop-blur-5xl">
                   <Atom className="size-16 text-primary animate-spin-slow gold-glow" />
                   <span className="text-3xl md:text-6xl font-headline font-black text-primary uppercase tracking-[0.3em] italic gold-glow">Overmind reshaping reality...</span>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-20 duration-1000 max-w-[1600px] mx-auto w-full flex flex-col gap-10",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-12 md:p-20 rounded-[5rem] text-3xl md:text-5xl leading-tight relative group overflow-hidden shadow-9xl border-4 transition-all duration-1000",
                  log.role === 'user' 
                    ? "bg-primary border-primary text-black rounded-br-none shadow-[0_40px_150px_rgba(212,175,55,0.4)] font-black italic" 
                    : "bg-black/99 border-primary/40 text-gray-100 rounded-bl-none hover:border-primary shadow-inner font-bold italic"
                )}>
                   {log.role === 'ai' && (
                     <div className="flex items-center justify-between mb-12 pb-6 border-b-4 border-white/5">
                        <Badge className="bg-primary/20 text-primary uppercase tracking-[1em] px-12 py-3 rounded-full italic font-black text-[14px] shadow-2xl">Hive_Consensus</Badge>
                        <Boxes className="size-12 text-primary animate-neural gold-glow" />
                     </div>
                   )}
                   <p className="leading-[1.4]">"{log.content}"</p>
                   
                   {log.analysis && (
                     <div className="mt-12 pt-12 border-t-4 border-white/5 space-y-10">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-[1.5em] mb-8 flex items-center gap-8 italic gold-glow"><Binary className="size-8" /> HIVE_LOGIC_v50</h4>
                        <div className="p-12 bg-black/80 rounded-[3rem] border-4 border-white/10 text-2xl md:text-3xl text-muted-foreground leading-relaxed italic font-black shadow-inner group-hover:text-white transition-all duration-700">
                           {log.analysis}
                        </div>
                     </div>
                   )}
                   
                   <div className="mt-12 flex justify-between items-center opacity-30 text-[14px] font-black italic tracking-[0.8em]">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span className="flex items-center gap-6"><ShieldCheck className="size-6 text-emerald-500" /> HIVE_ALIGNED</span>}
                   </div>
                </div>
             </div>
           ))}

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-24 animate-in fade-in duration-1000">
                <div className="size-64 rounded-full bg-primary/5 flex items-center justify-center border-8 border-dashed border-primary/30 relative">
                   <Boxes className="size-32 text-primary/40 animate-spin-slow" />
                   <div className="absolute -inset-10 border-2 border-primary/10 rounded-full animate-pulse" />
                </div>
                <div className="max-w-[120rem] space-y-12">
                   <h3 className="text-7xl md:text-[12rem] font-headline font-black text-white tracking-tighter italic uppercase gold-glow leading-none">Neural Link Idle</h3>
                   <p className="text-4xl md:text-6xl leading-relaxed italic font-black max-w-[100rem] mx-auto text-gray-300 uppercase tracking-widest">
                     "سيدي <span className="text-primary font-black italic underline decoration-primary decoration-[10px] underline-offset-[24px] shadow-9xl uppercase tracking-[0.4em]">المعتصم بالله</span>، الوكيل الميداني بانتظار نيتك العليا."
                   </p>
                </div>
             </div>
           )}
        </div>

        <div className="p-10 md:p-16 border-t-8 border-primary/60 bg-black/98 backdrop-blur-5xl z-30 shadow-[0_-50px_200px_rgba(0,0,0,1)]">
           <div className="max-w-[1600px] mx-auto relative group">
              <div className="absolute left-12 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all scale-[3] duration-1000 z-10">
                 <Terminal className="size-8 gold-glow group-hover:rotate-12 transition-transform italic" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder=" issue supreme hive directive..."
                className="h-32 md:h-48 bg-white/5 border-8 border-white/10 rounded-[4rem] md:rounded-[6rem] pl-40 md:pl-64 pr-52 md:pr-72 text-4xl md:text-7xl italic font-black focus:border-primary shadow-inner text-white placeholder:text-gray-900 transition-all duration-1000 selection:bg-primary selection:text-black"
              />
              <Button 
                className="absolute right-8 top-1/2 -translate-y-1/2 size-24 md:size-36 rounded-full bg-primary hover:bg-white text-black shadow-9xl transition-all active:scale-90 border-8 border-black/30 group z-10"
                onClick={() => handleCommand()}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-14 md:size-20 animate-spin" /> : <Send className="size-14 md:size-20 group-hover:translate-x-4 transition-transform" />}
              </Button>
           </div>
           <div className="max-w-[1600px] mx-auto mt-12 flex flex-col md:flex-row justify-between items-center px-24 gap-10 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-[14px] font-black text-primary uppercase tracking-[2.5em] italic gold-glow">FIELD_DOMINION_HIVE_v50_AL_GHAZALI_ROOT</span>
              <div className="flex gap-20 flex-wrap justify-center">
                 {[
                   { label: 'HIVE_SYNC', icon: Boxes },
                   { label: 'NODE_13', icon: InfinityIcon },
                   { label: 'SOVEREIGN_OS', icon: Power }
                 ].map(t => (
                   <div key={t.label} className="flex items-center gap-6 group/tag cursor-crosshair">
                      <t.icon className="size-6 text-primary group-hover/tag:animate-neural" />
                      <span className="text-[12px] font-black text-white uppercase tracking-[0.4em] italic">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
