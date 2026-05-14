"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Baby, 
  Zap, 
  Skull, 
  Dna, 
  Crown, 
  Plus, 
  Loader2, 
  Fingerprint, 
  Trash2, 
  Binary, 
  Atom, 
  Boxes, 
  Infinity as InfinityIcon, 
  ArrowLeft, 
  RotateCw,
  Crosshair,
  Sparkles,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"
import { spawnWarriorProgeny } from "@/ai/flows/ai-spawn-warrior-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import Link from "next/link"

/**
 * @fileOverview مصنع النسل v80.0 - THE SUPREME FORGE: ULTRA v3.0
 * واجهة تخليق الذكاءات التابعة المدمجة في عصب الهرمية الأسمى لعام 2026.
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
    if (!warriorName || !specialization || !user) return;
    setLoading(true)
    try {
      const result = await spawnWarriorProgeny({
        warriorName,
        specialization,
        baseAggression: aggression[0],
        baseIntelligence: intelligence[0]
      })
      const progenyRef = doc(collection(db, 'users', user.uid, 'progeny'));
      await setDoc(progenyRef, { ...result, createdAt: serverTimestamp(), userId: user.uid, version: "v80.0" })
      toast({ title: "Warrior Son Spawned!", description: `Loyalty binding for ${result.warriorProfile.codename} complete.` })
      setWarriorName(""); setSpecialization("")
    } finally { setLoading(false) }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
             <Baby className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
             <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">FORGE_v80.0: ULTRA</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-6 shadow-lg" /> GENETIC_SOUL: BOUND</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Forge</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، وحدة تخليق النسل الهرمية تمنحك القدرة على صناعة ذكاءات تابعة لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Link href="/">
                    <Button variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                      <ArrowLeft className="size-6 mr-3" /> العودة
                    </Button>
                 </Link>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-48 flex-1 text-right">
          <div className="space-y-12">
            <Card className="sovereign-card group">
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                  <Dna className="size-12 animate-neural" /> Neural Womb
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12 text-right">
                <div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Skull className="size-8" /> Designation</label><Input value={warriorName} onChange={(e) => setWarriorName(e.target.value)} placeholder="Enter identity label..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2rem] text-xl md:text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black text-right" /></div>
                <div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Crosshair className="size-8" /> Domain</label><Input value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Combat Domain..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2rem] text-xl md:text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black text-right" /></div>
                <div className="space-y-10 px-8 text-right">
                    <div className="flex justify-between items-center"><label className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic">Aggression</label><span className="text-3xl font-black text-primary gold-glow">{aggression[0]}%</span></div>
                    <Slider value={aggression} onValueChange={setAggression} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-8" />
                    <div className="flex justify-between items-center mt-10"><label className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic">Intelligence</label><span className="text-3xl font-black text-primary gold-glow">{intelligence[0]}%</span></div>
                    <Slider value={intelligence} onValueChange={setIntelligence} max={100} step={1} className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_[role=slider]]:size-8" />
                </div>
                <Button disabled={loading} onClick={handleSpawn} className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-9xl transition-all text-3xl border-[12px] border-black/30 italic active:scale-95 group">{loading ? <Loader2 className="size-16 animate-spin" /> : <Plus className="size-16 mr-8 group-hover:rotate-180 transition-transform" />} IGNITE BIRTH</Button>
              </CardContent>
            </Card>
          </div>

          <div className="xl:col-span-2 space-y-12">
            <div className="flex items-center justify-between px-8">
               <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-4xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ACTIVE_SONS: {progenyList?.length || 0}</Badge>
               <h3 className="text-5xl md:text-[10rem] font-black uppercase tracking-[0.2em] text-white italic border-r-[24px] border-primary pr-12 gold-glow leading-none">The Bloodline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {loadingProgeny ? (
                    <div className="col-span-full py-60 flex flex-col items-center justify-center gap-12 opacity-30">
                        <Loader2 className="size-32 animate-spin text-primary" />
                        <span className="text-3xl font-black uppercase tracking-[1em] italic">Synthesizing Lineage...</span>
                    </div>
                ) : (
                    progenyList?.map((warrior) => (
                        <Card key={warrior.id} className="sovereign-card group p-12 min-h-[500px] text-right">
                            <div className="absolute top-8 left-8 z-20">
                                <Button variant="ghost" size="icon" onClick={() => deleteDoc(doc(db, 'users', user.uid, 'progeny', warrior.id))} className="size-16 rounded-2xl text-white/10 hover:text-red-500 hover:bg-red-500/10 transition-all">
                                    <Trash2 className="size-8" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-10 mb-10 relative z-10 justify-end">
                                <div className="text-right">
                                    <h4 className="font-black text-white uppercase text-3xl md:text-6xl leading-none italic tracking-tight gold-glow group-hover:text-primary transition-colors">{warrior.warriorProfile.name}</h4>
                                    <Badge className="bg-primary/20 text-primary border-none px-6 py-2 rounded-full font-black uppercase text-[12px] italic mt-6">{warrior.warriorProfile.codename}</Badge>
                                </div>
                                <div className="size-24 rounded-[2rem] bg-primary/10 border-4 border-primary/20 flex items-center justify-center shadow-3xl group-hover:bg-primary transition-all duration-700 animate-neural">
                                    <Fingerprint className="size-12 text-primary group-hover:text-black" />
                                </div>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-black/60 border-8 border-white/5 text-xl md:text-3xl text-gray-300 leading-relaxed italic font-bold mb-10 flex-1 shadow-inner group-hover:text-white transition-colors">
                                "{warrior.warriorProfile.combatPhilosophy}"
                            </div>
                            <div className="flex flex-wrap gap-4 relative z-10 justify-end">
                                {warrior.warriorProfile.strengths.slice(0, 3).map((s: string, idx: number) => (
                                    <Badge key={idx} className="bg-black border-4 border-white/10 text-white text-[12px] font-black italic px-8 py-3 rounded-full uppercase tracking-widest hover:border-primary transition-all">
                                      <Zap className="size-4 text-primary mr-3" /> {s}
                                    </Badge>
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
