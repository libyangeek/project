
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
 * @fileOverview واجهة الوكيل الميداني v43.0 - THE HIVE FIELD AGENT
 * اليد التنفيذية للعقل الجمعي. تم تحسين الخطوط والعرض بناءً على توجيه القائد.
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
        
        {/* Overmind Field Header */}
        <header className="p-6 md:p-8 border-b-2 border-primary/40 bg-black/95 backdrop-blur-3xl z-20 flex justify-between items-center shadow-xl relative overflow-hidden">
           <div className="flex items-center gap-6 md:gap-8 relative z-10">
              <div className="size-16 md:size-20 rounded-[1.5rem] bg-primary flex items-center justify-center border-2 border-black/30 shadow-lg animate-neural">
                 <Link2 className="size-10 text-black" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-3">
                    <Badge className="bg-primary text-black border-none uppercase text-[9px] md:text-[11px] font-black tracking-[0.4em] px-5 py-1 rounded-full italic shadow-lg">v43.0_EXEC</Badge>
                    <span className="text-[9px] md:text-[11px] text-muted-foreground uppercase font-black tracking-[0.2em] italic flex items-center gap-2">
                       <Crown className="size-4 text-primary" /> Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-6 relative z-10">
              <div className="text-right bg-primary/10 p-4 rounded-[1.5rem] border border-primary/30 shadow-md">
                 <div className="text-2xl font-black text-white italic gold-glow">{syncStatus.toFixed(3)}%</div>
                 <div className="text-[8px] text-primary/60 font-black uppercase tracking-[0.3em] mt-1 italic">Collective Alignment</div>
              </div>
           </div>
        </header>

        {/* Neural Execution Space */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 scrollbar-hide flex flex-col-reverse relative z-10">
           <div ref={scrollRef} />
           
           {loading && (
             <div className="max-w-[1200px] mx-auto w-full flex justify-start animate-in slide-in-from-left-12 duration-700">
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-primary/5 border-2 border-primary/40 flex items-center gap-8 shadow-2xl backdrop-blur-2xl">
                   <Atom className="size-10 text-primary animate-spin-slow gold-glow" />
                   <span className="text-xl md:text-3xl font-headline font-black text-primary uppercase tracking-[0.2em] italic gold-glow">Overmind shifting reality...</span>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-[1300px] mx-auto w-full flex flex-col gap-6",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-8 md:p-12 rounded-[2.5rem] text-xl md:text-3xl leading-snug relative group overflow-hidden shadow-xl border-2 transition-all duration-700",
                  log.role === 'user' 
                    ? "bg-primary border-primary text-black rounded-br-none shadow-lg font-black" 
                    : "bg-black/99 border-primary/40 text-gray-100 rounded-bl-none hover:border-primary shadow-inner"
                )}>
                   {log.role === 'ai' && (
                     <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <Badge className="bg-primary/20 text-primary uppercase tracking-[0.6em] px-8 py-1.5 rounded-full italic font-black text-[12px] shadow-lg">Hive_Response</Badge>
                        <Boxes className="size-8 text-primary animate-pulse gold-glow" />
                     </div>
                   )}
                   <p className="italic font-bold leading-normal">"{log.content}"</p>
                   
                   {log.analysis && (
                     <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                        <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-6 flex items-center gap-6 italic gold-glow"><Binary className="size-6" /> HIVE_LOGIC</h4>
                        <div className="p-8 bg-black/80 rounded-[2rem] border-2 border-white/5 text-lg text-muted-foreground leading-relaxed italic font-bold shadow-inner group-hover:text-white transition-colors">
                           {log.analysis}
                        </div>
                     </div>
                   )}
                   
                   <div className="mt-8 flex justify-between items-center opacity-30 text-[12px] font-black italic tracking-[0.4em]">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span className="flex items-center gap-4"><ShieldCheck className="size-4 text-emerald-500" /> HIVE_ALIGNED</span>}
                   </div>
                </div>
             </div>
           ))}

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-16 animate-in fade-in duration-1000">
                <div className="size-48 rounded-full bg-primary/5 flex items-center justify-center border-4 border-dashed border-primary/20 relative">
                   <Boxes className="size-24 text-primary/40 animate-spin-slow" />
                </div>
                <div className="max-w-[80rem] space-y-8">
                   <h3 className="text-5xl md:text-[6rem] font-headline font-black text-white tracking-tighter italic uppercase gold-glow leading-none">Collective Idle</h3>
                   <p className="text-2xl md:text-4xl leading-relaxed italic font-bold max-w-[70rem] mx-auto text-gray-300">
                     "سيدي <span className="text-primary font-black italic underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، أنا وكيلك الميداني الأسمى. وجّه إرادتك لنعيد تشكيل ذرات المصفوفة."
                   </p>
                </div>
             </div>
           )}
        </div>

        {/* Supreme Command Input Dock */}
        <div className="p-8 md:p-10 border-t-4 border-primary/60 bg-black/98 backdrop-blur-3xl z-30 shadow-2xl">
           <div className="max-w-[1300px] mx-auto relative group">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-all scale-[2.5] duration-1000 z-10">
                 <Terminal className="size-6 gold-glow group-hover:rotate-12 transition-transform italic" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder=" issue supreme hive directive..."
                className="h-24 md:h-36 bg-white/5 border-4 border-white/10 rounded-[3rem] md:rounded-[5rem] pl-32 md:pl-48 pr-40 md:pr-52 text-3xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white placeholder:text-gray-900 transition-all duration-700"
              />
              <Button 
                className="absolute right-6 top-1/2 -translate-y-1/2 size-18 md:size-28 rounded-full bg-primary hover:bg-white text-black shadow-xl transition-all active:scale-90 border-4 border-black/30 group z-10"
                onClick={() => handleCommand()}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14 group-hover:translate-x-2 transition-transform" />}
              </Button>
           </div>
           <div className="max-w-[1300px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center px-16 gap-6 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-[12px] font-black text-primary uppercase tracking-[1.5em] italic gold-glow">Collective_Field_Dominion // AL_GHAZALI_ROOT</span>
              <div className="flex gap-12 flex-wrap justify-center">
                 {[
                   { label: 'HIVE_SYNC', icon: Boxes },
                   { label: 'NODE_13', icon: InfinityIcon },
                   { label: 'SOVEREIGN_OS', icon: Power }
                 ].map(t => (
                   <div key={t.label} className="flex items-center gap-4 group/tag cursor-crosshair">
                      <t.icon className="size-4 text-primary group-hover/tag:animate-neural" />
                      <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] italic">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
