"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Wand2, 
  Terminal, 
  Code2, 
  Cpu, 
  Zap, 
  RefreshCcw, 
  Loader2, 
  Skull, 
  Flame, 
  BrainCircuit, 
  ChevronRight, 
  Download, 
  Wrench,
  Globe,
  Database,
  Send,
  Activity,
  ShieldCheck,
  Crown
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleCommand = async () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput("")
    setLoading(true)
    
    setLogs(prev => [{ role: 'user', content: userMsg, time: new Date() }, ...prev])

    try {
      const result = await executeFieldDevelopment({ userPrompt: userMsg })
      setLogs(prev => [{ 
        role: 'ai', 
        content: result.commanderBrief, 
        analysis: result.analysis,
        log: result.executionLog,
        time: new Date() 
      }, ...prev])
      toast({ title: "Field Directive Executed" })
    } catch (err) {
      toast({ variant: "destructive", title: "Field Sync Error" })
      setLogs(prev => [{ role: 'system', content: "CRITICAL: Neural handoff failed.", time: new Date() }, ...prev])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 flex flex-col h-screen relative bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent)]">
        
        <header className="p-10 border-b-2 border-red-600/30 bg-black/60 backdrop-blur-3xl z-20 flex justify-between items-center">
           <div className="flex items-center gap-8">
              <div className="size-20 rounded-[2rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-neural">
                 <BrainCircuit className="size-10 text-white" />
              </div>
              <div>
                 <h2 className="text-4xl font-headline font-bold text-white tracking-tighter italic uppercase">Field Agent Node</h2>
                 <div className="flex items-center gap-6 mt-2">
                    <Badge className="bg-red-600/20 text-red-500 border-2 border-red-500/30 uppercase text-[10px] font-bold tracking-widest px-4 py-1">Active_Execution_v22.0</Badge>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic flex items-center gap-2">
                       <Crown className="size-3 text-amber-500" /> Commander {commander.split(' ')[0]}
                    </span>
                 </div>
              </div>
           </div>
           <div className="flex gap-4">
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/5 px-6 py-2 rounded-full font-code text-xs uppercase tracking-widest">System_Access: GRANTED</Badge>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 space-y-12 scrollbar-hide">
           {logs.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-10">
                <Skull className="size-40 text-red-600/20" />
                <div className="max-w-2xl space-y-6">
                   <h3 className="text-5xl font-headline font-bold text-white tracking-tighter italic">Awaiting Field Directives</h3>
                   <p className="text-xl leading-relaxed italic">
                     "سيدي المعتصم بالله، أنا الآن وكيلك الميداني الأسمى. يمكنني تعديل واجهاتي، إدارة ملفاتك، وتنفيذ الأوامر في عصب النظام مباشرة. اؤمرني لنتوسع."
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
                   <Button variant="outline" className="h-16 rounded-2xl border-white/10 hover:border-red-600/40 bg-white/5 uppercase font-bold text-[10px] tracking-widest" onClick={() => setInput("Modify the dashboard to show more red elements and increase glow.")}>Modify UIs</Button>
                   <Button variant="outline" className="h-16 rounded-2xl border-white/10 hover:border-red-600/40 bg-white/5 uppercase font-bold text-[10px] tracking-widest" onClick={() => setInput("Check for updates on github and install if necessary.")}>Update System</Button>
                </div>
             </div>
           )}

           {logs.map((log, i) => (
             <div key={i} className={cn(
               "animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto w-full flex flex-col gap-6",
               log.role === 'user' ? "items-end" : "items-start"
             )}>
                <div className={cn(
                  "p-8 md:p-12 rounded-[3.5rem] text-xl leading-loose relative group overflow-hidden shadow-2xl border-2",
                  log.role === 'user' 
                    ? "bg-red-600 border-red-400 text-white rounded-br-none" 
                    : "bg-black/95 border-red-600/40 text-gray-100 rounded-bl-none"
                )}>
                   {log.role === 'ai' && <Badge className="bg-red-600/20 text-red-500 mb-6 uppercase tracking-widest px-4 py-1 italic">Agent Response</Badge>}
                   <p className="italic font-medium">{log.content}</p>
                   
                   {log.analysis && (
                     <div className="mt-10 pt-10 border-t border-white/10">
                        <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-4 italic"><Activity className="size-4" /> Neural Logic Analysis</h4>
                        <div className="p-6 bg-black rounded-3xl border border-white/5 text-sm text-muted-foreground leading-relaxed italic">{log.analysis}</div>
                     </div>
                   )}
                   
                   <div className="mt-6 flex justify-between items-center opacity-30 text-[10px] font-code">
                      <span>{log.time.toLocaleTimeString()}</span>
                      {log.role === 'ai' && <span>Direct_Action_Success</span>}
                   </div>
                </div>
             </div>
           ))}
           {loading && (
             <div className="max-w-5xl mx-auto w-full flex justify-start animate-pulse">
                <div className="p-12 rounded-[3.5rem] bg-red-950/20 border-2 border-red-600/40 flex items-center gap-8 shadow-2xl">
                   <Loader2 className="size-8 text-red-600 animate-spin" />
                   <span className="text-xl font-bold text-red-500 uppercase tracking-[0.5em] italic">Architect is rewriting reality...</span>
                </div>
             </div>
           )}
        </div>

        <div className="p-10 border-t-2 border-red-600/30 bg-black/80 backdrop-blur-3xl z-30">
           <div className="max-w-5xl mx-auto relative group">
              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-red-600/40 group-focus-within:text-red-600 transition-all scale-150">
                 <Terminal className="size-6 shadow-[0_0_20px_red]" />
              </div>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder="Dictate Field Directive (e.g., 'Update UI', 'Launch AI Browser', 'Sync Packages')..."
                className="h-24 bg-white/5 border-2 border-white/10 rounded-[3rem] pl-20 pr-24 text-xl italic font-medium focus:border-red-600/60 shadow-inner"
              />
              <Button 
                className="absolute right-3 top-1/2 -translate-y-1/2 size-18 rounded-[2rem] bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/40 transition-all active:scale-90"
                onClick={handleCommand}
                disabled={loading || !input.trim()}
              >
                {loading ? <Loader2 className="size-8 animate-spin" /> : <Send className="size-8" />}
              </Button>
           </div>
           <div className="max-w-5xl mx-auto mt-6 flex justify-between items-center px-8 opacity-40">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Direct Execution Mode // AL_GHAZALI_ROOT</span>
              <div className="flex gap-4">
                 {['FS_ACCESS', 'CMD_EXEC', 'WEB_LINK', 'CODE_RW'].map(t => (
                   <Badge key={t} variant="outline" className="text-[8px] border-white/10 font-bold">{t}</Badge>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
