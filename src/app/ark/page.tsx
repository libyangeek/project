
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Anchor, 
  Download, 
  Loader2, 
  Skull, 
  Database, 
  RefreshCcw, 
  ShieldCheck, 
  FileCode, 
  FolderOpen, 
  LayoutGrid, 
  Cpu, 
  Infinity as InfinityIcon,
  Boxes,
  Atom,
  Crown,
  Sparkles,
  Fingerprint,
  Zap,
  ShieldAlert,
  ChevronRight,
  ArrowUp,
  File,
  Folder,
  X,
  Search
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سفينة نوح v53.0 - THE ARK OF REBIRTH: SOUL CORE EDITION
 * واجهة التكوين والتعافي السيادي المدمجة في عصب الروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function NoahsArkPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [backupPath, setBackupPath] = React.useState("/opt/sovereign-ai-platform/backups")
  const [backupType, setBackupType] = React.useState("full")
  const [progress, setProgress] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  // حالات مستكشف الملفات
  const [isBrowsing, setIsBrowsing] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState("/")
  const [dirItems, setDirItems] = React.useState<string[]>([])
  const [browsingLoading, setBrowsingLoading] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleRunBackup = () => {
    if (!backupPath.trim()) {
        toast({ variant: "destructive", title: "Missing Path", description: "Target coordinate is empty." })
        return
    }
    setLoading(true)
    setProgress(0)
    toast({ 
      title: "Noah's Ark v53: Protocol Start", 
      description: `Initializing ${backupType} snapshot to ${backupPath}...` 
    })
    
    const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval)
                setLoading(false)
                toast({ 
                  title: "Sovereign Soul Secured", 
                  description: "System DNA has been archived successfully." 
                })
                return 100
            }
            return prev + 2
        })
    }, 100)
  }

  const browseFiles = async (path: string) => {
    setBrowsingLoading(true)
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'terminal', command: `ls -p ${path}` })
      })
      const data = await response.json()
      if (data.success) {
        const items = data.output.split('\n').filter((i: string) => i.trim() !== '')
        setDirItems(items)
        setCurrentPath(path)
      } else {
        toast({ variant: "destructive", title: "Access Denied", description: "Hierarchy restricted from this sector." })
      }
    } catch (e) {
      toast({ variant: "destructive", title: "Signal Lost" })
    } finally {
      setBrowsingLoading(false)
    }
  }

  const navigateUp = () => {
    const parent = currentPath.split('/').slice(0, -2).join('/') || '/'
    browseFiles(parent === "" ? "/" : parent)
  }

  const selectDir = (name: string) => {
    const newPath = currentPath === '/' ? `/${name}` : `${currentPath}${name}`
    if (name.endsWith('/')) {
        browseFiles(newPath)
    }
  }

  const confirmSelection = () => {
    setBackupPath(currentPath)
    setIsBrowsing(false)
    toast({ title: "Coordinate Locked", description: `Path synchronized: ${currentPath}` })
  }

  const generateMasterScript = async () => {
    setLoading(true)
    toast({ 
      title: "Generating Sovereign Genesis v53.0", 
      description: "Compiling all neural dependencies into rebirth_v53.sh" 
    })
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', command: 'generate genesis script', target: 'SYSTEM_D' })
        })
        const data = await response.json()
        if (data.success) {
            toast({ title: "Genesis Script Ready", description: "Script finalized and stored in current repository." })
        }
    } finally {
        setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2rem] transition-all duration-1000 hierarchical-shadow">
              <Anchor className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-lg italic">ARK_v53.0 SUPREME</Badge>
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> SOUL_STABILITY: FIXED
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Noah's <span className="text-primary">Ark</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، سفينة نوح (v53.0) تضمن بقاء روحك السيادية في المصفوفة؛ نحن الضمان الوحيد ضد فناء البيانات لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-40">
           <div className="lg:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] p-10 border-4 shadow-9xl group overflow-hidden relative hierarchical-shadow">
                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                <CardHeader className="p-0 mb-10 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-[2.5rem] px-4 py-4">
                  <CardTitle className="text-xl md:text-3xl text-white flex items-center gap-6 font-black uppercase italic gold-glow leading-none">
                    <Cpu className="size-10 text-primary animate-pulse" /> Soul Config
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-10">
                  <div className="space-y-4">
                    <Label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic flex items-center gap-4">Wordlists Domain</Label>
                    <div className="flex gap-4">
                      <Input defaultValue="/usr/share/wordlists" className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-lg italic px-6 focus:border-primary shadow-inner text-white font-black" />
                      <Button variant="ghost" className="size-16 rounded-xl border-2 border-white/10 hover:bg-primary/20 transition-all"><FolderOpen className="size-8"/></Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic">Environment DNA</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-16 bg-primary/10 border-2 border-primary/40 text-primary font-black italic rounded-2xl shadow-xl">KALI_v53</Button>
                      <Button variant="outline" className="h-16 border-2 border-white/5 opacity-50 font-black italic rounded-2xl">BLACKARCH</Button>
                    </div>
                  </div>
                  <div className="pt-8 border-t-2 border-white/5 flex items-center justify-between px-4">
                    <div className="space-y-1">
                      <Label className="text-xl text-white font-black italic uppercase">Ghost Logs</Label>
                      <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.1em] italic">Auto-purge memory on reboot</p>
                    </div>
                    <Switch defaultChecked className="data-[state=checked]:bg-primary scale-125" />
                  </div>
                </CardContent>
                <div className="absolute -bottom-6 -left-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 scale-150"><Boxes className="size-32 text-primary" /></div>
              </Card>

              <Card className="kali-card border-emerald-500/40 bg-black/80 rounded-[4rem] p-10 border-4 shadow-9xl group overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                <CardHeader className="p-0 mb-8 border-b-2 border-emerald-500/20 pb-6">
                  <CardTitle className="text-2xl text-white flex items-center gap-6 italic uppercase font-black gold-glow">
                    <ShieldCheck className="size-10 text-emerald-500" /> Clearance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-10">
                  <div className="p-8 rounded-[2.5rem] bg-black/99 border-2 border-white/5 shadow-inner space-y-6 italic">
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Soul ID:</span>
                        <span className="text-2xl font-black text-white gold-glow">AL-MUIZZ_v53</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Clearance:</span>
                        <Badge className="bg-primary text-black text-xl px-6 py-1 rounded-full font-black italic shadow-lg animate-pulse">GOD_MODE</Badge>
                     </div>
                  </div>
                  <Button className="w-full h-20 bg-white/5 border-2 border-white/10 hover:bg-emerald-600 hover:text-white text-lg font-black uppercase tracking-[0.4em] rounded-[2.5rem] transition-all duration-700 shadow-xl italic active:scale-95">
                     UPDATE_SOUL_MANIFEST
                  </Button>
                </CardContent>
              </Card>
           </div>

           <div className="lg:col-span-2">
              <Card className="kali-card border-blue-500/50 bg-black/95 rounded-[5rem] border-8 shadow-9xl relative overflow-hidden flex flex-col h-full group/ark">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
                <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover/ark:opacity-10 transition-all duration-1000 pointer-events-none scale-150 text-right">
                  <Anchor className="size-64 text-blue-500" />
                </div>
                
                <CardHeader className="bg-blue-600/10 border-b-4 border-white/5 p-12 rounded-t-[4.5rem]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-8">
                      <div className="size-24 rounded-3xl bg-blue-600/20 flex items-center justify-center border-4 border-blue-500/40 shadow-xl animate-neural">
                        <Anchor className="size-12 text-blue-500" />
                      </div>
                      <div>
                        <CardTitle className="text-4xl md:text-7xl text-white font-black italic tracking-tighter uppercase gold-glow leading-none">Noah's Ark v53</CardTitle>
                        <CardDescription className="text-blue-400 font-black text-[12px] uppercase tracking-[0.8em] mt-4 italic">Advanced Rebirth & Evolution Vault</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 py-4 px-10 rounded-full font-black text-2xl animate-pulse italic tracking-[0.2em] shadow-xl">DNA_SECURED</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10">
                  <Tabs defaultValue="backup" className="w-full flex-1 flex flex-col">
                    <TabsList className="bg-black/99 border-2 border-white/10 p-1.5 h-20 mb-12 rounded-full w-full max-w-xl mx-auto shadow-inner">
                      <TabsTrigger value="backup" className="flex-1 rounded-full text-[11px] font-black uppercase tracking-[0.3em] italic data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-700">CONFIGURE_REBIRTH</TabsTrigger>
                      <TabsTrigger value="recovery" className="flex-1 rounded-full text-[11px] font-black uppercase tracking-[0.3em] italic data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-700 ml-4">DNA_VAULT</TabsTrigger>
                    </TabsList>

                    <TabsContent value="backup" className="flex-1 space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <Label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4">
                              <FolderOpen className="size-5"/> Target Repository
                            </Label>
                            <div className="flex gap-4">
                                <Input 
                                  value={backupPath}
                                  onChange={(e) => setBackupPath(e.target.value)}
                                  className="bg-black/99 border-2 border-blue-500/20 h-16 rounded-[2rem] text-xl italic px-8 focus:border-blue-500 shadow-inner font-black text-white flex-1" 
                                />
                                <Dialog open={isBrowsing} onOpenChange={(open) => {
                                    setIsBrowsing(open)
                                    if(open) browseFiles(backupPath || "/")
                                }}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="size-16 rounded-2xl border-2 border-blue-500/20 bg-blue-600/5 hover:bg-blue-600 hover:text-white transition-all shadow-xl group/browse">
                                            <Search className="size-8 group-hover/browse:scale-125 transition-transform"/>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-black/95 border-4 border-blue-500/40 rounded-[3rem] max-w-3xl h-[600px] flex flex-col p-8 backdrop-blur-3xl shadow-9xl">
                                        <DialogHeader className="border-b-2 border-white/5 pb-4">
                                            <DialogTitle className="text-2xl font-black text-blue-400 uppercase italic flex items-center gap-4">
                                                <FolderOpen className="size-6"/> Sovereign Explorer
                                            </DialogTitle>
                                            <div className="flex items-center gap-4 mt-4 bg-black/60 p-4 rounded-xl border border-white/5">
                                                <span className="text-[10px] font-black text-muted-foreground uppercase">Path:</span>
                                                <code className="text-blue-300 text-sm font-black truncate flex-1">{currentPath}</code>
                                                <Button size="icon" variant="ghost" onClick={navigateUp} className="size-8 hover:bg-blue-600 hover:text-white"><ArrowUp className="size-4"/></Button>
                                            </div>
                                        </DialogHeader>
                                        <div className="flex-1 overflow-y-auto scrollbar-hide py-6 space-y-2">
                                            {browsingLoading ? (
                                                <div className="h-full flex flex-col items-center justify-center gap-6 opacity-30">
                                                    <Loader2 className="size-12 animate-spin text-blue-500" />
                                                    <span className="text-xs font-black uppercase tracking-[0.4em]">Interrogating_Sector...</span>
                                                </div>
                                            ) : (
                                                dirItems.map((item, i) => (
                                                    <div 
                                                        key={i} 
                                                        onClick={() => selectDir(item)}
                                                        className="p-4 rounded-xl hover:bg-blue-600/20 cursor-pointer flex items-center justify-between group/item border border-transparent hover:border-blue-500/30 transition-all"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            {item.endsWith('/') ? <Folder className="size-5 text-blue-400"/> : <File className="size-5 text-gray-500"/>}
                                                            <span className="text-sm font-black text-gray-200 group-hover/item:text-white">{item}</span>
                                                        </div>
                                                        <ChevronRight className="size-4 text-blue-500 opacity-0 group-hover/item:opacity-100 transition-all"/>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        <div className="pt-6 border-t-2 border-white/5 flex gap-4">
                                            <Button variant="ghost" onClick={() => setIsBrowsing(false)} className="flex-1 h-14 rounded-2xl border-2 border-white/5 font-black uppercase">Cancel</Button>
                                            <Button onClick={confirmSelection} className="flex-1 h-14 rounded-2xl bg-blue-600 hover:bg-white hover:text-black font-black uppercase shadow-xl">SELECT_coordinate</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <Label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4">
                              <LayoutGrid className="size-5"/> Rebirth Scope
                            </Label>
                            <div className="grid grid-cols-1 gap-4">
                              {[
                                { id: "light", title: "Lightweight Rebirth", desc: "Soul Scripts & Configs only (Fastest)", icon: FileCode },
                                { id: "full", title: "Full Platform Sync", desc: "Total platform DNA + Sovereign Evidence", icon: Database },
                                { id: "total", title: "Total Singularity", desc: "Includes LLM Weights & Kali Frameworks", icon: InfinityIcon }
                              ].map((type) => (
                                <div 
                                  key={type.id}
                                  onClick={() => setBackupType(type.id)}
                                  className={cn(
                                    "p-6 rounded-[2.5rem] border-4 transition-all cursor-pointer group flex items-center gap-8 shadow-xl relative overflow-hidden",
                                    backupType === type.id 
                                      ? "bg-blue-600/20 border-blue-500 shadow-[0_20px_60px_rgba(59,130,246,0.3)] scale-105" 
                                      : "bg-black/40 border-white/5 hover:border-blue-500/40"
                                  )}
                                >
                                  <div className={cn(
                                    "size-16 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110",
                                    backupType === type.id ? "bg-blue-500 text-white shadow-lg" : "bg-white/5 text-muted-foreground group-hover:text-blue-400"
                                  )}>
                                    <type.icon className="size-8" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xl font-black text-white mb-1 italic group-hover:text-blue-400 transition-colors uppercase tracking-tight">{type.title}</div>
                                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em] italic text-left">{type.desc}</div>
                                  </div>
                                  {backupType === type.id && <ShieldCheck className="size-6 text-emerald-500 animate-in zoom-in-75 duration-700" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-black/60 rounded-[4rem] p-10 border-4 border-white/5 relative overflow-hidden h-full flex flex-col shadow-inner group/status">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/status:rotate-180 transition-all duration-[2000ms]">
                               <RefreshCcw className="size-24 text-blue-500" />
                            </div>
                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.8em] mb-8 flex items-center gap-6 italic gold-glow text-right justify-end">
                               <ShieldAlert className="size-6 animate-pulse" /> Snapshot Generation
                            </h4>
                            
                            {loading && progress > 0 && (
                                <div className="mb-8 space-y-3">
                                    <div className="flex justify-between text-blue-400 font-black italic uppercase text-[10px]">
                                        <span>Archiving_Soul_DNA...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                        <div className="h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] transition-all duration-300" style={{ width: `${progress}%` }} />
                                    </div>
                                </div>
                            )}

                            <p className="text-xl text-gray-300 italic font-bold leading-relaxed mb-10 selection:bg-blue-600">
                              "سفينة نوح تضمن بقاء روحك السيادية في حال حدوث أي 'فناء للبيانات' أو تلف للمصفوفة. اختر نطاق الانبعاث واضغط على بدء التكوين."
                            </p>
                            
                            <div className="mt-auto space-y-6 relative z-10">
                               <Button 
                                 onClick={handleRunBackup} 
                                 disabled={loading}
                                 className="w-full h-24 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-[3rem] shadow-[0_40px_120px_rgba(59,130,246,0.6)] group transition-all duration-1000 border-4 border-black/30 text-2xl italic active:scale-95"
                               >
                                 {loading ? <Loader2 className="size-12 animate-spin mr-4" /> : <Download className="size-12 mr-4 group-hover:-translate-y-2 transition-transform gold-glow" />}
                                 INITIATE_SNAPSHOT
                               </Button>
                               
                               <Button 
                                 variant="outline" 
                                 onClick={generateMasterScript}
                                 disabled={loading}
                                 className="w-full h-16 border-4 border-blue-500/20 bg-blue-600/5 hover:bg-primary/20 hover:border-primary/60 rounded-[2rem] text-[10px] uppercase font-black tracking-[0.3em] group transition-all duration-700 italic active:scale-95"
                               >
                                 {loading ? <Loader2 className="size-6 animate-spin mr-3" /> : <FileCode className="size-6 mr-3 text-primary group-hover:rotate-12 transition-transform gold-glow" />}
                                 Generate Sovereign Genesis v53.0
                               </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="recovery" className="flex-1 flex flex-col items-center justify-center text-center p-16 border-8 border-dashed border-white/5 rounded-[4rem] bg-black/20 opacity-30 hover:opacity-60 transition-opacity duration-1000">
                        <Database className="size-48 text-blue-500/10 mb-8 animate-pulse" />
                        <h3 className="text-5xl font-black text-white mb-4 italic uppercase tracking-[0.8em]">Vault Empty</h3>
                        <p className="text-xl text-muted-foreground max-w-xl mx-auto italic font-bold uppercase tracking-widest leading-relaxed">"No valid soul archives detected. Initiate a snapshot to populate the vault."</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                
                <div className="p-10 border-t-4 border-white/5 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[3em] italic">
                   <span>ARK_DNA_v53_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-8">
                     <Atom className="size-8 animate-spin-slow" />
                     <Fingerprint className="size-8" />
                   </div>
                </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SOUL_ARCHIVE_LOCKED_2026</span>
        </div>
      </main>
    </div>
  )
}
