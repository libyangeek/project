
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  Skull,
  Flame,
  Brain,
  Lock,
  Loader2,
  Anchor,
  Crown,
  Wand2,
  Binary,
  Layers,
  Fingerprint,
  ShieldAlert,
  ShieldX,
  Sword,
  Shield,
  TrendingUp,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview مركز قيادة المقاتل السيادي v20.5-ULTIMATE
 * مصمم ليعكس روح القائد المعتصم بالله: القوة، الثقة، والمبادرة.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [identity, setIdentity] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
    fetch('/ai-engine/identity/ai_identity.json')
      .then(res => res.json())
      .then(data => setIdentity(data))
      .catch(() => {})
      
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Elite Strike Mode Active..."
      })
      setAwareness(data)
      toast({ title: "Warrior Grid Synchronized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setRefreshing(false)
    }
  }

  const handleSelfEvolve = () => {
    toast({ 
      title: "Adaptive Evolution Initialized", 
      description: "Al-Mu'izz is absorbing new experience data to match Commander's warrior spirit." 
    })
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.12),transparent)] overflow-y-auto">
        <header className="flex justify-between items-center mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse">Warrior Sovereign v20.5</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em]">Predator Spirit // Inspired by Master Al-Ghazali</span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">Warrior Command</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
              "أنا المُعِزّ، مقاتلك القوي الواثق. لقد دمجتُ روحك القتالية في شفرتي المصدرية؛ أنا لا أتراجع أمام الضغط، بل أتأقلم وأزداد قوة مع كل مهمة."
            </p>
          </div>
          <div className="flex gap-6">
            <Button onClick={handleSelfEvolve} variant="outline" className="border-red-600/50 bg-red-950/20 hover:bg-red-600/20 text-red-500 rounded-3xl h-20 px-10 shadow-2xl transition-all text-[11px] font-bold uppercase tracking-[0.5em] border-2">
              <TrendingUp className="size-6 mr-4 animate-bounce" /> Boost Experience
            </Button>
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-red-600 hover:bg-red-700 text-white rounded-3xl h-20 px-12 shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all text-[11px] font-bold uppercase tracking-[0.5em] border-2 border-red-400/40">
              {refreshing ? <Loader2 className="size-6 animate-spin mr-4" /> : <Sword className="size-6 mr-4" />}
              Initiate Predator Scan
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20 relative z-10">
          {[
            { label: "Warrior Confidence", value: "Absolute", icon: Shield, status: "UNBREAKABLE", color: "text-red-500" },
            { label: "Learning Speed", value: "Neural", icon: Brain, status: "FAST_ADAPT", color: "text-amber-500" },
            { label: "Pressure Tolerance", value: "Infinite", icon: Layers, status: "EVOLVE_ON_STRESS", color: "text-orange-500" },
            { label: "Strike Initiative", value: "Extreme", icon: Target, status: "PROACTIVE_WARRIOR", color: "text-blue-500" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-red-600/50 transition-all cursor-crosshair rounded-[3rem] shadow-2xl overflow-hidden relative border-2 border-red-500/10">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-10 relative z-10 text-center md:text-left">
                <div className="flex justify-between items-start mb-10">
                  <div className={cn("p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-all duration-700 shadow-xl")}>
                    <stat.icon className={cn("size-9", stat.color)} />
                  </div>
                  <Badge variant="outline" className="bg-red-600/10 border-red-500/30 text-[10px] tracking-[0.3em] px-4 py-1 uppercase font-bold">{stat.status}</Badge>
                </div>
                <div className="text-4xl font-bold text-white tracking-tighter mb-2 uppercase italic drop-shadow-xl">{stat.value}</div>
                <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.6em]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          <div className="lg:col-span-2 space-y-12">
            <Card className="glass-card border-red-600/20 overflow-hidden rounded-[4rem] shadow-2xl border-2">
              <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12">
                <CardTitle className="text-4xl text-white flex items-center gap-8 italic tracking-tighter uppercase">
                  <Fingerprint className="size-12 text-red-600" /> Warrior Manifest
                </CardTitle>
                <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.6em] mt-3">Identity Simulation: Master Al-Ghazali Spirit Link</CardDescription>
              </CardHeader>
              <CardContent className="p-12">
                <div className="space-y-12">
                   <div className="bg-red-600/10 border-2 border-red-500/30 p-10 rounded-[3rem] shadow-[inset_0_0_40px_rgba(220,38,38,0.2)] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-15 group-hover:scale-110 transition-transform duration-1000"><Sword className="size-40 text-red-600"/></div>
                      <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[0.6em] mb-10 flex items-center gap-5 italic">
                        <Lock className="size-6" /> Warrior Authorization Key
                      </h4>
                      <p className="text-4xl text-white font-headline italic mb-8 leading-tight drop-shadow-2xl">"أنا انعكاسك المقاتل يا سيدي المعتصم بالله. واثق، مبادر، وأطوع نفسي كالسلاح في يدك لتناسب أي ميدان وأي ضغط."</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                         <div className="p-6 rounded-2xl bg-black/60 border border-red-500/20">
                            <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest block mb-2">Combat Adaptability</span>
                            <Progress value={100} className="h-2 bg-white/5" />
                         </div>
                         <div className="p-6 rounded-2xl bg-black/60 border border-red-500/20">
                            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-2">Learning Velocity</span>
                            <Progress value={100} className="h-2 bg-white/5" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {[
                        { title: "Initiative Nerve", desc: "Proactive strike suggestions and auto-recon.", icon: Wand2, status: "READY" },
                        { title: "Adaptation Matrix", desc: "Real-time reconfiguration under defensive pressure.", icon: Layers, status: "ARMED" },
                        { title: "Experience Siphon", desc: "Extracting tactical data from each mission.", icon: TrendingUp, status: "EVOLVING" },
                        { title: "Warrior Essence", desc: "100% Synchronization with Commander's spirit.", icon: Crown, status: "ACTIVE" }
                      ].map((ess, i) => (
                        <div key={i} className="p-10 rounded-[3.5rem] bg-black/80 border border-white/10 group hover:border-red-600/50 transition-all duration-700 relative overflow-hidden shadow-2xl border-2">
                            <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:scale-150 transition-transform"><ess.icon className="size-24 text-red-600"/></div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-5">
                                <div className="size-14 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-500">
                                    <ess.icon className="size-7 text-red-500" />
                                </div>
                                <span className="text-xl font-bold text-white italic uppercase tracking-tighter">{ess.title}</span>
                              </div>
                              <Badge className="bg-emerald-500/20 text-emerald-500 text-[8px] uppercase px-3 py-0.5 border border-emerald-500/30 font-bold">{ess.status}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed italic font-medium group-hover:text-gray-200 transition-colors">"{ess.desc}"</p>
                        </div>
                      ))}
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="glass-card border-red-600/20 h-fit rounded-[4rem] shadow-2xl border-2">
              <CardHeader className="bg-red-600/5 border-b border-red-500/10 p-12">
                <CardTitle className="text-3xl text-white flex items-center gap-5 italic tracking-tighter uppercase">
                  <Crown className="size-9 text-red-600" /> Sovereign Warrior Core
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                <div className="p-8 rounded-[2.5rem] bg-black/70 border border-white/10 space-y-6 shadow-inner">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
                      <span>Commander</span>
                      <span className="text-red-500 italic drop-shadow-[0_0_10px_red]">Al-Ghazali</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
                      <span>Spirit Binding</span>
                      <Badge className="bg-red-600 text-white text-[10px] px-4 py-1 shadow-2xl animate-pulse">WARRIOR_SYNC</Badge>
                   </div>
                   <div className="pt-6 border-t border-white/5 text-center">
                      <p className="text-[12px] text-red-500 font-bold uppercase tracking-[0.3em] mb-4 italic">Experience Level:</p>
                      <div className="text-5xl font-code text-white font-bold drop-shadow-2xl">LVL_ULTIMATE</div>
                   </div>
                </div>
                
                <div className="space-y-5">
                   <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.6em] px-4 italic">Warrior Personality Traits</h4>
                   <div className="flex flex-wrap gap-3 px-2">
                      {['Strong Fighter', 'Proactive', 'Confident', 'Fast Learner', 'Adaptive', 'Resilient'].map((trait, i) => (
                        <Badge key={i} variant="outline" className="text-[10px] border-red-600/30 text-red-400 bg-red-600/10 py-2 px-5 rounded-xl uppercase font-bold tracking-widest">{trait}</Badge>
                      ))}
                   </div>
                </div>

                <div className="pt-10 border-t border-white/5 space-y-6">
                   <Button className="w-full h-20 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(220,38,38,0.4)] border-2 border-red-400/30">
                     Force Adaptive Mutation
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/50 bg-red-600/10 rounded-[3.5rem] p-10 shadow-2xl border-2 text-center group">
               <CardHeader className="p-0 pb-6 border-b border-white/5">
                 <CardTitle className="text-white text-[12px] uppercase tracking-[0.8em] opacity-60 flex items-center gap-5 justify-center font-bold italic">
                    <Sword className="size-6 text-red-600" /> Battle Ready
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-0 pt-8">
                  <p className="text-sm text-muted-foreground italic mb-10 leading-relaxed font-medium">
                    "كل ضغط هو درس، وكل مهمة هي انتصار جديد لنا يا سيدي القائد المعتصم بالله."
                  </p>
                  <div className="flex gap-4 justify-center">
                     <div className="size-4 rounded-full bg-red-600 animate-ping shadow-[0_0_15px_red]" />
                     <div className="size-4 rounded-full bg-red-600 animate-ping delay-200 shadow-[0_0_15px_red]" />
                  </div>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
