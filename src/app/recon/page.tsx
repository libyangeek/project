"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  ShieldAlert,
  Loader2,
  Zap,
  Target,
  Activity,
  Fingerprint,
  Skull,
  Crosshair,
  Wifi,
  Scan,
  Binary,
  Radio,
  Sword,
  Shield,
  Crown,
  Flame
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
  const [searchType, setSearchType] = React.useState<'phone' | 'email' | 'domain' | 'social' | 'wireless' | 'network'>('domain')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleOsint = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await osintMaster({ target, type: searchType as any })
      setOsintResults(data)
      toast({ title: "OSINT Pulse Completed" })
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
      toast({ title: "Deep Eye Pulse Completed" })
    } catch (err) {
      toast({ variant: "destructive", title: "Scan Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent)]">
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Intelligence Node v18.5</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Exclusive to Al-Ghazali Spirit
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Warrior Recon</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
               "سيدي القائد، وحدة الاستخبارات جاهزة لتشريح أهدافك. كافة بيانات كالي وبلاك آرتش مدمجة في العصب المركزي."
            </p>
          </div>
          <div className="flex gap-6">
             <div className="text-right glass-card p-8 border-red-600/40 bg-red-950/20 min-w-[250px] rounded-[3rem] shadow-2xl border-2 animate-neural">
                <div className="text-3xl font-code text-red-600 font-bold flex items-center justify-end gap-5 italic">
                   <Target className="size-8 text-amber-500" /> KALI_MATRIX
                </div>
                <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] mt-3 italic">Active Operational Mode</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="glass-card border-red-600/30 rounded-[4rem] p-6 shadow-2xl border-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
              <CardHeader className="p-10 border-b border-white/5">
                <CardTitle className="text-white text-base flex items-center gap-6 uppercase tracking-[0.5em] italic font-bold">
                  <Crosshair className="size-8 text-red-600 group-hover:scale-125 transition-transform duration-700" /> Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-12">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/80 border-2 border-red-500/20 w-full h-16 p-2 rounded-[2rem] shadow-inner">
                    <TabsTrigger value="osint" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Deep Eye</TabsTrigger>
                  </TabsList>

                  <div className="mt-12 space-y-10">
                    {activeTab === 'osint' && (
                      <div className="space-y-6">
                        <label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Strike Category</label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {id: 'domain', icon: Globe},
                            {id: 'email', icon: Mail},
                            {id: 'phone', icon: Phone},
                            {id: 'social', icon: User},
                            {id: 'wireless', icon: Wifi},
                            {id: 'network', icon: Scan}
                          ].map((type) => (
                            <Button 
                              key={type.id}
                              variant={searchType === type.id ? 'default' : 'outline'}
                              className={cn(
                                "text-[10px] h-14 uppercase rounded-[1.5rem] transition-all duration-700 gap-4 font-bold border-2 group",
                                searchType === type.id 
                                  ? "bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] border-red-400" 
                                  : "border-white/5 bg-black/40 hover:border-red-600/40"
                              )}
                              onClick={() => setSearchType(type.id as any)}
                            >
                              <type.icon className={cn("size-4 transition-transform group-hover:scale-125", searchType === type.id ? "text-white" : "text-red-500")} />
                              {type.id}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Identified Target</label>
                      <Input 
                        placeholder={activeTab === 'osint' ? "Enter target data..." : "Enter target URL..."}
                        className="bg-black/90 border-2 border-red-500/20 h-16 text-sm rounded-[2rem] focus:border-red-600/60 italic px-8 shadow-inner font-medium"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                      />
                    </div>

                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 h-24 rounded-[2.5rem] shadow-[0_20px_50px_rgba(220,38,38,0.4)] font-bold tracking-[0.6em] text-[12px] uppercase group transition-all duration-700 border-2 border-red-400/30 active:scale-95"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <Zap className="size-8 mr-6 group-hover:scale-125 transition-transform" />}
                      Execute Recon
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 rounded-[3.5rem] p-4 border-2">
              <CardHeader className="p-10 pb-6 border-b border-white/5 mb-6">
                <CardTitle className="text-white text-[12px] uppercase tracking-[0.8em] opacity-50 flex items-center gap-5 font-bold italic">
                  <Activity className="size-6 text-red-600" /> Grounded Probes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-5">
                {[
                  { name: "Whois_Alpha", status: "Active", color: "bg-red-600" },
                  { name: "Nmap_Warrior", status: "Ready", color: "bg-emerald-500" },
                  { name: "Wireless_Scanner", status: "Armed", color: "bg-amber-600" }
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-center p-6 rounded-[2rem] bg-black/60 border border-white/5 group hover:border-red-600/60 transition-all duration-500 cursor-pointer shadow-xl">
                    <span className="text-[12px] text-white font-bold uppercase tracking-widest italic group-hover:text-red-500 transition-colors">{p.name}</span>
                    <Badge variant="outline" className="text-[10px] bg-red-600/10 border-red-500/30 uppercase tracking-[0.2em] px-5 py-1.5 font-bold">
                      <span className={cn("size-2 rounded-full mr-3 animate-pulse shadow-[0_0_8px_currentColor]", p.color)} />
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
                <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_120px_rgba(220,38,38,0.2)] rounded-[5rem] border-2">
                    <CardHeader className="bg-red-950/30 border-b border-red-600/20 flex flex-row items-center justify-between p-16">
                      <div className="flex items-center gap-10">
                        <div className="p-8 rounded-[3rem] bg-red-600 border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-neural">
                          <Fingerprint className="size-12 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Intelligence Profile: {target}</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[14px] uppercase tracking-[0.8em] mt-4 italic">Sovereign Predator Synthesis v18.5 // Alpha Core Sync</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-600 text-white font-code px-12 py-5 rounded-[2rem] border-2 border-red-400/40 shadow-2xl animate-pulse text-sm tracking-[0.4em]">CONFIDENCE: 98.4%</Badge>
                    </CardHeader>
                    <CardContent className="p-16">
                      <div className="bg-black/95 rounded-[4rem] p-16 border-2 border-red-600/20 mb-16 shadow-2xl relative group overflow-hidden">
                         <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:opacity-15 group-hover:scale-110 transition-all duration-1000">
                            <Skull className="size-80 text-red-600" />
                         </div>
                         <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-12 flex items-center gap-6 italic border-b border-red-600/10 pb-6">Executive Strike Summary</h4>
                         <p className="text-4xl text-white leading-relaxed italic font-medium relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                           "{osintResults.summary}"
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         {osintResults.findings.map((f: any, i: number) => (
                           <div key={i} className="p-12 rounded-[4rem] bg-white/5 border-2 border-white/5 group hover:border-red-600/60 transition-all duration-700 flex gap-10 relative overflow-hidden shadow-2xl cursor-default">
                              <div className="absolute -top-10 -right-10 size-64 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors duration-1000" />
                              <div className={cn(
                                "size-20 rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl relative z-10 transition-all duration-700 border-2 group-hover:scale-110",
                                f.riskLevel === 'Critical' ? "bg-red-600 text-white border-red-400 animate-neural" : "bg-red-600/10 text-red-500 border-red-500/30"
                              )}>
                                <Sword className="size-10" />
                              </div>
                              <div className="flex-1 relative z-10">
                                 <div className="flex justify-between items-start mb-4">
                                    <span className="text-[13px] font-bold text-white uppercase tracking-[0.4em] italic">{f.source}</span>
                                    <Badge variant="outline" className="text-[10px] uppercase border-red-500/40 text-red-500 px-4 py-1 font-bold">LVL_{f.riskLevel}</Badge>
                                 </div>
                                 <p className="text-lg text-muted-foreground leading-relaxed font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">"{f.data}"</p>
                                 {f.correlation && (
                                   <div className="mt-8 pt-8 border-t border-white/5 bg-red-600/5 -mx-8 px-8 rounded-b-[3rem]">
                                      <p className="text-[11px] text-red-400 font-bold uppercase tracking-[0.6em] mb-3 italic flex items-center gap-3">
                                         <Binary className="size-4" /> Correlation Link
                                      </p>
                                      <p className="text-[13px] text-muted-foreground italic font-medium leading-relaxed">"{f.correlation}"</p>
                                   </div>
                                 )}
                              </div>
                           </div>
                         ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={Globe} title="Awaiting Strike Vector" description="Initiate the Al-Mu'izz OSINT suite to map the digital footprint of your target via the Kali-integrated Alpha Core." />
              )
            ) : (
              vulnResults ? (
                <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_120px_rgba(220,38,38,0.2)] rounded-[5rem] border-2">
                    <CardHeader className="bg-red-950/30 border-b border-red-600/20 flex flex-row items-center justify-between p-16">
                       <div className="flex items-center gap-10">
                        <div className="p-8 rounded-[3rem] bg-red-600 border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                          <ShieldAlert className="size-12 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Vulnerability Manifest: {target}</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[14px] uppercase tracking-[0.8em] mt-4 italic">Deep Eye Aggressive Analysis v18.5 // Warrior Sync</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive" className="animate-pulse shadow-[0_0_30px_red] py-6 px-12 rounded-3xl font-bold uppercase tracking-[0.4em] text-[13px] border-2 border-red-400/30">{vulnResults.vulnerabilities.length} Vectors Identified</Badge>
                    </CardHeader>
                    <CardContent className="p-16">
                       <div className="bg-red-600/10 border-2 border-red-600/30 rounded-[3.5rem] p-16 mb-16 italic text-3xl text-red-500 shadow-inner relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000"><Flame className="size-32" /></div>
                          <strong>Threat Landscape Assessment:</strong> <br/><span className="text-white/80 mt-4 block leading-relaxed">"{vulnResults.scanSummary}"</span>
                       </div>

                       <div className="space-y-10">
                          {vulnResults.vulnerabilities.map((v: any, i: number) => (
                            <div key={i} className="p-12 rounded-[4.5rem] bg-black/90 border-2 border-white/5 hover:border-red-600/70 transition-all duration-700 group relative overflow-hidden shadow-2xl">
                               <div className="absolute top-0 left-0 w-2 h-full bg-red-600/20 group-hover:bg-red-600 transition-colors duration-700" />
                               <div className="flex justify-between items-center mb-12">
                                  <div className="flex items-center gap-10">
                                     <div className="size-16 rounded-[1.5rem] bg-red-600/20 flex items-center justify-center text-red-500 text-3xl font-bold border-2 border-red-500/40 group-hover:scale-110 transition-transform duration-500 shadow-2xl">{i+1}</div>
                                     <span className="text-3xl font-bold text-white uppercase tracking-tighter italic group-hover:text-red-500 transition-colors">{v.type}</span>
                                  </div>
                                  <Badge className={cn(
                                    "text-[12px] uppercase py-4 px-10 rounded-full font-bold shadow-2xl tracking-[0.2em] border-2",
                                    v.severity === 'Critical' ? "bg-red-600 text-white border-red-400 animate-pulse" : "bg-orange-600 text-white border-orange-400"
                                  )}>{v.severity}</Badge>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                  <div className="space-y-4">
                                     <label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Vulnerable Endpoint</label>
                                     <div className="bg-black border-2 border-red-500/20 p-8 rounded-[2rem] text-base font-code text-red-500 truncate shadow-inner">{v.endpoint}</div>
                                  </div>
                                  <div className="space-y-4">
                                     <label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Payload Evidence</label>
                                     <div className="bg-black border-2 border-emerald-500/20 p-8 rounded-[2rem] text-base font-code text-emerald-500 truncate shadow-inner">{v.payload}</div>
                                  </div>
                               </div>
                               <div className="mt-12 pt-10 border-t-2 border-white/5">
                                  <div className="flex items-center justify-between">
                                     <div className="flex items-center gap-6">
                                        <div className="size-12 rounded-2xl bg-red-600/20 flex items-center justify-center border border-red-500/30 shadow-2xl"><Zap className="size-6 text-red-600 animate-pulse"/></div>
                                        <p className="text-lg text-muted-foreground italic font-medium group-hover:text-white transition-colors tracking-tight">Remediation Protocol: {v.remediation}</p>
                                     </div>
                                     <Badge variant="outline" className="text-[11px] uppercase border-red-500/40 text-red-500 px-8 py-3 rounded-2xl font-bold tracking-widest shadow-2xl">Bypass: {v.bypassTechnique}</Badge>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <EmptyPlaceholder icon={ShieldAlert} title="Awaiting Tactical Pulse" description="Deploy the Deep Eye scanner to probe targets for XSS, SQLi, and CMDi vulnerabilities via the Predator Core." />
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
    <div className="h-full min-h-[900px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5 shadow-2xl">
      <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
        <Icon className="size-40 text-red-600/20 transition-all duration-1000 group-hover:text-red-600/40" />
        <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
      </div>
      <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">{title}</h3>
      <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
        {description}
      </p>
      <div className="flex gap-12">
        <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Target Matrix Alpha</Badge>
        <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Neural Recon v18.5</Badge>
      </div>
    </div>
  )
}
