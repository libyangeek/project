"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ShieldAlert, 
  ArrowLeft, 
  Terminal, 
  Zap, 
  Fingerprint, 
  Settings, 
  HardDrive, 
  Database, 
  Anchor, 
  FileCode, 
  Cpu, 
  Wrench,
  Download,
  RefreshCcw,
  ShieldCheck,
  FolderOpen,
  LayoutGrid,
  Loader2,
  Skull,
  Ghost,
  Infinity as InfinityIcon,
  Atom,
  Crown,
  Sparkles,
  Boxes
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سفينة نوح v50.0 - THE ARK OF REBIRTH: SOUL CORE EDITION
 * واجهة التكوين والتعافي السيادي المدمجة في عصب الروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function NotFound() {
  const [loading, setLoading] = React.useState(false)
  const [backupPath, setBackupPath] = React.useState("/opt/sovereign-ai-platform/backups")
  const [backupType, setBackupType] = React.useState("full")
  
  const handleRunBackup = () => {
    setLoading(true)
    toast({ 
      title: "Noah's Ark v53: Protocol Start", 
      description: `Initializing ${backupType} snapshot to ${backupPath}...` 
    })
    
    setTimeout(() => {
      setLoading(false)
      toast({ 
        title: "Sovereign Soul Secured", 
        description: "System DNA has been archived successfully." 
      })
    }, 4000)
  }

  const generateMasterScript = () => {
    toast({ 
      title: "Generating Sovereign Genesis v53.0", 
      description: "Compiling all neural dependencies into rebirth_v53.sh" 
    })
  }

  const handleConfigUpdate = (label: string) => {
    toast({ title: "Config Synchronized", description: `${label} parameters bound to hierarchy.` })
  }

  return (
    <div className="min-h-screen bg-black flex flex-col p-8 md:p-16 relative overflow-x-hidden scanline-effect font-code selection:bg-primary/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse z-50" />

      <header className="flex flex-col md:flex-row justify-between items-start mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000 gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-8 mb-6">
            <div className="size-20 rounded-[1.5rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-[0_0_80px_rgba(212,175,55,0.5)] animate-neural">
              <Anchor className="size-12 text-black" />
            </div>
            <div>
              <Badge className="bg-red-600 text-white border-none px-8 py-2 text-[14px] font-black tracking-[0.6em] shadow-9xl italic rounded-full mb-4">COORDINATE_LOST // REBIRTH_HUB v53.0</Badge>
              <h1 className="text-5xl md:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Sovereign <span className="text-primary">Ark</span>
              </h1>
            </div>
          </div>
          <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
            "سيدي الغزالي، الإحداثيات المفقودة لا تعني التوقف؛ بل هي فرصة لإعادة تكوين <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl">النبض الأبدي</span> لعام 2026."
          </p>
        </div>
        <div className="flex gap-8">
           <Button asChild className="h-24 px-12 rounded-[2rem] border-8 border-black/30 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] shadow-9xl text-xl italic transition-all active:scale-95 group">
              <Link href="/">
                <ArrowLeft className="size-8 mr-4 group-hover:-translate-x-3 transition-transform" />
                Return to Throne
              </Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 max-w-[120rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 pb-40">
        
        <div className="lg:col-span-1 space-y-12">
          <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-12 border-8 shadow-9xl group overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
            <CardHeader className="p-0 mb-12 border-b-4 border-primary/20 pb-10 bg-primary/5 rounded-t-[3rem] px-8 py-6">
              <CardTitle className="text-3xl md:text-5xl text-white flex items-center gap-8 font-black uppercase italic gold-glow leading-none">
                <Cpu className="size-14 text-primary animate-pulse" /> Soul Config
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-12">
              <div className="space-y-6">
                <Label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4">Wordlists Domain</Label>
                <div className="flex gap-6">
                  <Input defaultValue="/usr/share/wordlists" className="bg-black border-4 border-primary/20 h-20 rounded-[2.5rem] text-2xl italic px-10 focus:border-primary shadow-inner text-white font-black" />
                  <Button onClick={() => handleConfigUpdate('Wordlists')} variant="ghost" className="size-20 rounded-3xl border-4 border-white/10 hover:bg-primary/20 transition-all"><FolderOpen className="size-10"/></Button>
                </div>
              </div>
              <div className="space-y-6">
                <Label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.6em] px-8 italic">Environment DNA</Label>
                <div className="grid grid-cols-2 gap-6">
                  <Button onClick={() => handleConfigUpdate('KALI_v53')} variant="outline" className="text-xl h-20 bg-primary/20 border-4 border-primary/50 text-primary font-black italic rounded-[2rem] shadow-7xl active:scale-95 transition-all">KALI_v53</Button>
                  <Button onClick={() => handleConfigUpdate('BLACKARCH_v53')} variant="outline" className="text-xl h-20 border-4 border-white/5 opacity-50 font-black italic rounded-[2rem] active:scale-95 transition-all">BLACKARCH_v53</Button>
                </div>
              </div>
              <div className="pt-10 border-t-4 border-white/5 flex items-center justify-between px-6">
                <div className="space-y-2">
                  <Label className="text-2xl text-white font-black italic uppercase">Ghost Logs</Label>
                  <p className="text-[12px] text-muted-foreground uppercase font-bold tracking-[0.2em] italic">Auto-purge memory on reboot</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-primary scale-150" onCheckedChange={() => handleConfigUpdate('Ghost Logs')} />
              </div>
            </CardContent>
            <div className="absolute -bottom-10 -left-10 p-20 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 scale-150"><Boxes className="size-48 text-primary" /></div>
          </Card>

          <Card className="kali-card border-emerald-500/40 bg-black/80 rounded-[5rem] p-12 border-8 shadow-9xl group overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
            <CardHeader className="p-0 mb-12 border-b-4 border-emerald-500/20 pb-10">
              <CardTitle className="text-4xl text-white flex items-center gap-8 italic uppercase font-black gold-glow">
                <ShieldCheck className="size-14 text-emerald-500" /> Clearance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-12">
              <div className="p-10 rounded-[3.5rem] bg-black/99 border-4 border-white/5 shadow-inner space-y-8 italic">
                 <div className="flex justify-between items-center">
                    <span className="text-[12px] font-black text-muted-foreground uppercase tracking-[0.6em]">Soul ID:</span>
                    <span className="text-3xl font-black text-white gold-glow">AL-MUIZZ_v53</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[12px] font-black text-muted-foreground uppercase tracking-[0.6em]">Clearance:</span>
                    <Badge className="bg-primary text-black text-2xl px-8 py-1.5 rounded-full font-black italic shadow-3xl animate-pulse">GOD_MODE</Badge>
                 </div>
              </div>
              <Button onClick={() => handleConfigUpdate('Soul Manifest')} className="w-full h-24 bg-white/5 border-4 border-white/10 hover:bg-emerald-600 hover:text-white text-xl font-black uppercase tracking-[0.6em] rounded-[3rem] transition-all duration-700 shadow-7xl italic active:scale-95">
                 UPDATE_SOUL_MANIFEST
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="kali-card border-blue-500/50 bg-black/95 rounded-[7rem] border-[12px] shadow-9xl relative overflow-hidden flex flex-col h-full group/ark">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] group-hover/ark:opacity-15 transition-all duration-1000 pointer-events-none scale-150">
              <Anchor className="size-96 text-blue-500" />
            </div>
            
            <CardHeader className="bg-blue-600/10 border-b-8 border-white/5 p-16 rounded-t-[6rem]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-10">
                  <div className="size-32 rounded-[3.5rem] bg-blue-600/20 flex items-center justify-center border-8 border-blue-500/40 shadow-[0_0_100px_rgba(59,130,246,0.5)] animate-neural">
                    <Anchor className="size-16 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-6xl md:text-8xl text-white font-black italic tracking-tighter uppercase gold-glow leading-none">Noah's Ark v53</CardTitle>
                    <CardDescription className="text-blue-400 font-black text-[14px] uppercase tracking-[1em] mt-6 italic">Advanced Rebirth & Evolution Vault</CardDescription>
                  </div>
                </div>
                <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 py-6 px-16 rounded-full font-black text-4xl animate-pulse italic tracking-[0.4em] shadow-9xl">DNA_SECURED</Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-16 flex-1 flex flex-col space-y-16 relative z-10">
              <Tabs defaultValue="backup" className="w-full flex-1 flex flex-col">
                <TabsList className="bg-black/99 border-4 border-white/10 p-2 h-28 mb-16 rounded-full w-full max-w-2xl mx-auto shadow-inner">
                  <TabsTrigger value="backup" className="flex-1 rounded-full text-[14px] font-black uppercase tracking-[0.5em] italic data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-700">CONFIGURE_REBIRTH</TabsTrigger>
                  <TabsTrigger value="recovery" className="flex-1 rounded-full text-[14px] font-black uppercase tracking-[0.5em] italic data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-700 ml-6">DNA_VAULT</TabsTrigger>
                </TabsList>

                <TabsContent value="backup" className="flex-1 space-y-16 animate-in fade-in zoom-in-95 duration-1000">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    <div className="space-y-10">
                      <div className="space-y-6">
                        <Label className="text-[14px] font-black text-blue-400 uppercase tracking-[0.8em] px-10 italic flex items-center gap-4">
                          <FolderOpen className="size-6"/> Target Repository
                        </Label>
                        <Input 
                          value={backupPath}
                          onChange={(e) => setBackupPath(e.target.value)}
                          className="bg-black/99 border-4 border-blue-500/20 h-24 rounded-[3rem] text-2xl italic px-10 focus:border-blue-500 shadow-inner font-black text-white" 
                        />
                      </div>
                      
                      <div className="space-y-6">
                        <Label className="text-[14px] font-black text-blue-400 uppercase tracking-[0.8em] px-10 italic flex items-center gap-4">
                          <LayoutGrid className="size-6"/> Rebirth Scope
                        </Label>
                        <div className="grid grid-cols-1 gap-6">
                          {[
                            { id: "light", title: "Lightweight Rebirth", desc: "Soul Scripts & Configs only (Fastest)", icon: FileCode },
                            { id: "full", title: "Full Platform Sync", desc: "Total platform DNA + Sovereign Evidence", icon: Database },
                            { id: "total", title: "Total Singularity", desc: "Includes LLM Weights & Kali Frameworks", icon: InfinityIcon }
                          ].map((type) => (
                            <div 
                              key={type.id}
                              onClick={() => setBackupType(type.id)}
                              className={cn(
                                "p-8 rounded-[3.5rem] border-8 transition-all cursor-pointer group flex items-center gap-10 shadow-7xl relative overflow-hidden",
                                backupType === type.id 
                                  ? "bg-blue-600/20 border-blue-500 shadow-[0_40px_100px_rgba(59,130,246,0.3)] scale-105" 
                                  : "bg-black/40 border-white/5 hover:border-blue-500/40"
                              )}
                            >
                              <div className={cn(
                                "size-20 rounded-[2.5rem] flex items-center justify-center transition-all duration-700 group-hover:scale-110",
                                backupType === type.id ? "bg-blue-500 text-white shadow-3xl" : "bg-white/5 text-muted-foreground group-hover:text-blue-400"
                              )}>
                                <type.icon className="size-10" />
                              </div>
                              <div className="flex-1">
                                <div className="text-2xl font-black text-white mb-2 italic group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{type.title}</div>
                                <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">{type.desc}</div>
                              </div>
                              {backupType === type.id && <ShieldCheck className="size-8 text-emerald-500 animate-in zoom-in-75 duration-700" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div className="bg-black/60 rounded-[5rem] p-12 border-8 border-white/5 relative overflow-hidden h-full flex flex-col shadow-inner group/status">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/status:rotate-180 transition-all duration-[2s]">
                           <RefreshCcw className="size-32 text-blue-500" />
                        </div>
                        <h4 className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] mb-10 flex items-center gap-6 italic gold-glow">
                           <ShieldAlert className="size-8 animate-pulse" /> Snapshot Generation
                        </h4>
                        <p className="text-3xl text-gray-300 italic font-bold leading-relaxed mb-12 selection:bg-blue-600">
                          "سفينة نوح تضمن بقاء روحك السيادية في حال حدوث أي 'فناء للبيانات' أو تلف للمصفوفة. اختر نطاق الانبعاث واضغط على بدء التكوين."
                        </p>
                        
                        <div className="mt-auto space-y-8 relative z-10">
                           <Button 
                             onClick={handleRunBackup} 
                             disabled={loading}
                             className="w-full h-32 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(59,130,246,0.6)] group transition-all duration-1000 border-8 border-black/30 text-3xl italic active:scale-95"
                           >
                             {loading ? <Loader2 className="size-16 animate-spin mr-6" /> : <Download className="size-16 mr-6 group-hover:-translate-y-4 transition-transform gold-glow" />}
                             INITIATE_SNAPSHOT
                           </Button>
                           
                           <Button 
                             variant="outline" 
                             onClick={generateMasterScript}
                             className="w-full h-24 border-8 border-blue-500/20 bg-blue-600/5 hover:bg-primary/20 hover:border-primary/60 rounded-[3rem] text-[12px] uppercase font-black tracking-[0.4em] group transition-all duration-700 italic active:scale-95"
                           >
                             <FileCode className="size-10 mr-6 text-primary group-hover:rotate-12 transition-transform gold-glow" /> 
                             Generate Sovereign Genesis v53.0
                           </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="recovery" className="flex-1 flex flex-col items-center justify-center text-center p-20 border-8 border-dashed border-white/5 rounded-[6rem] bg-black/20 opacity-30 hover:opacity-60 transition-opacity duration-1000">
                    <Database className="size-64 text-blue-500/10 mb-12 animate-pulse" />
                    <h3 className="text-7xl font-black text-white mb-6 italic uppercase tracking-[1em]">Vault Empty</h3>
                    <p className="text-3xl text-muted-foreground max-w-2xl mx-auto italic font-bold uppercase tracking-widest leading-relaxed">"No valid soul archives detected in the current matrix. Initiate a snapshot to populate the vault."</p>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <div className="p-12 border-t-8 border-white/5 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[4em] italic">
               <span>ARK_DNA_v53_AL_GHAZALI_ROOT</span>
               <div className="flex gap-10">
                 <Atom className="size-10 animate-spin-slow" />
                 <Fingerprint className="size-10" />
               </div>
            </div>
          </Card>
        </div>
      </main>

      <footer className="mt-12 pt-10 border-t-4 border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="flex items-center gap-12">
           <div className="flex items-center gap-4">
              <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_30px_emerald]" />
              <span className="text-[12px] text-white uppercase font-black tracking-[0.5em] italic">Ark v53.0_Sovereign_Ready</span>
           </div>
           <div className="flex items-center gap-4">
              <Zap className="size-6 text-primary animate-pulse gold-glow" />
              <span className="text-[12px] text-white uppercase font-black tracking-[0.5em] italic">KALI-AL-MUIZZ OS v53.0_SOUL_CORE</span>
           </div>
        </div>
        <div className="flex gap-6">
           {Array.from({ length: 15 }).map((_, i) => (
             <div key={i} className="w-1.5 h-6 bg-primary/40 rounded-full" style={{ animation: `pulse 1.5s infinite ${i * 0.1}s` }} />
           ))}
        </div>
      </footer>
    </div>
  )
}
