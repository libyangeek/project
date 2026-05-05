
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Workflow, 
  Play, 
  ShieldCheck, 
  AlertTriangle, 
  Terminal as TerminalIcon,
  Search,
  Activity,
  Zap,
  Box,
  Cpu,
  RefreshCcw,
  Bug
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"

export default function DigitalTwinPage() {
  const [mounted, setMounted] = React.useState(false)
  const [isSimulating, setIsSimulating] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [target, setTarget] = React.useState("")
  const [log, setLog] = React.useState<string[]>([])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const startSimulation = () => {
    if (!target) {
        toast({ variant: "destructive", title: "Missing Target", description: "Please enter a target to simulate." })
        return
    }
    setIsSimulating(true)
    setProgress(0)
    setLog(["Initializing Sandboxed Environment...", "Booting QEMU Instance...", "Mirroring Target Architecture..."])
    
    const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval)
                setIsSimulating(false)
                setLog(l => [...l, "Simulation Complete: Vulnerability Confirmed at 0x41414141", "Generating Mitigation Report..."])
                toast({ title: "Simulation Success", description: "Attack vector validated in sandbox." })
                return 100
            }
            if (prev % 20 === 0) {
                setLog(l => [...l, `Probing layers... ${prev}%`])
            }
            return prev + 5
        })
    }, 200)
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative bg-[radial-gradient(circle_at_top,rgba(0,150,255,0.1),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-cyan-600 text-white border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">VIRTUAL WAR-ROOM</Badge>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                    <Activity className="size-4 animate-pulse" /> SIMULATION ENGINE ACTIVE
                </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase">Digital <span className="text-cyan-500">Twin</span></h1>
            <p className="text-xl text-muted-foreground mt-4 italic max-w-3xl">
                "مختبر المحاكاة: اختبر استراتيجياتك في عالم افتراضي يطابق الواقع قبل شن الهجوم الحقيقي."
            </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="kali-card border-cyan-500/30 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl col-span-1">
                <CardHeader className="p-0 mb-8 border-b border-cyan-500/10 pb-6">
                    <CardTitle className="text-3xl text-cyan-400 flex items-center gap-4 font-bold uppercase italic">
                        <Settings className="size-8" /> Config
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-[0.5em] px-4">Target Identity</label>
                        <Input 
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            placeholder="IP or Binary Path..." 
                            className="bg-black border-2 border-cyan-500/20 h-16 rounded-[2rem] text-xl italic px-6 focus:border-cyan-500"
                        />
                    </div>
                    <Button 
                        disabled={isSimulating}
                        onClick={startSimulation}
                        className="w-full h-20 bg-cyan-600 hover:bg-cyan-700 text-white font-bold uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 transition-all"
                    >
                        {isSimulating ? <Loader2 className="size-8 animate-spin" /> : <Play className="size-8 mr-2" />}
                        START SIM
                    </Button>
                </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/80 rounded-[3rem] p-8 border-2 shadow-2xl col-span-2">
                <CardHeader className="p-0 mb-8 border-b border-white/10 pb-6">
                    <CardTitle className="text-3xl text-white flex items-center gap-4 font-bold uppercase italic">
                        <TerminalIcon className="size-8 text-cyan-500" /> Simulation Log
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                    {isSimulating && (
                        <div className="space-y-2 mb-8">
                            <div className="flex justify-between text-xs font-bold text-cyan-400 uppercase tracking-widest">
                                <span>Simulating...</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-white/5 [&>div]:bg-cyan-500" />
                        </div>
                    )}
                    <div className="bg-black/90 p-6 rounded-[2rem] font-code text-sm h-[300px] overflow-y-auto border border-cyan-500/10">
                        {log.map((line, i) => (
                            <div key={i} className="mb-2">
                                <span className="text-cyan-600 mr-4">[{new Date().toLocaleTimeString()}]</span>
                                <span className="text-white/80">{line}</span>
                            </div>
                        ))}
                        {log.length === 0 && <div className="text-white/20 italic uppercase tracking-widest text-center mt-20">Ready for Simulation</div>}
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[3rem] bg-cyan-900/10 border-2 border-cyan-500/20 flex items-center gap-6">
                <Cpu className="size-12 text-cyan-500" />
                <div>
                    <h4 className="font-bold uppercase text-white">QEMU Engine</h4>
                    <p className="text-xs text-muted-foreground">Virtualizing Target</p>
                </div>
            </div>
            <div className="p-8 rounded-[3rem] bg-cyan-900/10 border-2 border-cyan-500/20 flex items-center gap-6">
                <Bug className="size-12 text-cyan-500" />
                <div>
                    <h4 className="font-bold uppercase text-white">Debugger</h4>
                    <p className="text-xs text-muted-foreground">Monitoring Heaps</p>
                </div>
            </div>
            <div className="p-8 rounded-[3rem] bg-cyan-900/10 border-2 border-cyan-500/20 flex items-center gap-6">
                <ShieldCheck className="size-12 text-cyan-500" />
                <div>
                    <h4 className="font-bold uppercase text-white">FUD Check</h4>
                    <p className="text-xs text-muted-foreground">Evasion Verified</p>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
