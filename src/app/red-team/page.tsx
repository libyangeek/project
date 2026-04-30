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
  Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

export default function RedTeamPage() {
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

  const handleGenerate = async () => {
    if (!vulnerability || !targetDetails) {
      toast({ title: "Input Required", description: "Please fill in both vulnerability and target details." })
      return
    }

    setLoading(true)
    try {
      const data = await aiEnhancedExploitGeneration({
        vulnerabilityDescription: vulnerability,
        targetSystemDetails: targetDetails
      })
      setResult(data)
      toast({ title: "Generation Success", description: "Proof-of-concept exploit ready." })
    } catch (err) {
      toast({ title: "Error", description: "Failed to generate exploit code." })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({ title: "Copied", description: "Exploit code copied to clipboard." })
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Red Team Engagement</h2>
            <p className="text-muted-foreground">AI-enhanced offensive operations and automated exploit delivery.</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">Module 0xF4-Exploit</Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ShieldAlert className="size-5 text-primary" />
                  Vulnerability Analysis
                </CardTitle>
                <CardDescription>Input reconnaissance data to generate PoC</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold text-muted-foreground">Vulnerability Description</Label>
                  <Textarea 
                    placeholder="e.g., Unauthenticated RCE in Apache Struts..."
                    className="bg-black/40 border-white/5 min-h-[120px] focus:ring-primary/20"
                    value={vulnerability}
                    onChange={(e) => setVulnerability(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold text-muted-foreground">Target Environment</Label>
                  <Input 
                    placeholder="Ubuntu 22.04, Python 3.10..."
                    className="bg-black/40 border-white/5 focus:ring-primary/20"
                    value={targetDetails}
                    onChange={(e) => setTargetDetails(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <RefreshCcw className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2" />}
                  Generate AI Exploit
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card bg-emerald-500/5 border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white text-base">C2 Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground">Active Sessions</span>
                  <Badge className="bg-emerald-500">3 Online</Badge>
                </div>
                <div className="space-y-2">
                  {[
                    { ip: "45.12.8.23", os: "Windows 11", status: "beaconing" },
                    { ip: "192.168.1.104", os: "Linux kernel 5.15", status: "shell_active" }
                  ].map((s, i) => (
                    <div key={i} className="bg-black/30 p-2 rounded-lg flex justify-between items-center text-[10px] font-code">
                      <span className="text-emerald-500">{s.ip}</span>
                      <span className="text-muted-foreground">{s.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {result ? (
              <Tabs defaultValue="exploit" className="w-full">
                <TabsList className="bg-white/5 w-full justify-start p-1 rounded-xl mb-6 border border-white/5">
                  <TabsTrigger value="exploit" className="flex-1 rounded-lg">Exploit Code</TabsTrigger>
                  <TabsTrigger value="instructions" className="flex-1 rounded-lg">Usage Manual</TabsTrigger>
                </TabsList>
                
                <TabsContent value="exploit" className="animate-in fade-in duration-300">
                  <Card className="glass-card border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-primary/20">
                          <Code2 className="size-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">Payload: {result.exploitLanguage}</CardTitle>
                          <CardDescription className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">Validated AI-Generated Code</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="size-8" onClick={() => copyToClipboard(result.exploitCode)}>
                          <Copy className="size-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="size-8">
                          <Download className="size-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-black/60 p-6 rounded-xl font-code text-sm text-primary overflow-x-auto border border-white/5 leading-relaxed">
                        <code>{result.exploitCode}</code>
                      </pre>
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-[11px] text-red-500/80 font-medium italic">
                          <ShieldAlert className="size-3 inline mr-1" />
                          {result.disclaimer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructions" className="animate-in fade-in duration-300">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Deployment Guide</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-6 bg-black/40 rounded-xl border border-white/5 font-code text-sm text-muted-foreground whitespace-pre-wrap leading-loose">
                        {result.usageInstructions}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="h-[500px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12">
                <div className="size-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="size-10 text-muted-foreground/30" />
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-2">Awaiting Intelligence</h3>
                <p className="text-muted-foreground max-w-sm">Provide vulnerability and target details to initialize the Al-Mu'izz exploit generation engine.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}