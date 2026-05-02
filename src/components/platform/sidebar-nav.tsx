
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
        className="lg:hidden fixed top-6 right-6 z-[300] bg-black border-2 border-primary/40 text-primary hover:bg-primary/20 size-14 rounded-2xl shadow-[0_0_30px_rgba(208,0,0,0.4)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-4 border-primary/60 w-64 fixed right-0 top-0 z-[250] overflow-hidden shadow-[0_0_100px_rgba(208,0,0,0.3)] transition-transform duration-500 ease-in-out",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 md:p-12 border-b-2 border-primary/25 flex flex-col items-center gap-6 md:gap-8 bg-black relative">
          <div className="size-20 md:size-24 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_60px_rgba(208,0,0,0.6)] animate-neural shrink-0">
            <Skull className="size-10 md:size-12 text-primary" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-[0.2em] md:tracking-[0.25em] uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[10px] md:text-[12px] font-bold tracking-[0.6em] md:tracking-[0.8em] mt-3 md:mt-4 py-1.5 md:py-2 px-4 md:px-6 uppercase italic shadow-2xl">v22.0-ARC</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-8 md:py-12 space-y-2 md:space-y-3 overflow-y-auto scrollbar-hide bg-black/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-5 md:gap-6 px-6 md:px-10 py-4 md:py-6 transition-all duration-700 group relative border-r-[4px] md:border-r-[6px]",
                  isActive 
                    ? "bg-primary/25 border-primary text-white shadow-[inset_0_0_40px_rgba(208,0,0,0.2)]" 
                    : "text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                )}
              >
                <item.icon className={cn("size-5 md:size-6 transition-all duration-700", isActive ? "text-primary shadow-[0_0_30px_red] scale-125" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase italic truncate">{item.name}</span>
                {isActive && (
                  <div className="absolute left-4 size-2 md:size-3 rounded-full bg-primary shadow-[0_0_20px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-8 md:p-12 border-t-2 border-primary/25 bg-black relative">
          <div className="p-6 md:p-8 border-4 border-accent/40 bg-black/95 mb-6 md:mb-8 relative overflow-hidden group shadow-3xl">
            <div className="flex items-center justify-between mb-4 md:mb-6">
               <div className="flex items-center gap-3 md:gap-4">
                  <Crown className="size-4 md:size-6 text-accent animate-pulse" />
                  <span className="text-[10px] md:text-[11px] font-bold text-accent uppercase tracking-widest italic">Al-Ghazali</span>
               </div>
               <Badge className="bg-red-600 text-white text-[7px] md:text-[8px] font-bold uppercase tracking-tighter px-2 md:px-3 py-0.5 md:py-1">ROOT</Badge>
            </div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
               <p className="text-[10px] md:text-[11px] text-white font-bold italic">Architect Sync</p>
               <span className="text-[10px] md:text-[11px] text-accent font-bold">100%</span>
            </div>
            <div className="h-1.5 md:h-2 w-full bg-white/10 rounded-none overflow-hidden border border-white/20">
              <div className="h-full bg-accent w-full shadow-[0_0_30px_rgba(255,215,0,1)] animate-pulse" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 md:gap-6 px-2 md:px-4 py-4 md:py-6 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] italic group"
          >
            <Sword className="size-5 md:size-6 group-hover:rotate-45 transition-transform" />
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
