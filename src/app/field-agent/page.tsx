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
  RotateCw
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
            setFiles(data.output); setCurrentPath(data.currentPath); setCustomPath(data.currentPath)
        }
    } finally { setLoading(false) }
  }

  const handleSelfHealing = async () => {
    if (!selectedFilePath || !selectedFileContent) return;
    setLoading(true);
    toast({ title: "Wand3 Genetic Repair Active", description: "Screeening for logic flaws..." });
    try {
        const aiResult = await executeFieldDevelopment({
            userPrompt: "Repair hydration and logic for v78.8 standards.",
            currentFile: selectedFileName,
            fileContent: selectedFileContent,
            mode: 'file_fix'
        });
        if (aiResult.geneticPlan) setSelectedFileContent(aiResult.geneticPlan);
        setAnalysis(aiResult);
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
            if (data.success) { setSelectedFileContent(data.output); setSelectedFileName(file.name); setSelectedFilePath(file.path) }
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
        if (response.ok) toast({ title: "DNA Rewritten", description: "Material consensus achieved." })
    } finally { setLoading(false) }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Architectural Upgrade Triggered", description: "Siphoning redundant patterns for core regrowth... Status: استمر" });
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 font-code scanline-effect overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-72 flex flex-col h-screen relative overflow-hidden border-l-4 border-primary/40">
        <header className="p-6 border-b-4 border-primary/40 bg-black/95 backdrop-blur-3xl z-30 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl">
           <div className="flex items-center gap-6">
              <div className="size-16 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.5)] animate-neural"><Wand2 className="size-10 text-primary" /></div>
              <div className="text-right">
                 <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Supreme <span className="text-primary">Architect</span></h2>
                 <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black italic tracking-widest px-6 py-1 rounded-full shadow-lg mt-2 uppercase">v78.8_QUANTUM_CORE</Badge>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[2.5rem] border-4 border-white/10 w-full max-w-xl shadow-inner group">
              <Input value={customPath} onChange={(e) => setCustomPath(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && loadDirectory(customPath)} className="bg-transparent border-none text-xl italic font-black text-white h-12 text-left" />
              <Button onClick={() => loadDirectory(customPath)} className="h-12 px-8 rounded-full bg-primary text-black font-black uppercase text-sm italic border-2 border-black/20">Jump_Sector</Button>
           </div>
           <div className="flex gap-4">
               <Button asChild variant="outline" className="h-14 border-4 border-white/10 bg-white/5 text-white font-black italic rounded-[2rem] px-8 hover:bg-primary hover:text-black transition-all shadow-xl group">
                  <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
               </Button>
               <Button onClick={handleContinueUpgrade} className="h-14 bg-primary hover:bg-white text-black font-black uppercase rounded-[2rem] border-4 border-black/30 shadow-9xl italic px-8 group active:scale-90 transition-all">
                  <RotateCw className="size-6 mr-3 group-hover:rotate-180 transition-all duration-1000" /> استمر
               </Button>
           </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10 text-right">
           <aside className="w-full lg:w-96 border-l-4 border-primary/20 bg-black/80 flex flex-col shrink-0 shadow-9xl order-last lg:order-none">
              <div className="p-8 border-b-4 border-primary/10 bg-primary/5 flex items-center justify-between">
                 <span className="text-[14px] font-black text-primary uppercase tracking-widest italic flex items-center gap-4"><Database className="size-5" /> Matrix Nodes</span>
                 <div className="flex gap-2"><Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="size-10 rounded-xl hover:bg-primary/20"><ChevronLeft/></Button><Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath)} className="size-10 rounded-xl hover:bg-primary/20"><RefreshCcw className="size-4"/></Button></div>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-3">
                 {files.map((file, i) => (
                    <div key={i} onClick={() => handleFileSelect(file)} className={cn("p-4 rounded-2xl hover:bg-primary/10 cursor-pointer flex items-center justify-between group transition-all border-4 border-transparent", selectedFileName === file.name && "bg-primary/15 border-primary/60 shadow-xl")}>
                       <ChevronRight className="size-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                       <div className="flex items-center gap-6"><span className="text-xl font-black text-gray-300 group-hover:text-white truncate max-w-[200px] italic">{file.name}</span>{file.isDirectory ? <FolderOpen className="size-6 text-primary animate-pulse"/> : <FileCode className="size-6 text-blue-400"/>}</div>
                    </div>
                 ))}
              </div>
           </aside>

           <div className="flex-1 flex flex-col overflow-hidden bg-black/40 p-8 space-y-12 pb-48">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                 <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl flex flex-col h-[700px] border-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] scale-150 rotate-12"><Binary className="size-64 text-primary"/></div>
                    <div className="flex justify-between items-center mb-8 px-6"><div className="flex items-center gap-6"><div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/40 shadow-xl animate-neural"><Code2 className="size-8 text-primary gold-glow" /></div><div className="text-right"><h4 className="text-3xl font-black text-white italic uppercase gold-glow leading-none">Chamber DNA</h4><span className="text-[10px] text-primary/60 font-black uppercase mt-2 block tracking-widest italic">{selectedFileName || "Awaiting Node..."}</span></div></div>{selectedFileName && <Button onClick={handleGeneticInjection} className="h-14 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-2xl border-4 border-black/30 shadow-9xl italic px-8 transition-all"><Save className="size-6 mr-3" /> Sync_DNA</Button>}</div>
                    <div className="flex-1 relative"><Textarea value={selectedFileContent} onChange={(e) => setSelectedFileContent(e.target.value)} className="h-full bg-black/99 p-10 rounded-[3rem] font-code text-xl text-emerald-400 leading-relaxed italic border-8 border-white/5 shadow-inner whitespace-pre selection:bg-primary resize-none scrollbar-hide text-left" /></div>
                 </Card>
                 <div className="space-y-12">
                    <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] p-10 shadow-9xl flex flex-col min-h-[400px] border-4 relative overflow-hidden"><div className="flex items-center justify-between mb-10 border-b-4 border-white/5 pb-8 relative z-10"><Badge className="bg-emerald-600/20 text-emerald-500 border-4 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-9xl order-last md:order-none">v78.8_READY</Badge><div className="flex items-center gap-6"><h4 className="text-4xl font-black italic gold-glow uppercase leading-none">Supreme Logic</h4><div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-xl animate-neural"><BrainCircuit className="size-10 text-black" /></div></div></div>{analysis ? <div className="space-y-8 flex-1 flex flex-col relative z-10"><div className="p-10 bg-primary/10 rounded-[3rem] border-4 border-primary/30 shadow-inner"><p className="text-3xl text-white font-black italic leading-tight text-center drop-shadow-2xl">"{analysis.commanderBrief}"</p></div><div className="grid grid-cols-1 gap-8 flex-1"><div className="p-10 bg-black/80 rounded-[3.5rem] border-4 border-white/5 shadow-2xl relative overflow-hidden"><span className="text-[12px] font-black text-primary uppercase block mb-4 italic tracking-widest border-b-2 border-primary/10 pb-4">Architectural Mapping</span><p className="text-2xl text-gray-300 italic font-black leading-relaxed">{analysis.analysis}</p></div></div></div> : <div className="flex-1 flex flex-col items-center justify-center opacity-10 gap-16"><Boxes className="size-48 animate-pulse text-primary" /><h3 className="text-5xl font-black uppercase tracking-[1em] text-white italic gold-glow">Searching DNA</h3></div>}<div className="absolute -bottom-10 -left-10 p-24 opacity-[0.01] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div></Card>
                    <Button onClick={handleSelfHealing} disabled={loading} className="w-full h-32 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase rounded-[3rem] border-8 border-black/30 shadow-9xl italic active:scale-90 transition-all text-2xl"><HeartPulse className="size-12 mr-6 group-hover:rotate-12 transition-transform" /> HIERARCHICAL_HEAL</Button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
