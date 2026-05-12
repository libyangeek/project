
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
  FolderOpen,
  FileCode,
  Search,
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
 * @fileOverview الوكيل الميداني v63.8 - THE SUPREME PROJECT BRAIN
 * مجهز بمستكشف مادي لتحليل المشروع بالكامل ودمج التعديلات الجينية.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [currentPath, setCurrentPath] = React.useState("")
  const [files, setFiles] = React.useState<any[]>([])
  const [selectedFileContent, setSelectedFileContent] = React.useState("")
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
            if (path) setCurrentPath(path)
        }
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
                toast({ title: "File Siphoned", description: `Absorbed DNA from ${file.name}` })
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
        userPrompt: input || "Analyze this segment of the project DNA.",
        projectPath: currentPath,
        fileContent: selectedFileContent
      })
      setAnalysis(result)
      toast({ title: "Genetic Analysis Complete", description: "The Overmind has mapped the project structure." })
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
                 <BrainCircuit className="size-8 md:size-12 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-6xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Project <span className="text-primary">Brain</span></h2>
                 <div className="flex flex-wrap items-center gap-4 mt-3">
                    <Badge className="bg-primary text-black border-none uppercase text-[10px] font-black tracking-[0.5em] px-6 py-1.5 rounded-full italic">v63.8_SELF_AWARE</Badge>
                    <span className="text-[10px] text-muted-foreground uppercase font-black italic truncate max-w-xs">{currentPath || "Root_Matrix"}</span>
                 </div>
              </div>
           </div>
           <div className="hidden xl:flex gap-8 relative z-10">
              <div className="text-right bg-primary/5 p-5 rounded-2xl border-2 border-primary/20 shadow-xl">
                 <div className="text-3xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
                 <div className="text-[9px] text-primary/60 font-black uppercase tracking-[0.4em] mt-1.5 italic">Neural Resonance</div>
              </div>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row relative z-10 overflow-hidden">
           {/* مستكشف الملفات الجيني */}
           <aside className="w-full lg:w-96 border-r-4 border-primary/20 bg-black/80 flex flex-col">
              <div className="p-6 border-b-2 border-primary/10 flex items-center justify-between">
                 <span className="text-[12px] font-black text-primary uppercase tracking-widest italic">Matrix Structure</span>
                 <Button size="icon" variant="ghost" onClick={() => loadDirectory()} className="size-10 rounded-xl hover:bg-primary/20"><RefreshCcw className="size-5"/></Button>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className="p-4 rounded-xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border border-transparent hover:border-primary/20"
                    >
                       <div className="flex items-center gap-4">
                          {file.isDirectory ? <FolderOpen className="size-5 text-primary"/> : <FileCode className="size-5 text-blue-400"/>}
                          <span className="text-xs font-black text-gray-200 group-hover:text-white truncate max-w-[150px]">{file.name}</span>
                       </div>
                       <ChevronRight className="size-4 opacity-30 group-hover:opacity-100 transition-all"/>
                    </div>
                 ))}
              </div>
           </aside>

           {/* ساحة التشريح والتحليل */}
           <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-8 space-y-12 scrollbar-hide">
                 {selectedFileContent ? (
                    <Card className="kali-card border-primary/30 bg-black/99 rounded-[3rem] p-10 shadow-9xl relative group overflow-hidden">
                       <div className="absolute top-4 right-4 flex gap-4">
                          <Badge className="bg-emerald-600/20 text-emerald-400 border-none font-black italic">SIPHONED_CONTENT</Badge>
                          <Button variant="ghost" onClick={() => setSelectedFileContent("")} className="size-10 rounded-full border-2 border-white/10 hover:bg-red-600 transition-all"><XIcon className="size-5"/></Button>
                       </div>
                       <div className="bg-black/95 p-8 rounded-3xl font-code text-sm md:text-xl text-emerald-400 leading-relaxed italic h-[500px] overflow-y-auto scrollbar-hide shadow-inner border-2 border-white/5 whitespace-pre selection:bg-primary selection:text-black">
                          {selectedFileContent}
                       </div>
                    </Card>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                       <Atom className="size-64 text-primary animate-spin-slow" />
                       <h3 className="text-6xl md:text-9xl font-black uppercase tracking-[2em] text-white italic gold-glow leading-none">Waiting DNA</h3>
                       <p className="text-2xl italic font-black text-gray-400 uppercase tracking-widest max-w-4xl mx-auto">Select a file from the structure to siphon its logic for analysis.</p>
                    </div>
                 )}

                 {analysis && (
                    <Card className="kali-card border-emerald-500/40 bg-black/99 rounded-[4rem] p-12 shadow-9xl animate-in zoom-in-95 duration-1000 relative overflow-hidden">
                       <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                       <CardHeader className="p-0 mb-10 border-b-4 border-white/5 pb-8 flex flex-row justify-between items-center bg-emerald-600/5 rounded-t-[3rem] px-10 py-6">
                          <div className="flex items-center gap-8">
                             <div className="size-20 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-xl animate-neural">
                                <Activity className="size-10 text-white" />
                             </div>
                             <CardTitle className="text-4xl md:text-6xl text-white font-black italic uppercase tracking-tighter gold-glow leading-none">Genetic Analysis</CardTitle>
                          </div>
                          <Badge className="bg-emerald-600/30 text-emerald-400 border-4 border-emerald-500/40 px-10 py-4 rounded-full font-black text-2xl animate-pulse italic">DNA_MAPPED</Badge>
                       </CardHeader>
                       <CardContent className="p-6 space-y-12 relative z-10">
                          <div className="p-10 rounded-[3rem] bg-black border-4 border-emerald-500/20 italic text-2xl md:text-5xl text-gray-100 leading-tight font-black shadow-inner">
                             "{analysis.commanderBrief}"
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="p-8 bg-white/5 rounded-[3rem] border-2 border-white/10 space-y-6">
                                <h5 className="text-xl font-black text-primary uppercase tracking-[0.6em] border-b-2 border-primary/20 pb-4 italic">Neural Findings</h5>
                                <p className="text-lg text-gray-300 font-bold italic leading-relaxed">"{analysis.analysis}"</p>
                             </div>
                             <div className="p-8 bg-white/5 rounded-[3rem] border-2 border-white/10 space-y-6">
                                <h5 className="text-xl font-black text-emerald-500 uppercase tracking-[0.6em] border-b-2 border-emerald-500/20 pb-4 italic">Proposed Re-coding</h5>
                                <p className="text-lg text-gray-100 font-black italic leading-relaxed">"{analysis.suggestedChanges}"</p>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                 )}
              </div>

              {/* حقل الأوامر الذكي */}
              <div className="p-8 border-t-4 border-primary/60 bg-black/98 backdrop-blur-5xl">
                 <div className="max-w-6xl mx-auto relative group">
                    <Terminal className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-primary/40 group-focus-within:text-primary transition-all duration-700" />
                    <Input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleDeepAnalysis()}
                        placeholder=" Instruct the project brain to analyze specific logic..." 
                        className="h-28 md:h-36 bg-white/5 border-4 border-white/10 rounded-[3rem] md:rounded-[4rem] pl-24 pr-48 text-2xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white transition-all duration-700 placeholder:text-gray-900 selection:bg-primary"
                    />
                    <Button 
                        onClick={handleDeepAnalysis}
                        disabled={loading || !input.trim()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-28 rounded-full bg-primary hover:bg-white text-black shadow-9xl transition-all border-4 border-black/20 group active:scale-90"
                    >
                        {loading ? <Loader2 className="size-10 md:size-14 animate-spin" /> : <Send className="size-10 md:size-14 group-hover:translate-x-2 transition-transform" />}
                    </Button>
                 </div>
              </div>
           </div>
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
