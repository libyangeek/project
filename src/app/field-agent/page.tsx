
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
 * @fileOverview الوكيل الميداني v90.0 - THE SUPREME ARCHITECT: REALITY MASTERY
 * واجهة الهندسة الجينية والسيطرة المدارية مع ميزة "التحكم المطلق" (Reality Overwrite).
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
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

  React.useEffect(() => {
    setMounted(true)
    loadDirectory(".")
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
            setFiles(data.output || []); 
            setCurrentPath(data.currentPath || path); 
            setCustomPath(data.currentPath || path)
        } else {
            toast({ variant: "destructive", title: "Access Denied", description: data.error });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Neural Link Error" });
    } finally { setLoading(false) }
  }

  const handleAction = async (mode: 'reality_overwrite' | 'grid_reflex' | 'file_fix') => {
    setLoading(true); setAnalysis(null)
    toast({ title: "Hierarchy Engaging v90", description: `Orchestrating absolute ${mode.replace('_', ' ')}...` })
    try {
      const result = await executeFieldDevelopment({
        userPrompt: input || `Execute absolute ${mode.replace('_', ' ')} on target DNA.`,
        mode: mode === 'reality_overwrite' ? 'reality_overwrite' : mode as any,
        projectPath: currentPath,
        currentFile: selectedFileName,
        fileContent: selectedFileContent
      })
      setAnalysis(result)
      toast({ title: "Consensus Achieved", description: "The Overmind has mapped the target logic." })
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
            }
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
        }
    } finally { setLoading(false) }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-56 flex flex-col h-screen relative overflow-hidden border-l-4 border-primary/40 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${resonance}%`, backgroundImage: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.05), transparent 70%)' } as any} />
        
        {/* Header - Fixed Top */}
        <header className="p-4 md:p-8 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-30 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl shrink-0">
           <div className="flex items-center gap-6">
              <div className="size-16 md:size-20 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-glow animate-neural"><Wrench className="size-10 md:size-12 text-primary gold-glow" /></div>
              <div className="text-right">
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Reality <span className="text-primary">Master</span></h2>
                 <div className="flex items-center gap-3 mt-2 justify-end">
                    <span className="text-[12px] text-emerald-500 font-black animate-pulse uppercase tracking-widest">{resonance.toFixed(6)}% Resonance</span>
                    <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black italic tracking-widest px-6 py-1 rounded-full uppercase">v90.0_ULTRA</Badge>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-white/5 p-2 rounded-full border-2 border-white/10 w-full max-w-2xl shadow-inner">
              <Input 
                value={customPath} 
                onChange={(e) => setCustomPath(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)} 
                placeholder="Sector Path..."
                className="bg-transparent border-none focus-visible:ring-0 text-xl italic font-black text-white h-12 text-left placeholder:text-gray-800" 
              />
              <Button onClick={() => loadDirectory(customPath)} className="h-12 px-10 rounded-full bg-primary text-black font-black uppercase text-sm italic border-4 border-black/20 active:scale-95 transition-all">Jump</Button>
           </div>

           <div className="flex gap-4">
               <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                  <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
               </Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10 text-right">
           
           {/* File Tree */}
           <aside className="w-full lg:w-96 border-l-4 border-primary/20 bg-black/80 flex flex-col shrink-0 shadow-9xl order-last lg:order-none">
              <div className="p-6 border-b-4 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <span className="text-[14px] font-black text-primary uppercase tracking-widest italic flex items-center gap-4"><Database className="size-5" /> DNA Nodes</span>
                 <div className="flex gap-3">
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '.')} className="size-12 rounded-2xl hover:bg-primary/20 border-2 border-white/5 shadow-xl"><ChevronLeft className="size-6"/></Button>
                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-12 rounded-2xl hover:bg-primary/20 border-2 border-white/5 shadow-xl"><RefreshCcw className="size-5"/></Button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-3 text-right">
                 {files.map((file, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleFileSelect(file)} 
                        className={cn(
                            "p-4 rounded-2xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-4 border-transparent hover:border-primary/40 active:scale-95",
                            selectedFileName === file.name && "bg-primary/15 border-primary/60 shadow-inner scale-[1.02]"
                        )}
                    >
                       <ChevronRight className="size-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4"/>
                       <div className="flex items-center gap-6">
                            <div className="text-right">
                                <span className="text-sm md:text-xl font-black text-gray-300 group-hover:text-white truncate max-w-[200px] italic block">{file.name}</span>
                                {!file.isDirectory && <span className="text-[10px] text-muted-foreground uppercase font-black">{(file.size / 1024).toFixed(1)} KB</span>}
                            </div>
                            {file.isDirectory ? <FolderOpen className="size-6 text-primary animate-pulse"/> : <FileCode className="size-6 text-blue-400"/>}
                       </div>
                    </div>
                 ))}
              </div>
           </aside>

           {/* Workspace Area */}
           <div className="flex-1 flex flex-col overflow-hidden bg-black/40 p-8 space-y-8 pb-48">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full min-h-0">
                 
                 {/* Code Editor Chamber */}
                 <Card className="sovereign-card flex flex-col border-[12px] relative overflow-hidden min-h-0">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12 pointer-events-none"><Binary className="size-64 text-primary"/></div>
                    <div className="flex justify-between items-center mb-8 px-6 shrink-0">
                        <div className="flex items-center gap-8">
                            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center border-4 border-primary/40 shadow-2xl">
                                <Code2 className="size-8 text-primary gold-glow" />
                            </div>
                            <div className="text-right">
                                <h4 className="text-3xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4>
                                <span className="text-[12px] text-primary/60 font-black uppercase mt-2 block tracking-widest italic">{selectedFileName || "Awaiting Node..."}</span>
                            </div>
                        </div>
                        {selectedFileName && (
                            <Button onClick={handleGeneticInjection} className="h-14 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-2xl border-8 border-black/30 shadow-9xl italic px-10 transition-all active:scale-95 text-lg">
                                <Save className="size-6 mr-3" /> Sync_DNA
                            </Button>
                        )}
                    </div>
                    <div className="flex-1 relative min-h-0">
                        {selectedFileName ? (
                            <Textarea 
                                value={selectedFileContent} 
                                onChange={(e) => setSelectedFileContent(e.target.value)} 
                                className="h-full bg-black/99 p-10 rounded-[3rem] font-code text-lg md:text-2xl text-emerald-400 leading-relaxed italic border-8 border-white/5 shadow-inner whitespace-pre selection:bg-primary resize-none scrollbar-hide text-left" 
                            />
                        ) : (
                            <div className="h-full border-[12px] border-dashed border-primary/5 rounded-[4rem] flex flex-col items-center justify-center text-center opacity-10 gap-12">
                                <Atom className="size-48 text-primary animate-spin-slow" />
                                <h3 className="text-6xl font-black uppercase tracking-widest text-white italic">Awaiting DNA</h3>
                            </div>
                        )}
                    </div>
                 </Card>

                 {/* Overmind Area */}
                 <div className="flex flex-col gap-8 min-h-0">
                    <Card className="sovereign-card flex flex-col flex-1 border-[12px] relative overflow-hidden min-h-0">
                        <div className="flex items-center justify-between mb-10 border-b-8 border-white/5 pb-8 relative z-10 shrink-0">
                            <Badge className="bg-primary/20 text-primary border-4 border-primary/30 px-10 py-3 rounded-full font-black text-2xl italic animate-pulse shadow-9xl">OMNIPOTENT_SYNC</Badge>
                            <div className="flex items-center gap-8">
                                <h4 className="text-4xl md:text-6xl font-black italic gold-glow uppercase tracking-tighter leading-none">Intelligence</h4>
                                <div className="size-20 rounded-3xl bg-primary flex items-center justify-center border-[10px] border-black/30 shadow-3xl animate-neural">
                                    <BrainCircuit className="size-12 text-black" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto scrollbar-hide pr-4 space-y-8 text-right">
                           {analysis ? (
                             <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                                <div className="p-10 bg-primary/10 rounded-[4rem] border-[12px] border-primary/30 shadow-inner">
                                   <p className="text-3xl md:text-[5.5rem] text-white font-black italic leading-none text-center drop-shadow-9xl uppercase">"{analysis.commanderBrief}"</p>
                                </div>
                                <div className="p-10 bg-black/80 rounded-[3rem] border-4 border-white/5 shadow-inner">
                                   <span className="text-[14px] font-black text-primary uppercase block mb-6 italic tracking-widest border-b border-primary/10 pb-4 justify-end flex items-center gap-4">Structural DNA Mapping <GitBranch className="size-6" /></span>
                                   <p className="text-xl md:text-4xl text-gray-300 italic font-black leading-relaxed">{analysis.analysis}</p>
                                </div>
                                <div className="p-10 bg-emerald-600/10 rounded-[3rem] border-4 border-emerald-500/30 shadow-inner">
                                   <span className="text-[14px] font-black text-emerald-500 uppercase block mb-6 italic tracking-widest border-b border-emerald-500/10 pb-4 justify-end flex items-center gap-4">Genetic Fusion Plan <History className="size-6" /></span>
                                   <p className="text-xl md:text-4xl text-gray-100 italic font-black leading-relaxed">{analysis.geneticPlan}</p>
                                </div>
                             </div>
                           ) : (
                             <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                                <Boxes className="size-48 text-primary animate-pulse" />
                                <h3 className="text-7xl font-black uppercase tracking-widest text-white italic">Searching Matrix</h3>
                             </div>
                           )}
                        </div>
                        <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.01] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-64 text-primary" /></div>
                    </Card>

                    <div className="grid grid-cols-2 gap-8 shrink-0">
                        <Button onClick={() => handleAction('project_analysis')} disabled={loading} className="h-32 bg-white/5 border-8 border-primary/20 hover:border-primary rounded-[3.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-700 shadow-9xl group active:scale-95">
                            <Search className="size-12 text-primary group-hover:scale-125 transition-transform gold-glow" />
                            <span className="text-sm font-black uppercase tracking-widest text-white italic">Analyze_DNA</span>
                        </Button>
                        <Button onClick={() => handleAction('reality_overwrite')} disabled={loading} className="h-32 bg-white/5 border-8 border-emerald-500/20 hover:border-emerald-500 rounded-[3.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-700 shadow-9xl group active:scale-95">
                            <RotateCw className="size-12 text-emerald-400 group-hover:rotate-180 transition-all duration-1000" />
                            <span className="text-sm font-black uppercase tracking-widest text-white italic">Reality_Overwrite</span>
                        </Button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Command Input - Fixed Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/98 backdrop-blur-5xl border-t-[12px] border-primary/60 z-30 shadow-[0_-80px_250px_rgba(0,0,0,1)]">
           <div className="max-w-7xl mx-auto relative group">
              <Terminal className="absolute left-10 top-1/2 -translate-y-1/2 size-12 text-primary/40 group-focus-within:text-primary transition-all duration-1000 gold-glow" />
              <Input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleAction('file_fix')} 
                  placeholder=" Direct the Sovereign Architect to overwrite matrix reality..." 
                  className="h-28 md:h-36 bg-primary/5 border-8 border-white/10 rounded-full pl-32 pr-48 text-2xl md:text-5xl italic font-black focus:border-primary shadow-inner text-white transition-all duration-700 placeholder:text-gray-900 selection:bg-primary text-left"
              />
              <Button onClick={() => handleAction('file_fix')} disabled={loading || !input.trim()} className="absolute right-4 top-1/2 -translate-y-1/2 size-24 md:size-28 bg-primary hover:bg-white text-black rounded-full shadow-9xl transition-all active:scale-90 border-[16px] border-black/30 group italic">
                  {loading ? <Loader2 className="size-14 animate-spin" /> : <Send className="size-14 group-hover:translate-x-4 transition-transform" />}
              </Button>
           </div>
           <div className="flex justify-center gap-24 mt-8 opacity-30 text-[12px] font-black uppercase tracking-[8em] italic">
              <span className="flex items-center gap-8"><Fingerprint className="size-6 text-primary" /> GHAZALI_ROOT</span>
              <span className="flex items-center gap-8 text-primary"><InfinityIcon className="size-6 animate-pulse" /> SPINE_SYNC_v90</span>
           </div>
        </div>

        <div className="shrink-0 p-3 border-t border-white/5 flex justify-center items-center gap-12 opacity-30 text-[10px] font-black uppercase tracking-[4em] italic">
            <span>AL-MUIZZ SUPREME ARCHITECT v90.0</span>
            <div className="size-2 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>TOTAL_REALITY_OVERWRITE_2026</span>
        </div>
      </main>
    </div>
  )
}
