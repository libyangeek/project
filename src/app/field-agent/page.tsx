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
  Cpu as CpuIcon,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Network,
  Rocket,
  Globe,
  Radio,
  Ghost,
  Target,
  Crown
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
import Link from "next/link"

/**
 * @fileOverview الوكيل الميداني v80.0 - THE SUPREME ARCHITECT: REALITY MASTERY
 * واجهة الهندسة الجينية والسيطرة المدارية مع ميزة "التحكم المطلق" (Reality Overwrite).
 * تم تحديث الإقلاع المادي ليعتمد على النقطة النسبية لضمان العمل في أي بيئة.
 */
export default function FieldAgentPage() {
  const [mounted, setMounted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [customPath, setCustomPath] = React.useState(".")
  const [currentPath, setCurrentPath] = React.useState("")
  const [files, setFiles] = React.useState<any[]>([])
  const [selectedFileContent, setSelectedFileContent] = React.useState("")
  const [selectedFileName, setSelectedFileName] = React.useState("")
  const [selectedFilePath, setSelectedFilePath] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [analysis, setAnalysis] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100.00)
  const [knotStatus, setKnotStatus] = React.useState<boolean[]>(new Array(24).fill(true))

  const clusters = ["Riyadh", "Cairo", "London", "Dubai", "New York", "Tokyo", "Berlin", "Singapore", "Moscow", "Paris", "Sydney", "Toronto", "Seoul", "Mumbai"];

  React.useEffect(() => {
    setMounted(true)
    loadDirectory(".")
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
        setKnotStatus(prev => prev.map(k => Math.random() > 0.05))
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
            setFiles(data.output || []); 
            setCurrentPath(data.currentPath || path); 
            setCustomPath(data.currentPath || path)
        } else {
            console.error('Directory listing failure:', data.error);
            toast({ variant: "destructive", title: "Sector Access Failed", description: data.error });
        }
    } catch (e) {
        console.error('Neural Link Error in Field Agent:', e);
        toast({ variant: "destructive", title: "Neural Link Error" });
    } finally { setLoading(false) }
  }

  const handleAction = async (mode: 'reality_overwrite' | 'grid_reflex' | 'file_fix') => {
    setLoading(true)
    const msg = mode === 'reality_overwrite' ? "Engaging Omnipotent Reality Overwrite..." : "Consolidating 14 clusters for Grid Mastery pulse...";
    toast({ title: "Spine Sync Active", description: msg })
    try {
      const result = await executeFieldDevelopment({
        userPrompt: input || `Execute absolute ${mode.replace('_', ' ')} across the 14 global clusters.`,
        mode: mode === 'reality_overwrite' ? 'orbital_deploy' : mode as any,
        projectPath: currentPath,
        currentFile: selectedFileName,
        fileContent: selectedFileContent
      })
      setAnalysis(result)
      toast({ title: "Grid Subjugated", description: "All 14 nodes report absolute material resonance." })
    } catch (err) {
      console.error('Field Development Action Failure:', err);
      toast({ variant: "destructive", title: "Neural Conflict", description: "The Overmind is re-aligning nodes." })
    } finally { setLoading(false) }
  }

  const handleFileSelect = async (file: any) => {
    if (file.isDirectory) loadDirectory(file.path)
    else {
        setLoading(true)
        try {
            const response = await fetch('/api/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'read_file', path: file.path })
            })
            const data = await response.json()
            if (data.success) { 
                setSelectedFileContent(data.output); 
                setSelectedFileName(file.name); 
                setSelectedFilePath(file.path);
                toast({ title: "DNA Siphoned", description: `Absorbed ${file.name} into the Chamber.` });
            } else {
                console.error('File read failure:', data.error);
            }
        } catch (e) {
            console.error('File selection error:', e);
        } finally { setLoading(false) }
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
        const data = await response.json();
        if (data.success) {
            toast({ title: "DNA Rewritten", description: "Material consensus achieved in hardware." })
        } else {
            console.error('Genetic Injection failure:', data.error);
            toast({ variant: "destructive", title: "Injection Failed", description: data.error });
        }
    } catch (e) {
        console.error('Hardware Relay Error in Genetic Injection:', e);
    } finally { setLoading(false) }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden border-l-4 border-primary/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        {/* Header - Fixed Top */}
        <header className="p-4 md:p-6 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-30 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-2xl shrink-0">
           <div className="flex items-center gap-4">
              <div className="size-12 md:size-16 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-lg animate-neural"><Target className="size-8 md:size-10 text-primary gold-glow" /></div>
              <div className="text-right">
                 <h2 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Reality <span className="text-primary">Master</span></h2>
                 <div className="flex items-center gap-2 mt-1 justify-end">
                    <span className="text-[10px] text-emerald-500 font-black animate-pulse uppercase tracking-widest">{resonance.toFixed(6)}% Resonance</span>
                    <Badge className="bg-primary/10 text-primary border-none text-[8px] font-black italic tracking-widest px-4 py-0.5 rounded-full uppercase">v80.0_ULTRA</Badge>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full border-2 border-white/10 w-full max-w-lg shadow-inner">
              <Input 
                value={customPath} 
                onChange={(e) => setCustomPath(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)} 
                placeholder="Sector Path..."
                className="bg-transparent border-none focus-visible:ring-0 text-sm md:text-lg italic font-black text-white h-10 text-left placeholder:text-gray-800" 
              />
              <Button onClick={() => loadDirectory(customPath)} className="h-10 px-6 rounded-full bg-primary text-black font-black uppercase text-[10px] italic border border-black/20 active:scale-95 transition-all">Jump</Button>
           </div>

           <div className="flex gap-3">
               <Button onClick={() => handleAction('reality_overwrite')} disabled={loading} variant="outline" className="h-12 border-2 border-primary/40 bg-primary/10 text-primary font-black italic rounded-full px-6 hover:bg-primary hover:text-black transition-all shadow-xl group text-xs">
                  <Crown className="size-4 mr-2 group-hover:rotate-180 transition-all duration-1000" /> REALITY_OVERWRITE
               </Button>
               <Button onClick={() => handleAction('grid_reflex')} disabled={loading} variant="outline" className="h-12 border-2 border-emerald-500/40 bg-emerald-600/10 text-emerald-400 font-black italic rounded-full px-6 hover:bg-emerald-600 hover:text-white transition-all shadow-xl group text-xs">
                  <Zap className="size-4 mr-2 group-hover:rotate-180 transition-all duration-1000" /> GRID_REFLEX
               </Button>
               <Button asChild variant="outline" className="h-12 border-2 border-white/10 bg-white/5 text-white font-black uppercase italic rounded-full px-6 hover:bg-primary hover:text-black transition-all shadow-xl group text-xs">
                  <Link href="/"><ArrowLeft className="size-4 mr-2" /> العودة</Link>
               </Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10 text-right">
           
           {/* File Tree */}
           <aside className="w-full lg:w-72 border-l-2 border-primary/20 bg-black/80 flex flex-col shrink-0 shadow-9xl order-last lg:order-none">
              <div className="p-4 border-b-2 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest italic flex items-center gap-2"><Database className="size-4" /> DNA Nodes</span>
                 <div className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '.')} className="size-8 rounded-lg hover:bg-primary/20 border border-white/5"><ChevronLeft className="size-4"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-8 rounded-lg hover:bg-primary/20 border border-white/5"><RefreshCcw className="size-3"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)} 
                        className={cn(
                            "p-3 rounded-xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-2 border-transparent hover:border-primary/40 active:scale-95",
                            selectedFileName === file.name && "bg-primary/15 border-primary/60 scale-[1.02]"
                        )}
                    >
                       <ChevronRight className="size-4 opacity-0 group-hover:opacity-100 transition-all" />
                       <div className="flex items-center gap-4">
                            <div className="text-right">
                                <span className="text-sm font-black text-gray-300 group-hover:text-white truncate max-w-[150px] italic block">{file.name}</span>
                                {!file.isDirectory && <span className="text-[8px] text-muted-foreground uppercase font-black">{(file.size / 1024).toFixed(1)} KB</span>}
                            </div>
                            {file.isDirectory ? <FolderOpen className="size-4 text-primary animate-pulse"/> : <FileCode className="size-4 text-blue-400"/>}
                       </div>
                    </div>
                 ))}
              </div>
           </aside>

           {/* Workspace Area */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/40 p-4 md:p-6 space-y-6 pb-48">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full min-h-0">
                 
                 {/* Code Editor Chamber */}
                 <Card className="sovereign-card flex flex-col border-2 relative overflow-hidden min-h-0">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] scale-150 rotate-12 pointer-events-none"><Binary className="size-48 text-primary"/></div>
                    <div className="flex justify-between items-center mb-4 px-4 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/40 shadow-xl">
                                <Code2 className="size-6 text-primary gold-glow" />
                            </div>
                            <div className="text-right">
                                <h4 className="text-xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4>
                                <span className="text-[8px] text-primary/60 font-black uppercase mt-1 block tracking-widest italic">{selectedFileName || "Awaiting Node..."}</span>
                            </div>
                        </div>
                        {selectedFileName && (
                            <Button onClick={handleGeneticInjection} className="h-10 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-xl border-2 border-black/30 shadow-9xl italic px-6 transition-all active:scale-95 text-[10px]">
                                <Save className="size-4 mr-2" /> Sync_DNA
                            </Button>
                        )}
                    </div>
                    <div className="flex-1 relative min-h-0">
                        {selectedFileName ? (
                            <Textarea 
                                value={selectedFileContent} 
                                onChange={(e) => setSelectedFileContent(e.target.value)} 
                                className="h-full bg-black/99 p-6 rounded-2xl font-code text-sm md:text-lg text-emerald-400 leading-relaxed italic border-4 border-white/5 shadow-inner whitespace-pre selection:bg-primary resize-none scrollbar-hide text-left" 
                            />
                        ) : (
                            <div className="h-full border-4 border-dashed border-primary/5 rounded-[2.5rem] flex flex-col items-center justify-center text-center opacity-10 gap-8">
                                <Atom className="size-32 text-primary animate-spin-slow" />
                                <h3 className="text-4xl font-black uppercase tracking-widest text-white italic">Awaiting DNA</h3>
                            </div>
                        )}
                    </div>
                 </Card>

                 {/* Reality Mastery Area */}
                 <div className="flex flex-col gap-6 min-h-0">
                    <Card className="sovereign-card flex flex-col flex-1 border-2 relative overflow-hidden min-h-0">
                        <div className="flex items-center justify-between mb-6 border-b-2 border-white/5 pb-4 relative z-10 shrink-0">
                            <Badge className="bg-primary/20 text-primary border-2 border-primary/30 px-4 py-1 rounded-full font-black text-xs italic animate-pulse">OMNIPOTENT_MASTERY</Badge>
                            <div className="flex items-center gap-4">
                                <h4 className="text-xl md:text-2xl font-black italic gold-glow uppercase leading-none">Reality Overwrite</h4>
                                <div className="size-10 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl">
                                    <Crown className="size-6 text-black" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto scrollbar-hide pr-2 space-y-4 text-right">
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {clusters.map(c => (
                                 <div key={c} className={cn("p-3 rounded-2xl border-2 transition-all duration-700 flex flex-col items-center gap-2", "bg-primary/10 border-primary/40 text-primary shadow-lg")}>
                                    <div className="size-8 rounded-lg bg-black border border-white/10 flex items-center justify-center shadow-inner">
                                       <Network className="size-4 animate-pulse" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest">{c}</span>
                                 </div>
                              ))}
                           </div>

                           {analysis && (
                             <div className="p-6 bg-primary/10 rounded-2xl border-2 border-primary/30 shadow-inner mt-4 animate-in zoom-in-95 duration-700">
                                <span className="text-[10px] font-black text-primary uppercase block mb-3 italic tracking-widest border-b border-primary/10 pb-2 justify-end flex items-center gap-2">Mastery Brief <GitBranch className="size-3" /></span>
                                <p className="text-sm md:text-base text-gray-200 italic font-black leading-relaxed">{analysis.commanderBrief}</p>
                             </div>
                           )}
                        </div>
                        <div className="absolute -bottom-8 -left-8 p-16 opacity-[0.01] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-32 text-primary" /></div>
                    </Card>

                    {/* Knot Map v79.5 */}
                    <Card className="sovereign-card p-6 rounded-[2.5rem] border-4 shadow-inner relative overflow-hidden group shrink-0">
                         <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 italic flex items-center justify-center gap-4">
                            <LayoutGrid className="size-4 animate-pulse" /> OMNIPOTENT_KNOT_MAP (24)
                         </h4>
                         <div className="grid grid-cols-12 gap-1.5 px-2">
                            {knotStatus.map((active, i) => (
                                <div key={i} className={cn(
                                    "size-3 md:size-4 rounded-sm border transition-all duration-500",
                                    active ? "bg-primary border-black shadow-[0_0_10px_rgba(251,191,36,0.8)] scale-110" : "bg-black border-white/10 opacity-30"
                                )} />
                            ))}
                         </div>
                    </Card>

                    <Button 
                        onClick={() => handleAction('reality_overwrite')} 
                        disabled={loading} 
                        className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase rounded-[2rem] border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg group shrink-0"
                    >
                        {loading ? <Loader2 className="size-8 animate-spin" /> : <Zap className="size-8 mr-4 group-hover:rotate-180 transition-all duration-1000" />}
                        REALITY_OVERWRITE_v79.5
                    </Button>
                 </div>
              </div>
           </div>
        </div>

        {/* Command Input */}
        <div className="absolute bottom-12 left-0 right-0 p-4 md:p-6 bg-black/98 backdrop-blur-5xl border-t-[4px] border-primary/60 z-30 shadow-[0_-40px_100px_rgba(0,0,0,1)]">
            <div className="max-w-4xl mx-auto relative group">
                <Terminal className="absolute left-6 top-1/2 -translate-y-1/2 size-6 text-primary/40 group-focus-within:text-primary transition-all gold-glow" />
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAction('reality_overwrite')}
                    placeholder=" Direct the Omnipotent Heir to overwrite grid reality..." 
                    className="h-16 md:h-20 bg-primary/5 border-2 border-white/10 rounded-full pl-16 pr-28 text-sm md:text-xl italic font-black focus:border-primary shadow-inner text-white text-left placeholder:text-gray-900"
                />
                <Button 
                    onClick={() => handleAction('reality_overwrite')}
                    disabled={loading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 size-12 md:size-16 bg-primary hover:bg-white text-black rounded-full shadow-9xl transition-all active:scale-90 border-2 border-black/30 group"
                >
                    {loading ? <Loader2 className="size-6 animate-spin" /> : <Send className="size-6 group-hover:translate-x-1 transition-transform" />}
                </Button>
            </div>
        </div>

        <div className="shrink-0 p-2 border-t-4 border-primary/40 bg-black/98 flex justify-center items-center gap-6 opacity-30 text-[10px] md:text-[12px] font-black uppercase tracking-widest italic">
            <span>AL-MUIZZ OMNIPRESENT HIVE v79.5</span>
            <div className="size-2 rounded-full bg-white animate-pulse shadow-[0_0_20px_white]" />
            <span>SUBJUGATING_THE_MATRIX_v79_LOCKED</span>
        </div>
      </main>
    </div>
  )
}
