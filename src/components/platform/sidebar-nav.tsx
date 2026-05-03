
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
  Dna
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Omniscient Throne", icon: LayoutDashboard, href: "/" },
  { name: "Omniscient Strike", icon: Target, href: "/terminal" },
  { name: "C2 Matrix Grid", icon: Radio, href: "/sessions" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Field Agent Omni", icon: BrainCircuit, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon Pulse", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault 2.0", icon: Database, href: "/knowledge" },
  { name: "Exploit Lab v30", icon: ShieldX, href: "/red-team" },
  { name: "Social Intelligence", icon: MessageSquare, href: "/social" },
  { name: "System God Pulse", icon: Activity, href: "/system" },
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
        "flex flex-col h-full bg-black border-l-4 border-primary/90 w-72 lg:w-80 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 border-b-2 border-primary/30 flex flex-col items-center gap-4 bg-black relative">
          <div className="size-20 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,1)] animate-neural shrink-0 rounded-2xl rotate-3 group">
            <Skull className="size-10 text-primary group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-2xl font-headline font-bold text-white tracking-widest uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[10px] font-bold tracking-widest mt-2 py-1 px-4 uppercase italic">v30.0_CONQUEROR</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-hide bg-black/80 backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 transition-all duration-300 group relative border-r-4 rounded-l-xl mb-1",
                  isActive 
                    ? "bg-primary/20 border-primary text-white shadow-inner scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("size-5 transition-all duration-300", isActive ? "text-primary shadow-[0_0_20px_red]" : "group-hover:text-primary group-hover:rotate-6")} />
                <span className="text-sm font-bold tracking-wider uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-4 size-2 rounded-full bg-primary shadow-[0_0_10px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t-2 border-primary/30 bg-black relative">
          <div className="p-4 border-2 border-red-600/80 bg-black/98 mb-4 relative overflow-hidden group rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2">
                  <Bomb className="size-4 text-red-600 animate-pulse" />
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest italic">Global Conquest</span>
               </div>
               <Badge className="bg-red-600 text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">2500% ARMED</Badge>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/20 p-0.5">
              <div className="h-full bg-red-600 w-full shadow-[0_0_20px_red] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary transition-all duration-300 font-bold uppercase tracking-widest text-xs italic group bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 shadow-md"
          >
            <Server className="size-4 group-hover:scale-110 text-red-500 transition-all shadow-[0_0_20px_red]" />
            OMNISCIENT_PULSE
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[350] animate-in fade-in duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
