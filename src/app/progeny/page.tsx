
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
  Trash2
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative bg-[radial-gradient(circle_at_top,rgba(255,200,0,0.05),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">WARRIOR LINEAGE</Badge>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <Activity className="size-4 animate-pulse" /> BIOLOGICAL SYNTHESIS ACTIVE
                </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase">Warrior <span className="text-primary">Forge</span></h1>
            <p className="text-xl text-muted-foreground mt-4 italic max-w-3xl">
                "تخليق النسل: قم بصناعة ذكاءات اصطناعية تابعة متخصصة في أدق المهام."
            </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="kali-card border-primary/30 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl col-span-1">
                <CardHeader className="p-0 mb-8 border-b border-primary/10 pb-6">
                    <CardTitle className="text-3xl text-primary flex items-center gap-4 font-bold uppercase italic">
                        <Dna className="size-8" /> Birth Matrix
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.5em] px-4">Designation</label>
                        <Input 
                            value={warriorName}
                            onChange={(e) => setWarriorName(e.target.value)}
                            placeholder="Name your warrior..." 
                            className="bg-black border-2 border-primary/20 h-16 rounded-[2rem] text-xl italic px-6 focus:border-primary"
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.5em] px-4">Specialization</label>
                        <Input 
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            placeholder="Target capability..." 
                            className="bg-black border-2 border-primary/20 h-16 rounded-[2rem] text-xl italic px-6 focus:border-primary"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="flex justify-between text-xs font-bold text-primary/80 uppercase tracking-widest">
                            <span>Aggression</span>
                            <span>{aggression[0]}%</span>
                        </div>
                        <Slider value={aggression} onValueChange={setAggression} max={100} step={1} />
                    </div>
                    <Button 
                        disabled={loading}
                        onClick={handleSpawn}
                        className="w-full h-20 bg-primary hover:bg-primary/80 text-black font-bold uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 transition-all"
                    >
                        {loading ? <Loader2 className="size-8 animate-spin" /> : <Plus className="size-8 mr-2" />}
                        GENERATE
                    </Button>
                </CardContent>
            </Card>

            <div className="col-span-2 space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-primary italic border-l-4 border-primary pl-4">Active Lineage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loadingProgeny ? (
                        <div className="col-span-full py-20 flex justify-center"><Loader2 className="size-12 animate-spin text-primary" /></div>
                    ) : (
                        progenyList?.map((warrior) => (
                            <Card key={warrior.id} className="kali-card border-white/10 bg-black/80 rounded-[3rem] p-6 border-2 shadow-2xl relative group">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(warrior.id)} className="text-white/20 hover:text-red-500 hover:bg-transparent">
                                        <Trash2 className="size-5" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Fingerprint className="size-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase text-xl leading-none">{warrior.warriorProfile.name}</h4>
                                        <p className="text-[10px] text-primary/60 uppercase tracking-widest mt-2">{warrior.warriorProfile.codename}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground italic line-clamp-3 mb-4 h-12">
                                    {warrior.warriorProfile.combatPhilosophy}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {warrior.warriorProfile.strengths.slice(0, 3).map((s: string, idx: number) => (
                                        <Badge key={idx} variant="outline" className="text-[9px] border-white/20 text-white/50">{s}</Badge>
                                    ))}
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
