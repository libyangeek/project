
"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Target, 
  Users, 
  SmartphoneNfc, 
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
  ShieldAlert
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "The Throne", icon: LayoutDashboard, href: "/" },
  { name: "Divine Strike", icon: Target, href: "/terminal" },
  { name: "Armada Swarm", icon: Users, href: "/sessions" },
  { name: "MCP Bridge", icon: Share2, href: "/mcp-bridge" },
  { name: "Voice Command", icon: SmartphoneNfc, href: "/remote" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Digital Twin", icon: Workflow, href: "/digital-twin" },
  { name: "Field Agent", icon: ShieldAlert, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Omniscient Recon", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault", icon: Database, href: "/knowledge" },
  { name: "Polymorph Lab", icon: ShieldX, href: "/red-team" },
  { name: "Social Intel", icon: MessageSquare, href: "/social" },
  { name: "System Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

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
            <Badge className="bg-primary text-black border-none rounded-full text-[10px] font-bold tracking-[0.4em] mt-3 py-1 px-6 uppercase italic shadow-xl">v42.0 SINGULARITY</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-6 py-8 space-y-1 overflow-y-auto scrollbar-hide bg-black/95">
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
                <Icon className={cn("size-5 transition-all duration-500", isActive ? "text-primary gold-glow" : "group-hover:text-primary group-hover:rotate-6")} />
                <span className="text-sm font-bold tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-6 size-2 rounded-full bg-primary shadow-xl animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/20 bg-black relative">
          <div className="p-4 border-2 border-primary/40 bg-black/60 mb-4 relative overflow-hidden group rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-4">
                  <Share2 className="size-4 text-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest italic">MCP Bridge</span>
               </div>
               <Badge className="bg-primary text-black text-[9px] font-bold uppercase px-3 py-0.5 rounded-full">LIVE</Badge>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
              <div className="h-full bg-primary w-full shadow-xl animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/terminal"
            className="flex items-center justify-center gap-4 px-6 py-3 text-muted-foreground hover:text-primary transition-all duration-1000 font-bold uppercase tracking-widest text-xs italic group bg-white/5 rounded-xl border-2 border-white/5 hover:border-primary/40 shadow-xl"
          >
            <Zap className="size-5 group-hover:scale-110 text-primary transition-all" />
            INITIATE
          </Link>
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
