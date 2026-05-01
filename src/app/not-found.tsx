
"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldAlert, ArrowLeft, Terminal, Zap, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview واجهة الخطأ السيادية v17.2
 * تظهر عندما يحاول القائد الوصول لإحداثيات غير موجودة في النظام.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* التأثيرات الخلفية السيادية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(170,76,255,0.05),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
      
      {/* أيقونات ديكورية باهتة */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none">
        <Fingerprint className="size-96 text-primary" />
      </div>

      <div className="text-center z-10 animate-in fade-in zoom-in-95 duration-700">
        <div className="flex justify-center mb-8">
          <div className="size-32 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_70px_rgba(170,76,255,0.2)] group hover:scale-110 transition-transform duration-500">
            <ShieldAlert className="size-16 text-primary animate-pulse group-hover:text-red-500 transition-colors" />
          </div>
        </div>

        <div className="space-y-2 mb-8">
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 px-4 py-1 text-[10px] uppercase font-bold tracking-[0.4em]">
            SYSTEM ALERT: COORDINATE PURGED
          </Badge>
          <h1 className="text-7xl md:text-9xl font-headline font-bold text-white tracking-tighter italic">
            404 <span className="text-primary">LOST</span>
          </h1>
        </div>

        <p className="text-muted-foreground max-w-lg mx-auto mb-14 text-xl italic leading-relaxed font-medium">
          "عذراً أيها القائد، الإحداثيات المطلوبة غير مدرجة في <span className="text-primary font-bold">المانيفست العصبي</span> للنظام. يبدو أن البيانات قد تم تطهيرها أو أنك تحاول الوصول لمنطقة خارج السيادة."
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild className="h-16 px-10 bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-[0_10px_40px_rgba(170,76,255,0.3)] font-bold uppercase tracking-widest text-xs group transition-all">
            <Link href="/">
              <ArrowLeft className="size-5 mr-3 group-hover:-translate-x-2 transition-transform" />
              Operational Command
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 px-10 border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all">
            <Link href="/terminal">
              <Terminal className="size-5 mr-3 text-primary" />
              Access Neural Hub
            </Link>
          </Button>
        </div>
      </div>

      {/* شريط الحالة السفلي */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="flex gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1 h-4 bg-primary/40 rounded-full" style={{ animation: `pulse 1.5s infinite ${i * 0.1}s` }} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Zap className="size-3 text-primary animate-pulse" />
          <span className="text-[10px] text-white uppercase font-bold tracking-[0.5em]">Al-Mu'izz OS v17.2.0-ULTIMATE</span>
        </div>
      </div>
    </div>
  )
}
