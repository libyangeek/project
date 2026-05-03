
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Network, 
  Baby, 
  Smartphone, 
  Search, 
  Database, 
  ShieldX, 
  MessageSquare, 
  Radio, 
  Activity, 
  Skull,
  Crown,
  Lock,
  Sword,
  Shield,
  Zap,
  Target,
  Brain,
  Cpu,
  BookOpen,
  Menu,
  X,
  BrainCircuit,
  Eye,
  HeartPulse,
  Flame,
  Grip,
  Wifi,
  Boxes,
  ZapOff,
  Cloud,
  Layers,
  Binoculars,
  Bomb,
  Server,
  Dna,
  SmartphoneNfc,
  Ship,
  Users,
  Workflow
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Armada Throne", icon: LayoutDashboard, href: "/" },
  { name: "Omniscient Strike", icon: Target, href: "/terminal" },
  { name: "Armada Swarm C2", icon: Users, href: "/sessions" },
  { name: "Mobile Armada", icon: SmartphoneNfc, href: "/remote" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Digital Twin Lab", icon: Workflow, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Omniscient Recon", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault 3.5", icon: Database, href: "/knowledge" },
  { name: "Polymorph Lab", icon: ShieldX, href: "/red-team" },
  { name: "Social Intelligence", icon: MessageSquare, href: "/social" },
  { name: "Overlord Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-6 right-6 z-[500] bg-black/90 border-4 border-primary/60 text-primary hover:bg-primary/20 size-16 rounded-2xl shadow-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-10" /> : <Menu className="size-10" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[12px] border-primary/95 w-80 lg:w-96 fixed right-0 top-0 z-[400] overflow-hidden shadow-[0_0_200px_rgba(0,0,0,1)] transition-transform duration-500 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-12 border-b-8 border-primary/30 flex flex-col items-center gap-8 bg-black relative">
          <div className="size-32 bg-black border-[10px] border-primary flex items-center justify-center shadow-[0_0_120px_rgba(255,0,0,1)] animate-neural shrink-0 rounded-[3rem] rotate-2 group overflow-hidden">
            <Ship className="size-16 text-primary group-hover:scale-125 transition-transform duration-500 shadow-3xl" />
            <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-headline font-bold text-white tracking-widest uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[14px] font-bold tracking-[0.6em] mt-4 py-2 px-8 uppercase italic shadow-2xl">v40.0_OMNISCIENT</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-8 py-12 space-y-4 overflow-y-auto scrollbar-hide bg-black/95 backdrop-blur-4xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-8 px-8 py-6 transition-all duration-700 group relative border-r-[10px] rounded-l-[3rem] mb-4",
                  isActive 
                    ? "bg-primary/30 border-primary text-white shadow-[0_0_60px_rgba(255,0,0,0.3)] scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("size-8 transition-all duration-500", isActive ? "text-primary shadow-[0_0_40px_red]" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-xl font-bold tracking-[0.2em] uppercase italic truncate drop-shadow-2xl">{item.name}</span>
                {isActive && (
                  <div className="absolute left-8 size-4 rounded-full bg-primary shadow-[0_0_40px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-8 border-t-8 border-primary/30 bg-black relative">
          <div className="p-8 border-[10px] border-red-600/90 bg-black/99 mb-8 relative overflow-hidden group rounded-[3.5rem] shadow-3xl">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-6">
                  <Ship className="size-8 text-red-600 animate-pulse" />
                  <span className="text-[14px] font-bold text-red-500 uppercase tracking-widest italic">Armada Pulse</span>
               </div>
               <Badge className="bg-red-600 text-white text-[12px] font-bold uppercase px-4 py-2 rounded-full shadow-2xl">OMNISCIENT_LEVEL</Badge>
            </div>
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border-4 border-white/20 p-1 shadow-inner">
              <div className="h-full bg-red-600 w-full shadow-[0_0_60px_red] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-6 px-8 py-6 text-muted-foreground hover:text-primary transition-all duration-1000 font-bold uppercase tracking-widest text-lg italic group bg-white/5 rounded-[3rem] border-4 border-white/10 hover:border-primary/60 shadow-3xl"
          >
            <Users className="size-8 group-hover:scale-125 text-red-500 transition-all shadow-[0_0_40px_red]" />
            ARMADA_SWARM_UPLINK
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/99 backdrop-blur-5xl z-[350] animate-in fade-in duration-1000"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
