"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  MapPin, 
  ShieldAlert,
  Loader2,
  Database,
  ExternalLink
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { toast } from "@/hooks/use-toast"

export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [searchType, setSearchType] = React.useState<'phone' | 'email' | 'domain' | 'social'>('domain')

  const handleSearch = async () => {
    if (!target.trim()) return
    setLoading(true)
    try {
      const data = await osintMaster({ target, type: searchType })
      setResults(data)
      toast({ title: "Recon Complete", description: "Intelligence gathering finished." })
    } catch (err) {
      toast({ title: "Operation Failed", description: "Could not retrieve intel for this target." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-black/50">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Cyber Recon Hub</h2>
            <p className="text-muted-foreground">Sovereign OSINT engine for target reconnaissance and data mapping.</p>
          </div>
          <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">Mode: Deep Recon</Badge>
        </header>

        <div className="flex gap-4 mb-8">
          <Tabs defaultValue="domain" onValueChange={(v) => setSearchType(v as any)} className="w-full">
            <div className="flex items-center gap-4 mb-4">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="domain" className="flex gap-2"><Globe className="size-4"/> Domain</TabsTrigger>
                <TabsTrigger value="email" className="flex gap-2"><Mail className="size-4"/> Email</TabsTrigger>
                <TabsTrigger value="phone" className="flex gap-2"><Phone className="size-4"/> Phone</TabsTrigger>
                <TabsTrigger value="social" className="flex gap-2"><User className="size-4"/> Social</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="relative group flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder={`Enter target ${searchType} (e.g., example.com)...`}
                  className="bg-card/40 border-white/10 pl-12 h-14 rounded-2xl text-lg"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-14 px-8 bg-primary rounded-2xl shadow-xl"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-5 animate-spin" /> : "Execute Recon"}
              </Button>
            </div>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {results ? (
            <>
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Database className="size-5 text-primary" />
                      Intelligence Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-6 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {results.summary}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Extracted Data Points</h4>
                      {results.findings.map((f: any, i: number) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/30 transition-all">
                          <div className={cn(
                            "size-10 rounded-lg flex items-center justify-center shrink-0",
                            f.riskLevel === 'Critical' ? "bg-red-500/10 text-red-500" :
                            f.riskLevel === 'High' ? "bg-orange-500/10 text-orange-500" : "bg-emerald-500/10 text-emerald-500"
                          )}>
                            <ShieldAlert className="size-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-xs font-bold text-primary uppercase tracking-tighter">{f.source}</span>
                              <Badge variant="outline" className="text-[9px] uppercase">{f.riskLevel}</Badge>
                            </div>
                            <p className="text-sm text-white font-code">{f.data}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Next Step Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {results.nextSteps.map((step: string, i: number) => (
                      <div key={i} className="flex gap-3 text-sm text-muted-foreground group cursor-pointer hover:text-white transition-colors">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                          {i + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-white/5">
                      Download Full Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <div className="lg:col-span-3 h-[500px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12">
              <div className="size-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Globe className="size-10 text-muted-foreground/30" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Neural Intel Passive</h3>
              <p className="text-muted-foreground max-w-sm">Enter a target above to initiate the Al-Mu'izz OSINT suite and map the digital footprint.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
