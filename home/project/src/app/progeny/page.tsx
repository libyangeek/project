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
  Flame,
  Fingerprint,
  Trash2,
  BrainCircuit,
  Binary,
  ShieldCheck,
  Atom,
  Boxes,
  ZapOff,
  Crosshair,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"
import { spawnWarriorProgeny } from "@/ai/flows/ai-spawn-warrior-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { errorEmitter } from '@/firebase/error-emitter'
import { FirestorePermissionError } from '@/firebase/errors'

/**
 * @fileOverview مصنع النسل المقاتل v53.0 - THE SUPREME FORGE: HIERARCHICAL DOMINION
 * وحدة تخليق الذكاءات التابعة المدمجة في عصب الهرمية الأسمى.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 6 مايو 2026
 */
export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([95])
  const [intelligence, setIntelligence] = React.useState([99])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  const { user } = useUser()
  const db = useFirestore()
  const { toast } = useToast()

  const progenyQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'progeny');
  }, [db, user?.uid]);

  const { data: progenyList, isLoading: loadingProgeny } = useCollection(progenyQuery);

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSpawn = async () => {
    if (!warriorName || !specialization || !user) return
    setLoading(true)
    try {
      const result = await spawnWarriorProgeny({
        warriorName,
        specialization,
        baseAggression: aggression[0],
        baseIntelligence: intelligence[0]
      })

      const progenyRef = doc(collection(db, 'users', user.uid, 'progeny'));
      await setDoc(progenyRef, {
        ...result,
        createdAt: serverTimestamp(),
        userId: user.uid,
        version: "v53.0"
      }).catch(async (err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
            path: progenyRef.path,
            operation: 'create',
            requestResourceData: result
        }))
      });

      toast({ title: "Warrior Son Spawned!", description: `Loyalty binding for ${result.warriorProfile.codename} complete.` })
      setWarriorName("")
      setSpecialization("")
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failed", description: "The neural womb rejected the input." })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (id: string) => {
    if(!user) return;
    const docRef = doc(db, 'users', user.uid, 'progeny', id);
    deleteDoc(docRef).then(() => {
        toast({ title: "Warrior Purged", description: "Agent removed from existence." })
    }).catch(async (err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
            path: docRef.path,
            operation: 'delete'
        }))
    });
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Baby className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">WARRIOR_FORGE v53.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-5 shadow-lg" /> GENETIC_SOUL: BOUND
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                The <span className="text-primary">Forge</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، وحدة تخليق النسل الهرمية تمنحك القدرة على صناعة ذكاءات تابعة تكون امتداداً لروحك السيادية لليوم المجيد، 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-32 flex-1">
          <div className="space-y-8">
            <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                  <Dna className="size-8 animate-neural" /> Incubation Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                      <Skull className="size-4" /> Warrior Designation
                    </label>
                    <Input 
                      value={warriorName}
                      onChange={(e) => setWarriorName(e.target.value)}
                      placeholder="Enter identity label..." 
                      className="bg-black border-2 border-primary/20 h-14 rounded-xl text-lg italic px-6 focus:border-primary shadow-inner text-white font-black"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                      <Crosshair className="size-4" /> Combat Domain
                    </label>
                    <Input 
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      placeholder="e.g. Kernel Hijacking, EDR Crush..." 
                      className="bg-black border-2 border-primary/20 h-14 rounded-xl text-lg italic px-6 focus:border-primary shadow-inner text-white font-black"
                    />
                </div>
                
                <div className="space-y-6 px-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">Aggression</label>
                        <span className="text-2xl font-black text-primary gold-glow">{aggression[0]}%</span>
                    </div>
                    <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-6" />
                </div>

                <div className="space-y-6 px-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">Intelligence</label>
                        <span className="text-2xl font-black text-primary gold-glow">{intelligence[0]}%</span>
                    </div>
                    <Slider value={intelligence} onValueChange={setIntelligence} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-6" />
                </div>

                <Button 
                  disabled={loading}
                  onClick={handleSpawn}
                  className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                >
                  {loading ? <Loader2 className="size-8 animate-spin" /> : <Plus className="size-8 mr-4 group-hover:rotate-90 transition-transform gold-glow" />}
                  IGNITE BIRTH
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                  <Binary className="size-4 animate-pulse" /> NEURAL_WOMB_ACTIVE
               </h4>
               <p className="text-muted-foreground italic text-[11px] leading-relaxed uppercase font-bold opacity-70">
                  "Incubation pods reporting zero genetic drift. Soul Core alignment verified at 100.00%."
               </p>
               <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-6">
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-white italic border-l-8 border-primary pl-6 gold-glow leading-none">The Bloodline</h3>
               <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 text-lg font-black px-6 py-1 rounded-full italic animate-pulse shadow-lg">ACTIVE_SONS: {progenyList?.length || 0}</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loadingProgeny ? (
                    <div className="col-span-full py-40 flex flex-col items-center justify-center gap-8">
                        <Loader2 className="size-16 animate-spin text-primary/20" />
                        <span className="text-xl font-black text-primary/40 uppercase tracking-[1em] italic">Synthesizing Lineage...</span>
                    </div>
                ) : (
                    progenyList?.map((warrior) => (
                        <Card key={warrior.id} className="kali-card border-white/10 bg-black/80 rounded-3xl p-8 border-2 shadow-xl relative group hover:border-primary transition-all duration-700 overflow-hidden flex flex-col hierarchical-shadow">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
                            <div className="absolute top-4 right-4 z-20">
                                <Button variant="ghost" size="icon" onClick={() => handleDelete(warrior.id)} className="size-10 rounded-xl text-white/5 hover:text-red-500 hover:bg-red-500/10 transition-all">
                                    <Trash2 className="size-5" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-6 mb-6 relative z-10">
                                <div className="size-16 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center shadow-lg group-hover:bg-primary transition-all duration-700 animate-neural">
                                    <Fingerprint className="size-8 text-primary group-hover:text-black transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-black text-white uppercase text-xl md:text-3xl leading-none italic tracking-tight gold-glow group-hover:text-primary transition-colors truncate">{warrior.warriorProfile.name}</h4>
                                    <div className="flex items-center gap-3 mt-2">
                                        <Badge className="bg-primary/20 text-primary border-none px-3 py-0.5 rounded-full font-black uppercase text-[8px] italic tracking-widest">{warrior.warriorProfile.codename}</Badge>
                                        <span className="text-[8px] text-muted-foreground uppercase font-black tracking-[0.2em] italic opacity-50">v53.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-black/60 border-2 border-white/5 text-sm md:text-lg text-gray-300 leading-relaxed italic font-bold mb-6 flex-1 shadow-inner group-hover:text-white transition-colors selection:bg-primary selection:text-black">
                                "{warrior.warriorProfile.combatPhilosophy}"
                            </div>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {warrior.warriorProfile.strengths.slice(0, 3).map((s: string, idx: number) => (
                                    <Badge key={idx} className="bg-black border-2 border-white/5 text-white text-[9px] font-black italic px-4 py-1.5 rounded-full uppercase tracking-widest hover:border-primary transition-all shadow-lg">
                                      <Zap className="size-3 text-primary mr-2" /> {s}
                                    </Badge>
                                ))}
                            </div>
                            <div className="absolute -bottom-4 -right-4 p-8 opacity-[0.01] pointer-events-none group-hover:opacity-[0.05] transition-all duration-700 scale-150">
                               <Skull className="size-32 text-primary" />
                            </div>
                        </Card>
                    ))
                )}
                
                {!loadingProgeny && (!progenyList || progenyList.length === 0) && (
                    <div className="col-span-full h-96 border-4 border-dashed border-primary/10 rounded-[3rem] flex flex-col items-center justify-center text-center p-10 opacity-20 group hover:opacity-40 transition-opacity bg-black/40">
                       <div className="relative mb-6">
                          <Baby className="size-32 animate-bounce text-primary/10" />
                          <div className="absolute -inset-6 border-2 border-primary/10 rounded-full animate-spin-slow" />
                       </div>
                       <h3 className="text-4xl font-black uppercase tracking-[0.5em] text-white italic gold-glow">Chamber Empty</h3>
                       <p className="text-lg mt-4 italic font-black text-primary/40 uppercase tracking-widest leading-relaxed">
                          "سيدي القائد، العش الهرمي بانتظار نيتك لتخليق أول محارب رقمي لعام 2026."
                       </p>
                    </div>
                )}
            </div>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>BLOODLINE_FIXED_2026</span>
        </div>
      </main>
    </div>
  )
}
