
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
  History
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
 * تم تحسين الواجهة لفك التداخل ودعم "الحقن الجيني" لمزامنة تعديلات Integrity.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [customPath, setCustomPath] = React.useState("")
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
                setSelectedFilePath(file.path)
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
        userPrompt: input || "Analyze this system DNA for integrity sync.",
        projectPath: currentPath,
        fileContent: selectedFileContent
      })
      setAnalysis(result)
      toast({ title: "Analysis Complete", description: "The Overmind has mapped the target logic." })
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
            toast({ title: "Genetic Fusion Success", description: "The file DNA has been rewritten in the matrix." })
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
      const parts = currentPath.split('/');
      parts.pop();
      const parent = parts.join('/') || "/";
      loadDirectory(parent);
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent)] pointer-events-none z-0" />
        
        <header className="p-6 border-b-2 border-primary/20 bg-black/90 backdrop-blur-xl z-20 flex justify-between items-center shrink-0">
           <div className="flex items-center gap-6">
              <div className="size-12 rounded-xl bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-neural">
                 <Wrench className="size-6 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Field <span className="text-primary">Agent</span></h2>
                 <span className="text-[8px] text-muted-foreground uppercase font-black italic mt-1 block">v64.0_GENETIC_SYNC</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-white/5 p-1.5 rounded-xl border border-white/10 w-full max-w-lg">
              <Input 
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)}
                placeholder="Enter Absolute Linux Path (e.g. /opt/sovereign-ai-platform)..." 
                className="bg-transparent border-none focus-visible:ring-0 text-[10px] italic font-black text-white h-8"
              />
              <Button onClick={() => loadDirectory(customPath)} variant="ghost" className="h-8 px-4 rounded-lg hover:bg-primary hover:text-black font-black uppercase text-[9px]">Jump</Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
           
           <aside className="w-full lg:w-80 border-l-2 border-primary/10 bg-black/40 flex flex-col shrink-0 order-last lg:order-none">
              <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest italic flex items-center gap-2">
                        <FolderOpen className="size-3" /> Matrix Structure
                    </span>
                    <span className="text-[7px] text-muted-foreground truncate max-w-[120px] mt-1">{currentPath}</span>
                 </div>
                 <div className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={navigateBack} className="size-7 rounded-lg hover:bg-primary/20"><ChevronLeft className="size-3"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-7 rounded-lg hover:bg-primary/20"><RefreshCcw className="size-3"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className={cn(
                            "p-2 rounded-lg hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border border-transparent hover:border-primary/20",
                            selectedFileName === file.name && "bg-primary/10 border-primary/30"
                        )}
                    >
                       <div className="flex items-center gap-3">
                          {file.isDirectory ? <FolderOpen className="size-3.5 text-primary"/> : <FileCode className="size-3.5 text-blue-400"/>}
                          <span className="text-[10px] font-bold text-gray-300 group-hover:text-white truncate max-w-[150px]">{file.name}</span>
                       </div>
                       <ChevronRight className="size-3 opacity-20 group-hover:opacity-100 transition-all"/>
                    </div>
                 ))}
              </div>
           </aside>

           <div className="flex-1 flex flex-col overflow-hidden bg-black/20">
              <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide pb-32">
                 
                 <Tabs defaultValue="editor" className="w-full">
                    <TabsList className="bg-black/80 border border-primary/20 p-1 h-12 rounded-xl mb-4">
                        <TabsTrigger value="editor" className="flex-1 rounded-lg text-[10px] font-black italic data-[state=active]:bg-primary data-[state=active]:text-black">CHAMBER_DNA</TabsTrigger>
                        <TabsTrigger value="analysis" className="flex-1 rounded-lg text-[10px] font-black italic data-[state=active]:bg-primary data-[state=active]:text-black ml-2">INTELLIGENCE</TabsTrigger>
                    </TabsList>

                    <TabsContent value="editor" className="m-0">
                        {selectedFileName ? (
                            <Card className="kali-card border-primary/20 bg-black/80 rounded-2xl p-4 shadow-2xl relative group">
                                <div className="flex justify-between items-center mb-4 px-2">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-primary uppercase italic">{selectedFileName}</span>
                                        <span className="text-[7px] text-muted-foreground truncate max-w-xs">{selectedFilePath}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button onClick={handleGeneticInjection} variant="outline" className="h-8 bg-emerald-600/10 border-emerald-500/30 text-emerald-400 font-black text-[9px] uppercase tracking-widest italic rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
                                            <Save className="size-3 mr-2" /> Sync DNA
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => setSelectedFileName("")} className="size-8 rounded-lg hover:bg-red-600"><X className="size-4"/></Button>
                                    </div>
                                </div>
                                <Textarea 
                                    value={selectedFileContent}
                                    onChange={(e) => setSelectedFileContent(e.target.value)}
                                    className="bg-black/60 p-6 rounded-xl font-code text-xs text-emerald-400 leading-relaxed italic h-[500px] overflow-y-auto scrollbar-hide shadow-inner border border-white/5 whitespace-pre selection:bg-primary selection:text-black resize-none"
                                />
                            </Card>
                        ) : (
                            <div className="h-[500px] border-4 border-dashed border-primary/5 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-10 gap-6">
                                <Atom className="size-24 text-primary animate-spin-slow" />
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white italic">Waiting for DNA</h3>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="analysis" className="m-0">
                        {analysis ? (
                            <Card className="kali-card border-emerald-500/30 bg-black/90 rounded-2xl p-6 shadow-9xl animate-in zoom-in-95 duration-1000">
                                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                    <BrainCircuit className="size-8 text-emerald-400 animate-pulse" />
                                    <h4 className="text-xl font-black italic gold-glow uppercase">Neural Mapping</h4>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                                        <p className="text-lg text-white font-bold italic leading-relaxed">"{analysis.commanderBrief}"</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                            <span className="text-[9px] font-black text-primary uppercase block mb-2 tracking-widest">Logic Structure</span>
                                            <p className="text-xs text-gray-300 leading-relaxed italic">{analysis.analysis}</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                            <span className="text-[9px] font-black text-emerald-500 uppercase block mb-2 tracking-widest">Integrity Pulse</span>
                                            <p className="text-xs text-gray-100 leading-relaxed font-black italic">{analysis.suggestedChanges}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ) : (
                            <div className="h-[500px] border-4 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-10 gap-6">
                                <Activity className="size-20 text-white animate-pulse" />
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white italic">Awaiting Intel</h3>
                            </div>
                        )}
                    </TabsContent>
                 </Tabs>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/95 backdrop-blur-2xl border-t-2 border-primary/40">
                 <div className="max-w-4xl mx-auto relative group">
                    <Terminal className="absolute left-6 top-1/2 -translate-y-1/2 size-4 text-primary/40 group-focus-within:text-primary transition-all" />
                    <Input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleDeepAnalysis()}
                        placeholder=" Instruct the agent to analyze target DNA or merge Integrity changes..." 
                        className="h-14 md:h-16 bg-white/5 border-2 border-white/10 rounded-full pl-16 pr-24 text-sm italic font-black focus:border-primary shadow-inner text-white transition-all placeholder:text-gray-900"
                    />
                    <Button 
                        onClick={handleDeepAnalysis}
                        disabled={loading || !input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-primary hover:bg-white text-black shadow-lg transition-all border-4 border-black/20 group active:scale-90"
                    >
                        {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                 </div>
              </div>
           </div>
        </div>

        <div className="shrink-0 p-2 border-t border-white/5 flex justify-center items-center gap-10 opacity-30 text-[7px] font-black uppercase tracking-[2em] italic">
            <span>AL-MUIZZ SYSTEM EXPLORER v64.0</span>
            <div className="size-1 rounded-full bg-white animate-ping" />
            <span>GHAZALI_ROOT_VERIFIED_2026</span>
        </div>
      </main>
    </div>
  )
}
