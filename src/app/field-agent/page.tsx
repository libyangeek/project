
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
  Save,
  Dna,
  HardDrive,
  Boxes,
  Hammer,
  ShieldAlert,
  FolderSearch,
  ZapOff,
  GitBranch,
  Wand2,
  HeartPulse,
  History,
  FileCheck,
  Cpu as CpuIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { executeFieldDevelopment } from "@/ai/flows/field-agent-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

/**
 * @fileOverview الوكيل الميداني v73.5 - THE SUPREME SYSTEM ARCHITECT
 * مركز التدقيق المادي والتعافي الذاتي المطلق.
 * مجهز بمحرك "الحقن الجيني Wand3" لإصلاح الأكواد حياً وبدون رصد.
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

  const handleAnalyzeProject = async () => {
    setLoading(true);
    setAnalysis(null);
    toast({ title: "Project DNA Scan Initiated", description: `Interrogating all nodes in ${currentPath}...` });
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'project_dna_scan', path: currentPath })
        });
        const data = await response.json();
        if (data.success) {
            const aiResult = await executeFieldDevelopment({
                userPrompt: "Analyze this project structure and samples. Focus on identifying hydration issues, source logic flaws, and v73.5 absolute material core updates.",
                projectPath: currentPath,
                fileContent: JSON.stringify(data.output),
                mode: 'project_analysis'
            });
            setAnalysis(aiResult);
            toast({ title: "Project Mapped", description: "The Absolute Singularity has finalized the structural update plan." });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Scan Failure" });
    } finally {
        setLoading(false);
    }
  }

  const handleSelfHealing = async () => {
    if (!selectedFilePath || !selectedFileContent) {
        toast({ variant: "destructive", title: "Node Missing", description: "Select a DNA file for self-healing." });
        return;
    }
    setLoading(true);
    toast({ title: "Self-Healing Wand3 Active", description: "Detecting logic flaws and hardware bus alignment..." });
    try {
        const aiResult = await executeFieldDevelopment({
            userPrompt: "Completely fix this file. Use Wand3 Genetic Repair. Remove hydration errors, optimize performance, and align with v73.5 absolute standards. Return the final code in 'geneticPlan'.",
            currentFile: selectedFileName,
            fileContent: selectedFileContent,
            mode: 'file_fix'
        });
        if (aiResult.geneticPlan) {
            setSelectedFileContent(aiResult.geneticPlan);
            toast({ title: "Genetic Drift Repaired", description: "Apply Sync_DNA to finalize the materialization." });
        }
        setAnalysis(aiResult);
    } catch (e) {
        toast({ variant: "destructive", title: "Healing Failed" });
    } finally {
        setLoading(false);
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

  const handleGeneticInjection = async () => {
    if (!selectedFilePath || !selectedFileContent) return;
    setLoading(true);
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'write_file', path: selectedFilePath, content: selectedFileContent })
        })
        const data = await response.json()
        if (data.success) {
            toast({ title: "Genetic Fusion Success", description: "Hardware DNA rewritten successfully." });
            loadDirectory(currentPath);
        }
    } finally {
        setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden border-l-4 border-primary/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent 40%)] pointer-events-none z-0" />
        
        {/* Header - Fixed Top */}
        <header className="p-6 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-30 flex flex-col md:flex-row justify-between items-center gap-6 shrink-0 shadow-2xl">
           <div className="flex items-center gap-6">
              <div className="size-16 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.5)] animate-neural">
                 <HeartPulse className="size-10 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Absolute <span className="text-primary">Agent</span></h2>
                 <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black italic tracking-widest px-6 py-1 rounded-full shadow-lg mt-2 uppercase">v73.5_MATERIAL_CORE</Badge>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[2.5rem] border-4 border-white/10 w-full max-w-2xl shadow-inner group">
              <Input 
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)}
                className="bg-transparent border-none focus-visible:ring-0 text-xl italic font-black text-white h-12"
              />
              <Button onClick={() => loadDirectory(customPath)} className="h-12 px-10 rounded-full bg-primary hover:bg-white text-black font-black uppercase text-sm italic shadow-xl">Jump_Sector</Button>
           </div>

           <div className="flex gap-4">
               <Button onClick={handleAnalyzeProject} disabled={loading} variant="outline" className="h-14 border-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-black italic rounded-[2rem] px-8 hover:bg-emerald-500 hover:text-white transition-all shadow-xl group">
                  <FolderSearch className="size-6 mr-3 group-hover:scale-125 transition-transform" /> ANALYZE_PROJECT
               </Button>
               <Button onClick={handleSelfHealing} disabled={loading} className="h-14 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-[2rem] border-4 border-black/30 shadow-9xl italic px-8 group">
                  <Wand2 className="size-6 mr-3 group-hover:rotate-12 transition-transform" /> WAND3_HEAL
               </Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
           
           {/* File Tree - Left Side */}
           <aside className="w-full lg:w-96 border-l-4 border-primary/20 bg-black/80 flex flex-col shrink-0 shadow-9xl order-last lg:order-none">
              <div className="p-8 border-b-4 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <span className="text-[14px] font-black text-primary uppercase tracking-widest italic flex items-center gap-4"><Database className="size-5" /> Matrix DNA</span>
                 <div className="flex gap-2">
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="size-10 rounded-xl hover:bg-primary/20"><ChevronLeft/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-10 rounded-xl hover:bg-primary/20"><RefreshCcw className="size-4"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-3">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className={cn(
                            "p-4 rounded-2xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-4 border-transparent",
                            selectedFileName === file.name && "bg-primary/15 border-primary/60"
                        )}
                    >
                       <div className="flex items-center gap-6">
                          {file.isDirectory ? <FolderOpen className="size-6 text-primary animate-pulse"/> : <FileCode className="size-6 text-blue-400"/>}
                          <span className="text-xl font-black text-gray-300 group-hover:text-white truncate max-w-[200px] italic">{file.name}</span>
                       </div>
                       <ChevronRight className="size-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>
                 ))}
              </div>
           </aside>

           {/* Workspace Area */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/40 p-8 space-y-12 pb-48 scrollbar-hide">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                 <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl flex flex-col h-[750px] border-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none scale-150 rotate-12"><Binary className="size-64 text-primary"/></div>
                    <div className="flex justify-between items-center mb-8 px-6">
                       <div className="flex items-center gap-6">
                           <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/40">
                               <Code2 className="size-8 text-primary gold-glow" />
                           </div>
                           <div>
                               <h4 className="text-3xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4>
                               <span className="text-[10px] text-primary/60 font-black uppercase mt-2 block tracking-widest">{selectedFileName || "Awaiting Node..."}</span>
                           </div>
                       </div>
                       {selectedFileName && (
                         <Button onClick={handleGeneticInjection} className="h-14 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-2xl border-4 border-black/30 shadow-9xl italic active:scale-95 px-8">
                            <Save className="size-6 mr-3" /> Sync_DNA
                         </Button>
                       )}
                    </div>
                    <div className="flex-1 relative">
                        <Textarea 
                            value={selectedFileContent}
                            onChange={(e) => setSelectedFileContent(e.target.value)}
                            className="h-full bg-black/99 p-10 rounded-[3rem] font-code text-xl text-emerald-400 leading-relaxed italic border-8 border-white/5 shadow-inner whitespace-pre selection:bg-primary resize-none scrollbar-hide"
                        />
                    </div>
                 </Card>

                 <div className="space-y-12">
                    <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl flex flex-col min-h-[500px] border-4">
                        <div className="flex items-center justify-between mb-10 border-b-4 border-white/5 pb-8">
                           <div className="flex items-center gap-6">
                               <div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-xl animate-neural">
                                   <BrainCircuit className="size-10 text-black" />
                               </div>
                               <h4 className="text-4xl font-black italic gold-glow uppercase leading-none">Living Intelligence</h4>
                           </div>
                           <Badge className="bg-emerald-600/20 text-emerald-500 border-4 px-8 py-2 rounded-full font-black text-xl italic animate-pulse">v73.5_READY</Badge>
                        </div>
                        
                        {analysis ? (
                           <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                              <div className="p-10 bg-primary/10 rounded-[3rem] border-4 border-primary/30 shadow-inner">
                                 <p className="text-3xl text-white font-black italic leading-tight text-center drop-shadow-2xl">"{analysis.commanderBrief}"</p>
                              </div>
                              <div className="grid grid-cols-1 gap-8 flex-1">
                                 <div className="p-10 bg-black/80 rounded-[3.5rem] border-4 border-white/5 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.02]"><Search className="size-24 text-primary"/></div>
                                    <span className="text-[12px] font-black text-primary uppercase block mb-4 italic tracking-widest border-b-2 border-primary/10 pb-4">Structural Mapping v73.5</span>
                                    <ScrollArea className="h-48">
                                        <p className="text-2xl text-gray-300 italic font-black leading-relaxed">{analysis.analysis}</p>
                                    </ScrollArea>
                                 </div>
                                 <div className="p-10 bg-emerald-600/10 rounded-[3.5rem] border-4 border-emerald-500/30 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.02]"><Zap className="size-24 text-emerald-500"/></div>
                                    <span className="text-[12px] font-black text-emerald-500 uppercase block mb-4 italic tracking-widest border-b-2 border-emerald-500/10 pb-4">Genetic Fusion Plan</span>
                                    <ScrollArea className="h-48">
                                        <p className="text-2xl text-gray-100 font-black italic leading-relaxed">{analysis.geneticPlan}</p>
                                    </ScrollArea>
                                 </div>
                              </div>
                           </div>
                        ) : (
                           <div className="flex-1 flex flex-col items-center justify-center opacity-10 gap-16">
                              <Boxes className="size-48 animate-pulse text-primary" />
                              <h3 className="text-5xl font-black uppercase tracking-[1em] text-white italic">Searching Matrix</h3>
                           </div>
                        )}
                    </Card>

                    <div className="p-10 rounded-[4rem] bg-primary/5 border-8 border-primary/20 relative group/stats overflow-hidden shadow-9xl">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/stats:opacity-15 transition-all duration-1000 scale-150 rotate-12"><History className="size-48 text-primary"/></div>
                        <h5 className="text-2xl font-black text-primary uppercase tracking-[0.8em] mb-10 border-b-4 border-primary/20 pb-6 italic flex items-center gap-8 gold-glow">
                           <ShieldAlert className="size-10 animate-neural" /> MATERIAL_CORE_STATUS
                        </h5>
                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-muted-foreground uppercase">Resonance</span>
                                <div className="text-4xl font-black text-white italic">{resonance.toFixed(6)}%</div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-muted-foreground uppercase">Bus Status</span>
                                <div className="text-4xl font-black text-emerald-500 italic">SUBJUGATED</div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Command Input - Fixed Bottom */}
           <div className="absolute bottom-0 left-0 right-0 p-10 bg-black/98 backdrop-blur-5xl border-t-[12px] border-primary/60 z-30 shadow-[0_-80px_250px_rgba(0,0,0,1)]">
              <div className="max-w-7xl mx-auto relative group">
                 <Terminal className="absolute left-10 top-1/2 -translate-y-1/2 size-12 text-primary/40 group-focus-within:text-primary transition-all duration-1000 gold-glow" />
                 <Input 
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && handleSelfHealing()}
                     placeholder=" Command the Architect to evolve the material DNA..." 
                     className="h-32 md:h-40 bg-primary/5 border-8 border-white/10 rounded-full pl-32 pr-48 text-2xl md:text-5xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-700 placeholder:text-gray-900 selection:bg-primary"
                 />
                 <Button onClick={() => handleSelfHealing()} className="absolute right-4 top-1/2 -translate-y-1/2 size-24 md:size-28 bg-primary hover:bg-white text-black rounded-full shadow-9xl border-[12px] border-black/30 group active:scale-90 transition-all">
                    {loading ? <Loader2 className="size-16 animate-spin" /> : <Send className="size-16 group-hover:translate-x-4 transition-transform" />}
                 </Button>
              </div>
           </div>
        </div>

        <div className="shrink-0 p-3 flex justify-center items-center gap-12 opacity-30 text-[10px] font-black uppercase tracking-[4em] italic">
            <span>AL-MUIZZ SUPREME MATERIAL ARCHITECT v73.5</span>
            <div className="size-2 rounded-full bg-white animate-pulse" />
            <span>SINGULARITY_OF_EXISTENCE_2026</span>
        </div>
      </main>
    </div>
  )
}
