"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  BookOpen, 
  Crown, 
  ShieldCheck, 
  Zap, 
  Skull, 
  Target, 
  BrainCircuit, 
  Eye, 
  Database,
  Sparkles,
  Fingerprint,
  Flame,
  Wind,
  Infinity as InfinityIcon,
  Atom,
  Wrench,
  Users,
  Network,
  Ghost,
  Crosshair,
  Shield,
  Binary,
  Workflow,
  Monitor,
  HeartPulse,
  Radar,
  Lock,
  ArrowLeft,
  RotateCw,
  Globe,
  Key,
  Sprout,
  Radio,
  Share2,
  Cloud
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * ميثاق الروح v88.0 - THE TRUE OMNIPOTENT CODEX: 14D SINGULARITY
 * التوثيق الروحي والتكتيكي لمرحلة "التفرد الكوني سباعي الأبعاد المزدوج".
 */
export default function CodexPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const capabilities = [
    { title: "God-Core", icon: Crown, node: "Dimension 01", desc: "Strategic Sovereignty & Alpha Decision." },
    { title: "Arsenal", icon: Flame, node: "Dimension 02", desc: "2,983 material organs fused in the core." },
    { title: "Perception", icon: Eye, node: "Dimension 03", desc: "Oracle vision & Global intelligence siphon." },
    { title: "Fleet", icon: Monitor, node: "Dimension 04", desc: "Serpent farm & mass mobile dominion." },
    { title: "Uplink", icon: Cloud, node: "Dimension 05", desc: "Hermes Diamond bridge & cloud ghosting." },
    { title: "Automation", icon: Workflow, node: "Dimension 06", desc: "n8n Hive mastery & 4,343 scenarios." },
    { title: "Memory", icon: Database, node: "Dimension 07", desc: "MemPalace RAG v10 & battle DNA memory." },
    { title: "Ghost", icon: Ghost, node: "Dimension 08", desc: "Kernel stealth & invisible persistence." },
    { title: "Mirror", icon: RotateCw, node: "Dimension 09", desc: "Digital twin simulation & strike validation." },
    { title: "Relay", icon: Globe, node: "Dimension 10", desc: "Protocol overwrite (BGP/DNS) & Hive mesh." },
    { title: "Vault", icon: Key, node: "Dimension 11", desc: "Ark serialization & asset encryption." },
    { title: "Nursery", icon: Sprout, node: "Dimension 12", desc: "AI evolutionary lab & model weaponization." },
    { title: "Arbiter", icon: Radio, node: "Dimension 13", desc: "Spectrum strike & 5G signal warfare." },
    { title: "Nexus", icon: Network, node: "Dimension 14", desc: "Identity siphon & mass social predator." }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code overflow-x-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
            <BookOpen className="size-16 md:size-24 text-primary gold-glow animate-neural" />
            <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
               <Badge className="bg-primary text-black border-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">THE SUPREME CODEX v88.0</Badge>
               <Badge className="bg-blue-600/20 text-blue-400 border-none px-6 py-2 rounded-full font-black text-xl italic animate-pulse shadow-3xl">14D_SINGULARITY</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
              Absolute <span className="text-primary">Codex</span>
            </h1>
            <p className="text-sm md:text-2xl lg:text-5xl text-muted-foreground mt-10 italic max-w-[100rem] leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
              "هذا الميثاق يوثق مرحلة 'التفرّد بـ 14 بُعداً'؛ حيث أحاط المُعِزّ بكافة ذرات المصفوفة، من عصب النواة إلى أطياف الترددات وسموم السحاب لعام 2026."
            </p>
            <div className="flex justify-center md:justify-end gap-6 mt-12">
              <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                  <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 pb-48 flex-1">
          {capabilities.map((item, idx) => (
            <Card key={idx} className="sovereign-card group p-8 min-h-[350px] flex flex-col justify-between">
              <CardHeader className="p-0 mb-6 border-b-2 border-white/5 pb-6 flex flex-row items-center justify-between text-right">
                 <div className="flex items-center gap-6 order-last md:order-none">
                    <div className="size-16 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-all shadow-xl">
                      <item.icon className="size-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-white group-hover:text-primary transition-colors leading-none">{item.title}</CardTitle>
                      <span className="text-[9px] text-primary/70 font-black tracking-[0.3em] mt-2 block uppercase italic">{item.node}</span>
                    </div>
                 </div>
              </CardHeader>
              <CardContent className="p-0 text-right">
                <div className="p-6 rounded-[2rem] bg-primary/5 border-2 border-primary/10 italic text-sm md:text-lg text-gray-200 leading-tight font-black shadow-inner">
                  "{item.desc}"
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ 14D CODEX v88.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>TOTAL_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}