
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
  Wrench,
  RefreshCcw,
  Zap,
  Code2,
  ChevronRight,
  ShieldCheck,
  Binary,
  Atom,
  Fingerprint,
  FolderOpen,
  FileCode,
  Search,
  ChevronLeft,
  Infinity as InfinityIcon,
  Monitor,
  Database,
  X
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview الوكيل الميداني v63.9 - THE SUPREME SYSTEM EXPLORER
 * واجهة معالجة مادية تتيح تصفح "كامل الجهاز" وتحليل الـ DNA البرمجي لدمج التعديلات الخارجية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [customPath, setCustomPath] = React.useState("")
  const [currentPath, setCurrentPath] = React.useState("")
  const [files, setFiles] = React.useState<any[]>([])
  const [selectedFileContent, setSelectedFileContent] = React.useState("")
  const [selectedFileName, setSelectedFileName] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [analysis, setAnalysis] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100.00)

  React.useEffect(() => {
    setMounted(true)
    loadDirectory()
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const loadDirectory = async (path: string = "") => {
    setLoading(true)
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'list_dir', path: path })
        })
        const data = await response.json()
        if (data.success) {
            setFiles(data.output)
            setCurrentPath(data.currentPath || path || "ROOT")
            setCustomPath(data.currentPath || "")
        } else {
            toast({ variant: "destructive", title: "Access Restricted", description: data.error })
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Neural Link Error" })
    } finally {
        setLoading(false)
    }
  }

  const handleFileSelect = async (file: any) => {
    if (file.isDirectory) {
        loadDirectory(file.path)
    } else {
        setLoading(true)
        try {
            const response = await fetch('/api/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'read_file', path: file.path })
            })
            const data = await response.json()
            if (data.success) {
                setSelectedFileContent(data.output)
                setSelectedFileName(file.name)
                toast({ title: "DNA Siphoned", description: `Absorbed content from ${file.name}` })
            }
        } finally {
            setLoading(false)
        }
    }
  }

  const handleDeepAnalysis = async () => {
    setLoading(true)
    setAnalysis(null)
    try {
      const result = await executeFieldDevelopment({ 
        userPrompt: input || "Analyze this segment of the system DNA for integrity sync.",
        projectPath: currentPath,
        fileContent: selectedFileContent
      })
      setAnalysis(result)
      toast({ title: "Structural Analysis Complete", description: "The Overmind has mapped the target logic." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" })
    } finally {
      setLoading(false)
    }
  }

  const navigateBack = () => {
      const parts = currentPath.split('/');
      parts.pop();
      const parent = parts.join('/') || "/";
      loadDirectory(parent);
  }

  const jumpToPath = () => {
      if (customPath.trim()) {
          loadDirectory(customPath.trim());
      }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      {/* منطقة المحتوى الرئيسية */}
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent)] pointer-events-none z-0" />
        
        {/* رأس الصفحة السيادي */}
        <header className="p-6 md:p-8 border-b-2 border-primary/20 bg-black/90 backdrop-blur-xl z-20 flex justify-between items-center shrink-0">
           <div className="flex items-center gap-6">
              <div className="size-12 md:size-16 rounded-xl bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-neural">
                 <Monitor className="size-6 md:size-8 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-xl md:text-3xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">System <span className="text-primary">Explorer</span></h2>
                 <div className="flex items-center gap-3 mt-2">
                    <Badge className="bg-primary text-black border-none uppercase text-[8px] font-black tracking-widest px-3 py-0.5 rounded-full italic">v63.9_MATERIAL_ACCESS</Badge>
                    <span className="text-[9px] text-muted-foreground uppercase font-black italic truncate max-w-[200px] md:max-w-md">Device Pulse: {resonance.toFixed(4)}%</span>
                 </div>
              </div>
           </div>
           
           {/* حقل القفز للمسارات المطلقة */}
           <div className="hidden md:flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10 w-full max-w-xl">
              <div className="size-10 rounded-xl bg-black flex items-center justify-center border border-primary/20">
                <Search className="size-4 text-primary/40" />
              </div>
              <Input 
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && jumpToPath()}
                placeholder="Jump to Absolute Path (e.g. /etc, /home/user)..." 
                className="bg-transparent border-none focus-visible:ring-0 text-xs italic font-black text-white h-10"
              />
              <Button onClick={jumpToPath} variant="ghost" className="h-10 px-6 rounded-xl hover:bg-primary hover:text-black font-black uppercase text-[10px]">Jump</Button>
           </div>
        </header>

        {/* مساحة العمل المقسمة */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
           
           {/* مستكشف الملفات المادي (يسار) */}
           <aside className="w-full lg:w-96 border-l-2 border-primary/10 bg-black/40 flex flex-col shrink-0 order-last lg:order-none">
              <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest italic flex items-center gap-2">
                        <FolderOpen className="size-3" /> Hardware DNA
                    </span>
                    <span className="text-[8px] text-muted-foreground truncate max-w-[150px] mt-1">{currentPath}</span>
                 </div>
                 <div className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={navigateBack} className="size-8 rounded-lg hover:bg-primary/20"><ChevronLeft className="size-4"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-8 rounded-lg hover:bg-primary/20"><RefreshCcw className="size-4"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className={cn(
                            "p-3 rounded-lg hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border border-transparent hover:border-primary/20",
                            selectedFileName === file.name && "bg-primary/10 border-primary/30 shadow-inner"
                        )}
                    >
                       <div className="flex items-center gap-3">
                          {file.isDirectory ? <FolderOpen className="size-4 text-primary"/> : <FileCode className="size-4 text-blue-400"/>}
                          <span className="text-[11px] font-bold text-gray-300 group-hover:text-white truncate max-w-[180px]">{file.name}</span>
                       </div>
                       <ChevronRight className="size-3 opacity-20 group-hover:opacity-100 transition-all"/>
                    </div>
                 ))}
                 {files.length === 0 && !loading && (
                     <div className="p-10 text-center opacity-20 italic text-[10px] uppercase font-black">Chamber Empty</div>
                 )}
              </div>
           </aside>

           {/* ساحة التشريح والتحليل (وسط) */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/20">
              <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide pb-32">
                 
                 {selectedFileContent ? (
                    <Card className="kali-card border-primary/20 bg-black/80 rounded-3xl p-6 shadow-2xl relative group overflow-hidden">
                       <div className="absolute top-3 right-4 flex gap-2 z-20">
                          <Badge className="bg-emerald-600/20 text-emerald-400 border-none font-black text-[8px] italic">DNA_ABSORBED</Badge>
                          <Button variant="ghost" size="icon" onClick={() => setSelectedFileContent("")} className="size-6 rounded-full hover:bg-red-600"><X className="size-3"/></Button>
                       </div>
                       <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4 italic px-2">{selectedFileName}</h4>
                       <div className="bg-black/60 p-6 rounded-2xl font-code text-xs md:text-sm text-emerald-400 leading-relaxed italic h-[500px] overflow-y-auto scrollbar-hide shadow-inner border border-white/5 whitespace-pre selection:bg-primary selection:text-black">
                          {selectedFileContent}
                       </div>
                    </Card>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-8 py-20">
                       <Atom className="size-32 text-primary animate-spin-slow" />
                       <div>
                          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white italic gold-glow mb-2">Device Matrix</h3>
                          <p className="text-xs italic font-black text-gray-500 uppercase tracking-widest">Select a DNA segment from the hardware structure to begin siphoning.</p>
                       </div>
                    </div>
                 )}

                 {analysis && (
                    <Card className="kali-card border-emerald-500/30 bg-black/90 rounded-[2.5rem] p-8 shadow-9xl animate-in zoom-in-95 duration-1000 relative overflow-hidden">
                       <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                       <CardHeader className="p-0 mb-6 border-b-2 border-white/5 pb-4 flex flex-row justify-between items-center bg-emerald-600/5 px-6 py-4 rounded-t-2xl">
                          <div className="flex items-center gap-4">
                             <div className="size-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg">
                                <Activity className="size-6 text-white" />
                             </div>
                             <CardTitle className="text-xl md:text-2xl text-white font-black italic uppercase gold-glow">Genetic Analysis</CardTitle>
                          </div>
                          <Badge className="bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-4 py-1 rounded-full font-black text-xs animate-pulse">DNA_STABLE</Badge>
                       </CardHeader>
                       <CardContent className="p-4 space-y-8 relative z-10">
                          <div className="p-6 rounded-2xl bg-black border border-emerald-500/20 italic text-lg md:text-2xl text-gray-100 leading-tight font-black shadow-inner">
                             "{analysis.commanderBrief}"
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                                <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] border-b border-primary/20 pb-2 italic">Neural Insights</h5>
                                <p className="text-[13px] text-gray-300 font-bold italic leading-relaxed">{analysis.analysis}</p>
                             </div>
                             <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                                <h5 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] border-b border-emerald-500/20 pb-2 italic">Integrity Modifications</h5>
                                <p className="text-[13px] text-gray-100 font-black italic leading-relaxed">{analysis.suggestedChanges}</p>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                 )}
              </div>

              {/* حقل الأوامر الجيني */}
              <div className="absolute bottom-0 left-0 lg:left-0 right-0 p-6 bg-black/95 backdrop-blur-2xl border-t-2 border-primary/40">
                 <div className="max-w-5xl mx-auto relative group">
                    <Terminal className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-primary/40 group-focus-within:text-primary transition-all" />
                    <Input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleDeepAnalysis()}
                        placeholder=" Instruct the agent to analyze the current system DNA..." 
                        className="h-16 md:h-20 bg-white/5 border-2 border-white/10 rounded-[2rem] pl-16 pr-32 text-lg md:text-xl italic font-black focus:border-primary shadow-inner text-white transition-all placeholder:text-gray-900 selection:bg-primary"
                    />
                    <Button 
                        onClick={handleDeepAnalysis}
                        disabled={loading || !input.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-12 md:size-14 rounded-full bg-primary hover:bg-white text-black shadow-lg transition-all border-4 border-black/20 group active:scale-90"
                    >
                        {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                 </div>
              </div>
           </div>
        </div>

        <div className="shrink-0 p-3 border-t border-white/5 flex justify-center items-center gap-10 opacity-30 text-[8px] font-black uppercase tracking-[2em] italic">
            <span>AL-MUIZZ SYSTEM EXPLORER v63.9</span>
            <div className="size-1.5 rounded-full bg-white animate-pulse shadow-[0_0_20px_white]" />
            <span>MATERIAL_CONSENSUS_2026</span>
        </div>
      </main>
    </div>
  )
}

function XIcon({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    )
}
