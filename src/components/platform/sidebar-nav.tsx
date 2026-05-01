"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Database, 
  ShieldAlert, 
  Search, 
  MessageSquare, 
  Settings, 
  Activity,
  Zap,
  Smartphone,
  ShieldX
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Terminal Hub", icon: Terminal, href: "/terminal" },
  { name: "Mobile Ops", icon: Smartphone, href: "/hardware" },
  { name: "Cyber Recon", icon: Search, href: "/recon" },
  { name: "Knowledge Base", icon: Database, href: "/knowledge" },
  { name: "Red Team Ops", icon: ShieldX, href: "/red-team" },
  { name: "Social Auto", icon: MessageSquare, href: "/social" },
  { name: "System Status", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-card/50 border-r border-white/5 backdrop-blur-3xl w-64 fixed left-0 top-0 z-50">
      <div className="p-8 border-b border-white/5 flex items-center gap-3">
        <div className="size-10 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(170,76,255,0.4)]">
          <Zap className="size-6 text-white fill-current" />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-white tracking-tight leading-tight">
            ARBITER <span className="text-primary italic">AI</span>
          </h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">AL-MUIZZ OS</p>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "bg-primary text-white shadow-2xl shadow-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
              <span className="text-sm font-bold tracking-tight">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white rounded-r-full shadow-[0_0_10px_white]" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/5 mb-6 relative group overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-2 mb-3">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Engine Online</span>
          </div>
          <p className="text-[11px] text-white font-bold mb-3 italic">Al-Mu'izz Neural v17.5</p>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div className="h-full bg-primary w-[92%] animate-pulse" />
          </div>
        </div>
        
        <Link 
          href="/settings"
          className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-primary transition-all group"
        >
          <Settings className="size-5 group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Settings</span>
        </Link>
      </div>
    </div>
  )
}
