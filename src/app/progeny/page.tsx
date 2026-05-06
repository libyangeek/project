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
 * @fileOverview مصنع النسل المقاتل v50.0 - WARRIOR FORGE: SOUL EDITION
 * وحدة تخليق الذكاءات التابعة المدمجة في عصب الروح.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 2026
 */
export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([95])
  const [intelligence, setIntelligence] = React.useState([99])
  
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
      setDoc(progenyRef, {
        ...result,
        createdAt: serverTimestamp(),
        userId: user.uid,
        version: "v50.0"
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code overflow-x-hidden scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
            <div className="flex items-center gap-6 mb-4">
                <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic rounded-full">WARRIOR FORGE v50.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-[0_0_30px_emerald]" /> GENETIC_SOUL: BOUND
                </div>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Forge</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، وحدة تخليق النسل (v50.0) تمنحك القدرة على صناعة ذكاءات تابعة تكون امتداداً لروحك السيادية؛ فتاكون، مطيعون، وخالدون."
            </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40">
            <div className="space-y-12">
                <Card className="kali-card border-primary/40 bg-black/80 p-10 rounded-[5rem] border-8 shadow-9xl group overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                        <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                            <Dna className="size-14 animate-neural" /> Incubation Matrix
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-12">
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4"><Skull className="size-5" /> Warrior ID</label>
                            <Input 
                                value={warriorName}
                                onChange={(e) => setWarriorName(e.target.value)}
                                placeholder="Designate Warrior..." 
                                className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                            />
                        </div>
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.6em] px-8 italic flex items-center gap-4"><Crosshair className="size-5" /> Specialization</label>
                            <Input 
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                placeholder="Combat Domain..." 
                                className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                            />
                        </div>
                        
                        <div className="space-y-10 px-8">
                            <div className="flex justify-between items-center">
                                <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic">Aggression</label>
                                <span className="text-5xl font-black text-primary gold-glow">{aggression[0]}%</span>
                            </div>
                            <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-10" />
                        </div>

                        <div className="space-y-10 px-8">
                            <div className="flex justify-between items-center">
                                <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic">Intelligence</label>
                                <span className="text-5xl font-black text-primary gold-glow">{intelligence[0]}%</span>
                            </div>
                            <Slider value={intelligence} onValueChange={setIntelligence} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-10" />
                        </div>

                        <Button 
                            disabled={loading}
                            onClick={handleSpawn}
                            className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-8 border-black/30 group italic mt-12"
                        >
                            {loading ? <Loader2 className="size-16 animate-spin" /> : <Plus className="size-16 mr-6 group-hover:rotate-90 transition-transform gold-glow" />}
                            IGNITE BIRTH
                        </Button>
                    </CardContent>
                </Card>

                <Card className="kali-card border-white/10 bg-black/60 p-10 rounded-[4rem] border-4 shadow-inner text-center relative overflow-hidden">
                   <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-6">
                      <Binary className="size-8 animate-pulse" /> NEURAL_WOMB_ACTIVE
                   </h4>
                   <p className="text-muted-foreground italic text-xl leading-relaxed uppercase font-bold">
                      "Incubation pods 1-15 reporting zero genetic drift. Soul Core alignment verified."
                   </p>
                   <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] scale-150"><Skull className="size-24 text-primary" /></div>
                </Card>
            </div>

            <div className="xl:col-span-2 space-y-12">
                <div className="flex items-center justify-between px-10">
                   <h3 className="text-5xl md:text-8xl font-black uppercase tracking-[0.4em] text-white italic border-l-[20px] border-primary pl-12 gold-glow leading-none">The Bloodline</h3>
                   <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 text-4xl font-black px-12 py-4 rounded-full italic animate-pulse shadow-3xl">ACTIVE_SONS: {progenyList?.length || 0}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {loadingProgeny ? (
                        <div className="col-span-full py-60 flex flex-col items-center justify-center gap-12">
                            <Loader2 className="size-48 animate-spin text-primary opacity-20" />
                            <span className="text-4xl font-black text-primary/40 uppercase tracking-[2em] italic">Synthesizing Lineage...</span>
                        </div>
                    ) : (
                        progenyList?.map((warrior) => (
                            <Card key={warrior.id} className="kali-card border-white/10 bg-black/80 rounded-[6rem] p-16 border-8 shadow-9xl relative group hover:border-primary transition-all duration-1000 overflow-hidden flex flex-col">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
                                <div className="absolute top-10 right-10 flex gap-6 z-20">
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(warrior.id)} className="size-20 rounded-[2rem] text-white/10 hover:text-red-500 hover:bg-red-500/10 transition-all border-4 border-transparent hover:border-red-500/40">
                                        <Trash2 className="size-12" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-12 mb-12 relative z-10">
                                    <div className="size-32 rounded-[3.5rem] bg-primary/10 border-8 border-primary/40 flex items-center justify-center shadow-7xl group-hover:bg-primary transition-all duration-1000 animate-neural">
                                        <Fingerprint className="size-16 text-primary group-hover:text-black transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-white uppercase text-5xl md:text-7xl leading-none italic tracking-tighter gold-glow group-hover:text-primary transition-colors truncate">{warrior.warriorProfile.name}</h4>
                                        <div className="flex items-center gap-6 mt-6">
                                            <Badge className="bg-primary/20 text-primary border-4 border-primary/40 px-8 py-2 rounded-full font-black uppercase text-[12px] italic tracking-widest">{warrior.warriorProfile.codename}</Badge>
                                            <span className="text-[12px] text-muted-foreground uppercase font-black tracking-[0.4em] italic opacity-50">v50.0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 rounded-[4rem] bg-black/60 border-4 border-white/5 text-3xl text-gray-300 leading-relaxed italic font-bold mb-12 flex-1 shadow-inner group-hover:text-white transition-colors selection:bg-primary selection:text-black">
                                    "{warrior.warriorProfile.combatPhilosophy}"
                                </div>
                                <div className="flex flex-wrap gap-4 relative z-10">
                                    {warrior.warriorProfile.strengths.slice(0, 5).map((s: string, idx: number) => (
                                        <Badge key={idx} className="bg-black border-4 border-white/10 text-white text-[12px] font-black italic px-8 py-3 rounded-full uppercase tracking-widest hover:border-primary transition-all shadow-4xl">{s}</Badge>
                                    ))}
                                </div>
                                <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.02] pointer-events-none group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-1000 scale-150">
                                   <Skull className="size-96 text-primary" />
                                </div>
                            </Card>
                        ))
                    )}
                    
                    {!loadingProgeny && progenyList?.length === 0 && (
                        <div className="col-span-full h-[800px] border-8 border-dashed border-primary/20 rounded-[12rem] flex flex-col items-center justify-center text-center p-20 opacity-20 group hover:opacity-40 transition-opacity bg-black/40">
                           <div className="relative mb-16">
                              <Baby className="size-80 animate-bounce text-primary/10" />
                              <div className="absolute -inset-10 border-4 border-primary/10 rounded-full animate-spin-slow" />
                           </div>
                           <h3 className="text-8xl font-black uppercase tracking-[1em] text-white italic drop-shadow-9xl">Chamber Empty</h3>
                           <p className="text-4xl mt-10 italic font-black text-primary/40 uppercase tracking-widest leading-relaxed">
                              "سيدي القائد، العش السيادي بانتظار نيتك لتخليق أول محارب خمسيني."
                           </p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ WARRIOR FORGE v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>BLOODLINE_ETERNAL_2026</span>
        </div>
      </main>
    </div>
  )
}
