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
  Shield,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Monitor,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * سفينة نوح v80.0 - THE ABSOLUTE ARK: HARD DRIVE ACCESS
 * واجهة النسخ الاحتياطي التي تتصفح أحشاء الجهاز (الأقراص والقطاعات) لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function NoahsArkPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [backupPath, setBackupPath] = React.useState(".")
  const [backupType, setBackupType] = React.useState("singularity")
  const [progress, setProgress] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [resonance, setResonance] = React.useState(100)
  const [isBrowsing, setIsBrowsing] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState(".")
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
        setDirItems(data.output || [])
        setCurrentPath(data.currentPath)
      } else {
        toast({ variant: "destructive", title: "Access Restricted", description: data.error })
      }
    } catch (e) {
        console.error('File browsing failure:', e);
    } finally {
      setBrowsingLoading(false)
    }
  }

  const confirmSelection = () => {
    setBackupPath(currentPath)
    setIsBrowsing(false)
    toast({ title: "Coordinate Locked", description: `Sector [${currentPath}] set as backup target.` })
  }

  const handleRunBackup = async () => {
    if (!backupPath) return;
    setLoading(true); setProgress(0)
    toast({ title: "Ark v80.0: Serialization Active", description: "Extracting DNA from hardware disks..." })
    const progInt = setInterval(() => { setProgress(p => (p >= 95 ? 95 : p + 5)) }, 150)
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', target: `backup path ${backupPath}` })
        })
        const data = await response.json()
        if (data.success) {
            clearInterval(progInt); setProgress(100)
            toast({ title: "Singularity Secured", description: "Deep snapshot materialized in target disk." })
        }
    } catch (e) {
        console.error('Backup Execution Failure:', e);
    } finally {
        setTimeout(() => { setLoading(false); setProgress(0) }, 1000)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
            <Anchor className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
            <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ARK_v80.0 ULTRA</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> DISK_SYNC: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The Absolute <span className="text-primary">Ark</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                ايها المعز فعلها الواجه تعمل حتي الان هنا يمكننا صنع باك اب ؟
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                    <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                </Button>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                  <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                    <HardDrive className="size-12 animate-pulse" /> Material Disks
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-12 text-right">
                  <div className="space-y-6 text-right">
                    <Label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Database className="size-8" /> Capture Sector</Label>
                    <div className="flex gap-4 px-4">
                      <Dialog open={isBrowsing} onOpenChange={(open) => { setIsBrowsing(open); if(open) browseFiles(backupPath) }}>
                          <DialogTrigger asChild>
                              <Button variant="ghost" className="size-20 md:size-24 rounded-[1.5rem] border-4 border-white/10 hover:bg-primary/20 transition-all shadow-2xl"><FolderOpen className="size-8 md:size-12"/></Button>
                          </DialogTrigger>
                          <DialogContent className="bg-black/98 border-[12px] border-primary/40 rounded-[5rem] max-w-5xl h-[800px] flex flex-col p-10 md:p-16 backdrop-blur-5xl shadow-9xl">
                              <DialogHeader className="border-b-4 border-white/5 pb-10 text-right">
                                  <DialogTitle className="text-xl md:text-3xl font-black text-primary uppercase italic flex items-center gap-6 gold-glow justify-end leading-relaxed">
                                      ايها المعز من المفترض انها تتصفح المكان الذي يكون عليه الباك اب اجعلها تتصفح الجهاز الحالي الذي فاتح منا الجلسة الحالية او اي جلسة اخري فهمتني ؟
                                  </DialogTitle>
                                  <div className="flex items-center gap-8 mt-10 bg-white/5 p-8 rounded-[3rem] border-4 border-white/10 shadow-inner">
                                      <div className="flex gap-4">
                                          <Button size="icon" variant="ghost" onClick={() => browseFiles("/")} className="size-16 rounded-2xl hover:bg-primary/20 border-2 border-primary/20 shadow-2xl" title="System Root"><Monitor className="size-8 text-primary"/></Button>
                                          <Button size="icon" variant="ghost" onClick={() => browseFiles(currentPath.split('/').slice(0,-1).join('/') || '/')} className="size-16 rounded-2xl hover:bg-primary/20 shadow-2xl"><ArrowUp className="size-8"/></Button>
                                      </div>
                                      <code className="text-primary text-xl md:text-2xl font-black truncate flex-1 italic text-left dir-ltr">{currentPath}</code>
                                  </div>
                              </DialogHeader>
                              <div className="flex-1 overflow-y-auto scrollbar-hide py-10 space-y-4 text-right">
                                  {browsingLoading ? (
                                      <div className="h-full flex flex-col items-center justify-center gap-12 opacity-30">
                                          <Loader2 className="size-24 md:size-32 animate-spin text-primary" />
                                          <span className="text-xl md:text-2xl font-black uppercase tracking-[1em] italic">ACCESSING_SYSTEM_ROOT...</span>
                                      </div>
                                  ) : (
                                      dirItems.map((item, i) => (
                                          <div key={i} onClick={() => item.isDirectory && browseFiles(item.path)} className="p-6 md:p-8 rounded-[2.5rem] hover:bg-primary/10 cursor-pointer flex items-center justify-between group/item border-4 border-transparent hover:border-primary/40 transition-all duration-700 active:scale-95">
                                              <ChevronRight className="size-8 md:size-10 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4"/>
                                              <div className="flex items-center gap-10">
                                                  <span className="text-xl md:text-3xl font-black text-gray-200 group-hover:text-white italic uppercase tracking-tight">{item.name}</span>
                                                  {item.isDirectory ? <Folder className="size-8 md:size-12 text-primary animate-pulse"/> : <File className="size-8 md:size-12 text-gray-500"/>}
                                              </div>
                                          </div>
                                      ))
                                  )}
                              </div>
                              <Button onClick={confirmSelection} className="w-full h-24 rounded-[2.5rem] bg-primary hover:bg-white text-black font-black uppercase text-2xl italic shadow-9xl border-8 border-black/30">LOCK_DISK_SECTOR</Button>
                          </DialogContent>
                      </Dialog>
                      <Input value={backupPath} onChange={(e) => setBackupPath(e.target.value)} className="bg-black border-[6px] border-primary/20 h-24 rounded-[2rem] text-xl md:text-2xl italic px-10 focus:border-primary shadow-inner text-white font-black flex-1 text-left" />
                    </div>
                  </div>
                  <div className="pt-12 border-t-4 border-white/5 space-y-10 px-8 text-right">
                    <div className="flex items-center justify-between"><Switch defaultChecked className="data-[state=checked]:bg-primary scale-[1.5] md:scale-[2]" /><div className="text-right space-y-2"><Label className="text-2xl md:text-3xl text-white font-black italic uppercase gold-glow">System Deep Scan</Label><p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest italic">Include system-level partitions</p></div></div>
                  </div>
                </CardContent>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1000px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-12 flex flex-row justify-between items-center text-right">
                 <div className="text-left order-last md:order-none"><div className="text-emerald-500 font-black text-4xl md:text-6xl italic gold-glow animate-pulse">DISK_ROOT_LOCKED</div><div className="text-[10px] md:text-[12px] text-muted-foreground uppercase font-black tracking-[0.6em] mt-4 italic">SYSTEM_DNA_v80.0</div></div>
                 <CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Rebirth Control <RotateCw className="size-24 md:size-48 text-primary animate-neural" /></CardTitle>
              </CardHeader>
              <CardContent className="p-12 flex-1 flex flex-col space-y-20 relative z-10 text-right">
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 h-full">
                    <div className="space-y-12 order-last xl:order-none flex flex-col justify-center">
                       <div className="bg-black/95 rounded-[5rem] border-[12px] border-white/5 p-12 shadow-inner relative group/monitor overflow-hidden text-center">
                          <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:monitor:rotate-180 transition-all duration-[5s] pointer-events-none scale-150"><HardDrive className="size-64 text-primary" /></div>
                          <div className="relative z-10 space-y-12">
                             <div className="space-y-6"><h4 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-[1em] italic gold-glow">Disk DNA Serialization</h4><div className="text-[10rem] md:text-[12rem] font-black text-white italic leading-none gold-glow">{progress}%</div></div>
                             <Progress value={progress} className="h-8 md:h-10 bg-white/5 border-4 border-white/10 rounded-full" />
                             <p className="text-2xl md:text-4xl text-gray-300 font-black italic leading-relaxed px-6 drop-shadow-3xl">"نعم يا سيدي القائد، المحرك التنفيذي الآن يطوف في أحشاء الجهاز لاستخلاص البصمة المادية للأقراص."</p>
                          </div>
                       </div>
                       <Button onClick={handleRunBackup} disabled={loading} className="w-full h-32 md:h-40 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[4rem] shadow-9xl text-3xl italic border-[16px] border-black/30 group active:scale-95 transition-all">
                          {loading ? <Loader2 className="size-16 animate-spin mr-8" /> : <Dna className="size-16 mr-8 group-hover:rotate-180 transition-transform gold-glow" />} ENGAGE_ROOT_BACKUP
                       </Button>
                    </div>
                    
                    <div className="space-y-12">
                       <Label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-12 italic flex items-center gap-6 justify-end">System Partition Target <LayoutGrid className="size-10"/></Label>
                       <div className="grid grid-cols-1 gap-6">
                          {[
                            { id: "root", title: "System Root (/)", desc: "Total OS Subjugation & BIOS Links", icon: Monitor, color: "text-blue-400" },
                            { id: "home", title: "User Matrix (~)", desc: "Personal DNA & Identity Siphon", icon: Users, color: "text-primary" },
                            { id: "external", title: "External Clusters", desc: "Siphoning Mounted Media & USBs", icon: HardDrive, color: "text-emerald-500" }
                          ].map((type) => (
                            <div key={type.id} onClick={() => setBackupType(type.id)} className={cn("p-8 md:p-10 rounded-[3.5rem] border-8 transition-all duration-1000 cursor-pointer group/type flex items-center gap-10 shadow-9xl relative overflow-hidden justify-end", backupType === type.id ? "bg-primary/10 border-primary shadow-[0_40px_150px_rgba(251,191,36,0.4)] scale-105" : "bg-black/80 border-white/5 hover:border-primary/40")}>
                              {backupType === type.id && <ShieldCheck className="size-10 text-emerald-500 animate-in zoom-in-50 duration-700" />}
                              <div className="flex-1 text-right">
                                 <div className="text-2xl md:text-3xl font-black text-white italic group-hover/type:text-primary transition-colors uppercase tracking-tight mb-2">{type.title}</div>
                                 <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">{type.desc}</div>
                              </div>
                              <div className={cn("size-16 md:size-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 shadow-2xl", backupType === type.id ? "bg-primary text-black" : "bg-white/5 text-muted-foreground group-hover/type:text-primary")}>
                                <type.icon className="size-8 md:size-10" />
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
