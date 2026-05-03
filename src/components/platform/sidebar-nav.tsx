
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
  { name: "Armada Strike", icon: Target, href: "/terminal" },
  { name: "Agent Swarm C2", icon: Users, href: "/sessions" },
  { name: "Mobile Armada", icon: SmartphoneNfc, href: "/remote" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Digital Twin Lab", icon: Workflow, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon Pulse", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault 3.0", icon: Database, href: "/knowledge" },
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
        className="lg:hidden fixed top-4 right-4 z-[500] bg-black/80 border-2 border-primary/60 text-primary hover:bg-primary/20 size-12 rounded-xl shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-8 border-primary/90 w-80 lg:w-96 fixed right-0 top-0 z-[400] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] transition-transform duration-500 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-10 border-b-4 border-primary/30 flex flex-col items-center gap-6 bg-black relative">
          <div className="size-24 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_80px_rgba(255,0,0,1)] animate-neural shrink-0 rounded-[2.5rem] rotate-3 group overflow-hidden">
            <Ship className="size-12 text-primary group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-3xl font-headline font-bold text-white tracking-widest uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[12px] font-bold tracking-[0.5em] mt-3 py-1.5 px-6 uppercase italic shadow-lg">v35.0_OVERLORD</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-6 py-10 space-y-3 overflow-y-auto scrollbar-hide bg-black/90 backdrop-blur-3xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-6 px-6 py-5 transition-all duration-500 group relative border-r-8 rounded-l-[2rem] mb-2",
                  isActive 
                    ? "bg-primary/20 border-primary text-white shadow-[0_0_40px_rgba(255,0,0,0.2)] scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("size-6 transition-all duration-500", isActive ? "text-primary shadow-[0_0_30px_red]" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-lg font-bold tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-6 size-3 rounded-full bg-primary shadow-[0_0_20px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-4 border-primary/30 bg-black relative">
          <div className="p-6 border-4 border-red-600/80 bg-black/98 mb-6 relative overflow-hidden group rounded-[2.5rem] shadow-2xl">
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-4">
                  <Ship className="size-6 text-red-600 animate-pulse" />
                  <span className="text-[12px] font-bold text-red-500 uppercase tracking-widest italic">Armada Readiness</span>
               </div>
               <Badge className="bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">5000% ARMED</Badge>
            </div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border-2 border-white/20 p-1 shadow-inner">
              <div className="h-full bg-red-600 w-full shadow-[0_0_40px_red] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-4 px-6 py-5 text-muted-foreground hover:text-primary transition-all duration-700 font-bold uppercase tracking-widest text-sm italic group bg-white/5 rounded-[2rem] border-2 border-white/10 hover:border-primary/50 shadow-2xl"
          >
            <Users className="size-6 group-hover:scale-125 text-red-500 transition-all shadow-[0_0_30px_red]" />
            SWARM_NEURAL_UPLINK
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/98 backdrop-blur-3xl z-[350] animate-in fade-in duration-700"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
