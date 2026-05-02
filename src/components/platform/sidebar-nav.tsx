
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
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Terminal Hub", icon: LayoutDashboard, href: "/" },
  { name: "Alpha Core", icon: Terminal, href: "/terminal" },
  { name: "Sovereign Codex", icon: BookOpen, href: "/codex" },
  { name: "Hive Sessions", icon: Network, href: "/sessions" },
  { name: "Warrior Forge", icon: Baby, href: "/progeny" },
  { name: "Mobile Strike", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
  { name: "Exploit Lab", icon: ShieldX, href: "/red-team" },
  { name: "Social Intel", icon: MessageSquare, href: "/social" },
  { name: "C2 Mobile", icon: Radio, href: "/remote" },
  { name: "System Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 right-4 z-[300] bg-black border-2 border-primary/40 text-primary hover:bg-primary/20 size-12 rounded-xl shadow-[0_0_20px_rgba(208,0,0,0.4)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-4 border-primary/60 w-64 fixed right-0 top-0 z-[250] overflow-hidden shadow-[0_0_100px_rgba(208,0,0,0.3)] transition-transform duration-500 ease-in-out",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 border-b-2 border-primary/25 flex flex-col items-center gap-4 bg-black relative">
          <div className="size-16 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_40px_rgba(208,0,0,0.6)] animate-neural shrink-0">
            <Skull className="size-8 text-primary" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-xl font-headline font-bold text-white tracking-[0.2em] uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[8px] font-bold tracking-[0.6em] mt-2 py-1 px-3 uppercase italic shadow-2xl">v22.0-ARC</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-2 py-6 space-y-1 overflow-y-auto scrollbar-hide bg-black/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-6 py-3 transition-all duration-700 group relative border-r-[4px]",
                  isActive 
                    ? "bg-primary/25 border-primary text-white shadow-[inset_0_0_20px_rgba(208,0,0,0.2)]" 
                    : "text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                )}
              >
                <item.icon className={cn("size-5 transition-all duration-700", isActive ? "text-primary shadow-[0_0_20px_red] scale-125" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-3 size-1.5 rounded-full bg-primary shadow-[0_0_15px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/25 bg-black relative">
          <div className="p-4 border-4 border-accent/40 bg-black/95 mb-4 relative overflow-hidden group shadow-3xl">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2">
                  <Crown className="size-4 text-accent animate-pulse" />
                  <span className="text-[9px] font-bold text-accent uppercase tracking-widest italic">Al-Ghazali</span>
               </div>
               <Badge className="bg-red-600 text-white text-[7px] font-bold uppercase tracking-tighter px-2 py-0.5">ROOT</Badge>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-none overflow-hidden border border-white/20">
              <div className="h-full bg-accent w-full shadow-[0_0_20px_rgba(255,215,0,1)] animate-pulse" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 px-2 py-3 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.4em] text-[9px] italic group"
          >
            <Sword className="size-5 group-hover:rotate-45 transition-transform" />
            Architect Pulse
          </Link>
        </div>
      </div>
      
      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[240]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
