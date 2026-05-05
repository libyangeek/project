"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap,
  Loader2,
  Skull,
  Flame,
  Fingerprint,
  Sword,
  Shield,
  Brain,
  Terminal,
  Target,
  FileCode,
  Share2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = async () => {
    if (!target) {
      toast({ variant: "destructive", title: "Missing Target", description: "Please enter a target." });
      return;
    }
    setLoading(true);
    try {
      let data;
      if (activeMode === "exploit") {
        data = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: description,
          targetSystemDetails: target
        });
      } else if (activeMode === "osint") {
        const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ target, type: 'apex' })
        });
        data = await response.json();
      } else if (activeMode === "wordlist") {
        data = await generateSmartWordlist({
          targetBio: description,
          complexityLevel: 'Extreme'
        });
      }
      setOutput(data);
      toast({ title: "Operation Complete", description: "Data successfully generated." });
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Failed to execute request." });
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-black overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-red-600 text-white border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">CYBER WEAPONRY</Badge>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Flame className="size-4 animate-pulse" /> FORGE ACTIVE
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase">Red <span className="text-red-600">Team</span></h1>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
          <div className="xl:col-span-1 space-y-6">
            <Card className="kali-card border-red-600/40 bg-black/60 p-6 rounded-[3rem] border-2">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="grid grid-cols-3 gap-2 bg-white/5 p-1 rounded-2xl mb-6">
                  <TabsTrigger value="exploit" className="text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600">Exploit</TabsTrigger>
                  <TabsTrigger value="osint" className="text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600">Apex</TabsTrigger>
                  <TabsTrigger value="wordlist" className="text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600">Wordlist</TabsTrigger>
                </TabsList>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-bold text-red-500/60 ml-4">Target Node</Label>
                    <Input 
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      placeholder="IP / Domain / User"
                      className="bg-black border-white/10 rounded-2xl h-14 italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-bold text-red-500/60 ml-4">Directives / Intel</Label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter details for generation..."
                      className="bg-black border-white/10 rounded-2xl min-h-[150px] italic"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-2xl shadow-lg"
                  >
                    {loading ? <Loader2 className="size-6 animate-spin" /> : <Zap className="size-6 mr-2" />}
                    Initialize Strike
                  </Button>
                </div>
              </Tabs>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-6 rounded-[3rem] border-2">
              <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-4">Weaponry Status</h4>
              <div className="space-y-4">
                {[
                  { name: "Apex Brain", status: "ONLINE", icon: Brain },
                  { name: "Polymorph", status: "READY", icon: Share2 },
                  { name: "Bypass Kit", status: "ARMED", icon: Shield }
                ].map((w, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <w.icon className="size-4 text-red-500" />
                      <span className="text-xs font-bold text-white">{w.name}</span>
                    </div>
                    <span className="text-[10px] text-emerald-500 font-bold">{w.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-white/10 bg-black/90 rounded-[4rem] border-2 shadow-3xl h-full flex flex-col">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row justify-between items-center">
                <CardTitle className="text-3xl font-bold uppercase italic tracking-tighter text-white flex items-center gap-4">
                  <Terminal className="size-8 text-red-500" /> Output Terminal
                </CardTitle>
                <div className="flex gap-2">
                   <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                   <div className="size-3 rounded-full bg-yellow-500 animate-pulse delay-75" />
                   <div className="size-3 rounded-full bg-green-500 animate-pulse delay-150" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative">
                <ScrollArea className="h-full max-h-[600px] p-8">
                   {output ? (
                     <div className="space-y-6 font-mono text-sm">
                        <div className="text-emerald-500 mb-4 font-bold border-b border-emerald-500/20 pb-2">>>> EXECUTION RESULTS:</div>
                        <pre className="text-gray-300 whitespace-pre-wrap break-all leading-relaxed">
                          {JSON.stringify(output, null, 2)}
                        </pre>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-32">
                        <FileCode className="size-20 mb-4" />
                        <p className="text-xl font-bold uppercase tracking-widest">Awaiting Command...</p>
                     </div>
                   )}
                </ScrollArea>
                <div className="absolute bottom-4 right-8 opacity-40">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-500">MUIZZ_OS_V42</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}