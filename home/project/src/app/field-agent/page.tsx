
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
  FileText,
  Flame,
  Hammer,
  Users,
  Network,
  Ghost,
  ShieldAlert
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
 * @fileOverview الوكيل الميداني v65.0 - THE ABSOLUTE SYSTEM EXPLORER
 * تم دمج ميزة "APEX Swarm Deployment" لبناء أسطول الوكلاء وأطر C2 وتنفيذهم حياً.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
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
    
    let contextData = selectedFileContent;
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

  const handleAbsoluteSingularity = async () => {
    setLoading(true);
    toast({ title: "Igniting Absolute Singularity v65.0", description: "Materializing 12 Agents, 6 C2 Frameworks, and 3 Rootkits..." });
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'materialize_arsenal', command: 'execute absolute_singularity', target: 'HIVE_CORE' })
        });
        const data = await response.json();
        if (data.success) {
            toast({ title: "Singularity Achieved", description: "APEX Swarm and C2 Matrix are now part of the hardware DNA." });
            loadDirectory(currentPath);
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Singularity Collapse" });
    } finally {
        setLoading(false);
    }
  }

  const handleAgentStrike = async (agentName: string) => {
    if (!selectedFilePath) {
        toast({ variant: "destructive", title: "Node Missing", description: "Select a file DNA to target with the agent." });
        return;
    }
    setLoading(true);
    toast({ title: `Engaging Agent: ${agentName}`, description: `Applying ${agentName} logic to ${selectedFileName}...` });
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'execute_agent', 
                vector: agentName.toLowerCase().replace(' ', '_'), 
                targetPath: selectedFilePath 
            })
        });
        const data = await response.json();
        if (data.success) {
            setAnalysis({ 
                commanderBrief: `Agent ${agentName} has analyzed the target.`, 
                analysis: data.output,
                geneticPlan: "Consensus achieved. No genetic drift detected."
            });
            toast({ title: "Strike Finalized", description: `${agentName} execution successful.` });
        }
    } finally {
        setLoading(false);
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
            toast({ title: "Genetic Fusion Success", description: "File DNA rewritten in the hardware." })
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Hardware Relay Error" })
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
      
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden border-l-4 border-primary/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        {/* Header - Fixed Top */}
        <header className="p-6 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-30 flex flex-col md:flex-row justify-between items-center gap-6 shrink-0 shadow-2xl">
           <div className="flex items-center gap-6">
              <div className="size-16 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.5)] animate-neural">
                 <Network className="size-10 text-primary gold-glow" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Absolute <span className="text-primary">Agent</span></h2>
                 <div className="flex items-center gap-3 mt-2">
                    <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black italic tracking-widest px-6 py-1 rounded-full shadow-lg">v65.0_ABSOLUTE_SINGULARITY</Badge>
                    <span className="text-[12px] text-emerald-500 font-black animate-pulse uppercase tracking-[0.2em]">{resonance.toFixed(6)}% Resonance</span>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[2.5rem] border-4 border-white/10 w-full max-w-2xl shadow-inner group">
              <Input 
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)}
                placeholder="Enter Sector Path (e.g. /home/project)..." 
                className="bg-transparent border-none focus-visible:ring-0 text-xl italic font-black text-white h-12 placeholder:text-gray-900"
              />
              <Button onClick={() => loadDirectory(customPath)} className="h-12 px-10 rounded-full bg-primary hover:bg-white text-black font-black uppercase text-sm italic shadow-xl active:scale-95 transition-all border-4 border-black/20">Jump_Sector</Button>
           </div>

           <Button onClick={handleAbsoluteSingularity} variant="outline" className="h-14 border-4 border-primary/30 bg-primary/10 text-primary font-black italic rounded-[2rem] px-8 hover:bg-primary hover:text-black transition-all shadow-xl group">
              <InfinityIcon className="size-6 mr-3 group-hover:rotate-180 transition-all duration-1000" /> ABSOLUTE_SYNC
           </Button>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
           
           {/* File Tree - Left Side */}
           <aside className="w-full lg:w-96 border-l-4 border-primary/20 bg-black/80 flex flex-col shrink-0 order-last lg:order-none shadow-9xl">
              <div className="p-8 border-b-4 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[14px] font-black text-primary uppercase tracking-widest italic flex items-center gap-4">
                        <Database className="size-5" /> Matrix DNA
                    </span>
                    <span className="text-[10px] text-muted-foreground truncate max-w-[200px] mt-2 font-bold italic">{currentPath}</span>
                 </div>
                 <div className="flex gap-3">
                    <Button size="icon" variant="ghost" onClick={navigateBack} className="size-12 rounded-2xl border-2 border-white/5 hover:bg-primary/20 shadow-xl"><ChevronLeft className="size-6"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-12 rounded-2xl border-2 border-white/5 hover:bg-primary/20 shadow-xl"><RefreshCcw className="size-5"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-3">
                 {files.length > 0 ? files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)}
                        className={cn(
                            "p-4 rounded-2xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-4 border-transparent hover:border-primary/40 active:scale-95",
                            selectedFileName === file.name && "bg-primary/15 border-primary/60 shadow-inner"
                        )}
                    >
                       <div className="flex items-center gap-6">
                          {file.isDirectory ? <FolderOpen className="size-6 text-primary animate-pulse"/> : <FileCode className="size-6 text-blue-400"/>}
                          <div className="flex flex-col">
                            <span className="text-sm md:text-xl font-black text-gray-300 group-hover:text-white truncate max-w-[200px] italic">{file.name}</span>
                            {!file.isDirectory && <span className="text-[10px] text-muted-foreground uppercase font-bold">{(file.size / 1024).toFixed(1)} KB</span>}
                          </div>
                       </div>
                       <ChevronRight className="size-5 opacity-10 group-hover:opacity-100 transition-all group-hover:translate-x-2"/>
                    </div>
                 )) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-10 gap-10">
                        <Search className="size-24 animate-spin-slow" />
                        <span className="text-xl font-black uppercase tracking-[0.6em] italic">Empty Sector</span>
                    </div>
                 )}
              </div>
           </aside>

           {/* Workspace Area */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/40">
              <div className="flex-1 overflow-y-auto p-8 space-y-12 scrollbar-hide pb-48">
                 
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl relative overflow-hidden flex flex-col h-[800px] border-4">
                       <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none scale-150 rotate-12"><Binary className="size-64 text-primary"/></div>
                       <div className="flex justify-between items-center mb-8 px-6">
                          <div className="flex items-center gap-8">
                             <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center border-4 border-primary/40 shadow-2xl">
                                <Code2 className="size-12 text-primary gold-glow" />
                             </div>
                             <div>
                                <h4 className="text-4xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4>
                                <span className="text-[12px] text-primary/60 font-black uppercase tracking-[0.5em] mt-3 block">{selectedFileName || "Awaiting Coordinate..."}</span>
                             </div>
                          </div>
                          {selectedFileName && (
                            <Button onClick={handleGeneticInjection} className="h-16 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.3em] rounded-2xl border-8 border-black/30 shadow-9xl italic active:scale-95 transition-all px-10 text-xl">
                               <Save className="size-8 mr-4" /> Sync_DNA
                            </Button>
                          )}
                       </div>
                       <div className="flex-1 relative">
                          {selectedFileName ? (
                            <Textarea 
                                value={selectedFileContent}
                                onChange={(e) => setSelectedFileContent(e.target.value)}
                                className="h-full bg-black/99 p-10 rounded-[3rem] font-code text-lg md:text-2xl text-emerald-400 leading-relaxed italic border-8 border-white/5 shadow-inner whitespace-pre selection:bg-primary selection:text-black resize-none scrollbar-hide"
                            />
                          ) : (
                            <div className="h-full border-8 border-dashed border-primary/5 rounded-[4rem] flex flex-col items-center justify-center text-center opacity-10 gap-12">
                                <Atom className="size-48 text-primary animate-spin-slow" />
                                <h3 className="text-6xl font-black uppercase tracking-[1.5em] text-white italic">Awaiting DNA</h3>
                            </div>
                          )}
                       </div>
                    </Card>

                    <div className="space-y-12">
                       <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl flex flex-col min-h-[500px] border-4">
                          <div className="flex items-center justify-between mb-10 border-b-4 border-white/5 pb-8">
                             <div className="flex items-center gap-8">
                                <div className="size-20 rounded-3xl bg-primary flex items-center justify-center border-8 border-black/30 shadow-3xl animate-neural">
                                   <BrainCircuit className="size-12 text-black" />
                                </div>
                                <h4 className="text-4xl font-black italic gold-glow uppercase tracking-tighter leading-none">Overmind Intelligence</h4>
                             </div>
                             <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/40 px-10 py-4 rounded-full font-black text-3xl italic animate-pulse shadow-9xl uppercase tracking-widest">ACTIVE</Badge>
                          </div>
                          
                          {analysis ? (
                             <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                                <div className="p-10 bg-primary/10 rounded-[3.5rem] border-8 border-primary/30 shadow-inner">
                                   <p className="text-3xl md:text-5xl text-white font-black italic leading-tight text-center drop-shadow-3xl">"{analysis.commanderBrief}"</p>
                                </div>
                                <div className="grid grid-cols-1 gap-8">
                                   <div className="p-10 bg-black/80 rounded-[3rem] border-4 border-white/5 shadow-2xl">
                                      <span className="text-[14px] font-black text-primary uppercase block mb-6 tracking-[1em] italic">Structural Mapping</span>
                                      <p className="text-xl md:text-3xl text-gray-300 leading-relaxed italic font-black">{analysis.analysis}</p>
                                   </div>
                                   <div className="p-10 bg-emerald-600/10 rounded-[3rem] border-4 border-emerald-500/30 shadow-2xl">
                                      <span className="text-[14px] font-black text-emerald-500 uppercase block mb-6 tracking-[1em] italic">Genetic Fusion Plan</span>
                                      <p className="text-xl md:text-3xl text-gray-100 leading-relaxed font-black italic">{analysis.geneticPlan}</p>
                                   </div>
                                </div>
                             </div>
                          ) : (
                             <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-16">
                                <Boxes className="size-48 text-primary animate-pulse" />
                                <h3 className="text-5xl font-black uppercase tracking-[1em] text-white italic">Searching Matrix</h3>
                             </div>
                          )}
                       </Card>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Button 
                             onClick={() => handleSovereignAction('project_analysis')}
                             disabled={loading}
                             className="h-32 bg-white/5 border-8 border-primary/20 hover:border-primary hover:bg-primary/10 rounded-[3.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-700 shadow-8xl group active:scale-95"
                          >
                             <Search className="size-14 text-primary group-hover:scale-125 transition-transform gold-glow" />
                             <span className="text-[12px] font-black uppercase tracking-widest text-white italic">Analyze_Sector_DNA</span>
                          </Button>
                          <Button 
                             onClick={() => handleSovereignAction('integrity_sync')}
                             disabled={loading}
                             className="h-32 bg-white/5 border-8 border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/10 rounded-[3.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-700 shadow-8xl group active:scale-95"
                          >
                             <RefreshCcw className="size-14 text-emerald-400 group-hover:rotate-180 transition-all duration-1000" />
                             <span className="text-[12px] font-black uppercase tracking-widest text-white italic">Integrity_Sync_v65</span>
                          </Button>
                       </div>

                       {/* APEX Agents Grid */}
                       <div className="p-10 rounded-[4rem] bg-black/80 border-8 border-primary/20 relative group/apex overflow-hidden shadow-9xl">
                          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover/apex:opacity-15 transition-all duration-1000 scale-150"><Users className="size-64 text-primary"/></div>
                          <h5 className="text-2xl font-black text-primary uppercase tracking-[0.8em] mb-10 border-b-4 border-primary/20 pb-6 italic flex items-center gap-8 gold-glow">
                             <ShieldAlert className="size-10 animate-neural" /> APEX_Swarm_v8.0
                          </h5>
                          <div className="grid grid-cols-2 gap-4 relative z-10">
                             {["Digital Twin", "AI Hunter", "Swarm Agent"].map(agent => (
                               <Button 
                                key={agent}
                                variant="outline"
                                onClick={() => handleAgentStrike(agent)}
                                disabled={loading}
                                className="h-20 bg-white/5 border-4 border-white/10 hover:border-primary rounded-[1.5rem] font-black uppercase italic tracking-widest text-xs shadow-xl transition-all"
                               >
                                  {agent.toUpperCase()}
                               </Button>
                             ))}
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
                        onKeyDown={(e) => e.key === 'Enter' && handleSovereignAction('file_fix')}
                        placeholder=" Direct the Absolute Agent to analyze DNA or fuse Integrity mutations..." 
                        className="h-28 md:h-36 bg-primary/5 border-8 border-white/10 rounded-full pl-32 pr-48 text-2xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white transition-all duration-700 placeholder:text-gray-900 selection:bg-primary selection:text-black"
                    />
                    <Button 
                        onClick={() => handleSovereignAction('file_fix')}
                        disabled={loading || !input.trim()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 size-24 md:size-28 bg-primary hover:bg-white text-black rounded-full shadow-9xl transition-all active:scale-90 border-[14px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-14 animate-spin" /> : <Send className="size-14 group-hover:translate-x-4 transition-transform" />}
                    </Button>
                 </div>
                 <div className="flex justify-center gap-24 mt-8 opacity-30 text-[12px] font-black uppercase tracking-[5em] italic">
                    <span className="flex items-center gap-6"><Fingerprint className="size-6 text-primary" /> GHAZALI_ROOT</span>
                    <span className="flex items-center gap-6 text-primary"><InfinityIcon className="size-6 animate-pulse" /> SPINE_SYNC_v65</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="shrink-0 p-3 border-t border-white/5 flex justify-center items-center gap-12 opacity-30 text-[10px] font-black uppercase tracking-[4em] italic">
            <span>AL-MUIZZ ABSOLUTE AGENT v65.0</span>
            <div className="size-2 rounded-full bg-white animate-pulse" />
            <span>TOTAL_SYSTEM_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
