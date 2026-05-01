"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  MapPin, 
  ShieldAlert,
  Loader2,
  Database,
  ExternalLink,
  ShieldCheck,
  Zap,
  Target,
  FileText,
  Activity,
  Fingerprint,
  Skull,
  Crosshair
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { deepEyeScan } from "@/ai/flows/vulnerability-scan-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [osintResults, setOsintResults] = React.useState<any>(null)
  const [vulnResults, setVulnResults] = React.useState<any>(null)
  const [activeTab, setActiveTab] = React.useState("osint")
  const [searchType, setSearchType] = React.useState<'phone' | 'email' | 'domain' | 'social'>('domain')

  const handleOsint = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await osintMaster({ target, type: searchType })
      setOsintResults(data)
      toast({ title: "OSINT Strike Complete" })
    } catch (err) {
      toast({ variant: "destructive", title: "Operation Failed" })
    } finally {
      setLoading(false)
    }
  }

  const handleVulnScan = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await deepEyeScan({ url: target, intensity: 'aggressive' })
      setVulnResults(data)
      toast({ title: "Deep Eye Pulse Complete" })
    } catch (err) {
      toast({ variant: "destructive", title: "Scan Failed" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent)]">
        <header className="mb-16 flex justify-between items-center relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Intelligence Node</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Predator v18.0 Recon Hub</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Recon Hub</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Multi-faceted OSINT engine and aggressive web vulnerability scanning via the Alpha Core.</p>
          </div>
          <div className="text-right glass-card p-5 border-red-600/30 bg-red-950/10 min-w-[180px] rounded-[2rem] shadow-2xl h-20">
             <div className="text-2xl font-code text-red-600 font-bold flex items-center justify-end gap-3">
                <Search className="size-6" /> DEEP_SCAN
             </div>
             <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Operational Mode</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
          <div className="lg:col-span-1 space-y-8">
            <Card className="glass-card border-red-600/30 rounded-[2.5rem] p-4 shadow-2xl">
              <CardHeader className="p-6">
                <CardTitle className="text-white text-sm flex items-center gap-4 uppercase tracking-[0.3em]">
                  <Target className="size-5 text-red-600" /> Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-8">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/60 border border-red-500/20 w-full h-14 p-1.5 rounded-2xl">
                    <TabsTrigger value="osint" className="flex-1 text-[10px] uppercase font-bold data-[state=active]:bg-red-600/20">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[10px] uppercase font-bold data-[state=active]:bg-red-600/20">Deep Eye</TabsTrigger>
                  </TabsList>

                  <div className="mt-10 space-y-8">
                    {activeTab === 'osint' && (
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-1">Recon Type</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['domain', 'email', 'phone', 'social'].map((type) => (
                            <Button 
                              key={type}
                              variant={searchType === type ? 'default' : 'outline'}
                              className={cn("text-[10px] h-10 uppercase rounded-xl transition-all duration-500", searchType === type ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "border-white/10")}
                              onClick={() => setSearchType(type as any)}
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-1">Identified Target</label>
                      <Input 
                        placeholder={activeTab === 'osint' ? "Enter target data..." : "Enter target URL..."}
                        className="bg-black/80 border-red-500/20 h-14 text-sm rounded-2xl focus:border-red-600/50"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                      />
                    </div>

                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 h-16 rounded-2xl shadow-2xl shadow-red-600/30 font-bold tracking-[0.4em] text-[11px] uppercase group transition-all"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-6 animate-spin mr-4" /> : <Zap className="size-6 mr-4 group-hover:scale-125 transition-transform" />}
                      Execute Recon
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 rounded-[2.5rem]">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-white text-[10px] uppercase tracking-[0.5em] opacity-40 flex items-center gap-3 font-bold italic">
                  <Activity className="size-4 text-red-600" /> Active Probes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-4">
                {[
                  { name: "Whois_Alpha", status: "Active", color: "bg-red-600" },
                  { name: "Leak_Striker", status: "Ready", color: "bg-emerald-500" },
                  { name: "Payload_Forge", status: "Standby", color: "bg-orange-500" }
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-black/60 border border-white/5 group hover:border-red-600/40 transition-all">
                    <span className="text-[11px] text-white font-bold uppercase tracking-widest">{p.name}</span>
                    <Badge variant="outline" className="text-[9px] bg-red-600/5 border-red-500/20 uppercase tracking-widest px-3">
                      <span className={cn("size-2 rounded-full mr-2 animate-pulse", p.color)} />
                      {p.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'osint' ? (
              osintResults ? (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)] rounded-[3rem]">
                    <CardHeader className="bg-red-950/20 border-b border-red-600/20 flex flex-row items-center justify-between p-10">
                      <div className="flex items-center gap-6">
                        <div className="p-5 rounded-[2rem] bg-red-600 border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                          <Fingerprint className="size-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl text-white italic tracking-tighter uppercase">Intelligence Profile: {target}</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.5em] mt-2">Sovereign Predator Synthesis</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-600/20 text-red-500 font-code px-8 py-3 rounded-full border border-red-500/30">CONFIDENCE: 96%</Badge>
                    </CardHeader>
                    <CardContent className="p-12">
                      <div className="bg-black/90 rounded-[3rem] p-12 border border-red-600/20 mb-10 shadow-2xl relative group overflow-hidden">
                         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Skull className="size-56 text-red-600" />
                         </div>
                         <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.6em] mb-8 flex items-center gap-4 italic">Executive Summary</h4>
                         <p className="text-2xl text-white leading-relaxed italic font-medium relative z-10 drop-shadow-xl">
                           "{osintResults.summary}"
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {osintResults.findings.map((f: any, i: number) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-red-600/50 transition-all flex gap-8 relative overflow-hidden">
                              <div className="absolute -top-4 -right-4 size-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors" />
                              <div className={cn(
                                "size-14 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl relative z-10",
                                f.riskLevel === 'Critical' ? "bg-red-600/20 text-red-500 border border-red-500/40" : "bg-red-600/10 text-red-500 border border-red-500/20"
                              )}>
                                <Target className="size-7" />
                              </div>
                              <div className="flex-1 relative z-10">
                                 <div className="flex justify-between items-start mb-2">
                                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">{f.source}</span>
                                    <Badge variant="outline" className="text-[9px] uppercase border-red-500/20">{f.riskLevel}</Badge>
                                 </div>
                                 <p className="text-sm text-muted-foreground leading-relaxed font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">"{f.data}"</p>
                              </div>
                           </div>
                         ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={Globe} title="Awaiting Strike Objective" description="Initiate the Al-Mu'izz OSINT suite to map the digital footprint of your target via the Alpha Core." />
              )
            ) : (
              vulnResults ? (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)] rounded-[3rem]">
                    <CardHeader className="bg-red-950/20 border-b border-red-600/20 flex flex-row items-center justify-between p-10">
                       <div className="flex items-center gap-6">
                        <div className="p-5 rounded-[2rem] bg-red-600 border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                          <ShieldAlert className="size-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl text-white italic tracking-tighter uppercase">Vulnerability Manifest: {target}</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.5em] mt-2">Deep Eye Aggressive Analysis v18.0</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive" className="animate-pulse shadow-2xl py-3 px-8 rounded-full">{vulnResults.vulnerabilities.length} Attack Vectors Identified</Badge>
                    </CardHeader>
                    <CardContent className="p-12">
                       <div className="bg-red-600/10 border border-red-600/20 rounded-[2rem] p-10 mb-10 italic text-lg text-red-500 shadow-inner">
                          <strong>Threat Landscape:</strong> {vulnResults.scanSummary}
                       </div>

                       <div className="space-y-6">
                          {vulnResults.vulnerabilities.map((v: any, i: number) => (
                            <div key={i} className="p-8 rounded-[2.5rem] bg-black/80 border border-white/5 hover:border-red-600/50 transition-all duration-500 group">
                               <div className="flex justify-between items-center mb-8">
                                  <div className="flex items-center gap-6">
                                     <div className="size-12 rounded-[1.2rem] bg-red-600/20 flex items-center justify-center text-red-500 text-lg font-bold border border-red-500/30 group-hover:scale-110 transition-transform">{i+1}</div>
                                     <span className="text-xl font-bold text-white uppercase tracking-tighter italic">{v.type}</span>
                                  </div>
                                  <Badge className={cn(
                                    "text-[10px] uppercase py-2 px-6 rounded-full font-bold",
                                    v.severity === 'Critical' ? "bg-red-600 shadow-[0_0_15px_red]" : "bg-orange-600 shadow-[0_0_10px_orange]"
                                  )}>{v.severity}</Badge>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="space-y-3">
                                     <label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Vulnerable Endpoint</label>
                                     <div className="bg-black/90 p-5 rounded-2xl text-[12px] font-code text-red-500 border border-red-500/20 truncate shadow-inner">{v.endpoint}</div>
                                  </div>
                                  <div className="space-y-3">
                                     <label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Payload Evidence</label>
                                     <div className="bg-black/90 p-5 rounded-2xl text-[12px] font-code text-emerald-500 border border-emerald-500/20 truncate shadow-inner">{v.payload}</div>
                                  </div>
                               </div>
                               <div className="mt-8 pt-6 border-t border-white/5">
                                  <p className="text-[11px] text-muted-foreground italic font-medium group-hover:text-white transition-colors"><Zap className="size-4 inline mr-2 text-red-600 animate-pulse"/> Remediation Protocol: {v.remediation}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={ShieldAlert} title="Awaiting Pulse Scan" description="Deploy the Deep Eye scanner to probe targets for XSS, SQLi, and CMDi vulnerabilities via the Predator Core." />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function EmptyPlaceholder({ icon: Icon, title, description }: any) {
  return (
    <div className="h-full min-h-[800px] border-2 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5">
      <div className="size-48 bg-red-600/5 rounded-full flex items-center justify-center mb-16 border border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
        <Icon className="size-24 text-red-600/20 transition-all duration-1000 group-hover:text-red-600/40" />
        <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[100px] animate-pulse" />
      </div>
      <h3 className="text-6xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-2xl">{title}</h3>
      <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16 text-3xl font-medium italic">
        {description}
      </p>
      <div className="flex gap-10">
        <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[13px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">Target Matrix Alpha</Badge>
        <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[13px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">Neural Recon v18.0</Badge>
      </div>
    </div>
  )
}