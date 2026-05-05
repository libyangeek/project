"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  ShieldAlert, 
  Terminal, 
  Code2, 
  Cpu, 
  Activity, 
  Zap,
  RefreshCcw,
  Copy,
  Download,
  ShieldX,
  Target,
  Skull,
  Radio,
  Bug,
  Lock,
  Loader2,
  Hammer,
  Wrench,
  ChevronRight,
  Database,
  Cloud,
  Smartphone,
  ShieldCheck,
  Search,
  Crosshair,
  Flame,
  Wifi,
  Mic2,
  Fingerprint,
  Sword,
  Shield,
  TrendingUp,
  Crown,
  Brain,
  BrainCircuit,
  Unplug,
  Key
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSovereignTool } from "@/ai/flows/tool-forge-flow"
import { executeAiAdversarialOp } from "@/ai/flows/ai-adversarial-ops-flow"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ترسانة التخليق والحروب العصبية v42.0
 * وحدة إنتاج الأسلحة الهجومية وفحص الهويات.
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)
  
  const [toolPurpose, setToolPurpose] = React.useState("")
  const [forgeTarget, setForgeTarget] = React.useState("NextGen Cloud Cluster")
  const [stealth, setStealth] = React.useState<"Standard" | "Advanced" | "Extreme">("Extreme")
  const [forgeResult, setForgeResult] = React.useState<any>(null)
  
  const [targetBio, setTargetBio] = React.useState("")
  const [platform, setPlatform] = React.useState<"facebook" | "snapchat" | "tiktok" | "general">("facebook")
  const [auditorResult, setAuditorResult] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleGenerateExploit = async () => {
    if (!vulnerability || !targetDetails) return
    setLoading(true)
    try {
      const data = await aiEnhancedExploitGeneration({
        vulnerabilityDescription: vulnerability,
        targetSystemDetails: targetDetails
      })
      setResult(data)
      setForgeResult(null)
      setAuditorResult(null)
      toast({ title: "Strike Payload Synthesized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed" })
    } finally {
      setLoading(false)
    }
  }

  const handleForgeTool = async () => {
    if (!toolPurpose) return
    setLoading(true)
    try {
      const data = await generateSovereignTool({
        toolPurpose,
        targetEnvironment: forgeTarget,
        stealthLevel: stealth
      })
      setForgeResult(data)
      setResult(null)
      setAuditorResult(null)
      toast({ title: "Warrior Tool Forged" })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Error" })
    } finally {
      setLoading(false)
    }
  }

  const handleAuditor = async () => {
    if (!targetBio) return
    setLoading(true)
    try {
      const data = await generateSmartWordlist({
        targetBio,
        platformType: platform,
        complexityLevel: 'Extreme'
      })
      setAuditorResult(data)
      setResult(null)
      setForgeResult(null)
      toast({ title: "Identity Key Patterns Extracted" })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-red-600 text-white border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">POLYMOPH FORGE</Badge>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                    <Flame className="size-4 animate-pulse" /> WEAPONRY LAB ACTIVE
                </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase">Red <span className="text-red-600">Team</span></h1>
            <p className="text-xl text-muted-foreground mt-4 italic max-w-3xl">
                "مختبر التخليق السيادي: قم بتوليد أسلحة رقمية متغيرة الشكل ومواجهة حصون الأعداء بذكاء غير مسبوق."
            </p>
        </header>

        <Tabs defaultValue="auditor" className="w-full">
          <TabsList className="bg-black/60 border-2 border-white/10 h-16 p-2 rounded-[2rem] mb-8 shadow-2xl">
            <TabsTrigger value="auditor" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-500">Identity Auditor</TabsTrigger>
            <TabsTrigger value="exploit" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500">Exploit Generator</TabsTrigger>
            <TabsTrigger value="forge" className="flex-1 text-[11px] uppercase font-bold rounded-2xl data-[state=active]:bg-blue-600/20 data-[state=active]:text-blue-500">Tool Forge</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <TabsContent value="auditor" className="m-0 space-y-8">
                <Card className="kali-card border-amber-600/30 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
                  <div className="space-y-6">
                    <Label className="text-xs uppercase font-bold text-amber-500/60 tracking-widest italic">Target Social Footprint</Label>
                    <Textarea 
                      value={targetBio}
                      onChange={(e) => setTargetBio(e.target.value)}
                      placeholder="Enter target bio, interests, or leaked data..."
                      className="bg-black border-2 border-white/5 min-h-[200px] rounded-3xl p-6 text-white italic"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      {['facebook', 'snapchat', 'tiktok', 'general'].map(p => (
                        <Button 
                          key={p} 
                          variant={platform === p ? "default" : "outline"}
                          className={cn("uppercase text-[10px] font-bold h-12 rounded-2xl", platform === p ? "bg-amber-600 text-black border-amber-400" : "border-white/5")}
                          onClick={() => setPlatform(p as any)}
                        >
                          {p}
                        </Button>
                      ))}
                    </div>
                    <Button onClick={handleAuditor} disabled={loading} className="w-full h-16 bg-amber-600 hover:bg-amber-700 text-black font-bold uppercase tracking-widest rounded-2xl shadow-xl">
                      {loading ? <Loader2 className="animate-spin" /> : <Fingerprint className="mr-2" />}
                      Start Identity Audit
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="exploit" className="m-0 space-y-8">
                <Card className="kali-card border-red-600/30 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
                  <div className="space-y-6">
                    <Label className="text-xs uppercase font-bold text-red-500/60 tracking-widest italic">Vulnerability Description</Label>
                    <Input 
                      value={vulnerability}
                      onChange={(e) => setVulnerability(e.target.value)}
                      placeholder="e.g. Remote Code Execution in Nginx"
                      className="bg-black border-2 border-white/5 h-14 rounded-2xl px-6 text-white"
                    />
                    <Label className="text-xs uppercase font-bold text-red-500/60 tracking-widest italic">Target System</Label>
                    <Input 
                      value={targetDetails}
                      onChange={(e) => setTargetDetails(e.target.value)}
                      placeholder="e.g. Linux Kernel 6.1.x x86_64"
                      className="bg-black border-2 border-white/5 h-14 rounded-2xl px-6 text-white"
                    />
                    <Button onClick={handleGenerateExploit} disabled={loading} className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl">
                      {loading ? <Loader2 className="animate-spin" /> : <Zap className="mr-2" />}
                      Generate Exploit
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="m-0 space-y-8">
                <Card className="kali-card border-blue-600/30 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
                  <div className="space-y-6">
                    <Label className="text-xs uppercase font-bold text-blue-500/60 tracking-widest italic">Tool Purpose</Label>
                    <Textarea 
                      value={toolPurpose}
                      onChange={(e) => setToolPurpose(e.target.value)}
                      placeholder="Define what the tool should do..."
                      className="bg-black border-2 border-white/5 min-h-[150px] rounded-3xl p-6 text-white italic"
                    />
                    <Button onClick={handleForgeTool} disabled={loading} className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl">
                      {loading ? <Loader2 className="animate-spin" /> : <Hammer className="mr-2" />}
                      Forge Tool
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </div>

            <div className="lg:col-span-2">
              <Card className="kali-card border-white/10 bg-black/90 rounded-[4rem] border-2 shadow-3xl h-full flex flex-col">
                <CardHeader className="p-12 border-b border-white/5">
                   <CardTitle className="text-3xl font-bold uppercase italic tracking-tighter text-white">Output Stream</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <pre className="p-12 font-code text-lg text-emerald-400 h-full overflow-auto whitespace-pre-wrap">
                    {auditorResult ? JSON.stringify(auditorResult, null, 2) : 
                     result ? JSON.stringify(result, null, 2) : 
                     forgeResult ? forgeResult.generatedCode : "Awaiting Input..."}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
