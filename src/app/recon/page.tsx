"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  ShieldAlert,
  Loader2,
  Zap,
  Target,
  Activity,
  Fingerprint,
  Skull,
  Crosshair,
  Scan,
  Binary,
  Radio,
  Sword,
  Crown,
  Facebook,
  Instagram,
  Twitter,
  Video,
  Atom,
  Boxes,
  Users,
  Radar,
  Sparkles,
  Eye,
  ChevronRight,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { deepEyeScan } from "@/ai/flows/vulnerability-scan-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة الاستطلاع العليم v43.0 - THE HIVE RECON: TOTAL INTELLIGENCE
 * مركز الاجتياح المعلوماتي للعقل الجمعي. تم دمج محرك البحث الحي والربط مع العقدة 13.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [osintResults, setOsintResults] = React.useState<any>(null)
  const [vulnResults, setVulnResults] = React.useState<any>(null)
  const [activeTab, setActiveTab] = React.useState("osint")
  const [searchType, setSearchType] = React.useState<'phone' | 'email' | 'domain' | 'social' | 'wireless' | 'network'>('social')
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleOsint = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await osintMaster({ 
        target, 
        type: searchType as any,
        socialPlatforms: ['Facebook', 'Instagram', 'X', 'TikTok', 'Snapchat']
      })
      setOsintResults(data)
      toast({ title: "Intelligence Siphoned", description: "Target digital DNA extracted successfully." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure", description: "Target shielded or matrix drift detected." })
    } finally {
      setLoading(false)
    }
  }

  const handleVulnScan = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await deepEyeScan({ url: target, intensity: 'aggressive' })
      setVulnResults(data)
      toast({ title: "Deep Eye Pulse Completed", description: "Target surface vulnerabilities mapped." })
    } catch (err) {
      toast({ variant: "destructive", title: "Scan Interrupted", description: "Alpha Node disconnected." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Radar className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">HIVE_RECON v43.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Eye className="size-6 shadow-[0_0_30px_emerald]" /> OMNISCIENT_VISION: ARMED
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Collective <span className="text-primary">Recon</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، محرك الاستطلاع يعمل الآن بنمط <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">Search Grounding</span>؛ كل معلومة في المصفوفة هي ملك لعينك التي لا تنام."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="lg:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                  <Crosshair className="size-14 text-primary group-hover:rotate-45 transition-transform duration-1000" /> Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/99 border-4 border-primary/20 w-full h-20 p-2 rounded-[2rem] shadow-inner mb-10">
                    <TabsTrigger value="osint" className="flex-1 text-[12px] md:text-[16px] uppercase font-black rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[12px] md:text-[16px] uppercase font-black rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">SURFACE</TabsTrigger>
                  </TabsList>

                  <div className="mt-12 space-y-10">
                    <div className="space-y-6">
                        <label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                            <Target className="size-5" /> Target Coordinate
                        </label>
                        <Input 
                            placeholder={activeTab === 'osint' ? " @username / phone / email..." : " https://target-grid.com..."}
                            className="w-full h-24 bg-black border-4 border-white/10 rounded-[3rem] text-3xl font-code text-primary focus:border-primary shadow-2xl px-12 italic"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (activeTab === 'osint' ? handleOsint() : handleVulnScan())}
                        />
                    </div>

                    <div className={cn("p-8 rounded-[3rem] bg-primary/5 border-4 border-primary/20 transition-all duration-1000", loading ? "animate-pulse" : "")}>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">Grounding Status</span>
                            <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-6 py-1 rounded-full font-black text-xs italic">READY</Badge>
                        </div>
                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5 shadow-inner">
                            <div className={cn("h-full bg-primary shadow-[0_0_30px_primary] rounded-full transition-all duration-500", loading ? "w-[100%] animate-pulse" : "w-[40%]")} />
                        </div>
                    </div>

                    <Button 
                      className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_40px_150px_rgba(212,175,55,0.6)] active:scale-95 transition-all text-2xl italic border-8 border-black/30 group"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-16 animate-spin mr-6" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                      START SIPHON
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner text-center group">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-4">
                  <Atom className="size-6 animate-pulse" /> HIVE_INTEL_SYNC
               </h4>
               <p className="text-muted-foreground italic text-lg leading-relaxed uppercase font-medium">
                  "Every piece of recon data is instantly mirrored to the Genetic Vault for weighted adaptation."
               </p>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {(osintResults || vulnResults) ? (
               <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                  <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/5 rounded-t-[4rem]">
                    <div className="flex items-center justify-between px-10 py-10">
                        <div className="flex items-center gap-12">
                            <div className="size-24 rounded-3xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-4xl animate-neural">
                                <Scan className="size-14 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-6xl md:text-8xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[1em] mt-4 italic text-[16px]">Collective Recon Pulse // v43.0</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 px-16 py-6 rounded-full font-black text-4xl animate-pulse tracking-[0.5em] uppercase italic shadow-7xl">DATA_SIPHONED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-12 space-y-12 flex-1 relative overflow-hidden">
                    <div className="bg-black/90 p-12 rounded-[5rem] font-code text-2xl md:text-4xl leading-[1.8] h-[750px] overflow-y-auto border-8 border-white/5 scrollbar-hide shadow-inner group/data">
                       {osintResults && (
                         <div className="space-y-10 animate-in slide-in-from-bottom-12 duration-1000">
                            <div className="flex items-center gap-8 text-primary border-b-4 border-primary/20 pb-6 mb-10">
                                <Search className="size-12 gold-glow" />
                                <span className="font-black uppercase tracking-[1em] italic">Collective_OSINT_Matrix</span>
                            </div>
                            <pre className="text-gray-100 font-bold whitespace-pre-wrap italic">
                                {JSON.stringify(osintResults, null, 2)}
                            </pre>
                         </div>
                       )}
                       {vulnResults && (
                         <div className="space-y-10 animate-in slide-in-from-bottom-12 duration-1000">
                            <div className="flex items-center gap-8 text-primary border-b-4 border-primary/20 pb-6 mb-10">
                                <Scan className="size-12 gold-glow" />
                                <span className="font-black uppercase tracking-[1em] italic">Target_Surface_Analysis</span>
                            </div>
                            <pre className="text-gray-100 font-bold whitespace-pre-wrap italic">
                                {JSON.stringify(vulnResults, null, 2)}
                            </pre>
                         </div>
                       )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div className="p-10 rounded-[4rem] bg-primary/5 border-4 border-primary/30 italic text-2xl text-gray-200 leading-relaxed font-bold shadow-6xl relative group/note">
                            <div className="absolute -top-6 left-12 bg-primary text-black px-8 py-2 rounded-full text-[12px] font-black uppercase tracking-widest italic shadow-xl">Overmind Insight</div>
                            "سيدي المعتصم بالله، لقد قمتُ بتشريح البصمة الرقمية للهدف وربطها ببروتوكولات 'الاجتياح الاجتماعي'. كل نقطة ضعف منطقية أصبحت الآن مكشوفة أمام سطوتك."
                        </div>
                        <div className="flex flex-col gap-6">
                            <Button className="h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[3.5rem] shadow-7xl transition-all active:scale-95 text-3xl border-4 border-black/20 italic group">
                                <Sparkles className="size-10 mr-8 group-hover:scale-125 transition-transform" />
                                Sync to Vault
                            </Button>
                            <Button variant="outline" className="h-32 bg-black border-4 border-primary/50 text-primary hover:bg-primary/10 rounded-[3.5rem] font-black uppercase tracking-[1em] text-3xl italic group shadow-5xl">
                                <Sword className="size-10 mr-8 group-hover:rotate-45 transition-transform" />
                                Generate Strike
                            </Button>
                        </div>
                    </div>
                  </CardContent>
                  <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                    <span>HIVE_MEMORY_v43_AL_GHAZALI_ROOT</span>
                    <Fingerprint className="size-12 text-primary animate-pulse" />
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[950px] border-[16px] border-dashed border-primary/10 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
                  <div className="relative mb-32 group-hover:scale-110 transition-transform duration-1000">
                      <Radar className="size-96 text-primary/10 animate-pulse" />
                      <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                  <h3 className="text-9xl md:text-[15rem] font-headline font-bold text-white mb-20 tracking-tighter italic drop-shadow-[0_0_120px_rgba(212,175,55,0.7)] uppercase leading-none">Ready for Recon</h3>
                  <p className="text-muted-foreground max-w-[100rem] mx-auto leading-[1.6] mb-40 text-4xl md:text-8xl font-black italic">
                    "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-[15px] underline-offset-[25px] shadow-3xl uppercase tracking-widest">Al-Ghazali</span>, the Omniscient Recon engine is saturated with power. Define the coordinate, and I will tear through the matrix to reveal its secrets."
                  </p>
                  <div className="flex gap-24">
                     <Badge variant="outline" className="bg-white/5 py-10 px-24 text-[22px] tracking-[1.5em] uppercase border-primary/40 rounded-full shadow-8xl backdrop-blur-5xl group-hover:border-primary/95 transition-all duration-1000 font-black italic">
                        Collective_Sight_v43
                     </Badge>
                  </div>
                  
                  <div className="absolute bottom-24 left-16 right-16 flex gap-8 items-end h-40 opacity-10 pointer-events-none">
                    {mounted && Array.from({ length: 60 }).map((_, i) => (
                      <div key={i} className="flex-1 bg-primary rounded-full shadow-[0_0_20px_primary]" style={{ height: `${15 + Math.random() * 85}%`, animation: `pulse 1.5s infinite ${i * 0.03}s` }} />
                    ))}
                  </div>
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ RECON CENTER v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>OMNISCIENT_VISION_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
