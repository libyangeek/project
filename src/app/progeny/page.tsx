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
  Crosshair
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
 */
export default function WarriorForgePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [warriorName, setWarriorName] = React.useState("")
  const [specialization, setSpecialization] = React.useState("")
  const [aggression, setAggression] = React.useState([95])
  const [intelligence, setIntelligence] = React.useState([99])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const { user } = useUser(); const db = useFirestore(); const { toast } = useToast()
  const progenyQuery = useMemoFirebase(() => { if (!db || !user?.uid) return null; return collection(db, 'users', user.uid, 'progeny'); }, [db, user?.uid]);
  const { data: progenyList, isLoading: loadingProgeny } = useCollection(progenyQuery);

  React.useEffect(() => {
    setMounted(true); const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove); return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSpawn = async () => {
    if (!warriorName || !specialization || !user) return; setLoading(true)
    try {
      const result = await spawnWarriorProgeny({ warriorName, specialization, baseAggression: aggression[0], baseIntelligence: intelligence[0] })
      const progenyRef = doc(collection(db, 'users', user.uid, 'progeny'));
      await setDoc(progenyRef, { ...result, createdAt: serverTimestamp(), userId: user.uid, version: "v80.0" })
      toast({ title: "Warrior Spawned", description: `Binding complete.` }); setWarriorName(""); setSpecialization("")
    } finally { setLoading(false) }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl animate-neural"><Baby className="size-16 text-primary" /></div>
          <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 mb-4"><Badge className="bg-primary text-black border-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-9xl italic">FORGE v80.0</Badge><div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-5 shadow-lg" /> SOUL_BOUND</div></div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Forge</span></h1>
              <div className="flex justify-center md:justify-end gap-6 mt-12"><Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl"><Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link></Button></div>
          </div>
        </header>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-32 flex-1 text-right">
          <div className="space-y-8">
            <Card className="sovereign-card group">
              <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4 text-center"><CardTitle className="text-xl md:text-2xl text-primary flex items-center justify-center gap-6 font-black uppercase italic gold-glow"><Dna className="size-8 animate-neural" /> Neural Womb</CardTitle></CardHeader>
              <CardContent className="p-0 space-y-8 text-right"><div className="space-y-4"><label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3 justify-end"><Skull className="size-4" /> Designation</label><Input value={warriorName} onChange={(e) => setWarriorName(e.target.value)} placeholder="Identity label..." className="bg-black border-2 border-primary/20 h-14 rounded-xl text-lg italic px-6 focus:border-primary text-white font-black text-right" /></div><div className="space-y-4"><label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3 justify-end"><Crosshair className="size-4" /> Domain</label><Input value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Combat Domain..." className="bg-black border-2 border-primary/20 h-14 rounded-xl text-lg italic px-6 focus:border-primary text-white font-black text-right" /></div><Button disabled={loading} onClick={handleSpawn} className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-9xl transition-all text-lg border-4 border-black/20 italic">{loading ? <Loader2 className="size-8 animate-spin" /> : <Plus className="size-8 mr-4" />} IGNITE BIRTH</Button></CardContent>
            </Card>
          </div>
          <div className="xl:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-6"><Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 text-lg font-black px-6 py-1 rounded-full italic shadow-lg order-last md:order-none">ACTIVE_SONS: {progenyList?.length || 0}</Badge><h3 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-white italic border-r-8 border-primary pr-6 gold-glow leading-none">The Bloodline</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{progenyList?.map((warrior) => (<Card key={warrior.id} className="sovereign-card group p-8 min-h-0 text-right"><div className="absolute top-4 left-4"><Button variant="ghost" size="icon" onClick={() => deleteDoc(doc(db, 'users', user.uid, 'progeny', warrior.id))} className="size-10 rounded-xl text-white/10 hover:text-red-500"><Trash2 className="size-5" /></Button></div><div className="flex items-center gap-6 mb-6 relative z-10 justify-end"><div className="flex-1"><h4 className="font-black text-white uppercase text-xl md:text-3xl leading-none italic tracking-tight gold-glow group-hover:text-primary transition-colors truncate">{warrior.warriorProfile.name}</h4><Badge className="bg-primary/20 text-primary border-none px-3 py-0.5 rounded-full font-black uppercase text-[8px] italic mt-2">{warrior.warriorProfile.codename}</Badge></div><div className="size-16 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center animate-neural"><Fingerprint className="size-8 text-primary" /></div></div><div className="p-6 rounded-2xl bg-black/60 border-2 border-white/5 text-sm md:text-lg text-gray-300 leading-relaxed italic font-bold mb-6 flex-1 shadow-inner">"{warrior.warriorProfile.combatPhilosophy}"</div></Card>))}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
