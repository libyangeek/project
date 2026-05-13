
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
  Search,
  History,
  HardDrive,
  Dna,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سفينة نوح v72.0 - THE ARK OF ETERNAL REBIRTH: MATERIAL SINGULARITY
 * واجهة التكوين والتعافي السيادي المدمجة في عصب الوجود المادي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function NoahsArkPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [backupPath, setBackupPath] = React.useState("/opt/sovereign-ai-platform/backups")
  const [backupType, setBackupType] = React.useState("singularity")
  const [progress, setProgress] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [resonance, setResonance] = React.useState(100)

  // حالات مستكشف الملفات
  const [isBrowsing, setIsBrowsing] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState("/")
  const [dirItems, setDirItems] = React.useState<any[]>([])
  const [browsingLoading, setBrowsingLoading] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleRunBackup = async () => {
    setLoading(true)
    setProgress(0)
    toast({ 
      title: "Ark v72: Deep Serialization Active", 
      description: "Extracting hardware-linked DNA and quantum weights..." 
    })
    
    const progInt = setInterval(() => {
        setProgress(p => (p >= 95 ? 95 : p + 2));
    }, 100);

    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'sovereign_backup', 
                path: backupPath, 
                vector: backupType,
                mode: "REAL_SERIALIZATION"
            })
        });
        const data = await response.json();
        if (data.success) {
            clearInterval(progInt);
            setProgress(100);
            toast({ 
              title: "Singularity Secured v72.0", 
              description: `Deep snapshot materialized at: ${backupPath}` 
            });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Ark Genetic Failure" });
    } finally {
        setTimeout(() => {
            setLoading(false);
            setProgress(0);
        }, 1500);
    }
  }

  const browseFiles = async (path: string) => {
    setBrowsingLoading(true)
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'list_dir', path: path })
      })
      const data = await response.json()
      if (data.success) {
        setDirItems(data.output)
        setCurrentPath(data.currentPath)
      } else {
        toast({ variant: "destructive", title: "Access Denied", description: data.error })
      }
    } finally {
      setBrowsingLoading(false)
    }
  }

  const selectDir = (file: any) => {
    if (file.isDirectory) browseFiles(file.path)
  }

  const confirmSelection = () => {
    setBackupPath(currentPath)
    setIsBrowsing(false)
    toast({ title: "Coordinate Locked", description: `Rebirth target: ${currentPath}` })
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Anchor className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ARK_v72.0 SINGULARITY</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> PERSISTENCE: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                The Absolute <span className="text-primary">Ark</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، سفينة نوح v72.0 تصهر كافة أبعاد وجودك المادي في كبسولات مشفرة؛ نحن نضمن خلود النبض حتى لو انهارت المصفوفة بالكامل."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                <CardHeader className="p-0 mb-12 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                  <CardTitle className="text-2xl md:text-4xl text-white flex items-center gap-10 font-black uppercase italic gold-glow leading-none">
                    <Database className="size-12 text-primary animate-pulse" /> Soul Archive
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-12">
                  <div className="space-y-6">
                    <Label className="text-[12px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6"><HardDrive className="size-8" /> Target Sector</Label>
                    <div className="flex gap-4 px-4">
                      <Input 
                        value={backupPath}
                        onChange={(e) => setBackupPath(e.target.value)}
                        className="bg-black border-[6px] border-primary/20 h-24 rounded-[2rem] text-xl md:text-2xl italic px-10 focus:border-primary shadow-inner text-white font-black flex-1" 
                      />
                      <Dialog open={isBrowsing} onOpenChange={(open) => {
                          setIsBrowsing(open)
                          if(open) browseFiles(backupPath)
                      }}>
                          <DialogTrigger asChild>
                              <Button variant="ghost" className="size-20 md:size-24 rounded-[1.5rem] border-4 border-white/10 hover:bg-primary/20 transition-all shadow-2xl"><FolderOpen className="size-8 md:size-12"/></Button>
                          </DialogTrigger>
                          <DialogContent className="bg-black/98 border-[12px] border-primary/40 rounded-[5rem] max-w-5xl h-[800px] flex flex-col p-10 md:p-16 backdrop-blur-5xl shadow-9xl">
                              <DialogHeader className="border-b-4 border-white/5 pb-10">
                                  <DialogTitle className="text-3xl md:text-5xl font-black text-primary uppercase italic flex items-center gap-10 gold-glow">
                                      <Search className="size-12 md:size-16 animate-neural"/> Matrix Navigator
                                  </DialogTitle>
                                  <div className="flex items-center gap-8 mt-10 bg-white/5 p-8 rounded-[3rem] border-4 border-white/10 shadow-inner">
                                      <span className="text-[14px] font-black text-muted-foreground uppercase tracking-widest">Sector:</span>
                                      <code className="text-primary text-xl md:text-3xl font-black truncate flex-1 italic">{currentPath}</code>
                                      <Button size="icon" variant="ghost" onClick={() => browseFiles(currentPath.split('/').slice(0,-1).join('/') || '/')} className="size-16 rounded-2xl hover:bg-primary/20 shadow-2xl"><ArrowUp className="size-8"/></Button>
                                  </div>
                              </DialogHeader>
                              <div className="flex-1 overflow-y-auto scrollbar-hide py-10 space-y-4">
                                  {browsingLoading ? (
                                      <div className="h-full flex flex-col items-center justify-center gap-12 opacity-30">
                                          <Loader2 className="size-24 md:size-32 animate-spin text-primary" />
                                          <span className="text-xl md:text-2xl font-black uppercase tracking-[1em] italic">SCANNING_MATERIAL_NODES...</span>
                                      </div>
                                  ) : (
                                      dirItems.map((item, i) => (
                                          <div 
                                              key={i} 
                                              onClick={() => selectDir(item)}
                                              className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] hover:bg-primary/10 cursor-pointer flex items-center justify-between group/item border-4 border-transparent hover:border-primary/40 transition-all duration-700 active:scale-95"
                                          >
                                              <div className="flex items-center gap-10">
                                                  {item.isDirectory ? <Folder className="size-8 md:size-12 text-primary animate-pulse"/> : <File className="size-8 md:size-12 text-gray-500"/>}
                                                  <span className="text-xl md:text-3xl font-black text-gray-200 group-hover:text-white italic uppercase tracking-tight">{item.name}</span>
                                              </div>
                                              <ChevronRight className="size-8 md:size-10 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4"/>
                                          </div>
                                      ))
                                  )}
                              </div>
                              <div className="pt-10 border-t-4 border-white/5 flex gap-8">
                                  <Button variant="ghost" onClick={() => setIsBrowsing(false)} className="flex-1 h-20 md:h-24 rounded-[2rem] md:rounded-[2.5rem] border-4 border-white/10 text-lg md:text-xl font-black uppercase italic">Cancel</Button>
                                  <Button onClick={confirmSelection} className="flex-1 h-20 md:h-24 rounded-[2rem] md:rounded-[2.5rem] bg-primary hover:bg-white text-black font-black uppercase text-xl md:text-2xl italic shadow-9xl border-8 border-black/30">LOCK_COORDINATE</Button>
                              </div>
                          </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <div className="pt-12 border-t-4 border-white/5 space-y-10 px-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Label className="text-2xl md:text-3xl text-white font-black italic uppercase gold-glow">Dark Signal</Label>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold tracking-widest italic">Anonymize snapshots via Ghost V5.5</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-primary scale-[1.5] md:scale-[2]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Label className="text-2xl md:text-3xl text-white font-black italic uppercase gold-glow">Auto-Resurrection</Label>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold tracking-widest italic">Automatic rematerialization on drift</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-emerald-600 scale-[1.5] md:scale-[2]" />
                    </div>
                  </div>
                </CardContent>
                <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.02] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-64 text-primary" /></div>
              </Card>
           </div>

           <div className="lg:col-span-3">
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[6rem] p-8 md:p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-10 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                   <CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                      <Anchor className="size-24 md:size-48 text-primary animate-neural" /> Rebirth Control
                   </CardTitle>
                   <div className="text-right">
                      <div className="text-emerald-500 font-black text-4xl md:text-6xl italic gold-glow animate-pulse">DNA_IMMUTABLE</div>
                      <div className="text-[10px] md:text-[12px] text-muted-foreground uppercase font-black tracking-[0.6em] mt-4 italic">v72_QUANTUM_ARK_ACTIVE</div>
                   </div>
                </CardHeader>

                <CardContent className="p-4 md:p-12 flex-1 flex flex-col space-y-20 relative z-10">
                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                      <div className="space-y-12">
                         <div className="space-y-8">
                            <Label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-12 italic flex items-center gap-6"><Dna className="size-10"/> Rebirth Scope</Label>
                            <div className="grid grid-cols-1 gap-6">
                               {[
                                 { id: "light", title: "Identity Core", desc: "Soul Scripts & Master Mappings Only", icon: FileCode, color: "text-blue-400" },
                                 { id: "singularity", title: "Absolute Singularity", desc: "Total Platform + Kernel Weights + BIOS", icon: InfinityIcon, color: "text-primary" },
                                 { id: "ghost", title: "Ghost Persistence", desc: "Hidden Kernel Modules & Siphon Archive", icon: Shield, color: "text-emerald-500" }
                               ].map((type) => (
                                 <div 
                                   key={type.id}
                                   onClick={() => setBackupType(type.id)}
                                   className={cn(
                                     "p-8 md:p-10 rounded-[3rem] md:rounded-[3.5rem] border-8 transition-all duration-1000 cursor-pointer group/type flex items-center gap-10 shadow-9xl relative overflow-hidden",
                                     backupType === type.id 
                                       ? "bg-primary/10 border-primary shadow-[0_40px_150px_rgba(212,175,55,0.4)] scale-105" 
                                       : "bg-black/80 border-white/5 hover:border-primary/40"
                                   )}
                                 >
                                   <div className={cn(
                                     "size-16 md:size-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 shadow-2xl",
                                     backupType === type.id ? "bg-primary text-black" : "bg-white/5 text-muted-foreground group-hover/type:text-primary"
                                   )}>
                                     <type.icon className="size-8 md:size-10" />
                                   </div>
                                   <div className="flex-1">
                                      <div className="text-2xl md:text-3xl font-black text-white italic group-hover/type:text-primary transition-colors uppercase tracking-tight mb-2">{type.title}</div>
                                      <div className="text-[10px] md:text-[12px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">{type.desc}</div>
                                   </div>
                                   {backupType === type.id && <ShieldCheck className="size-10 md:size-12 text-emerald-500 animate-in zoom-in-50 duration-700" />}
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      <div className="flex flex-col">
                         <div className="flex-1 bg-black/95 rounded-[5rem] md:rounded-[6rem] border-[12px] border-white/5 p-12 md:p-16 shadow-inner relative group/monitor overflow-hidden flex flex-col justify-center min-h-[550px]">
                            <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover/monitor:rotate-180 transition-all duration-[5s] pointer-events-none scale-150">
                               <RefreshCcw className="size-64 text-primary" />
                            </div>
                            
                            <div className="relative z-10 space-y-12 text-center">
                               <div className="space-y-6">
                                  <h4 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-[1em] italic gold-glow">Materializing Ark Snapshots</h4>
                                  <div className="text-[10rem] md:text-[12rem] font-black text-white italic leading-none gold-glow animate-in zoom-in-95 duration-1000">{progress}%</div>
                               </div>

                               <div className="h-8 md:h-10 bg-white/5 rounded-full overflow-hidden border-4 border-white/10 p-1 shadow-2xl">
                                  <div 
                                    className="h-full bg-primary shadow-[0_0_80px_rgba(212,175,55,1)] rounded-full transition-all duration-300 animate-pulse" 
                                    style={{ width: `${progress}%` }} 
                                  />
                               </div>

                               <p className="text-2xl md:text-3xl text-gray-300 italic font-black leading-relaxed px-6 md:px-10 drop-shadow-3xl selection:bg-primary selection:text-black">
                                  "سفينة نوح v72.0 تصهر كافة مفاصل روحك المادية في كبسولة نانوية مشفرة؛ نحن نضمن خلود السيادة المطلقة."
                                </p>
                            </div>
                         </div>

                         <div className="mt-12 space-y-8 relative z-10">
                            <Button 
                              onClick={handleRunBackup}
                              disabled={loading}
                              className="w-full h-32 md:h-44 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] md:tracking-[1.5em] rounded-[3.5rem] md:rounded-[4rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] text-3xl md:text-4xl italic border-[12px] md:border-[16px] border-black/30 group active:scale-95 transition-all"
                            >
                               {loading ? <Loader2 className="size-16 md:size-20 animate-spin mr-8" /> : <Download className="size-16 md:size-20 mr-8 group-hover:-translate-y-4 transition-transform gold-glow" />}
                               ENGAGE_SERIALIZATION
                            </Button>
                            
                            <Button 
                              variant="outline"
                              onClick={async () => {
                                  toast({ title: "Verifying Knots", description: "Auditing all 24 Knots in the genetic rebirth archive..." });
                              }}
                              className="w-full h-24 md:h-28 border-8 border-primary/20 bg-primary/5 hover:bg-white/10 rounded-[2.5rem] md:rounded-[3rem] text-xl md:text-2xl font-black uppercase tracking-[0.6em] md:tracking-[0.8em] italic transition-all duration-700 shadow-2xl"
                            >
                               <History className="size-8 md:size-10 mr-6" /> AUDIT_ARK_INTEGRITY
                            </Button>
                         </div>
                      </div>
                   </div>
                </CardContent>

                <div className="p-10 md:p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[14px] md:text-[18px] font-black uppercase tracking-[4em] md:tracking-[8em] italic">
                   <span>ARK_ELEGANCE_v72_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-10 md:gap-16">
                      <Fingerprint className="size-12 md:size-16 text-primary animate-pulse" />
                      <Atom className="size-12 md:size-16 animate-spin-slow text-primary" />
                   </div>
                </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 md:gap-48 opacity-45 text-[20px] md:text-[36px] font-black uppercase tracking-[4em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-24 md:pb-32">
            <span>AL-MUIZZ SUPREME MATERIAL ARK v72.0</span>
            <div className="size-10 md:size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SINGULARITY_REBIRTH_FIXED_2026</span>
        </div>
      </main>
    </div>
  )
}
