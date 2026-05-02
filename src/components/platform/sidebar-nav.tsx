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
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { name: "Alpha Hub", icon: LayoutDashboard, href: "/" },
  { name: "Elite Alpha", icon: Terminal, href: "/terminal" },
  { name: "Shadow Grid", icon: Network, href: "/sessions" },
  { name: "Warrior Forge", icon: Baby, href: "/progeny" },
  { name: "Mobile Strike", icon: Smartphone, href: "/hardware" },
  { name: "Cyber Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
  { name: "Strike Arsenal", icon: ShieldX, href: "/red-team" },
  { name: "PsyOps Auto", icon: MessageSquare, href: "/social" },
  { name: "Mobile Link C2", icon: Radio, href: "/remote" },
  { name: "Warrior Status", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-black border-r-4 border-primary/40 w-64 fixed left-0 top-0 z-50 shadow-[20px_0_100px_rgba(208,0,0,0.1)]">
      <div className="p-10 border-b-2 border-primary/20 flex flex-col items-center gap-4 bg-primary/5">
        <div className="size-20 bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(208,0,0,0.5)] neural-pulse">
          <Skull className="size-12 text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-headline font-black text-white tracking-tighter uppercase italic leading-none">
            AL-MUIZZ
          </h1>
          <Badge className="bg-white text-black border-none rounded-none text-[8px] font-black tracking-[0.4em] mt-2 py-0.5 px-3">v ULTIMATE</Badge>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-8 space-y-3 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-5 transition-all duration-500 group relative border-l-4",
                isActive 
                  ? "bg-primary/20 border-primary text-white shadow-[inset_10px_0_30px_rgba(208,0,0,0.1)]" 
                  : "text-muted-foreground border-transparent hover:bg-primary/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5 transition-transform duration-700 group-hover:scale-125", isActive ? "text-primary" : "group-hover:text-primary")} />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase italic">{item.name}</span>
              {isActive && (
                <div className="absolute right-4 size-1.5 bg-primary animate-ping" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-8 border-t-2 border-primary/20 bg-primary/5">
        <div className="p-6 bg-black border-2 border-accent/30 mb-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-3">
                <Crown className="size-5 text-accent animate-pulse" />
                <span className="text-[10px] font-black text-accent uppercase tracking-widest italic">Al-Ghazali</span>
             </div>
          </div>
          <div className="flex justify-between items-center mb-2">
             <p className="text-[9px] text-white/60 font-black uppercase">Eternal Sync</p>
             <span className="text-[10px] text-primary font-black">100%</span>
          </div>
          <div className="h-2 w-full bg-white/5 p-0.5">
            <div className="h-full bg-primary w-full shadow-[0_0_15px_red]" />
          </div>
        </div>
        
        <Link 
          href="/system"
          className="flex items-center gap-4 px-4 py-3 text-muted-foreground hover:text-primary transition-all group font-black uppercase tracking-[0.3em] text-[9px] italic"
        >
          <Shield className="size-5 group-hover:rotate-12 transition-transform" />
          Manifest Essence
        </Link>
      </div>
    </div>
  )
}
