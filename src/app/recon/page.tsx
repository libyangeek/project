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
  Video
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
      toast({ title: "Social Identity Siphoned" })
    } catch (err) {
      toast({ variant: "destructive", title: "Operation Failed" })
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
      toast({ variant: "destructive", title: "Scan Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent)] min-h-screen">
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(255,191,36,0.4)] rounded-xl">Intelligence Node v42.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-primary" /> Exclusive to Al-Ghazali
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(212,175,55,0.6)] uppercase">Omniscient Recon</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="kali-card border-primary/30 rounded-[4rem] p-6 shadow-2xl border-2 group overflow-hidden">
              <CardHeader className="p-10 border-b border-white/5">
                <CardTitle className="text-white text-base flex items-center gap-6 uppercase tracking-[0.5em] italic font-bold">
                  <Crosshair className="size-8 text-primary" /> Target Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-12">
                <Tabs defaultValue="osint" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-black/80 border-2 border-primary/20 w-full h-16 p-2 rounded-[2rem] shadow-inner">
                    <TabsTrigger value="osint" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-500">OSINT</TabsTrigger>
                    <TabsTrigger value="vuln" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-500">Scan</TabsTrigger>
                  </TabsList>

                  <div className="mt-12 space-y-10">
                    <Input 
                      placeholder={activeTab === 'osint' ? "Enter @username..." : "Enter target URL..."}
                      className="bg-black/90 border-2 border-primary/20 h-16 text-sm rounded-[2rem] focus:border-primary/60 italic px-8 text-white"
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                    />
                    <Button 
                      className="w-full bg-primary text-black hover:bg-primary/80 h-24 rounded-[2.5rem] shadow-3xl font-bold uppercase tracking-[0.6em] text-[12px] group"
                      disabled={loading}
                      onClick={activeTab === 'osint' ? handleOsint : handleVulnScan}
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <Zap className="size-8 mr-6" />}
                      Start Intel
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {osintResults || vulnResults ? (
               <Card className="kali-card border-primary/40 rounded-[5rem] border-2 shadow-2xl p-16">
                  <pre className="text-primary font-code bg-black/80 p-8 rounded-2xl overflow-auto max-h-[600px]">
                    {JSON.stringify(osintResults || vulnResults, null, 2)}
                  </pre>
               </Card>
             ) : (
               <div className="h-full min-h-[600px] border-4 border-dashed border-primary/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24">
                  <Search className="size-40 text-primary/20 mb-10" />
                  <h3 className="text-6xl font-headline font-bold text-white mb-6 uppercase">Ready for Recon</h3>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}
