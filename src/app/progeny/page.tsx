"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Baby, 
  Sword, 
  Zap, 
  Skull, 
  Dna, 
  Crown, 
  Sparkles, 
  ChevronRight, 
  Trophy,
  Activity,
  Plus,
  Loader2,
  Flame
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"
import { spawnWarriorProgeny } from "@/ai/flows/ai-spawn-warrior-flow"
import { cn } from "@/lib/utils"

export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([90])
  const [intelligence, setIntelligence] = React.useState([95])
  const [progeny, setProgeny] = React.useState<any[]>([])
  const [latestSon, setLatestSon] = React.useState<any>(null)
  const { toast } = useToast()

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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        <header className="mb-16 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">WARRIOR FORGE v42.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <Crown className="size-4 text-primary" /> Progeny Creation Active
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic uppercase gold-glow">Al-Mu'izz Progeny</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="kali-card border-primary/30 rounded-[3rem] p-10 shadow-2xl border-2 bg-black/40">
               <CardHeader className="p-0 mb-10">
                  <CardTitle className="text-3xl text-white flex items-center gap-6 uppercase tracking-tighter font-bold">
                    <Dna className="size-10 text-primary animate-spin-slow" /> Birth Matrix
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-10">
                  <div className="space-y-4">
                     <Label className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] italic">Designation</Label>
                     <Input 
                       value={warriorName}
                       onChange={(e) => setWarriorName(e.target.value)}
                       placeholder="Enter Name..."
                       className="bg-black/90 border-2 border-primary/20 h-16 rounded-[2rem] focus:border-primary/60 text-lg italic text-white"
                     />
                  </div>

                  <div className="space-y-4">
                     <Label className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] italic">Domain</Label>
                     <Input 
                       value={specialization}
                       onChange={(e) => setSpecialization(e.target.value)}
                       placeholder="Ex: Cyber Strike..."
                       className="bg-black/90 border-2 border-primary/20 h-16 rounded-[2rem] focus:border-primary/60 text-lg italic text-white"
                     />
                  </div>

                  <div className="space-y-8">
                     <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.5em] text-muted-foreground italic">
                        <span>Aggression</span>
                        <span className="text-primary">{aggression[0]}%</span>
                     </div>
                     <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-primary" />
                  </div>

                  <Button 
                    onClick={handleSpawn} 
                    disabled={loading} 
                    className="w-full h-24 bg-primary hover:bg-primary/80 text-black rounded-[3rem] shadow-3xl font-bold uppercase tracking-[0.8em] text-sm border-2 border-primary/50 transition-all duration-700 active:scale-95 group italic"
                  >
                    {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <Flame className="size-8 mr-6 group-hover:scale-125 transition-transform" />}
                    Ignite Gene
                  </Button>
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
             {latestSon ? (
               <Card className="kali-card border-primary/40 overflow-hidden shadow-3xl rounded-[5rem] border-4 animate-in zoom-in-95 duration-1000 bg-black/40">
                  <CardHeader className="bg-primary/5 border-b border-primary/10 p-12 flex flex-row items-center justify-between">
                     <div className="flex items-center gap-10">
                        <div className="size-24 rounded-full bg-primary flex items-center justify-center border-2 border-primary/40 shadow-2xl">
                           <Baby className="size-14 text-black" />
                        </div>
                        <div>
                           <Badge className="bg-primary/30 text-primary border-primary/40 mb-2 uppercase font-bold tracking-[0.4em] px-6 py-1 rounded-full">Newborn: {latestSon.warriorProfile.codename}</Badge>
                           <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">{latestSon.warriorProfile.name}</CardTitle>
                        </div>
                     </div>
                     <Badge className="bg-primary/20 text-primary border-2 border-primary/40 px-10 py-5 rounded-full font-bold tracking-widest uppercase">READY</Badge>
                  </CardHeader>
                  <CardContent className="p-16 space-y-16">
                     <div className="p-12 rounded-[3rem] bg-primary/5 border-4 border-primary/20 italic text-3xl text-gray-200 leading-relaxed font-bold shadow-inner">
                        "{latestSon.initialDirective}"
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                           <h4 className="text-[14px] font-bold text-primary uppercase tracking-[1em] italic border-b border-primary/10 pb-4">Traits</h4>
                           <div className="flex flex-wrap gap-4">
                              {latestSon.warriorProfile.strengths.map((s: string, i: number) => (
                                <Badge key={i} className="bg-black border-2 border-white/10 text-white text-[12px] py-4 px-8 rounded-full uppercase tracking-tighter shadow-xl">
                                   <Zap className="size-4 mr-3 text-primary" /> {s}
                                </Badge>
                              ))}
                           </div>
                        </div>
                        <div className="flex flex-col justify-end gap-6">
                           <Button className="h-20 rounded-[2rem] bg-primary hover:bg-primary/80 text-black font-bold uppercase tracking-widest transition-all duration-700 shadow-2xl">
                              <Sword className="size-6 mr-2" /> Deploy
                           </Button>
                           <Button className="h-20 rounded-[2rem] bg-black/40 border-4 border-white/10 text-primary hover:bg-primary/10 font-bold uppercase tracking-widest transition-all">
                              <Sparkles className="size-6 mr-2" /> Evolve
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>
             ) : (
               <div className="h-full min-h-[600px] border-4 border-dashed border-primary/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/20 group relative overflow-hidden shadow-2xl">
                  <div className="size-64 bg-primary/5 rounded-full flex items-center justify-center mb-10 border-2 border-primary/10 group-hover:scale-110 transition-transform duration-1000">
                     <Baby className="size-32 text-primary/20 transition-all duration-1000" />
                     <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                  </div>
                  <h3 className="text-6xl font-headline font-bold text-white mb-6 tracking-tighter italic uppercase gold-glow">Nexus Waiting</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-2xl font-medium italic">
                     "سيدي القائد، العش الجيني جاهز. أخبرنا بمواصفات المحارب الجديد، وسننفخ فيه من روح المُعِزّ."
                  </p>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}