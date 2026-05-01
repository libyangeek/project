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
  Fingerprint
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
      toast({ title: "OSINT Complete", description: "Intelligence gathering finished." })
    } catch (err) {
      toast({ variant: "destructive", title: "Operation Failed", description: "Could not retrieve intel." })
    } finally {
      setLoading(false)
    }
  }

  const handleVulnScan = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await deepEyeScan({ url: target, intensity: 'active' })
      setVulnResults(data)
      toast({ title: "Deep Eye Pulse", description: "Vulnerability mapping complete." })
    } catch (err) {
      toast({ variant: "destructive", title: "Scan Failed", description: "Deep Eye engine is unresponsive." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_top_left,rgba(170,76,255,0.03),transparent)]">
        <header className="mb-8 flex justify-between items-center">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-widest">Reconnaissance Unit</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">v17.2 Cyber Intelligence</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tight">Sovereign Recon Hub</h2>
            <p className="text-muted-foreground font-medium">Multi-faceted OSINT engine and automated web vulnerability scanning.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass p-2 rounded-lg border border-white/5">
              <div className="text-sm font-code text-primary uppercase font-bold">DEEP_RECON</div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold">Operational Mode</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <Zap className="size-4 text-primary" />
                  Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/40 border border-white/5 w-full h-11 p-1">
                    <TabsTrigger value="osint" className="flex-1 text-[10px] uppercase font-bold">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[10px] uppercase font-bold">Deep Eye</TabsTrigger>
                  </TabsList>

                  <div className="mt-6 space-y-4">
                    {activeTab === 'osint' && (
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold text-muted-foreground">Recon Type</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['domain', 'email', 'phone', 'social'].map((type) => (
                            <Button 
                              key={type}
                              variant={searchType === type ? 'default' : 'outline'}
                              size="sm"
                              className={cn("text-[9px] h-8 uppercase", searchType === type ? "bg-primary text-white" : "border-white/5")}
                              onClick={() => setSearchType(type as any)}
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-muted-foreground">Identified Target</label>
                      <Input 
                        placeholder={activeTab === 'osint' ? "Enter target data..." : "Enter target URL..."}
                        className="bg-black/40 border-white/5 h-11 text-xs"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                      />
                    </div>

                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 h-12 rounded-xl shadow-xl shadow-primary/20 font-bold tracking-widest text-[10px] uppercase"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : <ShieldCheck className="size-4 mr-2" />}
                      {activeTab === 'osint' ? "Execute OSINT" : "Initiate Pulse Scan"}
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-xs uppercase tracking-widest opacity-50 flex items-center gap-2">
                  <Activity className="size-3" />
                  Active Probes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Whois_Sync", status: "Active", color: "bg-emerald-500" },
                  { name: "Leak_Checker", status: "Ready", color: "bg-blue-500" },
                  { name: "Payload_Gen", status: "Standby", color: "bg-amber-500" }
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[10px] text-white font-medium">{p.name}</span>
                    <Badge variant="outline" className="text-[8px] bg-white/5 border-white/10 uppercase tracking-tighter">
                      <span className={cn("size-1 rounded-full mr-1.5 animate-pulse", p.color)} />
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
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                  <Card className="glass-card border-primary/20">
                    <CardHeader className="bg-white/5 border-b border-white/5 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Fingerprint className="size-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Intelligence Profile: {target}</CardTitle>
                          <CardDescription>Sovereign OSINT Synthesis</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-500 font-code">CONFIDENCE: 92%</Badge>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-8">
                         <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Executive Summary</h4>
                         <p className="text-white leading-relaxed italic text-sm">
                           "{osintResults.summary}"
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {osintResults.findings.map((f: any, i: number) => (
                           <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-primary/40 transition-all flex gap-4">
                              <div className={cn(
                                "size-10 rounded-lg flex items-center justify-center shrink-0 shadow-lg",
                                f.riskLevel === 'Critical' ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-primary/10 text-primary border border-primary/20"
                              )}>
                                <Target className="size-5" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-start mb-1">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{f.source}</span>
                                    <Badge variant="outline" className="text-[8px] uppercase">{f.riskLevel}</Badge>
                                 </div>
                                 <p className="text-xs text-muted-foreground leading-relaxed">{f.data}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={Globe} title="Awaiting Recon Request" description="Initiate the Al-Mu'izz OSINT suite to map the digital footprint of your target." />
              )
            ) : (
              vulnResults ? (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                  <Card className="glass-card border-red-500/20">
                    <CardHeader className="bg-white/5 border-b border-white/5 flex flex-row items-center justify-between">
                       <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                          <ShieldAlert className="size-5 text-red-500" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Vulnerability Manifest: {target}</CardTitle>
                          <CardDescription>Deep Eye v17.2 Pulse Analysis</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive" className="animate-pulse">{vulnResults.vulnerabilities.length} Critical Vectors</Badge>
                    </CardHeader>
                    <CardContent className="p-8">
                       <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6 mb-8 italic text-sm text-red-400">
                          <strong>Threat Landscape:</strong> {vulnResults.scanSummary}
                       </div>

                       <div className="space-y-4">
                          {vulnResults.vulnerabilities.map((v: any, i: number) => (
                            <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-red-500/40 transition-all">
                               <div className="flex justify-between items-center mb-4">
                                  <div className="flex items-center gap-3">
                                     <div className="size-8 rounded bg-red-500/10 flex items-center justify-center text-red-500 text-xs font-bold">{i+1}</div>
                                     <span className="text-sm font-bold text-white uppercase tracking-tight">{v.type}</span>
                                  </div>
                                  <Badge className={cn(
                                    "text-[9px] uppercase",
                                    v.severity === 'Critical' ? "bg-red-500" : "bg-orange-500"
                                  )}>{v.severity}</Badge>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                     <label className="text-[9px] uppercase font-bold text-muted-foreground">Vulnerable Endpoint</label>
                                     <div className="bg-black/60 p-2 rounded text-[10px] font-code text-red-400 border border-white/5 truncate">{v.endpoint}</div>
                                  </div>
                                  <div className="space-y-2">
                                     <label className="text-[9px] uppercase font-bold text-muted-foreground">Payload Evidence</label>
                                     <div className="bg-black/60 p-2 rounded text-[10px] font-code text-emerald-400 border border-white/5 truncate">{v.payload}</div>
                                  </div>
                               </div>
                               <div className="mt-4 pt-4 border-t border-white/5">
                                  <p className="text-[10px] text-muted-foreground italic"><Zap className="size-3 inline mr-1 text-primary"/> Remediation: {v.remediation}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={ShieldAlert} title="Awaiting Pulse Scan" description="Deploy the Deep Eye scanner to probe targets for XSS, SQLi, and CMDi vulnerabilities." />
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
    <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center p-12 bg-black/10">
      <div className="size-32 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10">
        <Icon className="size-16 text-primary/30" />
      </div>
      <h3 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight italic">{title}</h3>
      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
        {description}
      </p>
      <div className="flex gap-4">
        <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Target Matrix Alpha</Badge>
        <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Neural Recon v17.2</Badge>
      </div>
    </div>
  )
}
