
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
 * مركز الاجتياح المعلوماتي للعقل الجمعي. تم تحسين الخطوط والعرض.
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

  React.useEffect(() => {
    setMounted(true)
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
      toast({ title: "Intelligence Siphoned" })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" })
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
      toast({ title: "Deep Eye Pulse Completed" })
    } catch (err) {
      toast({ variant: "destructive", title: "Scan Interrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-2 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[1.5rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Radar className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-6 py-1.5 text-[14px] font-black tracking-[0.4em] shadow-md italic">HIVE_RECON v43.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Eye className="size-4 shadow-lg" /> VISION: ARMED
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Collective <span className="text-primary">Recon</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، محرك الاستطلاع يعمل الآن بنمط <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">Search Grounding</span>؛ كل معلومة في المصفوفة هي ملك لعينك التي لا تنام."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-24 flex-1">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-8 border-2 shadow-xl overflow-hidden group">
              <CardHeader className="p-0 mb-6 border-b border-primary/10 pb-6">
                <CardTitle className="text-2xl text-primary flex items-center gap-4 font-black uppercase italic gold-glow">
                  <Crosshair className="size-8 text-primary group-hover:rotate-45 transition-transform duration-1000" /> Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-16 p-1.5 rounded-[1.5rem] shadow-inner mb-8">
                    <TabsTrigger value="osint" className="flex-1 text-[11px] uppercase font-black rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[11px] uppercase font-black rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">SURFACE</TabsTrigger>
                  </TabsList>

                  <div className="mt-8 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic flex items-center gap-3">
                            <Target className="size-4" /> Coordinate
                        </label>
                        <Input 
                            placeholder={activeTab === 'osint' ? " @username / phone / email..." : " https://target-grid.com..."}
                            className="w-full h-16 bg-black border-2 border-white/10 rounded-[1.5rem] text-xl font-code text-primary focus:border-primary shadow-lg px-8 italic"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (activeTab === 'osint' ? handleOsint() : handleVulnScan())}
                        />
                    </div>

                    <Button 
                      className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 transition-all text-lg italic border-4 border-black/30 group"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-4" /> : <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                      START SIPHON
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {(osintResults || vulnResults) ? (
               <Card className="kali-card border-primary/40 bg-black/99 rounded-[3rem] p-10 border-4 shadow-2xl flex flex-col group relative overflow-hidden h-full">
                  <CardHeader className="p-0 mb-8 border-b border-white/5 pb-8 bg-primary/5 rounded-t-[2.5rem]">
                    <div className="flex items-center justify-between px-6 py-6">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-lg animate-neural">
                                <Scan className="size-8 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-3xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.4em] mt-2 italic text-[11px]">Collective Recon Pulse // v43.0</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-2 border-emerald-500/40 px-6 py-2 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic">DATA_SIPHONED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8 flex-1 relative overflow-hidden">
                    <div className="bg-black/90 p-8 rounded-[2rem] font-code text-lg md:text-xl leading-[1.8] h-[600px] overflow-y-auto border-2 border-white/5 scrollbar-hide shadow-inner italic text-gray-100 whitespace-pre-wrap selection:bg-primary selection:text-black">
                       {osintResults && (
                         <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-1000">
                            <pre className="text-gray-100 font-bold whitespace-pre-wrap italic">
                                {JSON.stringify(osintResults, null, 2)}
                            </pre>
                         </div>
                       )}
                       {vulnResults && (
                         <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-1000">
                            <pre className="text-gray-100 font-bold whitespace-pre-wrap italic">
                                {JSON.stringify(vulnResults, null, 2)}
                            </pre>
                         </div>
                       )}
                    </div>
                  </CardContent>
                  <div className="p-6 border-t border-white/5 mt-6 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[1em] italic">
                    <span>HIVE_MEMORY_v43_AL_GHAZALI_ROOT</span>
                    <Fingerprint className="size-6 text-primary animate-pulse" />
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[700px] border-4 border-dashed border-primary/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                  <div className="relative mb-16 group-hover:scale-110 transition-transform duration-1000">
                      <Radar className="size-48 text-primary/10 animate-pulse" />
                      <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                  <h3 className="text-5xl md:text-[6rem] font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl uppercase leading-none">Ready for Recon</h3>
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 text-2xl md:text-4xl font-black italic">
                    "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Al-Ghazali</span>, the Recon engine is saturated. Define the coordinate."
                  </p>
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[12px] font-black uppercase tracking-[2em] italic text-white drop-shadow-xl pb-6">
            <span>AL-MUIZZ RECON CENTER v43.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse" />
            <span>VISION_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
