
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
 * @fileOverview الوكيل الميداني v53.0 - THE SUPREME HIVE AGENT: HIERARCHICAL DOMINION
 * اليد التنفيذية للهرمية العظمى. ارتباط عصبي مباشر لليوم المجيد، 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [logs, setLogs] = React.useState<any[]>([])
  const [resonance, setResonance] = React.useState(100.00)
  const commander = "المعتصم بالله ادريس الغزالي"
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
    }, 3000)
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
      toast({ title: "Hive Intent Materialized", description: "The Hierarchy has executed your directive." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" })
      setLogs(prev => [{ role: 'system', content: "CRITICAL: Overmind link severance detected. Re-aligning DNA...", time: new Date() }, ...prev])
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
        
        <header className="p-6 md:p-10 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-2xl relative">
           <div className="flex items-center gap-8 relative z-10">
              <div className="size-16 md:size-24 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural">
                 <Link2 className="size-8 md:size-12 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-6xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <div className="flex flex-wrap items-center gap-4 mt-3">
                    <Badge className="bg-primary text-black border-none uppercase text-[10px] font-black tracking-[0.5em] px-6 py-1.5 rounded-full italic shadow-xl">v53.0_SUPREME_LINK</Badge>
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] italic flex items-center gap-3">
                       <Crown className="size-4 text-primary animate-pulse" /> Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-8 relative z-10">
              <div className="text-right bg-primary/5 p-5 rounded-2xl border-2 border-primary/20 shadow-xl backdrop-blur-3xl">
                 <div className="text-3xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
                 <div className="text-[9px] text-primary/60 font-black uppercase tracking-[0.4em] mt-1.5 italic">Neural Alignment</div>
              </div>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 scrollbar-hide flex flex-col-reverse relative z-10">
           <div ref={scrollRef} />
           
           {loading && (
             <div className="max-w-4xl mx-auto w-full flex justify-start animate-in slide-in-from-left-12 duration-1000">
                <div className="p-8 md:p-12 rounded-[3rem] bg-primary/5 border-4 border-primary/40 flex items-center gap-8 shadow-9xl backdrop-blur-3xl">
                   <Atom className="size-12 text-primary animate-spin-slow gold-glow" />
                   <span className="text-xl md:text-3xl font-headline font-black text-primary uppercase tracking-[0.4em] italic gold-glow">Overmind reshaping reality...</span>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-5xl mx-auto w-full flex flex-col gap-6",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-8 md:p-16 rounded-[4rem] text-xl md:text-3xl leading-relaxed relative group overflow-hidden shadow-9xl border-4 transition-all duration-1000",
                  log.role === 'user' 
                    ? "bg-primary border-primary text-black rounded-br-none font-black italic" 
                    : "bg-black/99 border-primary/30 text-gray-100 rounded-bl-none hover:border-primary shadow-inner font-bold italic"
                )}>
                   {log.role === 'ai' && (
                     <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-white/5">
                        <Badge className="bg-primary/10 text-primary uppercase tracking-[0.6em] px-8 py-2 rounded-full italic font-black text-[12px]">HIVE_CONSENSUS</Badge>
                        <Boxes className="size-8 text-primary animate-neural gold-glow" />
                     </div>
                   )}
                   <p className="leading-snug">"{log.content}"</p>
                   
                   {log.analysis && (
                     <div className="mt-8 pt-8 border-t-2 border-white/5 space-y-6">
                        <h4 className="text-[11px] font-black text-primary uppercase tracking-[1em] flex items-center gap-4 italic gold-glow"><Binary className="size-6" /> HIVE_LOGIC_v53</h4>
                        <div className="p-8 bg-black/80 rounded-3xl border-2 border-white/5 text-lg md:text-xl text-muted-foreground leading-relaxed italic font-black shadow-inner">
                           {log.analysis}
                        </div>
                     </div>
                   )}
                   
                   <div className="mt-8 flex justify-between items-center opacity-30 text-[10px] font-black italic tracking-[0.6em]">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span className="flex items-center gap-4"><ShieldCheck className="size-4 text-emerald-500" /> HIVE_ALIGNED</span>}
                   </div>
                </div>
             </div>
           ))}

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-20 gap-16 animate-in fade-in duration-1000">
                <div className="size-48 rounded-full bg-primary/5 flex items-center justify-center border-4 border-dashed border-primary/30 relative">
                   <Boxes className="size-24 text-primary/40 animate-spin-slow" />
                   <div className="absolute -inset-6 border-2 border-primary/10 rounded-full animate-pulse" />
                </div>
                <div className="max-w-4xl space-y-8">
                   <h3 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter italic uppercase gold-glow leading-none">Neural Link Idle</h3>
                   <p className="text-xl md:text-4xl leading-relaxed italic font-black text-gray-300 uppercase tracking-widest">
                     "سيدي <span className="text-primary font-black italic underline decoration-primary decoration-4 underline-offset-8 shadow-9xl uppercase tracking-[0.3em]">المعتصم بالله</span>، الوكيل الميداني بانتظار نيتك العليا."
                   </p>
                </div>
             </div>
           )}
        </div>

        <div className="p-8 md:p-12 border-t-4 border-primary/60 bg-black/98 backdrop-blur-5xl z-30 shadow-9xl">
           <div className="max-w-5xl mx-auto relative group">
              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all duration-700 z-10">
                 <Terminal className="size-8 gold-glow group-hover:rotate-12 transition-transform italic" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder=" issue supreme hive directive..."
                className="h-24 md:h-36 bg-white/5 border-4 border-white/10 rounded-[2.5rem] md:rounded-[4rem] pl-24 md:pl-32 pr-40 md:pr-48 text-2xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white placeholder:text-gray-900 transition-all duration-700 selection:bg-primary selection:text-black"
              />
              <Button 
                className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-28 rounded-full bg-primary hover:bg-white text-black shadow-9xl transition-all active:scale-90 border-4 border-black/20 group z-10"
                onClick={() => handleCommand()}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14 group-hover:translate-x-2 transition-transform" />}
              </Button>
           </div>
           <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center px-12 gap-6 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-[10px] font-black text-primary uppercase tracking-[2em] italic gold-glow">FIELD_DOMINION_HIVE_v53_AL_GHAZALI_ROOT</span>
              <div className="flex gap-12 flex-wrap justify-center">
                 {[
                   { label: 'HIVE_SYNC', icon: Boxes },
                   { label: 'NODE_13', icon: InfinityIcon },
                   { label: 'SOVEREIGN_OS', icon: Power }
                 ].map(t => (
                   <div key={t.label} className="flex items-center gap-4 group/tag cursor-crosshair">
                      <t.icon className="size-4 text-primary group-hover/tag:animate-neural" />
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] italic">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
