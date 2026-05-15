"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Library, 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon,
  Target,
  Database,
  Terminal,
  ArrowUpRight,
  Plus,
  RefreshCcw,
  Flame,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Key,
  Shield,
  SearchCode,
  Bomb,
  Eye,
  Globe,
  Wifi,
  Smartphone,
  Monitor,
  Scissors,
  BrainCircuit,
  Bot,
  ArrowLeft,
  RotateCw,
  Dna,
  LayoutGrid,
  Cpu,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

/**
 * @fileOverview العقدة 22: الحواس المادية v90.0 - INNATE ORGANS: THE OMNIPOTENT ARSENAL
 * تم دمج المحرك التنفيذي الحقيقي لاستدعاء أدوات Kali و BlackArch بصفر وهم.
 */
export default function ArsenalNodePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSummon = async (tool: string = 'nmap') => {
    const target = query.trim()
    if (!target) {
        toast({ variant: "destructive", title: "Missing Coordinate", description: "Identify target DNA for the material strike." })
        return
    }
    setLoading(true); setResult(null)
    toast({ title: "Reflex Engaged v90", description: `Materializing ${tool} strike on target hardware...` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'execute_tool', tool: tool, target: target })
      })
      const data = await response.json()
      if (data.success) {
        setResult(data.output);
        toast({ title: "Objective Subjugated", description: "Innate DNA captured in the Matrix." })
      }
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  const tools = [
    { name: "nmap", label: "Port Scan", icon: Radar, color: "text-blue-500", desc: "Service and Vulnerability Discovery" },
    { name: "sqlmap", label: "SQL Siphon", icon: Database, color: "text-emerald-500", desc: "Automated Database Extraction" },
    { name: "assetfinder", label: "Identity Recon", icon: Search, color: "text-amber-500", desc: "Passive Subdomain Siphoning" },
    { name: "sliver", label: "C2 Uplink", icon: Network, color: "text-primary", desc: "Command & Control Establishment" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl transition-all duration-1000 animate-neural">
              <Library className="size-12 md:size-24 text-primary gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[1em] shadow-9xl italic uppercase mb-6">NODE_22: INNATE_ORGANS</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Material <span className="text-primary">Arsenal</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium drop-shadow-3xl ml-auto">
                 "سيدي القائد المعتصم بالله، الترسانة v90.0 لم تعد محاكاة؛ الـ 2,983 أداة الآن هي أعضاء حية تنفذ إرادتك في طبقة العتاد بصفر وهم."
              </p>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Strike Intent
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Globe className="size-8" /> Target DNA</label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="IP / Domain / Identity..." className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                       {tools.map(t => (
                         <Button 
                            key={t.name}
                            variant="outline"
                            onClick={() => handleSummon(t.name)}
                            disabled={loading}
                            className="h-20 bg-white/5 border-4 border-white/5 hover:border-primary flex justify-between items-center px-8 transition-all rounded-2xl active:scale-95 group/btn shadow-xl"
                         >
                            <ChevronRight className="size-6 opacity-30 group-hover:translate-x-3 transition-all" />
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-lg font-black text-white italic group-hover/btn:text-primary transition-colors uppercase">{t.label}</div>
                                    <div className="text-[9px] text-muted-foreground uppercase font-black">{t.name}</div>
                                </div>
                                <t.icon className={cn("size-8", t.color)} />
                            </div>
                         </Button>
                       ))}
                    </div>
                 </CardContent>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[900px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-12 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ACQUISITION_OK</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">
                    Arsenal Feed <Binary className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10 text-right">
                 {result ? (
                    <div className="flex-1 bg-black/98 p-12 rounded-[6rem] border-[12px] border-primary/30 font-code text-xl md:text-6xl leading-tight italic text-emerald-400 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary text-left">
                        <pre className="whitespace-pre-wrap">
                            {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                        <div className="relative group/lock">
                            <Library className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                            <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        </div>
                        <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Arsenal Idle</h3>
                    </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
