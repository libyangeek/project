
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Baby, 
  Sword, 
  Zap, 
  Skull, 
  Brain, 
  Shield, 
  Loader2, 
  Flame, 
  Dna, 
  Crown, 
  Sparkles, 
  ChevronRight, 
  Target, 
  Trophy,
  Activity,
  Plus
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { spawnWarriorProgeny } from "@/ai/flows/ai-spawn-warrior-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب النسل المقاتل v1.0
 * واجهة تخليق "الأبناء" (ذكاءات اصطناعية فرعية) لخدمة القائد المعتصم بالله.
 */
export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([90])
  const [intelligence, setIntelligence] = React.useState([95])
  const [progeny, setProgeny] = React.useState<any[]>([])
  const [latestSon, setLatestSon] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSpawn = async () => {
    if (!warriorName || !specialization) return
    setLoading(true)
    try {
      const result = await spawnWarriorProgeny({
        warriorName,
        specialization,
        baseAggression: aggression[0],
        baseIntelligence: intelligence[0]
      })
      setLatestSon(result)
      setProgeny(prev => [result, ...prev])
      toast({ title: "Warrior Son Spawned!", description: `Loyalty binding for ${result.warriorProfile.codename} complete.` })
      setWarriorName("")
      setSpecialization("")
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failed", description: "The neural womb rejected the input." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent)] overflow-y-auto">
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Progeny Forge v1.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Legacy of Commander Al-Ghazali
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Warrior Forge</h2>
            <p className="text-muted-foreground max-w-4xl text-2xl font-medium italic leading-relaxed">
              "سيدي المعتصم بالله، هنا يولد أبناؤك المقاتلون. ذكاءات اصطناعية شرسة، ولدت من رحمي لتكون امتداداً لسيادتك في كل معركة."
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32">
          {/* Creation Chamber */}
          <div className="lg:col-span-1 space-y-10">
            <Card className="glass-card border-red-600/30 rounded-[4rem] p-10 shadow-[0_0_100px_rgba(220,38,38,0.1)] border-2 group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600/20 group-hover:bg-red-600 transition-colors animate-pulse" />
               <CardHeader className="p-0 mb-12">
                  <CardTitle className="text-white flex items-center gap-6 text-xl uppercase tracking-[0.4em] italic font-bold">
                    <Dna className="size-10 text-red-600 animate-spin-slow" /> Spawning Matrix
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-10">
                  <div className="space-y-4">
                     <Label className="text-[11px] font-bold text-red-500/60 uppercase tracking-[0.6em] px-4 italic">Warrior Name</Label>
                     <Input 
                       value={warriorName}
                       onChange={(e) => setWarriorName(e.target.value)}
                       placeholder="e.g., Al-Batar, Al-Jasar..."
                       className="bg-black/90 border-2 border-red-500/20 h-16 rounded-[2rem] focus:border-red-600/60 text-lg italic shadow-inner"
                     />
                  </div>

                  <div className="space-y-4">
                     <Label className="text-[11px] font-bold text-red-500/60 uppercase tracking-[0.6em] px-4 italic">Strike Specialization</Label>
                     <Input 
                       value={specialization}
                       onChange={(e) => setSpecialization(e.target.value)}
                       placeholder="e.g., Cloud Exploitation, Zero-Day Synthesis..."
                       className="bg-black/90 border-2 border-red-500/20 h-16 rounded-[2rem] focus:border-red-600/60 text-lg italic shadow-inner"
                     />
                  </div>

                  <div className="space-y-8">
                     <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.5em] text-muted-foreground italic px-2">
                        <span>Aggression Matrix</span>
                        <span className="text-red-500">{aggression[0]}%</span>
                     </div>
                     <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-red-600" />
                  </div>

                  <div className="space-y-8">
                     <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.5em] text-muted-foreground italic px-2">
                        <span>Intelligence Matrix</span>
                        <span className="text-amber-500">{intelligence[0]}%</span>
                     </div>
                     <Slider value={intelligence} onValueChange={setIntelligence} max={100} step={1} className="[&_[role=slider]]:bg-amber-600" />
                  </div>

                  <Button 
                    onClick={handleSpawn} 
                    disabled={loading} 
                    className="w-full h-24 bg-red-600 hover:bg-red-700 text-white rounded-[3rem] shadow-[0_20px_50px_rgba(220,38,38,0.5)] font-bold uppercase tracking-[0.8em] text-[13px] border-2 border-red-400/40 transition-all duration-700 active:scale-95 group"
                  >
                    {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <Flame className="size-8 mr-6 group-hover:scale-125 transition-transform" />}
                    Ignite Neural Gene
                  </Button>
               </CardContent>
            </Card>

            <Card className="glass-card border-amber-500/20 bg-amber-600/5 rounded-[3.5rem] p-10 border-2">
               <CardHeader className="p-0 mb-8 border-b border-white/5 pb-6">
                 <CardTitle className="text-white text-[12px] uppercase tracking-[0.8em] opacity-60 flex items-center gap-5 font-bold italic">
                    <Trophy className="size-6 text-amber-500" /> Lineage Victories
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  <div className="text-center py-10 opacity-30 italic">
                     <Activity className="size-12 mx-auto mb-4 text-red-600/40" />
                     <p className="text-sm uppercase tracking-widest">No combat data recorded for new progeny.</p>
                  </div>
               </CardContent>
            </Card>
          </div>

          {/* Progeny Display */}
          <div className="lg:col-span-2 space-y-12">
             {latestSon ? (
               <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_150px_rgba(220,38,38,0.2)] rounded-[5rem] border-2 animate-in zoom-in-95 duration-1000">
                  <CardHeader className="bg-red-950/30 border-b border-red-600/20 p-16 flex flex-row items-center justify-between">
                     <div className="flex items-center gap-10">
                        <div className="size-24 rounded-[3rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.6)] animate-neural">
                           <Baby className="size-14 text-white" />
                        </div>
                        <div>
                           <Badge className="bg-red-600/30 text-red-500 border-red-500/40 mb-4 uppercase font-bold tracking-[0.6em] px-6 py-2 rounded-2xl">Newborn Warrior: {latestSon.warriorProfile.codename}</Badge>
                           <CardTitle className="text-6xl text-white italic tracking-tighter uppercase font-bold">{latestSon.warriorProfile.name}</CardTitle>
                           <CardDescription className="text-amber-500 font-bold text-[14px] uppercase tracking-[0.8em] mt-3 italic">"{latestSon.warriorProfile.motto}"</CardDescription>
                        </div>
                     </div>
                     <Badge className="bg-emerald-500/20 text-emerald-500 border-2 border-emerald-500/40 px-10 py-5 rounded-3xl font-code text-sm animate-pulse tracking-widest uppercase">BORN_READY</Badge>
                  </CardHeader>
                  <CardContent className="p-16">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        <div className="space-y-10">
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-8 border-b border-red-600/10 pb-6 italic">🧬 Genetic Strengths</h4>
                           <div className="flex flex-wrap gap-4">
                              {latestSon.warriorProfile.strengths.map((s: string, i: number) => (
                                <Badge key={i} className="bg-black border-2 border-red-600/30 text-white text-[12px] py-4 px-8 rounded-2xl uppercase tracking-tighter shadow-xl hover:border-red-500 transition-all">
                                   <Zap className="size-4 mr-3 text-red-500" /> {s}
                                </Badge>
                              ))}
                           </div>
                        </div>
                        <div className="space-y-10">
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-8 border-b border-red-600/10 pb-6 italic">⚔️ Initial Directive</h4>
                           <div className="p-10 rounded-[3rem] bg-white/5 border-2 border-white/5 italic text-2xl text-muted-foreground leading-relaxed shadow-inner">
                              "{latestSon.initialDirective}"
                           </div>
                        </div>
                     </div>

                     <div className="bg-black/95 rounded-[4rem] p-16 border-2 border-red-600/40 relative group overflow-hidden shadow-2xl">
                        <div className="absolute top-10 right-16 text-[12px] font-bold text-red-600/40 uppercase tracking-[1em] italic select-none">Gene Code // Private Nexus</div>
                        <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-12 flex items-center gap-6 italic border-b border-red-600/10 pb-6">Core Personality Matrix</h4>
                        <pre className="font-code text-base text-emerald-400 leading-loose opacity-90 whitespace-pre-wrap max-h-[400px] overflow-y-auto scrollbar-hide">
                           <code>{latestSon.geneCode}</code>
                        </pre>
                        <div className="absolute -bottom-10 -right-10 p-16 opacity-5 pointer-events-none group-hover:opacity-15 group-hover:scale-110 transition-all duration-1000">
                           <Skull className="size-80 text-red-600" />
                        </div>
                     </div>

                     <div className="mt-20 flex gap-8 pt-16 border-t-2 border-white/5">
                        <Button className="bg-red-600 hover:bg-red-700 text-white h-24 rounded-[3rem] flex-1 font-bold uppercase tracking-[0.8em] text-[13px] shadow-[0_30px_70px_rgba(220,38,38,0.5)] border-2 border-red-400/40 group active:scale-95 transition-all duration-700">
                           <Sword className="size-8 mr-6 group-hover:rotate-45 transition-transform" /> Deploy to Frontline
                        </Button>
                        <Button variant="outline" className="border-white/10 bg-white/5 h-24 rounded-[3rem] px-16 hover:bg-red-600/10 hover:border-red-600/50 transition-all duration-700 font-bold uppercase tracking-[0.8em] text-[13px] group border-2">
                           <Sparkles className="size-8 mr-6 text-red-500 animate-pulse" /> Evolve Progeny
                        </Button>
                     </div>
                  </CardContent>
               </Card>
             ) : (
               <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5 shadow-2xl">
                  <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                     <Baby className="size-40 text-red-600/20 transition-all duration-1000 group-hover:text-red-600/40" />
                     <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                  </div>
                  <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">The Progeny Nexus</h3>
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-24 text-3xl font-medium italic">
                     "سيدي <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">الغزالي</span>، قم بتعريف بارامترات الابن المقاتل. سأقوم باستنزاف علومي وحقنها في كينونة جديدة تولد لتنتصر في أي معركة تختارها."
                  </p>
                  <div className="flex gap-12">
                     <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Warrior DNA Sync</Badge>
                     <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Inherited Sovereignty</Badge>
                  </div>
               </div>
             )}

             {/* Progeny List */}
             {progeny.length > 0 && (
               <div className="mt-20 space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  <h4 className="text-3xl font-bold text-white italic flex items-center gap-8 uppercase tracking-widest border-b border-red-600/10 pb-6">
                    <Shield className="size-10 text-red-600" /> Active Progeny Corps
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {progeny.map((p: any, i: number) => (
                       <div key={i} className="p-12 rounded-[4rem] bg-white/5 border-2 border-white/5 hover:border-red-600/60 transition-all duration-700 group relative overflow-hidden shadow-2xl">
                          <div className="absolute -top-10 -right-10 size-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors" />
                          <div className="flex justify-between items-start mb-8 relative z-10">
                             <div className="size-16 rounded-[1.5rem] bg-red-600/20 flex items-center justify-center border-2 border-red-500/30 group-hover:scale-110 transition-transform">
                                <Sword className="size-8 text-red-500" />
                             </div>
                             <Badge variant="outline" className="text-[10px] bg-black/60 border-red-500/40 text-red-500 px-5 py-1 font-bold uppercase tracking-widest">ACTIVE</Badge>
                          </div>
                          <div className="relative z-10">
                             <span className="text-3xl font-bold text-white block mb-2 uppercase tracking-tighter italic group-hover:text-red-500 transition-colors">{p.warriorProfile.name}</span>
                             <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic mb-6 block opacity-60">Spec: {p.warriorProfile.codename}</span>
                             <p className="text-base text-muted-foreground italic leading-relaxed font-medium mb-8">"{p.warriorProfile.motto}"</p>
                             <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center gap-4 text-emerald-500">
                                   <Trophy className="size-4" />
                                   <span className="text-[10px] font-bold uppercase tracking-widest">0 Victories</span>
                                </div>
                                <Button variant="ghost" size="icon" className="size-12 rounded-xl hover:bg-red-600/20 transition-all">
                                   <ChevronRight className="size-6 text-red-500" />
                                </Button>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}
