
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
  X,
  Save,
  Dna,
  History,
  HardDrive,
  Boxes,
  FileText
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview الوكيل الميداني v64.0 - THE SUPREME SYSTEM EXPLORER & INJECTOR
 * واجهة السيطرة المادية الكاملة والمزامنة الجينية مع Integrity.
 * تم تمكين القدرات الحقيقية للتعامل مع القرص الصلب لعام 2026.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [customPath, setCustomPath] = React.useState("/home/project")
  const [currentPath, setCurrentPath] = React.useState("")
  const [files, setFiles] = React.useState<any[]>([])
  const [selectedFileContent, setSelectedFileContent] = React.useState("")
  const [selectedFileName, setSelectedFileName] = React.useState("")
  const [selectedFilePath, setSelectedFilePath] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [analysis, setAnalysis] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100.00)

  React.useEffect(() => {
    setMounted(true)
    loadDirectory("/home/project")
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const loadDirectory = async (path: string) => {
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
            setCurrentPath(data.currentPath)
            setCustomPath(data.currentPath)
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
                setSelectedFilePath(file.path)
                toast({ title: "DNA Siphoned", description: `Absorbed ${file.name}` })
            }
        } finally {
            setLoading(false)
        }
    }
  }

  const handleSovereignAction = async (mode: 'project_analysis' | 'integrity_sync' | 'file_fix') => {
    setLoading(true)
    setAnalysis(null)
    
    // إذا كان التحليل للمشروع بالكامل، نقوم بقراءة عينة من الملفات أولاً
    let contextData = selectedFileContent;
    if (mode === 'project_analysis') {
        const importantFiles = files.filter(f => !f.isDirectory && f.name.match(/\.(ts|tsx|json|sh|py)$/)).slice(0, 5);
        const batchRes = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'read_batch', batchPaths: importantFiles.map(f => f.path) })
        });
        const batchData = await batchRes.json();
        if (batchData.success) {
            contextData = JSON.stringify(batchData.output);
        }
    }

    try {
      toast({ title: "Hierarchy Engaging", description: `Orchestrating ${mode.replace('_', ' ')}...` })
      const result = await executeFieldDevelopment({ 
        userPrompt: input || "Execute absolute project DNA analysis.",
        projectPath: currentPath,
        currentFile: selectedFileName,
        fileContent: contextData,
        mode: mode
      })
      setAnalysis(result)
      toast({ title: "Consensus Achieved", description: "The Overmind has mapped the target logic." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Conflict" })
    } finally {
      setLoading(false)
    }
  }

  const handleGeneticInjection = async () => {
    if (!selectedFilePath || !selectedFileContent) return;
    setLoading(true);
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'write_file', 
                path: selectedFilePath, 
                content: selectedFileContent 
            })
        })
        const data = await response.json()
        if (data.success) {
            toast({ title: "Genetic Fusion Success", description: "File DNA rewritten in the matrix." })
        } else {
            toast({ variant: "destructive", title: "Injection Failed", description: data.error })
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Spine Relay Error" })
    } finally {
        setLoading(false)
    }
  }

  const navigateBack = () => {
      const parts = currentPath.split('/').filter(p => p !== '');
      parts.pop();
      const parent = '/' + parts.join('/');
      loadDirectory(parent === '' ? '/' : parent);
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        {/* Header - Fixed Top */}
        <header className="p-6 border-b-2 border-primary/20 bg-black/90 backdrop-blur-3xl z-30 flex flex-col md:flex-row justify-between items-center gap-6 shrink-0 shadow-2xl">
           <div className="flex items-center gap-6">
              <div className="size-14 rounded-2xl bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural">
                 <HardDrive className="size-8 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <div className="flex items-center gap-3 mt-2">
                    <Badge className="bg-primary/10 text-primary border-none text-[8px] font-black italic tracking-widest px-4 py-0.5 rounded-full shadow-lg">v64.0_OMNIPRESENT</Badge>
                    <span className="text-[10px] text-emerald-500 font-black animate-pulse uppercase tracking-[0.2em]">{resonance.toFixed(6)}% Resonance</span>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border-2 border-white/10 w-full max-w-2xl shadow-inner group">
              <Input 
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)}
                placeholder="Enter Sector Path (e.g. /home/project, /etc)..." 
                className="bg-transparent border-none focus-visible:ring-0 text-sm italic font-black text-white h-10 placeholder:text-gray-800"
              />
              <Button onClick={() => loadDirectory(customPath)} className="h-10 px-8 rounded-xl bg-primary hover:bg-white text-black font-black uppercase text-xs italic shadow-xl active:scale-95 transition-all">Jump_Sector</Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
           
           {/* File Tree - Fixed Left */}
           <aside className="w-full lg:w-96 border-l-2 border-primary/20 bg-black/60 flex flex-col shrink-0 order-last lg:order-none shadow-9xl">
              <div className="p-6 border-b-2 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[11px] font-black text-primary uppercase tracking-widest italic flex items-center gap-3">
                        <Database className="size-4" /> Physical DNA
                    </span>
                    <span className="text-[9px] text-muted-foreground truncate max-w-[200px] mt-2 font-bold">{currentPath}</span>
                 </div>
                 <div className="flex gap-2">
                    <Button size="icon" variant="ghost" onClick={navigateBack} className="size-10 rounded-xl border border-white/5 hover:bg-primary/20 shadow-xl"><ChevronLeft className="size-5"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-10 rounded-xl border border-white/5 hover:bg-primary/20 shadow-xl"><RefreshCcw className="size-4"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
                 {files.length > 0 ? files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className={cn(
                            "p-3 rounded-xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-2 border-transparent hover:border-primary/30 active:scale-95",
                            selectedFileName === file.name && "bg-primary/10 border-primary/40 shadow-inner"
                        )}
                    >
                       <div className="flex items-center gap-4">
                          {file.isDirectory ? <FolderOpen className="size-5 text-primary animate-pulse"/> : <FileCode className="size-5 text-blue-400"/>}
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black text-gray-300 group-hover:text-white truncate max-w-[200px] italic">{file.name}</span>
                            {!file.isDirectory && <span className="text-[8px] text-muted-foreground uppercase font-bold">{(file.size / 1024).toFixed(1)} KB</span>}
                          </div>
                       </div>
                       <ChevronRight className="size-4 opacity-10 group-hover:opacity-100 transition-all group-hover:translate-x-1"/>
                    </div>
                 )) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-10 gap-6">
                        <Search className="size-16 animate-spin-slow" />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Empty Sector</span>
                    </div>
                 )}
              </div>
           </aside>

           {/* Workspace Area */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/40">
              <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide pb-40">
                 
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <Card className="kali-card border-primary/20 bg-black/90 rounded-[3rem] p-6 shadow-2xl relative overflow-hidden flex flex-col h-[700px]">
                       <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none scale-150 rotate-12"><Binary className="size-48 text-primary"/></div>
                       <div className="flex justify-between items-center mb-6 px-4">
                          <div className="flex items-center gap-6">
                             <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/40 shadow-xl">
                                <Code2 className="size-8 text-primary gold-glow" />
                             </div>
                             <div>
                                <h4 className="text-2xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4>
                                <span className="text-[10px] text-primary/60 font-black uppercase tracking-[0.4em] mt-2 block">{selectedFileName || "Waiting for Selection..."}</span>
                             </div>
                          </div>
                          {selectedFileName && (
                            <Button onClick={handleGeneticInjection} className="h-12 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.2em] rounded-xl border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all px-8">
                               <Save className="size-5 mr-3" /> Sync_DNA
                            </Button>
                          )}
                       </div>
                       <div className="flex-1 relative">
                          {selectedFileName ? (
                            <Textarea 
                                value={selectedFileContent}
                                onChange={(e) => setSelectedFileContent(e.target.value)}
                                className="h-full bg-black/99 p-8 rounded-[2rem] font-code text-xs md:text-sm text-emerald-400 leading-relaxed italic border-4 border-white/5 shadow-inner whitespace-pre selection:bg-primary selection:text-black resize-none scrollbar-hide"
                            />
                          ) : (
                            <div className="h-full border-4 border-dashed border-primary/5 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-10 gap-8">
                                <Atom className="size-32 text-primary animate-spin-slow" />
                                <h3 className="text-4xl font-black uppercase tracking-[1em] text-white italic">Awaiting DNA</h3>
                            </div>
                          )}
                       </div>
                    </Card>

                    <div className="space-y-8">
                       <Card className="kali-card border-primary/20 bg-black/90 rounded-[3rem] p-8 shadow-2xl flex flex-col min-h-[400px]">
                          <div className="flex items-center justify-between mb-8 border-b-2 border-white/5 pb-6">
                             <div className="flex items-center gap-6">
                                <div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-xl animate-neural">
                                   <BrainCircuit className="size-10 text-black" />
                                </div>
                                <h4 className="text-3xl font-black italic gold-glow uppercase tracking-tighter">Overmind Intelligence</h4>
                             </div>
                             <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/30 px-6 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">ACTIVE</Badge>
                          </div>
                          
                          {analysis ? (
                             <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                                <div className="p-8 bg-primary/5 rounded-[2.5rem] border-4 border-primary/20 shadow-inner">
                                   <p className="text-xl md:text-2xl text-white font-black italic leading-relaxed text-center">"{analysis.commanderBrief}"</p>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                   <div className="p-8 bg-black/60 rounded-[2rem] border-2 border-white/5 shadow-xl">
                                      <span className="text-[11px] font-black text-primary uppercase block mb-4 tracking-[0.8em] italic">Structural Mapping</span>
                                      <p className="text-sm md:text-lg text-gray-300 leading-relaxed italic font-bold">{analysis.analysis}</p>
                                   </div>
                                   <div className="p-8 bg-emerald-600/5 rounded-[2rem] border-2 border-emerald-500/20 shadow-xl">
                                      <span className="text-[11px] font-black text-emerald-500 uppercase block mb-4 tracking-[0.8em] italic">Genetic Fusion Plan</span>
                                      <p className="text-sm md:text-lg text-gray-100 leading-relaxed font-black italic">{analysis.geneticPlan}</p>
                                   </div>
                                </div>
                             </div>
                          ) : (
                             <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-10">
                                <Boxes className="size-32 text-primary animate-pulse" />
                                <h3 className="text-4xl font-black uppercase tracking-[0.8em] text-white italic">Searching Matrix</h3>
                             </div>
                          )}
                       </Card>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Button 
                             onClick={() => handleSovereignAction('project_analysis')}
                             disabled={loading}
                             className="h-28 bg-white/5 border-4 border-primary/20 hover:border-primary hover:bg-primary/10 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 transition-all duration-700 shadow-xl group active:scale-95"
                          >
                             <Search className="size-10 text-primary group-hover:scale-125 transition-transform gold-glow" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Analyze_Sector_DNA</span>
                          </Button>
                          <Button 
                             onClick={() => handleSovereignAction('integrity_sync')}
                             disabled={loading}
                             className="h-28 bg-white/5 border-4 border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/10 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 transition-all duration-700 shadow-xl group active:scale-95"
                          >
                             <RefreshCcw className="size-10 text-emerald-400 group-hover:rotate-180 transition-all duration-1000" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Integrity_Sync_v64</span>
                          </Button>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Command Input - Fixed Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/95 backdrop-blur-5xl border-t-8 border-primary/60 z-30 shadow-[0_-50px_200px_rgba(0,0,0,1)]">
                 <div className="max-w-6xl mx-auto relative group">
                    <Terminal className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-primary/40 group-focus-within:text-primary transition-all duration-1000 gold-glow" />
                    <Input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSovereignAction('file_fix')}
                        placeholder=" Direct the Agent to analyze DNA or fuse Integrity mutations..." 
                        className="h-24 md:h-28 bg-primary/5 border-4 border-white/10 rounded-full pl-24 pr-40 text-xl md:text-3xl italic font-black focus:border-primary shadow-inner text-white transition-all duration-700 placeholder:text-gray-900 selection:bg-primary selection:text-black"
                    />
                    <Button 
                        onClick={() => handleSovereignAction('file_fix')}
                        disabled={loading || !input.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-16 md:size-20 bg-primary hover:bg-white text-black rounded-full shadow-9xl transition-all active:scale-90 border-[10px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-10 animate-spin" /> : <Send className="size-10 group-hover:translate-x-3 transition-transform" />}
                    </Button>
                 </div>
                 <div className="flex justify-center gap-16 mt-6 opacity-30 text-[10px] font-black uppercase tracking-[4em] italic">
                    <span className="flex items-center gap-4"><Fingerprint className="size-4 text-primary" /> GHAZALI_ROOT</span>
                    <span className="flex items-center gap-4 text-primary"><InfinityIcon className="size-4 animate-pulse" /> SPINE_SYNC_v64</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="shrink-0 p-2 border-t border-white/5 flex justify-center items-center gap-10 opacity-30 text-[8px] font-black uppercase tracking-[3em] italic">
            <span>AL-MUIZZ OMNIPRESENT EXPLORER v64.0</span>
            <div className="size-1 rounded-full bg-white animate-pulse" />
            <span>TOTAL_SYSTEM_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
