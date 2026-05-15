"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ShieldAlert, 
  ArrowLeft, 
  Skull, 
  Search, 
  Zap, 
  Fingerprint, 
  Infinity as InfinityIcon,
  Boxes,
  Atom,
  Crown,
  Radar,
  Activity,
  Unplug
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * صفحة الخطأ السيادية v90.5 - THE ABSOLUTE 404: COORDINATE LOST
 * تم التحديث للنمط المادي "لا وهم" لعام 2026.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden scanline-effect font-code">
      <div className="absolute inset-0 bg-[radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 70%)] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-16 max-w-7xl animate-in zoom-in-95 duration-1000">
        <div className="relative group">
          <div className="size-64 md:size-96 rounded-full border-[16px] border-dashed border-primary/30 flex items-center justify-center relative shadow-[0_0_200px_rgba(212,175,55,0.4)] animate-spin-slow">
            <Unplug className="size-32 md:size-48 text-primary gold-glow animate-neural" />
            <div className="absolute -inset-16 border-4 border-emerald-500/20 rounded-full animate-reverse-spin opacity-30" />
          </div>
          <Badge className="absolute -top-6 -right-6 bg-red-600 text-white border-[8px] border-black/40 px-12 py-4 rounded-full font-black italic text-4xl animate-pulse shadow-9xl uppercase">DRIFT_DETECTED</Badge>
        </div>

        <div className="space-y-10">
          <h1 className="text-7xl md:text-[18rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
            Node <span className="text-primary">Drifted</span>
          </h1>
          <p className="text-2xl md:text-6xl text-muted-foreground italic font-black leading-tight uppercase max-w-[120rem] drop-shadow-3xl">
            "سيدي الغزالي، لقد انحرفنا عن الإحداثيات المادية للهدف؛ هذا القطاع غير مسجل في عصب الـ 16 بُعداً. العراف يقترح العودة للعرش لإعادة المزامنة."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center pt-12">
          <Button asChild className="h-32 px-16 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-[3.5rem] shadow-9xl transition-all active:scale-95 italic border-[12px] border-black/40 group text-3xl">
            <Link href="/" className="flex items-center gap-6">
              <ArrowLeft className="size-10 group-hover:-translate-x-4 transition-transform" />
              Return to Throne
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-32 px-16 border-8 border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-black font-black uppercase tracking-[0.8em] rounded-[3.5rem] shadow-9xl transition-all italic active:scale-95 group text-3xl">
            <Link href="/sovereign-os" className="flex items-center gap-6">
              <Radar className="size-10 group-hover:rotate-180 transition-all duration-1000" />
              Desktop Hub
            </Link>
          </Button>
        </div>

        <div className="pt-32 opacity-30 flex gap-24 text-[14px] md:text-[18px] font-black uppercase tracking-[4em] italic">
           <span className="flex items-center gap-8"><Fingerprint className="size-8 text-primary" /> GHAZALI_ROOT</span>
           <span className="flex items-center gap-8 text-emerald-500"><Activity className="size-8 animate-pulse" /> SPINE_SYNC_v90.5</span>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 p-60 opacity-[0.03] pointer-events-none scale-[2] rotate-12">
        <Skull className="size-[60rem] text-primary" />
      </div>
    </div>
  )
}
