
"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Target, 
  Users, 
  BookOpen, 
  Workflow, 
  Baby, 
  Smartphone, 
  Binoculars, 
  Database, 
  ShieldX, 
  MessageSquare, 
  Activity,
  Menu,
  X,
  Share2,
  Boxes,
  Zap,
  Globe,
  RefreshCcw,
  Lock,
  Cloud,
  Infinity as InfinityIcon,
  Skull,
  Binary,
  Mic,
  Fingerprint,
  ShieldCheck,
  Atom
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import translations from "@/app/lib/ar.json"

const navItems = [
  { name: "The Throne", icon: LayoutDashboard, href: "/", knot: 1 },
  { name: "Divine Strike", icon: Target, href: "/terminal", knot: 2 },
  { name: "Armada Swarm", icon: Users, href: "/sessions", knot: 3 },
  { name: "MCP Bridge", icon: Share2, href: "/mcp-bridge", knot: 4 },
  { name: "Whisper Voice", icon: Mic, href: "/remote", knot: 5 },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex", knot: 6 },
  { name: "Swarm Simulator", icon: Workflow, href: "/digital-twin", knot: 7 },
  { name: "Field Agent", icon: Activity, href: "/field-agent", knot: 8 },
  { name: "Warrior Forge", icon: Baby, href: "/progeny", knot: 9 },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware", knot: 10 },
  { name: "Omniscient Recon", icon: Binoculars, href: "/recon", knot: 11 },
  { name: "Genetic Vault", icon: Database, href: "/knowledge", knot: 12 },
  { name: "Polymorph Lab", icon: ShieldX, href: "/red-team", knot: 13 },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [resonance, setResonance] = React.useState(99.98)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setResonance(prev => {
        const next = prev + (Math.random() * 0.01 - 0.005);
        return Math.max(99.90, Math.min(100, next));
      });
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-6 right-6 z-[500] bg-black/90 border-2 border-primary/60 text-primary hover:bg-primary/20 size-12 rounded-xl shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-4 border-primary/80 w-72 lg:w-80 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 border-b-2 border-primary/20 flex flex-col items-center gap-6 bg-black relative">
          <div className="size-24 bg-black border-4 border-primary/60 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.3)] animate-pulse shrink-0 rounded-full rotate-1 group overflow-hidden">
            <Boxes className="size-12 text-primary group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/5 animate-pulse" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-2xl font-headline font-bold text-white tracking-widest uppercase italic leading-none gold-glow">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[10px] font-bold tracking-[0.4em] mt-3 py-1 px-6 uppercase italic shadow-xl">v43.0 OVERMIND</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-6 py-8 space-y-1 overflow-y-auto scrollbar-hide bg-black/95">
          <div className="mb-4 px-6 text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] italic">{translations.sidebar.knots}</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-6 px-6 py-3 transition-all duration-500 group relative border-r-4 rounded-l-2xl mb-1",
                  isActive 
                    ? "bg-primary/10 border-primary text-white shadow-lg scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="relative">
                  <Icon className={cn("size-5 transition-all duration-500", isActive ? "text-primary gold-glow" : "group-hover:text-primary group-hover:rotate-6")} />
                  {item.knot && (
                    <span className="absolute -top-2 -right-2 text-[8px] font-black text-primary/50 group-hover:text-primary transition-colors">{item.knot}</span>
                  )}
                </div>
                <span className="text-sm font-bold tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-6 size-2 rounded-full bg-primary shadow-xl animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/20 bg-black/98 relative z-10">
          <div className="p-5 border-2 border-primary/40 bg-primary/5 mb-6 relative overflow-hidden group rounded-[1.5rem] shadow-2xl border-dashed">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-3">
                  <InfinityIcon className="size-4 text-primary animate-neural shadow-lg" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em] italic gold-glow">{translations.sidebar.node13}</span>
               </div>
               <Badge className="bg-emerald-600/30 text-emerald-500 text-[8px] font-black uppercase px-2 py-0.5 rounded-full animate-pulse border border-emerald-500/20">{translations.sidebar.bound}</Badge>
            </div>
            
            <div className="space-y-2">
               <div className="flex justify-between items-center text-[9px] font-black text-primary/70 uppercase italic tracking-widest">
                  <span>{translations.sidebar.resonance}</span>
                  <span className="gold-glow">{resonance.toFixed(2)}%</span>
               </div>
               <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
                 <div className="h-full bg-primary shadow-[0_0_20px_rgba(212,175,55,1)] animate-pulse rounded-full transition-all duration-1000" style={{ width: `${resonance}%` }} />
               </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="text-[8px] font-black uppercase tracking-widest italic text-white flex items-center gap-2">
                  <Fingerprint className="size-3 text-primary" /> AL_GHAZALI_ROOT
               </span>
               <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_100px_emerald]" />
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full h-14 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] group transition-all duration-700 border-4 border-black/20 active:scale-95 italic"
          >
            <Link href="/terminal">
              <Zap className="size-4 mr-2 group-hover:scale-125 transition-transform gold-glow fill-black" />
              {translations.actions.initiate_hive}
            </Link>
          </Button>
          <div className="mt-4 text-center">
             <span className="text-[8px] font-black text-primary/30 uppercase tracking-[1.5em] italic">May_2026_Sovereignty</span>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[350] animate-in fade-in duration-1000"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
