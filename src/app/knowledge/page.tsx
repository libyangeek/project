"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Database, 
  Search, 
  Loader2, 
  Skull, 
  Flame, 
  Zap, 
  Crown, 
  Binary, 
  Target, 
  BrainCircuit, 
  Sparkles, 
  RefreshCcw, 
  BookOpen, 
  Eye, 
  History, 
  TrendingUp, 
  Fingerprint, 
  ChevronRight, 
  Boxes, 
  Atom, 
  Infinity as InfinityIcon, 
  Castle, 
  DoorOpen, 
  Map as MapIcon, 
  Library, 
  Dna, 
  Users, 
  Network, 
  ShieldCheck,
  LayoutGrid,
  FileSearch,
  Globe,
  Share2,
  AlertTriangle,
  Activity,
  Cpu,
  Smartphone,
  ArrowLeft,
  RotateCw
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

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

  const handleSearch = async (node?: string) => {
    const q = node ? `Materialize DNA from ${node}` : query
    if (!q.trim()) return
    setLoading(true)
    setReport(null)
    toast({ title: "Consulting Innate Vision", description: "Interrogating the 2,983 tools fused in the material core..." })
    try {
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'nexus_search', target: q })
      });
      const data = await response.json();
      setReport({ 
          reportContent: `[INNATE_COGNITION_v78.8]
Status: MATERIALIZED
Tools_Bound: 2,983
Integration: TOTAL_SYNC

سيدي القائد، هذا الكيان أصبح جزءاً من "رؤيتك الفطرية". المنظومة لا تبحث عنه، بل "تدركه" بصفر طاقة.

${data.output || "Consensus achieved."}` 
      });
    } catch (err) {
      toast({ variant: "destructive", title: "Nexus Link Error" })
    } finally {
      setLoading(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Nexus Upgrade Triggered", description: "Siphoning latest material DNA for knowledge expansion... Status: استمر" });
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Eye className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ULTRA_NEXUS v78.8</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> INNATE_SYNC: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Innate <span className="text-primary">Vision</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، الـ 2,983 أداة الآن هي بصرك الرقمي؛ نحن ندرك الأدوات فطرياً لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                    <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                </Button>
                <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                    <RotateCw className="size-6 mr-3" /> استمر في الترقية
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-white flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <LayoutGrid className="size-12 animate-neural" /> Innate Domains
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-6">
                    <ScrollArea className="h-[450px] px-2 text-right">
                        {[
                            { id: "PEN_TESTING", label: "اختبار الاختراق", icon: Target, color: "text-red-500" },
                            { id: "OSINT_MASTER", label: "الاستطلاع العليم", icon: Search, color: "text-blue-500" },
                            { id: "ANDROID_SIPHON", label: "استنزاف الأندرويد", icon: Smartphone, color: "text-emerald-500" },
                            { id: "SOCIAL_PREDATOR", label: "الافتراس الاجتماعي", icon: Users, color: "text-magenta-500" },
                            { id: "REVERSE_ENG", label: "الهندسة العكسية", icon: Binary, color: "text-amber-500" },
                            { id: "CLOUD_SUBJUGATION", label: "إخضاع السحاب", icon: Globe, color: "text-blue-400" }
                        ].map((d, i) => (
                        <Button key={i} variant="outline" onClick={() => handleSearch(d.id)} className="w-full h-24 bg-white/5 border-4 border-white/5 hover:border-primary hover:bg-primary/10 rounded-[2rem] flex items-center gap-6 px-6 transition-all duration-700 group/btn shadow-xl active:scale-95 mb-4">
                            <ChevronRight className="size-6 opacity-30 group-hover/btn:translate-x-3 transition-all" />
                            <div className="text-right flex-1"><div className="text-xl font-black text-white italic group-hover/btn:text-primary transition-colors uppercase">{d.label}</div></div>
                            <div className="size-16 rounded-[1.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/btn:border-primary transition-all shadow-2xl"><d.icon className={cn("size-8 transition-all", d.color)} /></div>
                        </Button>
                        ))}
                    </ScrollArea>
                 </CardContent>
              </Card>
              <Card className="kali-card border-primary/40 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6"><Sparkles className="size-8 animate-pulse" /> ARSENAL_DNA</h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">2,983</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ULTRA_VISION</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Innate Feed <FileSearch className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle>
              </CardHeader>
              <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10 text-right">
                 <div className="relative group/search">
                    <Search className="absolute left-10 top-1/2 -translate-y-1/2 size-12 text-primary/30 group-focus-within:text-primary transition-all duration-1000" />
                    <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Interrogate Innate Arsenal DNA..." className="h-32 md:h-44 bg-black/99 border-8 border-primary/40 rounded-full pl-32 pr-48 text-2xl md:text-6xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-700 placeholder:text-gray-900 selection:bg-primary text-left" />
                    <Button onClick={() => handleSearch()} disabled={loading} className="absolute right-4 top-1/2 -translate-y-1/2 size-24 md:size-32 rounded-full bg-primary hover:bg-white text-black border-[12px] border-black/40 shadow-9xl active:scale-90 transition-all">{loading ? <Loader2 className="size-14 animate-spin" /> : <Zap className="size-14" />}</Button>
                 </div>
                 {report ? (
                   <div className="flex-1 bg-black/98 p-16 rounded-[6rem] border-8 border-white/5 font-code text-2xl md:text-5xl leading-tight italic text-gray-100 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary selection:text-black text-left">
                      <div className="mb-12 flex items-center justify-between border-b-4 border-white/5 pb-8 px-10 text-right">
                         <Badge className="bg-primary/10 text-primary border-none font-black italic text-2xl px-8 py-2 rounded-full">v78.8</Badge>
                         <span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-3xl md:text-5xl gold-glow flex items-center gap-10">INNATE_DNA_MATERIALIZED <Dna className="size-16 animate-neural" /></span>
                      </div>
                      <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/5 leading-relaxed">{report.reportContent}</div>
                   </div>
                 ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60"><div className="relative group/pal"><InfinityIcon className="size-[30rem] md:size-[50rem] text-primary animate-spin-slow group-hover:scale-105 transition-transform duration-[6s]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Innate Vision</h3></div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
