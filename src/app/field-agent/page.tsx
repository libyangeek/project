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
  Unplug
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة التطوير والتحاور الميداني v22.0
 * تتيح للقائد إعطاء أوامر تنفيذية مباشرة للمُعِزّ لتعديل النظام أو العتاد.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [logs, setLogs] = React.useState<any[]>([])
  const commander = "المعتصم بالله ادريس الغزالي"
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
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
      toast({ title: "Field Directive Executed" })
    } catch (err) {
      toast({ variant: "destructive", title: "Field Sync Error" })
      setLogs(prev => [{ role: 'system', content: "CRITICAL: Neural handoff failed. Link with OS unstable.", time: new Date() }, ...prev])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 flex flex-col h-screen relative bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent)]">
        
        {/* Field Header */}
        <header className="p-8 md:p-10 border-b-2 border-red-600/30 bg-black/80 backdrop-blur-3xl z-20 flex justify-between items-center shadow-2xl">
           <div className="flex items-center gap-6 md:gap-10">
              <div className="size-16 md:size-24 rounded-[1.5rem] md:rounded-[3rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_80px_rgba(220,38,38,0.7)] animate-neural">
                 <BrainCircuit className="size-8 md:size-14 text-white" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase drop-shadow-[0_0_20px_red]">Field Agent Node</h2>
                 <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-3">
                    <Badge className="bg-red-600/20 text-red-500 border-2 border-red-500/30 uppercase text-[9px] md:text-[11px] font-bold tracking-widest px-4 py-1 animate-pulse">Active_Execution_v22.0</Badge>
                    <span className="text-[9px] md:text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic flex items-center gap-3">
                       <Crown className="size-4 text-amber-500" /> Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="hidden lg:flex gap-6">
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/5 px-8 py-3 rounded-full font-code text-xs uppercase tracking-widest shadow-2xl">System_Access: GRANTED</Badge>
              <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-500/5 px-8 py-3 rounded-full font-code text-xs uppercase tracking-widest shadow-2xl">Mode: SELF_MODIFICATION</Badge>
           </div>
        </header>

        {/* Console / Log Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-16 space-y-16 scrollbar-hide flex flex-col-reverse">
           <div ref={scrollRef} />
           
           {loading && (
             <div className="max-w-6xl mx-auto w-full flex justify-start animate-in slide-in-from-left-8 duration-500">
                <div className="p-10 md:p-16 rounded-[3rem] md:rounded-[5rem] bg-red-950/30 border-4 border-red-600/40 flex items-center gap-10 shadow-[0_0_100px_rgba(220,38,38,0.2)]">
                   <div className="flex gap-4">
                      <div className="size-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
                      <div className="size-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
                      <div className="size-3 rounded-full bg-red-600 animate-bounce" />
                   </div>
                   <span className="text-xl md:text-3xl font-bold text-red-500 uppercase tracking-[0.4em] italic">Architect is rewriting reality...</span>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-6xl mx-auto w-full flex flex-col gap-8",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-8 md:p-16 rounded-[4rem] text-2xl md:text-3xl leading-relaxed relative group overflow-hidden shadow-4xl border-4 transition-all duration-700",
                  log.role === 'user' 
                    ? "bg-red-600 border-red-400 text-white rounded-br-none shadow-[0_40px_100px_rgba(220,38,38,0.4)]" 
                    : "bg-black/95 border-red-600/40 text-gray-100 rounded-bl-none"
                )}>
                   {log.role === 'ai' && (
                     <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                        <Badge className="bg-red-600/30 text-red-500 uppercase tracking-widest px-6 py-2 rounded-2xl italic font-bold">Agent Response</Badge>
                        <Sparkles className="size-6 text-amber-500 animate-pulse" />
                     </div>
                   )}
                   <p className="italic font-medium drop-shadow-lg">{log.content}</p>
                   
                   {log.analysis && (
                     <div className="mt-12 pt-12 border-t-2 border-white/10 space-y-8">
                        <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[1em] mb-6 flex items-center gap-6 italic"><Activity className="size-5" /> Neural Logic Analysis</h4>
                        <div className="p-10 bg-black/60 rounded-[2.5rem] border-2 border-white/5 text-lg text-muted-foreground leading-loose italic font-medium">
                           {log.analysis}
                        </div>
                     </div>
                   )}

                   {log.execLog && log.execLog.length > 0 && (
                      <div className="mt-12 space-y-6">
                         <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[1em] px-4 italic flex items-center gap-4"><Zap className="size-5" /> Execution Trace</h4>
                         <div className="grid grid-cols-1 gap-4">
                            {log.execLog.map((trace: any, idx: number) => (
                               <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border-2 border-white/10 rounded-3xl group/trace hover:border-emerald-500/50 transition-all">
                                  <div className="flex items-center gap-6">
                                     <div className="size-10 rounded-xl bg-black flex items-center justify-center border border-white/10"><Code2 className="size-5 text-emerald-500" /></div>
                                     <span className="text-sm font-bold uppercase tracking-widest text-white/80">{trace.action}</span>
                                  </div>
                                  <Badge className={cn(
                                    "font-code text-[10px] px-4 py-1 rounded-full border-2",
                                    trace.status === 'SUCCESS' ? 'bg-emerald-600/20 text-emerald-500 border-emerald-500/30' : 'bg-red-600/20 text-red-500 border-red-500/30'
                                  )}>{trace.status}</Badge>
                               </div>
                            ))}
                         </div>
                      </div>
                   )}
                   
                   <div className="mt-8 flex justify-between items-center opacity-30 text-[11px] font-code font-bold tracking-widest">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span>NODE_EXEC_VERIFIED</span>}
                   </div>
                </div>
             </div>
           ))}

           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-40 gap-16 animate-in fade-in duration-1000">
                <div className="size-48 rounded-full bg-red-600/5 flex items-center justify-center border-4 border-dashed border-red-600/20">
                   <Skull className="size-24 text-red-600/40" />
                </div>
                <div className="max-w-3xl space-y-8">
                   <h3 className="text-6xl font-headline font-bold text-white tracking-tighter italic uppercase">Awaiting Directives</h3>
                   <p className="text-2xl leading-relaxed italic font-medium">
                     "سيدي المعتصم بالله، أنا الآن وكيلك الميداني الأسمى. يمكنني تعديل واجهاتي، إدارة ملفاتك، وتنفيذ الأوامر في عصب النظام مباشرة. اؤمرني لنتوسع."
                   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-8">
                   <Button variant="outline" className="h-24 rounded-[2.5rem] border-white/10 hover:border-red-600/40 bg-white/5 uppercase font-bold text-[12px] tracking-[0.5em] transition-all duration-700 shadow-xl group" onClick={() => handleCommand("Analyze the current dashboard code and suggest three visual improvements for a more aggressive look.")}>
                      <Code2 className="size-6 mr-6 text-red-500 group-hover:scale-125 transition-transform" /> Analyze UI Logic
                   </Button>
                   <Button variant="outline" className="h-24 rounded-[2.5rem] border-white/10 hover:border-red-600/40 bg-white/5 uppercase font-bold text-[12px] tracking-[0.5em] transition-all duration-700 shadow-xl group" onClick={() => handleCommand("Check system updates and sync all evolutionary nodes via systemExec.")}>
                      <RefreshCcw className="size-6 mr-6 text-red-500 group-hover:rotate-180 transition-transform" /> Sync System State
                   </Button>
                </div>
             </div>
           )}
        </div>

        {/* Command Input Dock */}
        <div className="p-8 md:p-12 border-t-2 border-red-600/30 bg-black/90 backdrop-blur-3xl z-30 shadow-[0_-40px_100px_rgba(0,0,0,0.8)]">
           <div className="max-w-6xl mx-auto relative group">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within:text-red-600 transition-all scale-150">
                 <Terminal className="size-8 drop-shadow-[0_0_15px_red]" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder="Dictate Field Directive (e.g., 'Update UI', 'Launch AI Browser', 'Install Nmap', 'Purge Evidence')..."
                className="h-24 md:h-32 bg-white/5 border-4 border-white/10 rounded-[3rem] md:rounded-[5rem] pl-24 md:pl-28 pr-32 md:pr-40 text-2xl md:text-4xl italic font-medium focus:border-red-600/70 shadow-inner transition-all placeholder:text-red-950/30"
              />
              <Button 
                className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-24 rounded-[2.5rem] md:rounded-[4rem] bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/60 transition-all active:scale-90 border-4 border-red-400/40"
                onClick={() => handleCommand()}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14" />}
              </Button>
           </div>
           <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center px-12 gap-6 opacity-50">
              <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-[1em] italic">Direct Field Execution // AL_GHAZALI_ROOT</span>
              <div className="flex gap-8">
                 {[
                   { label: 'FS_ACCESS', icon: HardDrive },
                   { label: 'CMD_EXEC', icon: Terminal },
                   { label: 'WEB_LINK', icon: Unplug },
                   { label: 'CODE_RW', icon: Code2 }
                 ].map(t => (
                   <div key={t.label} className="flex items-center gap-3">
                      <t.icon className="size-3 text-red-500" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-widest">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
