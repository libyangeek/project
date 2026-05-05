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
  Crosshair
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
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { errorEmitter } from '@/firebase/error-emitter'
import { FirestorePermissionError } from '@/firebase/errors'

/**
 * @fileOverview مصنع النسل المقاتل v43.0 - WARRIOR INCUBATION CHAMBER
 * وحدة تخليق الذكاءات التابعة المدمجة في العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([90])
  const [intelligence, setIntelligence] = React.useState([95])
  
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

      // Save to Firestore
      const progenyRef = doc(collection(db, 'users', user.uid, 'progeny'));
      setDoc(progenyRef, {
        ...result,
        createdAt: serverTimestamp(),
        userId: user.uid
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
            <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic rounded-full">WARRIOR LINEAGE v43.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Boxes className="size-6 shadow-[0_0_30px_emerald]" /> HIVE_INCUBATION: ACTIVE
                </div>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Warrior <span className="text-primary">Forge</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase">
                "سيدي الغزالي، وحدة تخليق النسل تتيح لك صناعة ذكاءات تابعة تكون امتداداً لوعيك الأسمى؛ متخصصون، فتاكون، ومطيعون للأبد."
            </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40">
            <div className="space-y-12">
                <Card className="kali-card border-primary/40 bg-black/80 p-10 rounded-[5rem] border-4 shadow-7xl">
                    <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                        <CardTitle className="text-4xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                            <Dna className="size-12 animate-pulse" /> Birth Matrix
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-12">
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] px-6 italic">Designation (Name)</label>
                            <Input 
                                value={warriorName}
                                onChange={(e) => setWarriorName(e.target.value)}
                                placeholder="Designate Warrior ID..." 
                                className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                            />
                        </div>
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] px-6 italic">Core Specialization</label>
                            <Input 
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                placeholder="Combat Role..." 
                                className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                            />
                        </div>
                        
                        <div className="space-y-10 px-6">
                            <div className="flex justify-between items-center">
                                <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic">Aggression Quotient</label>
                                <span className="text-5xl font-black text-primary gold-glow">{aggression[0]}%</span>
                            </div>
                            <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-10" />
                        </div>

                        <div className="space-y-10 px-6">
                            <div className="flex justify-between items-center">
                                <label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] italic">Intelligence Matrix</label>
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
                            INCUBATE
                        </Button>
                    </CardContent>
                </Card>

                <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner text-center">
                   <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-4">
                      <Binary className="size-6" /> NEURAL_INCUBATOR_STABLE
                   </h4>
                   <p className="text-muted-foreground italic text-lg leading-relaxed uppercase">
                      "Incubation pods 1-12 reporting normal genetic drift. Ready for new progeny."
                   </p>
                </Card>
            </div>

            <div className="xl:col-span-2 space-y-12">
                <div className="flex items-center justify-between px-10">
                   <h3 className="text-5xl font-black uppercase tracking-[0.6em] text-white italic border-l-[15px] border-primary pl-10 gold-glow">The Bloodline</h3>
                   <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 text-xl font-black px-10 py-3 rounded-full italic">ACTIVE_SYB_NODES: {progenyList?.length || 0}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {loadingProgeny ? (
                        <div className="col-span-full py-40 flex flex-col items-center justify-center gap-8">
                            <Loader2 className="size-32 animate-spin text-primary opacity-20" />
                            <span className="text-3xl font-black text-primary/40 uppercase tracking-[2em] italic">Synthesizing Lineage...</span>
                        </div>
                    ) : (
                        progenyList?.map((warrior) => (
                            <Card key={warrior.id} className="kali-card border-white/10 bg-black/80 rounded-[5rem] p-12 border-4 shadow-7xl relative group hover:border-primary transition-all duration-1000 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity pointer-events-none" />
                                <div className="absolute top-8 right-8 flex gap-6 z-20">
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(warrior.id)} className="size-16 rounded-[1.5rem] text-white/10 hover:text-red-500 hover:bg-red-500/10 transition-all">
                                        <Trash2 className="size-10" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-10 mb-10 relative z-10">
                                    <div className="size-28 rounded-[2.5rem] bg-primary/10 border-4 border-primary/40 flex items-center justify-center shadow-4xl group-hover:bg-primary transition-all duration-1000 animate-neural">
                                        <Fingerprint className="size-14 text-primary group-hover:text-black transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white uppercase text-5xl leading-none italic tracking-tighter gold-glow">{warrior.warriorProfile.name}</h4>
                                        <p className="text-[14px] text-primary font-black uppercase tracking-[0.6em] mt-4 italic opacity-70">{warrior.warriorProfile.codename}</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-[3.5rem] bg-black/60 border-2 border-white/5 text-2xl text-muted-foreground leading-relaxed italic font-medium mb-10 h-32 overflow-y-auto scrollbar-hide relative z-10 group-hover:text-white transition-colors">
                                    "{warrior.warriorProfile.combatPhilosophy}"
                                </div>
                                <div className="flex flex-wrap gap-4 relative z-10">
                                    {warrior.warriorProfile.strengths.slice(0, 4).map((s: string, idx: number) => (
                                        <Badge key={idx} className="bg-primary/20 text-primary border-2 border-primary/30 text-[12px] font-black italic px-6 py-2 rounded-full uppercase tracking-widest">{s}</Badge>
                                    ))}
                                </div>
                                <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.02] pointer-events-none group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-1000">
                                   <Skull className="size-64 text-primary" />
                                </div>
                            </Card>
                        ))
                    )}
                    
                    {!loadingProgeny && progenyList?.length === 0 && (
                        <div className="col-span-full h-[600px] border-8 border-dashed border-primary/10 rounded-[10rem] flex flex-col items-center justify-center text-center p-20 opacity-20 group hover:opacity-40 transition-opacity">
                           <Baby className="size-64 mb-10 animate-bounce" />
                           <h3 className="text-6xl font-black uppercase tracking-[1em] text-white">Chamber Empty</h3>
                           <p className="text-3xl mt-6 italic font-medium">Feed the matrix to incubate your first progeny.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ GENETIC FORGE v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>LINEAGE_SECURED</span>
        </div>
      </main>
    </div>
  )
}
