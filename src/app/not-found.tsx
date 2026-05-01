
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
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview مركز التكوين والتعافي السيادي v17.5
 * واجهة الإعدادات الشاملة المدمجة في مسار النظام، تدير النسخ الاحتياطي وإعدادات كالي.
 */
export default function NotFound() {
  const [loading, setLoading] = React.useState(false)
  const [backupPath, setBackupPath] = React.useState("/opt/sovereign-ai-platform/backups")
  const [backupType, setBackupType] = React.useState("full")
  
  const handleRunBackup = () => {
    setLoading(true)
    toast({ 
      title: "Noah's Ark v3: Protocol Start", 
      description: `Initializing ${backupType} snapshot to ${backupPath}...` 
    })
    
    setTimeout(() => {
      setLoading(false)
      toast({ 
        title: "Sovereign Vault Secured", 
        description: "System state has been archived successfully." 
      })
    }, 3000)
  }

  const generateMasterScript = () => {
    toast({ 
      title: "Generating Master Rebuild Script", 
      description: "Compiling all system dependencies into sovereign_genesis_v17.sh" 
    })
  }

  return (
    <div className="min-h-screen bg-black flex flex-col p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(170,76,255,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />

      {/* Header Area */}
      <header className="flex justify-between items-start mb-12 relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Settings className="size-5 text-primary animate-[spin_4s_linear_infinite]" />
            </div>
            <div>
              <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-[10px] uppercase font-bold tracking-[0.4em]">
                COORDINATE LOST // SYSTEM CONFIG PORTAL
              </Badge>
              <h1 className="text-4xl font-headline font-bold text-white tracking-tighter italic">Sovereign Control Hub</h1>
            </div>
          </div>
          <p className="text-muted-foreground italic">"الإحداثيات غير موجودة، لكن السيادة قائمة. قم بضبط إعدادات النظام والتعافي من هنا."</p>
        </div>
        <div className="flex gap-4">
           <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="size-4 mr-2" />
                Operational Command
              </Link>
           </Button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 overflow-y-auto">
        
        {/* Left Column: Kali & System Core */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="glass-card border-primary/20 bg-black/40">
            <CardHeader>
              <CardTitle className="text-white text-base flex items-center gap-2">
                <Cpu className="size-4 text-primary" />
                Kali Toolchain Integration
              </CardTitle>
              <CardDescription className="text-[10px] uppercase tracking-widest">Environment Variables & Paths</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase">Wordlists Path</Label>
                <div className="flex gap-2">
                  <Input defaultValue="/usr/share/wordlists" className="bg-black/60 border-white/5 h-9 text-xs" />
                  <Button size="icon" variant="ghost" className="size-9 border border-white/5"><FolderOpen className="size-3"/></Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase">Offensive Environment</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="text-[9px] h-8 bg-primary/10 border-primary/30 text-primary">KALI_DEBIAN</Button>
                  <Button variant="outline" className="text-[9px] h-8 border-white/5 opacity-50">PARROT_OS</Button>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-xs text-white">Ghost Mode Logs</Label>
                  <p className="text-[10px] text-muted-foreground">Auto-purge bash history</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-emerald-500/20 bg-emerald-500/5">
            <CardHeader>
              <CardTitle className="text-white text-base flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-500" />
                Operational Clearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Identity:</span>
                    <span className="text-xs font-bold text-white italic">Al-Mu'izz Ultimate</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Level:</span>
                    <Badge className="bg-primary text-white text-[9px]">SUPREME_7</Badge>
                 </div>
              </div>
              <Button className="w-full h-10 bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-widest">
                 Update Identity Manifest
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Noah's Ark v3 Backup Hub */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card border-blue-500/30 bg-blue-500/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Anchor className="size-64 text-blue-500" />
            </div>
            <CardHeader className="bg-blue-500/10 border-b border-white/5 p-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-3xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse">
                    <Anchor className="size-8 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-white italic">Noah's Ark v3</CardTitle>
                    <CardDescription className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">Advanced Backup & Recovery Hub</CardDescription>
                  </div>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 py-2 px-6 rounded-full font-code">STATUS: SECURED</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs defaultValue="backup" className="w-full">
                <TabsList className="bg-black/40 border border-white/10 p-1 h-12 mb-8 rounded-2xl w-full max-w-md">
                  <TabsTrigger value="backup" className="flex-1 rounded-xl text-[10px] font-bold uppercase tracking-widest">Configure Backup</TabsTrigger>
                  <TabsTrigger value="recovery" className="flex-1 rounded-xl text-[10px] font-bold uppercase tracking-widest">Recovery Vault</TabsTrigger>
                </TabsList>

                <TabsContent value="backup" className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2">
                          <FolderOpen className="size-3"/> Target Repository
                        </Label>
                        <Input 
                          value={backupPath}
                          onChange={(e) => setBackupPath(e.target.value)}
                          className="bg-black/60 border-white/10 h-12 rounded-xl text-sm focus:border-blue-500/40" 
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2">
                          <LayoutGrid className="size-3"/> Snapshot Scope
                        </Label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: "light", title: "Lightweight (v1)", desc: "Scripts & Configurations only (Fastest)", icon: FileCode },
                            { id: "full", title: "Full Platform (v2)", desc: "Total platform + Evidence + Evidence Vault", icon: Database },
                            { id: "total", title: "Total System (v3)", desc: "Includes Ollama Models & Kali Frameworks", icon: LayoutGrid }
                          ].map((type) => (
                            <div 
                              key={type.id}
                              onClick={() => setBackupType(type.id)}
                              className={cn(
                                "p-4 rounded-2xl border transition-all cursor-pointer group flex items-center gap-4",
                                backupType === type.id 
                                  ? "bg-blue-500/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                                  : "bg-white/5 border-white/5 hover:border-white/20"
                              )}
                            >
                              <div className={cn(
                                "size-10 rounded-xl flex items-center justify-center transition-colors",
                                backupType === type.id ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground group-hover:text-white"
                              )}>
                                <type.icon className="size-5" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-white mb-0.5">{type.title}</div>
                                <div className="text-[10px] text-muted-foreground">{type.desc}</div>
                              </div>
                              {backupType === type.id && <ShieldCheck className="size-4 text-emerald-500 animate-in zoom-in" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-black/40 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden h-full flex flex-col">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                           <RefreshCcw className="size-20 text-blue-500" />
                        </div>
                        <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                           <ShieldAlert className="size-3" />
                           Snapshot Generation
                        </h4>
                        <p className="text-sm text-muted-foreground italic leading-relaxed mb-8">
                          "سفينة نوح تضمن بقاءك في حال حدوث تطهير للبيانات أو تلف للنظام. اختر النطاق المناسب واضغط على بدء التأمين."
                        </p>
                        
                        <div className="mt-auto space-y-4">
                           <Button 
                             onClick={handleRunBackup} 
                             disabled={loading}
                             className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 group transition-all"
                           >
                             {loading ? <Loader2 className="size-5 mr-3 animate-spin" /> : <Download className="size-5 mr-3 group-hover:-translate-y-1 transition-transform" />}
                             INITIATE SNAPSHOT
                           </Button>
                           
                           <Button 
                             variant="outline" 
                             onClick={generateMasterScript}
                             className="w-full h-16 border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/40 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] group"
                           >
                             <FileCode className="size-5 mr-3 text-primary group-hover:rotate-12 transition-transform" /> 
                             Generate Master System Script
                           </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="recovery" className="h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/5 rounded-[2.5rem] bg-black/20">
                    <Database className="size-16 text-blue-500/20 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-2 italic">Recovery Vault Empty</h3>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">No valid system archives detected in the backup repository. Initiate a snapshot to populate the vault.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Unified Footer Status */}
      <footer className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-white uppercase font-bold tracking-[0.3em]">Noah's Ark v3 Ready</span>
           </div>
           <div className="flex items-center gap-2">
              <Zap className="size-3 text-primary animate-pulse" />
              <span className="text-[10px] text-white uppercase font-bold tracking-[0.3em]">Al-Mu'izz OS v17.2.0-ULTIMATE</span>
           </div>
        </div>
        <div className="flex gap-4">
           {Array.from({ length: 8 }).map((_, i) => (
             <div key={i} className="w-1 h-3 bg-primary/40 rounded-full" style={{ animation: `pulse 1.5s infinite ${i * 0.1}s` }} />
           ))}
        </div>
      </footer>
    </div>
  )
}
