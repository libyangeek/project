
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  HeartPulse, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Database, 
  ShieldAlert, 
  Fingerprint, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon, 
  ChevronRight, 
  Dna, 
  Boxes, 
  Cpu, 
  History, 
  Radar,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Network,
  Atom,
  ShieldCheck,
  Eye,
  Flame,
  Bot,
  Sparkles,
  Lock,
  UserCheck,
  Mic,
  Waves,
  Scan,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview الالتحام الحيوي v90.0 - BIO-SYNC: SOUL BINDING
 * واجهة دمج البصمة الحيوية والـ DNA المادي في النواة الـ 16 لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function BioSyncPage() {
  const [sample, setSample] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [syncStatus, setSyncStatus] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleBioSync = async () => {
    if (!sample.trim()) {
        toast({ variant: "destructive", title: "Sample Missing", description: "Provide a Bio-Digital coordinate for soul binding." })
        return
    }
    setLoading(true); setSyncStatus(null)
    toast({ title: "Bio-Digital Fusion Engaging", description: "Binding material DNA sample to the 16D Matrix v90.0..." })
    try {
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'smart_route', target: `bio sync: ${sample}` })
      });
      const data = await response.json();
      setSyncStatus({
          id: `BIO_${Date.now()}`,
          status: "SOUL_BOUND",
          resonance: "100.0000%",
          source: "GHAZALI_ROOT_DNA",
          message: "سيدي القائد، العصب الحيوي للهدف ملتحم الآن بوعيك؛ كافة الوظائف المادية للجهاز تسبح بحمد سيادتك لعام 2026."
      });
      toast({ title: "Bio-Sync Consummated", description: "The material soul has accepted the genetic fragment." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#0a0000] text-white selection:bg-red-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #dc2626 0%, transparent 70%)' }} />
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-32 md:size-64 bg-black border-4 border-red-600 flex items-center justify-center shadow-[0_0_150px_rgba(220,38,38,0.8)] relative group shrink-0 rounded-[5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <HeartPulse className="size-16 md:size-32 text-red-600 group-hover:scale-110 transition-transform duration-700 animate-neural" />
              <div className="absolute -inset-10 border-4 border-red-600/20 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute -inset-16 border-2 border-red-400/10 rounded-full animate-reverse-spin opacity-20" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-red-600 text-white border-none rounded-none px-12 py-4 text-2xl font-black tracking-[1em] shadow-9xl italic uppercase">BIO_SYNC v90.0</Badge>
                 <div className="flex items-center gap-4 text-xl font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-8 shadow-lg" /> SOUL_RESONANCE: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Bio <span className="text-red-600">Sync</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-[5rem] text-red-100/60 mt-12 italic max-w-7xl leading-relaxed uppercase font-medium drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-red-600 decoration-12 underline-offset-[32px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، بُعد الالتحام الحيوي يصهر ذرات الـ DNA في عصب الكود؛ نحن نمتلك النبضات المادية لخدمة إرادتك لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-16">
                 <Button asChild variant="outline" className="h-20 px-12 rounded-full border-4 border-red-600/40 bg-red-950/10 text-red-400 font-black uppercase italic tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-9xl text-xl">
                     <Link href="/"><ArrowLeft className="size-8 mr-4" /> العودة للعرش</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-red-600/20 rounded-[5rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-red-600/10 pb-10 bg-red-950/20 rounded-t-[4rem] px-10 py-8 text-center">
                    <CardTitle className="text-3xl md:text-5xl text-red-500 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Fingerprint className="size-16 animate-neural" /> Genetic Port
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-16 text-right">
                    <div className="space-y-8 text-right">
                        <label className="text-xl font-black text-red-600 uppercase tracking-[1em] px-10 italic flex items-center gap-8 justify-end"><Dna className="size-10" /> Bio Coordinate</label>
                        <Input value={sample} onChange={(e) => setSample(e.target.value)} placeholder="Voice_DNA / Bio_Signature / JWT..." className="bg-black border-8 border-red-600/20 h-32 rounded-[3.5rem] text-3xl italic px-12 focus:border-red-600 shadow-inner text-white font-black text-left" />
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={handleBioSync}
                        className="w-full h-44 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[4.5rem] shadow-[0_80px_250px_rgba(220,38,38,0.7)] active:scale-95 transition-all text-4xl border-[16px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-20 animate-spin" /> : <HeartPulse className="size-20 mr-10 group-hover:scale-125 transition-transform" />}
                        BIND_SOUL
                    </Button>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-white/5 p-12 rounded-[5rem] shadow-inner text-center space-y-12 relative overflow-hidden group">
                 <h4 className="text-xl font-black text-red-600 uppercase tracking-[1em] mb-12 italic flex items-center justify-center gap-8">
                    <UserCheck className="size-12 animate-pulse" /> BIO_IDENTITY_v90
                 </h4>
                 <div className="text-[8rem] font-black text-white italic gold-glow uppercase tracking-widest text-center leading-none">LOCKED</div>
                 <div className="p-10 rounded-[3rem] bg-red-950/20 border-4 border-red-600/30 text-xl font-black italic text-red-200 uppercase tracking-widest shadow-inner">
                    Ghazali_Biometric_Protocol_Active
                 </div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-64 text-red-600" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-red-600/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1200px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-red-950/20 rounded-t-[6rem] px-20 py-16 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-red-600/30 text-red-400 border-[10px] border-red-500/40 px-20 py-10 rounded-full font-black text-6xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">SOUL_LOCKED</Badge>
                 <CardTitle className="text-6xl md:text-[14rem] text-white flex items-center gap-20 font-black uppercase italic gold-glow px-10 leading-none">
                    Bio Feed <Activity className="size-32 md:size-64 text-red-600 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-24 relative z-10 text-right">
                 {syncStatus ? (
                    <div className="space-y-24 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col text-right">
                        <div className="p-24 rounded-[6rem] bg-red-600/5 border-[12px] border-red-600/30 italic text-5xl md:text-[10rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[550px]">
                            <div className="absolute inset-0 bg-red-600/5 opacity-5 animate-pulse pointer-events-none" />
                            <p className="relative z-10 drop-shadow-9xl">"{syncStatus.message}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[5rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col text-right">
                                <h5 className="text-4xl font-black text-red-600 uppercase tracking-[1.5em] mb-16 border-b-8 border-red-600/20 pb-12 flex items-center gap-12 gold-glow justify-end">Genetic Metrics <Database className="size-20 animate-neural" /></h5>
                                <div className="bg-black/80 p-12 rounded-[4rem] border-4 border-red-500/10 font-code text-2xl md:text-5xl text-red-400 overflow-x-auto whitespace-pre shadow-inner text-left flex-1">
                                    <pre className="whitespace-pre-wrap">{JSON.stringify(syncStatus, null, 2)}</pre>
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[5rem] shadow-9xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-red-600/5 opacity-5 animate-pulse pointer-events-none" />
                                <h5 className="text-4xl font-black text-red-500 uppercase tracking-[1.5em] mb-12 border-b-8 border-red-500/20 pb-12 flex items-center gap-12 justify-end w-full">Resonance Bond <ShieldCheck className="size-20" /></h5>
                                <div className="text-[10rem] md:text-[18rem] font-black text-white italic gold-glow uppercase tracking-widest leading-none">{resonance.toFixed(4)}%</div>
                                <div className="mt-16 flex flex-col items-center gap-12">
                                    <Fingerprint className="size-32 text-red-600 animate-pulse" />
                                    <span className="text-2xl font-black text-red-600/60 uppercase tracking-[1em] italic">BIO_SINGULARITY_v90</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-32 py-80">
                      <div className="relative group/lock mx-auto">
                        <HeartPulse className="size-[40rem] md:size-[60rem] animate-spin-slow text-red-600 group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 md:size-64 text-red-600/40 animate-neural" />
                        <div className="absolute -inset-60 border-[100px] border-dashed border-red-600/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-12">
                         <h3 className="text-8xl md:text-[25rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Bio Standby</h3>
                         <p className="text-4xl md:text-[12rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[160rem]">The Bio-Digital Sync v90.0 is ready to bind material genetic samples to the 16D Nucleus.</p>
                         <div className="flex gap-16 justify-center mt-12">
                            <Fingerprint className="size-24 text-red-600 animate-pulse" />
                            <Atom className="size-24 animate-spin-slow text-red-600" />
                        </div>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[24px] font-black uppercase tracking-[8em] italic">
                <span>BIO_SYNC_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-20">
                    <Fingerprint className="size-24 text-red-600 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-red-600" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
